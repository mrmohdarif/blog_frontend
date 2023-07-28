import React  from 'react'
import { useNavigate } from 'react-router-dom'


function Phulahari(props) {
   
    const back=useNavigate()
    return (
      <div className="papaya_main_div">
         
      {props.value.filter((item)=>item.categorey==="The Latest" && item.name==="Food" && item.path==='/phulahari').map((data,index)=>{
        return(
            <div className="papaya_sub"> 
                <h1>{data.title}</h1>
                <span style={{fontSize:18,fontStyle:"italic"}}>{data.description}</span>
                <img src={data.urlToImage} alt="the_latest_Javan" className='Food_latest' style={{}} />
                 <span style={{fontWeight:"bold"}}>{data.subheading}</span>
                 <p style={{lineHeight:"1.5"}}>
                    {data.content}
                 </p>
                 <button className='backbtn_article' onClick={()=>{back(-1)}}>Back</button>
            </div>
        )
      })}
      </div>
    )
}

export default Phulahari