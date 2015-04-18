// Convert Markdown ot PDF
//
// grunt-markdown-pdf: <https://www.npmjs.com/package/grunt-markdown-pdf>

'use strict';

module.exports = {

  compile: {
    options: {
      cssPath: '<%%= path.css %>/app.css'
    },
    files: [{
      expand: true,
      cwd: '<%%= path.markups %>',
      dest: '<%%= path.pdf %>',
      src: [
        '**/*.md',
        '!**/_*.md'
      ]
    }]
  }

};
