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

        jscs: {
            options: {
                config: '.jscsrc'
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

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/*.js']
            }
        }

    });

    grunt.registerTask('lint', [
        'jshint',
        'jscs'
    ]);

    grunt.registerTask('test', [
        'lint',
        'mochaTest'
    ]);

    grunt.registerTask('default', [
        'test'
    ]);

};
