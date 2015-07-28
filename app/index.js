'use strict';
var yeoman = require('yeoman-generator'),
    chalk  = require('chalk'),
    fs     = require('fs'),
    loggit = require('loggit'),
    mkdirp = require('mkdirp'),
    banner = require('./modules/banner.js'),
    tasks  = require('./modules/tasks.js');




module.exports = yeoman.generators.Base.extend({
  prompting: function () {

    var done = this.async(),
        taskChoices = [],
        optionsList = this.options['list'];

    //  Say hello
    this.log(banner);

    //  if they need a list, we will write out this line
    if(optionsList)
      this.log("The following tasks are available:")//  Explain what task options are available
    else
      this.log("\nIf you want to see a list of available tasks, run this generator with --list\n")//  letting the user know they can get a list of tasks

    // loop thru tasks to setup prompts
    tasks.forEach( function( task, i ){
      //  store the task names for later use
      taskChoices.push(task.name)
      if(optionsList)
        console.log("TASK: "+task.name+"\n        |--> "+task.desc);
    });

    //  actually deliver the prompt
    var prompts = [{
          type:    'checkbox',
          name:    'tasks',
          message: 'Which tasks would you like to use?',
          choices: taskChoices
        }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  setMainTasks: function(){
    //  build out the 'default', 'dev', and 'build' task lists
    var mainTasks = {};

    //  default tasks config
      mainTasks.def = this.props.tasks.filter(function( task ){
        return task === 'server' ? task : false;
      })
    //  dev tasks config
      mainTasks.dev = this.props.tasks.filter(function( task ){
        var devTasks = [ 'compile-less', 'compile-sass', 'compile-coffee', 'browserify' ];
        return devTasks.indexOf( task ) > 0 ? task : false;
      });
    //  build tasks config GOES HERE:

    //  set our high-level props to hold the task data too
    this.props.mainTasks = mainTasks;

  },

  packageJson: function () {

    //  get a project name if we can
    var projectName = this.destinationRoot().split('/');
        projectName = projectName[ projectName.length - 1];

    //  our package
    var pkg = {
      name:         projectName,
      description:  "",
      version:      "0.0.0",
      main:         "server.js",
      author:       "",
      licence:      "MIT"
    },
    destination = this.destinationPath('package.json');

    //  see if there is already a package.json
    //  if there is, we'll append it with some path info
    if( fs.existsSync(destination) )
      pkg = JSON.parse(fs.readFileSync( destination ));


    //  set the directories
    pkg.directories = {
      src: {
        css: './src/css/',
        js:  './src/js/',
        img: './src/img/'
      },
      dist: {
        css: './dist/css/',
        js:  './dist/js/',
        img: './dist/img/'
      }
    }

    //  build out the devDependencies property
    var devDeps = {
      "require-dir": "*"
    };
    tasks.forEach(function( task, i ){
      if( this.props.tasks.indexOf(task.name) > -1 ){
        task.deps.forEach(function(dep){
          if( !devDeps[dep] )
            devDeps[dep] = "*"
        })
      }
    }.bind(this));
    //  actually set our dev deps in the pkg.json we're building
    pkg.devDependencies = devDeps;

    //  write our new package.json file
    loggit("Attempting to write directories your package.json file!", "green", "=");
    this.write( destination, JSON.stringify(pkg, null, 2) );

  },

  buildGulp: function () {

    var done = this.async()

    //  templates out the gulpfile.js
    this.template( '_gulpfile.js', 'gulpfile.js', this.props );

    //  make the tasks folder
    mkdirp( 'gulp/', function(){
      done();
    }.bind(this) );

  },

  buildTasks: function(){

    var done = this.async();

    this.props.tasks.forEach(function( task, i ){
      this.copy( 'tasks/_'+task+'.js', 'gulp/'+task+'.js' );

      done();
    }.bind(this));

  },

  install: function () {

    loggit("You should run `npm i` to install all those dependencies! ", "cyan")
    // this.installDependencies();

  }
});
