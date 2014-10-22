# generator-rff [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> Fully customizable [Yeoman](http://yeoman.io/) generator for scaffolding a front-end web app.

## Features

### Supported Languages
* **Markup**
  * HTML
  * Jade
* **Stylesheet**
  * CSS
  * Sass (Ruby)
  * Sass (Libsass)
  * Less
  * Stylus
* **Script**
  * JavaScript
  * CoffeeScript

### Tasks and Functions

* **Utilities**
  * Wiring up Bower Components (Built-in)
  * CSS Autoprefixer
  * CSS Sprites Generator
  * Icon Fonts Generator
* **Testing**
  * W3C HTML Validation
  * CSS Lint
  * JSHint
  * Mocha
  * Jasmine
* **Preview Server**
  * BrowserSync (Built-in)
  * SSI Support
* **Support Libraries**
  * Modernizr
* **Optimization**
  * Image Optimization (Built-in)
  * HTML Minification
  * CSS Minification
  * JavaScript Minification
  * SVG Optimization
  * Static Assets Revisioning
* **Distribution**
  * Deployment to Git Repository
  * Deployment over FTP

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

[npm-image]: https://img.shields.io/npm/v/generator-rff.svg?style=flat
[npm-url]: https://www.npmjs.org/package/generator-rff
[travis-image]: https://img.shields.io/travis/rakuten-frontend/generator-rff/master.svg?style=flat
[travis-url]: https://travis-ci.org/rakuten-frontend/generator-rff
