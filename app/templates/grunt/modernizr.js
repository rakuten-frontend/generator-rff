// Build custom Modernizr
// grunt-modernizr: <https://github.com/Modernizr/grunt-modernizr>

'use strict';

module.exports = {

    // Distribution
    dist: {
        devFile: '<%%= path.src %>/bower_components/modernizr/modernizr.js',
        outputFile: '<%%= path.dist %>/js/modernizr.js',
        files: {
            src: [
                '<%%= path.dist %>/**/*.{css,js}',
                '!<%%= path.dist %>/js/modernizr.js'
            ]
        },
        uglify: true
    }

};
