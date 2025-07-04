import { useState,useEffect } from "react";
import Axios from 'axios';
function CrudPage()
{

    const [foodName,setFoodName]=useState("");
    const [description,setDescription]=useState("");
    const [foodList,setFoodList]=useState([])
     const [newFoodName,setNewFoodName]=useState("")

    //Add FoodData

    const addFoodData=()=>{
        Axios.post("http://localhost:3001/insert",{foodName,description})
        .then((response)=>
            {
                console.log(response);
                alert("Data Added");
                })
                .catch((err)=>
                    {
                        console.log(err);
                        alert("Error");
                        }
                        );
    }
      //get data
    const fetchData=()=>{
        Axios.get("http://localhost:3001/read").then((response)=>{
            console.log(response.data)
            setFoodList(response.data)
        })
    }
     useEffect(()=>{
        fetchData();
    },[])

     //update
    const updateFood=(id)=>{
        Axios.put('http://localhost:3001/update',{id,newFoodName})
        .then(()=>fetchData())
    }
    //delete
    const deleteFood=(id)=>{
        Axios.delete(`http://localhost:3001/delete/${id}`).then(()=>fetchData())
        }
    return(

        <div className='container'>
            <h2>CRUD PAGE</h2>
            <div className='mb-3'>
               <input type='text' className='form-control' placeholder='FoodName'required onChange={(e)=>setFoodName(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <input type='text' className='form-control' placeholder='FoodDescription'required onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <button className='btn btn-primary' onClick={addFoodData}>AddFood</button>
            </div>
             <h3 className="mt-4">Get Data From Database</h3>
        <table className="table table-bordered table-striped">
            <thead className="table-dark">
                <tr>
                    <th>Food Name</th>
                    <th>Food Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
             {foodList.map((val,key)=>(
                <tr key={key}>
                    <td>{val.foodName}</td>
                    <td>{val.description}</td>

                    <td>
                        <input type="text" placeholder="UpdateFoodName" onChange={(e)=>setNewFoodName(e.target.value)}/>
                        <button className="btn btn-primary" onClick={()=>updateFood(val._id)}>Edit</button></td>
                    <td><button className="btn btn-danger" onClick={()=>deleteFood(val._id)}>Delete</button></td>
                </tr>
             ))}
            </tbody>
        </table>
        </div>

    )
}
export default CrudPage;