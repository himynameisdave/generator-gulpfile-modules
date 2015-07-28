var gulp       = require('gulp'),
    requireDir = require('require-dir'),
    tasks      = requireDir('./gulp/'),
    pkg        = require('./package.json');

<% if( mainTasks.def.length > -1 ) { %>
  gulp.task( 'default', [ <% mainTasks.def.forEach(function(task, i){ %>'<%- task %>'<% if( i < mainTasks.def.length-1 ){ %>, <% } }) %> ]);
<% } %>
<% if( mainTasks.dev.length > -1 ) { %>
  gulp.task( 'dev', [ <% mainTasks.dev.forEach(function(task, i){ %>'<%- task %>'<% if( i < mainTasks.dev.length-1 ){ %>, <% } }) %> ]);
<% } %>
