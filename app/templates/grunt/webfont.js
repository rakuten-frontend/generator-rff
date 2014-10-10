// SVG to webfont converter
// grunt-webfont: <https://github.com/sapegin/grunt-webfont>

'use strict';

module.exports = {

    // Generate fonts and styles
    compile: {
        src: '<%%= path.glyphs %>/*.svg',
        dest: '<%%= path.tmp %>/fonts',
        destCss: '<%%= path.tmp %>/css',
        options: {
            engine: 'node',
            font: 'glyphs',
            hashes: false,
            stylesheet: 'css',
            htmlDemo: false,
            templateOptions: {
                baseClass: 'glyph',
                classPrefix: 'glyph-'
            }
        }
    }

};
