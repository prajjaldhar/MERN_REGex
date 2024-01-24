import React from "react";
import "./NavBar.css";

const NavBar = () => {
  const name = "Prajjal";

  return (
    <div class="hero">
      <nav>
        <h2 class="logo">
          {name} <span style={{ color: "red" }}>Doe</span>
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
