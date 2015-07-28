var gulp       = require('gulp'),
    browserify = require('browserify'),
    paths      = require('../package.json');


/////// BROWSERIFY BUNDLE
gulp.task( 'browserify', function(){

  return browserify( paths.directories.src.js+'main.js' )
          .bundle()
          .pipe(source('bundle.js'))
          .pipe(gulp.dest( paths.directories.src.js ));

});
