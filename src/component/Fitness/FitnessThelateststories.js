import React from "react";

import { Link } from "react-router-dom";
export function FitnessThelateststories(props){
          const token=localStorage.getItem('token')
 
    return(
        <>
          <h1 className="fitness_thelateststories_h1">Latest Stories</h1>
             
           <div className="fitness_latest_stories">
           {props.data.filter((item)=>item.categorey==="Latest Stories" && item.name==='Fitness').map((d,index)=>{
                return(
                    <div className="latest_stories_box">
                    {token ?<Link to={d.path}><img src={d.urlToImage} alt="img" style={{}} className="fitness_stories_img"/></Link>:<Link to='/signuppage'><img src={d.urlToImage} alt="img" style={{}} className="fitness_stories_img"/></Link>}
                    <Link to={d.path} className="remove_underline"><p className="holywood_link_storey_text">{d.title}</p></Link>
                    <p>{d.publishedAt}</p>
                    </div>  
                )
             })}
           </div>
        </>
    )
}