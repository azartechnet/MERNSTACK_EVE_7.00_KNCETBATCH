const cookieparser=require('cookie-parser')
const express=require('express')
const app=express()
const port=3000;

app.use(cookieparser())

app.get("/",function(req,res){
    req.cookies.title='welcome';
    res.send("Hello World");
})
app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
})