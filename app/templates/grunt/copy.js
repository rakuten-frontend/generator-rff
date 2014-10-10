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
                    '!**/*.{css,js}',           // Ignore CSS and JavaScript because they are compiled in usemin task.
                    '!**/*.{png,jpg,gif<% if (cfg.svgo) { %>,svg<% } %>}'   // Ignore images because they are copied in imagemin task.
                ]
            }<% if (!cfg.html) { %>,
            // Copy compiled source codes.
            {
                expand: true,
                cwd: '<%%= path.tmp %>',
                dest: '<%%= path.dist %>',
                src: [
                    '**/*.html',
                    '!<%%= path.distIgnore %>'
                ]
            }<% } %>
        ]
    }

};
