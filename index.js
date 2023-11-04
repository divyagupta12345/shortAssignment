// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import Home from "./Home";
// import Ragistration from "./Ragistration";
// import Dashboard from "./Dashboard";
// import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
// import Nav from "./Nav"


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     <Router> 
//     <div>
//       <header>
//         <Link>
//           <Nav/>
//         </Link>
//       </header>
  
//     <Routes>
//        <Route path="/Home" element={Home } />
//        <Route path= "/ragistration" exact component= {Ragistration} />
//        <Route path= "/Dashboard" exact component= {Dashboard} />
//          </Routes>
//          </div>
//          </Router>
    
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root = document.getElementById('root'); 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root // You should specify the target root element here
);


