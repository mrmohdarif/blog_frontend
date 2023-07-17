import React from "react";
import { Link } from "react-router-dom";


export function HollywoodThelatest(props){
  const token=localStorage.getItem('token')
  
    
    return(
        <>
         <h1>The Latest</h1>
          
         
          <div className="the_latest">
          { props.data.filter((item)=>item.categorey==="The Latest" && item.name==='Hollywood').map((d,index)=>{
            return(
                
                <div className="the_latest_image" key={d.id}>
                {token?<Link to={d.path}><img src={d.urlToImage} alt="the_latest" style={{width:'auto', height:"200px",objectFit:"cover"}} className="img thelatestholywood" /></Link>:<Link to='/signuppage'><img src={d.urlToImage} alt="the_latest" style={{width:'auto', height:"200px",objectFit:"cover"}} className="img thelatestholywood" /></Link>}
                <h3 >{d.title}</h3>
                <p>{d.publishedAt}</p>
                </div>     
            )
           
            })}
        
         </div>
        
        </>
    )
}