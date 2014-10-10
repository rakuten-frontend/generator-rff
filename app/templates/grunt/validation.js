// W3C HTML validation
// grunt-html-validation: <https://github.com/praveenvijayan/grunt-html-validation>

'use strict';

module.exports = {

    // Base options
    options: {
        charset: 'utf-8',
        doctype: 'HTML5',
        failHard: true,
        reset: true,
        relaxerror: [   // Skip the following errors from validation.
            'Bad value X-UA-Compatible for attribute http-equiv on element meta.'
        ]
    },

    // Target HTML files
    // Use "Compact Format" or "File Array Format" to support grunt-newer.
    // Refer: <https://github.com/tschaub/grunt-newer/issues/19#issuecomment-29224364>
    app: {
        src: [
            '<%%= path.html %>/**/*.html'<% if (cfg.ssi) { %>,
            '!<%%= path.includes %>/**/*.html'<% } %>
        ]
    }

};
