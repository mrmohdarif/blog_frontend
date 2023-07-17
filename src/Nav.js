import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Logout from "./Logout";
import Welcome from "./Welcome";

export function Nav() {
  const [hide,sethide]=useState(true)
  const token = localStorage.getItem("token");
//   console.log(token);
const handle_hide=()=>{
  sethide(!hide)
}
  return (
    <>
    {hide ? <div className="navlink">
      <span>
        <Link to="/" className="remove_underline">
          Home
        </Link>{" "}
      </span>
      <span>
        <Link to="/bollywood" className="remove_underline">
          Bollywood
        </Link>{" "}
      </span>
      <span>
        <Link to="/hollywood" className="remove_underline">
          Hollywood
        </Link>{" "}
      </span>
      <span>
        <Link to="/fitness" className="remove_underline">
          Fitness
        </Link>{" "}
      </span>
      <span>
        <Link to="/technology" className="remove_underline">
          Technology
        </Link>{" "}
      </span>
      <span>
        <Link to="/food" className="remove_underline">
          Food
        </Link>{" "}
      </span>

      {token ? (
        <div className="signin_signup profile_logout">
          <Profile />
          <Logout />
         <div className="user_com">
         <Welcome/>
         </div>
        </div>
      ): (
        <div className="signin_signup ">
          <Link to="/signinpage" className="login_register_btn">Login</Link>
          <Link to="/signuppage" className="login_register_btn">Register</Link>
        </div>
      )}

    

    </div>:""}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="toggle_btn">
 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" onClick={handle_hide}/>
 </svg> 
    </>
  );
}

   