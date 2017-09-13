'use strict';

const reader = require('../lib/reader.js');

describe('reader', () => {
  test('an invalid path should reject an error', (done) => {
    reader([`${__dirname}/assets/file.txt`,`${__dirname}/assets/anotherfile.txt`,`${__dirname}/assets/uhm.txt`], (err, data) => {
      expect(err).not.toBeNull();
      expect(data).toBeUndefined();
      done();
    });
  });
  test('a valid path should take in an array of paths', (done) => {
    reader([`${__dirname}/assets/file.txt`,`${__dirname}/assets/anotherfile.txt`,`${__dirname}/assets/uhm.txt`], (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('[stuff-in-here,other-stuff,more-stuff]');
      done();
    });
  });
});
  // ));
  // test('a valid path should take in an array', (done) => {
  //   reader(`${__dirname}/asset/anotherfile.txt`, (err, data) => {
  //     expect(err).toBeNull();
  //     expect(data).toEqual('other-stuff');
  //     done();
  //   });
  // });
  // test('a valid path should take in an array', (done) => {
  //   reader(`${__dirname}/asset/uhm.txt`, (err, data) => {
  //     expect(err).toBeNull();
  //     expect(data).toEqual('more-stuff');
  //     done();
  //   });
  // });
