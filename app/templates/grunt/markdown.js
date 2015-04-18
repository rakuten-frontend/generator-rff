// Compile Markdown
//
// grunt-markdown: <https://github.com/treasonx/grunt-markdown>

'use strict';

module.exports = {

  compile: {
    options: {
      template: '<%%= path.template %>',
      markdownOptions: {
        gfm: true,
        highlight: 'manual',
        tables: false,
        breaks: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        codeLines: {
          before: '<span>',
          after: '</span>'
        }
      }
    },
    files: [{
      expand: true,
      cwd: '<%%= path.markups %>',
      dest: '<%%= path.html %>',
      src: [
        '**/*.md',
        '!**/_*.md'
      ],
      ext: '.html'
    }]
  }

};
