# Parallel File Processing

Class 3 of 401

### reader()
`reader()` is used to read the content of multiple files. 
reader takes in two parameters, an array of paths, and a callback function e.g. `reader(path,callback)` 

```
reader(['foo.txt', 'bar.txt, 'wic.txt'], (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});

>> foo
>>
>> bar
>>
>> wic
>>
```