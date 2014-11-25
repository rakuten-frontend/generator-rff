// Compile Sass files to CSS
//
// grunt-contrib-sass: <https://github.com/gruntjs/grunt-contrib-sass>

'use strict';

module.exports = {

  options: {
    style: 'expanded',
    loadPath: ['bower_components']
  },

  compile: {
    files: [{
      expand: true,
      cwd: '<%%= path.styles %>',
      dest: '<%%= path.css %>',
      src: [
        '**/*.{scss,sass}',
        '!**/_*.{scss,sass}'
      ],
      ext: '.css'
    }]
  }

};
