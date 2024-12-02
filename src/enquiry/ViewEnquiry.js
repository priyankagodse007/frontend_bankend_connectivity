import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function ViewEnquiry(){
const[employees,setEmployees]=useState([])
function onGetData(){
    
    axios.get('http://localhost:9091/enquiry/getAllData').then(
        function(response){
        setEmployees(response.data)
        console.log(response.data)
       
    })
    
.catch(
    function(error)
    {
        if(error.response.status===500){
            alert("somthing went wrong")
        }
    }
)


}

useEffect(()=>onGetData(),[])

function deleteData(applicant_Id){
 
    axios.delete(`http://localhost:9091/enquiry/del/${applicant_Id}`)
    .then(res=>{
        // if(res.status===200){
            alert("product details removed")
            window.location.reload();
        }
       
 ) 
   
    

.catch(error=>console.log(error))
    // }
    // function addData(){
    //     axios.post(``)
    // }
}
return(<div style={{border:"2px"}}>
    <h1 className='text-center'>View_Enquiry</h1>
    <table className="table table-hover table-info">
        <thead>
            <th>ApplicantId</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Email</th>
          <th>MobileNo</th>
            <th>AlternateMobileNo</th>
            <th>Pancard</th>
            <th>AdharNo</th>
            <th>Address</th>
            <th>City</th>
            
            <th>Action</th>
            <th>Edit</th>
            </thead>
            <tbody>
            {
                employees.map(
                    (enquiry,index)=>
                    {
                        return<tr>

                            <td>{enquiry.applicant_Id}</td>
                            <td>{enquiry.first_Name}</td>
                            <td>{enquiry.last_Name}</td>
                            <td>{enquiry.age}</td>
                            <td>{enquiry.email}</td>
                            <td>{enquiry.mobileNo}</td>
                            <td>{enquiry.alternateMobileNo}</td>
                            <td>{enquiry.pancardNo}</td>
                            <td>{enquiry.adharNo}</td>
                            <td>{enquiry.address}</td>
                            <td>{enquiry.city}</td>
                           
                              <td>  <button className="btn btn-outline-primary " onClick={()=>deleteData(enquiry.applicant_Id)}><i className="bi bi-trash3"></i></button>
                            </td>
                            <td>
                             <Link className="btn btn-outline-primary" to={`/edit/${enquiry.applicant_Id}`} ><i class="bi bi-pencil-fill"></i></Link>
                            </td>
                           

                            

                        </tr>
                        
                    }
                )
            }
        </tbody>
        
        
        </table>


   <button onClick={onGetData}>Get Employee</button>

 
    </div>
)

}
export default ViewEnquiry;