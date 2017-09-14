'use strict';

const fs = require('fs');
module.exports = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      callback(err);
    }
    console.log('something', data.string());
  });
};
