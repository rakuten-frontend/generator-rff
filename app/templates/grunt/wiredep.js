// Inject Bower components
// grunt-wiredep: <https://github.com/stephenplusplus/grunt-wiredep>
// wiredep: <https://github.com/taptapship/wiredep>

'use strict';

module.exports = {

  // Targets for auto injection
  markups: {<% if (cfg.html) { %>
    src: ['<%%= path.markups %>/**/*.html']<% } %><% if (cfg.jade) { %>
    src: ['<%%= path.markups %>/**/*.jade']<% } %><% if (cfg.modernizr) { %>,
    exclude: ['bower_components/modernizr/modernizr.js']<% } %>,
    // Force absolute URL
    // "../bower_components/xxx" -> "/bower_components/xxx"
    ignorePath: /(\.\.\/)*\.\.(?=\/)/
  }<% if (cfg.sass || cfg.libsass || cfg.less || cfg.stylus) { %>,
  styles: {<% if (cfg.sass || cfg.libsass) { %>
    src: ['<%%= path.styles %>/**/*.{scss,sass}']<% } %><% if (cfg.less) { %>
    src: ['<%%= path.styles %>/**/*.less']<% } %><% if (cfg.stylus) { %>
    src: ['<%%= path.styles %>/**/*.styl']<% } %>,
    // Import from bower_components directory
    // "../bower_components/xxx" -> "xxx"
    ignorePath: /(\.\.\/)*bower_components\//
  }<% } %>

};
