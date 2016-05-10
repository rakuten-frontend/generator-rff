// Copy files and folders
//
// grunt-contrib-copy: <https://github.com/gruntjs/grunt-contrib-copy>

'use strict';

module.exports = {
  dist: {
    files: [
      // Static files
      {
        expand: true,
        dot: true,
        cwd: '<%%= path.app %>',
        dest: '<%%= path.dist %>',
        filter: 'isFile',   // Ignore empty folders.
        src: [
          '**',
          '!<%%= path.distIgnore %>',<% if (cfg.pug) { %>
          '!**/*.{pug,jade}',<% } %>
          '!**/.DS_Store',
          '!**/*.{css,js}'  // Ignore CSS and JavaScript because they are compiled in usemin task.
        ]
      }<% if (!cfg.html || cfg.sprite || cfg.webfont) { %>,
      // Precompiled files
      {
        expand: true,
        cwd: '<%%= path.tmp %>',
        dest: '<%%= path.dist %>',
        src: [<% if (!cfg.html) { %>
          '**/*.html',<% } %><% if (cfg.sprite) { %>
          'img/*.png',<% } %><% if (cfg.webfont) { %>
          'fonts/*.{eot,woff,ttf,svg}',<% } %>
          '!<%%= path.distIgnore %>'
        ]
      }<% } %>
    ]
  }
};
