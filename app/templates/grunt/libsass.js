// Sass compiler using libsass
// grunt-sass: <https://github.com/sindresorhus/grunt-sass>

'use strict';

module.exports = {

    // Compile styles
    compile: {
        files: [{
            expand: true,
            cwd: '<%%= path.styles %>',
            dest: '<%%= path.css %>',
            src: [
                '**/*.{scss,sass}',
                '!**/_*.{scss,sass}'
            ],
            ext: '.css'
        }]
    }

};
