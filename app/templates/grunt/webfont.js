// SVG to webfont converter
// grunt-webfont: <https://github.com/sapegin/grunt-webfont>

'use strict';

module.exports = {

    // Generate fonts and styles
    compile: {
        src: '<%%= path.glyphs %>/*.svg',
        dest: '<%%= path.fonts %>',
        destCss: '<%%= path.styles %>',
        options: {
            engine: 'node',
            font: 'glyphs',
            hashes: false<% if (cfg.css) { %>,
            stylesheet: 'css'<% } %><% if (cfg.sass || cfg.libsass) { %>,
            stylesheet: 'scss'<% } %><% if (cfg.less) { %>,
            stylesheet: 'less'<% } %><% if (cfg.stylus) { %>,
            stylesheet: 'styl'<% } %>,
            htmlDemo: false,
            templateOptions: {
                baseClass: 'glyph',
                classPrefix: 'glyph-'
            }
        }
    }

};
