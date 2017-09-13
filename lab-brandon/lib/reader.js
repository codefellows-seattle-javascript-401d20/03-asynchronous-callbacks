const fs = require('fs');

module.exports = (paths, callback) => {
  for(var i = 0; i < paths.length; i++) {
    fs.readFile(paths[i], (err, data) => {
      if(err)
        return callback(err);
      callback(null, data.toString());
    });
  }
};

//———((null because the first callback is err and we gotta tell it that it’s all good))
// module.exports = (cb, ctx) => {
//
// }
