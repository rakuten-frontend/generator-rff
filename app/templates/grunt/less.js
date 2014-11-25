// Compile Less files to CSS
//
// grunt-contrib-less: <https://github.com/gruntjs/grunt-contrib-less>

'use strict';

module.exports = {

  options: {
    paths: ['bower_components'],
    compress: false
  },

  compile: {
    files: [{
      expand: true,
      cwd: '<%%= path.styles %>',
      dest: '<%%= path.css %>',
      src: [
        '**/*.less',
        '!**/_*.less'
      ],
      ext: '.css'
    }]
  }

};
