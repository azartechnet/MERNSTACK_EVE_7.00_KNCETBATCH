import { useState } from "react";
import Axios from 'axios';
function CrudPage()
{

    const [foodName,setFoodName]=useState("");
    const [description,setDescription]=useState("");


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
            <table className='table table-bordered table-striped'>
               <thead className='table-dark'>
               <tr>
                <th>FoodName</th>
                <th>FoodDescription</th>
                <th>Edit</th>
                <th>Delete</th>
               </tr>
               </thead>
               <tbody>
                
                   <tr>
                     <td>Apple</td>
                     <td>Its is good</td>
                     <td>
                        <input type="text" placeholder='updateFoodName'/>
                        <button>Edit</button>
                     </td>
                     <td><button>Delete</button></td>
                   </tr>
               
              
               </tbody>
            </table>
        </div>

    )
}
export default CrudPage;