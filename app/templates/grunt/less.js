// Less compiler
// grunt-contrib-less: <https://github.com/gruntjs/grunt-contrib-less>

'use strict';

module.exports = {

    // Compile styles
    compile: {
        options: {
            paths: ['bower_components'],
            compress: false
        },
        files: [{
            expand: true,
            cwd: '<%%= path.styles %>',
            dest: '<%%= path.css %>',
            src: [
                '**/*.less',
                '!**/_*.less'
            ],
            ext: '.css'
        }]
    }

};
