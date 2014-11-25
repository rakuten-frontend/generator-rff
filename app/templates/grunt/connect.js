// Start Connect server
//
// grunt-contrib-connect: <https://github.com/gruntjs/grunt-contrib-connect>
// Connect: <https://github.com/senchalabs/connect>

'use strict';

module.exports = function (grunt, options) {

  return {
    // Server for testing framework
    test: {
      options: {
        port: 9002,
        open: false,
        middleware: function (connect) {
          return [
            connect.static(options.path.test),
            connect.static(options.path.tmp),
            connect.static(options.path.app),
            connect().use('/bower_components', connect.static('./bower_components'))
          ];
        }
      }
    }
  };

};
