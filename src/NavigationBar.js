import React from "react";
import { Logo } from "./Logo";
import { Home } from "./home/Home";
import { Bollywood } from "./component/Bolywood/Bollywood";
import { Hollywood } from "./component/Hollywood/Hollywood";
import { Fitness } from "./component/Fitness/Fitness";
import { Technology } from "./component/Tech/Technology";
import { Food } from "./component/Food/Food";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Javan } from "./home/subcomponent/Javan";
import { TikTok } from "./home/subcomponent/TikTok";
import { Papaya } from "./home/subcomponent/Papaya";
import Bank from "./home/subcomponent/thelatestarticlecomponent/Bank";
import Indiannavey from "./home/subcomponent/thelatestarticlecomponent/Indiannavey";
import Manoj from "./component/Bolywood/Subcomponent/Manoj";
import Anushkha from "./component/Bolywood/Subcomponent/Anushkha";
import Dharavi from "./component/Bolywood/Subcomponent/Dharavi";
import Sid from "./component/Bolywood/Thelatestarticle/Sid";
import Priyanka from "./component/Bolywood/Thelatestarticle/Priyanka";
import Ahana from "./component/Bolywood/Thelatestarticle/Ahana";
import Netflex from "./component/Hollywood/subcomponent/Netflex";
import Wwe from "./component/Hollywood/subcomponent/Wwe";
import Cnn from "./component/Hollywood/subcomponent/Cnn";
import Microsoft from "./component/Hollywood/subcomponent2/Microsoft";
// import Idol from "./component/Hollywood/subcomponent2/Indianidol";
import Nicjonas from "./component/Hollywood/subcomponent2/Nicjonas";
import Indianidol from "./component/Hollywood/subcomponent2/Indianidol";
import Medcine from "./component/Fitness/subcomponent/Medcine";
import Smoke from "./component/Fitness/subcomponent/Smoke";
import Mask from "./component/Fitness/subcomponent/Mask";
import Bone from "./component/Fitness/newcompforarticle/Bone.js";
import Mashroom from "./component/Fitness/newcompforarticle/Mashroom";
import Decise from "./component/Fitness/newcompforarticle/Decise";
import MicrosoftAi from "./component/Tech/latestcomponent/MicrosoftAi";
import Phone2 from "./component/Tech/latestcomponent/Phone2";
import Iphone from "./component/Tech/latestcomponent/Iphone";
import Chatgpt from "./component/Tech/articlecomp/Chatgpt";
import Nokia from "./component/Tech/articlecomp/Nokia";
import Whatsapp from "./component/Tech/articlecomp/Whatsapp";
import Malai from "./component/Food/component1/Malai";
import Phulahari from "./component/Food/component1/Phulahari";
import Puri from "./component/Food/component1/Puri";
import Pavbhaji from "./component/Food/component2/Pavbhaji";
import Masaladhosa from "./component/Food/component2/Masaladhosa";
import Roghanjosh from "./component/Food/component2/Roghanjosh";
// import Footer from "./Footer";
import Rahul from "./home/homelateststories/Rahul";
import Virat from "./home/homelateststories/Virat";
import Upi from "./home/homelateststories/Upi";
import Akshay from "./component/Bolywood/bolywoodstores/Akshay";
import Zinta from "./component/Bolywood/bolywoodstores/Zinta";
import Khatro from "./component/Bolywood/bolywoodstores/Khatro";
import Prince from "./component/Hollywood/holywoodstores/Prince";
import Lily from "./component/Hollywood/holywoodstores/Lily";
import Kim from "./component/Hollywood/holywoodstores/Kim";
import Juce from "./component/Fitness/fitnessstores/Juce";

