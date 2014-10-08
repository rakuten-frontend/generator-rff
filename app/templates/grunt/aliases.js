// Grunt task registration
// Manage grunt tasks here instead of `grunt.registerTask`.
// Refer: <https://github.com/firstandthird/load-grunt-config#aliases>

'use strict';

var grunt = require('grunt');

module.exports = {

    // Generate source codes<% if (cfg.sprite) { %> and spritesheet images<% } %>
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
        'autoprefixer'<% } %>
    ],

    // Validation and lint
    lint: function (target) {
        if (target !== 'skip-compile') {
            grunt.task.run([
                'compile'
            ]);
        }
        grunt.task.run([<% if (cfg.validation) { %>
            'newer:validation',<% } %><% if (cfg.csslint) { %>
            'newer:csslint',<% } %>
            'newer:jshint'
        ]);
    }<% if (cfg.testing) { %>,

    // Run testing framework
    test: function (target) {
        if (target !== 'skip-compile') {
            grunt.task.run([
                'compile'
            ]);
        }
        grunt.task.run([<% if (cfg.mocha) { %>
            'connect:test',
            'mocha'<% } %><% if (cfg.jasmine) { %>
            'jasmine'<% } %>
        ]);
    }<% } %>,

    // Start localhost server
    serve: function (target) {
        if (target === 'dist') {
            grunt.task.run([
                'browserSync:dist'
            ]);
        }
        else {
            grunt.task.run([
                'compile'<% if (cfg.ssi) { %>,
                'ssi'<% } %>,
                'browserSync:src',
                'watch'
            ]);
        }
    },

    // Distribute. This is a part of build task.
    _dist: [
        'clean:dist',
        'copy:dist',
        'imagemin',
        'useminPrepare',
        'concat'<% if (cfg.cssmin) { %>,
        'cssmin'<% } %><% if (cfg.uglify) { %>,
        'uglify'<% } %><% if (cfg.modernizr) { %>,
        'modernizr'<% } %><% if (cfg.rev) { %>,
        'rev'<% } %>,
        'usemin'<% if (cfg.htmlmin) { %>,
        'htmlmin'<% } %>
    ],

    // Build
    build: [
        'compile',
        '_dist'
    ],

    // Define default `grunt` alias
    default: [
        'compile',
        'lint:skip-compile'<% if (cfg.testing) { %>,
        'test:skip-compile'<% } %>,
        '_dist'
    ]

};
