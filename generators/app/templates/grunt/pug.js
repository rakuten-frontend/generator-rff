// Compile Pug templates
//
// grunt-contrib-pug: <https://github.com/gruntjs/grunt-contrib-pug>

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
        '**/*.{pug,jade}',
        '!**/_*.{pug,jade}'
      ],
      ext: '.html'
    }]
  }
};
