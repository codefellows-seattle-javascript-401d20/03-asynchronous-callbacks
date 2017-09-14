'use strict'

const reader = require('../lib/reader.js')

describe('reader', () => {
  test('an invalid path should reject an error', (done) => {
    reader(`${__dirname}/asset/none.txt`, (err, data) => {
      expect(err).not.toBeNull()
      expect(data).toBeUndefined()
      done()
    })
  })

  test('a valid path should resolve an uppercased string', (done) => {
    reader(`${__dirname}/asset/one.txt`, (err, data) => {
      expect(err).toBeNull()
      expect(data).toEqual('HI\n\nTHIS IS FILE ONE')
      done()
    })
  })

  test('an array of valid paths should resolve a collected uppercased string', (done) => {
    reader([`${__dirname}/asset/one.txt`, 
            `${__dirname}/asset/two.txt`,
            `${__dirname}/asset/three.txt`], (err, data) => {
      expect(err).toBeNull()
      expect(data).toEqual('HI\n\nTHIS IS FILE ONE HI\n\nTHIS IS FILE TWO HI\n\nTHIS IS FILE THREE')
      done()
    })
  })
})
