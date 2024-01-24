// NavBar.js
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">Your Logo</div>
      <div className="additional-content">
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-menu-item">
            <a href="#">About</a>
          </li>
          <li className="nav-menu-item">
            <a href="#">Services</a>
          </li>
          <li className="nav-menu-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
