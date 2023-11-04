import React from "react";
import "./Hero.css"
import Button from "./Button.js";
import "./Button.css"

const Hero = () => {
  return (
    <>
     <section>
     <div className='hero'>
  
      
         {/* right hand */}
        
          <div className='heading'>
             <h1>Welcome to Our Website</h1>
              </div>
           <div className='small'>
             <h2>Service and Offering</h2>
             </div>
           <div className='para'>
             <p>A brief description of your service and offering goes here.</p>
             </div>
             
          <div className='button'>
          <Button/>
           
             </div>
             
             
        </div>
          </section>
        
           
             
             </>
  )
}

export default Hero;
