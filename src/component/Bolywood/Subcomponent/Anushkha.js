import React from 'react'

import { useNavigate } from 'react-router-dom'


function Anushkha(props) {

  const back=useNavigate()
  return (
    <div className="papaya_main_div">
       
    {props.value.filter((item)=>item.categorey==="News" && item.path==='/anushkha').map((data,index)=>{
      return(
          <div className="papaya_sub"> 
              <h1>{data.title}</h1>
              <span>{data.description}</span>
              <img src={data.urlToImage} alt="the_latest_Javan" className='Anushkha' style={{}} />
               <p>
                  {data.content}
               </p>
               <button className='backbtn' onClick={()=>{back(-1)}}>Back</button>
               
          </div>
      )
    })}
    </div>
  )
}

export default Anushkha