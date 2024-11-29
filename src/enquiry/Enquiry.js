import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
function Enquiry(){
const[employees,setEmployees]=useState([])
function onGetData(){
    
    axios.get('http://localhost:9091/enquiry/getAllData').then(
        function(response){
        setEmployees(response.data)
        console.log(response.data)
    }
).catch(
    function(error)
    {
        if(error.response.status===500){
            alert("somthing went wrong")
        }
    }
)

}
function deleteData(applicant_Id){
 
    axios.delete(`http://localhost:9091/enquiry/del/${applicant_Id}`).then(
        function(response){
        //setEmployees(response.data)
        console.log(response.data)
    }
    ).catch(
    function(error)
    {
        if(error.response.status===500){
            alert("somthing went wrong")
        }
    }
    )
    }
return(<div style={{border:"2px"}}>
    <h1 className='text-center'>Enquiry</h1>
    <table border={1} align='center'>
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
            <th>cibilId</th>
            <th>CibilScore</th>
            <th>CibilScoreDtatandTime</th>
            <th>Status</th>
            <th>remark</th>
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
                            <td>{enquiry.cibilScore.cibilId}</td>
                            <td>{enquiry.cibilScore.cibilScore}</td>
                            <td>{enquiry.cibilScore.cibilScoreDateandTime}</td>
                            <td>{enquiry.cibilScore.status}</td>
                            <td>{enquiry.cibilScore.remark}</td>
                            <td>
                                <button input type="button" onClick={()=>deleteData(enquiry.applicant_Id)}>delete</button>
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
export default Enquiry;