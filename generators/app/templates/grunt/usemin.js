// Optimize CSS/JavaScript files and replace references in HTML
//
// This module requires "useminPrepare" task,
// and depends on "grunt-contrib-concat", "grunt-contrib-cssmin" and "grunt-contrib-uglify".
// grunt-usemin: <https://github.com/yeoman/grunt-usemin>

'use strict';

module.exports = {
  options: {
    assetsDirs: [
      '<%%= path.dist %>',
      // Add a tricky setting to prevent relative path issue of grunt-usemin.
      // Issue: <https://github.com/yeoman/grunt-usemin/issues/242>
      // Hotfix: <https://github.com/yeoman/grunt-usemin/issues/242#issuecomment-37634594>
      '<%%= path.dist %>/img'
    ]
  },

  // Update references in HTML
  html: {
    files: [{
      src: ['<%%= path.dist %>/**/*.html'],
      filter: 'isFile'
    }]
  },

  // Update references in CSS
  css: {
    files: [{
      src: ['<%%= path.dist %>/**/*.css'],
      filter: 'isFile'
    }]
  }
};
