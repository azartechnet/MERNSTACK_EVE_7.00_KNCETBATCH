var fs=require('fs')
var rs=fs.createReadStream('file1.txt');
var ws=fs.createWriteStream('file2.txt');
rs.pipe(ws)
console.log("Copy...")