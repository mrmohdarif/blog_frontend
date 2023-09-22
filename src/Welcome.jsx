import React, { useState } from 'react'
import Logout from './Logout'
function Welcome() {
  const [Hide,setHide]=useState(false)
  const name=localStorage.getItem("name")
 const name1=name.split(" ")[0]

 const user_icon=()=>{
  setHide(!Hide)
 }

  return (
    <div className='user_name'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="user_icon" onMouseOver={user_icon}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"  />
</svg>


 {Hide ? (

 <div className='name_logout'>
 <span className='user_name_text'>Hi,{name1}</span>
  <Logout />
 </div>):("")}
       
      
       <div></div>
      
    </div>
  )
}

export default Welcome