![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 03: Parallel File Processing
===


## Documentation
* Created a module that tests the function in 'reader.js' to take in 3 arrays in 3 separate '.txt' files and returns the arrays as strings. Should an invalid path be given, the results return 'Null' and the test in 'reader.test.js' stops. 'module.exports' in 'reader.js' has 2 arities, paths and callback, which use 'fs.readFile' to read each file and return an error if one exists.  

## Resources  
  * [fs module docs](https://nodejs.org/api/fs.html)
