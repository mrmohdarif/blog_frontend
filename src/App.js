
import './App.css';
import axios from 'axios';

import { NavigationBar } from './NavigationBar';
import { useEffect, useState } from 'react';



function App() {
  const [nav,setnav]=useState([])

  useEffect(()=>{
    fetch()
  },[])
  
  const fetch=async()=>{
    const response=await axios.get("https://blog-server-y2za.onrender.com/")
    console.log(response);
    try{
      setnav(response.data)
    }
    catch(err){
      console.log(err);
    }
    
  }
  console.log("this is nav",nav);
  return (
    <div className="App">
    <NavigationBar data={nav}/>
    </div>
  );
}

export default App;
