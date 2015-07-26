var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    postcss      = require('gulp-postcss'),
    cssnano      = require('gulp-cssnano'),
    autoprefixer = require('autoprefixer'),
    paths        = require('../package.json');


gulp.task( 'compile-sass', function(){

 var postProcessors = [ autoprefixer({ browsers: [ 'last 4 versions', '> 5%' ] }) ]

  return gulp.src( paths.directories.src.css+'core.sass' )
          .pipe(sass())
          .pipe(postcss(postProcessors))
          .pipe(cssnano())
          .pipe(gulp.dest( paths.directories.dist.css ))

});