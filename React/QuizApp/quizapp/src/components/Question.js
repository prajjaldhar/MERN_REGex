import React from "react";
import "./Question.css";

const Question = ({
  questionData,
  handleOptionClick,
  handleSkipClick,
  answerCorrect,
}) => {
  const { question, options } = questionData;

  const handleButtonClick = (selectedOption) => {
    if (!answerCorrect) {
      handleOptionClick(selectedOption);
    }
  };

  return (
    <div className="question-container">
      <div
        className={`question-card ${
          answerCorrect === true
            ? "correct"
            : answerCorrect === false
            ? "incorrect"
            : ""
        }`}
      >
        <div className="card-inner">
          <h2>{question}</h2>
          <div className="options-container">
            {options.map((option, index) => (
              <button
                key={index}
                className={`option ${
                  answerCorrect !== null &&
                  option === questionData.correctAnswer
                    ? "correct"
                    : ""
                }`}
                onClick={() => handleButtonClick(option)}
              >
                {option}
              </button>
            ))}
            <button
              className="skip-button"
              onClick={() => handleSkipClick()}
              disabled={answerCorrect !== null} // Disable skip after an answer is given
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
