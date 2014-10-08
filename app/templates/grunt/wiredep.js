// Inject Bower components
// grunt-wiredep: <https://github.com/stephenplusplus/grunt-wiredep>
// wiredep: <https://github.com/taptapship/wiredep>

'use strict';

module.exports = {

    // Targets for auto injection
    target: {<% if (cfg.html) { %>
        src: ['<%%= path.markups %>/**/*.html']<% } %><% if (cfg.jade) { %>
        src: ['<%%= path.markups %>/**/*.jade']<% } %><% if (cfg.modernizr) { %>,
        exclude: ['bower_components/modernizr/modernizr.js']<% } %>,
        // Force absolute URL
        fileTypes: {<% if (cfg.html) { %>
            html: {
                replace: {
                    js: '<script src="/{{filePath}}"></script>',
                    css: '<link rel="stylesheet" href="/{{filePath}}">'
                }
            }<% } %><% if (cfg.jade) { %>
            jade: {
                replace: {
                    js: 'script(src=\'/{{filePath}}\')',
                    css: 'link(rel=\'stylesheet\', href=\'/{{filePath}}\')'
                }
            }<% } %>
        },
        // Remove unnecessary path: "/../bower_components/xxx" -> "/bower_components/xxx"
        ignorePath: /(\.\.\/)+/
    }

};
