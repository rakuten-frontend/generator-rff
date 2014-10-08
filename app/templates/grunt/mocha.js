// Run Mocha specs
// grunt-mocha: <https://github.com/kmiyashiro/grunt-mocha>

'use strict';

module.exports = {

    // Base options
    options: {
        reporter: 'Spec',
        run: true
    },

    // Test for all specs
    all: {
        options: {
            urls: [
                'http://localhost:<%%= connect.test.options.port %>/'
            ]
        }
    }

};
