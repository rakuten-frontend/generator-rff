// Compile Jade templates
//
// grunt-contrib-jade: <https://github.com/gruntjs/grunt-contrib-jade>

'use strict';

module.exports = {
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
