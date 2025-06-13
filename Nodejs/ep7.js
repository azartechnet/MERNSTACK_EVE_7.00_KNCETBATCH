const exp=require('express')

const app=exp()

//single routing

const r1=exp.Router();

r1.get("/",function(req,res){
    res.send("welcome to home page");
})
app.use(r1)

app.listen(3001,function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("server is running on port 3001");
    }
})