'use strict';

const fs = require('fs');


module.exports = (filepath, callback) => {
  let pathArray = [];
  fs.readFile(filepath[0], 'utf-8', (err, data) => {
    if (err) {
      return callback(err);
    }
    pathArray[2] = (data);
    fs.readFile(filepath[1], 'utf-8', (err, data) => {
      if (err) {
        return callback(err);
      }
      pathArray[1] = (data);
      fs.readFile(filepath[2], 'utf-8', (err, data) => {
        if (err) {
          return callback(err);
        }
        pathArray[0] = (data);
        console.log(pathArray);
        callback(null, pathArray);
      });
    });
  });
};
