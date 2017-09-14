'use strict';

const reader = require('../lib/reader.js');

describe('reader', () => {
  test('an invalid path should reject an error', (done) => {
    reader([`${__dirname}/assets/fil.txt`,`${__dirname}/assets/anothefile.txt`,
            `${__dirname}/assets/uh.txt`], (err, data) => {
      expect(err).not.toBeNull();
      expect(data).toBeUndefined();
      done();
    });
  });
  test('a valid path should take in an array of paths', (done) => {
    reader([`${__dirname}/assets/file.txt`,`${__dirname}/assets/anotherfile.txt`,
            `${__dirname}/assets/uhm.txt`], (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('[1,2,3]\n', '[1,2,3]\n','[1,2,3]\n');
      done();
    });
  });
});
