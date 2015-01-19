// Parse CSS and add vendor prefixes
//
// Autoprefixer: <https://github.com/ai/autoprefixer>
// grunt-autoprefixer: <https://github.com/nDmitry/grunt-autoprefixer>

'use strict';

module.exports = {

  options: {
    // Targeting notation: <https://github.com/ai/browserslist#queries>
    browsers: [
      'last 2 versions',
      'Explorer >= 8',
      'Firefox ESR',
      'Android >= 2.3',
      'iOS >= 7'
    ]<% if (cfg.cssSourceMap) { %>,
    map: {
      inline: false
    }<% } %>
  },

  compile: {
    files: [{
      expand: true<% if (cfg.css) { %>,
      cwd: '<%%= path.styles %>'<% } else { %>,
      cwd: '<%%= path.css %>'<% } %>,
      dest: '<%%= path.css %>',
      src: '**/*.css'
    }]
  }

};
