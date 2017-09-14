'use strict';

const fs = require('fs');
const reader = require('./lib/reader');

const path = process.argv;

reader(path[2], (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});