// Minify HTML files
// grunt-contrib-htmlmin: <https://github.com/gruntjs/grunt-contrib-htmlmin>

'use strict';

module.exports = {

  // Distribution
  dist: {
    options: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyCSS: true,
      minifyJS: true,
      removeAttributeQuotes: true,
      removeCommentsFromCDATA: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true
    },
    files: [{
      expand: true,
      cwd: '<%%= path.dist %>',
      dest: '<%%= path.dist %>',
      src: [
        '**/*.html'
      ]
    }]
  }

};
