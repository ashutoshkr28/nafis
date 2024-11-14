"use client"

import { useState } from "react";
import { sixtques } from "@/assets/assets";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Track selected option for each question
  const [selectedOptions, setSelectedOptions] = useState({});

  const optionLabels = ["A", "B", "C", "D"]; // Labels for options

  const handleAnswerOptionClick = (selectedOption) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestionIndex]: selectedOption,
    }));

    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(updatedUserAnswers);

    const isCorrect = selectedOption === sixtques[currentQuestionIndex].answer;
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < sixtques.length) {
      setCurrentQuestionIndex(nextQuestion);
    }
  };

  const handleSubmit = () => {
    setShowScore(true);
    setSubmitted(true);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
    setSelectedOptions({});
    setSubmitted(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md text-center">
      {showScore ? (
        <div>
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="mt-4 text-xl">
            You scored {score} out of {sixtques.length}
          </p>
          <button
            onClick={handleRestart}
            className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
          >
            Restart Quiz
          </button>

          {/* Display summary of answers */}
          <div className="mt-6 text-left">
            <h3 className="text-lg font-semibold">Your Answers:</h3>
            {sixtques.map((question, index) => (
              <div key={index} className="mt-4">
                <p className="font-medium">
                  Q{index + 1}: {question.question}
                </p>
                <p
                  className={`${
                    userAnswers[index] === question.answer ? "text-green-500" : "text-red-500"
                  }`}
                >
                  Your answer: {userAnswers[index]}
                </p>
                <p className="text-gray-600">Correct answer: {question.answer}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold">
            Question {currentQuestionIndex + 1}/{sixtques.length}
          </h2>
          <p className="mt-4 text-lg">{sixtques[currentQuestionIndex].question}</p>

          <div className="mt-6 space-y-4">
            {sixtques[currentQuestionIndex].options.map((option, index) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
                className={`w-full px-4 py-2 rounded text-lg font-medium ${
                  selectedOptions[currentQuestionIndex] === option
                    ? option === sixtques[currentQuestionIndex].answer
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                disabled={submitted || selectedOptions[currentQuestionIndex] !== undefined}
              >
                {optionLabels[index]}. {option}
              </button>
            ))}
          </div>

          {/* Show "Next" button if not on the last question */}
          {currentQuestionIndex < sixtques.length - 1 && (
            <button
              onClick={handleNextQuestion}
              disabled={selectedOptions[currentQuestionIndex] === undefined}
              className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
            >
              Next
            </button>
          )}

          {/* Show "Submit" button on the last question */}
          {currentQuestionIndex === sixtques.length - 1 && (
            <button
              onClick={handleSubmit}
              disabled={selectedOptions[currentQuestionIndex] === undefined}
              className="mt-6 px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
