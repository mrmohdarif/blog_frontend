import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Profile from "./Profile";
// import Logout from "./Logout";
import Welcome from "./Welcome";

export function Nav() {
  const [hide, sethide] = useState(true);
  const [hide1, sethide1] = useState(false);
  const [Mobilview,setMobbile]=useState(false)
  const token = localStorage.getItem("token");
  //   console.log(token);
  // const handle_hide = () => {
  //   sethide(!hide);
  // };
  const handle_hide1=()=>{
    sethide1(!hide1)   
  }
  const handle_icon=()=>{
    setMobbile(!Mobilview)
  }
  return (
    <>
    <div className="Navigation1">
      {hide ? (
        <div className="navlink">
          <ul>
            <li>
              <NavLink to="/" className="remove_underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/bollywood" className="remove_underline">
                Bollywood
              </NavLink>
            </li>
            <li>
              <NavLink to="/hollywood" className="remove_underline">
                Hollywood
              </NavLink>
            </li>
            <li>
              <NavLink to="/fitness" className="remove_underline">
                Fitness
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" className="remove_underline">
                Technology
              </NavLink>
            </li>
            <li>
              <NavLink to="/food" className="remove_underline">
                Food
              </NavLink>
            </li>
          </ul>
          {/* desktop mode */}
          {token ? (
            <div className="signin_signup profile_logout">
              {/* <Profile /> */}
              {/* <Logout /> */}
              <div className="user_com">
                <Welcome />
              </div>
            </div>
          ) : (
           <div className="signin_signup ">
              <NavLink to="/signinpage" className="login_register_btn">
                Login
              </NavLink>
              <NavLink to="/signuppage" className="login_register_btn">
                Register
              </NavLink>
            </div>       
          )}
        </div>
      ) : (
        ""
      )}
      
    </div>


    {/* Mobile view*/}
    {token ? <div className="welcome">
    <Welcome />
    </div>:""}




    <div className="Navigation2">
      {hide1 ? (
        <div className="navlink">
          <ul>
            <li>
              <NavLink to="/" className="remove_underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/bollywood" className="remove_underline">
                Bollywood
              </NavLink>
            </li>
            <li>
              <NavLink to="/hollywood" className="remove_underline">
                Hollywood
              </NavLink>
            </li>
            <li>
              <NavLink to="/fitness" className="remove_underline">
                Fitness
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" className="remove_underline">
                Technology
              </NavLink>
            </li>
            <li>
              <NavLink to="/food" className="remove_underline">
                Food
              </NavLink>
            </li>
          </ul>

          {token ? (
            <div className="signin_signup profile_logout">
              {/* <Profile /> */}
              {/* <Logout /> */}
              <div className="user_com">
                <Welcome />
              </div>
            </div>
          ) : (
          //  <div className="signin_signup ">

          //     <NavLink to="/signinpage" className="login_register_btn">
          //       Login
          //     </NavLink>
          //     <NavLink to="/signuppage" className="login_register_btn">
          //       Register
          //     </NavLink>
          //   </div>
        ""
          )}
        </div>
      ) : (
        ""
      )}


{/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="toggle_btn"
        // onClick={handle_hide}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
         
        />
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="toggle_btn"
        onClick={handle_hide1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"         
        />
      </svg>

      {token ? "" :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mobile_view_user_icon"  onMouseOver={handle_icon}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"  />
</svg>}
{Mobilview ? <div className="signin_signup">

<NavLink to="/signinpage" className="login_register_btn">
  Login
</NavLink>
<NavLink to="/signuppage" className="login_register_btn">
  Register
</NavLink>
</div>: " "}
    </div>
    </>
  );
}
