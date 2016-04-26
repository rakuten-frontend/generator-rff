// Validate files with The Nu Html Checker
//
// grunt-html: <https://github.com/jzaefferer/grunt-html>
// The Nu Html Checker: <https://validator.github.io/validator/>

'use strict';

module.exports = {
  app: {
    src: [
      '<%%= path.html %>/**/*.html'<% if (cfg.ssi) { %>,
      '!<%%= path.includes %>/**/*.html'<% } %>
    ]
  }
};
