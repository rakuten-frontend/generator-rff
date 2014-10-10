// Copy files and folders
// grunt-contrib-copy: <https://github.com/gruntjs/grunt-contrib-copy>

'use strict';

module.exports = {

    // Distribution
    dist: {
        files: [
            // Copy static files.
            {
                expand: true,
                dot: true,
                cwd: '<%%= path.app %>',
                dest: '<%%= path.dist %>',
                filter: 'isFile',               // Ignore empty folders.
                src: [
                    '**',
                    '!<%%= path.distIgnore %>',<% if (cfg.jade) { %>
                    '!**/*.jade',<% } %>
                    '!**/.DS_Store',
                    '!**/*.{css,js}'            // Ignore CSS and JavaScript because they are compiled in usemin task.
                ]
            }<% if (!cfg.html || cfg.sprite || cfg.webfont) { %>,
            // Copy precompiled resources.
            {
                expand: true,
                cwd: '<%%= path.tmp %>',
                dest: '<%%= path.dist %>',
                src: [<% if (!cfg.html) { %>
                    '**/*.html',<% } %><% if (cfg.sprite) { %>
                    'img/sprites.png',<% } %><% if (cfg.webfont) { %>
                    '**/*.{eot,woff,ttf,svg}',<% } %>
                    '!<%%= path.distIgnore %>'
                ]
            }<% } %>
        ]
    }

};
