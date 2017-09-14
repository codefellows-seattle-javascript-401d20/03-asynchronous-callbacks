'use strict';

const reader = require('./lib/reader');

const path = ['./assets/foo.txt', './assets/bar.txt', './assets/bar.txt', './assets/bar.txt'];

reader(path, (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});
