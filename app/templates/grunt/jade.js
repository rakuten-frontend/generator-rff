// Jade compiler
// grunt-contrib-jade: <https://github.com/gruntjs/grunt-contrib-jade>

'use strict';

module.exports = {

  // Compile markups
  compile: {
    options: {
      basedir: '<%%= path.markups %>',
      pretty: true
    },
    files: [{
      expand: true,
      cwd: '<%%= path.markups %>',
      dest: '<%%= path.html %>',
      src: [
        '**/*.jade',
        '!**/_*.jade'
      ],
      ext: '.html'
    }]
  }

};
