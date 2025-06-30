function CrudPage()
{
    return(

        <div className='container'>
            <h2>CRUD PAGE</h2>
            <div className='mb-3'>
               <input type='text' className='form-control' placeholder='FoodName'required
                />
            </div>
            <div className='mb-3'>
                <input type='text' className='form-control' placeholder='FoodDescription'required/>
            </div>
            <div className='mb-3'>
                <button className='btn btn-primary'>AddFood</button>
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