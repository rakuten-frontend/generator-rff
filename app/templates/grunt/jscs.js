// Check JavaScript code style with JSCS
// grunt-jscs: <https://github.com/jscs-dev/grunt-jscs>
// JSCS: <https://github.com/jscs-dev/node-jscs>

'use strict';

module.exports = {

  // Base options
  options: {
    // Indicate config file
    // Rules: <https://github.com/jscs-dev/node-jscs#rules>
    config: '.jscsrc'
  },

  // Application scripts
  app: {
    // Use "Compact Format" or "File Array Format" to support grunt-newer.
    // Refer: <https://github.com/tschaub/grunt-newer/issues/19#issuecomment-29224364>
    src: [
      '<%%= path.js %>/**/*.js'
    ]
  },

  // Grunt scripts
  grunt: {
    src: [
      'Gruntfile.js',
      'grunt/*.js'
    ]
  }

};
