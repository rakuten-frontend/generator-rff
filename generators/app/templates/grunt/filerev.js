// Manage revision of static assets
//
// grunt-filerev: <https://github.com/yeoman/grunt-filerev>

'use strict';

module.exports = {
  dist: {
    files: [{
      src: [
        '<%%= path.dist %>/**/*.{css,js,png,jpg,gif,ico,eot,svg,ttf,woff,woff2}'
      ],
      filter: 'isFile'
    }]
  }
};
