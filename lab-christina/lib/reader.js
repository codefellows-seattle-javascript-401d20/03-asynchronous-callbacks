'use strict';

const fs = require('fs');
module.exports = (path, callback) => {
  for(var i = 0; i < path.length; i++){
    fs.readFile(path, (err, data) => {
      if (err) {
        callback(err);
      }
      console.log(data);
    });
  }
};
