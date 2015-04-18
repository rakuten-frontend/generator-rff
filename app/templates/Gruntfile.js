// Grunt base configuration
//
// This Gruntfile.js is based on "load-grunt-config" module.
// Config files are separated and put into `grunt/` directory.
// load-grant-config: <https://github.com/firstandthird/load-grunt-config>

'use strict';

module.exports = function (grunt) {

  // Display the execution time.
  require('time-grunt')(grunt);

  // Initialize with "load-grunt-config".
  require('load-grunt-config')(grunt, {

    // Define variables for grunt config here.
    config: {
      path: {
        app:        'app',
        dist:       'dist',
        distIgnore: '**/_*/**',     // Excluded directories or files of distribution, e.g. Sass directory.
        tmp:        '.tmp/dist'<% if (cfg.testing) { %>,
        test:       'test'<% } %>,
        markups:    'app'<% if (cfg.css) { %>,
        styles:     'app/css'<% } %><% if (cfg.sass || cfg.libsass) { %>,
        styles:     'app/_sass'<% } %><% if (cfg.less) { %>,
        styles:     'app/_less'<% } %><% if (cfg.stylus) { %>,
        styles:     'app/_stylus'<% } %><% if (cfg.js) { %>,
        scripts:    'app/js'<% } %><% if (cfg.coffee) { %>,
        scripts:    'app/_coffee'<% } %>,
        images:     'app/img'<% if (cfg.sprite) { %>,
        sprites:    'app/img/_sprites'<% } %><% if (cfg.webfont) { %>,
        glyphs:     'app/img/_glyphs'<% } %><% if (cfg.html) { %>,
        html:       'app'<% } else { %>,
        html:       '.tmp/dist'<% } %><% if (cfg.css && !cfg.autoprefixer ) { %>,
        css:        'app/css'<% } else { %>,
        css:        '.tmp/dist/css'<% } %><% if (cfg.js) { %>,
        js:         'app/js'<% } else { %>,
        js:         '.tmp/dist/js'<% } %>,
        template:   'app/_template/template.html',
        pdf:        'pdf'
      }
    }

  });

  // Load additional plugins.
  grunt.loadNpmTasks('main-bower-files');

};
