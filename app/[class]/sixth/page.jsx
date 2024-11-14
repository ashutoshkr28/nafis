// components/Quiz.js
"use client"

import { sixtques } from "@/assets/assets";
import { useState } from "react";
// import { sixtques } from "../data/sixtques";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    const isCorrect = selectedOption === sixtques[currentQuestionIndex].answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < sixtques.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md text-center">
      {showScore ? (
        <div>
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="mt-4 text-xl">You scored {score} out of {sixtques.length}</p>
          <button
            onClick={handleRestart}
            className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold">
            Question {currentQuestionIndex + 1}/{sixtques.length}
          </h2>
          <p className="mt-4 text-lg">{sixtques[currentQuestionIndex].question}</p>
          <div className="mt-6 space-y-4">
            {sixtques[currentQuestionIndex].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
                className="w-full px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-lg font-medium"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
