// Start BrowserSync server
//
// grunt-browser-sync: <https://github.com/shakyShane/grunt-browser-sync>
// BrowserSync: <http://www.browsersync.io/>
// Options: <http://www.browsersync.io/docs/options/>

'use strict';

module.exports = function (<% if (cfg.cssSourceMap || cfg.jsSourceMap) { %>grunt, options<% } %>) {
  var routes = {};
  routes['/bower_components'] = 'bower_components';<% if (cfg.cssSourceMap) { %>
  routes['/' + options.path.styles] = options.path.styles;<% } %><% if (cfg.jsSourceMap) { %>
  routes['/' + options.path.scripts] = options.path.scripts;<% } %>

  return {
    // Dev server
    app: {
      options: {
        server: {
          baseDir: [
            '<%%= path.tmp %>',
            '<%%= path.app %>'
          ],
          routes: routes
        },
        ui: {
          port: 9010
        },
        port: 9000,
        notify: false,
        watchTask: true
      },
      src: [
        '<%%= path.app %>/**',
        '<%%= path.tmp %>/**',
        '!<%%= path.distIgnore %>'
      ]
    },

    // Server using dist files
    dist: {
      options: {
        server: {
          baseDir: [
            '<%%= path.dist %>'
          ]
        },
        ui: false,
        port: 9001,
        notify: false
      }
    }<% if (cfg.mocha) { %>,

    // Server for testing framework
    test: {
      options: {
        server: {
          baseDir: [
            '<%%= path.test %>',
            '<%%= path.tmp %>',
            '<%%= path.app %>'
          ],
          routes: routes
        },
        ui: false,
        port: 9002,
        notify: false,
        open: false,
        keepalive: false
      }
    }<% } %>
  };
};
