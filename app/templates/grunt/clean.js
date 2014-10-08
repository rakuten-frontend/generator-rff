// Clean files and folders
// grunt-contrib-clean: <https://github.com/gruntjs/grunt-contrib-clean>

'use strict';

module.exports = {

    // Distribution directory
    dist: {
        files: [{
            dot: true,
            src: [
                '<%%= path.dist %>/*',
                '!<%%= path.dist %>/.git*'
            ]
        }]
    },

    // Temporary compiled files
    tmp: ['<%%= path.tmp %>']

};
