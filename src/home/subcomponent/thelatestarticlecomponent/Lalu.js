import React  from 'react'


function Lalu(props) {

    return(
        <>
         <div className="papaya_main_div">
          {props.value.filter((item)=>item.name==="tiktok").map((data,index)=>{
            return(
                <div className="papaya_sub"> 
                    <h1>{data.title}</h1>
                    <span>{data.description}</span>
                    <img src={data.urltoimg} alt="the_latest_Javan" style={{}} />
                     <p>
                        {data.content}
                     </p>
                </div>
            )
          })}
          </div>
        </>
    )
}

export default Lalu