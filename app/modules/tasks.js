var tasks = [
  {
    name: "server",
    desc: "Sets up a basic server using Connect.",
    deps: [
            "gulp",
            "gulp-connect"
          ]
  },{
    name: "compile-less",
    desc: "Compile your LESS files.",
    deps: [
            "gulp",
            "gulp-less",
            "autoprefixer",
            "gulp-cssnano",
            "gulp-postcss"
          ]
  },{
    name: "compile-sass",
    desc: "Compile your Sass files.",
    deps: [
            "gulp",
            "gulp-sass",
            "autoprefixer",
            "gulp-cssnano",
            "gulp-postcss"
          ]
  },{
    name: "browserify",
    desc: "Bundles your JS modules into a single file.",
    deps: [
            "gulp",
            "browserify"
          ]
  }
];


module.exports = tasks;
