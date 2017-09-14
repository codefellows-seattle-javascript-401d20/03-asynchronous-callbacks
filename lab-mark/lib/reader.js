'use strict';

const fs = require('fs');

module.exports = (path, callback, returnData) => {

  if(!returnData)
    returnData = [];

  // No more paths... tell tests that it's done.
  if (path.length === 0) {
    callback(null, returnData);
  }

  // More paths... call yoself
  else {
    fs.readFile(path[0], (err, data) => {
      if(err)
        return callback(err);

      returnData.push(data.toString());
      module.exports(path.slice(1), callback, returnData);
    });
  }
};
