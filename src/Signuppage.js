import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signuppage() {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
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
    const Data = {
      name: name,
      email: email,
      password: password,
      tel: tel,
    };

    let api = "http://localhost:8080/signuppage";
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
        <input
          type="email"
          placeholder="Email"
          className="input"
          required={true}
          onChange={handleemail}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          required={true}
          onChange={handlepassword}
          value={password}
        />
        <input
          type="tel"
          placeholder="Phone"
          className="input"
          required={true}
          onChange={handlephone}
          value={tel}
        />
        <input type="submit" value="submit" className="btn" onClick={submit} />
      </form>
      <p onClick={already}>Already ragister</p>
      
    </div>
  );
}

export default Signuppage;
