import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      Hello from page1
      <Link to="/about">About US</Link>
      <Link
        to="https://www.google.com/"
        target="_blank"
        rel="noopener noreference"
      >
        Covid Data wali api
      </Link>
    </div>
  );
};

export default Page1;
