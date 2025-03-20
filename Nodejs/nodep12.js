var fs=require('fs')
var data="java"
//Appending the file
fs.appendFile('file1.txt',data,function(err){
    if(err) {
        console.log(err);
    }
    else
    {
        console.log("Data appended to file");
    }
    
})