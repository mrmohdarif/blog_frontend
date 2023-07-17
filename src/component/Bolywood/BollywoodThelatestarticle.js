import React from "react";
import { Link } from "react-router-dom";



function BollywoodThelatestarticle(props){
    const token=localStorage.getItem("token")
    return(
        <>
          
         <h1 className="article_heading">The Latest Article</h1>
       
        <div className="the_latest_article_main">
     
           <div className="the_latest_article_child">
               {props.data.filter((item)=>item.categorey==="The Latest Article" && item.name==='Bollywood').map((d1,index)=>{
                return(
                <div className="latest_article_box" key={d1.id}>
                {token?<Link to={d1.path}><img src={d1.urlToImage} className="Bolywood_latest_article_box_img" alt="latest_article" style={{}}/></Link>:<Link to='/signuppage'><img src={d1.urlToImage} className="Bolywood_latest_article_box_img" alt="latest_article" style={{}}/></Link>}
                 <div className="latest_article_box_child">
                    <h3>{d1.title}</h3>
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
export default BollywoodThelatestarticle