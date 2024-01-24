import React from "react";
import "./Score.css";

const Score = ({ score }) => {
  return (
    <div className="score-container">
      <h3>Score: {score}</h3>
    </div>
  );
};

export default Score;
