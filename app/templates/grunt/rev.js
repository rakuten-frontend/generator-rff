// Manage revision of static assets
//
// grunt-rev: <https://github.com/cbas/grunt-rev>

'use strict';

module.exports = {

  options: {
    encoding: 'utf8',
    algorithm: 'md5',
    length: 8
  },

  dist: {
    files: [{
      src: [
        '<%%= path.dist %>/**/*.{css,js,png,jpg,gif,ico,eot,svg,ttf,woff}'
      ],
      filter: 'isFile'
    }]
  }

};
