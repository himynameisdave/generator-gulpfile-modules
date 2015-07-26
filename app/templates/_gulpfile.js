var gulp       = require('gulp'),
    requireDir = require('require-dir'),
    tasks      = requireDir('./gulp/'),
    pkg        = require('./package.json');


<% if( mainTasks.def.length > -1 ) { %>
  gulp.task( 'default', [ <% mainTasks.def.forEach(function(task){ %>'<%- task %>'<% }) %> ]);
<% } %>

<% if( mainTasks.dev.length > -1 ) { %>
  gulp.task( 'dev', [ <% mainTasks.dev.forEach(function(task){ %><%- task %><% }) %> ]);
<% } %>
