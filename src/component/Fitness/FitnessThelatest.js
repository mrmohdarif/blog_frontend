import React, { useContext } from "react";

import { Link } from "react-router-dom";

export function FitnessThelatest(props){
   const token=localStorage.getItem('token')   
    return(
        <>
         <h1 className="fitness_thelatest_h1">The Latest</h1>
     
         
          <div className="the_latest">
          { props.data.filter((item)=>item.categorey==="The Latest" && item.name==="Fitness").map((d,index)=>{
            return(
                
                <div className="the_latest_image" key={d.id}>
                {token ?<Link to={d.path}><img src={d.urlToImage} alt="the_latest" style={{}} className="img_thelatest" /></Link>:<Link to='/signuppage'><img src={d.urlToImage} alt="the_latest" style={{width:'auto', height:"200px",objectFit:"cover"}} className="img" /></Link>}
                <p >{d.title}</p>
                <p>{d.publishedAt}</p>
                </div>     
            )
           
            })}
        
         </div>
        
        </>
    )
}