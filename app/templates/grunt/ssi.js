// Compile HTML with SSI emulation
// grunt-ssi: <https://github.com/anguspiv/grunt-ssi>

'use strict';

module.exports = {

    // Temporary output for localhost
    compile: {
        options: {
            cache: 'all',
            baseDir: '<%%= path.html %>',
            encoding: 'utf8'
        },
        files: [{
            expand: true,
            cwd: '<%%= path.html %>',
            dest: '<%%= path.tmp %>',
            src: ['**/*.html']
        }]
    }

};
