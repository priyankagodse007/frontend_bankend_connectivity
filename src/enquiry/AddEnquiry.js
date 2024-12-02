import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function AddEnquiry(){
        const {register,handleSubmit,setValue,reset}=useForm();
        const {applicant_Id}=useParams()
    
        const saveData=product=>{
            if(!applicant_Id){
            console.log(product)
            axios.post('http://localhost:9091/enquiry/save',product)
            .then(res=>{
                if(res.status===201){
                    alert("Enquiry details added")
                    reset();
                }
            })
            .catch(error=>console.log(error));
        }
            else{
                axios.put(`http://localhost:9091/enquiry/edit/${applicant_Id}`,product)
                .then(res=>{
                    if(res.status===201){
                        alert("Enquiry details updated")
                    }
                })
            
                .catch(error=>console.log(error))

            }
        }

        const getEditData=()=>{
            if(applicant_Id){
            axios.get(`http://localhost:9091/enquiry/getsingledata/${applicant_Id}`)
            .then(res=>{
            for(let prop in res.data){
                setValue(prop,res.data[prop])
            }
            })
        }
    }
        useEffect(getEditData,[])

    return(
        <div className ="d-flex justify-content-center">
            <div className="bg-white w-50">
            <h1>Add_Enquiry</h1>
            <h1>{applicant_Id}</h1>
            <form  onSubmit={handleSubmit(saveData)}>
                <div>
                    <label>ApplicantId</label>
                    <input type="text"{...register('applicant_Id')} className="form-control border-dark"/>
                    </div>
                    <div>
                    <label>FirstName</label>
                    <input type="text" {...register('first_Name')}className="form-control border-dark"/>
                    </div>

                    <div>
                    <label>LastName</label>
                    <input type="text"{...register('last_Name')} className="form-control border-dark"/>
                    </div>

                   <div>
                    <label>Age</label>
                    <input type="text"{...register('age')} className="form-control border-dark"/>
                   
                    </div>

                    <div>
                    <label>Email</label>
                    <input type="text"{...register('email')} className="form-control border-dark"/>
                    </div>

                    <div>
                    <label>MobileNo</label>
                    <input type="text" {...register('mobileNo')}className="form-control border-dark"/>
                    </div>

                    <div>
                    <label>AlternateMobileNo</label>
                    <input type="text" {...register('alternateMobileNo')}className="form-control border-dark"/>
                    </div>

                    <div>
                    <label>Pancard</label>
                    <input type="text"{...register('pancardNo')} className="form-control border-dark"/>
                    </div>

                    <div>
                    <label>AdharNo</label>
                    <input type="text"{...register('adharNo')} className="form-control border-dark"/>
                    </div>

                    <div>
                    <label>Address</label>
                    <input type="text" {...register('address')}className="form-control border-dark"/>
                    </div>

                    <div>
                    <label>City</label>
                    <input type="text" {...register('city')}className="form-control border-dark"/>
                    </div>

                    <div>
                        <button className="btn btn-success mt-3">submit</button>
                    </div>
               

            </form>
           </div>
        </div>
    )
}
export default AddEnquiry;