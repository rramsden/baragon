'use strict';

var Helper = {
  loadSchema: function(path) {
    var fs = require("fs");
    return JSON.parse(fs.readFileSync(path));
  }
}

module.exports = Helper;
