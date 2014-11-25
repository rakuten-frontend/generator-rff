// Minify HTML files
//
// grunt-contrib-htmlmin: <https://github.com/gruntjs/grunt-contrib-htmlmin>
// html-minifier: <https://github.com/kangax/html-minifier>
// Options: <https://github.com/kangax/html-minifier#options-quick-reference>

'use strict';

module.exports = {

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
