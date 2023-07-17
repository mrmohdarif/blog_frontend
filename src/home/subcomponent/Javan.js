import React  from "react";
import {  useNavigate } from "react-router-dom";


export function Javan(props){
  
  const back=useNavigate()
  
    return(
        <div>
         <div className="main_move_div">
            {props.value.filter((item)=>item.categorey==='The Latest' && item.name==='move').map((data,index)=>{
                return(
                    <div>
                    <div className="poster">
                    <img src={data.img} alt="the_latest_Javan" className="javan_img" style={{}} />
                    </div>
                    <h1 style={{textAlign:"center"}}>{data.title}</h1>
                     <div className="move_details">
                        <table>
                           <tr>
                           <th>Release Date</th> 
                           <td>{data.ReleaseDate}</td>
                           </tr>
                           <tr/>
                           <tr>
                           <th>Language</th> 
                           <td>{data.Language}</td>
                           </tr>
                           <tr>
                           <th>Dubbed In</th> 
                           <td>{data.DubbedIn}</td>
                           </tr>
                           <tr>
                           <th>Genre</th> 
                           <td>{data.Genre}</td>
                           </tr>
                           <tr>
                           <th>Cast</th> 
                           <td>{data.Cast}</td>
                           </tr>
                           <tr>
                           <th>Director</th> 
                           <td>{data.Director}</td>
                           </tr>
                           {/* <tr>
                           <th>Cinematography</th> 
                           <td>{data.Cinematography}</td>
                           </tr> */}
                           <tr>
                           <th>Music</th> 
                           <td>{data.Music}</td>
                           </tr>
                           <tr >
                           <th>Producer</th> 
                           <td>{data.Producer}</td>
                           
                           </tr>
                           <tr>
                           <th>Production</th> 
                           <td>{data.Production}</td>
                           </tr>
                        </table>
                     </div>
                     <h1>{data.contentheading}</h1>
                     <p style={{fontSize:"22px"}}>{data.content}</p>
                     <div className="poster">
                    <img src={data.urlToimg}  className="javan_img" alt="the_latest_Javan" style={{}} />
                    </div>
                    </div>
                )
            })}
            
         </div>
         <button className='backbtn' onClick={()=>{back(-1)}}>Back</button>
        </div>
    )
}