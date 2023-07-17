import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { store1 } from "../../NavigationBar";

export function TikTok(props){
  
   const back=useNavigate()
    return(
        <>
         <div className="papaya_main_div">
          {props.value.filter((item)=>item.name==="tiktok").map((data,index)=>{
            return(
                <div className="papaya_sub"> 
                    <h1>{data.title}</h1>
                    <span>{data.description}</span>
                    <img src={data.urltoimg} alt="the_latest_Javan" style={{width:"600px"}} />
                     <p>
                        {data.content}
                     </p>
                </div>
            )
          })}
          </div>
          <button className='backbtn' onClick={()=>{back(-1)}}>Back</button>
        </>
    )
}