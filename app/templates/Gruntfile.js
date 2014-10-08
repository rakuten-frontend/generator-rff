// Grunt base configuration

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
                src:        'src',
                dist:       'dist',
                distIgnore: '**/_*/**',     // Excluded directories or files of distribution, e.g. Sass directory.
                tmp:        '.tmp/dist'<% if (cfg.testing) { %>,
                test:       'test'<% } %>,
                markups:    'src'<% if (cfg.ssi) { %>,
                includes:   'src/inc'<% } %><% if (cfg.css) { %>,
                styles:     'src/css'<% } %><% if (cfg.sass || cfg.libsass) { %>,
                styles:     'src/_sass'<% } %><% if (cfg.less) { %>,
                styles:     'src/_less'<% } %><% if (cfg.stylus) { %>,
                styles:     'src/_stylus'<% } %><% if (cfg.js) { %>,
                scripts:    'src/js'<% } %><% if (cfg.coffee) { %>,
                scripts:    'src/_coffee'<% } %>,
                images:     'src/img'<% if (cfg.sprite) { %>,
                sprites:    'src/img/_sprites'<% } %><% if (cfg.webfont) { %>,
                glyphs:     'src/img/_glyphs'<% } %><% if (cfg.html) { %>,
                html:       'src'<% } else { %>,
                html:       '.tmp/dist'<% } %><% if (cfg.css && !cfg.autoprefixer ) { %>,
                css:        'src/css'<% } else { %>,
                css:        '.tmp/dist/css'<% } %><% if (cfg.js) { %>,
                js:         'src/js'<% } else { %>,
                js:         '.tmp/dist/js'<% } %><% if (cfg.webfont) { %>,
                fonts:      'src/fonts'<% } %>
            }
        }

    });

};
