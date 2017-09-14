'use strict';

const fs = require('fs');

module.exports = (path, callback) => {

  let loopFiles = (num) => {
    if (num >= path.length) return;
    else {
      fs.readFile(path[num], (err, data) => {
        if (err) return callback(err);
        callback(null, data.toString());
        loopFiles(num + 1);
      });
    }
  };
  loopFiles(0);
};


