'use strict';

const reader = require('./lib/reader');

reader(process.argv.slice(2), (err, data) => {
  if (err) 
    return console.log('USAGE ERROR: something went wrong');
  console.log(data.join('\n'));
});