import React from "react";
import { Link } from "react-router-dom"; 
import "./navbar.css";
export default function Navbar() {
  
  return (
    <div className="wrapper">
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fas fa-bars"></i>
        </label>
        <div className="content">
          <div className="logo">
            <Link to="#">Code Generator</Link>
          </div>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="/generate">Generate</Link>
            </li>
            <li>
              <Link to="#">Feedback</Link>
            </li>
            <li>
              <Link to="/signin">Login</Link>
            </li>
          </ul>
        </div>
        <label htmlFor="show-search" className="search-icon">
          <i className="fas fa-search"></i>
        </label>
        <form action="#" className="search-box">
          <input
            type="text"
            placeholder="Type Something to Search..."
            required
          />
          <button type="submit" className="go-icon">
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </form>
      </nav>
    </div>
  );
}
