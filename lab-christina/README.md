## 03-asynchronous-callbacks
### reader.js module
* Exports a function that loops though an array of filepaths. The function has an arity of two.
* Using fs readFIle the files are translated from buffer objects to 'utf-8'
* fs readFile is in error first data last format.
* If the filepath is undefined you will recieve an error.

### reader.test.js

* In the test file I've created two test.
* The first test ensures that an error will be returned in an invalid filepath is provided.
* The second tests purpose is to test the data is returned in a mapped array of strings. I am currently looping through all files and recieved the correct data. I've yet to accomplish mapping the return into an array.
