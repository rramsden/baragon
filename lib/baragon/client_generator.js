'use strict';

var Mustache = require("mustache");
var fs = require("fs");

ClientGenerator.TEMPLATE_DIR = (__dirname + "/views/client.js.mustache");

function ClientGenerator(module, schema, options) {
  this._module = module;
  this._schema = schema;
  this._options = options;
}

ClientGenerator.prototype = {
  render: function(module, schema, options) {
    var template = fs.readFileSync(ClientGenerator.TEMPLATE_DIR).toString();

    console.log( Mustache.render(template, {MODULE: this._module, SCHEMA: JSON.stringify(this._schema)}) )
  }
}

module.exports = ClientGenerator;
