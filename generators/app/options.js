'use strict';

module.exports = [
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
        name: 'Pug',
        value: 'pug',
        templates: ['grunt/pug.js', 'app/index.pug'],
        directories: [],
        packages: {'grunt-contrib-pug': '^1.0.0'}
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
        name: 'Sass',
        value: 'sass',
        templates: ['grunt/sass.js'],
        directories: ['app/_sass'],
        packages: {'grunt-sass': '^1.0.0'}
      },
      {
        name: 'Less',
        value: 'less',
        templates: ['grunt/less.js'],
        directories: ['app/_less'],
        packages: {'grunt-contrib-less': '^1.0.0'}
      },
      {
        name: 'Stylus',
        value: 'stylus',
        templates: ['grunt/stylus.js'],
        directories: ['app/_stylus'],
        packages: {'grunt-contrib-stylus': '^1.2.0'}
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
        packages: {'grunt-contrib-coffee': '^1.0.0'}
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
        templates: ['grunt/postcss.js'],
        directories: [],
        packages: {'grunt-postcss': '^0.8.0', 'autoprefixer': '^6.3.6'}
      },
      {
        name: 'CSS Sprites Generator',
        value: 'sprite',
        templates: ['grunt/sprite.js'],
        directories: ['app/img/_sprites'],
        packages: {'grunt-spritesmith': '^6.3.1'}
      },
      {
        name: 'Icon Fonts Generator',
        value: 'webfont',
        templates: ['grunt/webfont.js'],
        directories: ['app/img/_glyphs'],
        packages: {'grunt-webfont': '^1.3.0'}
      }
    ]
  },
  {
    name: 'testing',
    message: 'Testing',
    type: 'checkbox',
    choices: [
      {
        name: 'HTML Validation',
        value: 'htmllint',
        templates: ['grunt/htmllint.js'],
        directories: [],
        packages: {'grunt-html': '^7.0.0'}
      },
      {
        name: 'CSS Lint',
        value: 'csslint',
        templates: ['grunt/csslint.js', ['csslintrc', '.csslintrc']],
        directories: [],
        packages: {'grunt-contrib-csslint': '^1.0.0'}
      },
      {
        name: 'JSHint',
        value: 'jshint',
        templates: ['grunt/jshint.js', ['jshintrc', '.jshintrc']],
        directories: [],
        packages: {'grunt-contrib-jshint': '^1.0.0'}
      },
      {
        name: 'JSCS',
        value: 'jscs',
        templates: ['grunt/jscs.js', ['jscsrc', '.jscsrc']],
        directories: [],
        packages: {'grunt-jscs': '^2.8.0'}
      },
      {
        name: 'Mocha',
        value: 'mocha',
        templates: ['grunt/mocha.js'],
        directories: [],
        packages: {'grunt-mocha': '^1.0.1'}
      },
      {
        name: 'Jasmine',
        value: 'jasmine',
        templates: ['grunt/jasmine.js'],
        directories: [],
        packages: {'grunt-contrib-jasmine': '^1.0.3'}
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
        packages: {'grunt-ssi': 'github:kidwm/grunt-ssi#60a6e49'}
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
        packages: {'grunt-modernizr': '^1.0.2'}
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
        packages: {'grunt-contrib-htmlmin': '^1.3.0'}
      },
      {
        name: 'CSS Minification',
        value: 'cssmin',
        templates: [],
        directories: [],
        packages: {'grunt-contrib-cssmin': '^1.0.1'}
      },
      {
        name: 'JavaScript Minification',
        value: 'uglify',
        templates: [],
        directories: [],
        packages: {'grunt-contrib-uglify': '^1.0.1'}
      },
      {
        name: 'Static Assets Revisioning',
        value: 'rev',
        templates: ['grunt/filerev.js'],
        directories: [],
        packages: {'grunt-filerev': '^2.1.2'}
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
        packages: {'grunt-build-control': '^0.7.0'}
      },
      {
        name: 'Deployment over FTP',
        value: 'ftp',
        templates: ['grunt/ftp-deploy.js', ['ftppass', '.ftppass']],
        directories: [],
        packages: {'grunt-ftp-deploy': '^0.1.9'}
      }
    ]
  }
];
