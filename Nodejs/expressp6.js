const exp=require('express')
const app=exp()
//SingleRouting
const r1=exp.Router();

r1.get("/",function(req,res){
    res.send("Hello from single routing");
})
app.use(r1)

app.listen(3001,function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Server is Running...")
    }
})