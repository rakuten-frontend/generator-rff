// Compile CoffeeScript files to JavaScript
//
// grunt-contrib-coffee: <https://github.com/gruntjs/grunt-contrib-coffee>

'use strict';

module.exports = {
  options: {
    bare: true,
    sourceMap: true
  },

  compile: {
    files: [{
      expand: true,
      cwd: '<%%= path.scripts %>',
      dest: '<%%= path.js %>',
      src: [
        '**/*.{coffee,litcoffee,coffee.md}'
      ],
      ext: '.js'
    }]
  }
};
