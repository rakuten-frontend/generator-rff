// Stylus compiler
// grunt-contrib-stylus: <https://github.com/gruntjs/grunt-contrib-stylus>

'use strict';

module.exports = {

    // Compile styles
    compile: {
        options: {
            compress: false
        },
        files: [{
            expand: true,
            cwd: '<%%= path.styles %>',
            dest: '<%%= path.css %>',
            src: [
                '**/*.{styl,stylus}',
                '!**/_*.{styl,stylus}'<% if (cfg.webfont) { %>,
                '!glyphs.styl'<% } %>
            ],
            ext: '.css'
        }]
    }

};
