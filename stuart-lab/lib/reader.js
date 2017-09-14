'use strict'

const fs = require('fs')

module.exports = (paths, callback) => {
  if (paths instanceof Array) {
    const collect = [];
    fs.readFile(paths[0], (err, data) => {
      if(err) 
        return callback(err);
      collect.push(data.toString().toUpperCase());
      fs.readFile(paths[1], (err, data) => {
        if(err) 
          return callback(err);
        collect.push(data.toString().toUpperCase());
        fs.readFile(paths[2], (err, data) => {
          if(err) 
            return callback(err);
          collect.push(data.toString().toUpperCase());
          callback(null, collect.join(' '));
        })
      })
    })
  } else {
    fs.readFile(paths, (err, data) => {
      if(err) 
        return callback(err);
      callback(null, data.toString().toUpperCase());
    })
  }
}
