import React from "react";  
    
import "./navbar.css";
 function Navbar()
 { return(
    <nav className="navbar">
        <div className="navbar-left">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-middle">
        <ul className="nav-links">
          <li>
            <a href="/">bookmyseat</a>
          </li>
          
        </ul>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
    </nav>


    
 );
 };
 export default Navbar;