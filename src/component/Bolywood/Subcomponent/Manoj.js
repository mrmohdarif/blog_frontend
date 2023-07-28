import React from 'react'

import { useNavigate } from 'react-router-dom'

function Manoj(props) {

  const back=useNavigate()
  return (
    <div className="main_move_div">
            {props.value.filter((item)=>item.categorey==='News' && item.path==='/manoj').map((data,index)=>{
                return(
                    <div>
                    <div className="poster">
                    
                    <img src={data.urlToImage} alt="the_latest_Javan" className='manoj' style={{}} />
                    </div>
                    {/* <h1 style={{textAlign:"center"}}>{data.title}</h1> */}
                    <h1>{data.title}</h1>
                     <p style={{fontSize:"22px"}}>{data.content}</p>
                     <div className="poster">
                    {/* <img src={data.} alt="the_latest_Javan" style={{width:"600px"}} /> */}
                    <button className='backbtn_article' onClick={()=>{back(-1)}}>Back</button>
                    </div>
                   
                    </div>
                )
            })}
            
         </div>
  )
}

export default Manoj
