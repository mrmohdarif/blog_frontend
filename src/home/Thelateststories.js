import React from "react";
import { Link } from "react-router-dom";


function Thelateststories(props){
    const token=localStorage.getItem("token")
    return(
        <div className="stores">
        
        <h1>Latest Stories</h1>
           <div className="latest_stories">
           
        
           {props.data.filter((item)=>item.categorey==="Latest Stories" && item.name==="homepage"  ).map((d,index)=>{
                return(
                    <div className="latest_stories_box" key={d.id}>
                    {token?<Link to={d.path}><img src={d.img} alt="img" style={{width:"350px"}}/></Link>:<Link to='/signuppage'><img src={d.img} alt="img" style={{width:"350px"}}/></Link>}
                    <Link to={d.path} className="store_home_link_text"><p >{d.description}</p></Link>
                    </div>  
                )
             })}
             

            
             

           </div>
        </div>
    )
}
export default Thelateststories