// Run Jasmine specs
// grunt-contrib-jasmine: <https://github.com/gruntjs/grunt-contrib-jasmine>

'use strict';

module.exports = {

    // Test for all specs
    all: {
        // Insert source files here
        // src: '',
        options: {
            specs: '<%%= path.test %>/spec/**/*.js'
        }
    }

};
