import React from "react";
import { Link } from "react-router-dom";


export function HollywoodThelatest(props){
  const token=localStorage.getItem('token')
  
    
    return(
        <>
         <h1 className="holywood_thelatest_h1">The Latest</h1>
          
         
          <div className="the_latest">
          { props.data.filter((item)=>item.categorey==="The Latest" && item.name==='Hollywood').map((d,index)=>{
            return(
                
                <div className="the_latest_image" key={d.id}>
                {token?<Link to={d.path}><img src={d.urlToImage} alt="the_latest"  className="holywood_thelatest"  /></Link>:<Link to='/signuppage'><img src={d.urlToImage} alt="the_latest" style={{}}  className="holywood_thelatest" /></Link>}
                <p >{d.title}</p>
                <p>{d.publishedAt}</p>
                </div>     
            )
           
            })}
        
         </div>
        
        </>
    )
}