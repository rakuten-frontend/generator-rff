'use strict';

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var _ = require('lodash');
var _s = require('underscore.string');
var mkdirp = require('mkdirp');
var pkg = require('../package.json');
var options = require('./options.js');

// Default config and presets
var defaultConfig = require('./config/default.json')[pkg.name];
var standardPreset = require('./config/standard.json')[pkg.name];
var minimumPreset = require('./config/minimum.json')[pkg.name];

var Generator = yeoman.generators.Base.extend({

  initializing: function () {
    var configType;

    this.pkg = pkg;

    // CLI options
    // jscs:disable requireDotNotation
    this.force = this.options['force'] || this.options['f'] || false;
    this.skipInstall = this.options['skip-install'] || this.options['s'] || false;
    this.skipWelcomeMessage = this.options['skip-welcome-message'] || false;
    this.skipInstallMessage = this.options['skip-install-message'] || false;

    this.option('config', {
      desc: 'Setup type for skipping the first prompt',
      type: String
    });
    configType = this.options['config'];
    if (configType === 'standard' || configType === 'minimum' || configType === 'custom' ||
        (configType === 'user' && this.config.existed)) {
      this.configType = configType;
    }
    // jscs:enable requireDotNotation
  },

  prompting: {
    // Setup prompting type
    askForType: function () {
      var done = this.async();
      var questions = [];
      var choices = [
        {
          name: 'Standard Preset',
          value: 'standard'
        },
        {
          name: 'Minimum Preset',
          value: 'minimum'
        },
        {
          name: 'Custom Configuration (Advanced)',
          value: 'custom'
        }
      ];
      var defaultType = 'standard';

      if (!this.skipWelcomeMessage) {
        this.log(yosay('Welcome to ' + this.pkg.name + ' v' + this.pkg.version));
      }

      if (!this.configType) {
        if (this.config.existed) {
          choices.splice(2, 0, {
            name: 'User Preset',
            value: 'user'
          });
          defaultType = 'user';
        }
        questions.push({
          type: 'list',
          name: 'configType',
          message: 'Setup Type',
          choices: choices,
          default: defaultType
        });
      }

      this.prompt(questions, function (answers) {
        if (typeof answers.configType !== 'undefined') {
          this.configType = answers.configType;
        }

        // Preset for skipping prompt
        switch (this.configType) {
          case 'standard':
            this.preset = standardPreset;
            break;
          case 'minimum':
            this.preset = minimumPreset;
            break;
          case 'user':
            this.preset = this.config.getAll();
            break;
          case 'custom':
            this.preset = {};
            break;
        }

        // Initial settings
        this.settings = _.assign({}, defaultConfig, this.config.getAll());

        done();
      }.bind(this));
    },

    // Project settings
    askFor: function () {
      var done = this.async();
      var questions = [];

      // Project name
      if (typeof this.preset.name === 'undefined' || this.preset.name === '') {
        questions.push({
          type: 'input',
          name: 'name',
          message: 'Project Name',
          default: this.settings.name || _s.titleize(this.appname)
        });
      }

      // Feature options
      options.forEach(function (option) {
        var question;
        var name = option.name;
        var type = option.type;
        if (typeof this.preset[name] === 'undefined') {
          switch (type) {
            case 'list':
              question = _.pick(option, 'name', 'message', 'type');
              question.choices = _.map(option.choices, function (choice) {
                var data = _.pick(choice, 'name', 'value', 'disabled');
                return data;
              }.bind(this));
              question.default = this.settings[name];
              break;
            case 'checkbox':
              question = _.pick(option, 'name', 'message', 'type', 'validate');
              question.choices = _.map(option.choices, function (choice) {
                var data = _.pick(choice, 'name', 'value', 'disabled');
                data.checked = _.contains(this.settings[name], data.value);
                return data;
              }.bind(this));
              break;
          }
          questions.push(question);
        }
      }.bind(this));

      // Save config or not
      if (this.configType === 'custom') {
        questions.push({
          type: 'confirm',
          name: 'store',
          message: 'Do you want to save this config to .yo-rc.json?',
          default: false
        });
      }

      this.prompt(questions, function (answers) {
        // Finalize generator settings
        this.settings.name = typeof answers.name !== 'undefined' ? answers.name : this.preset.name;
        this.store = answers.store || false;
        options.forEach(function (option) {
          var name = option.name;
          this.settings[name] = answers[name] || this.preset[name];
        }.bind(this));

        done();
      }.bind(this));
    }
  },

  configuring: {
    // Save config to .yo-rc.json
    store: function () {
      if (this.store) {
        this.config.set(this.settings);
      }
    },

    // Config for template generator
    configureTemplate: function () {
      this.cfg = {};

      // Copy from prompt settings
      Object.keys(this.settings).forEach(function (key) {
        this.cfg[key] = this.settings[key];
      }.bind(this));

      // Boolean config
      options.forEach(function (option) {
        var name = option.name;
        option.choices.forEach(function (choice) {
          var value = choice.value;
          switch (option.type) {
            case 'list':
              this.cfg[value] = value === this.cfg[name];
              break;
            case 'checkbox':
              this.cfg[value] = _.contains(this.cfg[name], value);
              break;
          }
        }.bind(this));
      }.bind(this));

      // Extra config
      this.cfg.slugName = _s.slugify(this.cfg.name);
      this.cfg.testing = this.cfg.mocha || this.cfg.jasmine;
      this.cfg.cssSourceMap = (this.cfg.css && this.cfg.autoprefixer) ||
                              this.cfg.sass || this.cfg.libsass ||
                              (this.cfg.less && (this.cfg.autoprefixer || this.cfg.cssmin));
      this.cfg.jsSourceMap = this.cfg.coffee;
    }
  },

  writing: {
    // Console before installation
    start: function () {
      if (!this.skipInstallMessage) {
        this.log('\n----- Starting Installation -----\n');
      }
    },

    projectfiles: function () {
      this.template('_bower.json', 'bower.json');
      this.copy('bowerrc', '.bowerrc');
      this.copy('editorconfig', '.editorconfig');
      this.template('_README.md', 'README.md');
    },

    gitfiles: function () {
      this.template('gitignore', '.gitignore');
      this.copy('gitattributes', '.gitattributes');
    },

    gruntfiles: function () {
      this.template('Gruntfile.js', 'Gruntfile.js');

      // Built-in features
      this.template('grunt/aliases.js', 'grunt/aliases.js');
      this.template('grunt/wiredep.js', 'grunt/wiredep.js');
      this.template('grunt/bower.js', 'grunt/bower.js');
      this.template('grunt/browserSync.js', 'grunt/browserSync.js');
      this.template('grunt/clean.js', 'grunt/clean.js');
      this.template('grunt/copy.js', 'grunt/copy.js');
      this.template('grunt/imagemin.js', 'grunt/imagemin.js');
      this.template('grunt/usemin.js', 'grunt/usemin.js');
      this.template('grunt/useminPrepare.js', 'grunt/useminPrepare.js');
      this.template('grunt/watch.js', 'grunt/watch.js');
      this.template('grunt/newer.js', 'grunt/newer.js');
      this.template('grunt/markdown.js', 'grunt/markdown.js');
      this.template('grunt/markdownpdf.js', 'grunt/markdownpdf.js');
    },

    app: function () {
      mkdirp.sync('app');
      mkdirp.sync('app/img');
    },

    options: function () {
      var pkgTemplate = this.read('_package.json');
      var pkg = JSON.parse(_.template(pkgTemplate)(this));
      var pkgString;
      var devDependencies = {};

      // Option features
      options.forEach(function (option) {
        option.choices.forEach(function (choice) {

          var value = choice.value;

          if (!this.cfg[value]) {
            return;
          }

          // Generate files
          choice.templates.forEach(function (template) {
            if (Array.isArray(template)) {
              this.template(template[0], template[1]);
            }
            else {
              this.template(template, template);
            }
          }.bind(this));

          // Copy directories
          choice.directories.forEach(function (directory) {
            if (Array.isArray(directory)) {
              this.directory(directory[0], directory[1]);
            }
            else {
              this.directory(directory, directory);
            }
          }.bind(this));

          // Add plugins to devDependencies
          Object.keys(choice.packages).forEach(function (key) {
            pkg.devDependencies[key] = choice.packages[key];
          });

        }.bind(this));
      }.bind(this));

      // Generate package.json after sorting
      Object.keys(pkg.devDependencies).sort().forEach(function (key) {
        devDependencies[key] = pkg.devDependencies[key];
      });
      pkg.devDependencies = devDependencies;
      pkgString = JSON.stringify(pkg, null, '  ') + '\n';
      this.write('package.json', pkgString);
    }
  },

  end: function () {
    var generator;

    // Compose with child generator for testing framework
    if (this.cfg.testing) {
      if (this.cfg.mocha) {
        generator = 'mocha';
      }
      else if (this.cfg.jasmine) {
        generator = 'jasmine';
      }
      this.composeWith(generator, {
        options: {
          'force': this.force,
          'skip-install': this.skipInstall
        }
      });
    }

    if (!this.skipInstall) {
      this.installDependencies({
        skipMessage: this.skipInstallMessage
      });
    }

  }

});

module.exports = Generator;
