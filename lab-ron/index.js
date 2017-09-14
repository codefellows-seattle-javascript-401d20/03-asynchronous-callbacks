'use strict';

const reader = require('./lib/reader');

const path = [];

reader(path, (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});



