import React, { useEffect, useState } from "react";
import axios from "axios";
import { Nav } from "../../Nav";
import { TechnologyThelatest } from "./TechnologyThelatest";
import { TechnologyThelatestarticle } from "./TechnologyThelatestarticle";
import { TechnologyThelateststories } from "./TechnologyThelateststories";
import Footer from "../../Footer";

export function Technology(){
    const [Tech,setTech]=useState([])
    useEffect(()=>{
      fetch()
    },[])
    
    const fetch=async()=>{
      const response=await axios.get("http://localhost:8080/technology")
      try{
        setTech(response.data)
      }
      catch(err){
        console.log(err);
      }
      
    }
    console.log(Tech);
    return(
        <>
        <Nav/>
        <div className="home1_image">
                <div >
                 
                <img src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=600"  className="tech_img_01" alt="bolywoood" style={{borderRadius:"10px"}}/> 
                    
                   
               
                </div>

                 <div className="home2_image">
                    <img src="https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=600" className="tech_img_02" alt="hollywood" style={{marginBottom:"5px",borderRadius:"10px"}}/>
                    <img src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=600" className="tech_img_02" alt="fitness" style={{marginBottom:"5px",borderRadius:"10px"}}/>
                    <img src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600" className="tech_img_02" alt="tech" style={{marginBottom:"5px",borderRadius:"10px"}}/>
                 </div>
            </div>
            <TechnologyThelatest data={Tech}/>
            <TechnologyThelatestarticle data={Tech}/>
            <TechnologyThelateststories data={Tech}/>
            <Footer/>
        </>
    )
}