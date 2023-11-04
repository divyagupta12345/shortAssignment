import React,{useRef,useState}  from 'react'
import {Link} from "react-router-dom"
 import "./Nav.css"
 import 'material-icons/iconfont/material-icons.css';



const Nav = () => {
  const [isOpen,setIsOpen]= useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`Navbar ${isOpen && 'open'}`}>
      <div className="nav-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
      </div>

      <div className={`nav-items ${isOpen && 'open'}`}>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/DashBoard">DashBoard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;