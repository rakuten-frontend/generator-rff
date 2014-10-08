// Connect web server
// grunt-contrib-connect: <https://github.com/gruntjs/grunt-contrib-connect>
// Connect: <https://github.com/senchalabs/connect>

'use strict';

module.exports = {

    // Server for testing framework
    test: {
        options: {
            port: 9002,
            open: false,
            base: [
                '<%%= path.test %>',
                '<%%= path.tmp %>',
                '<%%= path.src %>'
            ]
        }
    }

};
