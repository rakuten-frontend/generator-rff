// Compile HTML with SSI emulation
// grunt-ssi: <https://github.com/anguspiv/grunt-ssi>

'use strict';

module.exports = {

    // Temporary output for localhost
    compile: {
        options: {
            cache: 'all',
            baseDir: '<%%= path.markups %>',
            encoding: 'utf8'
        },
        files: [{
            expand: true,
            cwd: '<%%= path.markups %>',
            dest: '<%%= path.tmp %>',
            src: ['**/*.html']
        }]
    }

};
