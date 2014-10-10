// Inject Bower components
// grunt-wiredep: <https://github.com/stephenplusplus/grunt-wiredep>
// wiredep: <https://github.com/taptapship/wiredep>

'use strict';

module.exports = {

    // Targets for auto injection
    app: {<% if (cfg.html) { %>
        src: ['<%%= path.markups %>/**/*.html']<% } %><% if (cfg.jade) { %>
        src: ['<%%= path.markups %>/**/*.jade']<% } %><% if (cfg.modernizr) { %>,
        exclude: ['bower_components/modernizr/modernizr.js']<% } %>,
        // Force absolute URL
        // "../bower_components/xxx" -> "/bower_components/xxx"
        ignorePath: /(\.\.\/)*\.\.(?=\/)/
    }

};
