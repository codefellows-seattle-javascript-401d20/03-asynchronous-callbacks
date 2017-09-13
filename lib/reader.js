'use strict';

const fs = require('fs');

const reader = module.exports = {};

reader.read = (paths, callback) => {
  for (var i = 0; i < paths.length; i++) {
    fs.readFile(paths[i], (err, data) => {
      if(err)
        return callback(err);
      callback(null, data.toString().toLowerCase());
    });
  }
};
