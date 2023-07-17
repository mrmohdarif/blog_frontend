import React from 'react'
import { useNavigate } from 'react-router-dom'


function Indiannavey(props) {

  const back=useNavigate()
 
   return(
       <>
        <div className="papaya_main_div">
         {props.value.filter((item)=>item.name==="fruit").map((data,index)=>{
           return(
               <div className="papaya_sub"> 
                   <h1>{data.title}</h1>
                   <span>{data.descriptin}</span>
                   <img src={data.urltoimg} alt="the_latest_Javan" style={{width:"600px"}} />
                    <p>
                       {data.content}
                    </p>
                    <button className='backbtn' onClick={()=>{back(-1)}}>Back</button>
               </div>
           )
         })}
         </div>
       </>
   )
}

export default Indiannavey