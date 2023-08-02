import React from "react";

import { Link } from "react-router-dom";

export function HollywoodThelateststories(props){
    const token=localStorage.getItem('token')
    return(
        <div className="Hollywood_latest_stories">
          <h1 className="hollywood_the_latest_stories_h1">Latest Stories</h1>
             
           <div className="holywood_latest_stories">
           {props.data.filter((item)=>item.categorey==="Latest Stories" && item.name==="Hollywood").map((d,index)=>{
                return(
                    <div className="latest_stories_box">
                    {token?<Link to={d.path}><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>:<Link to='/signuppage'><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>}
                    {token?<Link to={d.path} className="remove_underline"><p className="holywood_link_storey_text">{d.title}</p></Link>:<Link to='/signuppage' className="remove_underline"><p className="holywood_link_storey_text">{d.title}</p></Link>}
                    <p>{d.publishedAt}</p>
                    </div>  
                )
             })}
             

            
             

           </div>
        </div>
    )
}