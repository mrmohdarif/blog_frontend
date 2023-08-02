import React  from "react";

import { Link } from "react-router-dom";
export function FoodThelateststories(props){
    const token=localStorage.getItem('token')
    return(
        <div className="food_latest_stories">
          <h1 className="food_stories">Latest Stories</h1>
             
           <div className="latest_stories">
           {props.data.filter((item)=>item.categorey==="Latest Stories" && item.name==='Food').map((d,index)=>{
                return(
                    <div className="latest_stories_box">
                    {token ? <Link to={d.path}><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>:<Link to='/signuppahe'><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>}

                    {token ? <Link to={d.path}><p className="holywood_link_storey_text">{d.title}</p></Link>: <Link to='/signuppage'><h3 className="holywood_link_storey_text">{d.title}</h3></Link>}
                    <p>{d.description}</p>
                    <p>{d.publishedAt}</p>
                    </div>  
                )
             })}
             

            
             

           </div>
        </div>
    )
}