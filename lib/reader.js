'use strict';

const fs = require('fs');

const read = (paths, callback) => {
  var strings = [];
  for (var i = 0; i < paths.length; i++) {
    fs.readFile(paths[i], (err, data) => {
      if(err)
        return callback(err);
      strings.push(data.toString().toLowerCase());
      if (strings.length === 3) {
        callback(null, strings.sort());
      }
    });
  }
};

module.exports = {
  read: read,
};
