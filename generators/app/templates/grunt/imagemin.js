// Minify images
//
// grunt-contrib-imagemin: <https://github.com/gruntjs/grunt-contrib-imagemin>

'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%%= path.dist %>',
      dest: '<%%= path.dist %>',
      src: [
        '**/*.{png,jpg,gif,svg}'
      ]
    }]
  }
};
