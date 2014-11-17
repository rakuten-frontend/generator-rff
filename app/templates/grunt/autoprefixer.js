// CSS vendor-prefix management
// Autoprefixer: <https://github.com/ai/autoprefixer>
// grunt-autoprefixer: <https://github.com/nDmitry/grunt-autoprefixer>

'use strict';

module.exports = {

  // Base options
  options: {
    // Notation: <https://github.com/ai/autoprefixer#browsers>
    browsers: [
      'last 2 versions',
      'Explorer >= 8',
      'Firefox ESR',
      'Android >= 2.3',
      'iOS >= 7'
    ]
  },

  // Compile CSS to CSS
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
