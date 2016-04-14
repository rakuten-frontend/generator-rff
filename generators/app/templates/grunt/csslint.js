// Lint CSS files
//
// grunt-contrib-csslint: <https://github.com/gruntjs/grunt-contrib-csslint>
// CSS Lint: <http://csslint.net/>
// Rules: <https://github.com/CSSLint/csslint/wiki/Rules>

'use strict';

module.exports = {

  options: {
    csslintrc: '.csslintrc'
  },

  app: {
    src: [
      '<%%= path.css %>/**/*.css'<% if (cfg.sprite) { %>,
      '!<%%= path.tmp %>/css/sprites.css'<% } %><% if (cfg.webfont) { %>,
      '!<%%= path.tmp %>/css/glyphs.css'<% } %>
    ]
  }

};
