'use strict';

const reader = require('../lib/reader.js');

describe('reader', () => {
  test('an invalid path should reject an error', (done) => {
    reader.read([`${__dirname}/assets/pets.txt`,`${__dirname}/assets/pets.txt`,`${__dirname}/assets/pets.txt`], (err, data) => {
      expect(err).not.toBe(null);
      expect(data).toBeUndefined();
      done();
    });
  });

  test('a valid path should resolve a lowercased string', (done) => {
    reader.read([`${__dirname}/assets/horses.txt`,`${__dirname}/assets/cats.txt`,`${__dirname}/assets/dogs.txt`], (err, data) => {

      expect(err).toBeNull();
      expect(data).toEqual('animal\n');
      done();
    });
  });
});
