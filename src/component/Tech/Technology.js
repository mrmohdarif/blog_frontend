import React from "react";

import { Nav } from "../../Nav";
import { TechnologyThelatest } from "./TechnologyThelatest";
import { TechnologyThelatestarticle } from "./TechnologyThelatestarticle";
import { TechnologyThelateststories } from "./TechnologyThelateststories";
export function Technology(){
    return(
        <>
        <Nav/>
        <div className="home1_image">
                <div >
                 
                <img src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=600" alt="bolywoood" style={{width:"650px",height:"450px",borderRadius:"10px"}}/> 
                    
                   
               
                </div>

                 <div className="home2_image">
                    <img src="https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=600" alt="hollywood" style={{width:"400px", height:"150px",marginBottom:"5px",borderRadius:"10px"}}/>
                    <img src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=600" alt="fitness" style={{width:"400px", height:"150px" ,marginBottom:"5px",borderRadius:"10px"}}/>
                    <img src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600" alt="tech" style={{width:"400px", height:"150px",marginBottom:"5px",borderRadius:"10px"}}/>
                 </div>
            </div>
            <TechnologyThelatest/>
            <TechnologyThelatestarticle/>
            <TechnologyThelateststories/>
        </>
    )
}