import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import './../App.css'

  
const SignInForm=()=> {
     
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate();

      

  const inputsHandler = (e) =>{
      setEmail(e.target.value)
  }

  const inputsHandlertwo = (e) =>{
       setPassword(e.target.value)
}

  const submitButton = () =>{

      console.log(email)
      console.log(password)


       if(email == "ps962630@gmail.com" && password =="admin"){
             alert(password + " " + "department")
             navigate("/admins")

       }

       if(email == "ps962630@gmail.com" && password =="ceo"){
           alert(password + " " + "department")
           navigate("/ceos")


       }

       if(email == "ps962630@gmail.com" && password =="sale"){
        alert(password + " " + "department")
             navigate("/sales")


       }

       if(email == "ps962630@gmail.com" && password =="hr"){
        alert(password + " " + "department")
           navigate("/hrs")
       }

        //alert(" u don't have permission to open it ")
       
     
  }

  return (
      <div className="appForm">
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
           <label className="formFieldLabel" htmlFor="password">
           Password
         </label>
          <input 
          type="text" 
          name="password" 
          onChange={inputsHandlertwo} 
          placeholder="Enter Your password" 
          className="formFieldInput"
          value={password}/>
          
          <br/>
          </div>

          
          <div className="formField">
           <button className="formFieldButton"  onClick={submitButton}>Submit Now</button>

           <button className="formFieldLink" style={{marginTop: 20}} onClick={()=>navigate("/forgetpass")}>forget password</button>


                       </div>
      </div>
  )
}
 
export default SignInForm;