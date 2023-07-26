import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Nav } from "../../Nav";
import axios from "axios";
import { HollywoodThelatest } from "./HollywoodThelatest";
import { HollywoodThelatestarticle } from "./HollywoodThelatestarticle";
import { HollywoodThelateststories } from "./HollywoodThelateststories";
import Footer from "../../Footer";


export function Hollywood(){
    const [hollywood,sethollywood]=useState([])

    useEffect(()=>{
      fetch()
    },[])
    
    const fetch=async()=>{
      const response=await axios.get("https://blog-server-y2za.onrender.com/hollywood")
      try{
        sethollywood(response.data)
      }
      catch(err){
        console.log(err);
      }
      
    }
    console.log(hollywood);
 
    return(
        <>
         <Nav/>
         <div className="home1_image">
                <div >
                 
                <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4280/674280-h" alt="bolywoood" className="mareval_home_image"style={{}}/> 
                    
                   
               
                </div>

                 <div className="home2_image">
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5435/675435-h" className="hft" alt="hollywood" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5117/1455117-h-c29d50eadb8e" className="hft" alt="fitness" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8307/1328307-h-fcd961dba8ca" className="hft" alt="tech" />
                 </div>
            </div>
              <HollywoodThelatest data={hollywood}/>
              <HollywoodThelatestarticle data={hollywood}/>
              <HollywoodThelateststories data={hollywood}/>
              {/* <Footer/> */}
        </>
    )
}