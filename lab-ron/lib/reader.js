'use strict';

const fs = require('fs');

module.exports = (paths, callback) => {
  console.log(paths);
  let result = [];

  let loopFiles = (num) => {
    if (num === paths.length) 
      return callback(null, result);
    fs.readFile(paths[num], (err, data) => {
      if (err) 
        return callback(err);
      result.push(data.toString());
      loopFiles(num + 1);
    });
  };

  loopFiles(0);
};  


