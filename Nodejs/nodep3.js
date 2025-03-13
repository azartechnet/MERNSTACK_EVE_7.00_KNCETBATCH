var f1=require('fs')
f1.open('sample.txt',function(err){
    if(err)console.log(err);
    else
    {
        console.log("file opened");
    }
})
