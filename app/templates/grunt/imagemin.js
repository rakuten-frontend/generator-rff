// Minify PNG, JPEG and GIF images
// grunt-contrib-imagemin: <https://github.com/gruntjs/grunt-contrib-imagemin>

'use strict';

var fs = require('fs');<% if (cfg.svgo) { %>
var svgo = require('imagemin-svgo');<% } %>

module.exports = {

    // Distribution
    dist: {<% if (cfg.svgo) { %>
        options: {
            use: [svgo()]
        },<% } %>
        files: [{
            expand: true,
            cwd: '<%%= path.dist %>',
            dest: '<%%= path.dist %>',
            src: [
                '**/*.{png,jpg,gif<% if (cfg.svgo) { %>,svg<% } %>}'
            ],
            filter: function (filepath) {
                return fs.readFileSync(filepath).length > 0;
            }
        }]
    }

};
