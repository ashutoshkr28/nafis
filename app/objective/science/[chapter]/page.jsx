// import FAQ from "@/components/FAQ"; // Assuming FAQ is a reusable component
// import classData from "@/data/classData"; // Assuming this contains the questions/answers


// import classData from "@/app/data/classData";
// import FAQ from "@/components/FAQ";


// export default function ClassFAQ({ params }) {
//   const { chapter } = params; // Access the dynamic route parameter
//   const classDetails = classData[chapter]; // Get data for the class

//   // Handle invalid class slugs
//   if (!classDetails) {
//     return (
//       <div className="text-center mt-12">
//         <h1 className="text-2xl text-red-500 font-bold">Invalid Class Selected</h1>
//         <p>Please check the URL or go back to the main menu.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <FAQ chapter={classDetails} />
//     </div>
//   );
// }


// import classData from "@/app/data/classData"; // Adjust the relative path accordingly
// import FAQ from "@/components/FAQ";

// const  ClassFAQ = ({ params }) => {
//   const { chapter } = params;

//   const chapterData = classData[chapter];
//   if (!chapterData) {
//     return <p className="text-center mt-8 text-red-500">Invalid Class Selected</p>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <FAQ chapter={chapterData} />
//     </div>
//   );
// }


// export default ClassFAQ;

"use client"

// app/objective/science/[chapter]/page.jsx

import { useParams } from 'next/navigation';  // For Next.js 13+ App Router
// import classData from "@/data/classData";     // Adjust path if needed
import classData from "@/app/data/classData"

const ClassFAQ = () => {
  const { chapter } = useParams();  // Get the chapter from URL params
  const chapterData = classData[chapter];  // Fetch the class data for the selected chapter

  // If no chapter data is found, show error
  if (!chapterData) {
    return <div>Invalid Class Selected</div>;
  }

  return (
    <div>
      {chapterData.chapters.map((chapterItem, idx) => (
        <div key={idx}>
          <h1>{chapterItem.chapterName}</h1>
          {chapterItem.questions && chapterItem.questions.length > 0 ? (
            chapterItem.questions.map((faq, qIdx) => (
              <div key={qIdx}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))
          ) : chapterItem.sections ? (
            Object.keys(chapterItem.sections).map((subject, sIdx) => (
              <div key={sIdx}>
                <h2>{subject}</h2>
                {chapterItem.sections[subject].map((faq, qIdx) => (
                  <div key={qIdx}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>No questions available for this chapter.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ClassFAQ;
