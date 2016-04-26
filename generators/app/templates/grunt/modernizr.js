// Build custom Modernizr
//
// grunt-modernizr: <https://github.com/Modernizr/grunt-modernizr>

'use strict';

module.exports = {
  dist: {
    devFile: 'bower_components/modernizr/modernizr.js',
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
