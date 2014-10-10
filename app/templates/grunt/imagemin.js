// Minify PNG, JPEG and GIF images
// grunt-contrib-imagemin: <https://github.com/gruntjs/grunt-contrib-imagemin>

'use strict';<% if (cfg.svgo) { %>

var svgo = require('imagemin-svgo');<% } %>

module.exports = {

    // Distribution
    dist: {<% if (cfg.svgo) { %>
        options: {
            use: [svgo()]
        },<% } %>
        files: [{
            expand: true,
            cwd: '<%%= path.app %>',
            dest: '<%%= path.dist %>',
            src: [
                '**/*.{png,jpg,gif<% if (cfg.svgo) { %>,svg<% } %>}',
                '!<%%= path.distIgnore %>',
                '!bower_components/**'
            ],
            filter: function(filepath) {
                return require('fs').readFileSync(filepath).length > 0;
            }
        }]
    }

};
