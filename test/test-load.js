/* jshint mocha: true */
'use strict';

var assert = require('assert');

describe('Generator', function () {

  it('can be imported without blowing up', function () {
    var app = require('../generators/app');
    assert(app !== undefined);
  });

});
