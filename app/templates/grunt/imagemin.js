// Minify images
//
// grunt-contrib-imagemin: <https://github.com/gruntjs/grunt-contrib-imagemin>

'use strict';

var fs = require('fs');

module.exports = {

  dist: {
    files: [{
      expand: true,
      cwd: '<%%= path.dist %>',
      dest: '<%%= path.dist %>',
      src: [
        '**/*.{png,jpg,gif<% if (cfg.svgo) { %>,svg<% } %>}'
      ],
      filter: function (filepath) {
        return fs.readFileSync(filepath).length > 0;
      }
    }]
  }

};
