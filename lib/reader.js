'use strict';

const fs = require('fs');

const read = (paths, callback) => {
  var strings = [];
  for (var i = 0; i < paths.length; i++) {
    fs.readFile(paths[i], (err, data) => {
      if(err)
        return callback(err);
      callback(null, data.toString().toLowerCase());
      strings.push(data.toString().toLowerCase());
      strings;
    });
  }
};

module.exports = {
  read: read,
};
