generator-rff
=============

> Yeoman generator for scaffolding structural and high performance web site.

Overview
--------

### Built-in Features

* Preview Server with BrowserSync
* Validations (W3C HTML Validation, CSS Lint, JSHint)
* Concatenation of CSS/JS Files
* Image Optimization
* CSS Sprites Generator
* Library Management with Bower

### Supported Languages and Frameworks

* **Markup:** HTML, Jade
* **Stylesheet:** CSS, Sass, Less, Stylus
* **Script:** JavaScript, CoffeeScript
* **Test:** Mocha, Jasmine

### Optional Features

* Minification of CSS and JavaScript
* CSS Autoprefixing
* Static Assets Revisioning
* SSI Support in Preview Server

Getting Started
---------------

Make sure you have [Node.js](http://nodejs.org/) and [yo](https://github.com/yeoman/yo) installed:

```
$ npm install -g yo
```

To install generator-rff, run:

```
$ npm install -g generator-rff
```

Make a new directory, and cd into it:

```
$ mkdir my-new-project && cd $_
```

Finally, initiate the generator:

```
$ yo rff
```

Generator Options
-----------------

* `-s`, `--skip-install`  
  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

* `--config=<type>`  
  Setup type. If specified, the first prompt will be skipped.  
  You can set `standard`, `minimum`, `user` or `custom`.

* `--skip-welcome-message`  
  Skips app welcome message.

* `--skip-install-message`  
  Skips app installation message.

Release History
---------------

**v0.3.2** - 2014/07/17

* Switch to BrowserSync server.
* Improve grunt watch task.
* Upgrade Autoprefixer to v2.1.
* Upgrade grunt-spritesmith to v2.1.
* Support git management in the dist directory. e.g. grunt-build-control.
* Add .gitattributes.

**v0.3.1** - 2014/07/02

* Prevent unexpected copy to the dist directory.
* Improve the performance of usemin task.
* Prevent error in case of no sprite image.
* Insert "~" instead of "^" when npm install --save, --save-dev.
* Update text in readme/help/prompt.

**v0.3.0** - 2014/05/21

* Support Bower.
* Support testing frameworks.
* Make configurable using .yo-rc.json.
* Include CSS/JS concatenation task as built-in.
* Separate minify options of CSS and JavaScript.
* Discard support of `grunt server` alias.
* Update dependent packages.

**v0.2.2** - 2014/04/11

* Define `grunt build` as pure build task.
* Update dependent packages.

**v0.2.1** - 2014/04/04

* Support Stylus and *.sass files.
* Rename grunt alias `grunt server` to `grunt serve`.
* Separate all kinds of vendor libraries into "vendor" directory.
* Use absolute URI reference for all assets.

**v0.2.0** - 2014/03/31

* Support more languages: Jade, Less, CoffeeScript.
* Update directory and build structure.
* Add example pages and readme content.
* Update CLI prompt.

**v0.1.2** - 2014/03/19

* Optimize grunt performance using grunt-newer and time-grunt.
* Improve CLI messages.

**v0.1.1** - 2014/03/18

* Fix bug of grunt script.

**v0.1.0** - 2014/03/18

* Initial release.

See Also
--------

* [Yeoman](http://yeoman.io/) : Modern workflows for modern webapps
* [Grunt](http://gruntjs.com/) : The JavaScript task runner
* [Bower](http://bower.io/) : Package manager for the web

License
-------

Copyright (c) 2014 Rakuten, Inc. Licensed under the [MIT License](http://opensource.org/licenses/MIT).
