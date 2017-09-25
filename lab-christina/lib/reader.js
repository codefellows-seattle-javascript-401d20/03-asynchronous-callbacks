'use strict';

const fs = require('fs');

module.exports = (path, callback) => {
  for(var i = 0; i < path.length; i++){
    fs.readFile(path[i], 'utf-8', (err, data) => {
      if (err) {
        callback(err);
      }
      callback(null, data);
    });
  }
};
