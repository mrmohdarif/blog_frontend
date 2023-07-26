import React, { useEffect, useState } from "react";
import { Nav } from "../Nav";
import axios from "axios";
import Thelatest from "./Thelatest";
import Thelatestarticle from './Thelatestarticle'
import Thelateststories from './Thelateststories'
import Footer from "../Footer";

export function Home() {
const [home,sethome]=useState([])

useEffect(()=>{
  fetch()
},[])

const fetch=async()=>{
  const response=await axios.get("https://blog-server-y2za.onrender.com/")
  try{
    
    sethome(response.data)
  }
  catch(err){
    console.log(err);
  }
  
}


  return (
    <>
      <Nav />
       <div className="home1_image">
        <div>
          <img
            src="https://media5.bollywoodhungama.in/wp-content/uploads/2020/08/Pathaan-01.jpg"
            alt="bolywoood"
            className="pathan"
          />
        </div>

        <div className="home2_image">
          <img
            src="https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="hollywood"
            className="hollywood"
          />
          <img
            src="https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="fitness"
            className="fitness"
          />
          <img
            src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="tech"
            className="tech"
          />
        </div>
      </div>

         <Thelatest data={home}/>
        <Thelatestarticle data={home}/>
        <Thelateststories data={home}/>
        {/* <Footer/>  */}
        
    </>
  );
}
export default Home