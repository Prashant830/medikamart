import React, { Component } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import SignInForm from "./pages/SignInForm";
import ForgetPass from "./pages/ForgetPass";
import Admin from "./pages/Admin";
import CeoLevel from "./pages/CeoLevel";
import Hr from "./pages/Hr";
import Sales from "./pages/Sales";
import logo from "./logo.webp";



export default function App() {
  return (
    <Router>
    
           <Routes>
        
            <Route exact path="/" element={< SignInForm />} ></Route>
             <Route exact path="/forgetpass" element={< ForgetPass />} ></Route>
            <Route exact path="/admins" element={< Admin />} ></Route>
            <Route exact path="/ceos" element={< CeoLevel />} ></Route>
            <Route  exact path="/hrs" element={<Hr/>} ></Route>
            <Route  exact path="/sales" element={< Sales />} ></Route>
            
              </Routes>
    </Router>
  );
}

{/* <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/forgetpass">About Us</Link>
              </li>
              <li>
                <Link to="/admins">Contact Us</Link>
              </li>
              <li>
                <Link to="/ceos">Contact Us</Link>
              </li>
              <li>
                <Link to="/hrs">Contact Us</Link>
              </li>
              <li>
                <Link to="/sales">Contact Us</Link>
              </li>
            </ul>
            </div> */}
