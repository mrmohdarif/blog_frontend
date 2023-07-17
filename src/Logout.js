import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
   const Navigate=useNavigate()
    const handlelogout=(e)=>{
        e.preventDefault()
        localStorage.clear()
    Navigate(-1) 
    }
  return (
    <div>
        <button className='logout' onClick={handlelogout}>Logout</button>
        </div>
  )
}

export default Logout