var f1=require('fs')
//Asynchrous read
f1.readFile('sample1.txt',function(err,data){
    if(err)
        console.log(err);
    else
    {
        console.log(data.toString());
    }
})
//Synchrous read
var data1=f1.readFileSync('sample1.txt','utf8')
console.log(data1);