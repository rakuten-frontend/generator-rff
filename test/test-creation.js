/* global describe, beforeEach, it */
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('Generator', function () {

    var generator;

    beforeEach(function () {
        generator = helpers
            .run(path.join(__dirname, '../app'))
            .inDir(path.join(__dirname, 'temp'))
            .withGenerators([
                [helpers.createDummyGenerator(), 'mocha:app'],
                [helpers.createDummyGenerator(), 'jasmine:app']
            ])
            .withOptions({
                'skip-install': true,
                'skip-welcome-message': true,
                'skip-install-message': true
            });
    });

    it('creates expected project files', function (done) {
        generator
            .withPrompt({
                name: 'Test Project'
            })
            .on('end', function () {
                assert.file([
                    'package.json',
                    'bower.json',
                    '.npmrc',
                    '.bowerrc',
                    '.gitignore',
                    '.gitattributes',
                    '.editorconfig',
                    'README.md'
                ]);
                assert.noFile([
                    '.yo-rc.json',
                ]);
                assert.fileContent([
                    ['package.json', /"name":\s+"test-project"/],
                    ['bower.json', /"name":\s+"test-project"/]
                ]);
                done();
            });
    });

    it('creates expected application files in default', function (done) {
        generator
            .withPrompt({
            })
            .on('end', function () {
                assert.file([
                    '.csslintrc',
                    '.jshintrc',
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
                ]);
                assert.noFile([
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
                ]);
                assert.noFileContent([
                    ['grunt/aliases.js', /'(.*:)?(jade|less|stylus|coffee|connect|mocha|jasmine|ssi)(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected application files with minimum options', function (done) {
        generator
            .withPrompt({
                configType: 'minimum'
            })
            .on('end', function () {
                assert.file([
                    'Gruntfile.js',
                    'grunt/aliases.js',
                    'grunt/browserSync.js',
                    'grunt/clean.js',
                    'grunt/copy.js',
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
                ]);
                assert.noFile([
                    '.csslintrc',
                    '.jshintrc',
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
                ]);
                assert.noFileContent([
                    ['grunt/aliases.js', /'(.*:)?(jade|less|stylus|coffee|validation|csslint|connect|mocha|jasmine|autoprefixer|sprite|htmlmin|cssmin|uglify|rev|ssi)(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "jade" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                markup: 'jade'
            })
            .on('end', function () {
                assert.file([
                    'grunt/jade.js',
                    'app/index.jade'
                ]);
                assert.noFile([
                    'app/index.html'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-contrib-jade"/],
                    ['grunt/aliases.js', /'(.*:)?jade(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "css" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                style: 'css'
            })
            .on('end', function () {
                assert.file([
                    'app/css/'
                ]);
                assert.noFile([
                    'grunt/sass.js',
                    'app/_sass/'
                ]);
                assert.noFileContent([
                    ['package.json', /"grunt-contrib-sass"/],
                    ['grunt/aliases.js', /'(.*:)?sass(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "libsass" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                style: 'libsass'
            })
            .on('end', function () {
                assert.file([
                    'grunt/sass.js',
                    'app/_sass/'
                ]);
                assert.noFile([
                    'app/css/'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-sass"/],
                    ['grunt/aliases.js', /'(.*:)?sass(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "less" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                style: 'less'
            })
            .on('end', function () {
                assert.file([
                    'grunt/less.js',
                    'app/_less/'
                ]);
                assert.noFile([
                    'app/css/'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-contrib-less"/],
                    ['grunt/aliases.js', /'(.*:)?less(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "stylus" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                style: 'stylus'
            })
            .on('end', function () {
                assert.file([
                    'grunt/stylus.js',
                    'app/_stylus/'
                ]);
                assert.noFile([
                    'app/css/'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-contrib-stylus"/],
                    ['grunt/aliases.js', /'(.*:)?stylus(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "coffee" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                script: 'coffee',
                testing: ['jshint']
            })
            .on('end', function () {
                assert.file([
                    'grunt/coffee.js',
                    'app/_coffee/'
                ]);
                assert.noFile([
                    'app/js/'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-contrib-coffee"/],
                    ['grunt/aliases.js', /'(.*:)?coffee(:.*)?'/]
                ]);
                assert.noFileContent([
                    ['.editorconfig', /\[\*\.js\]/],
                    ['.jshintrc', /"indent"/]
                ]);
                done();
            });
    });

    it('creates expected files with "validation" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                testing: ['validation']
            })
            .on('end', function () {
                assert.file([
                    'grunt/validation.js'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-html-validation"/],
                    ['grunt/aliases.js', /'(.*:)?validation(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "csslint" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                testing: ['csslint']
            })
            .on('end', function () {
                assert.file([
                    'grunt/csslint.js',
                    '.csslintrc'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-contrib-csslint"/],
                    ['grunt/aliases.js', /'(.*:)?csslint(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "jshint" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                testing: ['jshint']
            })
            .on('end', function () {
                assert.file([
                    'grunt/jshint.js',
                    '.jshintrc'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-contrib-jshint"/],
                    ['grunt/aliases.js', /'(.*:)?jshint(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "mocha" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                testing: ['mocha']
            })
            .on('end', function () {
                assert.file([
                    'grunt/mocha.js',
                    'grunt/connect.js'
                ]);
                assert.noFile([

                ]);
                assert.fileContent([
                    ['package.json', /"grunt-mocha"/],
                    ['package.json', /"grunt-contrib-connect"/],
                    ['grunt/aliases.js', /'(.*:)?mocha(:.*)?'/],
                    ['grunt/aliases.js', /'(.*:)?connect(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "jasmine" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                testing: ['jasmine']
            })
            .on('end', function () {
                assert.file([
                    'grunt/jasmine.js'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-contrib-jasmine"/],
                    ['grunt/aliases.js', /'(.*:)?jasmine(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "autoprefixer" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                utilities: ['autoprefixer']
            })
            .on('end', function () {
                assert.file([
                    'grunt/autoprefixer.js'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-autoprefixer"/],
                    ['grunt/aliases.js', /'(.*:)?autoprefixer(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "sprite" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                utilities: ['sprite']
            })
            .on('end', function () {
                assert.file([
                    'grunt/sprite.js',
                    'app/img/_sprites/'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-spritesmith"/],
                    ['grunt/aliases.js', /'(.*:)?sprite(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "webfont" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                utilities: ['webfont']
            })
            .on('end', function () {
                assert.file([
                    'grunt/webfont.js',
                    'app/img/_glyphs/'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-webfont"/],
                    ['grunt/aliases.js', /'(.*:)?webfont(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "ssi" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                server: ['ssi']
            })
            .on('end', function () {
                assert.file([
                    'grunt/ssi.js',
                    'app/inc/'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-ssi"/],
                    ['grunt/aliases.js', /'(.*:)?ssi(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "modernizr" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                libraries: ['modernizr']
            })
            .on('end', function () {
                assert.file([
                    'grunt/modernizr.js'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-modernizr"/],
                    ['bower.json', /"modernizr"/],
                    ['grunt/aliases.js', /'(.*:)?modernizr(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "htmlmin" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                optimization: ['htmlmin']
            })
            .on('end', function () {
                assert.file([
                    'grunt/htmlmin.js'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-contrib-htmlmin"/],
                    ['grunt/aliases.js', /'(.*:)?htmlmin(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "cssmin" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                optimization: ['cssmin']
            })
            .on('end', function () {
                assert.fileContent([
                    ['package.json', /"grunt-contrib-cssmin"/],
                    ['grunt/aliases.js', /'(.*:)?cssmin(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "uglify" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                optimization: ['uglify']
            })
            .on('end', function () {
                assert.fileContent([
                    ['package.json', /"grunt-contrib-uglify"/],
                    ['grunt/aliases.js', /'(.*:)?uglify(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "svgo" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                optimization: ['svgo']
            })
            .on('end', function () {
                assert.fileContent([
                    ['package.json', /"imagemin-svgo"/],
                    ['grunt/imagemin.js', /svg/]
                ]);
                done();
            });
    });

    it('creates expected files with "rev" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                optimization: ['rev']
            })
            .on('end', function () {
                assert.file([
                    'grunt/rev.js'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-rev"/],
                    ['grunt/aliases.js', /'(.*:)?rev(:.*)?'/]
                ]);
                done();
            });
    });

    it('creates expected files with "buildcontrol" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                distribution: ['buildcontrol']
            })
            .on('end', function () {
                assert.file([
                    'grunt/buildcontrol.js'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-build-control"/]
                ]);
                done();
            });
    });

    it('creates expected files with "ftp" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                distribution: ['ftp']
            })
            .on('end', function () {
                assert.file([
                    'grunt/ftp-deploy.js',
                    '.ftppass'
                ]);
                assert.fileContent([
                    ['package.json', /"grunt-ftp-deploy"/]
                ]);
                done();
            });
    });

    it('creates expected files with "store" option', function (done) {
        generator
            .withPrompt({
                configType: 'custom',
                store: true
            })
            .on('end', function () {
                assert.file([
                    '.yo-rc.json'
                ]);
                done();
            });
    });

});
