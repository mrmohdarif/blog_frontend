import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Profile from "./Profile";
import Logout from "./Logout";
import Welcome from "./Welcome";

export function Nav() {
  const [hide, sethide] = useState(true);
  const token = localStorage.getItem("token");
  //   console.log(token);
  const handle_hide = () => {
    sethide(!hide);
  };
  return (
    <>
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

          {token ? (
            <div className="signin_signup profile_logout">
              {/* <Profile /> */}
              <Logout />
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="toggle_btn"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          onClick={handle_hide}
        />
      </svg>
    </>
  );
}
