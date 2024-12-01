import React from "react";
import ReactDOM from "react-dom/client";

//Basic Rendering

/*const App=()=>{
  return(
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App/>);*/

/*const Sample=()=>{
  return(
    <div>
      <h1>Hello, World!</h1>
      <form>
        <label>Enter your name:</label>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample/>); */ //This will render the Sample component in the root div of

//Dynamic Rendering

/*const App=()=>{
  const username="sdlc";
  return(
    <div>
      <h1>Hello, {username}!</h1>
      <p>Today's date::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App/>)*/


//Function Rendering
/*function Sample()
{
  return(
    <div>
      <h1>Hello, World!</h1>
      <label>UserName</label>
      <input type="text" name="username" />
      <br/>
      <input type="submit" value="Submit" />

    </div>
  )

}
 
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample/>); */

//React with out jsx

/*const myelm1=React.createElement('h1',null,'welcome')
const myelm2=React.createElement('h2',null,'welcome to Heading-2')
const r1=ReactDOM.createRoot(document.getElementById('root'))
//r1.render(myelm1)
r1.render(myelm2)*/

//React with JSX

/*const App=<h1>welcome to the Application</h1>
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(App)  //This will render the App in the root div of the index.html*/

//React List

/*const MyElem=()=>{
  return(
    <div>
      <h1>My List</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ol>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

//Conditional Rendering
//Nested if else and else if ladder and switch statment
const x=10
let text="";
if(x>10)
{
  text="x is greater than 10"
}
else
{
  text="x is less than or equal to 10"
}
const MyElem=()=>{
  return(
    <div>
      <h1>Conditional Rendering</h1>
      <p>{text}</p>
    </div>
    )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<MyElem/>)  //This will render the text based on the condition