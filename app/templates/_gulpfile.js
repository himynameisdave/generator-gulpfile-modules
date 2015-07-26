var gulp       = require('gulp'),
    requireDir = require('require-dir'),
    tasks      = requireDir('./gulp/');



gulp.task( 'default', [ <% if( tasks.indexOf('server') > -1 ){ %>'server'<% }; %> ]);
