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
        port: 9001,
        notify: false
      }
    }
  };

};
