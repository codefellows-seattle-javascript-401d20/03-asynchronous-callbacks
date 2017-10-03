'use strict';

const fs = require('fs');


module.exports = (filepath, callback) => {
  let pathArray = [];
  for(let i = 0; i < filepath.length; i++){
    fs.readFile(filepath[i], 'utf-8', (err, data) => {
      if (err) {
        return callback(err);
      }
      if(pathArray <= 3)
        pathArray[i] = (data);
      pathArray[i] + 1;
      console.log(data);
      if(pathArray === 3)
        callback(null, data);
    });
  }
};

/* module.exports = (filepath, callback) => {

*/
