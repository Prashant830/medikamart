import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import './../App.css'


  
const ForgetPass=()=> {
     
    const [email , setEmail] = useState("")
    const navigate = useNavigate();

      

  const inputsHandler = (e) =>{
      setEmail(e.target.value)
  }

  

  const submitButton = () =>{

      console.log(email)

     // alert(inputField.email + " " + inputField.password)

        alert(" check your mail ")
       
        navigate("/")

     
  }

  return (
      <div className='appForm'>
         <div className="formField">
           <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input 
          type="text" 
          name="email" 
          onChange={inputsHandler} 
          placeholder="Enter Your Email" 
          className="formFieldInput"
          value={email}/>
          </div>
          <br/>


          
          
          <div className="formField">
           <button className="formFieldButton"  onClick={submitButton}>Submit Now</button>



                       </div>
      </div>
  )
}
 
export default ForgetPass;