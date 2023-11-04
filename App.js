import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

import Home from './Home';
import Registration from './Ragistration'; // Correct the typo in the import
import Dashboard from './Dashboard';
import Nav from './Nav';
import Hero from './Hero';
import Button from "./Button";
import PageButton from './PageButton';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <Link to="/Hero"><Nav/></Link>
          <Link to="/PageButton">
          
            
          </Link>
        </header>
        <Routes>
          <Route path="/Hero" element={<Hero/>} />
          <Route path="/Button" element={<Button/>}/>
        <Route path= "/PageButton" element ={<PageButton/>}/>
          <Route path ="/Home" element={<Home/>}/>
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


