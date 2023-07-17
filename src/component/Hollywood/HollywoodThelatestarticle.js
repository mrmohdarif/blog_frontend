import React from "react";

import { Link } from "react-router-dom";


export function HollywoodThelatestarticle(props){
 const token=localStorage.getItem('token')
    return(
        <>
          
         <h1 className="article_heading">The Latest Article</h1>
       
        <div className="the_latest_article_main">
     
           <div className="the_latest_article_child">
               {props.data.filter((item)=>item.categorey==="The Latest Article" && item.name==='Hollywood').map((d1,index)=>{
                return(
                <div className="latest_article_box" key={d1.id}>
                {token?<Link to={d1.path}><img src={d1.urlToImage} alt="latest_article" style={{width:"250px",marginTop:"10px"}}/></Link>:<Link to='/signuppage'><img src={d1.urlToImage} alt="latest_article" style={{width:"250px",marginTop:"10px"}}/></Link>}
                <div className="latest_article_box_child">
                 {token?<Link to={d1.path} ><h3 className="Holywood_link_text">{d1.title}</h3></Link>:<Link to='/signuppage'><h3 className="Holywood_link_text">{d1.title}</h3></Link>}
                    <p>{d1.publishedAt}</p>
                 </div>
            </div>
                )
               })}
          
            
             
           
           </div>
           <div className="avdertise">
            Advertise
            </div>
        </div>
        </>
    )
}