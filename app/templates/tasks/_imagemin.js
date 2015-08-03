var gulp     = require('gulp'),
    imagemin = require('imagemin')
    paths    = require('../package.json');


gulp.task( 'imagemin', function(){

  return gulp.src( paths.directories.src.img+"/**/*" )
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest( paths.directories.dist.img ));

});