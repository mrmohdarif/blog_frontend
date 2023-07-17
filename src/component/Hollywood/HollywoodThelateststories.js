import React from "react";

import { Link } from "react-router-dom";

export function HollywoodThelateststories(props){
    const token=localStorage.getItem('token')
    return(
        <div className="Hollywood_latest_stories">
          <h1>Latest Stories</h1>
             
           <div className="latest_stories">
           {props.data.filter((item)=>item.categorey==="Latest Stories" && item.name==="Hollywood").map((d,index)=>{
                return(
                    <div className="latest_stories_box">
                    {token?<Link to={d.path}><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>:<Link to='/signuppage'><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>}
                    {token?<Link to={d.path}><h3 className="holywood_link_storey_text">{d.title}</h3></Link>:<Link to='/signuppage'><h3 className="holywood_link_storey_text">{d.title}</h3></Link>}
                    <p>{d.publishedAt}</p>
                    </div>  
                )
             })}
             

            
             

           </div>
        </div>
    )
}