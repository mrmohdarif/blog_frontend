import React from "react";
import { Link } from "react-router-dom";

function Thelatest(props){  
    const token=localStorage.getItem("token")
    return(
        <>
         <h1 className="home_h1">The Latest</h1>
          
         
          <div className="the_latest">
       
          {props.data.filter((item)=>item.sign==="home").map((d,index)=>{
            return(
                
                <div className="the_latest_image" key={d.id}>
                {token?<Link to={d.path}><img src={d.img} alt="the_latest" style={{}} className="img" /></Link>:<Link to='/signuppage'><img src={d.img} alt="the_latest" style={{}} className="img" /></Link>}
                <h3 >{d.heading}</h3>
                <p>{d.text}</p>
                </div>
                
            )
           
            }) } 

             
          
          
         
         </div>
        </>
    )
}
export default Thelatest
