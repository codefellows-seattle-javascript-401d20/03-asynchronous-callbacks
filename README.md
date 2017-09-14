![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 03: Parallel File Processing
===

## Exported Values  
#### Reader Module
The reader module exports a single function. It takes an array of three file paths and resolves a mapped array of strings loaded from each file using an error-first callback. The string data should be in the same order as the file path data (mapped). If an error occurs it should immediately reject the error using the callback and stop execution.

* The reader module should have the function signature `(paths, callback) => undefined`
* On a failure the reader module should invoke the callback with an error `callback(error)`
* On success the reader module should invoke the callback with null as the first paramiter, and the result as the second paramiter `callback(null, result)`
