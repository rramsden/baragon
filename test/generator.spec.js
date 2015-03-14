'use strict';

var helper = require('./helper');
var expect = require('chai').expect;
var Baragon = require('../lib/baragon');
var fs = require('fs');

describe('Generator module', function() {
  var schema = helper.loadSchema(__dirname + "/fixtures/schema.json");

  it("generates a client", function() {
    var tempDir = helper.tempDir();
    var generator = new Baragon.ClientGenerator("Client", schema);
    var writePath = tempDir + "/client.js";

    fs.writeFileSync(writePath, generator.render());
    var context = helper.loadModule(writePath);

    var Client = context.Client;
    expect(Client).to.be.a('function');
  });
});
