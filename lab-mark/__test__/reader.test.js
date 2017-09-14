'use strict';

const reader = require('../lib/reader.js');

const testData = [
  `${__dirname}/../assets/test1.txt`,
  `${__dirname}/../assets/test2.txt`,
  `${__dirname}/../assets/test3.txt`,
  `${__dirname}/../assets/test4.txt`,
  `${__dirname}/../assets/test5.txt`,
];

describe('#reader', () => {
  test('an invalid path should reject an error', (done) => {
    reader([`${__dirname}/../assets/Invalid-Lol.txt`], (err, data) => {
      expect(err).not.toBeNull();
      expect(data).toBeUndefined();
      done();
    });
  });

  test('a valid single path in an array should return the string of the text', (done) => {
    reader([`${__dirname}/../assets/test1.txt`], (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('This is test one.\n');
      done();
    });
  });
  test('A valid array of file paths should return mapped string data', (done) => {
    reader(testData, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('This is test one.\nThis is test two.\nThis is test three.\nThis is test four.\nI bet you thought this would say this is test 5..... hah!\n');
      done();
    });
  });
});
