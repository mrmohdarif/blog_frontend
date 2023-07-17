import React from "react";

import { Link } from "react-router-dom";

function BollywoodThelateststories(props){
  const token=localStorage.getItem("token")
    return(
        <div className="bolywood_the_latest_stories">
          <h1>Latest Stories</h1>
             
           <div className="latest_stories">
           {props.data.filter((item)=>item.categorey==="Latest Stories" && item.name==='Bollywood').map((d,index)=>{
                return(
                    <div className="latest_stories_box">
                    {token?<Link to={d.path}><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>:<Link to="/signuppage"><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>}
                    {token?<Link to={d.path}  className="bolywood_stores_link_text"><h3>{d.title}</h3></Link>:<Link to="/signuppage" className="bolywood_stores_link_text"><h3>{d.title}</h3></Link>}
                    <p>{d.publishedAt}</p>
                    </div>  
                )
             })}
             

            
             

           </div>
        </div>
    )
}
export default BollywoodThelateststories