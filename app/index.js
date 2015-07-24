'use strict';
var yeoman = require('yeoman-generator'),
    chalk  = require('chalk'),
    banner = require('./modules/banner.js'),
    tasks  = require('./modules/tasks.js');




module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    //  Say hello
    this.log(banner);
    //  Explain what task options are available
    this.log("The following tasks are available:")

    var taskChoices = [];
    // loop thru tasks to setup prompts
    tasks.forEach( function( task, i ){
      //  store the task names for later use
      taskChoices.push(task.name)
      console.log("Task:  "+task.name+"\n      ---> "+task.desc);
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

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
