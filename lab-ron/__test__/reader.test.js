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

  test(`valid path resolves in the path's name`, (done) => {
    reader(`${__dirname}/../assets/foo.txt`, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('foo\n');
      done(); 
    });
  });

});

