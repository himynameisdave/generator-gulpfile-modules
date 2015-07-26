var gulp         = require('gulp'),
    less         = require('gulp-less'),
    postcss      = require('gulp-postcss'),
    cssnano      = require('gulp-cssnano'),
    autoprefixer = require('autoprefixer'),
    paths        = require('../package.json');


gulp.task( 'compile-less', function(){

 var postProcessors = [ autoprefixer({ browsers: [ 'last 4 versions', '> 5%' ] }) ]

  return gulp.src( paths.directories.src.css+'core.less' )
          .pipe(less())
          .pipe(postcss(postProcessors))
          .pipe(cssnano())
          .pipe(gulp.dest( paths.directories.dist.css ))

});