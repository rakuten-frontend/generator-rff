// BrowserSync server
// grunt-browser-sync: <https://github.com/shakyShane/grunt-browser-sync>
// BrowserSync: <http://www.browsersync.io/>
// BrowserSync options: <http://www.browsersync.io/docs/options/>

'use strict';<% if (cfg.ssi) { %>

var path = require('path');
var ssi = require('browsersync-ssi');<% } %>

module.exports = function (<% if (cfg.ssi) { %>grunt, options<% } %>) {
    return {

        // Dev server
        app: {
            options: {
                server: {
                    baseDir: [
                        '<%%= path.tmp %>',
                        '<%%= path.app %>'
                    ],
                    routes: {
                        '/bower_components': 'bower_components'
                    }<% if (cfg.ssi) { %>,
                    middleware: [
                        ssi({
                            baseDir: path.join(__dirname, '..', options.path.app),
                            ext: '.html'
                        })
                    ]<% } %>
                },
                port: 9000,
                notify: false,
                watchTask: true
            },
            src: [
                '<%%= path.app %>/**',
                '<%%= path.tmp %>/**',
                '!<%%= path.distIgnore %>'
            ]
        },

        // Server using distribution files
        dist: {
            options: {
                server: {
                    baseDir: [
                        '<%%= path.dist %>'
                    ]<% if (cfg.ssi) { %>,
                    middleware: [
                        ssi({
                            baseDir: path.join(__dirname, '..', options.path.dist),
                            ext: '.html'
                        })
                    ]<% } %>
                },
                port: 9001,
                notify: false
            }
        }

    };
};
