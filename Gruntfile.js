'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            app: {
                files: [{
                    src: ['app/*.js']
                }]
            },
            test: {
                files: [{
                    src: ['test/*.js']
                }]
            },
            grunt: {
                files: [{
                    src: ['Gruntfile.js']
                }]
            }
        },

        shell: {
            test: {
                options: {
                    stdout: true,
                    stderr: true
                },
                command: 'npm test'
            }
        }

    });

    grunt.registerTask('default', [
        'jshint',
        'shell'
    ]);

};
