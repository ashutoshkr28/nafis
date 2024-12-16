// "use client"; // Ensure the component uses client-side interactivity

// import React, { useState } from "react";

// // Sample data for questions
// const questionsData = [
//   {
//     id: 1,
//     question: "What is the capital of France?",
//     options: ["Berlin", "Madrid", "Paris", "Rome"],
//     correctAnswer: "Paris",
//   },
//   {
//     id: 2,
//     question: "Which planet is known as the Red Planet?",
//     options: ["Earth", "Mars", "Jupiter", "Saturn"],
//     correctAnswer: "Mars",
//   },
//   {
//     id: 3,
//     question: "Who developed the theory of relativity?",
//     options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
//     correctAnswer: "Albert Einstein",
//   },
//   // Add more questions as needed
// ];

// const MCQ = () => {
//   const [activeQuestionId, setActiveQuestionId] = useState(null);

//   // Function to handle showing the answer for a specific question
//   const handleShowAnswer = (id) => {
//     if (activeQuestionId === id) {
//       setActiveQuestionId(null); // Toggle the answer visibility off if the same question is clicked
//     } else {
//       setActiveQuestionId(id); // Show the answer for the selected question
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center mt-10 space-y-8">
//       <h1 className="text-2xl font-bold mb-8">Objective Questions</h1>

//       {/* Iterate through the questions and display them */}
//       {questionsData.map((question) => (
//         <div key={question.id} className="w-full max-w-3xl p-4 border-b border-gray-300">
//           <div className="flex justify-between items-center mb-4">
//             {/* Question Text */}
//             <h2 className="text-lg font-semibold">{question.question}</h2>

//             {/* Button to show/hide answer */}
//             <button
//               onClick={() => handleShowAnswer(question.id)}
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               {activeQuestionId === question.id ? "Hide Answer" : "Show Answer"}
//             </button>
//           </div>

//           {/* Options */}
//           <ul className="space-y-2">
//             {question.options.map((option, index) => (
//               <li key={index} className="list-disc ml-6">
//                 {option}
//               </li>
//             ))}
//           </ul>

//           {/* Display the answer if the question is selected */}
//           {activeQuestionId === question.id && (
//             <div className="mt-4 text-lg font-medium text-green-600">
//               <strong>The correct answer is:</strong> {question.correctAnswer}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MCQ;



// "use client"; // Ensure the component uses client-side interactivity

// import React, { useState } from "react";
// import { questionsData } from "@/assets/questions"; // Import questions from the questions file

// const MCQ = () => {
//   const [activeQuestionId, setActiveQuestionId] = useState(null);

//   // Function to handle showing the answer for a specific question
//   const handleShowAnswer = (id) => {
//     if (activeQuestionId === id) {
//       setActiveQuestionId(null); // Toggle the answer visibility off if the same question is clicked
//     } else {
//       setActiveQuestionId(id); // Show the answer for the selected question
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center mt-10 space-y-8">
//       <h1 className="text-2xl font-bold mb-8">Objective Questions</h1>

//       {/* Iterate through the questions and display them */}
//       {questionsData.map((question) => (
//         <div key={question.id} className="w-full max-w-3xl p-4 border-b border-gray-300">
//           <div className="flex justify-between items-center mb-4">
//             {/* Question Text */}
//             <h2 className="text-lg font-semibold">{question.question}</h2>

//             {/* Button to show/hide answer */}
//             <button
//               onClick={() => handleShowAnswer(question.id)}
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               {activeQuestionId === question.id ? "Hide Answer" : "Show Answer"}
//             </button>
//           </div>

//           {/* Options */}
//           <ul className="space-y-2">
//             {question.options.map((option, index) => (
//               <li key={index} className="list-disc ml-6">
//                 {option}
//               </li>
//             ))}
//           </ul>

//           {/* Display the answer if the question is selected */}
//           {activeQuestionId === question.id && (
//             <div className="mt-4 text-lg font-medium text-green-600">
//               <strong>The correct answer is:</strong> {question.correctAnswer}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// "use client"; // Ensure the component uses client-side interactivity

// import React, { useState } from "react";
// import { questionsData } from "@/assets/questions"; // Import questions from the questions file

// const MCQ = () => {
//   const [activeQuestionId, setActiveQuestionId] = useState(null);

//   // Function to handle showing the answer for a specific question
//   const handleShowAnswer = (id) => {
//     if (activeQuestionId === id) {
//       setActiveQuestionId(null); // Toggle the answer visibility off if the same question is clicked
//     } else {
//       setActiveQuestionId(id); // Show the answer for the selected question
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center mt-10 space-y-8">
//       <h1 className="text-2xl font-bold mb-8">Objective Questions</h1>

//       {/* Iterate through the questions and display them */}
//       {questionsData.map((question, index) => (
//         <div key={question.id} className="w-full max-w-3xl p-4 border-b border-gray-300">
//           <div className="flex justify-between items-center mb-4">
//             {/* Display question number and question text */}
//             <h2 className="text-lg font-semibold">
//               <span className="font-bold mr-2">Q{index + 1}.</span>
//               {question.question}
//             </h2>

//             {/* Button to show/hide answer */}
//             <button
//               onClick={() => handleShowAnswer(question.id)}
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               {activeQuestionId === question.id ? "Hide Answer" : "Show Answer"}
//             </button>
//           </div>

//           {/* Options without bullets */}
//           <ul className="space-y-2 list-none">
//             {Object.entries(question.options).map(([key, option]) => (
//               <li key={key} className="ml-6">
//                 {key}) {option} {/* Display option in A, B, C, D format */}
//               </li>
//             ))}
//           </ul>

//           {/* Display the answer if the question is selected */}
//           {activeQuestionId === question.id && (
//             <div className="mt-4 text-lg font-medium text-green-600">
//               <strong>The correct answer is:</strong> {question.correctAnswer}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MCQ;




import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

// List of all the classes with their respective slugs for routing
const chapters = [
  { name: "8th Class   ( कक्षा 8 गणित  ) ", slug: "8thClass" },
  { name: "9th Class ( कक्षा 9 गणित  )", slug: "9thClass" },
  { name: "10th Class ( कक्षा 10  गणित  )", slug: "10thClass" },
  { name: "11th Class ( कक्षा 11  गणित  )", slug: "11thClass" },
  { name: "12th Class ( कक्षा 12  गणित  )", slug: "12thClass" },
];

export default function ScienceNotes() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      {/* <h1 className="text-3xl font-bold mb-6">Science Subject</h1> */}
      {/* image resize for all screen */}
      <Image src={assets.banner8th} ></Image>
      {/* width={900} height={400} */}
      <br />
      <div className="overflow-x-auto w-full max-w-4xl mb-48 mt-10">
        <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-red-500 bg-red-500 text-white text-4xl text-center ">
                All Class Objective Questions with Answer
              </th>
            </tr>
          </thead>
          <tbody>
            {chapters.map((chapter, index) => (
              <tr key={index} className="hover:bg-gray-100 transition duration-150">
                <td className="px-4 py-2 border text-2xl text-left border-gray-300">
                  {/* Update the link to handle both class and chapter dynamically */}
                  <Link
                    href={`/objective/math/${chapter.slug}/[chapter]`} // Add chapter specific URL part
                    as={`/objective/math/${chapter.slug}/chapter1`} // Example, you will adjust to fetch the correct chapter dynamically
                    className="text-blue-600 hover:underline"
                  >
                    {chapter.name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

