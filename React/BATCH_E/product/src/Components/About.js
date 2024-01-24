import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src="http://bit.ly/2tMBBTd" height={420} width={327} />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>Harvest Vase</h1>
          <h2>by studio and friends</h2>
          <p>
            Harvest Vases are a reinterpretation
            <br /> of peeled fruits and vegetables as
            <br /> functional objects. The surfaces
            <br /> appear to be sliced and pulled aside,
            <br /> allowing room for growth.{" "}
          </p>
        </div>
        <div className="product-price-btn">
          <p>
            <span>78</span>$
          </p>
          <button type="button">buy now</button>
        </div>
      </div>
    </div>
  );
};

export default About;
