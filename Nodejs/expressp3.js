const express=require('express')
const app=express()
const PORT=3000;

app.get("/hello",(req,res)=>{
    res.send("Hello World");
    
}).listen(PORT)
console.log("Server is Running...")

