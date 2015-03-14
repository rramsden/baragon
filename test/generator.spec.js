'use strict';

var helper = require('./helper');
var expect = require('chai').expect;
var Baragon = require('../lib/baragon');

describe('Generator module', function() {
  var schema = helper.loadSchema(__dirname + "/fixtures/schema.json");

  it("generates a client", function() {
    var generator = new Baragon.ClientGenerator("Client", schema);
    expect(generator.render()).to.match(/function Client/);
  });
});
