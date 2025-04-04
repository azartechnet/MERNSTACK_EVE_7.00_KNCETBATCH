import React from "react";
import ReactDOM from "react-dom";

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
/*const x=10
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
    r1.render(<MyElem/>)  //This will render the text based on the condition*/

    //Importing css and bootstrap

    /*import './index.css';

    const App=()=>{
      return(
        <div>
<h1>This is Heading</h1>
<button type="button" class="btn btn-primary">Click me</button>
        </div>
        
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<App/>)*/

    //function Component

    // function Sample()
    // {
    //   return(
    //     <div>
    //       <h1>This is a function component</h1>
    //     </div>
    //   )
    // }
    // const r1=ReactDOM.createRoot(document.getElementById('root'))
    // r1.render(<Sample/>)

    //class component

    /*class Sample extends React.Component
    {
       render()
       {
        return(
          <div>
            <h1>This is a class component</h1>
          </div>
        )
       }
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Sample/>)*/

    //Props using function 

    /*function Sample(props)
    {
      return(
        <>
           <h1>This is Heading tag</h1>
           <h2>This is {props.name}</h2>
           <h2>This is {props.age}</h2>
        </>
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Sample name="Rahul" age="25"/>)*/

    //component in component

    /*function Component1()
    {
      return(
        <div>
          <h1>This is Component 1</h1>
        </div>
      )
    }
    function Component2()
    {
      return(
        <div>
          <h1>This is Component 2</h1>
          <Component1/>
        </div>
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Component2/>)*/

    //Constructor using super

    /*class Sample extends React.Component
    {
      constructor()
      {
        super();
        this.state={
          name:"Rahul",
          age:25
          }
      }
      render()
      {
         return(
          <div>
            <h1>This is Heading tag</h1>
            <h2>This is {this.state.name}</h2>
            <h2>This is {this.state.age}</h2>
          </div>
         )
      }
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Sample/>)*/

    //changing the state object

    /*class Sample extends React.Component
    {
      constructor(props)
      {
        super(props);
        this.state={
          name:"Rahul",
          age:25
          }
        this.handleClick=this.handleClick.bind(this);
      }
      handleClick()
      {
        this.setState({
          name:"Rahul Kumar",
          age:26
          })
        }
          render()
          {
             return(
              <div>
                <h1>This is Heading tag</h1>
                <h2>This is {this.state.name}</h2>
                <h2>This is {this.state.age}</h2>
                <button onClick={this.handleClick}>Click</button>
              </div>
             )
          }
      }
    
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Sample/>)*/

    //React Event

    /*function Football()
    {
      const shoot=()=>{
        alert("Goal Scored")
      }
      return(
        <div>
          <button onClick={shoot}>Shoot</button>
        </div>
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Football/>)*/

    //React Event argument passing

    /*function Football()
    {
       const shoot=(name)=>{
        alert(`${name} has scored a goal`)
        }
        return(
          <div>
            <button onClick={()=>shoot("Ronaldo")}>Shoot</button>
          </div>
        )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Football/>)*/

    //Conditional Rendering

    /*function MissedGoal()
    {
      return<h1>This is MissedGoal</h1>
    }
    function MadeGoal()
    {
      return<h1>Goal</h1>
    }
    function Goal(props)
    {
       const isGoal=props.isGoal;
       if(isGoal)
       {
        return<MadeGoal/>
       }
       else
       {
        return<MissedGoal/>
       }
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Goal isGoal={Math.random()>0.5}/>)*/

    //React List using Map

    /*function Car(props)
    {
      return<h1>{props.name}</h1>
    }
    function Cars()
    {
        const cars=["BMW","Audi","Mercedes"]
        return(
          <div>
            {cars.map((car)=><Car name={car}/>)}
          </div>
        )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Cars/>)*/

    //React keys

    /*function Car(props)
    {
      return<li>{props.id}{props.name}</li>
    }
    function Garage()
    {
      const cars=[{id:1,name:"tata"},{id:2,name:"Audi"},{id:3,name:"BMW"}]
      return(
        <div>
          {cars.map((car)=><Car id={car.id} name={car.name}/>)}
        </div>
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Garage/>)*/

    //React getDerivedStateFromProps

    /*class Header extends React.Component
    {
      constructor(props)
      {
        super(props)
        this.state={count:0}
      }
      static getDerivedStateFromProps(props,state)
      {
        console.log("getDerivedStateFromProps")
        return{count:props.c1}
      }
      render()
      {
        return<h1>Count:{this.state.count}</h1>
      }
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Header c1={10}/>)*/

    //ComponentDidMount

    /*class Header extends React.Component
    {
      constructor(props)
      {
        super(props)
        this.state={favcolor:"red"}
      }
      componentDidMount()
      {
        console.log("componentDidMount")
        setTimeout(()=>{
          this.setState({favcolor:"blue"})
        },3000)
      }
      render()
      {
        return<h1>My fav color is {this.state.favcolor}</h1>
      }
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Header/>)*/

    //Updating getDerivedStateFromProps

    /*class Header extends React.Component
    {
      constructor(props)
      {
        super(props)
        this.state={favcolor:"red"}
      }
      static getDerivedStateFromProps(props,state)
      {
        console.log("getDerivedStateFromProps")
      }
      changeColor=()=>{
        this.setState({favcolor:"blue"})
      }
      render()
      {
        return<h1>My fav color is {this.state.favcolor}
        <button onClick={this.changeColor}>Change Color</button></h1>
      }
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Header/>)*/

    //React Hooks

    import {useState,useEffect} from 'react'

    /*function Counter()
    {
       const[count,setCount]=useState(0);
       const[name,setName]=useState("mohamed");
       return(
        <div>
          <h1>Count is {count}</h1>
          <button onClick={()=>setCount(count+1)}>Increment</button>
          <h1>My name is {name}</h1>
          <button onClick={()=>setName("azar")}>Change Name</button>
        </div>
       )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Counter/>)*/

    //React useEffect

    /*function ClickCounter()
    {
      const[count,setCount]=useState(0);
      useEffect(()=>{
        console.log("useEffect")
        },[count])
        return(
          <div>
            <h1>Count is {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>

          </div>
        )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<ClickCounter/>)*/

    //useRef

    /*import { useRef } from "react";

    function FocusInput()
    {
       const inputRef=useRef(null);
       const handleClick=()=>{
        inputRef.current.focus();
        }
        return(
          <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleClick}>Focus</button>
          </div>
        )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<FocusInput/>)*/

    //React using without useContext

    /*function Component1()
    {
      const [user,setUser]=useState("mohamed")
      return(
        <div>
          <h1>Component 1</h1>
          <p>User is {user}</p>
          <button onClick={()=>setUser("Ahmed")}>Change User</button>
          <Component2 user={user}/>
        </div>
      )
    }
    function Component2(props)
    {
       return(
        <div>
          <h1>Component 2</h1>
          <p>User is {props.user}</p>
        </div>
       )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Component1/>)*/

    //React using useContext
    import { createContext, useContext} from "react";
    const UserContext = createContext();
    function Component1()
    {
      const [user, setUser] = useState("mohamed");
      return (
        <div>
          <h1>Component 1</h1>
          <p>User is {user}</p>
          <button onClick={() => setUser("Ahmed")}>Change User</button>
          <Component2 />
        </div>
      )
    }

    function Component2()
  {
      const user = useContext(UserContext);
      return (
        <div>
          <h1>Component 2</h1>
          <p>User is {user}</p>

        </div>
      )
  }
  const r1 = ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<UserContext.Provider value={"mohamed"}><Component1/></UserContext.Provider>)

    
