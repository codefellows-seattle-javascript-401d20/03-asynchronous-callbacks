'use strict';

const reader = require('../lib/reader.js');

describe('#reader', () => {
  test(`invalid path should reject an error`, (done) => {
    reader(`${__dirname}/../assets/foo2.txt`, (err, data) => {
      expect(err).not.toBeNull();
      expect(data).toBeUndefined()
      done()
    });
  });

  test(`valid path resolves in the path's name one value`, (done) => {
    reader([`${__dirname}/../assets/foo.txt`], (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('foo\n');
      console.log(data)
      done();
    });
  });

  test(`valid path resolves in the path's name two value`, (done) => {
    reader([`${__dirname}/../assets/bar.txt`, `${__dirname}/../assets/bar.txt`],
    (err, data) => {
      console.log(data);
      expect(err).toBeNull();
      expect(data).toEqual('bar\nbar\n');
      done();
    });
  });


});

