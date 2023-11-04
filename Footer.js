import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div className="top">
     <div>
        <h1>Code Westling</h1>
        <p>Choose your favourite destination.</p>
     </div>
     <div>
     <a href="/">
            <i className="fa fa-facebook-official"></i> 
        </a>
        <a href="/">
            <i className="fa fa-instagram"></i> 
        </a>
        <a href="/">
            <i className="fa fa-whatsapp"></i> 
        </a>

     </div>
    </div>
     <div className="bottom">
     <div>
         <h4>Project</h4>
         <a href="/">ChangeLog</a>
         <a href="/">Staus</a>
         <a href="/">License</a>
         <a href="/">All Version</a>
         </div>
         <div>
         <h4>Community</h4>
         <a href="/">GitHub</a>
         <a href="/">Issue</a>
         <a href="/">Project</a>
         <a href="/">Twitter</a>
         </div>
         <div>
         <h4>Help</h4>
         
         <a href="/">Support</a>
         <a href="/">TroubleShooting</a>
         <a href="/">Contact us</a>
         </div>
         <div>
         <h4>Other</h4>
         <a href="/">Terms of service</a>
         <a href="/">Privacy Policy</a>
         <a href="/">License</a>
         
         </div>
     </div>
    </div>
    </>
  )
}

export default Footer