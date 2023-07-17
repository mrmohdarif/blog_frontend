import React from "react";

import { Link } from "react-router-dom";
export function FitnessThelateststories(props){
          const token=localStorage.getItem('token')
 
    return(
        <>
          <h1>Latest Stories</h1>
             
           <div className="latest_stories">
           {props.data.filter((item)=>item.categorey==="Latest Stories" && item.name==='Fitness').map((d,index)=>{
                return(
                    <div className="latest_stories_box">
                    {token ?<Link to={d.path}><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>:<Link to='/signuppage'><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>}
                    <Link to={d.path}><h3 className="holywood_link_storey_text">{d.title}</h3></Link>
                    <p>{d.publishedAt}</p>
                    </div>  
                )
             })}
           </div>
        </>
    )
}