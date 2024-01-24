import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="hero">
      <nav>
        <h2 className="logo">
          John <span style={{ color: "red" }}>Doe</span>
        </h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <button type="button">Subscribe</button>
      </nav>
    </div>
  );
};

export default NavBar;
