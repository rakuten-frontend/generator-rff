'use strict';

var options = [
  {
    name: 'markup',
    message: 'Markup Language',
    type: 'list',
    choices: [
      {
        name: 'HTML',
        value: 'html',
        templates: ['app/index.html'],
        directories: [],
        packages: {}
      },
      {
        name: 'Jade',
        value: 'jade',
        templates: ['grunt/jade.js', 'app/index.jade'],
        directories: [],
        packages: {'grunt-contrib-jade': '~0.13.0'}
      }
    ]
  },
  {
    name: 'style',
    message: 'Stylesheet Language',
    type: 'list',
    choices: [
      {
        name: 'CSS',
        value: 'css',
        templates: [],
        directories: ['app/css'],
        packages: {}
      },
      {
        name: 'Sass (Ruby)',
        value: 'sass',
        templates: ['grunt/sass.js'],
        directories: ['app/_sass'],
        packages: {'grunt-contrib-sass': '~0.8.1'}
      },
      {
        name: 'Sass (Libsass)',
        value: 'libsass',
        templates: [['grunt/libsass.js', 'grunt/sass.js']],
        directories: ['app/_sass'],
        packages: {'grunt-sass': '~0.16.1'}
      },
      {
        name: 'Less',
        value: 'less',
        templates: ['grunt/less.js'],
        directories: ['app/_less'],
        packages: {'grunt-contrib-less': '~0.11.0'}
      },
      {
        name: 'Stylus',
        value: 'stylus',
        templates: ['grunt/stylus.js'],
        directories: ['app/_stylus'],
        packages: {'grunt-contrib-stylus': '~0.20.0'}
      }
    ]
  },
  {
    name: 'script',
    message: 'Script Language',
    type: 'list',
    choices: [
      {
        name: 'JavaScript',
        value: 'js',
        templates: [],
        directories: ['app/js'],
        packages: {}
      },
      {
        name: 'CoffeeScript',
        value: 'coffee',
        templates: ['grunt/coffee.js'],
        directories: ['app/_coffee'],
        packages: {'grunt-contrib-coffee': '~0.12.0'}
      }
    ]
  },
  {
    name: 'utilities',
    message: 'Utilities',
    type: 'checkbox',
    choices: [
      {
        name: 'CSS Autoprefixer',
        value: 'autoprefixer',
        templates: ['grunt/autoprefixer.js'],
        directories: [],
        packages: {'grunt-autoprefixer': '~2.0.0'}
      },
      {
        name: 'CSS Sprites Generator',
        value: 'sprite',
        templates: ['grunt/sprite.js'],
        directories: ['app/img/_sprites'],
        packages: {'grunt-spritesmith': '~2.1.1'}
      },
      {
        name: 'Icon Fonts Generator',
        value: 'webfont',
        templates: ['grunt/webfont.js'],
        directories: ['app/img/_glyphs'],
        packages: {'grunt-webfont': '~0.4.8'}
      }
    ]
  },
  {
    name: 'testing',
    message: 'Testing',
    type: 'checkbox',
    choices: [
      {
        name: 'W3C HTML Validation',
        value: 'validation',
        templates: ['grunt/validation.js'],
        directories: [],
        packages: {'grunt-html-validation': '~0.1.17'}
      },
      {
        name: 'CSS Lint',
        value: 'csslint',
        templates: ['grunt/csslint.js', ['csslintrc', '.csslintrc']],
        directories: [],
        packages: {'grunt-contrib-csslint': '~0.3.1'}
      },
      {
        name: 'JSHint',
        value: 'jshint',
        templates: ['grunt/jshint.js', ['jshintrc', '.jshintrc']],
        directories: [],
        packages: {'grunt-contrib-jshint': '~0.10.0'}
      },
      {
        name: 'JSCS',
        value: 'jscs',
        templates: ['grunt/jscs.js', ['jscsrc', '.jscsrc']],
        directories: [],
        packages: {'grunt-jscs': '~0.8.1'}
      },
      {
        name: 'Mocha',
        value: 'mocha',
        templates: ['grunt/mocha.js', 'grunt/connect.js'],
        directories: [],
        packages: {'grunt-mocha': '~0.4.10', 'grunt-contrib-connect': '~0.8.0'}
      },
      {
        name: 'Jasmine',
        value: 'jasmine',
        templates: ['grunt/jasmine.js'],
        directories: [],
        packages: {'grunt-contrib-jasmine': '~0.8.1'}
      }
    ],
    validate: function (answer) {
      var duplicateTest = answer && answer.indexOf('mocha') !== -1 && answer.indexOf('jasmine') !== -1;
      return duplicateTest ? 'You can choose only one of Macha or Jasmine.' : true;
    }
  },
  {
    name: 'server',
    message: 'Preview Server Add-ons',
    type: 'checkbox',
    choices: [
      {
        name: 'SSI Support',
        value: 'ssi',
        templates: ['grunt/ssi.js'],
        directories: ['app/inc'],
        packages: {'grunt-ssi': '~0.2.1'}
      }
    ]
  },
  {
    name: 'libraries',
    message: 'Libraries',
    type: 'checkbox',
    choices: [
      {
        name: 'Modernizr',
        value: 'modernizr',
        templates: ['grunt/modernizr.js'],
        directories: [],
        packages: {'grunt-modernizr': '~0.6.0'}
      }
    ]
  },
  {
    name: 'optimization',
    message: 'Optimization',
    type: 'checkbox',
    choices: [
      {
        name: 'HTML Minification',
        value: 'htmlmin',
        templates: ['grunt/htmlmin.js'],
        directories: [],
        packages: {'grunt-contrib-htmlmin': '~0.3.0'}
      },
      {
        name: 'CSS Minification',
        value: 'cssmin',
        templates: [],
        directories: [],
        packages: {'grunt-contrib-cssmin': '~0.10.0'}
      },
      {
        name: 'JavaScript Minification',
        value: 'uglify',
        templates: [],
        directories: [],
        packages: {'grunt-contrib-uglify': '~0.6.0'}
      },
      {
        name: 'SVG Optimization',
        value: 'svgo',
        templates: [],
        directories: [],
        packages: {}
      },
      {
        name: 'Static Assets Revisioning',
        value: 'rev',
        templates: ['grunt/rev.js'],
        directories: [],
        packages: {'grunt-rev': '~0.1.0'}
      }
    ]
  },
  {
    name: 'distribution',
    message: 'Distribution',
    type: 'checkbox',
    choices: [
      {
        name: 'Deployment to Git Repository',
        value: 'buildcontrol',
        templates: ['grunt/buildcontrol.js'],
        directories: [],
        packages: {'grunt-build-control': '~0.1.3'}
      },
      {
        name: 'Deployment over FTP',
        value: 'ftp',
        templates: ['grunt/ftp-deploy.js', ['ftppass', '.ftppass']],
        directories: [],
        packages: {'grunt-ftp-deploy': '~0.1.9'}
      }
    ]
  }
];

module.exports = options;
