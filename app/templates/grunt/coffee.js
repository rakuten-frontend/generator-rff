// CoffeeScript compiler
// grunt-contrib-coffee: <https://github.com/gruntjs/grunt-contrib-coffee>

'use strict';

module.exports = {

  // Compile scripts
  compile: {
    options: {
      bare: true
    },
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
