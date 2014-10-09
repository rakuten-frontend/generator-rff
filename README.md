# generator-rff [![Build Status][travis-image]][travis-url]

> Yeoman generator for scaffolding structural and high performance web site.

## Overview

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

## Getting Started
Make sure you have [Node.js](http://nodejs.org/) and [yo](https://github.com/yeoman/yo) installed:

```shell
$ npm install -g yo
```

To install generator-rff, run:

```shell
$ npm install -g generator-rff
```

Make a new directory, and cd into it:

```shell
$ mkdir my-new-project && cd $_
```

Finally, initiate the generator:

```shell
$ yo rff
```

## Generator Options
* `-s`, `--skip-install`  
  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

* `--config=<type>`  
  Setup type. If specified, the first prompt will be skipped.  
  You can set `standard`, `minimum`, `user` or `custom`.

* `--skip-welcome-message`  
  Skips app welcome message.

* `--skip-install-message`  
  Skips app installation message.

## See Also
* [Yeoman](http://yeoman.io/) : Modern workflows for modern webapps
* [Grunt](http://gruntjs.com/) : The JavaScript task runner
* [Bower](http://bower.io/) : Package manager for the web

## License
Copyright (c) 2014 Rakuten, Inc. Licensed under the [MIT License](http://opensource.org/licenses/MIT).

[travis-image]: https://img.shields.io/travis/rakuten-frontend/generator-rff/master.svg?style=flat
[travis-url]: https://travis-ci.org/rakuten-frontend/generator-rff
