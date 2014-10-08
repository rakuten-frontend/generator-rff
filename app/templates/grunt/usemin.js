// Optimize CSS/JavaScript and update HTML
// This module requires "useminPrepare" task,
// and depends on "grunt-contrib-concat", "grunt-contrib-cssmin" and "grunt-contrib-uglify".
// grunt-usemin: <https://github.com/yeoman/grunt-usemin>

'use strict';

module.exports = {

    // Base options
    options: {
        assetsDirs: [
            '<%%= path.dist %>',
            // Add a tricky setting to prevent relative path issue of grunt-usemin.
            // Issue: https://github.com/yeoman/grunt-usemin/issues/242
            // Hotfix: https://github.com/yeoman/yeoman/issues/824#issuecomment-29137057
            '<%%= path.dist %>/img'
        ]
    },

    // Update HTML files
    html: {
        files: [{
            src: ['<%%= path.dist %>/**/*.html'],
            filter: 'isFile'
        }]
    },

    // Update CSS files
    css: {
        files: [{
            src: ['<%%= path.dist %>/**/*.css'],
            filter: 'isFile'
        }]
    }

};
