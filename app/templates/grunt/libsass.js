// Compile Sass files to CSS using libsass
//
// grunt-sass: <https://github.com/sindresorhus/grunt-sass>

'use strict';

module.exports = {

  options: {
    includePaths: ['bower_components']
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
