// Sass compiler
// grunt-contrib-sass: <https://github.com/gruntjs/grunt-contrib-sass>

'use strict';

module.exports = {

    // Compile styles
    compile: {
        options: {
            style: 'expanded',
            loadPath: ['bower_components']
        },
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
