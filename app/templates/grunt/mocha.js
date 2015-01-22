// Run Mocha specs
//
// grunt-mocha: <https://github.com/kmiyashiro/grunt-mocha>
// Mocha: <http://mochajs.org/>

'use strict';

module.exports = {

  options: {
    reporter: 'Spec',
    run: true
  },

  all: {
    options: {
      urls: [
        'http://localhost:<%%= browserSync.test.options.port %>/'
      ]
    }
  }

};
