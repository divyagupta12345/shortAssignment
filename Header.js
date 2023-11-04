import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"

const Header = () => {
  return (
    <>
    <div className= 'd-flex justify-content-around header'>
    <div>
        <img src= "https://th.bing.com/th/id/OIP.2AmwrTnE_ys6QNCFe6iKRwHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt= " " />
       </div>
       <div className= 'd- flex align-items-center'>
       <h2> Code Westling </h2>
       <p>Code westling was founded by seven engineers in Pune, Maharashtra, India. Its initial capital was $250.[8] It was registered as Code Consultants Private Limited on 2 July 1981.[9] In 1983, it relocated to Bangalore, Karnataka.

The company changed its name to Code Technologies Private Limited in April 1992 and to Code Technologies Limited when it became a public limited company in June 1992.[10] It was renamed Code Limited in June 2011.[11 floated in February 1993 with an offer price of ₹95 (equivalent to ₹690 or US$8.60 in 2023) per share agvalue of ₹20 (equivalent to ₹150 or US$1.80 in 2023) per share. The IPO was undersubscribed.</p>
        </div>
        
    </div>
    <div className="graph">
         
        <img src="https://s.tmimgcdn.com/scr/1204x1146/137800/business-financial-data-infographic-elements_137800-original.jpg" width={600} alt= " " />
    </div>
    </>
  )
}
    
export default Header