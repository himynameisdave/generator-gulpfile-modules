var gulp = require('./gulp')([
    <% tasks.forEach(function(task, i){ %>'<%- task %>'<% if( i < tasks.length-1 ){ %>,
    <% }; }); %>
]);


// gulp.task('build', ['browserify', 'compass', 'images']);
// gulp.task('default', ['build', 'watch', 'serve', 'open']);