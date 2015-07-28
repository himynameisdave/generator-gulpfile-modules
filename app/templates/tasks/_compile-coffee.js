var gulp         = require('gulp'),
    coffee       = require('gulp-coffee'),
    lint         = require('gulp-coffeelint'),
    stylish      = require('coffeelint-stylish'),
    paths        = require('../package.json');

gulp.task( 'compile-coffee', function(){

  return gulp.src( paths.directories.src.js+'**/*.coffee' )
          .pipe( lint() )
          .pipe( lint.reporter(stylish) )
          .pipe( coffee({ bare: true }).on('error', console.log( "Error compiling CoffeeScript files!" )) )
          .pipe( gulp.dest( paths.directories.src.js ) );

});
