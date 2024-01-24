import React from 'react';

const Result = ({ score }) => {
  return (
    <div className="result-container">
      <h2>Quiz Result</h2>
      <p>{score >= 6 ? 'Congratulations! You passed!' : 'Sorry, you failed. More practice needed.'}</p>
    </div>
  );
};

export default Result;
