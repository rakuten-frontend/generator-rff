// Watch updates and run predefined tasks
//
// grunt-contrib-watch: <https://github.com/gruntjs/grunt-contrib-watch>

'use strict';

module.exports = {

  // Reload Grunt config
  grunt: {
    files: [
      'Gruntfile.js',
      'grunt/*.js'
    ],
    options: {
      reload: true
    }
  },

  // Inject Bower components
  bower: {
    files: ['bower.json'],
    tasks: ['wiredep']
  }<% if (cfg.htmllint) { %>,

  // Validate HTML
  html: {
    files: ['<%%= path.html %>/**/*.html'],
    tasks: ['newer:htmllint']
  }<% } %><% if (cfg.jshint || cfg.jscs) { %>,

  // Validate JavaScript
  js: {
    files: ['<%%= path.js %>/**/*.js']<% if (cfg.jshint && cfg.jscs) { %>,
    tasks: ['newer:jshint', 'newer:jscs']<% } else if (cfg.jshint) { %>,
    tasks: ['newer:jshint']<% } else if (cfg.jscs) { %>,
    tasks: ['newer:jscs']<% } %>
  }<% } %><% if (cfg.testing) { %>,

  // Run unit testing
  test: {
    files: ['test/spec/*.js'],
    tasks: ['test:skip-compile']
  }<% } %><% if (cfg.autoprefixer || cfg.csslint) { %>,

  // Handle CSS files
  css: {<% if (cfg.css) { %>
    files: ['<%%= path.styles %>/**']<% } else { %>
    files: ['<%%= path.css %>/**']<% } %><% if (cfg.autoprefixer && cfg.csslint) { %>,
    tasks: ['newer:autoprefixer', 'newer:csslint']<% } else if (cfg.autoprefixer) { %>,
    tasks: ['newer:autoprefixer']<% } else if (cfg.csslint) { %>,
    tasks: ['newer:csslint']<% } %>
  }<% } %><% if (cfg.sprite) { %>,

  // Generate CSS sprites
  sprite: {
    files: ['<%%= path.sprites %>/*.png'],
    tasks: ['sprite']
  }<% } %><% if (cfg.webfont) { %>,

  // Generate font icons
  webfont: {
    files: ['<%%= path.glyphs %>/*.svg'],
    tasks: ['webfont']
  }<% } %><% if (cfg.jade) { %>,

  // Compile Jade
  jade: {
    files: ['<%%= path.markups %>/**/*.jade'],
    tasks: ['jade'<% if (cfg.ssi) { %>, 'ssi'<% } %>]
  }<% } %><% if (cfg.sass) { %>,

  // Compile Sass
  sass: {
    files: ['<%%= path.styles %>/**'],
    tasks: ['sass']
  }<% } %><% if (cfg.less) { %>,

  // Compile Less
  less: {
    files: ['<%%= path.styles %>/**'],
    tasks: ['less']
  }<% } %><% if (cfg.stylus) { %>,

  // Compile Stylus
  stylus: {
    files: ['<%%= path.styles %>/**'],
    tasks: ['stylus']
  }<% } %><% if (cfg.coffee) { %>,

  // Compile CoffeeScript
  coffee: {
    files: ['<%%= path.scripts %>/**'],
    tasks: ['newer:coffee']
  }<% } %><% if (cfg.ssi && cfg.html) { %>,

  // Compile HTML with SSI
  ssi: {
    files: ['<%%= path.markups %>/**/*.html'],
    tasks: ['ssi']
  }<% } %>

};
