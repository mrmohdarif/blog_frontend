import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export function Papaya(props){
   
   const back=useNavigate()

    return(
        <>
         <div className="papaya_main_div">
          {props.value.filter((item)=>item.name==="fruit").map((data,index)=>{
            return(
                <div className="papaya_sub"> 
                    <h1>{data.title}</h1>
                    <span>{data.descriptin}</span>
                    <img src={data.urltoimg} alt="the_latest_Javan" className="papaya_img" style={{}} />
                     <p>
                        {data.content}
                     </p>
                </div>
            )
          })}
          </div>
          <button className='backbtn_papaya' onClick={()=>{back(-1)}}>Back</button>
        </>
    )
}