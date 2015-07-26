var gulp        = require('gulp'),
    connect     = require('gulp-connect'),
    port        = 6969;

//  Server, using Connect
gulp.task( 'server', function(){

  connect.server({
          root: './',
          port: 6969
        });

});
