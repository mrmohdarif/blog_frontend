import React  from "react";
import { Link } from "react-router-dom";


export function FoodThelatest(props){ 
    const token=localStorage.getItem('token') 
    return(
        <>
         <h1>The Latest</h1>
          <div className="the_latest">
          { props.data.filter((item)=>item.categorey==="The Latest" && item.name==="Food").map((d,index)=>{
            return(
                
                <div className="the_latest_image" key={d.id}>
                {token ?<Link to={d.path}><img src={d.urlToImage} alt="the_latest" style={{width:'350px', height:"200px",objectFit:"cover"}} className="img" /></Link>:<Link to='/signuppage'><img src={d.urlToImage} alt="the_latest" style={{width:'350px', height:"200px",objectFit:"cover"}} className="img" /></Link>}
                <h3 >{d.title}</h3>
                <p>{d.description}</p>
                {/* <span style={{margin:"0px",}}>{d.publishedAt}</span> */}
                </div>     
            )
           
            })}
        
         </div>
        
        </>
    )
}