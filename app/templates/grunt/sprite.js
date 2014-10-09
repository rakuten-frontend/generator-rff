// CSS sprites generator
// grunt-spritesmith: <https://github.com/Ensighten/grunt-spritesmith>

'use strict';

module.exports = {

    // Generate stylesheet and sprite image
    compile: {
        src: '<%%= path.sprites %>/*.png',
        destImg: '<%%= path.images %>/sprites.png'<% if (cfg.css) { %>,
        destCSS: '<%%= path.styles %>/sprites.css'<% } %><% if (cfg.sass || cfg.libsass) { %>,
        destCSS: '<%%= path.styles %>/_sprites.scss'<% } %><% if (cfg.less) { %>,
        destCSS: '<%%= path.styles %>/_sprites.less'<% } %><% if (cfg.stylus) { %>,
        destCSS: '<%%= path.styles %>/_sprites.styl'<% } %>,
        algorithm: 'binary-tree',
        padding: 2<% if (cfg.css) { %>,
        cssOpts: {
            cssClass: function (item) {
                return '.sprite-' + item.name;      // Define prefix for sprite classes.
            }
        }<% } else { %>,
        cssFormat: 'css',                           // Remove this line to generate a mixin file instead.
        cssVarMap: function (sprite) {
            sprite.name = 'sprite-' + sprite.name;  // Define prefix for variables.
        },
        cssOpts: {
            cssClass: function (item) {
                return '.' + item.name;
            }
        }<% } %>
    }

};
