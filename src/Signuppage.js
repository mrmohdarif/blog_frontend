import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signuppage() {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [error,seterror]=useState(false)
  const handlename = (e) => {
    setName(e.target.value);
  };
  const handleemail = (e) => {
    setEmail(e.target.value);
  };
  const handlepassword = (e) => {
    setPassword(e.target.value);
  };
  const handlephone = (e) => {
    setTel(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    if(name==="" && email==="" && password==="" && tel==="")
    {
   
      seterror(!error)  
      return 
    }

    const Data = {
      name: name,
      email: email,
      password: password,
      tel: tel,
    };
    
    let api = "https://blog-server-y2za.onrender.com/signuppage";
    let response = axios.post(api, Data);

    response
      .then((response) => {
        console.log("this is ", response);
        localStorage.setItem("token",response.data)      
          Navigate("/");       
      })
      .catch((err) => {
        console.log(err);
      });

    setName("");
    setEmail("");
    setPassword("");
    setTel("");
   
  };

  const already = (e) => {
    e.preventDefault();
    Navigate("/");
  };

  return (
    <div className="signUp">
    <div className="Signuppage signin_page">
      <div>
        <h2>Register</h2>
      </div>

      <form className="input_signuppage">
        <input
          type="text"
          placeholder="Name"
          className="input"
          required={true}
          onChange={handlename}
          value={name}
        />
        {error && <span className="error_message_signuppage">*Please Enter Name</span>}
        <input
          type="email"
          placeholder="Email"
          className="input"
          required={true}
          onChange={handleemail}
          value={email}
        />
         {error &&<span className="error_message_signuppage">*Please Enter Email</span>}
        <input
          type="password"
          placeholder="Password"
          className="input"
          required={true}
          onChange={handlepassword}
          value={password}
        />
          {error &&<span className="error_message_signuppage">*Please Enter Password</span>}
        <input
          type="tel"
          placeholder="Phone"
          className="input"
          required={true}
          onChange={handlephone}
          value={tel}
        />
          {error && <span className="error_message_signuppage">*Please Enter Phone</span>}
        <input type="submit" value="submit" className="btn" onClick={submit} />
      </form>
      <p style={{textDecoration:"underline"}} onClick={already}>Already ragister</p>
      
    </div>
   
    </div>
  );
}

export default Signuppage;
