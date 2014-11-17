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
      // Set 'node' engine for working on Windows. But it has some issues.
      // <https://github.com/sapegin/grunt-webfont#available-engines>
      engine: 'fontforge',
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
