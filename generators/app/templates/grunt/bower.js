// Copy main files from installed bower packages
//
// main-bower-files: <https://github.com/ck86/main-bower-files>

'use strict';

module.exports = {

  fonts: {
    dest: '<%%= path.dist %>/fonts',
    options: {
      filter: '**/*.{eot,svg,ttf,woff,woff2}'
    }
  }

  // Add config here if you need to copy other kind of files.
  //
  // images: {
  //   dest: '<%%= path.dist %>/img',
  //   options: {
  //     filter: '**/*.png'
  //   }
  // }

};
