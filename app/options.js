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
                packages: {'grunt-contrib-jade': '~0.11.0'}
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
                packages: {'grunt-contrib-sass': '~0.7.3'}
            },
            {
                name: 'Sass (Libsass)',
                value: 'libsass',
                templates: [['grunt/libsass.js', 'grunt/sass.js']],
                directories: ['app/_sass'],
                packages: {'grunt-sass': '~0.14.2'}
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
                packages: {'grunt-contrib-stylus': '~0.16.0'}
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
                packages: {'grunt-contrib-coffee': '~0.10.1'}
            }
        ]
    },
    {
        name: 'utility',
        message: 'Utilities',
        type: 'checkbox',
        choices: [
            {
                name: 'CSS Autoprefixing',
                value: 'autoprefixer',
                templates: ['grunt/autoprefixer.js'],
                directories: [],
                packages: {'grunt-autoprefixer': '~0.8.1'}
            },
            {
                name: 'CSS Sprites Generator',
                value: 'sprite',
                templates: ['grunt/sprite.js'],
                directories: ['app/img/_sprites'],
                packages: {'grunt-spritesmith': '~2.1.1'}
            },
            {
                name: 'Web Fonts Generator',
                value: 'webfont',
                templates: ['grunt/webfont.js'],
                directories: ['app/img/_glyphs'],
                packages: {'grunt-webfont': '~0.4.8'}
            }
        ]
    },
    {
        name: 'verification',
        message: 'Verification',
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
                packages: {'grunt-contrib-csslint': '~0.2.0'}
            },
            {
                name: 'Mocha Test',
                value: 'mocha',
                templates: ['grunt/mocha.js', 'grunt/connect.js'],
                directories: [],
                packages: {'grunt-mocha': '~0.4.10', 'grunt-contrib-connect': '~0.7.1'}
            },
            {
                name: 'Jasmine Test',
                value: 'jasmine',
                templates: ['grunt/jasmine.js'],
                directories: [],
                packages: {'grunt-contrib-jasmine': '~0.6.4'}
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
        name: 'library',
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
                packages: {'grunt-contrib-cssmin': '~0.9.0'}
            },
            {
                name: 'JavaScript Minification',
                value: 'uglify',
                templates: [],
                directories: [],
                packages: {'grunt-contrib-uglify': '~0.4.0'}
            },
            {
                name: 'SVG Optinization',
                value: 'svgo',
                templates: [],
                directories: [],
                packages: {'imagemin-svgo': '~1.0.2'}
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
                packages: {'grunt-ftp-deploy': '~0.1.7'}
            }
        ]
    }
];

module.exports = options;
