const exp=require('express')
const app=exp()
const port=3001;
app.get("/",(req,res)=>{
    res.send(`<div><h1>Welcome</h1></div>`)
}).listen(port)
console.log("Server is Running...")