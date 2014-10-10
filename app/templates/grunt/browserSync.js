// BrowserSync server
// grunt-browser-sync: <https://github.com/shakyShane/grunt-browser-sync>
// BrowserSync: <http://www.browsersync.io/>
// BrowserSync options: <http://www.browsersync.io/docs/options/>

'use strict';

module.exports = {

    // Dev server
    app: {
        options: {
            server: {
                baseDir: [
                    '<%%= path.tmp %>',          // Refer compiled files at first,
                    '<%%= path.app %>'           // And then, look for other files in source direcotry.
                ]
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
                ]
            },
            port: 9001,
            notify: false
        }
    }

};
