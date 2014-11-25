// Generate CSS sprites
//
// grunt-spritesmith: <https://github.com/Ensighten/grunt-spritesmith>

'use strict';

module.exports = {

  compile: {
    src: '<%%= path.sprites %>/*.png',
    destImg: '<%%= path.tmp %>/img/sprites.png',
    destCSS: '<%%= path.tmp %>/css/sprites.css',
    algorithm: 'binary-tree',
    padding: 2,
    cssOpts: {
      cssClass: function (item) {
        return '.sprite-' + item.name;  // Prefix for sprite classes
      }
    }
  }

};
