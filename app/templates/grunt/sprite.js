// CSS sprites generator
// grunt-spritesmith: <https://github.com/Ensighten/grunt-spritesmith>

'use strict';

module.exports = {

    // Generate stylesheet and sprite image
    compile: {
        src: '<%%= path.sprites %>/*.png',
        destImg: '<%%= path.tmp %>/img/sprites.png',
        destCSS: '<%%= path.tmp %>/css/sprites.css',
        algorithm: 'binary-tree',
        padding: 2,
        cssOpts: {
            cssClass: function (item) {
                return '.sprite-' + item.name;      // Prefix for sprite classes.
            }
        }
    }

};
