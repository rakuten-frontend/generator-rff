// Deploy over FTP
//
// grunt-ftp-deploy: <https://github.com/zonak/grunt-ftp-deploy>

'use strict';

module.exports = {
  dist: {
    auth: {
      host: 'server.com',
      port: 21
    },
    src: '<%%= path.dist %>',
    dest: '/path/to/destination/folder',
    exclusions: [
      '<%%= path.dist %>/.git*',
      '<%%= path.dist %>/**/.DS_Store',
      '<%%= path.dist %>/**/Thumbs.db'
    ]
  }
};