import Clinic from "./component/Fitness/fitnessstores/Clinic";
import Anand from "./component/Tech/techlateststores/Anand";
import Iq from "./component/Tech/techlateststores/Iq";
import Google from "./component/Tech/techlateststores/Google";
import Chicken65 from "./component/Food/foodstores/Chicken65";
import Gulabjamun from "./component/Food/foodstores/Gulabjamun";
import Pakoda from "./component/Food/foodstores/Pakoda";
// import Signin from "./Signin";
// import Signup from "./Signup";
import Singinpage from "./Singinpage";
import Signuppage from "./Signuppage"
import Welcome from "./Welcome";
export function NavigationBar(props) {
  // const  [navdata1, setnavdata1]=useState()
  
  const storage=localStorage.getItem('token')


   console.log("this is local storage",storage);
  return (
    <>
      <div>
        <Logo />
        
      </div>
      
      <div>
        <BrowserRouter value={props.data}>

          <Routes>
            <Route path="/" 
            element={<Home data={props.data}/>} />
            <Route
              path="/bollywood"
              element={
                
                  <Bollywood data={props.data}/>
                
              }
            />
            <Route
              path="/hollywood"
              element={
               
                  <Hollywood data={props.data}/>
             
              }
            />
            <Route
              path="/fitness"
              element={
            
                  <Fitness data={props.data}/>
               
              }
            />
            <Route
              path="/technology"
              element={
           
                  <Technology data={props.data}/>
             
              }
            />
            <Route
              path="/food"
              element={
              
                  <Food />
            
              }
            />
         <Route
              path="/javan"
               element={
            
                   <Javan value={props.data}/>
              
              }
            />
            <Route
              path="/papaya"
              element={
           
                  <Papaya value={props.data}/>
          
              }
            />
            <Route
              path="/tiktok"
              element={
            
                  <TikTok value={props.data}/>
       
              }
            />
            <Route
              path="/bank"
              element={
          
                  <Bank value={props.data}/>
             
              }
            />
            <Route
              path="/indiannavey"
              element={
        
                  <Indiannavey value={props.data}/>
                
              }
            />
            <Route
              path="/lalu"
              element={
               
                  <TikTok value={props.data}/>
             
              }
            />
            <Route
              path="/manoj"
              element={
              
                  <Manoj value={props.data}/>
            
              }
            />
            <Route
              path="/anushkha"
              element={
            
                  <Anushkha value={props.data}/>
             
              }
            />
            <Route
              path="/Dharavi"
              element={
            
                  <Dharavi value={props.data}/>
        
              }
            />
            <Route
              path="/sid"
              element={
              
                  <Sid value={props.data}/>
              
              }
            />
            <Route
              path="/priyanka"
              element={
             
                  <Priyanka value={props.data}/>
             
              }
            />
            <Route
              path="/ahana"
              element={
             
                  <Ahana value={props.data}/>
            
              }
            />
            <Route
              path="/netflex"
              element={
               
                  <Netflex value={props.data}/>
             
              }
            />
            <Route
              path="/wwe"
              element={
              
                  <Wwe value={props.data}/>
           
              }
            />
            <Route
              path="/cnn"
              element={
           
                  <Cnn value={props.data}/>
              
              }
            />
            <Route
              path="/microsoft"
              element={
           
                  <Microsoft value={props.data}/>
             
              }
            />
            <Route
              path="/indianidol"
              element={
        
                  <Indianidol value={props.data}/>
               
              }
            />
            <Route
              path="/nicjonas"
              element={
                
                  <Nicjonas value={props.data}/>
              
              }
            />
            <Route
              path="/medcine"
              element={
          
                  <Medcine value={props.data}/>
             
              }
            />
            <Route
              path="/smoke"
              element={
                       <Smoke value={props.data}/>
              
              }
            />
            <Route
              path="/mask"
              element={
              
                  <Mask value={props.data}/>
        
              }
            />
            <Route
              path="/bone"
              element={
             
                  <Bone value={props.data}/>
              
              }
            />
            <Route
              path="/mashroom"
              element={
              
                  <Mashroom value={props.data}/>
               
              }
            />
            <Route
              path="/decise"
              element={
                <Decise value={props.data}/>
               
              }
            />
            <Route
              path="/microsoftai"
              element={
                
                  <MicrosoftAi value={props.data}/>
              
              }
            />
            <Route
              path="/iphone"
              element={
             
                  <Iphone value={props.data}/>
                
              }
            />
            <Route
              path="/phone2"
              element={
              
                  <Phone2 value={props.data}/>
             
              }
            />
            <Route
              path="/chatgpt"
              element={
             
                  <Chatgpt value={props.data}/>
               
              }
            />
            <Route
              path="/nokia"
              element={
                <Nokia value={props.data}/>
              
              }
            />
            <Route
              path="/whatsapp"
              element={
              
                  <Whatsapp value={props.data}/>
              
              }
            />
            <Route
              path="/malai"
              element={
              
                  <Malai value={props.data}/>
              
              }
            />
            <Route
              path="/phulahari"
              element={
               
                  <Phulahari value={props.data}/>
            
              }
            />
            <Route
              path="/Puri"
              element={
              
                  <Puri value={props.data}/>
            
              }
            />
            <Route
              path="/pavbhaji"
              element={
           
                  <Pavbhaji value={props.data}/>
              
              }
            />
            <Route
              path="/masaladhosa"
              element={
            
                  <Masaladhosa value={props.data}/>
               
              }
            />
            <Route
              path="/roghanjosh"
              element={
               
                  <Roghanjosh value={props.data}/>
             
              }
            />
            <Route
              path="/rahul"
              element={
               
                  <Rahul value={props.data}/>
            
              }
            />
            <Route
              path="/virat"
              element={
              
                  <Virat value={props.data}/>
               
              }
            />
            <Route
              path="/upi"
              element={
              
                  <Upi value={props.data}/>
               
              }
            />
            <Route
              path="/akshay"
              element={
               
                  <Akshay value={props.data}/>
              
              }
            />
            <Route
              path="/zinta"
              element={
             
                  <Zinta value={props.data}/>
              
              }
            />
            <Route
              path="/khatro"
              element={
              
                  <Khatro value={props.data}/>
               
              }
            />
            <Route
              path="/kim"
              element={
             
                  <Kim value={props.data}/>
             
              }
            />
            <Route
              path="/prince"
              element={
             
                  <Prince value={props.data}/>
               
              }
            />
            <Route
              path="/Lily"
              element={
              
                  <Lily value={props.data}/>
             
              }
            />
            <Route
              path="/juce"
              element={
              
                  <Juce value={props.data}/>
          
              }
            />
            <Route
              path="/clinic"
              element={
              
                  <Clinic value={props.data}/>
               
              }
            />
            <Route
              path="/papya"
              element={
                
                  <Papaya value={props.data}/>
               
              }
            />
            <Route
              path="/anand"
              element={
              
                  <Anand value={props.data}/>
               
              }
            />
            <Route
              path="/iq"
              element={
               
                  <Iq value={props.data}/>
                
              }
            />
            <Route
              path="/google"
              element={
               
                  <Google value={props.data}/>
               
              }
            />
            <Route
              path="/chicken65"
              element={
               
                  <Chicken65 value={props.data}/>
              
              }
            />
            <Route
              path="/gulabjamun"
              element={
               
                  <Gulabjamun value={props.data}/>
              }
            />
            <Route
              path="/pakoda"
              element={
              
                  <Pakoda value={props.data}/>
                
              }
            />

            <Route path="/signinpage" element={<Singinpage/>} />
            <Route path="/signuppage" element={<Signuppage/>} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
