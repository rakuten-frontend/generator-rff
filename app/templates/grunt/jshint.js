// Validate files with JSHint
// grunt-contrib-jshint: <https://github.com/gruntjs/grunt-contrib-jshint>
// JSHint: <http://www.jshint.com/>

'use strict';

module.exports = {

    // Target JavaScript files
    src: {
        options: {
            // Indicate config file.
            // JSHint Options: <http://www.jshint.com/docs/options/>
            jshintrc: '.jshintrc'
        },
        // Target JavaScript files
        // Use "Compact Format" or "File Array Format" to support grunt-newer.
        // Refer: <https://github.com/tschaub/grunt-newer/issues/19#issuecomment-29224364>
        src: [
            '<%%= path.js %>/**/*.js'
        ]
    },

    // Validation for Grunt scripts
    // Apply different settings because Grunt is a Node.js based application.
    grunt: {
        options: {
            camelcase: true,
            curly: true,
            eqeqeq: true,
            immed: true,
            indent: 4,
            latedef: true,
            newcap: true,
            noarg: true,
            quotmark: 'single',
            undef: true,
            unused: true,
            strict: true,
            trailing: true,
            node: true
        },
        // Target JavaScript files
        src: [
            'Gruntfile.js',
            'grunt/*.js'
        ]
    }

};
