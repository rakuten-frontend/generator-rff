// Generate CSS sprites
//
// grunt-spritesmith: <https://github.com/Ensighten/grunt-spritesmith>

'use strict';

module.exports = {

  compile: {
    src: '<%%= path.sprites %>/*.png',
    dest: '<%%= path.tmp %>/img/sprites.png',
    destCss: '<%%= path.tmp %>/css/sprites.css',
    padding: 2,
    cssOpts: {
      cssSelector: function (item) {
        return '.sprite-' + item.name;  // Prefix for sprite classes
      }
    }
  }

};
