// Validate files with JSHint
//
// grunt-contrib-jshint: <https://github.com/gruntjs/grunt-contrib-jshint>
// JSHint: <http://jshint.com/>
// Options: <http://jshint.com/docs/options/>

'use strict';

module.exports = {
  // Application scripts
  app: {
    options: {
      jshintrc: '.jshintrc'
    },
    src: [
      '<%%= path.js %>/**/*.js'
    ]
  },

  // Grunt configs
  // Apply different settings because Grunt is a Node.js based application.
  grunt: {
    options: {
      eqeqeq: true,
      latedef: true,
      noarg: true,
      undef: true,
      unused: true,
      strict: true,
      node: true
    },
    src: [
      'Gruntfile.js',
      'grunt/*.js'
    ]
  }
};
