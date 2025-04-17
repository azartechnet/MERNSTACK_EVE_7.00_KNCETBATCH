const cookieparser=require('cookie-parser')
const express=require('express')
const app = express()
const port = 3000
app.use(cookieparser())

app.get("/",function(req,res){
    req.cookies.title="welcome";
    res.send("Hello World")
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })