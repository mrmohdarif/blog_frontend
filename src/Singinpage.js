import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Singinpage() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const  Navigate=useNavigate()
  const handle_email=(e)=>{
    setEmail(e.target.value)
   
  }
  const handle_password=(e)=>{
    setPassword(e.target.value)
  }
    const submit=(e)=>{
   e.preventDefault()
     const Data={
      email:email,
      password:password
     
     }
   
    
     let api = 'http://localhost:8080/signinpage'
    const response = axios.post(api, Data)
    response.then((response)=>{
      console.log(response);
      localStorage.setItem('token',response.data)
     Navigate('/')
    }).catch((err)=>{
      alert("Something went wrong !!!!")
    })
    setEmail("")
     setPassword("")
    }
  return (
    <div className="">
      <div className="signin_page">
        <div>
          <h2>Login</h2>
        </div>

        <form>
          <input type="email" placeholder="Email"  className="input" onChange={handle_email} required={true} value={email}/>
          <input type="password" placeholder="Password"   className="input" onChange={handle_password} required={true} value={password}/>
          
           <input type="submit" value="submit" className="btn" onClick={submit}/>
        </form>
          <Link to='/signuppage'>I don't have an account</Link>
      </div>
    </div>
  );
}

export default Singinpage;
