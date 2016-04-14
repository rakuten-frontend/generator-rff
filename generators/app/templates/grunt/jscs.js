// Check JavaScript code style with JSCS
//
// grunt-jscs: <https://github.com/jscs-dev/grunt-jscs>
// JSCS: <http://jscs.info/>
// Rules: <http://jscs.info/rules.html>

'use strict';

module.exports = {

  options: {
    config: '.jscsrc'
  },

  // Application scripts
  app: {
    src: [
      '<%%= path.js %>/**/*.js'
    ]
  },

  // Grunt configs
  grunt: {
    src: [
      'Gruntfile.js',
      'grunt/*.js'
    ]
  }

};
