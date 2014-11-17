// Revision management for static assets
// grunt-rev: <https://github.com/cbas/grunt-rev>

'use strict';

module.exports = {

  // Base options
  options: {
    encoding: 'utf8',
    algorithm: 'md5',
    length: 8
  },

  // Distribution
  dist: {
    // Target files for revisioning
    files: [{
      src: [
        '<%%= path.dist %>/**/*.{css,js,png,jpg,gif,ico,eot,svg,ttf,woff}'
      ],
      filter: 'isFile'
    }]
  }

};
