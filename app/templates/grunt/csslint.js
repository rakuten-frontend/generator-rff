// Lint CSS files
// grunt-css-lint: <https://github.com/gruntjs/grunt-contrib-csslint>
// CSS Lint: <http://csslint.net/>

'use strict';

module.exports = {

    // Base options
    options: {
        // Indicate config file
        // Rules: <https://github.com/stubbornella/csslint/wiki/Rules>
        csslintrc: '.csslintrc'
    },

    // Target CSS files
    // Use "Compact Format" or "File Array Format" to support grunt-newer.
    // Refer: <https://github.com/tschaub/grunt-newer/issues/19#issuecomment-29224364>
    app: {
        src: [
            '<%%= path.css %>/**/*.css'
        ]
    }

};
