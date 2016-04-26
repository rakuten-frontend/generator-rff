// Prepare for grunt-usemin task
//
// This module requires "usemin" task.
// grunt-usemin: <https://github.com/yeoman/grunt-usemin>

'use strict';

module.exports = {
  options: {
    root: [
      '<%%= path.tmp %>',
      '<%%= path.app %>',
      '.'
    ],
    dest: '<%%= path.dist %>',
    flow: {
      steps: {
        css: ['concat'<% if (cfg.cssmin) { %>, 'cssmin'<% } %>],
        js: ['concat'<% if (cfg.uglify) { %>, 'uglifyjs'<% } %>]
      },
      post: {}
    }
  },

  // Parse settings from target HTML code
  html: ['<%%= path.dist %>/**/*.html']
};
