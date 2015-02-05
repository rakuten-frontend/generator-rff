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
    },

    bump: {
      options: {
        files: ['package.json'],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['-a'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Release v%VERSION%',
        push: true,
        pushTo: 'origin',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false
      }
    },

    'npm-publish': {
      options: {
        abortIfDirty: true
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

  grunt.registerTask('release', 'Release package after test and bump.', function (type) {
    grunt.task.run([
      'test',
      'bump:' + (type || 'patch'),
      'npm-publish'
    ]);
  });

};
