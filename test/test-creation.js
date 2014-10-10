/* global describe, beforeEach, it */
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;

describe('Generator', function () {

    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('rff:app', [
                '../../app',
                [
                    helpers.createDummyGenerator(),
                    'mocha:app'
                ],
                [
                    helpers.createDummyGenerator(),
                    'jasmine:app'
                ]
            ]);
            this.app.options['skip-install'] = true;
            this.app.options['skip-welcome-message'] = true;
            done();
        }.bind(this));
    });

    it('creates expected project files', function (done) {
        var expected = [
                ['package.json', /"name":\s+"test-project"/],
                ['bower.json', /"name":\s+"test-project"/],
                '.npmrc',
                '.gitignore',
                '.gitattributes',
                '.editorconfig',
                '.jshintrc',
                'README.md'
            ],
            unexpected = [
                '.yo-rc.json',
            ];

        helpers.mockPrompt(this.app, {
            name: 'Test Project'
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            helpers.assertNoFile(unexpected);
            done();
        });
    });

    it('creates expected application files in default', function (done) {
        var expected = [
                '.csslintrc',
                'Gruntfile.js',
                'grunt/aliases.js',
                'grunt/browserSync.js',
                'grunt/clean.js',
                'grunt/copy.js',
                'grunt/validation.js',
                'grunt/csslint.js',
                'grunt/jshint.js',
                'grunt/imagemin.js',
                'grunt/sprite.js',
                'grunt/usemin.js',
                'grunt/useminPrepare.js',
                'grunt/watch.js',
                'grunt/newer.js',
                'grunt/htmlmin.js',
                'grunt/rev.js',
                'grunt/sass.js',
                'grunt/autoprefixer.js',
                'app/index.html',
                'app/_sass/',
                'app/js/',
                'app/img/',
                'app/img/_sprites/'
            ],
            unexpected = [
                'grunt/less.js',
                'grunt/stylus.js',
                'grunt/coffee.js',
                'grunt/mocha.js',
                'grunt/jasmine.js',
                'grunt/ssi.js',
                'app/index.jade',
                'app/css/',
                'app/_less/',
                'app/_stylus/',
                'app/_coffee/',
                'app/inc/'
            ],
            unexpectedContent = [
                ['grunt/aliases.js', /'(.*:)?(jade|less|stylus|coffee|connect|mocha|jasmine|ssi)(:.*)?'/]
            ];

        helpers.mockPrompt(this.app, {
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            helpers.assertNoFile(unexpected);
            helpers.assertNoFileContent(unexpectedContent);
            done();
        });
    });

    it('creates expected application files with minimum options', function (done) {
        var expected = [
                'Gruntfile.js',
                'grunt/aliases.js',
                'grunt/browserSync.js',
                'grunt/clean.js',
                'grunt/copy.js',
                'grunt/jshint.js',
                'grunt/imagemin.js',
                'grunt/usemin.js',
                'grunt/useminPrepare.js',
                'grunt/watch.js',
                'grunt/newer.js',
                'grunt/sass.js',
                'app/index.html',
                'app/_sass/',
                'app/js/',
                'app/img/'
            ],
            unexpected = [
                '.csslintrc',
                'grunt/htmlmin.js',
                'grunt/rev.js',
                'grunt/less.js',
                'grunt/stylus.js',
                'grunt/coffee.js',
                'grunt/validation.js',
                'grunt/csslint.js',
                'grunt/mocha.js',
                'grunt/jasmine.js',
                'grunt/autoprefixer.js',
                'grunt/sprite.js',
                'grunt/ssi.js',
                'app/index.jade',
                'app/css/',
                'app/_less/',
                'app/_stylus/',
                'app/_coffee/',
                'app/inc/',
                'app/img/_sprites/'
            ],
            unexpectedContent = [
                ['grunt/aliases.js', /'(.*:)?(jade|less|stylus|coffee|validation|csslint|connect|mocha|jasmine|autoprefixer|sprite|htmlmin|cssmin|uglify|rev|ssi)(:.*)?'/]
            ];

        helpers.mockPrompt(this.app, {
            configType: 'minimum'
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            helpers.assertNoFile(unexpected);
            helpers.assertNoFileContent(unexpectedContent);
            done();
        });
    });

    it('creates expected files with "jade" option', function (done) {
        var expected = [
                ['package.json', /"grunt-contrib-jade"/],
                ['grunt/aliases.js', /'(.*:)?jade(:.*)?'/],
                'grunt/jade.js',
                'app/index.jade'
            ],
            unexpected = [
                'app/index.html'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            markup: 'jade'
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            helpers.assertNoFile(unexpected);
            done();
        });
    });

    it('creates expected files with "css" option', function (done) {
        var expected = [
                'app/css/'
            ],
            unexpected = [
                'grunt/sass.js',
                'app/_sass/'
            ],
            unexpectedContent = [
                ['package.json', /"grunt-contrib-sass"/],
                ['grunt/aliases.js', /'(.*:)?sass(:.*)?'/]
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            style: 'css'
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            helpers.assertNoFile(unexpected);
            helpers.assertNoFileContent(unexpectedContent);
            done();
        });
    });

    it('creates expected files with "libsass" option', function (done) {
        var expected = [
                ['package.json', /"grunt-sass"/],
                ['grunt/aliases.js', /'(.*:)?sass(:.*)?'/],
                'grunt/sass.js',
                'app/_sass/'
            ],
            unexpected = [
                'app/css/'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            style: 'libsass'
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            helpers.assertNoFile(unexpected);
            done();
        });
    });

    it('creates expected files with "less" option', function (done) {
        var expected = [
                ['package.json', /"grunt-contrib-less"/],
                ['grunt/aliases.js', /'(.*:)?less(:.*)?'/],
                'grunt/less.js',
                'app/_less/'
            ],
            unexpected = [
                'app/css/'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            style: 'less'
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            helpers.assertNoFile(unexpected);
            done();
        });
    });

    it('creates expected files with "stylus" option', function (done) {
        var expected = [
                ['package.json', /"grunt-contrib-stylus"/],
                ['grunt/aliases.js', /'(.*:)?stylus(:.*)?'/],
                'grunt/stylus.js',
                'app/_stylus/'
            ],
            unexpected = [
                'app/css/'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            style: 'stylus'
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            helpers.assertNoFile(unexpected);
            done();
        });
    });

    it('creates expected files with "coffee" option', function (done) {
        var expected = [
                ['package.json', /"grunt-contrib-coffee"/],
                ['grunt/aliases.js', /'(.*:)?coffee(:.*)?'/],
                'grunt/coffee.js',
                'app/_coffee/'
            ],
            unexpected = [
                'app/js/'
            ],
            unexpectedContent = [
                ['.editorconfig', /\[\*\.js\]/],
                ['.jshintrc', /"indent"/]
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            script: 'coffee'
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            helpers.assertNoFile(unexpected);
            helpers.assertNoFileContent(unexpectedContent);
            done();
        });
    });

    it('creates expected files with "validation" option', function (done) {
        var expected = [
                ['package.json', /"grunt-html-validation"/],
                ['grunt/aliases.js', /'(.*:)?validation(:.*)?'/],
                'grunt/validation.js'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            verification: ['validation']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "csslint" option', function (done) {
        var expected = [
                ['package.json', /"grunt-contrib-csslint"/],
                ['grunt/aliases.js', /'(.*:)?csslint(:.*)?'/],
                'grunt/csslint.js',
                '.csslintrc'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            verification: ['csslint']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "mocha" option', function (done) {
        var expected = [
                ['package.json', /"grunt-mocha"/],
                ['package.json', /"grunt-contrib-connect"/],
                ['grunt/aliases.js', /'(.*:)?mocha(:.*)?'/],
                ['grunt/aliases.js', /'(.*:)?connect(:.*)?'/],
                'grunt/mocha.js',
                'grunt/connect.js'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            verification: ['mocha']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "jasmine" option', function (done) {
        var expected = [
                ['package.json', /"grunt-contrib-jasmine"/],
                ['grunt/aliases.js', /'(.*:)?jasmine(:.*)?'/],
                'grunt/jasmine.js'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            verification: ['jasmine']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "autoprefixer" option', function (done) {
        var expected = [
                ['package.json', /"grunt-autoprefixer"/],
                ['grunt/aliases.js', /'(.*:)?autoprefixer(:.*)?'/],
                'grunt/autoprefixer.js'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            utility: ['autoprefixer']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "sprite" option', function (done) {
        var expected = [
                ['package.json', /"grunt-spritesmith"/],
                ['grunt/aliases.js', /'(.*:)?sprite(:.*)?'/],
                'grunt/sprite.js',
                'app/img/_sprites/'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            utility: ['sprite']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "webfont" option', function (done) {
        var expected = [
                ['package.json', /"grunt-webfont"/],
                ['grunt/aliases.js', /'(.*:)?webfont(:.*)?'/],
                'grunt/webfont.js',
                'app/img/_glyphs/'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            utility: ['webfont']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "ssi" option', function (done) {
        var expected = [
                ['package.json', /"grunt-ssi"/],
                ['grunt/aliases.js', /'(.*:)?ssi(:.*)?'/],
                'grunt/ssi.js',
                'app/inc/'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            server: ['ssi']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "modernizr" option', function (done) {
        var expected = [
                ['package.json', /"grunt-modernizr"/],
                ['bower.json', /"modernizr"/],
                ['grunt/aliases.js', /'(.*:)?modernizr(:.*)?'/],
                'grunt/modernizr.js'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            library: ['modernizr']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "htmlmin" option', function (done) {
        var expected = [
                ['package.json', /"grunt-contrib-htmlmin"/],
                ['grunt/aliases.js', /'(.*:)?htmlmin(:.*)?'/],
                'grunt/htmlmin.js'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            optimization: ['htmlmin']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "cssmin" option', function (done) {
        var expected = [
                ['package.json', /"grunt-contrib-cssmin"/],
                ['grunt/aliases.js', /'(.*:)?cssmin(:.*)?'/]
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            optimization: ['cssmin']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "uglify" option', function (done) {
        var expected = [
                ['package.json', /"grunt-contrib-uglify"/],
                ['grunt/aliases.js', /'(.*:)?uglify(:.*)?'/]
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            optimization: ['uglify']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "svgo" option', function (done) {
        var expected = [
                ['package.json', /"imagemin-svgo"/],
                ['grunt/imagemin.js', /svg/]
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            optimization: ['svgo']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "rev" option', function (done) {
        var expected = [
                ['package.json', /"grunt-rev"/],
                ['grunt/aliases.js', /'(.*:)?rev(:.*)?'/],
                'grunt/rev.js'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            optimization: ['rev']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "buildcontrol" option', function (done) {
        var expected = [
                ['package.json', /"grunt-build-control"/],
                'grunt/buildcontrol.js'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            distribution: ['buildcontrol']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "ftp" option', function (done) {
        var expected = [
                ['package.json', /"grunt-ftp-deploy"/],
                'grunt/ftp-deploy.js',
                '.ftppass'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            distribution: ['ftp']
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with "store" option', function (done) {
        var expected = [
                '.yo-rc.json'
            ];

        helpers.mockPrompt(this.app, {
            configType: 'custom',
            store: true
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

});
