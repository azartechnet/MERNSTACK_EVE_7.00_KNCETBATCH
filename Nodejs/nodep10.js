// function greet()
// {
//     console.log("Hello, World!");
// }
// setInterval(greet,2000)

let intervalID=setInterval(()=>
 console.log("Running..."),1000)

setTimeout(()=>{
    clearInterval(intervalID)
    console.log("IntervalSupport")
},5000)