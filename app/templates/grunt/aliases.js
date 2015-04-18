// Register Grunt tasks
//
// Manage grunt tasks here instead of `grunt.registerTask`.
// Refer: <https://github.com/firstandthird/load-grunt-config#aliases>

'use strict';

var grunt = require('grunt');

module.exports = {

  // Generate precompiled resources
  compile: [
    'clean:tmp',
    'wiredep'<% if (cfg.sprite) { %>,
    'sprite'<% } %><% if (cfg.webfont) { %>,
    'webfont'<% } %><% if (cfg.jade) { %>,
    'jade'<% } %><% if (cfg.sass || cfg.libsass) { %>,
    'sass'<% } %><% if (cfg.less) { %>,
    'less'<% } %><% if (cfg.stylus) { %>,
    'stylus'<% } %><% if (cfg.coffee) { %>,
    'newer:coffee'<% } %><% if (cfg.autoprefixer) { %>,
    'autoprefixer'<% } %>,
    'markdown'
  ],

  // Start localhost server
  serve: function (target) {
    if (target === 'dist') {
      grunt.task.run([
        'browserSync:dist'
      ]);
    }
    else {
      grunt.task.run([
        'compile',
        'browserSync:app',
        'watch'
      ]);
    }
  },

  // Validate and test
  test: function (target) {<%
      var testTasks = [];
      if (cfg.validation) { testTasks.push('newer:validation'); }
      if (cfg.csslint)    { testTasks.push('newer:csslint'); }
      if (cfg.jshint)     { testTasks.push('newer:jshint'); }
      if (cfg.jscs)       { testTasks.push('newer:jscs'); }
      if (cfg.mocha)      { testTasks.push('browserSync:test', 'mocha'); }
      if (cfg.jasmine)    { testTasks.push('jasmine'); } %>
    if (target !== 'skip-compile') {
      grunt.task.run([
        'compile'
      ]);
    }
    grunt.task.run([<% testTasks.forEach(function (task, index) { %>
      '<%= task %>'<% if (index !== testTasks.length - 1) { %>,<% }}); %>
    ]);
  },

  // Build and distribute files
  build: function (target) {
    if (target !== 'skip-compile') {
      grunt.task.run([
        'compile'
      ]);
    }
    grunt.task.run([
      'clean:dist',
      'copy:dist',
      'bower',
      'imagemin',
      'useminPrepare',
      'concat'<% if (cfg.cssmin) { %>,
      'cssmin'<% } %><% if (cfg.uglify) { %>,
      'uglify'<% } %><% if (cfg.modernizr) { %>,
      'modernizr'<% } %><% if (cfg.rev) { %>,
      'filerev'<% } %>,
      'usemin'<% if (cfg.htmlmin) { %>,
      'htmlmin'<% } %>
    ]);
  },

  // Generate PDF file from markdown
  pdf: [
    'compile',
    'markdownpdf'
  ],

  // Default `grunt` alias
  default: [
    'compile',
    'test:skip-compile',
    'build:skip-compile'
  ]

};
