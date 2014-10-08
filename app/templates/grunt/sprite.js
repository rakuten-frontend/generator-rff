// CSS sprites generator
// grunt-spritesmith: <https://github.com/Ensighten/grunt-spritesmith>

'use strict';

module.exports = {<% if (cfg.css) { %>

    // Generate a CSS file and spritesheet
    css: {
        src: '<%%= path.sprites %>/*.png',
        destImg: '<%%= path.images %>/sprites.png',
        destCSS: '<%%= path.styles %>/sprites.css',
        imgPath: '/img/sprites.png',                // Use absolute URI.
        algorithm: 'binary-tree',
        padding: 2,
        cssOpts: {
            cssClass: function (item) {
                return '.sprite-' + item.name;      // Define prefix for sprite classes.
            }
        }
    }<% } %><% if (cfg.sass || cfg.libsass) { %>

    // Generate a Sass file and spritesheet
    sass: {
        src: '<%%= path.sprites %>/*.png',
        destImg: '<%%= path.images %>/sprites.png',
        destCSS: '<%%= path.styles %>/_sprites.scss',
        imgPath: '/img/sprites.png',                // Use absolute URI.
        algorithm: 'binary-tree',
        padding: 2,
        cssFormat: 'css',                           // Remove this line to generate a mixin file instead.
        cssVarMap: function (sprite) {
            sprite.name = 'sprite-' + sprite.name;  // Define prefix for variables.
        },
        cssOpts: {
            cssClass: function (item) {
                return '.' + item.name;
            }
        }
    }<% } %><% if (cfg.less) { %>

    // Generate a Less file and spritesheet
    less: {
        src: '<%%= path.sprites %>/*.png',
        destImg: '<%%= path.images %>/sprites.png',
        destCSS: '<%%= path.styles %>/_sprites.less',
        imgPath: '/img/sprites.png',                // Use absolute URI.
        algorithm: 'binary-tree',
        padding: 2,
        cssFormat: 'css',                           // Remove this line to generate a mixin file instead.
        cssVarMap: function (sprite) {
            sprite.name = 'sprite-' + sprite.name;  // Define prefix for variables.
        },
        cssOpts: {
            cssClass: function (item) {
                return '.' + item.name;
            }
        }
    }<% } %><% if (cfg.stylus) { %>

    // Generate a Stylus file and spritesheet
    stylus: {
        src: '<%%= path.sprites %>/*.png',
        destImg: '<%%= path.images %>/sprites.png',
        destCSS: '<%%= path.styles %>/_sprites.styl',
        imgPath: '/img/sprites.png',                // Use absolute URI.
        algorithm: 'binary-tree',
        padding: 2,
        cssFormat: 'css',                           // Remove this line to generate a mixin file instead.
        cssVarMap: function (sprite) {
            sprite.name = 'sprite-' + sprite.name;  // Define prefix for variables.
        },
        cssOpts: {
            cssClass: function (item) {
                return '.' + item.name;
            }
        }
    }<% } %>

};
