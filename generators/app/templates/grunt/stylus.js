// Compile Stylus files to CSS
//
// grunt-contrib-stylus: <https://github.com/gruntjs/grunt-contrib-stylus>

'use strict';

module.exports = {
  options: {
    compress: false,
    paths: ['bower_components']
  },

  compile: {
    files: [{
      expand: true,
      cwd: '<%%= path.styles %>',
      dest: '<%%= path.css %>',
      src: [
        '**/*.{styl,stylus}',
        '!**/_*.{styl,stylus}'
      ],
      ext: '.css'
    }]
  }
};
