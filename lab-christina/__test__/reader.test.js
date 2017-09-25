'use strict';

const reader = require('../lib/reader.js');

describe('reader', () => {
  test('an invalid path will result in an error message', (done) => {
    reader(`${__dirname}/mkdir`, (err, data) => {
      expect(data).toBeUndefined();
      done();
    });
  });

  test('a valid path should resolve in a string', (done) => {
    reader([`${__dirname}/asset/betcha.txt`,`${__dirname}/asset/data.txt`,`${__dirname}/asset/lastly.txt`], (err, data) => {
      expect(data).toEqual(['words', 'for', 'food']);
      done();
    });
  });
});
