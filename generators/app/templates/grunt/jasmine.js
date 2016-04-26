// Run Jasmine specs
//
// grunt-contrib-jasmine: <https://github.com/gruntjs/grunt-contrib-jasmine>
// Jasmine: <http://jasmine.github.io/>

'use strict';

module.exports = {
  all: {
    // Insert source files here
    // src: '<%%= path.app %>/**/*.js',
    options: {
      specs: '<%%= path.test %>/spec/**/*.js'
    }
  }
};
