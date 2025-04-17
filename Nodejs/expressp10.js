const express=require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended:false}))
app.post("/",function(req,res){
    console.log(req.body)
    res.send("Hello World")
})
app.listen(port, function(){
    console.log(`Server is running on port ${port}`)
    })