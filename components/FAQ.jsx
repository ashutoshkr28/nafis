// "use client"; // Enables client-side rendering for this component
// import { useState } from "react";

// const FAQ = ({ chapter }) => {
//   return (
//     <div>
//       {/* Chapter Title */}
//       <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
//         {`अध्याय: ${chapter.chapterName}`}
//       </h1>

//       {/* Questions and Answers */}
//       <div className="border border-gray-300 rounded-lg shadow-md">
//         {chapter.questions.map((faq, index) => (
//           <QuestionAnswer key={index} faq={faq} questionNumber={index + 1} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const QuestionAnswer = ({ faq, questionNumber }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border-b border-gray-300 pb-4">
//       {/* Question */}
//       <div
//         className="cursor-pointer flex justify-between items-center px-4 py-3"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-expanded={isOpen}
//       >
//         <h3 className="text-lg font-medium text-blue-600">
//           {`प्रश्न ${questionNumber}: ${faq.question}`}
//         </h3>
//         <span className="text-indigo-500">{isOpen ? "[-]" : "[+]"}</span>
//       </div>

//       {/* Answer (only shown when isOpen is true) */}
//       {isOpen && (
//         <div className="mt-2 px-4 text-gray-600">
//           <p>{faq.answer}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FAQ;





// import classData from "@/data/classData";
import React from "react";
// import classData from "../data/classData"; // Adjust the relative path
import classData from "@/app/data/classData";



const FAQ = ({ classSlug }) => {
  const classInfo = classData[classSlug]; // Get class info dynamically
  if (!classInfo) {
    return <div>Invalid Class Selected</div>;
  }

  return (
    <div>
      {classInfo.chapters.map((chapter, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{chapter.chapterName}</h2>
          <div>
            {chapter.questions &&
              chapter.questions.map((faq, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-xl">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            {chapter.sections &&
              Object.entries(chapter.sections).map(([subject, questions]) => (
                <div key={subject}>
                  <h3 className="text-xl font-semibold">{subject}</h3>
                  {questions.map((faq, idx) => (
                    <div key={idx} className="mb-4">
                      <h4>{faq.question}</h4>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
