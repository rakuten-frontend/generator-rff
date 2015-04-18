// Validate files with W3C HTML validation
//
// grunt-html-validation: <https://github.com/praveenvijayan/grunt-html-validation>

'use strict';

module.exports = {

  options: {
    charset: 'utf-8',
    doctype: 'HTML5',
    failHard: true,
    reset: true,
    // Skip the following errors from validation.
    relaxerror: [
      'Bad value X-UA-Compatible for attribute http-equiv on element meta.'
    ]
  },

  app: {
    src: [
      '<%%= path.html %>/**/*.html'
    ]
  }

};
