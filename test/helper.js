'use strict';

var temp = require("temp");
var vm = require("vm");
var fs = require("fs");

var Helper = {
  loadSchema: function(path) {
    return JSON.parse(fs.readFileSync(path));
  },

  tempDir: function() {
    return temp.mkdirSync();
  },

  loadModule: function(filePath, baragon) {
    var dependencies = {
      baragon: require("../lib/baragon")
    };
    var exports = {};
    var context = {
      require: function(name) {
        return dependencies[name];
      },
      exports: exports,
      console: console,
      module: {
        exports: exports
      }
    };

    vm.runInNewContext(fs.readFileSync(filePath), context);
    return context;
  }
}

module.exports = Helper;
