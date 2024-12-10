// import { notFound } from "next/navigation";

// const chapterDetails = {
//   "introduction-to-science": {
//     title: "Introduction to Science",
//     questions: [
//       { question: "What is science?", answer: "Science is the study of the natural world through observation and experiment." },
//       { question: "Why is the scientific method important?", answer: "The scientific method provides a structured approach to solving problems and validating ideas." },
//     ],
//   },
//   "matter-and-properties": {
//     title: "Matter and Its Properties",
//     questions: [
//       { question: "What is matter?", answer: "Matter is anything that occupies space and has mass." },
//       { question: "What are the three states of matter?", answer: "The three states of matter are solid, liquid, and gas." },
//     ],
//   },
//   "forces-and-motion": {
//     title: "Forces and Motion",
//     questions: [
//       { question: "What is force?", answer: "Force is a push or pull acting on an object." },
//       { question: "What is Newton's First Law of Motion?", answer: "An object will remain at rest or in uniform motion unless acted upon by an external force." },
//     ],
//   },
//   "the-living-world": {
//     title: "The Living World",
//     questions: [
//       { question: "What are the characteristics of living things?", answer: "Living things grow, reproduce, respond to stimuli, and have metabolism." },
//       { question: "What is the basic unit of life?", answer: "The cell is the basic unit of life." },
//     ],
//   },
// };

// export default function ChapterPage({ params }) {
//   const { chapter } = params;

//   const chapterData = chapterDetails[chapter];

//   if (!chapterData) {
//     notFound(); // Show a 404 page if the chapter is not found
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
//       <h1 className="text-2xl font-bold mb-6">{chapterData.title}</h1>
//       <div className="w-full max-w-2xl">
//         {chapterData.questions.map((item, index) => (
//           <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow">
//             <h3 className="font-semibold text-lg">{item.question}</h3>
//             <p className="text-gray-700 mt-2">{item.answer}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { notFound } from "next/navigation";

// const chapterDetails = {
//   "introduction-to-science": {
//     title: "Introduction to Science",
//     questions: [
//       {
//         question: "What is science?",
//         answer: "Science is the study of the natural world through observation and experiment. It helps us understand phenomena and create technology.",
//         highlights: ["study of the natural world", "observation", "experiment"],
//       },
//       {
//         question: "Why is the scientific method important?",
//         answer: "The scientific method provides a structured approach to solving problems and validating ideas. It ensures reliability and repeatability in experiments.",
//         highlights: ["structured approach", "solving problems", "reliability", "repeatability"],
//       },
//     ],
//   },
//   "matter-and-properties": {
//     title: "Matter and Its Properties",
//     questions: [
//       {
//         question: "What is matter?",
//         answer: "Matter is anything that occupies space and has mass. It exists in various forms and states.",
//         highlights: ["occupies space", "has mass"],
//       },
//       {
//         question: "What are the three states of matter?",
//         answer: "The three states of matter are solid, liquid, and gas. Each state has unique properties.",
//         highlights: ["solid", "liquid", "gas"],
//       },
//     ],
//   },
//   "forces-and-motion": {
//     title: "Forces and Motion",
//     questions: [
//       {
//         question: "What is force?",
//         answer: "Force is a push or pull acting on an object, which can change its motion or shape.",
//         highlights: ["push or pull", "change motion", "change shape"],
//       },
//       {
//         question: "What is Newton's First Law of Motion?",
//         answer: "An object will remain at rest or in uniform motion unless acted upon by an external force.",
//         highlights: ["remain at rest", "uniform motion", "external force"],
//       },
//     ],
//   },
// };

// export default function ChapterPage({ params }) {
//   const { chapter } = params;

//   const chapterData = chapterDetails[chapter];

//   if (!chapterData) {
//     notFound(); // Show 404 page if the chapter is not found
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
//       <h1 className="text-3xl font-bold mb-6">{chapterData.title}</h1>
//       <div className="w-full max-w-2xl space-y-6">
//         {chapterData.questions.map((item, index) => (
//           <div key={index} className="p-4 border border-gray-300 rounded-lg bg-white shadow">
//             {/* Question in red */}
//             <h3 className="text-xl font-bold text-red-600">{item.question}</h3>
//             {/* Highlighted Answer */}
//             <p className="text-gray-700 mt-2">
//               {item.answer.split(" ").map((word, i) => (
//                 <span
//                   key={i}
//                   className={
//                     item.highlights.includes(word)
//                       ? "font-semibold text-blue-500"
//                       : ""
//                   }
//                 >
//                   {word}{" "}
//                 </span>
//               ))}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";

// const FAQ = () => {
//   // Chapter data
//   const chapters = [
//     {
//       chapterName: "अध्याय 1: फसल उत्पादन एवं प्रबंधन",
//       questions: [
//         {
//           question: "फसल किसे कहते हैं?",
//           answer: "जब एक ही किस्म के पौधे किसी स्थान पर बड़े पैमाने पर उगाए जाते हैं तो इसे फसल कहते हैं।",
//         },
//         {
//           question: "जुताई किसे कहते हैं?",
//           answer: "मिट्टी को उलटने-पलटने एवं पोला करने की प्रक्रिया को जुताई कहते हैं।",
//         },
//         {
//           question: "खाद एवं उर्वरक किसे कहते हैं?",
//           answer: "वे पदार्थ जिन्हें मिट्टी में पोषक तत्व बनाए रखने के लिए मिलाया जाता है, उन्हें खाद एवं उर्वरक कहते हैं।",
//         },
//         {
//           question: "खाद एवं उर्वरक में क्या अंतर है?",
//           answer: (
//             <div>
//               <h3 className="font-bold text-lg mb-2 text-indigo-700">खाद और उर्वरक का अंतर:</h3>
//               <table className="table-auto border-collapse border border-gray-400 text-gray-800">
//                 <thead>
//                   <tr>
//                     <th className="border border-gray-400 px-4 py-2">खाद</th>
//                     <th className="border border-gray-400 px-4 py-2">उर्वरक</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="border border-gray-400 px-4 py-2">जैविक पदार्थ</td>
//                     <td className="border border-gray-400 px-4 py-2">रासायनिक पदार्थ</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-400 px-4 py-2">सभी प्रकार के पोषक तत्व</td>
//                     <td className="border border-gray-400 px-4 py-2">विशेष पोषक तत्व</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-400 px-4 py-2">अपशिष्ट से तैयार</td>
//                     <td className="border border-gray-400 px-4 py-2">फैक्ट्रियों में तैयार</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           ),
//         },
//         {
//           question: "खरीफ फसल क्या है?",
//           answer: (
//             <div>
//               <p>वह फसल जिन्हें वर्षा ऋतु में बोया जाता है उन्हें खरीफ फसल कहते हैं।</p>
//               <ul className="list-disc ml-6 text-gray-800">
//                 <li>धान</li>
//                 <li>मक्का</li>
//                 <li>कपास</li>
//                 <li>सोयाबीन</li>
//                 <li>मूंगफली</li>
//               </ul>
//             </div>
//           ),
//         },
//         {
//           question: "रबी फसल क्या है?",
//           answer: (
//             <div>
//               <p>शीत ऋतु में उगाई जाने वाली फसलें रबी फसल कहलाती हैं।</p>
//               <ul className="list-disc ml-6 text-gray-800">
//                 <li>गेहूं</li>
//                 <li>चना</li>
//                 <li>मटर</li>
//                 <li>सरसों</li>
//               </ul>
//             </div>
//           ),
//         },
//         // Add more questions here...
//       ],
//     },
//     // Add more chapters here...
//   ];

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-12">
//       <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Frequently Asked Questions</h1>
//       {chapters.map((chapter, index) => (
//         <Chapter key={index} chapter={chapter} />
//       ))}
//     </div>
//   );
// };

// // Chapter Component
// const Chapter = ({ chapter }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border border-gray-300 rounded-lg mb-4">
//       <h2
//         className="text-xl font-semibold bg-indigo-200 px-4 py-2 cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {chapter.chapterName}
//       </h2>
//       {isOpen && (
//         <div className="px-4 py-2">
//           {chapter.questions.map((faq, index) => (
//             <QuestionAnswer key={index} faq={faq} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // QuestionAnswer Component
// const QuestionAnswer = ({ faq }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       className="border-b-2 border-gray-300 pb-4 cursor-pointer"
//       onClick={() => setIsOpen(!isOpen)}
//     >
//       <h3 className="text-lg font-medium text-red-600 flex justify-between items-center">
//         {faq.question}
//         <span className="text-indigo-500 text-xl font-bold">{isOpen ? "-" : "+"}</span>
//       </h3>
//       {isOpen && <div className="text-gray-600 mt-4">{faq.answer}</div>}
//     </div>
//   );
// };

// export default FAQ;

// actual code


"use client";
import DefaultPage from "@/components/default-page";
import { useState } from "react";

const FAQ = () => {
  // Chapter data
  const chapters = [

    //chapter first 
    //8th class chapter and questions and answer
    {
      chapterName: " फसल उत्पादन एवं प्रबंधन",
      imageUrl: "/image/8th-S-Chap-1.png", // 🖼️ Image for this chapter
      description: (
        <h1><b style={{color:"blue"}}> इस अध्याय में ह उर्वरक।</b></h1>
       
      ),
      questions: [
        {
          question: "1. फसल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }} className="text-xl">उत्तर: </b>
              जब एक ही किस्म के पौधे किसी स्थान पर बड़े पैमाने पर उगाए जाते हैं तो इसे <b style={{ color: 'blue' }}>फसल</b> कहते हैं।
            </div>
          ),
        },
        {
          question: "2. जुताई किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }} className="text-xl" >उत्तर: </b>
              मिट्टी को उलटने-पलटने एवं पोला करने की प्रक्रिया को <b style={{ color: 'blue' }}>जुताई</b> कहते हैं।
            </div>
          ),
        },
        {
          question: "3.  खाद एवं उर्वरक किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }} className="text-xl" >उत्तर: </b>
              वे पदार्थ जिन्हें मिट्टी में पोषक तत्व बनाए रखने के लिए मिलाया जाता है, उन्हें <b style={{ color: 'blue' }}>खाद</b> एवं <b style={{ color: 'blue' }}>उर्वरक</b> कहते हैं।
            </div>
          ),
        },
        {
          question: "4. उर्वरक कैसे बनाया जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }} className="text-xl" >उत्तर: </b>
              खाद जैविक प्रक्रिया द्वारा फैक्ट्रियों में बनाया जाता है।
            </div>
          ),
        },
        {
          question: "5.  फसल चक्रण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }} className="text-xl" >उत्तर: </b>
              फसलों को अदल-बदल कर बोना <b style={{ color: 'blue' }}>फसल चक्रण</b> कहलाता है।
            </div>
          ),
        },
        {
          question: "6.  खेतों में लगातार फसल उगाने से क्या हानियाँ हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }} className="text-xl">उत्तर: </b>
              खेतों में लगातार फसल उगाने से खेतों में पोषक तत्वों की कमी हो जाती है।
            </div>
          ),
        },
        {
          question: "7.  तीन उर्वरकों के नाम लिखें।",
          answer: (
            <div>
              <b style={{ color: "green" }} className="text-xl">उत्तर: </b>
              <b style={{ color: "blue" }}>  यूरिया, अमोनियम, सल्फेट </b>
            </div>
          ),
        },

        {
          question: "8.  खाद एवं उर्वरक में क्या अंतर है?",
          answer: (
            <div>

              <h3 className="font-bold text-lg mb-2 text-indigo-700"> <b style={{color:"green"}} className="text-xl">उत्तर: </b>खाद और उर्वरक में निम्न अंतर है:</h3>
              <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center"><b > खाद </b></th>
                    <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center "> <b>उर्वरक </b></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4 ">(I) यह एक जैविक पदार्थ है।</td>
                    <td className="border border-gray-400 px-4 py-4">(I) यह एक रासायनिक पदार्थ है।</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4">(II) इसमें सभी प्रकार के पोषक तत्व पाये जाते हैं।</td>
                    <td className="border border-gray-400 px-4  py-4">(II) इसमें विशेष प्रकार के पोषक तत्व पाये जाते हैं।</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4">(III)  यह अपशिष्टों को मिट्टी में दबाकर बनाया जाता है।</td>
                    <td className="border border-gray-400 px-4  py-4">(III) यह फैक्ट्रियों में बनाया जाता है। </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },


        // {
        //   question: " 8. खाद एवं उर्वरक में क्या अंतर है?",
        //   answer: (
        //     <div>
        //       <b style={{ color: "green" }}>उत्तर: </b>
        //  खाद एवं उर्वरक में निम्न अंतर है:
        //       <table border="1" style={{ width: '100%', marginTop: '10px', textAlign: 'center' }}>
        //         <thead>
        //           <tr>
        //             <th> </th>
        //             <th><b style={{ color: 'blue' }}>खाद</b></th>
        //             <th><b style={{ color: 'blue' }}>उर्वरक</b></th>
        //           </tr>
        //         </thead>
        //         <tbody>
        //           <tr>
        //             <td>(i)</td>
        //             <td>एक जैविक पदार्थ है।</td>
        //             <td>यह एक रासायनिक पदार्थ है।</td>
        //           </tr>
        //           <tr>
        //             <td>(ii)</td>
        //             <td>इसमें सभी प्रकार के पोषक तत्व पाये जाते हैं।</td>
        //             <td>इसमें विशेष प्रकार के पोषक तत्व पाये जाते हैं।</td>
        //           </tr>
        //           <tr>
        //             <td>(iii)</td>
        //             <td>यह अपशिष्टों को मिट्टी में दबाकर बनाया जाता है।</td>
        //             <td>यह फैक्ट्रियों में बनाया जाता है।</td>
        //           </tr>
        //         </tbody>
        //       </table>
        //     </div>
        //   ),
        // },
        {
          question: "9. सिंचाई के पारम्परिक तरीके कौन-कौन से हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }} className="text-xl">उत्तर: </b>

              <b style={{ color: "blue" }}> सिंचाई के पारम्परिक तरीके निम्न हैं: </b>

              <p className="ml-10">मोटर, चेन पम्प, ढकली, रिहट आदि।</p>

            </div>
          ),
        },
        {
          question: " 10.  सिंचाई के प्रमुख स्त्रोतों के नाम बताइये।",
          answer: (
            <div>
              <b style={{ color: "green" }} className="text-xl">उत्तर: </b>

              <b style={{ color: "blue" }}> सिंचाई के प्रमुख स्त्रोत निम्न हैं: </b>
              <ul className=" ml-10 list-none pl-5">
                <li className="relative before:content-['●'] before:absolute before:-left-5 before:text-violet-500">कुएँ</li>
                <li className="relative before:content-['●'] before:absolute before:-left-5 before:text-violet-500">नलकूप</li>
                <li className="relative before:content-['●'] before:absolute before:-left-5 before:text-violet-500">तालाब या झील</li>
                <li className="relative before:content-['●'] before:absolute before:-left-5 before:text-violet-500">नदियाँ</li>
                <li className="relative before:content-['●'] before:absolute before:-left-5 before:text-violet-500">बांध और नहर आदि।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 11. उर्वरक किसे कहते हैं? किन्हीं दो उर्वरकों के नाम लिखे।",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              मिट्टी की उर्वरक शक्ति को बढ़ाने वाले तत्वों को <b style={{ color: 'blue' }}>उर्वरक</b> कहते हैं।<br />
              <b style={{ color: "blue" }} className="ml-10"> दो उर्वरकों के नाम निम्न हैं: </b>

              <p className="ml-10"> (I) यूरिया  (II) फास्फेट </p>
              {/* <ul className="list-decimal ml-8">
                  <li><b style={{ color: "blue" }}></b></li>
                  <li><b style={{ color: "blue" }}></b></li>
                </ul> */}
            </div>
          ),
        },
        {
          question: " 12.   खरपतवार क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              फसलों के साथ कुछ अनचाहे पौधे भी उग आते हैं। इन पौधों को हम <b style={{ color: 'blue' }}>खरपतवार</b> कहते हैं।
            </div>
          ),
        },


        {
          question: " 13.  पीड़कनाशी क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              फल या फसलों उत्पादों की हानि पहुंचाने वाले जीवों को मारने वाली रासायनिक दवाइयों को <b style={{ color: 'blue' }}>पीड़कनाशी</b> कहते हैं।
            </div>
          ),
        },

        {
          question: "14.  हार्वेस्टर क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              वह मशीन जिससे फसलों की कटाई की जाती है उसे <b style={{ color: 'blue' }}>हार्वेस्टर</b> कहते हैं।
            </div>
          ),
        },

        {
          question: " 15.  दालों की फसलों की जड़ों में कौनसा जीवाणु पाया जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: 'blue' }}>राइजोबियम</b> नामक जीवाणु पाया जाता है।
            </div>
          ),
        },

        {
          question: " 16.  हरित क्रांति से क्या तात्पर्य है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              कृषि उत्पादन में तेजी से वृद्धि हुई है, इसे <b style={{ color: 'blue' }}>हरित क्रांति</b> कहते हैं।
            </div>
          ),
        },

        {
          question: " 17.  कॉम्बाइन मशीन क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: 'blue' }}>कॉम्बाइन मशीन</b> वह मशीन है जो हार्वेस्टर तथा थ्रेशर दोनों का कार्य करता है।
            </div>
          ),
        },

        {
          question: " 18. थ्रेशर क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              काटी गई फसलों से बीजों या दानों को भूसे से अलग करने की विधि को <b style={{ color: 'blue' }}>थ्रेशर</b> कहते हैं।
            </div>
          ),
        },

        {
          question: " 19. खरीफ फसल क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              वह फसल जिन्हें वर्षा ऋतु में बोया जाता है उन्हें <b style={{ color: 'blue' }}>खरीफ फसल</b> कहते हैं।
              <br /> <br />
              <p><b style={{color: "violet"}}>उदाहरण: </b>धान, मक्का, कपास, सोयाबीन, मूंगफली इत्यादि।</p>
              {/* <h1> </h1> */}

              <p style={{ color: "blue" }}><b>नोट:</b> भारत में वर्षा ऋतु सामान्यतः जून से सितंबर तक होती है।</p>
            </div>
          ),
        },
        {
          question: " 20.  रबी फसल क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              शीत ऋतु (अक्टूबर से मार्च तक) उगाई जाने वाली फसलें <b style={{ color: 'blue' }}>रबी फसल</b> कहलाती हैं।
              <br /> <br />
              <p><b style={{color: "violet"}}>उदाहरण: </b>गेहूं, चना, मटर, सरसों इत्यादि।</p>
              {/* <ul className="list-disc ml-6 text-gray-800">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul> */}
            </div>
          ),
        },
        {
          question: " 21. समय-समय पर खेतों में खाद क्यों देनी चाहिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }} >  समय-समय पर खेतों में खाद देने के निम्न फायदे हैं: </b>
              <ul className="ml-16 mt-2 list-none">
                <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"> <b style={{ color: "red" }} >मिट्टी की उर्वरता बढ़ती है:</b> खाद में पोषक तत्व होते हैं जो मिट्टी की उर्वरता बढ़ाते हैं। इससे मिट्टी की क्षमता बढ़ती है और वह अधिक पौधों को सहारा दे सकती है।</li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }} >पौधों की वृद्धि बढ़ती है:</b> खाद में पोषक तत्व पौधों की वृद्धि को बढ़ावा देते हैं। इससे पौधे अधिक तेजी से बढ़ते हैं और उनकी पत्तियाँ और फल अधिक स्वस्थ होते हैं।</li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }} >फसल की गुणवत्ता में सुधार होता है:</b> खाद के उपयोग से फसल की गुणवत्ता में सुधार होता है। इससे फसल का स्वाद, रंग और पौष्टिकता बढ़ती है।</li>
                <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }} >मिट्टी की संरचना में सुधार होता है:</b> खाद के उपयोग से मिट्टी की संरचना में सुधार होता है। इससे मिट्टी की जल धारण क्षमता बढ़ती है और वह अधिक पौधों को सहारा दे सकती है।</li>
                <li className="relative before:content-['(V)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }} >कीटों और रोगों का प्रभाव कम होता है:</b> खाद के उपयोग से कीटों और रोगों का प्रभाव कम होता है। इससे फसल की सुरक्षा बढ़ती है और वह अधिक स्वस्थ होती है।</li>
              </ul>
            </div>
          ),
        },

        {
          question: " 22. अच्छी फसल के लिए हमें किन-किन बातों पर ध्यान देना चाहिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }} > अच्छी फसल के लिए हमें निम्नलिखित बातों पर ध्यान देना चाहिए: </b>
              <ul className="ml-16 mt-2 list-none">
                <li className="relative before:content-['(I)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >मिट्टी की तैयारी:</b> मिट्टी की जाँच करें और उसमें आवश्यक पोषक तत्व मिलाएं। <br /><b style={{ color: "violet" }} > (उदाहरण: गोबर की खाद)</b> </li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >बीज का चयन:</b> अच्छी गुणवत्ता वाले बीज का चयन करें। <br /><b style={{ color: "violet" }} > (उदाहरण: हाइब्रिड बीज)</b></li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >सिंचाई:</b> पौधों को आवश्यक पानी दें। <br /> <b style={{ color: "violet" }} >  (उदाहरण: ड्रिप सिंचाई) </b></li>
                <li className="relative before:content-['(IV)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >उर्वरकों का उपयोग:</b> अच्छी गुणवत्ता वाले उर्वरकों का उपयोग करें। <br /><b style={{ color: "violet" }} > (उदाहरण: यूरिया) </b></li>
                <li className="relative before:content-['(V)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >कीट और रोग नियंत्रण:</b> कीट और रोग की पहचान करें और उनके नियंत्रण के लिए आवश्यक कदम उठाएं। <br /><b style={{ color: "violet" }} > (उदाहरण: कीटनाशकों का उपयोग)</b></li>
                <li className="relative before:content-['(VI)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >फसल की देखभाल:</b> फसल की नियमित जाँच करें और उसकी आवश्यकताओं को पूरा करें। <br /><b style={{ color: "violet" }} > (उदाहरण: फसल की पत्तियों की जाँच)</b></li>
              </ul>
            </div>
          ),
        },
        {
          question: " 23.  फसल का संरक्षण कैसे किया जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{color: "blue"}}>
              फसल का संरक्षण करने के लिए निम्नलिखित तरीकों का पालन किया जा सकता है:</b>
              <ul className="ml-16 mt-2 list-none ">
                <li className="relative before:content-['(I)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >कीट और रोग नियंत्रण:</b><span className=""> कीटनाशकों का उपयोग या जैविक नियंत्रण विधियों का प्रयोग।</span></li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >फसल की नियमित जाँच:</b> पौधों को पानी देना, उर्वरकों का उपयोग करना आदि।</li>  
                <li className="relative before:content-['(III)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }} >फसल की सुरक्षा:</b> फसल को जानवरों से बचाने के लिए बाड़ लगाना।</li>
                <li className="relative before:content-['(IV)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }} >मौसम की भविष्यवाणी:</b> मौसम की भविष्यवाणी करें और उसके अनुसार फसल की देखभाल करें।</li>
                <li className="relative before:content-['(V)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }} >फसल की कटाई और भंडारण:</b> फसल को सही समय पर काटना और उसे सूखे और सुरक्षित स्थान पर भंडारण करना।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 24.  पादप संकरण क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              पादप संकरण एक ऐसी प्रक्रिया है जिसमें दो या दो से अधिक पौधों के बीच जेनेटिक सामग्री का आदान-प्रदान किया जाता है, जिससे एक नई पौधा प्रजाति का निर्माण होता है।
            </div>
          ),
        },
        {
          question: " 25.  सिंचाई किसे कहते है? इसकी आवश्यकता क्यों होती है?",
          answer: (
            <div>
           
               <p >    <b style={{ color: "green" }} className="text-xl">उत्तर: </b>
                सिंचाई एक ऐसी प्रक्रिया है जिसमें पौधों को पानी दिया जाता है ताकि वे स्वस्थ और उत्पादक बने रहें।</p>
              <p className="ml-12  "><b style={{ color: "blue" }}> सिंचाई की आवश्यकता निम्नलिखित कारणों से होती है:</b></p>
              <ul className="ml-16   list-none">
                <li className="relative before:content-['(I)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }}>पौधों की वृद्धि:</b> पौधों को पानी की आवश्यकता होती है ताकि वे स्वस्थ और उत्पादक बने रहें।</li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>मिट्टी की नमी:</b> मिट्टी में नमी की कमी होने पर पौधों को पानी देना आवश्यक होता है।</li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>मौसम की परिस्थितियाँ:</b> शुष्क मौसम में पौधों को पानी देना आवश्यक होता है ताकि वे सूखने से बचें।</li>
                <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>फसल की उत्पादकता:</b> सिंचाई से फसल की उत्पादकता में वृद्धि होती है और फसल की गुणवत्ता में सुधार होता है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 26.  जैविक खाद से क्या लाभ है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
               <b style={{color:"blue"}}> जैविक खाद के निम्नलिखित लाभ हैं:</b>
              <ul className="ml-16 list-none">
                <li className="relative before:content-['(I)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }}>मिट्टी की उर्वरता में वृद्धि:</b> जैविक खाद मिट्टी की उर्वरता में वृद्धि करती है, जिससे पौधों को आवश्यक पोषक तत्व मिलते हैं।</li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }}>पौधों की वृद्धि में वृद्धि:</b> जैविक खाद पौधों की वृद्धि में वृद्धि करती है, जिससे पौधे स्वस्थ और मजबूत होते हैं।</li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>मिट्टी की संरचना में सुधार:</b> जैविक खाद मिट्टी की संरचना में सुधार करती है, जिससे मिट्टी में पानी का अवशोषण और वायु का संचार बेहतर होता है।</li>
                <li className="relative before:content-['(IV)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>कीटों और रोगों का नियंत्रण:</b> जैविक खाद कीटों और रोगों का नियंत्रण करने में मदद करती है, जिससे पौधों को नुकसान नहीं पहुंचता है।</li>
                <li className="relative before:content-['(V)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }}>पर्यावरण के अनुकूल:</b> जैविक खाद पर्यावरण के अनुकूल होती है, जिससे मिट्टी, पानी और वायु प्रदूषण नहीं होता है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 27.  खेतों की बार-बार सिंचाई करने की आवश्यकता क्यों होती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{color: "blue"}}>
              खेतों की बार-बार सिंचाई करने की आवश्यकता निम्नलिखित कारणों से होती है:</b>
              <ul className="ml-16 list-none">
                <l className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"i><b style={{ color: "red" }}>मिट्टी की नमी की कमी:</b> मिट्टी में नमी की कमी होने पर पौधों को पानी की आवश्यकता होती है।</l>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>मौसम की परिस्थितियाँ:</b> शुष्क मौसम में पौधों को पानी की आवश्यकता होती है ताकि वे सूखने से बचें।</li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>पौधों की वृद्धि:</b> पौधों की वृद्धि के लिए पानी की आवश्यकता होती है।</li>
                <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>मिट्टी की उर्वरता:</b> मिट्टी की उर्वरता बनाए रखने के लिए पानी की आवश्यकता होती है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 28. फसलों की उपज में सुधार हेतु महत्वपूर्ण सुझाव दीजिए।",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{color: "blue"}}> फसलों की उपज में सुधार हेतु महत्वपूर्ण सुझाव निम्नलिखित हैं:</b>
              <ul className="ml-16 list-none">
                <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>उचित बीज चयन:</b> फसल की आवश्यकताओं के अनुसार उचित बीज का चयन करें।</li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>मिट्टी की जाँच:</b> मिट्टी की जाँच करें और आवश्यक पोषक तत्वों का उपयोग करें।</li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>सिंचाई प्रबंधन:</b> सिंचाई का सही तरीके से प्रबंधन करें ताकि पानी की बर्बादी न हो।</li>
                <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>उर्वरकों का उपयोग:</b> उर्वरकों का उपयोग करें लेकिन उनकी मात्रा का ध्यान रखें।</li>
                <li className="relative before:content-['(V)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>कीट और रोग नियंत्रण:</b> कीट और रोग का नियंत्रण करें ताकि फसल को नुकसान न हो।</li>
                <li className="relative before:content-['(VI)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>फसल चक्र:</b> फसल चक्र का पालन करें ताकि मिट्टी की उर्वरता बनी रहे।</li>
                <li className="relative before:content-['(VII)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>प्रौद्योगिकी का उपयोग:</b> प्रौद्योगिकी का उपयोग करें जैसे कि ड्रिप सिंचाई और प्रीसिजन फार्मिंग।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 29.  केंचुए को किसानों का मित्र कहा जाता है क्यों?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              केंचुए को किसानों का मित्र कहा जाता है क्योंकि वे मिट्टी की गुणवत्ता में सुधार करते हैं, जिससे पौधों को आवश्यक पोषक तत्व मिलते हैं और मिट्टी की उर्वरता बनी रहती है।
            </div>
          ),
        },
        {
          question: " 30.  जैविकनाशी किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              जैविकनाशी उन पदार्थों को कहते हैं जो जैविक रूप से कीटों, रोगों और अन्य हानिकारक जीवों को नष्ट करने में मदद करते हैं।
            </div>
          ),
        }

        // Add more questions here...
      ],
    },

    /// Chapter 2 


    {
      chapterName: "  सूक्ष्मजीव मित्र एवं शत्रु",
      imageUrl: "/image/8th-S-Chap-2.png", // 🖼️ Image for this chapter
      description: (
        <h1><b style={{color:"blue"}}> इस अध्याय में ह उर्वरक।</b></h1>
       
      ),
      questions: [
        {
          question: " 1. सूक्ष्मजीव किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              ऐसे जीव जिन्हें हम नंगी आँखों से नहीं देख सकते, जिन्हें सूक्ष्मदर्शी से देखा जा सकता है उन्हें सूक्ष्मजीव कहते हैं।
            </div>
          ),
        },
        {
          question: " 2. सूक्ष्मजीवों को कितने वर्गों में बाँटा गया है?",
          answer: (
            <div>
              <p ><b style={{ color: "green" }}>उत्तर: </b>

                <b style={{ color: "blue " }}>सूक्ष्मजीवों को मुख्य चार वर्गों में बाँटा गया है:</b ></p>
              <ul className="ml-16 list-none">
                <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red " }}>जीवाणु:</b> जीवाणु एक प्रकार के सूक्ष्मजीव होते हैं जो एककोशिकीय होते हैं।</li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red " }}>कवक:</b> कवक एक प्रकार के सूक्ष्मजीव होते हैं जो बहुकोशिकीय होते हैं।</li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red " }}>प्रोटोजोआ:</b> प्रोटोजोआ एक प्रकार के सूक्ष्मजीव होते हैं जो एककोशिकीय होते हैं।</li>
                <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red " }}>शैवाल:</b> शैवाल एक प्रकार के सूक्ष्मजीव होते हैं जो बहुकोशिकीय होते हैं।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "3.  दूध को दही में परिवर्तित करने वाले जीवाणु का नाम बताइये।",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>लैक्टोबैसिलस</b> जीवाणु दूध को दही में परिवर्तित करने में मदद करते हैं।
            </div>
          ),
        },
        {
          question: "4.  यीस्ट श्वसन के दौरान कौन-सी गैस उत्पन्न करते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              यीस्ट श्वसन के दौरान <b style={{ color: "blue" }}>कार्बन डाइऑक्साइड</b> गैस उत्पन्न करते हैं।
            </div>
          ),
        },
        {
          question: " 5. एंटीबायोटिक क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>एंटीबायोटिक</b> ऐसी औषधि होती है जो जीवाणुओं के वृद्धि को रोक देती है या उन्हें समूल नष्ट कर देती है।
            </div>
          ),
        },
        {
          question: "6.  पेनिसिलिन की खोज किसने और कब की?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              सन <b style={{ color: "blue" }}>1929</b> में <b style={{ color: "blue" }}>अलेक्जेंडर फ्लेमिंग</b> ने पेनिसिलिन की खोज की।
            </div>
          ),
        },
        {
          question: "7.  शिशु एवं बच्चों को टीका क्यों लगाया जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              शिशु एवं बच्चों के शरीर में प्रतिरक्षी उत्पन्न करके रोगकारक सूक्ष्मजीव को नष्ट करने के लिए टीका लगाया जाता है।<p className="ml-10 text-blue-600">  <b style={{color:"violet"}}> जैसे:—</b> हैजा , क्षय आदि बीमारियों को टीके द्वारा रोका जा सकता है।</p>
            </div>
          ),
        },
        {
          question: " 8. किण्वन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              किण्वन एक प्रक्रिया है जिसमें फलों के रसों से अल्कोहल या शराब बनाई जाती है इसमें यीस्ट प्राकृतिक शर्करा को निम्नीकरण कर अल्कोहल में परिवर्तित कर देते हैं।
            </div>
          ),
        },
        {
          question: "9.  उस प्रक्रिया का नाम बताइये जिसमें फलों के रसों से अल्कोहल या शराब बनाई जाती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>किण्वन</b> प्रक्रिया।
            </div>
          ),
        },
        {
          question: " 10. संचरणीय रोग किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              सूक्ष्मजीवों द्वारा फैलने वाला रोग को जो एक संक्रमित व्यक्ति में वायु, जल, भोजन या कायिक संपर्क द्वारा फैलते हैं, <b style={{ color: "blue" }}>संचरणीय रोग</b> कहलाते हैं।
            </div>
          ),
        },
        {
          question: " 11.  जैविक नाइट्रोजन स्थिरिकारक का नाम लिखे?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>राइजोबियम जीवाणु</b> एवं <b style={{ color: "blue" }}>नील हरित शैवाल</b>।
            </div>
          ),
        },
        {
          question: "12. वायुमंडल में कितना प्रतिशत नाइट्रोजन गैस है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>78%</b>
            </div>
          ),
        },
        {
          question: " 13. संचरणीय रोग का मुख्य कारक क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>घरेलू मक्खी</b>।
            </div>
          ),
        },
        {
          question: " 14. मलेरिया रोग का वाहक का नाम लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>मादा एनाफ्लिज मच्छर</b>।
            </div>
          ),
        },
        {
          question: "15.  ब्रेड या इडली के फूलने का क्या कारण है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>यीस्ट कोशिकाओं की वृद्धि</b>।
            </div>
          ),
        },
        {
          question: " 16.  डेंगू के वायरस का वाहक का नाम लिखिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>मादा एडिस मच्छर</b>।
            </div>
          ),
        },
        {
          question: "17.  टाइफाइड रोग के संचरण का तरीका लिखिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              इस रोग का संचरण <b style={{ color: "blue" }}>जल</b> के द्वारा होता है।
            </div>
          ),
        },
        {
          question: " 18.  हैजा रोग के संचरण का तरीका लिखिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              इस रोग का संचरण <b style={{ color: "blue" }}>जल या भोजन</b> के द्वारा होता है।
            </div>
          ),
        },
        {
          question: " 19.  मच्छर फैलाने से रोकने के तीन उपाई बताइए?",
          answer: (
            <div>

              <p><b style={{ color: "green" }}>उत्तर: </b>
                <b style={{ color: "blue" }}> मच्छर फैलाने से रोकने के तीन उपाई निम्न है:</b></p>
              <ul className="ml-12 list-none">
                <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>हमें पानी को कहीं भी रुका नहीं रहने देना चाहिए।</b></li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>इकट्ठा हुए पानी को मिट्टी का तेल या पेट्रोल का छिड़काव करना चाहिए।</b></li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>हमें आस–पास के जगहों को साफ रखना चाहिए।</b></li>
              </ul>
            </div>
          ),
        },
        {
          question: "20.  सूक्ष्मजीव हमारे मित्र हैं। कैसे?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                <b style={{ color: "blue" }}>  सूक्ष्मजीव हमारे मित्र हैं क्योंकि वे:  </b></p>
              <ul className="ml-16 list-none">
                <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>भोजन के उत्पादन में मदद करते हैं।</b></li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>मिट्टी की उर्वरता में सुधार करते हैं।</b></li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>रोग प्रतिरोधक क्षमता में सुधार करते हैं।</b></li>
                <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>कचरे के प्रबंधन में मदद करते हैं।</b></li>
                <li className="relative before:content-['(V)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>वैक्सीने और दवाओं के उत्पादन में मदद करते हैं।</b></li>
              </ul>
            </div>
          ),
        },
        {
          question: " 21.  यीस्ट और चीनी के साथ मैदे को गूँथ कर कुछ देर छोड़ देने के बाद मैदे का आयतन क्यों बढ़ जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              यीस्ट और चीनी के साथ मैदे को गूँथ कर कुछ देर छोड़ देने के बाद मैदे का आयतन बढ़ जाता है क्योंकि यीस्ट चीनी को <b style={{ color: "blue" }}>कार्बन डाइऑक्साइड</b> और <b style={{ color: "blue" }}>अल्कोहल</b> में परिवर्तित करता है, जिससे मैदे में गैस के बुलबुले बनते हैं और मैदे का आयतन बढ़ जाता है।
            </div>
          ),
        },
        {
          question: " 22.  नमक और चीनी किस प्रकार से खाद्य की रक्षा करते हैं ?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              नमक और चीनी खाद्य की रक्षा करने में मदद करते हैं क्योंकि वे दोनों ही पानी को सोखने की क्षमता रखते हैं। जब नमक या चीनी को खाद्य में मिलाया जाता है, तो वे पानी को सोख लेते हैं और खाद्य में मौजूद बैक्टीरिया और फंगस को बढ़ने से रोकते हैं। इससे खाद्य की गुणवत्ता बनी रहती है और वह खराब नहीं होता।
            </div>
          ),
        },
        {
          question: " 23.  वैक्सीन का क्या कार्य है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              वैक्सीन में रोग के कारक सूक्ष्मजीव को कमजोरी बनाकर सूक्ष्म मात्रा में शरीर में डाला जाता है फिर सूक्ष्मजीव इतना कमजोर हो जाता है कि रोग उत्पन्न नहीं कर सकता है।
            </div>
          ),
        },
        {
          question: " 24. रोगवाहक किसे कहा जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              सूक्ष्मजीव जनित रोग कुछ कीटों एवं जन्तुओं के माध्यम से फैलते हैं। वास्तव में ये कीट या जन्तु रोग उत्पन्न करनेवाले सूक्ष्मजीवों के वाहक का कार्य करते हैं। इन्हें <b style={{ color: "blue" }}>रोगवाहक</b> कहते हैं।
            </div>
          ),
        },
        {
          question: " 25.  नाइट्रोजन स्थिरीकरण की उपयोगिता बताएँ?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              नाइट्रोजन स्थिरीकरण से वायुमंडल में नाइट्रोजन के पुनः पूर्ति की प्रक्रिया चलती रहती है और नाइट्रोजन की मात्रा स्थिर रहती है।
            </div>
          ),
        },
        {
          question: "26.  वायुमंडल में सर्वाधिक मात्रा में कौन-सी गैस पायी जाती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              वायुमंडल में सर्वाधिक मात्रा में <b style={{ color: "blue" }}>नाइट्रोजन गैस</b> पाया जाता है।
            </div>
          ),
        },
        {
          question: " 27. खाद्य परिरक्षण किस प्रकार किया जा सकता है?",
          answer: (
            <div>

              <p><b style={{ color: "green" }}>उत्तर: </b>
                <b style={{ color: "blue" }}>  खाद्य परिरक्षण निम्न प्रकार से किया जाता है:</b></p>
              <ul className="ml-16 list-none">
                <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>निर्जलीकरण</b></li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>रासायनिक तरीका</b></li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>नमक और चीनी द्वारा परिरक्षण</b></li>
                <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>तेल एवं सिरके द्वारा परिरक्षण</b></li>
                <li className="relative before:content-['(V)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>गर्म एवं ठंडा करके</b></li>
                <li className="relative before:content-['(VI)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>पॉश्चुरीकरण</b></li>
                <li className="relative before:content-['(VII)'] before:absolute before:-left-11 before:text-red-500 font-bold"><b style={{ color: "red" }}>भंडारण एवं पैकिंग</b></li>
              </ul>
            </div>
          ),
        },
        {
          question: " 28. सूक्ष्मजीवों द्वारा होनेवाली हानियों का विवरण दीजिए?",
          answer: (
            <div>
              <p> <b style={{ color: "green" }}>उत्तर: </b>
                <b style={{ color: "blue" }}> सूक्ष्मजीवों द्वारा होनेवाली हानियाँ:</b></p>
              <ul className="ml-16 list-none">
                <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>रोग पैदा करना:</b> सूक्ष्मजीव जैसे कि बैक्टीरिया, वायरस और फंगस कई प्रकार के रोग पैदा कर सकते हैं।</li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>खाद्य का खराब होना:</b> सूक्ष्मजीव जैसे कि बैक्टीरिया और फंगस खाद्य को खराब कर सकते हैं।</li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>पेयजल का प्रदूषण:</b> सूक्ष्मजीव जैसे कि बैक्टीरिया और वायरस पेयजल को प्रदूषित कर सकते हैं।</li>
                <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>कृषि उत्पादों का नुकसान:</b> सूक्ष्मजीव जैसे कि फंगस और बैक्टीरिया कृषि उत्पादों को नुकसान पहुँचा सकते हैं।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 29. रोगकारक सूक्ष्मजीव हमारे शरीर में किस प्रकार प्रवेश करते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              रोगकारक सूक्ष्मजीव हमारे शरीर में निम्नलिखित तरीकों से प्रवेश कर सकते हैं:
              <ul className="ml-16 list-none">
                <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>वायुमार्ग:</b> जब हम संक्रमित व्यक्ति के साथ सांस लेते हैं या संक्रमित व्यक्ति के द्वारा छोड़े गए ड्रॉपलेट्स के संपर्क में आते हैं।</li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>जलमार्ग:</b> जब हम संक्रमित जल पीते हैं या संक्रमित जल में नहाते हैं।</li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>आहार:</b> जब हम संक्रमित भोजन खाते हैं या संक्रमित पेय पदार्थों का सेवन करते हैं।</li>
                <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>त्वचा:</b> जब हम संक्रमित व्यक्ति के संपर्क में आते हैं या संक्रमित वस्तुओं को छूते हैं।</li>
                <li className="relative before:content-['(V)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>कीट और जानवर:</b> जब कीट और जानवर संक्रमित होते हैं और हमारे संपर्क में आते हैं।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "30.  फफूँद जीवाणु पर किस प्रकार प्रभाव डालती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>फफूँद</b> जीवाणुओं की वृद्धि को रोक देते हैं।
            </div>
          ),
        }

      ]
    },
    /////Chapter 3  संश्लेषित रेशे और प्लास्टिक
    {
      chapterName: " संश्‍लेषित रेशे और प्लास्टिक",
      imageUrl: "/image/8th-S-Chap-3.png", // 🖼️ Image for this chapter
      description: (
        <h1><b style={{color:"blue"}}> इस अध्याय में ह उर्वरक।</b></h1>
       
      ),
      questions: [
        {
          question: " 1. कपड़े कितने प्रकार के प्राप्त रेशों से बनता है?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                <b className="text-lg text-blue-600">  कपड़े दो प्रकार के रेशों से बनता है: </b></p>
              <ul className="list-none ml-12">
                <li><b style={{ color: "red" }}>(i) प्राकृतिक रेशे</b></li>
                <li><b style={{ color: "red" }}>(ii) कृत्रिम रेशे</b></li>
              </ul>
            </div>
          ),
        },
        {
          question: "3. कुछ प्राकृतिक रेशों एवं उनके स्रोतों के नाम लिखिए।",
          answer: (
            <div>
              <p>रेशों और उनके स्रोतों के नाम निम्नलिखित हैं:</p>
              <table className="table-auto border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">रेशे</th>
                    <th className="border border-gray-300 px-4 py-2">स्त्रोत</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">कपास</td>
                    <td className="border border-gray-300 px-4 py-2">पौधों से</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">ऊन</td>
                    <td className="border border-gray-300 px-4 py-2">जंतुओं से</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">रेशम</td>
                    <td className="border border-gray-300 px-4 py-2">जंतुओं से</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          question: " 4. संश्लेषित रेशे किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              ऐसे रेशे जो मनुष्य स्वयं तैयार करता है <b style={{ color: "blue" }}>संश्लेषित रेशे</b> कहलाते हैं।
            </div>
          ),
        },
        {
          question: "5.  उसे संश्लेषित रेशे के नाम बताइए जिसका तार इस्पात के तार से भी मजबूत होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>नायलॉन</b>।
            </div>
          ),
        },
        {
          question: "6.  संश्लेषित रेशों के एक हानिकारक गुण लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              संश्लेषित रेशों से बने वस्त्र में यदि आग लग जाए तो कपड़ा और पहनने वाला व्यक्ति के शरीर से चिपक जाता है।
            </div>
          ),
        },
        {
          question: "7.  पेट क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              एक बहुत सुपरिचित प्रकार का पॉलिएस्टर है, जिसका उपयोग बोतले, बर्तन, फिल्म, तार और अन्य उपयोगी उत्पादों के निर्माण के लिए किया जाता है।
            </div>
          ),
        },
        {
          question: "8.  ऐक्रिलिक क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              ऐसे ऊन जो प्राकृतिक स्रोतों से न प्राप्त कर संश्लेषित किए जाते हैं, उन्हें <b style={{ color: "blue" }}>ऐक्रिलिक</b> कहते हैं। इनसे ऊनी वस्त्र बनाए जाते हैं।
            </div>
          ),
        },
        {
          question: "9.  संश्लेषित रेशों के गुण लिखिए।",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{color:"blue"}}>
              संश्लेषित रेशों के गुण निम्नलिखित हैं:</b>
              </p>
              <ul className="ml-16">
                <li><b>यह शीघ्र सूखते हैं।</b></li>
                <li><b>अधिक चलाऊ कम महंगे और आसानी से उपलब्ध होते हैं।</b></li>
                <li><b>यह रख रखाव में सुविधाजनक होते हैं।</b></li>
              </ul>
            </div>
          ),
        },
        {
          question: "10.  प्लास्टिक कितने प्रकार के होते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{color:"blue"}}>
              प्लास्टिक दो प्रकार के होते हैं:
              </b>
              <ul className="ml-14">
                <li><b>(i) थर्मोप्लास्टिक</b></li>
                <li><b>(ii) थर्मोसेटिंग प्लास्टिक</b></li>
              </ul>
            </div>
          ),
        },
        {
          question: "11.  सबसे अधिक ऊष्मा सहने की क्षमता वाले प्लास्टिक का नाम लिखिए।",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>मेलामाइन</b>।
            </div>
          ),
        },
        {
          question: "12.  थर्मोप्लास्टिक और थर्मोसेटिंग प्लास्टिक में क्या अंतर है?",
          answer: (
            <div>
              <p>              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{color:"blue"}}>
              थर्मोप्लास्टिक और थर्मोसेटिंग प्लास्टिक में निम्नलिखित अंतर हैं:
              </b>
              </p>
              <ul className="ml-14">
                <li><b style={{ color: "red" }}>(i) थर्मोप्लास्टिक:</b> यह गर्म करने पर विकृत हो जाते हैं। ये सरलता पूर्वक मुड़ जाते हैं। इनका उपयोग खिलौने और बर्तनों के बनाने में किया जाता है।</li>
                <li><b style={{ color: "red" }}>(ii) थर्मोसेटिंग प्लास्टिक:</b> यह गर्म करने पर विकृत नहीं होते हैं। यह मुड़ते नहीं हैं। इनसे बर्तनों के हत्थे जैसा गर्मी सहने वाला सामान बनाए जाते हैं।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 13. आग बुझाने वाले कर्मचारियों के परिधानों पर किस पदार्थ की परत चढ़ी होती है और क्यों?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>मेलामाइन</b> की, क्योंकि ये आग का प्रतिरोधक है।
            </div>
          ),
        },
        {
          question: "14.  रेशा का नाम बताइए जो :",
          answer: (
            <div>
              <ul>
                <li><b>(i) जलने पर कागज का गंध देता हो।</b></li>
                <b style={{ color: "green" }}>उत्तर: </b>
                <b style={{ color: "blue" }}>सूती वस्त्र</b>।

                <li> <b>(ii) जलने पर जलते हुए बाल का गंध देता हो। </b></li>
                <b style={{ color: "green" }}>उत्तर: </b>
                <b style={{ color: "blue" }}>रेशम</b>।
                <li><b>(iii) जलने पर उबलती हुई फली का गंध देता हो।</b></li>
                <b style={{ color: "green" }}>उत्तर: </b>
                <b style={{ color: "blue" }}>नायलॉन</b>।
              </ul>
            </div>

          ),
        },
        {
          question: "15.  ऊन की पहचान क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              यह धीरे-धीरे जलती है। जलते समय इसमें से पंखों के जलने के समान गंध निकलती है। जलने के उपरांत काले रंग के गुब्बारे जैसा अवशिष्ट पदार्थ रह जाता है।
            </div>
          ),
        },
        {
          question: " 16. टेरीलीन क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>टेरीलीन</b> एक लोकप्रिय पॉलिएस्टर है।
            </div>
          ),
        },

        {
          question: "17.  सूती कपड़ों को नमीयुक्त जगहों पर रखने से क्या प्रभाव पड़ता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              नमीयुक्त जगहों पर रखने से <b style={{ color: "blue" }}>फफूँद</b> लग जाती है।
            </div>
          ),
        },
        {
          question: "18.  नायलॉन का निर्माण किन चीजों से होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: "blue" }}>कोयला, जल और वायु</b> से यह बनता है। यह रेशा मजबूत, लचीला और हल्का होता है।
            </div>
          ),
        },
        {
          question: " 19. कृत्रिम रेशा किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              आज के युग में नवीन रासायनिक रेशों का आविष्कार किया गया है, जिसे <b style={{ color: "blue" }}>कृत्रिम या मानव निर्मित रेशा</b> कहते हैं।
            </div>
          ),
        },
        {
          question: " 20.  रेशम की पहचान किस प्रकार होती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              रेशम हवा में जल्दी जल जाती है और जलते समय उसमें से पंखों या बालों के जलने के समान गंध निकलती है। जले हुए किनारों पर चिपचिपे दाने पड़ जाते हैं।
            </div>
          ),
        },
        {
          question: "21.  संश्लेषित रेशों के उदाहरण क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              संश्लेषित रेशों के उदाहरण <b style={{ color: "blue" }}>नायलॉन, पॉलिएस्टर, और एक्रिलिक</b> हैं।
            </div>
          ),
        },
        {
          question: " 22.  प्लास्टिक के उपयोग क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              प्लास्टिक के उपयोग विभिन्न हैं, जैसे कि <b style={{ color: "blue" }}>पैकेजिंग, फर्नीचर, ऑटोमोबाइल, और चिकित्सा उपकरणों</b> में।
            </div>
          ),
        },
        {
          question: " 23. संश्लेषित रेशों और प्लास्टिक के नुकसान क्या हैं?",
          answer: (
            <div>
              <p> <b style={{ color: "green" }}>उत्तर: </b>
                <b className="text-lg text-blue-600">  संश्लेषित रेशों और प्लास्टिक के नुकसान हैं: </b></p>
              <ul className="ml-16 list-none">
                <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>पर्यावरण प्रदूषण</b></li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>जानवरों के लिए हानिकारक</b></li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>गैर-बायोडिग्रेडेबल होना</b></li>
              </ul>
            </div>
          ),
        },
        {
          question: "24.  रेशम किस प्रकार प्राप्त किया जाता है?",
          answer: (
            <div>
              <p>  <b style={{ color: "green" }}>उत्तर: </b>
                <b className="text-lg text-blue-600">  रेशम प्राप्त करने की प्रक्रिया निम्नलिखित है: </b></p>
              <ul className="ml-16 list-none">
                <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>रेशमकीट का पालन:</b> रेशमकीट के अंडों को उबालकर निकाला जाता है और उन्हें एक विशेष कमरे में रखा जाता है जहां वे 3-4 दिनों में बच्चे में बदल जाते हैं।</li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>कोकून का निर्माण:</b> रेशमकीट के बच्चे पत्तियों को खाकर बड़े होते हैं और लगभग 30 दिनों में वे कोकून बनाने लगते हैं।</li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>कोकून का संग्रह:</b> जब रेशमकीट कोकून बना लेता है, तो उसे सावधानी से इकट्ठा किया जाता है।</li>
                <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>कोकून का उबालना:</b> इकट्ठे किए गए कोकून को उबालकर रेशमकीट को मार दिया जाता है।</li>
                <li className="relative before:content-['(V)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>रेशम का निकालना:</b> उबले हुए कोकून से रेशम को निकाला जाता है। यह प्रक्रिया हाथ से या मशीन की मदद से की जा सकती है।</li>
                <li className="relative before:content-['(VI)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>रेशम का साफ़ करना:</b> निकाले गए रेशम को साफ़ किया जाता है और उसे सुखाया जाता है।</li>
                <li className="relative before:content-['(VII)'] before:absolute before:-left-11 before:text-red-500 font-bold"><b style={{ color: "red" }}>रेशम का बुनना:</b> साफ़ और सूखे रेशम को बुनकर कपड़ा बनाया जाता है।</li>
              </ul>
            </div>
          ),
        }



      ]
    },
    /// chapter 4
    {
      chapterName: " पदार्थ धातु और अधातु",
      questions: [
        {
          question: "1. पदार्थ किसे कहते हैं?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                वह वस्तु जो स्थान घिरे और उसमें कुछ न कुछ द्रव्यमान (वजन) हो वह वस्तु पदार्थ कहलाता है।
              </p>
            </div>
          ),
        },
        {
          question: "2. पदार्थ कितनी अवस्थाओं में पाया जाता है?",
          answer: (
            <div>
              <p> <b style={{ color: "green" }}>उत्तर: </b>
                <b className="text-lg text-blue-600"> पदार्थ तीन अवस्थाओं में पाया जाता है:</b></p>
              <ul className="list-none ml-16 text-gray-800">
                <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'red' }}>ठोस</b> </li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'red' }}>द्रव्य</b> </li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: 'red' }}>गैस</b> </li>
              </ul>
              <ul className="ml-8">
                <li><b style={{ color: 'blue' }}>ठोस: </b>पदार्थ की वह अवस्थाएँ जिनका आकार एवं आयतन दोनों निश्‍चित हो। <br />
                  <b><b style={{color:"violet"}}> जैसे:—</b></b> पत्थर, फुटबॉल इत्यादि।</li>
                <li><b style={{ color: 'blue' }}>द्रव्य: </b> पदार्थ की वह अवस्थाएँ जिनका आकार अनिश्‍चित एवं आयतन निश्‍चित हो। <br />
                  <b><b style={{color:"violet"}}> जैसे:—</b></b> पानी, डीजल, पेट्रोल इत्यादि।</li>
                <li><b style={{ color: 'blue' }}>गैस: </b> पदार्थ की वह अवस्थाएँ जिनका आकार एवं आयतन दोनों अनिश्‍चित हो। <br />
                  <b><b style={{color:"violet"}}> जैसे:—</b></b> कार्बन डाई ऑक्साइड, नाइट्रोजन गैस।</li>
              </ul>

              {/* <b style={{ color: 'blue' }}>ठोस: </b> पदार्थ की वह अवस्थाएँ जिनका आकार एवं आयतन दोनों निश्‍चित हो। <br />
                  <b>जैसे:</b> पत्थर, फुटबॉल इत्यादि।
                  <br />
            
                  <b style={{ color: 'blue' }}>द्रव्य: </b> पदार्थ की वह अवस्थाएँ जिनका आकार अनिश्‍चित एवं आयतन निश्‍चित हो। <br />
                  <b>जैसे:</b> पानी, डीजल, पेट्रोल इत्यादि।
                  <br />
            
                  <b style={{ color: 'blue' }}>गैस: </b> पदार्थ की वह अवस्थाएँ जिनका आकार एवं आयतन दोनों अनिश्‍चित हो। <br />
                  <b>जैसे:</b> कार्बन डाई ऑक्साइड, नाइट्रोजन गैस। */}
            </div>
          ),
        },
        {
          question: "3. धातु किसे कहते हैं?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                वे पदार्थ जिसमें विशेष प्रकार की चमक हो और इलेक्ट्रॉन
                त्याग कर धन आयन बनाते हैं, एवं धातुओं को पीट-पीटकर चौड़ा किया जा सकता
                है। <br />
                <p className="ml-12">
                <b style={{color:"violet"}}> जैसे:—</b> सोना, चांदी, सोडियम।
                </p>
              </p>
            </div>
          ),
        },
        {
          question: "4. अधातु किसे कहते हैं?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                वे पदार्थ जिसमें विशेष प्रकार की चमक नहीं होती है तथा
                अधातु को पीटने पर भंगुर हो जाते हैं। <br />
                <p className="ml-12">
                <b style={{color:"violet"}}> जैसे:—</b> ऑक्सीजन, सल्फर, क्लोरीन, ब्रोमीन इत्यादि।
                </p>
              </p>
            </div>
          ),
        },
        {
          question: "5. अक्रिय धातु किसे कहते हैं?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                कुछ धातुएँ प्रकृति में स्वतंत्र अवस्था में पाई जाती हैं
                जिन्हें अक्रिय धातु कहते हैं। <br />
                <p className="ml-12">
                <b style={{color:"violet"}} > जैसे:—</b> सोना, चाँदी और प्लेटिनियम।
                </p>
              </p>
            </div>
          ),
        },


        //   <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
        //   <thead>
        //     <tr className="bg-indigo-100">
        //       <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center"><b > खाद </b></th>
        //       <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center "> <b>उर्वरक </b></th>
        //     </tr>
        //   </thead>
        //   <tbody className="bg-white">
        //     <tr className="hover:bg-gray-50">
        //       <td className="border border-gray-400 px-4  py-4 ">(I) यह एक जैविक पदार्थ है।</td>
        //       <td className="border border-gray-400 px-4 py-4">(I) यह एक रासायनिक पदार्थ है।</td>
        //     </tr>
        //     <tr className="hover:bg-gray-50">
        //       <td className="border border-gray-400 px-4  py-4">(II) इसमें सभी प्रकार के पोषक तत्व पाये जाते हैं।</td>
        //       <td className="border border-gray-400 px-4  py-4">(II) इसमें विशेष प्रकार के पोषक तत्व पाये जाते हैं।</td>
        //     </tr>
        //     <tr className="hover:bg-gray-50">
        //       <td className="border border-gray-400 px-4  py-4">(III)  यह अपशिष्टों को मिट्टी में दबाकर बनाया जाता है।</td>
        //       <td className="border border-gray-400 px-4  py-4">(III) यह फैक्ट्रियों में बनाया जाता है। </td>
        //     </tr>
        //   </tbody>
        // </table>

        {
          question: "6. धातु और अधातु में क्या अंतर है?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
              <b className="text-lg text-blue-600">   धातु और अधातु में निम्न अंतर है: </b>
              </p>
              <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
                <thead >
                  <tr className="bg-indigo-100">
                    <th className="border border-gray-400 px-6 py-3 text-sky-500 font-lg text-center">धातु:</th>
                    <th className="border border-gray-400 px-6 py-3 text-sky-500 font-lg text-center">अधातु:</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4 ">(I)धातुएँ विद्युत की अच्छी सुचालक होती हैं।</td>
                    <td className="border border-gray-400 px-4  py-4 ">(I)अधातुएँ विद्युत की कुचालक होती हैं।</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4 ">(II)धातुओं में विशेष प्रकार की चमक होती है।</td>
                    <td className="border border-gray-400 px-4  py-4 ">(II)अधातुओं में विशेष प्रकार की चमक नहीं होती है।</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4 ">(III)धातुओं को पीट कर पतली चादरें बनाई जा सकती हैं।</td>
                    <td className="border border-gray-400 px-4  py-4 ">(III)अधातुओं को पीटने पर भंगुर हो जाती हैं।</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4 ">(IV)धातुएँ इलेक्ट्रॉन त्याग कर धनायन बनाती हैं।</td>
                    <td className="border border-gray-400 px-4  py-4 ">(IV)अधातुएँ इलेक्ट्रॉन ग्रहण करके ऋणायन बनाती हैं।</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4 ">(V)धातुओं के ऑक्साइड क्षारीय होते हैं।</td>
                    <td className="border border-gray-400 px-4  py-4 ">(V)अधातुओं के ऑक्साइड अम्लीय होते हैं।</td>
                  </tr> 
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4 "> <b className="text-sm"><b style={{color:"violet"}}> उदाहरण:</b>  लोहा, तांबा, एल्युमिनियम, सोना, चांदी। </b></td>
                    <td className="border border-gray-400 px-4  py-4 "> <b className="text-sm"><b style={{color:"violet"}}> उदाहरण:</b> कार्बन, सल्फर, ऑक्सीजन, नाइट्रोजन। </b></td>
                  </tr>
                </tbody>
              </table>

              {/* <ul className="list-disc ml-6 text-gray-800">
                <li>
                  <b>धातु:</b>
                  <ul className="list-disc ml-6">
                    <li>धातुएँ विद्युत की अच्छी सुचालक होती हैं।</li>
                    <li>धातुओं में विशेष प्रकार की चमक होती है।</li>
                    <li>धातुओं को पीट कर पतली चादरें बनाई जा सकती हैं।</li>
                    <li>धातुएँ इलेक्ट्रॉन त्याग कर धनायन बनाती हैं।</li>
                    <li>धातुओं के ऑक्साइड क्षारीय होते हैं।</li>
                    <li>
                      <i>उदाहरण:</i> लोहा, तांबा, एल्युमिनियम, सोना, चांदी।
                    </li>
                  </ul>
                </li>
                <li>
                  <b>अधातु:</b>
                  <ul className="list-disc ml-6">
                    <li>अधातुएँ विद्युत की कुचालक होती हैं।</li>
                    <li>अधातुओं में विशेष प्रकार की चमक नहीं होती है।</li>
                    <li>अधातुओं को पीटने पर भंगुर हो जाती हैं।</li>
                    <li>अधातुएँ इलेक्ट्रॉन ग्रहण करके ऋणायन बनाती हैं।</li>
                    <li>अधातुओं के ऑक्साइड अम्लीय होते हैं।</li>
                    <li>
                      <i>उदाहरण:</i> कार्बन, सल्फर, ऑक्सीजन, नाइट्रोजन।
                    </li>
                  </ul>
                </li>
              </ul> */}
            </div>
          ),
        },
        {
          question: " 7. आघातवर्ध्यता किसे कहते हैं?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                जिन धातुओं को पीटकर चादर बनाई जाती है, उसे धातुओं के
                गुण को आघातवर्ध्यता कहते हैं।
              </p>
              <p>आघातवर्ध्यता के कुछ मुख्य लक्षण हैं:</p>
              <ul className="list-disc ml-10 text-gray-800">
                <li>पीटने पर आकार बदलना: आघातवर्ध्य धातुएँ टूटती नहीं हैं।</li>
                <li>दबाने पर आकार बदलना: आघातवर्ध्य धातुएँ दबाने पर भी आकार बदलती हैं।</li>
                <li>टूटने की प्रतिरोधकता रखती हैं।</li>
              </ul>
              <p className="text-lg text-blue-600 ml-6">आघातवर्ध्यता के उदाहरण: सोना, चाँदी, ताँबा</p>
              {/* <ul className="list-disc ml-6 text-gray-800">
                <li>सोना</li>
                <li>चाँदी</li>
                <li>ताँबा</li>
              </ul> */}
            </div>
          ),
        },
        {
          question: "8. कॉपर जिंक को उसके लवण के विलयन से विस्थापित नहीं कर सकता है?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                कॉपर जिंक को उसके लवण के विलयन से विस्थापित नहीं कर सकता
                है, क्योंकि जिंक कॉपर से अधिक अभिक्रियाशील है।
              </p>
            </div>
          ),
        },
        {
          question: "9. तन्यता किसे कहते हैं?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                जिन धातुओं को खींच कर लंबी तार बनाई जा सकती है धातुओं
                के इस गुण को तन्यता कहते हैं।
              </p>
            </div>
          ),
        },
        {
          question: "10. कॉपर में जंग लगता है तो उसका रंग कैसा होता है?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                <span className="text-blue-500"> हरा (blue)</span>
              </p>
            </div>
          ),
        },

        {
          question: "11. अपरूप किसे कहते हैं? कार्बन के दो अपरूपों के नाम लिखें?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                एक ही तत्व के अलग-अलग रूपों को अपरूप कहते हैं। <br />
                <b className="ml-8 text-blue-600">कार्बन के दो अपरूप:</b>
              </p>
              <ul className="list-none ml-10 text-gray-800 ">
                <li>(i) हीरा</li>
                <li>(ii) ग्रेफाइट</li>
              </ul>
            </div>
          ),
        },
        {
          question: "12. मिश्र धातु किसे कहते हैं?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                धातुओं और अधातुओं के मिश्रण से बने पदार्थ मिश्र धातु
                कहलाते हैं।
              </p>
              <p className="ml-12"><b style={{color:"violet"}}> उदाहरण:</b></p>
              <ul className="list-disc ml-12 text-gray-800">
                <li><b>इस्पात:</b> लोहे में कार्बन मिलाकर बनाया जाता है।</li>
                <li><b>पीतल:</b> तांबे में जस्ता मिलाकर बनाया जाता है।</li>
                <li><b>कांसा:</b> तांबे में टिन मिलाकर बनाया जाता है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "13. धात्विक ऑक्साइड की प्रकृति कैसी होती है?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                धात्विक ऑक्साइड की प्रकृति क्षारीय होती है।
              </p>
            </div>
          ),
        },
        {
          question: "14. अधात्विक ऑक्साइड की प्रकृति कैसी होती है?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                अधात्विक ऑक्साइड की प्रकृति अम्लीय होती है।
              </p>
            </div>
          ),
        },
        {
          question: " 15. धातु अम्ल से अभिक्रिया करके कौन सा गैस उत्पन्न करते हैं?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                हाइड्रोजन गैस।
              </p>
            </div>
          ),
        },
        {
          question: "16. पॉप ध्वनि के साथ जलने वाले गैस का नाम लिखिए?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                हाइड्रोजन गैस।
              </p>
            </div>
          ),
        },
        {
          question: "17. एक ऐसे धातु के नाम लिखें जो कमरे के ताप पर द्रव्य अवस्था में पाया जाता है?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                पारा।
              </p>
            </div>
          ),
        },
        {
          question: "18.  दो ऐसे धातु का नाम बताइए जिसे चाकू से काटा जा सकता है?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                सोडियम और पोटैशियम।
              </p>
            </div>
          ),
        },
        {
          question: "19.  मैग्नीशियम रिबन को वायु में जलने पर क्या होता है?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                मैग्नीशियम ऑक्साइड बनता है।
              </p>
            </div>
          ),
        },
        {
          question: "20. पॉप ध्वनि किसे कहते हैं?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                हाइड्रोजन गैस को जलाने पर जो ध्वनि निकलती है उसे पॉप
                ध्वनि कहते हैं।
              </p>
            </div>
          ),
        },
        // {
        //   question: " विस्थापन अभिक्रिया किसे कहते हैं?",
        //   answer: (
        //     <div>
        //       <p>
        //         <b style={{ color: "green" }}>उत्तर: </b>
        //  ऐसी अभिक्रिया जिसमें अधिक क्रियाशील धातु कम क्रियाशील
        //         धातु को उसके यौगिक से बाहर कर देता है, ऐसी अभिक्रिया को विस्थापन
        //         अभिक्रिया कहते हैं।
        //       </p>
        //       <p>
        //         <b>उदाहरण:</b>
        //       </p>
        //       <p>
        //         मान लीजिए हमारे पास एक लोहे की कील है जिसे हम कॉपर सल्फेट के घोल में
        //         डालते हैं। कुछ समय बाद हम देखेंगे कि लोहे की कील पर तांबे की एक परत
        //         जम गई है और घोल का रंग हरा हो गया है।
        //       </p>
        //       <p>
        //         इस अभिक्रिया को हम निम्न रासायनिक समीकरण से दर्शा सकते हैं:
        //       </p>
        //       <p className="font-mono mt-2">
        //         Fe (s) + CuSO₄ (aq) → FeSO₄ (aq) + Cu (s)
        //       </p>
        //       <ul className="list-disc ml-6 text-gray-800">
        //         <li>Fe (s): लोहा (ठोस अवस्था में)</li>
        //         <li>CuSO₄ (aq): कॉपर सल्फेट (जलीय घोल में)</li>
        //         <li>FeSO₄ (aq): आयरन सल्फेट (जलीय घोल में)</li>
        //         <li>Cu (s): तांबा (ठोस अवस्था में)</li>
        //       </ul>
        //       <p>
        //         <b>इस अभिक्रिया में क्या हुआ:</b>
        //       </p>
        //       <ul className="list-disc ml-6 text-gray-800">
        //         <li>लोहा (Fe) कॉपर (Cu) से अधिक क्रियाशील है।</li>
        //         <li>
        //           लोहे ने कॉपर सल्फेट (CuSO₄) में मौजूद कॉपर को विस्थापित कर दिया और
        //           स्वयं सल्फेट आयनों (SO₄²⁻) के साथ संयुक्त होकर आयरन सल्फेट (FeSO₄)
        //           बनाया।
        //         </li>
        //         <li>विस्थापित हुआ तांबा (Cu) लोहे की कील पर जम गया।</li>
        //       </ul>
        //     </div>
        //   ),
        // },
        {
          question: "21.  विस्थापन अभिक्रिया किसे कहते हैं?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                ऐसी अभिक्रिया जिसमें अधिक क्रियाशील धातु कम क्रियाशील
                धातु को उसके यौगिक से बाहर कर देता है, ऐसी अभिक्रिया को <b style={{ color: 'blue' }}>विस्थापन अभिक्रिया</b>
                कहते हैं।
              </p>
              <p>
              <b style={{color:"violet"}} className="ml-12"> उदाहरण:</b>
              </p>
              <p className="ml-12">
                मान लीजिए हमारे पास एक लोहे की कील है जिसे हम कॉपर सल्फेट के घोल में
                डालते हैं। कुछ समय बाद हम देखेंगे कि लोहे की कील पर तांबे की एक परत
                जम गई है और घोल का रंग हरा हो गया है।
              </p>
              <p className="ml-12">
                <b style={{ color: 'blue' }}>इस अभिक्रिया को हम निम्न रासायनिक समीकरण से दर्शा सकते हैं:</b>
              </p>
              <p className="font-mono mt-2 ml-12" style={{ color: 'brown' }}>
                Fe (s) + CuSO₄ (aq) → FeSO₄ (aq) + Cu (s)
              </p>
              <ul className="list-disc ml-16 text-gray-800">
                <li><b style={{ color: 'red' }}>Fe (s):</b> लोहा (ठोस अवस्था में)</li>
                <li><b style={{ color: 'red' }}>CuSO₄ (aq):</b> कॉपर सल्फेट (जलीय घोल में)</li>
                <li><b style={{ color: 'red' }}>FeSO₄ (aq):</b> आयरन सल्फेट (जलीय घोल में)</li>
                <li><b style={{ color: 'red' }}>Cu (s):</b> तांबा (ठोस अवस्था में)</li>
              </ul>
              <p className="ml-12">
                <b style={{ color: 'blue' }}>इस अभिक्रिया में क्या हुआ:</b>
              </p>
              <ul className="list-disc ml-16 text-gray-800">
                <li><b style={{ color: 'orange' }}>लोहा (Fe)</b> कॉपर (Cu) से अधिक क्रियाशील है।</li>
                <li>
                  <b style={{ color: 'orange' }}>लोहे</b> ने <b style={{ color: 'orange' }}>कॉपर सल्फेट (CuSO₄)</b> में मौजूद कॉपर को विस्थापित
                  कर दिया और स्वयं सल्फेट आयनों (SO₄²⁻) के साथ संयुक्त होकर आयरन
                  सल्फेट (FeSO₄) बनाया।
                </li>
                <li><b style={{ color: 'orange' }}>विस्थापित हुआ तांबा (Cu)</b> लोहे की कील पर जम गया।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "22.  सोडियम और पोटेशियम को खुला वायु में छोड़ने पर क्या होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              सोडियम और पोटेशियम को खुला वायु में छोड़ने पर <b style={{ color: 'red' }}>आग पकड़ लेता है</b>।
            </div>
          ),
        },

        {
          question: "23. आभूषण बनाने में कितने कैरेट सोने का उपयोग किया जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              आभूषण बनाने में <b style={{ color: 'blue' }}>24 कैरेट सोने</b> का उपयोग किया जाता है।
            </div>
          ),
        },

        {
          question: "24. सबसे सरल हाइड्रोकार्बन का नाम लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              सबसे सरल हाइड्रोकार्बन <b style={{ color: 'blue' }}>मीथेन (CH₄)</b> है।
            </div>
          ),
        },

        {
          question: "25.  हाइड्रोकार्बन क्या है? किन्ही तीन हाइड्रोकार्बन का नाम लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              हाइड्रोजन तथा कार्बन से बने यौगिक को <b style={{ color: 'purple' }}>हाइड्रोकार्बन</b> कहते हैं।
              <br />
              <b className="text-blue-600 ml-10">तीन हाइड्रोकार्बन का नाम निम्न है:</b>
              <ul className="list-none ml-10 text-gray-800">
                <li ><b style={{ color: 'orange' }}>(i) मीथेन</b></li>
                <li ><b style={{ color: 'orange' }}>(ii) एथेन</b></li>
                <li ><b style={{ color: 'orange' }}>(iii) प्रोपेन</b></li>
              </ul>
            </div>
          ),
        },

        {
          question: "26.  सोल्डर क्या है? और कहाँ उपयोग होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              सोल्डर एक मिश्र धातु है जो टीन और लैड के मिश्रण से बनाया जाता है। इसे <b style={{ color: 'brown' }}>बिजली के तारों को जोड़ने</b> में उपयोग किया जाता है।
            </div>
          ),
        },

        {
          question: "27.  हीरे और ग्रेफाइट के गुणों में क्या अंतर होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>

              <ul className="list-none ml-10 text-gray-800">
                <li><b>(ii) हीरा</b>: रंगहीन, पारदर्शी, ठोस तथा कठोर होता है। यह विद्युत का <b style={{ color: 'red' }}>कुचालक</b> होता है।</li>
                <li><b>(ii) ग्रेफाइट</b>: काला, चमकदार, ठोस, बहुत मुलायम, चिकना और फिसलदार होता है। यह विद्युत का <b style={{ color: 'red' }}>सुचालक</b> होता है।</li>
              </ul>
            </div>
          ),
        },

        {
          question: "28.  मिश्र धातुओं के बनाने के क्या फायदा है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              <b style={{ color: 'blue' }}>
              मिश्र धातु के बनाने के निम्न फायदा हैं:</b>
              <ul className="list-none ml-12 text-gray-800">
                <li><b>(i) मिश्र धातु तत्वों के मुकाबले अधिक मजबूत और कठोर होता है।</b></li>
                <li ><b>(ii) मिश्र धातु पर जंग नहीं लगता है।</b></li>
                <li ><b>(iii) मिश्र धातुओं से उपयोगी वस्तुएँ बनायी जाती हैं।</b></li>
              </ul>
            </div>
          ),
        },

        {
          question: "29.  ध्वनिकता क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              धातुओं को कठोर सतह से टकराने पर एक प्रकार की आवाज उत्पन्न होती है, जिसे <b style={{ color: 'red' }}>ध्वनिकता</b> कहा जाता है।
            </div>
          ),
        },
        {
          question: "30.  लोहे पर जंग लगने का मुख्य कारण क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              लोहे पर जंग लगने का मुख्य कारण <b style={{ color: 'red' }}>ऑक्सीजन और नमी</b> की उपस्थिति है। जब लोहा पानी और हवा के संपर्क में आता है, तो यह ऑक्सीजन के साथ अभिक्रिया करके आयरन ऑक्साइड बनाता है, जिसे हम <b style={{ color: 'blue' }}>जंग</b> कहते हैं।
              <br />
              <b>जंग लगने की प्रक्रिया:</b>
              <ul className="list-none ml-10 text-gray-800">
                <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'purple' }}>लोहा पानी और ऑक्सीजन</b> के संपर्क में आता है।</li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'purple' }}>पानी और ऑक्सीजन</b> लोहे के साथ रासायनिक अभिक्रिया करते हैं।</li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: 'purple' }}>इस अभिक्रिया</b> से लोहे की सतह पर एक लाल-भूरे रंग की परत जम जाती है, जिसे जंग कहते हैं।</li>
              </ul>
              <b>जंग लगने से क्या होता है:</b>
              <ul className="list-none ml-10 text-gray-800">
                <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'red' }}>लोहा कमजोर</b> हो जाता है।</li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'red' }}>लोहे की चमक</b> खत्म हो जाती है।</li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: 'red' }}>लोहे का आकार</b> बदल जाता है।</li>
              </ul>
              <b className="">जंग लगने से कैसे बचें:</b>
              <ul className="list-none ml-10 text-gray-800">
                <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'blue' }}>लोहे पर पेंट</b> या तेल लगाएं।</li>
                <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'blue' }}>लोहे को पानी से</b> दूर रखें।</li>
                <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: 'blue' }}>लोहे को जंग रोधी पदार्थों</b> से ढकें।</li>
                <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: 'blue' }}>गैल्वनाइजेशन की प्रक्रिया</b> का उपयोग करें।</li>
              </ul>
              <b>नोट:</b> <i>जंग लगना एक प्राकृतिक प्रक्रिया है, लेकिन हम कुछ उपायों से इसे रोक सकते हैं।</i>
            </div>
          ),
        },

        {
          question: "31.  सोडियम को किरोसीन तेल में डूबाकर क्यों रखा जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              सोडियम एक बेहद क्रियाशील धातु है। यह हवा में मौजूद ऑक्सीजन और पानी के साथ बहुत तेजी से प्रतिक्रिया करता है। इस प्रतिक्रिया से काफी गर्मी पैदा होती है जिससे सोडियम में आग लग सकती है। इसे रोकने के लिए सोडियम को <b style={{ color: 'orange' }}>केरोसिन तेल</b> में डुबोकर रखा जाता है क्योंकि:
              <ul className="list-none ml-6 text-gray-800">
                <li><b style={{ color: 'blue' }}>(i) केरोसिन तेल</b> सोडियम को हवा और पानी से पूरी तरह से अलग कर देता है। इससे सोडियम, हवा और पानी के संपर्क में आने से बच जाता है और प्रतिक्रिया नहीं कर पाता।</li>
                <li><b style={{ color: 'blue' }}>(ii) केरोसिन तेल</b> एक अक्रिय पदार्थ है। यह सोडियम के साथ किसी भी तरह की प्रतिक्रिया नहीं करता, जिससे सोडियम सुरक्षित रहता है।</li>
              </ul>
              <b>संक्षेप में:</b> <p>सोडियम को केरोसिन तेल में डुबोकर रखने का मुख्य उद्देश्य इसे हवा और पानी के संपर्क में आने से बचाना है ताकि यह प्रतिक्रिया न करे और आग लगने का खतरा कम हो।</p>
            </div>
          ),
        },














      ]
    },

    // chapter 5 कोयला और पेट्रोलियम

    {
      chapterName: "कोयला और पेट्रोलियम",
      questions: [
        {
          question: "1. जीवाश्म ईंधन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b> वे ईंधन, जिनका निर्माण सजीव प्राणियों के मृत अवशेषों से होता है, उन्हें <b style={{ color: "blue" }}>जीवाश्म ईंधन</b> कहते हैं।
              <br />
                    <p className="ml-10"> जैसे:— <b style={{ color: "blue" }}>कोयला, पेट्रोलियम और प्राकृतिक गैस । </b></p>
            </div>
          ),
        },
        {
          question: " 2. जीवाश्म ईंधन कितने प्रकार के होते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b> <b style={{color: "blue"}}> जीवाश्म ईंधन तीन प्रकार के होते हैं:</b>
              <ul className="ml-10">
                <li><b style={{ color: "red" }}>(i) कोयला</b></li>
                <li><b style={{ color: "red" }}>(ii) पेट्रोलियम</b></li>
                <li><b style={{ color: "red" }}>(iii) प्राकृतिक गैस</b></li>
              </ul>
            </div>
          ),
        },
        {
          question: "3. कोयला किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b> <b style={{ color: "blue" }}>कोयला</b> एक जीवाश्म ईंधन है, जो पौधों के अवशेषों के दबाव और तापमान के कारण लाखों वर्षों में बनता है।
            </div>
          ),
        },
        {
          question: " 4. पेट्रोलियम क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b> <b style={{ color: "blue" }}>पेट्रोलियम</b> एक जीवाश्म ईंधन है जो प्राचीन पौधों और जानवरों के अवशेषों से बनता है। यह एक तरल ईंधन है।
              <br />
              <b style={{ color: "blue" }} className="ml-12">उपयोग:</b> पेट्रोलियम का उपयोग विभिन्न उद्योगों में किया जाता है।
              <br />
            <p className="ml-12"> <b style={{color: "violet"}}> जैसे:— </b> <b style={{ color: "blue" }}>वाहन ईंधन, ऊर्जा उत्पादन और पेट्रोकेमिकल्स के निर्माण में। </b> </p>
            </div>
          ),
        },
        {
          question: " 5. प्राकृतिक गैस क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b> <b style={{ color: "blue" }}>प्राकृतिक गैस</b> एक जीवाश्म ईंधन है जो प्राचीन पौधों और जानवरों के अवशेषों से बनती है। यह मुख्य रूप से <b style={{ color: "blue" }}>मिथेन (मीथेन)</b> CH₄ से बनी होती है।
              <br />
              <p className="ml-10">
              <b style={{ color: "violet" }}>उदाहरण:</b> घरों में खाना पकाने के लिए उपयोग की जाने वाली गैस।
 
              </p>
                       </div>
          ),
        },
        {
          question: " 6. कोयला का रासायनिक गुणधर्म लिखिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b> <b style={{ color: "blue" }}>कोयला</b> मुख्य रूप से <b style={{ color: "blue" }}>कार्बन (C)</b> और <b style={{ color: "blue" }}>हाइड्रोजन (H)</b> का मिश्रण है।
              <br />
              इसके अलावा, इसमें <b style={{ color: "blue" }}>ऑक्सीजन (O)</b>, <b style={{ color: "blue" }}>नाइट्रोजन (N)</b> और <b style={{ color: "blue" }}>सल्फर (S)</b> जैसे अन्य तत्व भी उपस्थित होते हैं।
            </div>
          ),
        },
        {
          question: " 7. कार्बनीकरण क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b> मृत वनस्पति के धीरे-धीरे प्रक्रम द्वारा <b style={{ color: "blue" }}>कोयला</b> में परिवर्तन को <b style={{ color: "blue" }}>कार्बनीकरण</b> कहते हैं।
            </div>
          ),
        },
        {
          question: " 8. उद्योग में कोयला के प्रक्रमण द्वारा प्राप्त उत्पादों के नाम लिखिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b> <b style={{ color: "blue" }}>कोक</b>, <b style={{ color: "blue" }}>कोलतार</b>, और <b style={{ color: "blue" }}>कोयला गैस</b>।
            </div>
          ),
        },
        {
          question: " 9. कोलतार क्या है? इसका उपयोग लिखे?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:-</b> यह एक अप्रिया गंध वाला काला गाढ़ा द्रव्य है। यह लगभग दो सौ (200) पदार्थों का मिश्रण होता है।
              <br />
              <p className="ml-14">
              <b style={{color: "violet"}}>उपयोग:—</b> इसका उपयोग औद्योगिक निर्माण में संश्लेषित रंग, औषधि, विस्फोटक, सुगंध, प्लास्टिक आदि कार्यों में होता है।
              </p>
              
            </div>
          ),
        },
        {
          question: " 10. काला सोना किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पेट्रोलियम को।
            </div>
          ),
        },
        {
          question: " 11. पेट्रोलियम को काला सोना क्यों कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पेट्रोलियम का उपयोग विभिन्न उत्पादों में किया जाता है, इनका अपना बहुत व्यवसायिक महत्व है। इसलिए इसे काला सोना कहते हैं।
            </div>
          ),
        },
        {
          question: " 12. कोयला गैस कैसे प्राप्त होता है? इसका एक प्रमुख उपयोग लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कोयला के प्रक्रमण द्वारा कोक बनाते समय कोयला गैस प्राप्त होता है।
              <br />
              <p className="ml-14">
              <b style={{color: "violet"}}>उपयोग:—</b> इसका उपयोग उद्योगों में ईंधन के रूप में किया जाता है।
              </p>
            </div>
          ),
        },
        {
          question: " 13. भारत में पेट्रोलियम पदार्थों के संरक्षण कौन करता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पेट्रोलियम संरक्षण अनुसंधान समिति (PCRA)।
            </div>
          ),
        },
        {
          question: " 14. PCRA लोगों को क्या सलाह देती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:-</b> पेट्रोलियम संरक्षण अनुसंधान समिति (PCRA) लोगों को ईंधन की बचत के लिए निम्नलिखित सलाह देती है:
              <ul className="ml-16">
                <li>जहाँ तक संभव हो गाड़ी समान और मध्यम गति से चलाइए।</li>
                <li>यातायात लाइटों पर अथवा जहाँ आपको प्रतीक्षा करनी है, गाड़ी का ईंधन बंद कर दीजिए।</li>
                <li>टायरों का दाब सही रखिए।</li>
                <li>गाड़ी का नियमित रखरखाव सुनिश्चित कीजिए।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 15. LPG और CNG का ईंधन के रूप में उपयोग करने से क्या लाभ है?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{color: "blue"}}> LPG और CNG का ईंधन के रूप में उपयोग करने से निम्नलिखित फायदे होते हैं:  </b></p>
              <ul className="ml-16">
                <li>प्रदूषण कम फैलता है।</li>
                <li>काम जल्दी से होता है।</li>
                <li>एक जगह से दूसरे जगह ले जाने में आसानी होती है।</li>
                <li>यह दोनों स्वच्छ ईंधन हैं।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 16. ईंधन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> हर एक जलने वाला पदार्थ जो जलकर ऊष्मा ऊर्जा देता है, उसे ईंधन कहते हैं।
            </div>
          ),
        },
        {
          question: " 17. ईंधन किन-किन अवस्थाओं में पाया जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ठोस, द्रव या गैस।
            </div>
          ),
        },
        {
          question: " 18. कोयला गैस का सर्वप्रथम प्रयोग कब एवं कहाँ किया गया?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कोयला गैस का सर्वप्रथम प्रयोग 1810 में लंदन में किया गया था।
            </div>
          ),
        },
        {
          question: " 19. L.P.G का पूरा नाम लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> एलपीजी (LPG) का पूरा नाम है: लिक्विड पेट्रोलियम गैस (Liquid Petroleum Gas)।
            </div>
          ),
        },
        {
          question: " 20. ईंधन कितने प्रकार के होते हैं?",
          answer: (
            <div>
             <p> <b style={{ color: "green" }}>उत्तर:—</b> <b style={{ color: "blue" }} > ईंधन मुख्य रूप से तीन प्रकार के होते हैं: </b></p>
              <ul className="ml-14">
                <li>ठोस ईंधन (जैसे: कोयला, लकड़ी)</li>
                <li>तरल ईंधन (जैसे: पेट्रोल, डीजल)</li>
                <li>गैसीय ईंधन (जैसे: एलपीजी, सीएनजी)</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 21. C.N.G का पूरा नाम लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सीएनजी (CNG) का पूरा नाम है:
              <br />
              संपीडित प्राकृतिक गैस (Compressed Natural Gas)।
            </div>
          ),
        },
        {
          question: " 22. प्रकृति में प्रदूषण का प्रमुख कारण क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रकृति में प्रदूषण का प्रमुख कारण ईंधनों का जलना है।
            </div>
          ),
        },
        {
          question: " 23. प्राथमिक ईंधन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जो ईंधन प्रकृति से हमें उसी रूप में प्राप्त होता है जिस रूप में उसका उपयोग होना है, प्राथमिक ईंधन कहलाता है।
              <br />
              <p className="ml-14">
              <b style={{color: "violet"}}>जैसे:—</b> लकड़ी, कोयला, पेट्रोलियम इत्यादि।
              </p>
             
            </div>
          ),
        },
        {
          question: " 24. द्वितीय ईंधन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वैसे ईंधन जो प्राथमिक ईंधन से प्राप्त किये जाते हैं, उसे द्वितीय ईंधन कहते हैं।
              <br />
              <p>
              <b style={{color: "violet"}}>जैसे:—</b> कोक, कोयला गैस, कोलतार इत्यादि।
              </p>
            </div>
          ),
        },
        {
          question: " 25. पेट्रोलियम का कौन–सा उत्पाद सड़क निर्माण हेतु उपयोग में लाया जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिटुमेन।
            </div>
          ),
        },
        {
          question: " 26. कोक किस प्रकार प्राप्त किया जा सकता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कोयला को वायु की अनुपस्थिति में गर्म करने पर कोक प्राप्त होता है।
            </div>
          ),
        },
        {
          question: " 27. कृत्रिम ढंग से कोयला कैसे बनाया जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कृत्रिम ढंग से कोयला बनाने के लिए बंद बर्तन में लकड़ी को गर्म करने से लकड़ी धीरे-धीरे कोयले में बदल जाती है।
            </div>
          ),
        },
        {
          question: " 28. भारत में तेल क्षेत्र कहाँ-कहाँ पाये जाते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> हमारे देश में तेल पैदा करने वाले क्षेत्र असम, गुजरात एवं मुंबई के कुछ क्षेत्र क्रमशः माहोर कटिया, अंकलेश्‍वर हैं।
            </div>
          ),
        },
        {
          question: " 29. परिष्करण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जब तेल के कुएँ से तेल निकलता है तब वह कच्चा तेल होता है। इसमें विभिन्न संघटकों का मिश्रण रहता है। इन विभिन्न संघटकों को पृथक करने की प्रक्रिया परिष्करण कहलाती है।
            </div>
          ),
        },
        {
          question: " 30. कोयला को जीवाश्म ईंधन क्यों कहा जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कोयला लाखों वर्ष पूर्व प्राचीन वनस्पतियों और पौधों के अवशेषों से बनता है। समय के साथ-साथ दबाव और तापमान के कारण ये अवशेष कोयले में परिवर्तित हो जाते हैं। अतः कोयला को जीवाश्म ईंधन कहा जाता है।
            </div>
          ),
        },

      ],
    },

    // chapter 6 दहन एवं ज्वाला

    {
      chapterName: "दहन एवं ज्वाला",
      questions: [

        {
          question: " 1. दहन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वह रासायनिक प्रक्रम जिसमें कोई पदार्थ ऑक्सीजन से अभिक्रिया कर ऊष्मा देता है, दहन कहलाता है।
            </div>
          ),
        },
        {
          question: " 2. ईंधन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ईंधन वे पदार्थ हैं जो जलने पर ऊर्जा प्रदान करते हैं।
            </div>
          ),
        },
        {
          question: " 3. ज्वाला किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ज्वाला जलने की प्रक्रिया में उत्पन्न होने वाली ऊर्जा के रूप में दिखाई देने वाली लौ को ज्वाला कहते हैं।
            </div>
          ),
        },
        {
          question: " 4. ज्वलन ताप क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वह न्यूनतम ताप जिस पर कोई पदार्थ जलने लगता है, वह ताप उस पदार्थ का ज्वलन ताप कहलाता है।
            </div>
          ),
        },
        {
          question: " 5. सूर्य में ऊष्मा और प्रकाश किस अभिक्रिया द्वारा उत्पन्न होते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> नाभिकीय संलयन अभिक्रिया के द्वारा।
            </div>
          ),
        },
        {
          question: " 6. स्वत: दहन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जो पदार्थ बिना गर्म किया स्वत: ही जल उठता है, स्वत: दहन कहलाता है।
              <br />
              <p className="ml-14">
              <b style={{color: "violet"}}>उदाहरण:—</b> पीले फॉस्फोरस का ज्वलन ताप कमरे के तापमान से कम होने के कारण यह स्वतः ही जल उठता है। क्योंकि इसका ज्वलन ताप कमरे के तापमान से कम होता है।
              </p>
            </div>
          ),
        },
        {
          question: " 7. ग्लोबल वार्मिंग का मुख्य कारण क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ग्रीनहाउस गैसों का उत्सर्जन, विशेष रूप से कार्बन डाइऑक्साइड (CO₂) ग्लोबल वार्मिंग का मुख्य कारण है।
            </div>
          ),
        },
        {
          question: " 8. इंधनों के अपूर्ण दहन से कौन–सा विषैला गैस बनता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ईंधनों के अपूर्ण दहन से कार्बन मोनोऑक्साइड (CO) विषैला गैस बनता है।
            </div>
          ),
        },
        {
          question: " 9. अम्लीय वर्षा का मुख्य कारण क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सल्फर और नाइट्रोजन के ऑक्साइड अम्लीय वर्षा का मुख्य कारण है।
            </div>
          ),
        },
        {
          question: " 10. कागज के कप में पानी को उबालने पर कागज जलता नहीं क्यों?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कागज़ के कप में पानी को उबालने पर कागज़ जलता नहीं है, क्योंकि जल के कारण कागज़ का तापमान उसके ज्वलन तापमान से कम रहता है।
            </div>
          ),
        },
        {
          question: " 11. जलने के तीन उपयोगी बात लिखिए?",
          answer: (
            <div>
               <p>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{color: "blue"}}>जलने के तीन उपयोगी बात हैं:</b>
              </p>
              <ol className="ml-16">
                <li>(i) ज्वलनशील पदार्थ।</li>
                <li>(ii) ज्वलन ताप।</li>
                <li>(iii) ऑक्सीजन।</li>
              </ol> 
            </div>
          ),
        },
        {
          question: " 12. दहन कितने प्रकार के होते हैं?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{color: "blue"}}> दहन तीन प्रकार के होते हैं: </b>
              </p>
              <ol className="ml-16">
                <li>(i) तीव्र दहन ।</li>
                <li>(ii) स्वतः दहन।</li>
                <li>(iii) विस्फोटक।</li>
              </ol>
            </div>
          ),
        },
        {
          question: " 13. आग पर तुरंत काबू कैसे पाया जा सकता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आग पर तुरंत काबू पाने के लिए ऑक्सीजन संपर्क को काट दिया जाता है, इसके लिए कई प्रचलित विधियाँ हैं।
              
              <p className="ml-16">
                 <b style={{color: "violet"}}> जैसे:— </b>  पानी डालना, कार्बन डाइऑक्साइड का छिड़काव करना, इसे ज्वलन ताप भी तुरंत कम हो जाता है।
              </p>
            </div>
          ),
        },
        {
          question: " 14. कार्बन–डाइऑक्साइड (CO₂) कैसे एक अच्छा अग्निशमक है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कार्बन-डाइऑक्साइड (CO₂) एक अच्छा अग्निशमक है, क्योंकि यह आग को हवा से दूर रखता है और आग के तापमान को कम करता है, जिससे आग जल्दी बुझ जाती है।
            </div>
          ),
        },
        {
          question: " 15. अम्लीय वर्षा के क्या हानिकारक प्रभाव है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ये फसलों को नष्ट कर देती है, मृदा को अम्लीय बनाती है। अम्लीय वर्षा का पानी नदी या तालाब में मिल जाए तो जीव नष्ट हो सकते हैं।
            </div>
          ),
        },
        {
          question: " 16. कोयले को हवा की अनुपस्थिति में गर्म करने से क्या प्राप्त होता है?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b>  <b style={{color: "blue"}}>कोयले को हवा की अनुपस्थिति में गर्म करने से हमें निम्नलिखित महत्वपूर्ण पदार्थ प्राप्त होते हैं: </b>
              </p>
              <ol className="ml-16">
                <li>(i) कृत्रिम पेट्रोलियम।</li>
                <li>(ii) बेंजीन।</li>
                <li>(iii) औषधियाँ।</li>
                <li>(iv) विस्फोटक पदार्थ।</li>
                <li>(v) ईंधन गैस।</li>
                <li>(vi) कोक।</li>
              </ol>
            </div>
          ),
        },
        {
          question: " 17. अम्लीय वर्षा किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सल्फर और नाइट्रोजन के ऑक्साइड वर्षा जल में घुल जाते हैं तथा अम्ल बनाते हैं, ऐसी वर्षा अम्लीय वर्षा कहलाती है।
            </div>
          ),
        },
        {
          question: " 18. ज्वाला के तीन भिन्न क्षेत्र कौन-कौन से हैं?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b><b style={{color:"blue"}}>  ज्वाला के तीन भिन्न क्षेत्र निम्न हैं: </b>
              </p>
              <ol className="ml-16">
                <li> (i) अदीप्त क्षेत्र। </li>
                <li> (ii) दीप्त क्षेत्र। </li>
                <li>(iii) ज्योतिहिन क्षेत्र।</li>
              </ol>
            </div>
          ),
        },
        {
          question: " 19. विद्युत उपकरणों में लगी आग को बुझाने के लिए कार्बन डाइऑक्साइड के छिड़काव के क्या लाभ है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कार्बन डाइऑक्साइड से विद्युत उपकरणों को कोई हानि नहीं पहुँचती जबकि पानी डालने पर जल विद्युत का चालन कर सकता है।
            </div>
          ),
        },
        {
          question: " 20. आग लगने पर उसे कई बार पानी डालकर बुझाते हैं। पानी डालने से आग कैसे बुझ जाती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आग को बुझाने के लिए साधारणतया जल का प्रयोग किया जाता है क्योंकि जल ज्वलनशील पदार्थ को ठंडा करता है और आग का फैलाव बंद हो जाता है। इस प्रक्रिया में जो जलवाष्प बनती है वह बाहर के वातावरण से वायु की आपूर्ति बंद कर देती है और आग बुझ जाती है।
            </div>
          ),
        },
        {
          question: " 21. अज्वलनशील पदार्थ किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जो पदार्थ लौ पर गर्म करने पर नहीं जलते हैं, अज्वलनशील पदार्थ कहलाते हैं।
              <p className="ml-16">
                <b style={{color: "violet"}}>  जैसे:—  </b>पत्थर, धातु, पानी आदि।
              </p>
            </div>
          ),
        },
        {
          question: " 22. माचिस को जलाने के लिए उसे माचिस की डिब्बा से रगड़ा जाता है। ऐसा क्यों?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> हमारे घरों में जो माचिस की डिबियाँ उपयोग में लायी जाती हैं उनके तीलियों पर रसायन पोटैशियम क्लोरेट होता है। डिब्बी पर लाल फास्फोरस और सल्फर लगा होता है। जब हम तीलियों को डिब्बी पर रगड़ते हैं तो यह जल उठती है।
            </div>
          ),
        },
        {
          question: " 23. दहन और जंग लगने में क्या अंतर है?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{color:"blue"}}> दहन और जंग लगने में मुख्य अंतर यह है:</b>
              </p>
             <ol className="ml-16">
              <li>
              <b style={{color: "violet"}}>(I) दहन:</b> दहन एक रासायनिक प्रतिक्रिया है जिसमें कोई पदार्थ ऑक्सीजन की उपस्थिति में जलता है और ऊर्जा का उत्पादन करता है। इसमें ताप और प्रकाश का उत्पादन होता है।
              </li>
             <li>
              <b style={{color: "violet"}}>(II) जंग लगना:</b> जंग लगना एक रासायनिक प्रतिक्रिया है जिसमें धातु ऑक्सीजन और नमी की उपस्थिति में क्षय होती है। इसमें धातु का ऑक्साइड बनता है और धातु की सतह पर जंग की परत बन जाती है।
              </li>
              </ol>
            </div>
          ),
        },
        {
          question: " 24. मोमबत्ती में मोम किस रूप में जलता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> मोमबत्ती में मोम वाष्प रूप में जलता है। जब मोमबत्ती जलाई जाती है, तो मोम पिघलकर वाष्प में बदल जाता है और फिर यह वाष्प ऑक्सीजन की उपस्थिति में जलता है, जिससे प्रकाश और गर्मी उत्पन्न होती है।
            </div>
          ),
        },
        {
          question: " 25. बारूद किन पदार्थों से मिलकर बना होता है?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{color:"blue"}}> बारूद मुख्य रूप से तीन पदार्थों से मिलकर बना होता है: </b>
              </p>
              <ol className="ml-16">
                <li>  (i) सल्फर (गंधक) </li>
                <li>  (ii) कार्बन (कोयला) </li>
                <li>(iii) नाइट्रेट (पोटैशियम नाइट्रेट या चीनी मिट्टी)</li>
              </ol>
            
            
              
            </div>
          ),
        },








      ]
    },

    // chapter 7 पौधे एवं जंतुओं का संरक्षण



    {
      chapterName: "पौधे एवं जंतुओं का संरक्षण",
      questions: [

        {
          question: " 1. पौधों का संरक्षण क्यों आवश्यक है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पौधों का संरक्षण आवश्यक है क्योंकि वे हमें ऑक्सीजन प्रदान करते हैं, वायु प्रदूषण को कम करते हैं, और जलवायु परिवर्तन को नियंत्रित करने में मदद करते हैं।
            </div>
          ),
        },
        {
          question: " 2. जंतुओं का संरक्षण क्यों महत्वपूर्ण है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जंतुओं का संरक्षण महत्वपूर्ण है क्योंकि वे हमारे पारिस्थितिकी तंत्र का एक महत्वपूर्ण हिस्सा हैं। वे हमें भोजन प्रदान करते हैं, पारिस्थितिकी तंत्र को संतुलित रखते हैं।
            </div>
          ),
        },
        {
          question: " 3. पौधों और जंतुओं के संरक्षण के लिए हम क्या कर सकते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पौधों और जंतुओं के संरक्षण के लिए हम कई कदम उठा सकते हैं, <br /> <span style={{color: "violet"}} className=" ml-16"> जैसे कि: </span>
              <ul className=" ml-16">
                <li>(I) पेड़ों को लगाना और उनकी देखभाल करना।</li>
                <li>(II) जंतुओं के आवासों की रक्षा करना।</li>
                <li > (III)  प्रदूषण को कम करना।</li>
                <li>(IV) जंतुओं के शोषण को रोकना।</li>
                <li>(V)  संरक्षण के प्रयासों में भाग लेना।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 4. पौधों और जंतुओं के संरक्षण के लिए सरकार की भूमिका क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पौधों और जंतुओं के संरक्षण के लिए सरकार की भूमिका महत्वपूर्ण है। सरकार निम्नलिखित कदम उठा सकती है:
              <ul className="ml-16">
                <li>संरक्षण के लिए नीतियाँ और कानून बनाना।</li>
                <li>संरक्षण के प्रयासों के लिए धन और संसाधन प्रदान करना।</li>
                <li>संरक्षण के बारे में जागरूकता फैलाना।</li>
                <li>संरक्षण के प्रयासों की निगरानी और मूल्यांकन करना।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 5. सूखा पड़ने के क्या कारण है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पृथ्वी के ताप में वृद्धि से जलचक्र का संतुलन बिगड़ता है, और वर्षा दर में कमी आती है जिसके कारण सूखा पड़ता है।
            </div>
          ),
        },
        {
          question: " 6. उस गैस का नाम बताइए जो पृथ्वी द्वारा उत्सर्जित उष्मीय विकिरणों को ग्रहण कर लेता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कार्बन डाइऑक्साइड (CO₂)
            </div>
          ),
        },
        {
          question: " 7. मरुस्थलीकरण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> धीरे-धीरे उर्वर भूमि मरुस्थल में परिवर्तित हो जाने के प्रक्रम को मरुस्थलीकरण कहते हैं।
            </div>
          ),
        },
        {
          question: " 8. अभ्यारण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> अभयारण्य किसी विशेष प्रजाति के जानवरों या पौधों के संरक्षण के लिए बनाए गए सुरक्षित क्षेत्र को कहते हैं।
            </div>
          ),
        },
        {
          question: " 9. जैव विविधता का क्या अर्थ है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जैव विविधता का अर्थ है पृथ्वी पर पाए जाने वाले विभिन्न प्रकार के जीव-जन्तुओं, पौधों, और सूक्ष्मजीवों की विविधता।
            </div>
          ),
        },
        {
          question: " 10. वनस्पति जात क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> किसी विशेष क्षेत्र में पाये जाने वाले पेड़–पौधे उस क्षेत्र के वनस्पति जात कहलाते हैं।
            </div>
          ),
        },

        {
          question: " 11. प्राणी जात क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> किसी विशेष क्षेत्र में पाये जाने वाले जीव–जंतु उस क्षेत्र के प्राणी जात कहलाते हैं।
            </div>
          ),
        },
        {
          question: " 12. क्या होगा यदि किसी जंतु का आवास बधित हो?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> यदि किसी जंतु का आवास बधित हो तो उस जंतु का अस्तित्व ही खतरे में पड़ जाएगा और धीरे-धीरे उस जीव की प्रजाति ही विलुप्त हो जाएगी।
            </div>
          ),
        },
        {
          question: " 13. अजैव घटक किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जलवायु, भूमि, नदी आदि को अजैव घटक कहते हैं।
            </div>
          ),
        },
        {
          question: " 14. जैव घटक किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सभी पौधे प्राणी एवं सूक्ष्मजीवों को जैव घटक कहते हैं।
            </div>
          ),
        },
        {
          question: " 15. हमें जैव विविधता का संरक्षण क्यों करना चाहिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पर्यावरण संतुलन के लिए जैव विविधता होना जरूरी है। इसलिए हमें जैव विविधता का संरक्षण करना आवश्यक है। अन्यथा असंतुलन पर्यावरण हमारे लिए घातक सिद्ध होगा।
            </div>
          ),
        },
        {
          question: " 16. विनाश के मुख्य कारण एवं उसके प्रभाव बताइए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <b className="text-blue-600">विनाश के मुख्य कारण:</b>
              <ul className="ml-16 ">
                <li>वनस्पतिवृक्षों की कटाई</li>
                <li>औद्योगिक प्रदूषण</li>
                <li>जल प्रदूषण</li>
                <li>मिट्टी का क्षरण</li>
              </ul>
              <b className="ml-16 text-blue-600">विनाश के प्रभाव:</b>
              <ul className="ml-16">
                <li>जैव विविधता की हानि</li>
                <li>जलवायु परिवर्तन</li>
                <li>मिट्टी की उर्वरता में कमी</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 17. प्रवास से आप क्या समझते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रवास (Pravas) का अर्थ है एक स्थान से दूसरे स्थान पर जाने की प्रक्रिया, जो अक्सर जानवरों और पक्षियों द्वारा उनके प्राकृतिक आवासों की खोज या मौसमी परिवर्तनों के कारण की जाती है।
            </div>
          ),
        },
        {
          question: " 18. जंगल नष्ट हो जाए तो जंतुओं पर क्या प्रभाव पड़ेगा?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जंगल नष्ट होने से जंतुओं के आवास नष्ट हो जाएंगे, भोजन की कमी होगी और उनकी प्रजातियों का अस्तित्व खतरे में पड़ जाएगा।
            </div>
          ),
        },
        {
          question: " 19. वनोन्मूलन क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वनस्पतियों और पेड़ों की कटाई या नष्ट करने की प्रक्रिया को वनोन्मूलन कहते हैं।
            </div>
          ),
        },
        {
          question: " 20. सामाजिक वानिकी किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सामाजिक वानिकी का अर्थ है लोगों की भागीदारी से वृक्षारोपण और वन संरक्षण की प्रक्रिया।
            </div>
          ),
        },

      ]
    },

    // chapter 8 कोशिका:  संरचना एवं प्रकार्य

    {
      chapterName: "कोशिका:  संरचना एवं प्रकार्य",
      questions: [

        {
          question: " 1. कोशिका क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सजीवों के संरचनात्मक एवं क्रियात्मक इकाई को कोशिका कहते हैं।
            </div>
          ),
        },
        {
          question: " 2. जंतु कोशिका किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जंतुओं के शरीर में पाई जाने वाली कोशिकाएँ जंतु कोशिका कहलाती हैं। इनमें केंद्रक, माइटोकॉन्ड्रिया और लाइसोसोम पाए जाते हैं।
            </div>
          ),
        },
        {
          question: " 3. पादप कोशिका किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पादप कोशिका पौधों के शरीर में पाई जाने वाली कोशिकाएँ होती हैं। इनमें केंद्रक, माइटोकॉन्ड्रिया, क्लोरोप्लास्ट और सेल्यूलोज़ की दीवार पाई जाती है।
            </div>
          ),
        },
        {
          question: " 4. कोशिकाओं को किस प्रकार देखा जा सकता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कोशिकाओं का आकार बहुत छोटा होता है जिसे देखने के लिए हमें सूक्ष्मदर्शी का प्रयोग करना पड़ता है।
            </div>
          ),
        },
        {
          question: " 5. एक कोशिकीय जीव क्या होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वह जीव जो एक ही कोशिका से बना हो वह एक कोशिकीय जीव कहलाता है।
              <br />
              जैसे:— अमीबा और पारामिशियम
            </div>
          ),
        },
        {
          question: " 6. बहुकोशिकीय जीव किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जिन जीवों का शरीर कई कोशिकाओं से मिलकर बना होता है, उन्हें बहुकोशिकीय जीव कहते हैं।
            </div>
          ),
        },
        {
          question: " 7. कोशिका के किस भाग में कोशिकांग पाए जाते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> साइटोप्लाज्मा में।
            </div>
          ),
        },
        {
          question: " 8. उत्तक क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> उत्तक: एक ही प्रकार की कोशिकाओं के समूह को उत्तक कहते हैं। ये कोशिकाएँ आकार, संरचना और कार्य में समान होती हैं।
            </div>
          ),
        },
        {
          question: " 9. उस यंत्र का नाम बताइए जिससे कोशिका को देखा जा सकता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> माइक्रोस्कोप।
            </div>
          ),
        },
        {
          question: " 10. कोशिका के मुख्य अंगत या भाग कौन-कौन से हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कोशिका के मुख्य अंगत कोशिका झिल्ली, कोशिका द्रव्य और केंद्रक है।
            </div>
          ),
        },
        {
          question: " 11. कोशिका झिल्ली के अंदर पाये जाने वाले कोशिका अंगको के नाम बताइए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कोशिका द्रव और केंद्रक।
            </div>
          ),
        },
        {
          question: " 12. कोशिका के किस भाग को कोशिका का जीवित पदार्थ कहा जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रोटेप्लाजमा को।
            </div>
          ),
        },
        {
          question: " 13. प्रोटेप्लाजमा किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जीवित कोशिका के अंदर के सभी भागों को प्रोटेप्लाजमा कहते हैं।
            </div>
          ),
        },
        {
          question: " 14. जीन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जीन: जीन एक अनुवांशिक इकाई है जो क्रोमोसोम में स्थित होती है और जीनेटिक गुणों को एक पीढ़ी से दूसरी पीढ़ी में स्थानांतरित करने में महत्वपूर्ण भूमिका निभाती है।
            </div>
          ),
        },
        {
          question: " 15. किन कोशिकाओं की आकृति निश्‍चित नहीं होती?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> श्‍वेत रक्त कोशिका की आकृति निश्‍चित नहीं होती।
            </div>
          ),
        },
        {
          question: " 16. मानव शरीर में सबसे छोटी एवं बड़ी कोशिका का नाम बताएँ?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> मानव शरीर में लाल रक्त कोशिकाएँ सबसे छोटी होती है। तंत्रिका कोशिका सबसे बड़ी कोशिका होती है।
            </div>
          ),
        },
        {
          question: " 17. ऊतकों का निर्माण किस प्रकार होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बहुकोशिकीय जीवों में कोशिकाओं का विशिष्ट समूह ऊतकों का निर्माण करता है।
            </div>
          ),
        },
        {
          question: " 18. मुर्गी के अंडे के पीला भाग एवं उजले भाग को क्या कहा जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> मुर्गी के अंडे के पीले भाग को एलब्यूमिन तथा उजला भाग योक कहलाता है। मुर्गी का यह अंडा एकल कोशिका रखता है।
            </div>
          ),
        },
        {
          question: " 19. कोशिका का आकार किस बात पर निर्भर करता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कोशिका का आकार का संबंध किसी जीव या पौधे के आकार से न होकर उस कोशिका विशेष के कार्य से होता है।
            </div>
          ),
        },
        {
          question: " 20. क्लोरोफिल या पर्णहरित किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पत्तियों का हरा रंग उनकी कोशिकाओं में स्थित हरे रंग के लवक क्लोरोप्लास्ट या हरित लवक के कारण होता है, जिसे क्लोरोफिल पर्णहरित कहते हैं।
            </div>
          ),
        },
        {
          question: " 21. कोशिका झिल्ली किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कोशिका झिल्ली एक पतली और लचीली परत होती है जो कोशिका के अंदरूनी हिस्से को बाहरी वातावरण से अलग करती है। यह झिल्ली कोशिका को सुरक्षा प्रदान करती है और पदार्थों के आदान-प्रदान को नियंत्रित करती है।
            </div>
          ),
        },
        {
          question: " 22. कोशिका भित्ति किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पादप कोशिकाओं की बाहरी परत जो सेल्यूलोज़ से बनी होती है और कोशिका को आकार और संरचना प्रदान करती है।
            </div>
          ),
        },
        {
          question: " 23. केंद्रक झिल्ली किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> केंद्रक के चारों ओर स्थित एक दोहरी झिल्ली जो केंद्रक को कोशिका के सायटोप्लाज्म से अलग करती है और केंद्रक में आने-जाने वाले पदार्थों को नियंत्रित करती है।
            </div>
          ),
        },
        {
          question: " 24. रंजक किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> रंजक: कोशिका में पाए जाने वाले रंगीन पदार्थों को रंजक कहते हैं। ये पदार्थ कोशिका को विशिष्ट रंग प्रदान करते हैं और अक्सर कोशिका की विशिष्ट कार्यों में भी भूमिका निभाते हैं।
              <br />
              <b style={{color:"violet"}}>
              रंजकों के उदाहरण:
              </b>
              <ul className="ml-16">
                <li><b style={{ color: "red" }}>क्लोरोफिल:</b> पादप कोशिकाओं में पाया जाने वाला एक रंजक जो पौधों को हरा रंग प्रदान करता है और प्रकाश संश्‍लेषण में महत्वपूर्ण भूमिका निभाता है।</li>
                <li><b style={{ color: "red" }}>हीमोग्लोबिन:</b> जंतु कोशिकाओं में पाया जाने वाला एक रंजक जो लाल रक्त कोशिकाओं में पाया जाता है और ऑक्सीजन को शरीर के विभिन्न अंगों तक पहुंचाने में मदद करता है।</li>
                <li><b style={{ color: "red" }}>मेलानिन:</b> जंतु कोशिकाओं में पाया जाने वाला एक रंजक जो त्वचा, बालों और आंखों को रंग प्रदान करता है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 25. जंतु कोशिका और पादप कोशिका में क्या अंतर है?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{color:"blue"}}> जंतु कोशिका और पादप कोशिका में निम्न अंतर है: </b>
              </p>
              <ul className="ml-16">
                <li><b style={{ color: "red" }}>पादप कोशिका में:</b>
                  <ul className="ml-2">
                    <li>कोशिका भित्ति होती है।</li>
                    <li>क्लोरोप्लास्ट होते हैं।</li>
                    <li>वैक्यूल्स बड़े होते हैं।</li>
                    <li>लाइसोसोम नहीं होते हैं।</li>
                    <li>सेंट्रियोल नहीं होते हैं।</li>
                  </ul>
                </li>
                <li><b style={{ color: "red" }}>जंतु कोशिका में:</b>
                  <ul className="ml-2">
                    <li>कोशिका भित्ति नहीं होती है।</li>
                    <li>क्लोरोप्लास्ट नहीं होते हैं।</li>
                    <li>वैक्यूल्स छोटे होते हैं।</li>
                    <li>लाइसोसोम होते हैं।</li>
                    <li>सेंट्रियोल होते हैं।</li>
                  </ul>
                </li>
              </ul>
            </div>
          ),
        },
      ]

    },

    // chapter 9 जंतुओं में जनन

    {
      chapterName: "जंतुओं में जनन",
      questions: [

        {
          question: " 1. जनन क्या है यह क्यों जरूरी है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जनन एक प्रक्रिया है जिसमें जीव अपने जैसे शिशु को जन्म देता है। यह बहुत जरूरी है क्योंकि इससे जीवन की निरंतरता बनी रहती है और जीवों की प्रजाति को बचाया जा सकता है।
            </div>
          ),
        },
        {
          question: " 2. निषेचन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> निषेचन एक प्रक्रिया है जिसमें नर कोशिका (शुक्राणु) और मादा कोशिका (अंडाणु) मिलकर एक नई कोशिका बनाते हैं, जिसे जाइगोट कहते हैं।
            </div>
          ),
        },
        {
          question: " 3. निषेचन कितने प्रकार का होता है?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{ color: "blue" }} > निषेचन दो प्रकार के होते हैं: </b>
              </p>
              <ul className="ml-16">
                <li><b >(i) आंतरिक निषेचन (शरीर के अंदर)</b></li>
                <li><b > (ii) बाहरी निषेचन (शरीर के बाहर)</b></li>
              </ul>
            </div>
          ),
        },
        {
          question: " 4. युग्मनज किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> निषेचित अंडाणु को युग्मनज कहते हैं। यह नर और मादा की कोशिकाओं के मिलने से बनता है।
            </div>
          ),
        },
        {
          question: " 5. शुक्राणु किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पुरुष के शरीर में बनी विशेष प्रकार की कोशिका को शुक्राणु कहते हैं। यह कोशिका निषेचन प्रक्रिया में महत्वपूर्ण भूमिका निभाती है।
            </div>
          ),
        },
        {
          question: " 6. बाहरी निषेचन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जब नर और मादा की कोशिकाएं जल में मिलकर निषेचन प्रक्रिया को पूरा करती हैं, जैसे कि मछली और मेंढ़क में, तो इसे बाहरी निषेचन कहते हैं।
            </div>
          ),
        },
        {
          question: " 7. आंतरिक निषेचन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जब नर और मादा की कोशिकाएं मादा के शरीर के अंदर मिलकर निषेचन प्रक्रिया को पूरा करती हैं, जैसे कि पक्षियों, स्तनधारियों और मनुष्य में, तो इसे आंतरिक निषेचन कहते हैं।
            </div>
          ),
        },
        {
          question: " 8. मादा के किस जनन अंग में भूरण का रोपण होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> मादा के गर्भाशय में भूरण का रोपण होता है।
            </div>
          ),
        },
        {
          question: " 9. गर्भ किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> निषेचित अंडाणु के विकसित होने के बाद बने भुरण को गर्भ कहते हैं। यह मादा के गर्भाशय में विकसित होता है।
            </div>
          ),
        },
        {
          question: " 10. भूरण कहाँ रोपित होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> भूरण गर्भाश्‍य के दीवार में रोपित होकर विकसित होता है।
            </div>
          ),
        },
        {
          question: " 11. मुर्गी के अंडे को चूजा बनने में कितना समय लगता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> मुर्गी के अंडे को चूजा बनने में लगभग 21 दिन या 3 सप्ताह का समय लगता है।
            </div>
          ),
        },
        {
          question: " 12. अलैंगिक प्रजनन और लैंगिक प्रजनन में क्या अंतर है?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:-</b> <b style={{color: "blue"}}> अलैंगिक प्रजनन और लैंगिक प्रजनन में निम्न अंतर हैं: </b>
              </p>
              <ul className="ml-14">
                <li><b style={{ color: "red" }}>अलैंगिक प्रजनन:</b>
                  <ul>
                    <li>एक ही माता-पिता की कोशिका शामिल होती है।</li>
                    <li>कोशिका विभाजन के माध्यम से नए जीव उत्पन्न होते हैं।</li>
                    <li>इसमें लिंग कोशिकाएं नहीं होती हैं।</li>
                    <li>इसमें जीन की विविधता नहीं होती है।</li>
                    <li>यह प्रक्रिया तेजी से होती है और इसमें ऊर्जा की कम आवश्यकता होती है।</li>
                  </ul>
                </li>
                <li><b style={{ color: "red" }}>लैंगिक प्रजनन:</b>
                  <ul>
                    <li>दो माता-पिता की कोशिकाएं शामिल होती हैं।</li>
                    <li>नर और मादा युग्मकों के मिलन से नए जीव उत्पन्न होते हैं।</li>
                    <li>इसमें लिंग कोशिकाएं होती हैं।</li>
                    <li>इसमें जीन की विविधता होती है।</li>
                    <li>यह प्रक्रिया अधिक जटिल होती है और इसमें ऊर्जा की अधिक आवश्यकता होती है।</li>
                  </ul>
                </li>
              </ul>
            </div>
          ),
        },
        {
          question: " 13. आंतरिक निषेचन तथा बाहरी निषेचन में क्या अंतर है?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:-</b> <b style={{color: "blue"}}>  आंतरिक निषेचन तथा बाहरी निषेचन में निम्न अंतर हैं:</b>
              </p>
              <ul className="ml-14">
                <li><b style={{ color: "red" }}>आंतरिक निषेचन:</b>
                  <ul>
                    <li>निषेचन मादा के शरीर के अंदर होता है।</li>
                    <li>नर के शुक्राणु मादा के शरीर में प्रवेश करते हैं।</li>
                    <li>यह प्रक्रिया स्तनधारियों, पक्षियों और कुछ अन्य जीवों में होती है।</li>
                  </ul>
                </li>
                <li><b style={{ color: "red" }}>बाहरी निषेचन:</b>
                  <ul>
                    <li>निषेचन जल में या बाहरी वातावरण में होता है।</li>
                    <li>नर और मादा दोनों अपने युग्मकों को जल में छोड़ते हैं।</li>
                    <li>यह प्रक्रिया मछलियों, उभयजीवियों और कुछ अन्य जलीय जीवों में होती है।</li>
                  </ul>
                </li>
              </ul>
            </div>
          ),
        },
        {
          question: " 14. शिशु के लिंग निर्धारण का क्या अर्थ है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> शिशु के लिंग निर्धारण का अर्थ है कि शिशु के जन्म से पहले उसके लिंग का निर्धारण करना, यानी यह जानना कि शिशु लड़का होगा या लड़की।
            </div>
          ),
        },
        {
          question: " 15. परखनली शिशु या कृत्रिम निषेचन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> परखनली शिशु या कृत्रिम निषेचन एक ऐसी प्रक्रिया है जिसमें महिला के अंडाणु को पुरुष के शुक्राणु से परखनली में निषेचित किया जाता है, और फिर उसे महिला के गर्भाशय में स्थापित किया जाता है।
            </div>
          ),
        },
        {
          question: " 16. विधि मुकुलन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> विधि मुकुलन एक ऐसी प्रक्रिया है जिसमें एक पौधे या जीव की एक कोशिका या ऊतक को अलग करके एक नए पौधे या जीव को बनाया जाता है।
            </div>
          ),
        },
        {
          question: " 17. द्विखण्डन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> द्विखण्डन एक प्रकार का अलैंगिक प्रजनन है, जिसमें एक जीव अपने शरीर को दो बराबर भागों में विभाजित कर देता है, और प्रत्येक भाग से एक नए जीव का निर्माण होता है।
            </div>
          ),
        },
        {
          question: " 18. जंतुओं में प्रजनन कितने प्रकार से होता है?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:-</b> <b style={{color:"blue"}}> जंतुओं में प्रजनन दो प्रकार से होता है: </b>
              </p>
              <ul className="ml-14">
                <li><b > (i) अलैंगिक प्रजनन</b></li>
                <li> <b >(ii) लैंगिक प्रजनन</b></li>
              </ul>
            </div>
          ),
        },
        {
          question: " 19. क्या होगा यदि शुक्राणु को अंडाणु से मिलने नहीं दिया जाए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> यदि शुक्राणु को अंडाणु से मिलने नहीं दिया जाए, तो निषेचन नहीं होगा और गर्भधारण नहीं होगा।
            </div>
          ),
        },
        {
          question: " 20. प्रजनन आवश्यक क्यों है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रजनन आवश्यक है क्योंकि यह जीवन की निरंतरता को बनाए रखने में मदद करता है। प्रजनन के माध्यम से नए जीव पैदा होते हैं और प्रजाति का अस्तित्व बना रहता है।
            </div>
          ),
        },

      ]
    },

    // chapter 10 

    {
      chapterName: "किशोरावस्था की ओर",
      questions: [

        {
          question: "1. किशोरावस्था किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जीवनकाल की वह अवधि जब जनन विकास के कारण शरीर में परिवर्तन होते हैं किशोरावस्था कहलाती है।
              <ul>
                <li>यह अवस्था 11 वर्ष की आयु से 18 या 19 वर्ष की आयु तक रहती है।</li>
                <li>किशोरावस्था को टीनेजर्स भी कहते हैं।</li>
                <li>लड़कियों में यह अवस्था लड़कों की अपेक्षा एक या दो वर्ष पूर्व प्रारंभ हो जाती है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "2. यौवनारंभ का सबसे महत्वपूर्ण परिवर्तन क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> लड़के एवं लड़कियों की जन्म क्षमता का विकास।
            </div>
          ),
        },
        {
          question: "3. लिंग गुणसूत्र किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> लिंग गुणसूत्र वे गुणसूत्र होते हैं जो जीव के लिंग का निर्धारण करते हैं। मानव में लिंग गुणसूत्र X और Y होते हैं।
            </div>
          ),
        },
        {
          question: "4. रजोनिवृत किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> रजोनिवृत्ति वह समय होता है जब महिला के शरीर में अंडाणु का उत्पादन बंद हो जाता है और मासिक धर्म चक्र समाप्त हो जाता है। यह आमतौर पर महिलाओं में 45-55 वर्ष की आयु के बीच होता है।
            </div>
          ),
        },
        {
          question: "5. रजोदर्शन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> रजोदर्शन वह समय होता है जब महिला के शरीर में पहली बार मासिक धर्म शुरू होता है। यह आमतौर पर लड़कियों में 10-16 वर्ष की आयु के बीच होता है।
            </div>
          ),
        },
        {
          question: "6. रजोधर्म किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> रजोधर्म या मासिक धर्म वह प्रक्रिया होती है जिसमें महिला के शरीर से गर्भाशय की परत और रक्त का स्राव होता है, जब गर्भधारण नहीं होता है। यह आमतौर पर महिलाओं में हर (28–30) दिनों में होता है।
            </div>
          ),
        },
        {
          question: "7. लड़कियों में स्तन का विकास किस प्रकार होते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> लड़कियों में स्तन का विकास यौवनावस्था के दौरान होता है, जो आमतौर पर 10-14 वर्ष की आयु के बीच शुरू होता है। इस प्रक्रिया में स्तन के ऊतकों का विकास होता है, जिससे स्तन का आकार और रूप बदलता है।
            </div>
          ),
        },



        {
          question: "8. किशोरावस्था, बाल्यावस्था से किस प्रकार भिन्न है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> किशोरावस्था और बाल्यावस्था में कई अंतर हैं:
                 <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
             <thead>
              <tr className="bg-indigo-100">
               <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center"><b > बाल्यावस्था (6-10 वर्ष): </b></th>
               <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center "> <b>किशोरावस्था (11-19 वर्ष): </b></th>
             </tr>
           </thead>
           <tbody className="bg-white">
             <tr className="hover:bg-gray-50">
               <td className="border border-gray-400 px-4  py-4 ">(I) शारीरिक विकास धीमा होता है।</td>
               <td className="border border-gray-400 px-4 py-4">(I) शारीरिक विकास तेजी से होता है।</td>
             </tr>
             <tr className="hover:bg-gray-50">
               <td className="border border-gray-400 px-4  py-4">(II) मानसिक विकास तेजी से होता है।</td>
               <td className="border border-gray-400 px-4  py-4">(II) मानसिक विकास भी तेजी से होता है।</td>
             </tr>
             <tr className="hover:bg-gray-50">
               <td className="border border-gray-400 px-4  py-4">(III)  बच्चे अधिक आश्रित होते हैं।</td>
               <td className="border border-gray-400 px-4  py-4">(III) किशोर अधिक स्वतंत्र होते हैं। </td>
             </tr>
                   <tr className="hover:bg-gray-50">
                   <td className="border border-gray-400 px-4  py-4">(IV)  यौन विकास नहीं होता है।</td>
                   <td className="border border-gray-400 px-4  py-4">(IV) यौन विकास होता है और यौन परिपक्वता प्राप्त होती है। </td>
               </tr>

         </tbody>
         </table>

            </div>
          ),
        },
        {
          question: "9. बेहतर सेहत के लिए आप क्या करते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बेहतर सेहत के लिए हमें अपने आहार में कार्बोहाइड्रेट, प्रोटीन, विटामिन, वसा और खनिजों की पर्याप्त मात्रा शामिल करनी चाहिए। यह हमारे शरीर को आवश्यक पोषक तत्व प्रदान करता है और हमें स्वस्थ और ऊर्जावान बनाए रखता है।
            </div>
          ),
        },
        {
          question: "10. किशोरावस्था में स्वर में बदलाव क्यों आता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> किशोरावस्था में स्वर में बदलाव हार्मोनल परिवर्तनों के कारण आता है। इस दौरान लड़कों में टेस्टोस्टेरोन हार्मोन की मात्रा में वृद्धि होती है, जिससे उनकी आवाज़ मोटी और गहरी हो जाती है। लड़कियों में भी एस्ट्रोजन हार्मोन की मात्रा में वृद्धि होती है, जिससे उनकी आवाज़ में भी बदलाव आता है।
            </div>
          ),
        },
        {
          question: "11. किशोरावस्था में लंबाई तेजी से क्यों बढ़ता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> किशोरावस्था में लंबाई तेजी से बढ़ता है क्योंकि शरीर की हड्डियों में तेजी से वृद्धि होती है। लगभग 18 वर्ष की आयु तक लड़के और लड़कियाँ अपनी अधिकतम लंबाई प्राप्त कर लेते हैं।
            </div>
          ),
        },
      
        {
          question: "12. शारीरिक बनावट में किस प्रकार परिवर्तन आते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> शारीरिक बनावट में निम्न परिवर्तन आते हैं:
              <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
             <thead>
              <tr className="bg-indigo-100">
               <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center"><b > लड़कों में: </b></th>
               <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center "> <b>लड़कियों में: </b></th>
             </tr>
           </thead>
           <tbody className="bg-white">
             <tr className="hover:bg-gray-50">
               <td className="border border-gray-400 px-4  py-4 ">(I) लंबाई और वजन में वृद्धि।</td>
               <td className="border border-gray-400 px-4 py-4">(I) लंबाई और वजन में वृद्धि।</td>
             </tr>
             <tr className="hover:bg-gray-50">
               <td className="border border-gray-400 px-4  py-4">(II) मांसपेशियों का विकास।</td>
               <td className="border border-gray-400 px-4  py-4">(II) स्तनों का विकास।</td>
             </tr>
             <tr className="hover:bg-gray-50">
               <td className="border border-gray-400 px-4  py-4">(III)  आवाज़ में गहरापन।</td>
               <td className="border border-gray-400 px-4  py-4">(III) कूल्हों और जांघों का विकास। </td>
             </tr>
                   <tr className="hover:bg-gray-50">
                   <td className="border border-gray-400 px-4  py-4">(IV)  दाढ़ी और मूंछों का उगना।</td>
                   <td className="border border-gray-400 px-4  py-4">(IV) मासिक धर्म की शुरुआत। </td>
               </tr>

         </tbody>
         </table>
            </div>
          ),
        },
        {
          question: "13. मनुष्य के जीवन काल को कितने भागों में बाँटा जाता है?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{color: "blue"}}> मनुष्य के जीवन काल को चार भागों में बाँटा जाता है: </b>
              </p>
              <ul className="ml-16">
                <li><b >बाल्यावस्था (0-12 वर्ष):</b> बचपन का समय</li>
                <li><b>किशोरावस्था (13-19 वर्ष):</b> जवानी की शुरुआत</li>
                <li><b>प्रौढ़ावस्था (20-59 वर्ष):</b> जवानी का समय</li>
                <li><b>वृद्धावस्था (60 वर्ष से अधिक):</b> बुढ़ापा</li>
              </ul>
            </div>
          ),
        },
       
        {
          question: "14. मानसिक एवं संवेदनात्मक विकास किस प्रकार होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> मानसिक एवं संवेदनात्मक विकास निम्न हैं:
              <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
             <thead>
              <tr className="bg-indigo-100">
               <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center"><b > मानसिक विकास: </b></th>
               <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center "> <b>संवेदनात्मक विकास: </b></th>
             </tr>
           </thead>
           <tbody className="bg-white">
             <tr className="hover:bg-gray-50">
               <td className="border border-gray-400 px-4  py-4 ">(I) सोच और समझ में सुधार</td>
               <td className="border border-gray-400 px-4 py-4">(I) भावनाओं को समझने और नियंत्रित करने में सुधार</td>
             </tr>
             <tr className="hover:bg-gray-50">
               <td className="border border-gray-400 px-4  py-4">(II) समस्याओं का समाधान करने में सुधार</td>
               <td className="border border-gray-400 px-4  py-4">(II) दूसरों की भावनाओं को समझने में सुधार</td>
             </tr>
             <tr className="hover:bg-gray-50">
               <td className="border border-gray-400 px-4  py-4">(III)  निर्णय लेने में सुधार</td>
               <td className="border border-gray-400 px-4  py-4">(III) सामाजिक और रिश्तों में सुधार </td>
               </tr>

         </tbody>
         </table>
            </div>
          ),
        },
        {
          question: "15. परिपक्वता किसे कहते हैं ?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> परिपक्वता का अर्थ है व्यक्ति का शारीरिक, मानसिक और भावनात्मक रूप से पूरी तरह से विकसित होना।
            </div>
          ),
        }






      ]
    },

    // chapter 11 बल तथा दाब
    {
      chapterName: "बल तथा दाब",
      questions: [

        {
          question: "1. बल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> किसी वस्तु पर लगने वाले धक्के या खिचाँव को बल कहते हैं।
              <ul className="list-disc no-underline ml-16" >
                <li>जब आप किसी गेंद को धक्का देते हैं, तो आप उस पर बल लगा रहे हैं।</li>
                <li>जब आप किसी रस्सी को खींचते हैं, तो आप उस पर बल लगा रहे हैं।</li>
                <li>जब आप किसी दरवाजे को खोलते हैं, तो आप उस पर बल लगा रहे हैं।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "2. बल कितने प्रकार के होते हैं?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{ color: "blue" }}> बल दो प्रकार के होते हैं:</b>
              </p>
              <ul className="ml-16">
                <li> <b >(i) संपर्क बल</b></li>
                <li><b > (ii) असंपर्क बल</b></li>
              </ul>
            </div>
          ),
        },
        {
          question: "3. संपर्क बल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> संपर्क बल वह बल होता है, जो दो वस्तुओं के संपर्क में आने पर लगता है।
              <ul>
                <li>जब आप किसी गेंद को धक्का देते हैं, तो आपके हाथ और गेंद के बीच संपर्क बल लगता है।</li>
                <li>जब आप किसी वस्तु को उठाते हैं, तो आपके हाथ और वस्तु के बीच संपर्क बल लगता है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "4. असंपर्क बल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> असंपर्क बल वह बल होता है जो दो वस्तुओं के बीच बिना संपर्क के लगता है।
              <ul>
                <li>जैसे:— गुरुत्वाकर्षण बल, चुंबकीय बल और विद्युत बल।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "5. संपर्क बल कितने प्रकार के होते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> संपर्क बल दो प्रकार के होते हैं:
              <ul>
                <li> <b style={{ color: "blue" }} >(i) पेशीय बल</b></li>
                <li> <b style={{ color: "blue" }} >(ii) घर्षण बल </b></li>
              </ul>
            </div>
          ),
        },
        {
          question: "6. पेशीय बल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पेशीय बल वह बल होता है जो किसी वस्तु पर सीधे लगाया जाता है।
              <ul>
                <li>जैसे:— धक्का देना या खींचना।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "7. घर्षण बल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> घर्षण बल वह बल होता है जो दो वस्तुओं के बीच रगड़ या घर्षण के कारण लगता है।
              <ul>
                <li>जैसे:— जब आप एक पेंसिल को कागज़ पर रगड़ते हैं, तो पेंसिल और कागज़ के बीच घर्षण बल लगता है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "8. घर्षण बल को संपर्क बल क्यों कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> घर्षण बल को संपर्क बल कहते हैं क्योंकि यह दो वस्तुओं के संपर्क में आने पर लगता है।
            </div>
          ),
        },
        {
          question: "9. असंपर्क बल कितने प्रकार के होते हैं?",
          answer: (
            <div>
              <p> 
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{color:"blue"}}> असंपर्क बल दो प्रकार के होते हैं: </b>
              </p>
              <ul className="ml-16">
                <li><b >(i) चुंबकीय बल</b></li>
                <li><b >(ii) गुरुत्व बल</b></li>
              </ul>
            </div>
          ),
        },
        {
          question: "10. चुंबकीय बल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> चुंबकीय बल वह बल होता है जो चुंबक के दो ध्रुवों के बीच लगता है।
              <ul className="ml-16">
                <li> <b style={{color:"violet"}}> जैसे:—</b> जब आप एक चुंबक को लोहे के टुकड़े के पास लाते हैं, तो चुंबकीय बल के कारण लोहे का टुकड़ा चुंबक की ओर आकर्षित होता है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "11. गुरुत्व बल किसे कहते हैं ?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> गुरुत्व बल वह बल होता है जो पृथ्वी की ओर किसी वस्तु को आकर्षित करता है।
              <ul className="ml-16">
                <li><b style={{color:"violet"}}> जैसे:—</b> जब आप कोई वस्तु ऊपर फेंकते हैं, तो वह वस्तु गुरुत्व बल के कारण नीचे गिरती है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "12. दाब किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> किसी पृष्ठ के प्रति एकांक क्षेत्रफल पर लगने वाले बल को दाब कहते हैं।
            </div>
          ),
        },
        {
          question: "13. कंधे पर लटकाने वाले थैलों में चौड़ी पट्टी क्यों लगाई जाती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कंधे पर लटकाने वाले थैलों में चौड़ी पट्टी लगाई जाती है ताकि थैले का वजन कंधे पर समान रूप से बंट जाए और कंधे पर ज्यादा दबाव न पड़े।
            </div>
          ),
        },
        {
          question: "14. वायुमंडल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वायु हमारे चारों ओर है। वायु पृथ्वी को चारों तरफ से घेरे हुए है। इस फैले हुए आवरण को वायुमंडल कहा जाता है।
            </div>
          ),
        },
        {
          question: "15. वायुमंडल दाब किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वायुमंडलीय वायु पृथ्वी के तल से कई किलोमीटर ऊपर तक फैली हुई है, इस वायु द्वारा लगाए गए दाब को वायुमंडलीय दाब कहते हैं।
            </div>
          ),
        },
        {
          question: "16. वायु दाब क्या होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वायु स्थान घेरती है एवं इसका अपना भार भी होता है, जिसे वायु दाब कहा जाता है।
            </div>
          ),
        },
        {
          question: "17. बल एवं दाब में क्या अंतर है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बल एक खिंचाव या धक्का है, जबकि प्रति एकांक क्षेत्रफल पर लगने वाले बल को दाब कहते हैं।
            </div>
          ),
        },
        {
          question: "18. आप पिन को नुकीला क्यों बनाते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पिन को नुकीला बनाने का कारण यह है कि इसके सिरे का क्षेत्रफल कम होने से इस पर दाब बढ़ जाता है, जिससे पिन को तख्ते में ठोकने में आसानी होती है।
            </div>
          ),
        },
        {
          question: "19. उत्प्लावन बल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> उत्प्लावन बल वह बल है जो किसी वस्तु को तरल में डुबाने पर उसे ऊपर की ओर धकेलता है।
            </div>
          ),
        },
        {
          question: "20. जलीय जीव किस बल के कारण पानी में तैरते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जलीय जीव उत्प्लावन बल के कारण पानी में तैरते हैं। यह बल पानी में डूबी हुई वस्तु पर ऊपर की ओर कार्य करता है, जिससे वस्तु पानी में तैरने लगती है।
            </div>
          ),
        }





      ]
    },


    // chapter 12 घर्षण

    {
      chapterName: "घर्षण",
      questions: [

        {
          question: "1. घर्षण बल क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ऐसा बल जो गति की विपरीत दिशा में कार्य कर रहा है, और उसकी गति कम कर रहा है, उसे घर्षण बल कहते हैं।
            </div>
          ),
        },
        {
          question: "2. तरल में घर्षण बल किस चीज पर निर्भर करता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> घर्षण बल तरल के सापेक्ष गति पर निर्भर करता है, यह वस्तु की आकृति तथा तरल की प्रकृति पर भी निर्भर करता है।
            </div>
          ),
        },
        {
          question: "3. सर्पी घर्षण क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सर्पी घर्षण वह घर्षण है जो एक वस्तु को दूसरी वस्तु के साथ सरकने या खिसकने पर लगता है।
            </div>
          ),
        },
        {
          question: "4. तरल पदार्थ क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तरल पदार्थ वह पदार्थ है जो अपना आकार बदल सकता है, लेकिन अपना आयतन नहीं बदलता है, जैसे कि पानी, तेल आदि।
            </div>
          ),
        },
        {
          question: "5. कमानीदार तुला क्या होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कमानीदार तुला एक प्रकार का तुला होता है जिसमें वस्तु के वजन को मापने के लिए एक कमानी या स्प्रिंग का उपयोग किया जाता है।
            </div>
          ),
        },
        {
          question: "6. कर्षण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कर्षण बल वह बल है जो किसी वस्तु को एक सतह पर खींचने या सरकाने के लिए लगाया जाता है।
              <p className="ml-16"><b style={{color:"violet"}}> जैसे:—</b> कि एक गाड़ी को खींचने के लिए लगाया जाने वाला बल।</p>
            </div>
          ),
        },
        {
          question: "7. घर्षण बल कैसी सतह पर अधिक होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> घर्षण बल खुरदरी सतह पर अधिक होता है। जब दो सतहें एक दूसरे के संपर्क में आती हैं, तो उनकी खुरदरी सतहें एक दूसरे को रोकती हैं और घर्षण बल उत्पन्न होता है।
            </div>
          ),
        },
        {
          question: "8. घर्षण बल की दिशा क्या होती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> घर्षण बल की दिशा गति की विपरीत दिशा में होती है। जब कोई वस्तु एक सतह पर गति करती है, तो घर्षण बल उस वस्तु की गति को रोकने की कोशिश करता है और उसकी दिशा गति की विपरीत होती है।
            </div>
          ),
        },
        {
          question: "9. क्या बल लगाकर वस्तु की आकृति बदली जा सकती है? उदाहरण दीजिए।",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> हाँ, बल लगाकर वस्तु की आकृति बदली जा सकती है।
              <p className="ml-16"> <b style={{color:"violet"}}> जैसे:—</b> हवा भरे बैलून को बल लगाने से आकृति में परिवर्तन आता है।</p>
            </div>
          ),
        },
        {
          question: "10. राशियाँ क्या है? यह कितने प्रकार के होते हैं?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:-</b>  राशियाँ वे मात्राएँ हैं जिनका मापन किया जा सकता है। 
              </p>
              <p className="ml-14 mt-1"> <b style={{color: "blue"}}> राशियाँ  दो प्रकार के होते हैं: </b></p>
              <ul className="ml-14 mt-1">
                <li> <b >(i) अदिश राशियाँ </b> (जैसे द्रव्यमान, तापमान, समय, घनत्व आदि)</li>
                <li> <b >(ii) सदिश राशियाँ </b>(जैसे बल, वेग, त्वरण आदि)</li>
              </ul>
            </div>
          ),
        },
        {
          question: "11. सदिश राशियाँ क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सदिश राशियाँ वे भौतिक राशियाँ हैं जिनके दो गुण होते हैं: परिमाण (मान) और दिशा।
              <p className="ml-16">
              <b style={{color:"violet"}}> जैसे:—</b> बल, वेग, और त्वरण सदिश राशियाँ हैं।
              </p>
            </div>
          ),
        },
        {
          question: "12. अदिश राशियाँ क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> अदिश राशियाँ वे भौतिक राशियाँ हैं जिनका केवल परिमाण (मान) होता है, लेकिन दिशा नहीं होती है।
              <p className="ml-16">
              <b style={{color:"violet"}}> जैसे:—</b> द्रव्यमान, तापमान, समय, और घनत्व अदिश राशियाँ हैं।
              </p>
            </div>
          ),
        }





      ]
    },

    // chapter 13 ध्वनि


    {
      chapterName: "ध्वनि",
      questions: [

        {
          question: "1. ध्वनि किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ध्वनि एक प्रकार का यांत्रिक तरंग है जो एक माध्यम, जैसे कि हवा, पानी या ठोस पदार्थ, के माध्यम से चलती है और जिसे हम सुन सकते हैं।
            </div>
          ),
        },
        {
          question: "2. कंपन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> किसी वस्तु की अपनी माध्य स्थिति के आगे–पीछे या बाएँ–दाएँ होने वाली गति को कंपन कहते हैं।
            </div>
          ),
        },
        {
          question: "3. आयाम क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> किसी वस्तु की कंपन की अधिकतम विचलन को आयाम कहते हैं।
            </div>
          ),
        },
        {
          question: "4. दोलन क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> दोलन एक वस्तु की नियमित और आवर्ती गति को कहते हैं, जिसमें वस्तु एक स्थिर बिंदु के चारों ओर आगे-पीछे या ऊपर-नीचे चलती है।
            </div>
          ),
        },
        {
          question: "5. आवृत्ति क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रति सेकंड होने वाले दोलनों की संख्या को दोलन की आवृत्ति कहते हैं। आवृत्ति को हर्ट्ज (Hz) में मापा जाता है।
            </div>
          ),
        },
        {
          question: "6. आवर्तकाल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आवर्तकाल एक दोलन के एक पूर्ण चक्र को पूरा करने में लगने वाले समय को कहते हैं।
            </div>
          ),
        },
        {
          question: "7. शोर किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> अप्रिया ध्वनियों को शोर कहते हैं।
            </div>
          ),
        },
        {
          question: "8. ध्वनि किस प्रकार संचारित होती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ध्वनि एक माध्यम के द्वारा संचारित होती है।
              <p className="ml-16"> <b style={{color:"violet"}}> जैसे:—</b> कि हवा, पानी या ठोस पदार्थ।
              </p>
            </div>
          ),
        },
        {
          question: "9. तारत्वता किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तारत्वता ध्वनि की ऊंचाई या स्वर को कहते हैं।
            </div>
          ),
        },
        {
          question: "10. ध्वनि प्रदूषण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> अनावश्यक और अवांछित ध्वनि को ध्वनि प्रदूषण कहते हैं।
              <p className="ml-16">
              <b style={{color:"violet"}}> जैसे:—</b> कि ट्रैफिक की आवाज़, फैक्ट्री की मशीनों की आवाज़, लाउडस्पीकर की तेज़ आवाज़ आदि।
              </p>
            </div>
          ),
        },
        {
          question: "11. प्रबलता क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ध्वनि के आयाम को प्रबलता कहते हैं। प्रबलता की इकाई डेसीबल है। जब किसी कंपित वस्तु का आयाम अधिक होता है तो इसके द्वारा उत्पन्न ध्वनि प्रबल होती है।
            </div>
          ),
        },
        {
          question: "12. मानव कान का बाहरी तथा आंतरिक बनावट में क्या अंतर है? वर्णन कीजिए।",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b><br /> <b style={{ color: "blue" }} className="ml-16">मानव कान की बाहरी बनावट में तीन मुख्य भाग होते हैं:</b>
              <ul className="ml-16">
                <li>(i) बाहरी कान: यह कान का वह हिस्सा होता है जो बाहर दिखाई देता है।</li>
                <li>(ii) कान की नली: यह एक छोटी सी नली होती है जो बाहरी कान को कान के पर्दे से जोड़ती है।</li>
                <li>(iii) कान का पर्दा: यह एक पतली झिल्ली होती है जो कान की नली के अंत में होती है और ध्वनि तरंगों को आंतरिक कान में भेजती है।</li>
              </ul>
              <b style={{ color: "blue" }} className="ml-16">आंतरिक बनावट में तीन मुख्य भाग होते हैं:</b>
              <ul className="ml-16">
                <li>(i) कर्णावर्त: यह एक छोटी सी हड्डी होती है जो कान के पर्दे से जुड़ी होती है और ध्वनि तरंगों को आंतरिक कान में भेजती है।</li>
                <li>(ii) अर्धचक्र: यह तीन अर्धवृत्ताकार नलियाँ होती हैं जो आंतरिक कान में होती हैं और संतुलन बनाए रखने में मदद करती हैं।</li>
                <li>(iii) कर्णकोष: यह एक छोटी सी गुहा होती है जो आंतरिक कान में होती है और ध्वनि तरंगों को मस्तिष्क तक पहुँचाने में मदद करती है।</li>
              </ul>
            </div>
          ),
        }




      ]
    },


    // chapter 14


    {
      chapterName: "विद्युत धारा के रासानिक प्रभाव",
      questions: [

        {
          question: "1. विद्युत धारा क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> विद्युत धारा इलेक्ट्रॉनों की गति या प्रवाह है, जो एक विद्युत परिपथ में होता है। यह इलेक्ट्रॉनों के एक स्थान से दूसरे स्थान तक प्रवाह करने की दर है।
            </div>
          ),
        },
        {
          question: "2. सुचालक क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:-</b> सुचालक एक ऐसा पदार्थ है जो विद्युत धारा को बिना किसी प्रतिरोध के प्रवाहित करने देता है।
              <br />
              <b style={{ color: "blue" }} className="ml-16">सुचालकों की विशेषताएं निम्नलिखित हैं:</b>
              <ul className="list-disc ml-16 text-blue-600">
                <li>सुचालकों में इलेक्ट्रॉनों की गति स्वतंत्र होती है।</li>
                <li>वे विद्युत धारा को आसानी से प्रवाहित करने देते हैं।</li>
                <li>उदाहरण के लिए, तांबा, चांदी और सोना अच्छे सुचालक हैं।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "3. अल्पचालक क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> अल्पचालक एक ऐसा पदार्थ है जो विद्युत धारा को कम प्रतिरोध के साथ प्रवाहित करने देता है, लेकिन यह एक अच्छा चालक नहीं है। अल्पचालकों का प्रतिरोध तापमान पर निर्भर करता है और यह धातुओं की तुलना में अधिक होता है।
            </div>
          ),
        },
        {
          question: "4. विद्युत धारा के रासायनिक प्रभाव से आप क्या समझते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> विद्युत धारा के रासायनिक प्रभाव से तात्पर्य है विद्युत धारा के कारण रासायनिक परिवर्तनों की प्रक्रिया से। जब विद्युत धारा किसी विलयन या पदार्थ से गुजरती है, तो यह रासायनिक अभिक्रियाओं को उत्पन्न कर सकती है।
              <p> 
              <b style={{color:"violet"}} className="ml-16"> जैसे:—</b> कि विद्युत अपघटन।
              </p>
            </div>
          ),
        },
        {
          question: "5. क्या शुद्ध जल विद्युत का चालन करता है यदि नहीं तो इसे चालक बनने के लिए क्या करना होगा?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> शुद्ध जल विद्युत का चालन नहीं करता है, क्योंकि इसमें आयनों की अनुपस्थिति होती है। लेकिन जब इसमें कोई विद्युतीय रूप से सक्रिय पदार्थ जैसे कि नमक, अम्ल या क्षार मिलाया जाता है, तो यह आयनों को उत्पन्न करता है और विद्युत का चालन करने लगता है।
            </div>
          ),
        },
        {
          question: "6. विद्युत धारा प्रवाहित होने की दृष्टि से कितने तरह के पदार्थ होते हैं?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{color: "blue"}}> विद्युत धारा प्रवाहित होने की दृष्टि से पदार्थ तीन प्रकार के होते हैं: </b>
              </p>
              <ul className="ml-16">
                <li> <b>(i) चालक (Conductor):</b> <b style={{color:"violet"}}> जैसे:—</b> कि तांबा, चांदी, सोना आदि।</li>
                <li> <b> (ii) अपचालक (Insulator): </b> <b style={{color:"violet"}}> जैसे:—</b> कि लकड़ी, प्लास्टिक, कांच आदि।</li>
                <li> <b> (iii) अर्धचालक (Semiconductor): </b> <b style={{color:"violet"}}> जैसे:—</b> कि सिलिकॉन, जर्मेनियम आदि।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "7. सुचालक एवं अल्पचालकों में क्या अंतर है?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:-</b> <b style={{color: "blue"}}> सुचालक और अल्पचालक में निम्नलिखित अंतर हैं: </b>
              </p>
              <ul className="ml-14">
                <li>
                  <b style={{ color: "red" }} >सुचालक:</b> विद्युत धारा को आसानी से प्रवाहित करते हैं। इलेक्ट्रॉनों की गति स्वतंत्र होती है। उदाहरण: तांबा, चांदी, सोना आदि।
                </li>
                <li>
                  <b style={{ color: "red" }}>अल्पचालक:</b> विद्युत धारा को कम प्रतिरोध के साथ प्रवाहित करते हैं। इलेक्ट्रॉनों की गति सीमित होती है। उदाहरण: कार्बन, सिलिकॉन, जर्मेनियम आदि।
                </li>
              </ul>
            </div>
          ),
        },
        {
          question: "8. हम्फ्री डेवी कौन थे?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> हम्फ्री डेवी एक प्रसिद्ध ब्रिटिश रसायनज्ञ और आविष्कारक थे। उनका जन्म 17 दिसंबर 1778 को पेंज़ांस, कॉर्नवॉल, इंग्लैंड में हुआ था। डेवी ने कई महत्वपूर्ण खोजें कीं, जिनमें से कुछ प्रमुख हैं:
              <ul>
                <li>डेवी लैंप का आविष्कार: डेवी ने एक विशेष प्रकार का लैंप विकसित किया जो खनन में उपयोग के लिए सुरक्षित था।</li>
                <li>आर्क लैंप का आविष्कार: डेवी ने आर्क लैंप का भी आविष्कार किया, जो एक प्रारंभिक रूप का विद्युत प्रकाश स्रोत था।</li>
                <li>नई तत्वों की खोज: डेवी ने कई नए तत्वों की खोज की, जिनमें पोटैशियम, सोडियम, कैल्शियम, स्ट्रोंटियम, बेरियम, मैग्नीशियम और बोरॉन शामिल हैं।</li>
                <li>इलेक्ट्रोकेमिस्ट्री का विकास: डेवी ने इलेक्ट्रोकेमिस्ट्री के क्षेत्र में महत्वपूर्ण योगदान दिया, जिसमें विद्युत ऊर्जा का उपयोग करके रासायनिक प्रतिक्रियाओं का अध्ययन शामिल है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "9. विलियम निकलसन कौन थे?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> विलियम निकोलसन एक अंग्रेजी रसायनज्ञ और भौतिक विज्ञानी थे। उनका जन्म 1753 में हुआ था और उनकी मृत्यु 1815 में हुई थी। निकोलसन ने विद्युत रसायन के क्षेत्र में महत्वपूर्ण योगदान दिया था।
              <br />
              उन्होंने 1800 में विद्युत विच्छेदन की प्रक्रिया का आविष्कार किया था, जिसमें विद्युत धारा का उपयोग करके एक यौगिक को उसके घटक तत्वों में विभाजित किया जा सकता है।
            </div>
          ),
        },
        {
          question: "10. परमाणु किसे कहते हैं ? यह कितने प्रकार के होते हैं ? उदाहरण के साथ लिखें।",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> परमाणु एक रसायनिक तत्व की मूलभूत इकाई है, जो उस तत्व के सभी गुणों को प्रदर्शित करती है। यह एक अत्यधिक छोटी इकाई है।
              <br />
              परमाणु तीन मुख्य घटकों से बनी होती है:
              <ul className="ml-16 mt-2">
                <li>
                 <b> (i) प्रोटॉन (Proton):</b> प्रोटॉन एक धनात्मक आवेश वाला कण होता है, जो परमाणु के नाभिक में स्थित होता है।
                </li>
                <li>
                   <b>(ii) न्यूट्रॉन (Neutron):</b> न्यूट्रॉन एक तटस्थ आवेश वाला कण होता है, जो परमाणु के नाभिक में प्रोटॉन के साथ स्थित होता है।
                </li>
                <li>
                   <b>(iii) इलेक्ट्रॉन (Electron):</b> इलेक्ट्रॉन एक ऋणात्मक आवेश वाला कण होता है, जो परमाणु के नाभिक के चारों ओर परिक्रमा करता है।
                </li>
              </ul>
              <p className="ml-16 mt-2">
                <b style={{color: "blue"}}> परमाणु मुख्य रूप से तीन प्रकार के होते हैं:</b>
              </p>
              <ul className="ml-16">
                <li>
                   <b>(i) साधारण परमाणु (Ordinary Atom):</b> यह परमाणु एक निश्चित संख्या में प्रोटॉन, न्यूट्रॉन और इलेक्ट्रॉन से बना होता है। <b style={{color:"violet"}}> उदाहरण:</b>  हाइड्रोजन (H) का परमाणु एक प्रोटॉन और एक इलेक्ट्रॉन से बना होता है।
                </li>
                <li>
                   <b>(ii) आइसोटोप (Isotope):</b> यह परमाणु एक ही तत्व के दो या अधिक परमाणु होते हैं, जिनके प्रोटॉन की संख्या समान होती है, लेकिन न्यूट्रॉन की संख्या अलग-अलग होती है। <b style={{color:"violet"}}> उदाहरण:</b> कार्बन-12 (C-12) और कार्बन-14 (C-14) दो आइसोटोप हैं, जिनके प्रोटॉन की संख्या समान होती है, लेकिन न्यूट्रॉन की संख्या अलग-अलग होती है।
                </li>
                <li>
                   <b>(iii) आयन (Ion):</b> यह परमाणु एक या अधिक इलेक्ट्रॉनों को प्राप्त या खो देने के कारण बनता है, जिससे उसका आवेश बदल जाता है। <b style={{color:"violet"}}> उदाहरण:</b> सोडियम (Na) का परमाणु एक इलेक्ट्रॉन खो देने पर सोडियम आयन (Na⁺) बनता है।
                </li>
              </ul>
            </div>
          ),
        },




      ]
    },

    // chapter 15

    {
      chapterName: "कुछ प्राकृतिक परिघटनाएँ",
      questions: [


        {
          question: " 1. बिजली क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली एक प्राकृतिक परिघटना है, जिसमें विद्युत ऊर्जा का प्रवाह होता है।
            </div>
          ),
        },
        {
          question: " 2. बिजली कैसे उत्पन्न होती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली मेघों में विद्युत आवेशों के जमाव के कारण उत्पन्न होती है।
            </div>
          ),
        },
        {
          question: " 3. बिजली के दौरान क्या होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली के दौरान विद्युत ऊर्जा का प्रवाह होता है, जिससे तेज़ प्रकाश और ध्वनि उत्पन्न होती है।
            </div>
          ),
        },
        {
          question: " 4. बादलों में बिजली कैसे उत्पन्न होती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बादलों में बिजली विद्युत आवेशों के जमाव के कारण उत्पन्न होती है।
            </div>
          ),
        },
        {
          question: " 5. बिजली के प्रकार क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली के दो प्रकार हैं: आकाशीय बिजली और मानव निर्मित बिजली।
            </div>
          ),
        },
        {
          question: " 6. आकाशीय बिजली क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आकाशीय बिजली एक प्राकृतिक परिघटना है जिसमें विद्युत ऊर्जा का प्रवाह होता है।
            </div>
          ),
        },
        {
          question: " 7. मानव निर्मित बिजली क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> मानव निर्मित बिजली विद्युत ऊर्जा का मानव द्वारा निर्मित रूप है।
            </div>
          ),
        },
        {
          question: " 8. बिजली के क्या उपयोग हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली के कई उपयोग हैं, जैसे कि घरों में प्रकाश और ऊर्जा की आपूर्ति करना।
            </div>
          ),
        },
        {
          question: " 9. बिजली के क्या नुकसान हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली के कई नुकसान हैं, जैसे कि इसके कारण आग लगने का खतरा होता है।
            </div>
          ),
        },
        {
          question: " 10. बिजली से बचाव के तरीके क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली से बचाव के तरीके हैं जैसे कि बिजली के तारों से दूर रहना और बिजली के उपकरणों का सही तरीके से उपयोग करना।
            </div>
          ),
        },
        {
          question: " 11. भूकंप क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> भूकंप एक प्राकृतिक परिघटना है जिसमें पृथ्वी की सतह पर अचानक से कंपन होता है।
            </div>
          ),
        },
        {
          question: " 12. भूकंप के क्या कारण हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> भूकंप के कई कारण हैं, जैसे कि पृथ्वी की प्लेटों का गतिशील होना।
            </div>
          ),
        },
        {
          question: " 13. भूकंप के क्या प्रभाव हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> भूकंप के कई प्रभाव हैं, जैसे कि इमारतों का ध्वस्त होना और जान-माल की हानि।
            </div>
          ),
        },
        {
          question: " 14. भूकंप से बचाव के तरीके क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> भूकंप से बचाव के तरीके हैं जैसे कि भूकंप के दौरान सुरक्षित स्थान पर जाना और इमारतों को भूकंप प्रतिरोधी बनाना।
            </div>
          ),
        },
        {
          question: " 15. ज्वालामुखी क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ज्वालामुखी एक प्राकृतिक परिघटना है जिसमें पृथ्वी की सतह से लावा और गैसें निकलती हैं।
            </div>
          ),
        },
        {
          question: " 16. ज्वालामुखी के क्या प्रभाव हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ज्वालामुखी के कई प्रभाव हैं, जैसे कि लावा के कारण जंगलों और शहरों का नष्ट होना, और वायुमंडल में गैसों के कारण वायु प्रदूषण।
            </div>
          ),
        },
        {
          question: " 17. ज्वालामुखी से बचाव के तरीके क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ज्वालामुखी से बचाव के तरीके हैं जैसे कि ज्वालामुखी के आसपास के क्षेत्र से दूर रहना, और ज्वालामुखी के विस्फोट के दौरान सुरक्षित स्थान पर जाना।
            </div>
          ),
        },
        {
          question: " 18. तूफान क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तूफान एक प्राकृतिक परिघटना है जिसमें हवा की गति बहुत अधिक होती है, जिससे विनाशकारी प्रभाव पड़ता है।
            </div>
          ),
        },
        {
          question: " 19. तूफान के क्या कारण हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तूफान के कई कारण हैं, जैसे कि तापमान और आर्द्रता के कारण हवा की गति में परिवर्तन।
            </div>
          ),
        },
        {
          question: " 20. तूफान के क्या प्रभाव हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तूफान के कई प्रभाव हैं, जैसे कि इमारतों का ध्वस्त होना, पेड़ों का उखड़ना, और जान-माल की हानि।
            </div>
          ),
        },
        {
          question: " 21. तूफान से बचाव के तरीके क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तूफान से बचाव के तरीके हैं जैसे कि तूफान के दौरान सुरक्षित स्थान पर जाना, और तूफान के पूर्वानुमान के अनुसार आवश्यक कदम उठाना।
            </div>
          ),
        },
        {
          question: " 22. सुनामी क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सुनामी एक प्राकृतिक परिघटना है जिसमें समुद्र के पानी में अचानक से विशाल तरंगें उत्पन्न होती हैं।
            </div>
          ),
        },
        {
          question: " 23. सुनामी के क्या कारण हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सुनामी के कई कारण हैं, जैसे कि भूकंप, ज्वालामुखी विस्फोट, और समुद्री भूकंप।
            </div>
          ),
        },
        {
          question: " 24. सुनामी के क्या प्रभाव हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सुनामी के कई प्रभाव हैं, जैसे कि तटीय क्षेत्रों में व्यापक विनाश, जान-माल की हानि, और समुद्री जीवन को नुकसान।
            </div>
          ),
        },
        {
          question: " 25. सुनामी से बचाव के तरीके क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सुनामी से बचाव के तरीके हैं जैसे कि सुनामी के पूर्वानुमान के अनुसार आवश्यक कदम उठाना, तटीय क्षेत्रों से दूर रहना, और सुरक्षित स्थान पर जाना।
            </div>
          ),
        },
        {
          question: " 26. चक्रवात क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> चक्रवात एक प्राकृतिक परिघटना है जिसमें हवा की गति बहुत अधिक होती है, जिससे विनाशकारी प्रभाव पड़ता है।
            </div>
          ),
        },
        {
          question: " 27. चक्रवात के क्या कारण हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> चक्रवात के कई कारण हैं, जैसे कि तापमान और आर्द्रता के कारण हवा की गति में परिवर्तन।
            </div>
          ),
        },
        {
          question: " 28. चक्रवात के क्या प्रभाव हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> चक्रवात के कई प्रभाव हैं, जैसे कि इमारतों का ध्वस्त होना, पेड़ों का उखड़ना, और जान-माल की हानि।
            </div>
          ),
        },
        {
          question: " 29. ज्वालामुखी के विस्फोट के दौरान क्या होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ज्वालामुखी के विस्फोट के दौरान लावा और गैसें पृथ्वी की सतह से निकलती हैं, जिससे विनाशकारी प्रभाव पड़ता है।
            </div>
          ),
        },
        {
          question: " 30. ज्वालामुखी के अध्ययन से हमें क्या लाभ है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ज्वालामुखी के अध्ययन से हमें ज्वालामुखी के विस्फोट के पूर्वानुमान लगाने में मदद मिलती है, जिससे हम ज्वालामुखी से बचाव के लिए आवश्यक कदम उठा सकते हैं।
            </div>
          ),
        },
        {
          question: " 31. बिजली के दौरान क्या सावधानियाँ बरतनी चाहिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली के दौरान सावधानियाँ बरतने के लिए हमें बिजली के तारों से दूर रहना चाहिए, और बिजली के उपकरणों का सही तरीके से उपयोग करना चाहिए।
            </div>
          ),
        },
        {
          question: " 32. भूकंप के दौरान क्या सावधानियाँ बरतनी चाहिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> भूकंप के दौरान सावधानियाँ बरतने के लिए हमें भूकंप के दौरान सुरक्षित स्थान पर जाना चाहिए, और इमारतों को भूकंप प्रतिरोधी बनाना चाहिए।
            </div>
          ),
        },
        {
          question: " 33. ज्वालामुखी के विस्फोट के दौरान क्या सावधानियाँ बरतनी चाहिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ज्वालामुखी के विस्फोट के दौरान सावधानियाँ बरतने के लिए हमें ज्वालामुखी के आसपास के क्षेत्र से दूर रहना चाहिए, और ज्वालामुखी के विस्फोट के दौरान सुरक्षित स्थान पर जाना चाहिए।
            </div>
          ),
        },
        {
          question: " 34. तूफान के दौरान क्या सावधानियाँ बरतनी चाहिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तूफान के दौरान सावधानियाँ बरतने के लिए हमें तूफान के दौरान सुरक्षित स्थान पर जाना चाहिए, और तूफान के पूर्वानुमान के अनुसार आवश्यक कदम उठाना चाहिए।
            </div>
          ),
        },
        {
          question: " 35. सुनामी के दौरान क्या सावधानियाँ बरतनी चाहिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सुनामी के दौरान सावधानियाँ बरतने के लिए हमें सुनामी के पूर्वानुमान के अनुसार आवश्यक कदम उठाना चाहिए, और तटीय क्षेत्रों से दूर रहना चाहिए।
            </div>
          ),
        },




      ]
    },

    // chapter 16


    {
      chapterName: "प्रकाश",
      questions: [

        {
          question: " 1. प्रकाश क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रकाश एक प्रकार की ऊर्जा है जो हमें देखने में मदद करती है। यह एक विद्युत चुंबकीय तरंग है जिसकी तरंगें विभिन्न रंगों का अनुभव कराती हैं।
            </div>
          ),
        },
        {
          question: " 2. छाया बनने के लिए किन चीजों का होना आवश्यक है?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर :—</b> <b style={{color: "blue"}}> छाया बनने के लिए तीन चीजों का होना आवश्यक है: </b>
              </p>
              <ul className="ml-16">
                <li>(i) प्रकाश: प्रकाश के बिना छाया नहीं बन सकती है।</li>
                <li>(ii) वस्तु: वस्तु के बिना छाया नहीं बन सकती है।</li>
                <li>(iii) पृष्ठभूमि: पृष्ठभूमि के बिना छाया नहीं दिखाई देती है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 3. प्रकाश स्रोत किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जिस वस्तु से प्रकाश निकलता है उसे प्रकाश स्रोत कहते हैं।
              <p className="ml-16">
              <b style={{color:"violet"}}> जैसे:—</b> सूर्य, लालटेन, टॉर्च इत्यादि
              </p>
            </div>
          ),
        },
        {
          question: " 4. प्रकाश स्रोत कितने प्रकार के होते हैं?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{color:"blue"}}>  प्रकाश स्रोत दो प्रकार के होते हैं: </b>
              </p>
              <ul className="ml-16">
                <li> <b> (i) प्राकृतिक प्रकाश स्रोत:— </b> वैसा प्रकाश स्रोत जिसका निर्माण मानव द्वारा नहीं किया गया हो, प्राकृतिक प्रकाश स्रोत कहलाते हैं। <p> <b style={{color:"violet"}}> जैसे:—</b> सूर्य, तारे इत्यादि।</p></li>
                <li> <b> (ii) मानव निर्मित प्रकाश स्रोत:— </b> वैसा प्रकाश स्रोत जिसका निर्माण मानव द्वारा किया गया हो, मानव निर्मित प्रकाश स्रोत कहलाता है। <p> <b style={{color:"violet"}}> जैसे:—</b> मोमबत्ती, लालटेन, बिजली इत्यादि। </p> </li>
              </ul>
            </div>
          ),
        },
        {
          question: " 5. प्रदीप्त वस्तुएँ किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वैसा वस्तु जो प्रकाश उत्सर्जित करता हो, प्रदीप वस्तुएँ कहलाती हैं। जैसे:— सूर्य, तारे, जलती हुई टॉर्च इत्यादि।
            </div>
          ),
        },
        {
          question: " 6. अप्रदीप्त वस्तुएँ किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वैसा वस्तु जो प्रकाश उत्सर्जित नहीं करता हो, अप्रदीप्त वस्तुएँ कहलाती हैं। जैसे:— चंद्रमा, लकड़ी, पत्थर इत्यादि।
            </div>
          ),
        },
        {
          question: " 7. प्रकीर्णन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सूर्य से आती हुई प्रकाश किरणें जब सूक्ष्म कणों पर पड़ती हैं तो वह उनपर पड़ने वाले प्रकाश के कुछ ऊर्जा को अवशोषित कर फिर उसे चारों ओर फैला देती हैं, प्रकाश की इसी घटना को प्रकाश का प्रकीर्णन कहते हैं।
            </div>
          ),
        },
        {
          question: " 8. प्रकाश किरण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> एक सरल रेखा में चलने वाले प्रकाश को प्रकाश किरण कहते हैं। इसे तीर चिन्ह द्वारा दर्शाया जाता है।
            </div>
          ),
        },
        {
          question: " 9. किरण पुंज किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रकाश की किरणों के समूह को किरण पुंज कहते हैं।
            </div>
          ),
        },
        {
          question: " 10. प्रकाश का परावर्तन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रकाश की किरण दर्पण या किसी चिकनी सतह से टकराकर पुनः उसी माध्यम में लौट जाती है, इसी घटना को प्रकाश का परावर्तन कहते हैं।
            </div>
          ),
        },
        {
          question: " 11. समतल दर्पण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जिस दर्पण का एक भाग कलई या रजतित किया गया हो तथा वह आकार में सीधा हो, समतल दर्पण कहलाता है।
            </div>
          ),
        },
        {
          question: " 12. प्रकाश के परावर्तन के नियम किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रकाश की किरण किसी सतह पर परकर जिन नियमों का पालन करते हुए उस सतह से परावर्तित होती है, उन नियमों को परावर्तन के नियम कहते हैं।
            </div>
          ),
        },
        {
          question: " 13. आपतित किरण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आने वाली प्रकाश की किरण को आपतित किरण कहते हैं।
            </div>
          ),
        },
        {
          question: " 14. परावर्तित किरण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सतह से टकराकर वापस लौट जाने वाली किरण को परावर्तित किरण कहते हैं।
            </div>
          ),
        },
        {
          question: " 15. अभिलंब किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आपतन बिंदु पर डाला गया लंब अभिलंब कहलाता है।
            </div>
          ),
        },
        {
          question: " 16. आपतन बिंदु किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आपतित किरण सतह के जिस बिंदु से टकराती है, उसे आपतन बिंदु कहते हैं।
            </div>
          ),
        },
        {
          question: " 17. आपतन कोण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आपतित किरण और अभिलंब के साथ बना कोण आपतन कोण कहलाता है।
            </div>
          ),
        },
        {
          question: " 18. परावर्तन कोण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> परावर्तित किरण और अभिलंब के साथ बना कोण परावर्तन कोण कहलाता है।
            </div>
          ),
        },
        {
          question: " 19. प्रकाश के परावर्तन के कितने नियम है?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{color:"blue"}}>  प्रकाश के परावर्तन के दो नियम हैं: </b>
              </p>
              <ul className="ml-16">
                <li>(i) आपतित किरण, परावर्तित किरण तथा आपतन बिंदु पर डाला गया अभिलंब तीनों एक ही समतल में होते हैं।</li>
                <li>(ii) आपतन कोण और परावर्तन कोण बराबर होते हैं।</li>
              </ul>
            </div>
          ),
        },

        {
          question: " 20. आप अपनी आँखों की देखभाल कैसे करेंगे?",
          answer: (
            <div>
            <p >
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{color: "blue"}}> आँखों की देखभाल करने के लिए निम्नलिखित बातों का ध्यान रखना चाहिए:</b>
              </p>
              <ul className="ml-16 ">
                <li> <b>नियमित जाँच: </b>अपनी आँखों की नियमित जाँच करवाएं। इससे आपको अपनी आँखों की समस्याओं का पता लगाने में मदद मिलेगी।</li>
                <li> <b>स्वच्छता: </b>अपनी आँखों को नियमित रूप से साफ करें। इससे आपकी आँखों में धूल और गंदगी जमा नहीं होगी।</li>
                <li> <b>सूरज की रोशनी से बचाव: </b> सूरज की रोशनी से अपनी आँखों का बचाव करें। सूरज की रोशनी में यूवी किरणें होती हैं जो आपकी आँखों को नुकसान पहुँचा सकती हैं।</li>
                <li> <b>आहार: </b> अपने आहार में विटामिन ए और ओमेगा-3 फैटी एसिड युक्त खाद्य पदार्थों को शामिल करें। ये पोषक तत्व आपकी आँखों के लिए फायदेमंद होते हैं।</li>
                <li> <b>धूम्रपान से बचाव: </b> धूम्रपान से अपनी आँखों का बचाव करें। धूम्रपान आपकी आँखों को नुकसान पहुँचा सकता है।</li>
                <li> <b>नींद: </b> पर्याप्त नींद लें। नींद की कमी आपकी आँखों को थका सकती है।</li>
                <li> <b>आँखों का व्यायाम:</b> अपनी आँखों का व्यायाम करें। इससे आपकी आँखों की मांसपेशियाँ मजबूत होंगी।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 21. मान लीजिए आपके सामने दीवार पर एक फोटो टंगा है। आपका मित्र आपकी आँखों के सामने अपना कॉपी ला देता है। क्या आप फोटो को देख पाएंगे? वर्णन कीजिए।",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जब हमारी आँखों के सामने दीवार पर फोटो टंगी रहती है तो उसके द्वारा परावर्तित प्रकाश हमारी आँखों पड़ते रहता है, जिससे हम उसको देख पाते हैं। जब हमारी आँखों के सामने कोई कॉपी ला दी जाती है तब हम उस दीवार के फोटो को नहीं देख पाते हैं।
            </div>
          ),
        },
        {
          question: " 22. यदि परावर्तित किरण आपतित किरण से 90⁰ का कोण बनाये तो आपतन कोण का मान कितना होगा?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आपतन कोण का मान <b> 45⁰ </b> होगा।
            </div>
          ),
        },
        {
          question: " 23. दो समतल दर्पण का उपयोग क्यों एवं कहाँ किया जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> दो समतल दर्पण का उपयोग पारदर्शी बनाने में किया जाता है, जिनका उपयोग पनडुब्बियों, टैंको तथा बंकरों में छिपे सैनिकों द्वारा बाहर की वस्तुओं को देखने के लिए किया जाता है।
            </div>
          ),
        },
        {
          question: " 24. शंकु का कार्य क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तीव्र प्रकाश के लिए सुग्राही होते हैं तथा रंगों की सूचनाएँ भेजने का कार्य इनके द्वारा होता है।
            </div>
          ),
        },
        {
          question: " 25. अनियमित परावर्तन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> अनियमित परावर्तन एक ऐसी प्रक्रिया है जिसमें प्रकाश की किरणें एक असमान सतह से टकराकर विभिन्न दिशाओं में बिखर जाती हैं।
            </div>
          ),
        },
        {
          question: " 26. मानव नेत्र का एक नामांकित रेखा चित्र बनाइए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> मानव नेत्र का नामांकित रेखा चित्र निम्नलिखित प्रकार से बनता है:
              {/* <img src="path_to_image_of_eye_diagram" alt="Human Eye Diagram" /> */}
              {/* Replace path_to_image_of_eye_diagram with the actual image path */}
            </div>
          ),
        }




      ]
    },

    /// chapter 17

    {
      chapterName: "तारे एवं सौर परिवार",
      questions: [

        {
          question: " 1. सौर परिवार के सबसे बड़े और सबसे छोटा ग्रह का नाम बताइए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सौर परिवार के सबसे बड़े ग्रह का नाम <span style={{ color: "blue" }}>बृहस्पति</span> है, जबकि सबसे छोटे ग्रह का नाम <span style={{ color: "blue" }}>बुध</span> है।
            </div>
          ),
        },
        {
          question: " 2. क्या आकाश में सारे तारे गति करते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> नहीं, आकाश में सारे तारे गति नहीं करते हैं। कुछ तारे गति करते हैं, जबकि अन्य स्थिर रहते हैं।
            </div>
          ),
        },
        {
          question: " 3. कृत्रिम उपग्रह किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कृत्रिम उपग्रह एक मानव-निर्मित वस्तु है जो पृथ्वी या अन्य ग्रहों की परिक्रमा करती है।
            </div>
          ),
        },
        {
          question: " 4. उल्का एवं उल्का पिंड किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> उल्का एक छोटा खगोलीय पिंड है जो अंतरिक्ष से पृथ्वी की ओर आता है और वायुमंडल में प्रवेश करते समय जल जाता है, जिससे एक चमकदार पथ दिखाई देता है।
              <br />
              उल्का पिंड वह पिंड है जो उल्का के जलने के बाद शेष रहता है और पृथ्वी पर गिरता है।
            </div>
          ),
        },
        {
          question: " 5. पृथ्वी के विषुवत रेखा किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पृथ्वी के चारों ओर ठीक मध्य में एक वृत्त की कल्पना की गई है। इसे <span style={{ color: "blue" }}>विषुवत रेखा</span> या भू–मध्य रेखा कहते हैं।
            </div>
          ),
        },
        {
          question: " 6. मंगल, बृहस्पति एवं शनि की संक्षिप्त में चर्चा करें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> मंगल, बृहस्पति और शनि सौर परिवार के तीन महत्वपूर्ण ग्रह हैं:
              <br />
              <span style={{ color: "blue" }}>(I) मंगल:</span> मंगल सौर परिवार का चौथा ग्रह है। इसका आकार छोटा है और इसकी सतह पर पहाड़, घाटियाँ और रेगिस्तान हैं।
              <br />
              <span style={{ color: "blue" }}>(II) बृहस्पति:</span> बृहस्पति सौर परिवार का सबसे बड़ा ग्रह है। इसका आकार बहुत बड़ा है और इसकी सतह पर गैसें और तरल पदार्थ हैं।
              <br />
              <span style={{ color: "blue" }}>(III) शनि:</span> शनि सौर परिवार का छठा ग्रह है। इसका आकार बड़ा है और इसकी सतह पर गैसें और तरल पदार्थ हैं। इसके चारों ओर वलय हैं जो बर्फ और चट्टानों से बने हैं।
            </div>
          ),
        },
        {
          question: " 7. धूमकेतु को परिभाषित करें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> धूमकेतु एक छोटा, बर्फ और धूल से बना खगोलीय पिंड है जो सूर्य की परिक्रमा करता है। जब धूमकेतु सूर्य के निकट आता है, तो इसकी बर्फ पिघलने लगती है और एक पुच्छल तारा जैसी आकृति बनती है।
            </div>
          ),
        },
        {
          question: " 8. क्षुद्र ग्रह किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> क्षुद्र ग्रह एक छोटा खगोलीय पिंड है जो सूर्य की परिक्रमा करता है, लेकिन इसका आकार इतना बड़ा नहीं होता है कि यह एक पूर्ण ग्रह बन सके।
            </div>
          ),
        },
        {
          question: " 9. शुक्र ग्रह के बारे में बताएँ?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> शुक्र ग्रह सौर परिवार का दूसरा ग्रह है। इसका आकार पृथ्वी के आकार के समान है, लेकिन इसकी सतह पर बहुत अधिक गर्मी और दबाव है। शुक्र ग्रह को अक्सर &apos; <span style={{ color: "blue" }}>पृथ्वी की बहन</span>&apos; कहा जाता है।
            </div>
          ),
        },
        {
          question: " 10. ध्रुव तारा किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ध्रुव तारा एक तारा है जो पृथ्वी के उत्तरी ध्रुव के ठीक ऊपर स्थित होता है। यह तारा पृथ्वी के घूर्णन के कारण हमेशा एक ही स्थान पर दिखाई देता है।
            </div>
          ),
        },
        {
          question: " 11. सौर मंडल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सौर मंडल सूर्य और उसके ग्रहों, उपग्रहों, क्षुद्रग्रहों, धूमकेतुओं और अन्य खगोलीय पिंडों का समूह है जो सूर्य की परिक्रमा करते हैं।
            </div>
          ),
        },
        {
          question: " 11. कक्षा किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कक्षा एक ऐसा मार्ग या पथ है जिस पर एक खगोलीय पिंड, जैसे कि ग्रह, उपग्रह या धूमकेतु, किसी अन्य खगोलीय पिंड की परिक्रमा करता है।
            </div>
          ),
        },
        {
          question: " 12. सौरमंडल में ग्रहों की संख्या क्रमावली बताइये?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:-</b> सौरमंडल में ग्रहों की संख्या और उनकी क्रमावली निम्नलिखित है:
              <ul className="ml-14 list-none text-blue-600">
                <li>(I) बुध</li>
                <li>(II) शुक्र</li>
                <li>(III) पृथ्वी</li>
                <li>(IV) मंगल</li>
                <li>(V) बृहस्पति</li>
                <li>(VI) शनि</li>
                <li>(VII) यूरेनस</li>
                <li>(VIII) नेप्च्यून</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 13. संक्षिप्त में पृथ्वी की चर्चा करें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पृथ्वी सौर परिवार का तीसरा ग्रह है और यह एकमात्र ऐसा ग्रह है जहां जीवन पाया जाता है। इसका आकार लगभग गोल है और इसकी सतह पर महासागर, महाद्वीप, पहाड़ और घाटियाँ हैं। पृथ्वी का वायुमंडल ऑक्सीजन और नाइट्रोजन से बना है और इसका तापमान जीवन के लिए उपयुक्त है।
            </div>
          ),
        },
        {
          question: " 14. पृथ्वी पर जीवन होने का क्या कारण है?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color:"blue"}}> पृथ्वी पर जीवन होने के मुख्य कारण हैं:</span>
              </p>
              <ul className="ml-16 text-red-500">
                <li>(I) ठीक तापमान</li>
                <li>(II) जल की उपलब्धता</li>
                <li>(III) उपयुक्त वायुमंडल</li>
                <li>(IV) सूर्य से सही दूरी</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 15. तारामंडल को परिभाषित करें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तारामंडल एक ऐसा क्षेत्र है जिसमें कई तारे, ग्रह, और अन्य खगोलीय पिंड शामिल होते हैं। यह एक विशाल आकाशीय क्षेत्र है जिसमें कई खगोलीय वस्तुएं एक साथ आती हैं।
            </div>
          ),
        },
        {
          question: " 16. प्रकाश की चाल क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रकाश की चाल लगभग <span style={{ color: "blue" }}>300,000 किलोमीटर प्रति सेकंड (किमी/सेकंड)</span> है।
            </div>
          ),
        },
        {
          question: " 17. सूर्य क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सूर्य हमारे सौरमंडल का केंद्रीय तारा है, जो एक विशाल गैसीय गोला है। यह अपने गुरुत्वाकर्षण बल से सौरमंडल के सभी ग्रहों, उपग्रहों और अन्य वस्तुओं को आकर्षित करता है। सूर्य की रोशनी और ऊर्जा पृथ्वी पर जीवन के लिए आवश्यक है।
            </div>
          ),
        },
        {
          question: " 18. चंद्रमा पर पहली बार कदम रखने वाले कौन थे और इसके बाद चंद्रमा पर कौन गया?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> चंद्रमा पर पहली बार कदम रखने वाले <span style={{ color: "blue" }}>नील आर्मस्ट्रांग</span> थे। वह अमेरिकी खगोलयात्री और चंद्रमा पर कदम रखने वाले पहले व्यक्ति थे। इसके बाद चंद्रमा पर जाने वाले <span style={{ color: "blue" }}>बज़ एल्ड्रिन</span> थे, जो चाँद पर उतरने वाले दूसरे व्यक्ति बने।
            </div>
          ),
        },
        {
          question: " 19. ग्रह किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ग्रह एक ऐसा खगोलीय पिंड है जो सूर्य या किसी अन्य तारे की परिक्रमा करता है। ग्रह अपने गुरुत्वाकर्षण बल से अपने आकार को बनाए रखता है और इसकी अपनी कक्षा होती है।
            </div>
          ),
        },
        {
          question: " 20. गैलीलियो ने अपना दूरबीन कब विकसित किया था?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> गैलीलियो ने अपना दूरबीन <span style={{ color: "blue" }}>1609</span> में विकसित किया था।
            </div>
          ),
        },
        {
          question: " 21. ग्रहों के परिक्रमा का आरेख खींचिए जिसमें सूर्य के चारों ओर परिक्रमा करते ग्रहों को दर्शाया गया हो?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> इस प्रश्न के उत्तर के रूप में एक आरेख की आवश्यकता होगी, जिसमें सूर्य के चारों ओर ग्रहों की परिक्रमा को दिखाया जाएगा। आप इसे बनाने के लिए किसी चित्रण उपकरण का उपयोग कर सकते हैं या मैं एक और आरेख बनाने में मदद कर सकता हूँ।
            </div>
          ),
        }





      ]
    },

    /// chapter 18


    {
      chapterName: "वायु तथा जल का प्रदूषण",
      questions: [

        {
          question: " 1. वायु के संघटक क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वायु के संघटक वायु गैसों का मिश्रण है जिसमें 78% नाइट्रोजन 21% ऑक्सीजन 1% अन्य गैस
              <br />
             <b style={{color:"violet"}}> जैसे:—</b> <span style={{ color: "blue" }}>कार्बन डाइऑक्साइड, कार्बन मोनोऑक्साइड, जल–कण, आर्गन, मेथेन</span> इत्यादि।
            </div>
          ),
        },
        {
          question: " 2. पर्यावरण की गुणवत्ता में कमी का उत्तरदायी कौन है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>मानव और उसकी गतिविधियाँ</span>।
            </div>
          ),
        },
        {
          question: " 3. वातावरण की कौन–सी परिस्थितियाँ आजकल उपलब्ध नहीं है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>साफ आकाश, ताजी हवा, साफ जल</span>।
            </div>
          ),
        },
        {
          question: " 4. कौन सा पदार्थ मुख्य वायु प्रदूषक है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>धुँवा</span>।
            </div>
          ),
        },
        {
          question: " 5. धुएँ के मुख्य कारण है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{color:"blue"}}> धुएँ के मुख्य कारण निम्न है:</b>
              <ul className="ml-16">
                <li><span style={{ color: "red" }}>(I) वाहनों का धुँआ</span></li>
                <li><span style={{ color: "red" }}>(II) फैक्ट्रियों और उद्योगों का धुँआ</span></li>
                <li><span style={{ color: "red" }}>(III) जंगलों की आग</span></li>
                <li><span style={{ color: "red" }}>(IV) कूड़ा-कचरा जलाना</span></li>
                <li><span style={{ color: "red" }}>(V) वायु प्रदूषण</span></li>
              </ul>
            </div>
          ),
        },
        {
          question: " 6. वायु प्रदूषण से कौन–सा रोग फैलता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>श्‍वसन संबंधी रोग</span>।
            </div>
          ),
        },
        {
          question: " 7. वायु में कौन सी गैसे उत्सर्जित होती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वायु में <span style={{ color: "blue" }}>कार्बन डाइऑक्साइड, कार्बन मोनोऑक्साइड, नाइट्रोजन ऑक्साइड, धुँआ</span> आदि उत्सर्जित होती है।
            </div>
          ),
        },
        {
          question: " 8. कौन सी गैस रक्त में ऑक्सीजन ग्रहण करने की क्षमता को काम करती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>कार्बन मोनोऑक्साइड</span>।
            </div>
          ),
        },
        {
          question: " 9. धूम–कोहरा क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> धूम-कोहरा एक प्रकार का वायु प्रदूषण है जो वाहनों और उद्योगों से निकलने वाले धुएँ और कोहरे के मिश्रण से बनता है। यह एक खतरनाक वायु प्रदूषक है जो स्वास्थ्य के लिए हानिकारक हो सकता है।
            </div>
          ),
        },
        {
          question: " 10. क्लोरो–फ्लोरो कार्बन के दुष्प्रभाव क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>क्लोरोफ्लोरो (CFC)</span> कार्बन ओजोन परत को नष्ट करते हैं।
            </div>
          ),
        },
        {
          question: " 11. दो साफ इंधनों के नाम लिखिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>C.N.G</span> और <span style={{ color: "blue" }}>L.P.G</span>
            </div>
          ),
        },
        {
          question: " 12. C.N.G का पूरा नाम लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>संपिड़ित प्राकृतिक गैस</span>
            </div>
          ),
        },
        {
          question: " 13. L.P.G का पूरा नाम लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>द्रवित पेट्रोलियम गैस</span>
            </div>
          ),
        },
        {
          question: " 14. C.F.C का पूरा नाम लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>क्लोरो फ्लोरो कार्बन</span>
            </div>
          ),
        },
        {
          question: " 15. अम्ल वर्षा कैसी होती है? इसके प्रभाव की चर्चा कीजिए।",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> अम्ल वर्षा एक प्रकार की वर्षा है जिसमें वायुमंडल में उपस्थित अम्लीय गैसें वर्षा के साथ पृथ्वी पर गिरती हैं।
              <ul className="ml-16">
                <li><span style={{ color: "blue" }}>(I) पारिस्थितिकी तंत्र को नुकसान</span></li>
                <li><span style={{ color: "blue" }}>(II) जल स्रोतों का प्रदूषण</span></li>
                <li><span style={{ color: "blue" }}>(III) मिट्टी का प्रदूषण</span></li>
                <li><span style={{ color: "blue" }}>(IV)स्वास्थ्य पर प्रभाव</span></li>
                <li><span style={{ color: "blue" }}>(V) आर्थिक नुकसान</span></li>
              </ul>
            </div>
          ),
        },
        {
          question: "16. शुद्ध वायु और प्रदूषित वायु में क्या अंतर है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> शुद्ध वायु और प्रदूषित वायु में निम्नलिखित अंतर हैं:
              <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
                <thead>
                  <tr>
                    <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#d4edda" }}>
                      <b>शुद्ध वायु</b>
                    </th>
                    <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f8d7da" }}>
                      <b>प्रदूषित वायु</b>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                    (I)  इसमें ऑक्सीजन, नाइट्रोजन और अन्य गैसें संतुलित मात्रा में होती हैं।
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                    (I)  इसमें हानिकारक गैसें जैसे कि कार्बन मोनोऑक्साइड, सल्फर डाइऑक्साइड और नाइट्रोजन ऑक्साइड होती हैं।
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                    (II)  इसमें कोई हानिकारक गैसें या कण नहीं होते हैं।
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                    (II)  इसमें धूल, धुआं और अन्य हानिकारक कण होते हैं।
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                    (III)  यह स्वास्थ्य के लिए लाभदायक होती है और जीवन के लिए आवश्यक है।
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                    (III)  यह स्वास्थ्य के लिए हानिकारक होती है और जीवन के लिए खतरनाक हो सकती है।
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
        
        {
          question: " 17. हरित गृह प्रभाव किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वायुमंडल में अत्यधिक <span style={{ color: "blue" }}>(CO₂)</span> की उपस्थिति से पर्यावरण पर प्रतिकूल प्रभाव पड़ता है जिसे <span style={{ color: "blue" }}>हरित गृह प्रभाव</span> कहते हैं।
            </div>
          ),
        },
        {
          question: " 18. जल प्रदूषण के क्या-क्या कारण है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जल प्रदूषण के निम्न कारण है:
              <ul className="ml-16 list-none">
                <li><b style={{ color: "blue" }} >(i) जैविक प्रदूषण:</b> नदियों में मलमूत्र बहाना तथा पशुओं को स्नान कराना, लाशें बहाना या अस्थि विसर्जन इत्यादि से जल प्रदूषण होता है।</li>
                <li><b style={{ color: "blue" }} >(ii) रासायनिक प्रदूषण:</b> कई प्रकार के धात्विक पदार्थ  <b style={{color: "violet"}}>  जैसे – </b><span style={{ color: "blue" }}>सीसा, मरकरी, कैडमियम</span> इत्यादि जल को दूषित करते हैं। रासायनिक उर्वरकों के प्रयोग से भी जल प्रदूषण होता है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 19. भोपाल गैस कांड क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> भोपाल गैस कांड भारत के इतिहास में सबसे बड़ी औद्योगिक त्रासदियों में से एक है। यह त्रासदी 3 दिसंबर 1984 को मध्य प्रदेश की राजधानी भोपाल में हुई थी। उस समय यूनियन कार्बाइड के कारखाने से मिथाइल आइसोसाइनाइट (MIC) नामक जहरीली गैस का रिसाव हुआ था, जिससे लगभग 15,000 से अधिक लोगों की जान गई और बहुत सारे लोग अनेक तरह की शारीरिक अपंगता से लेकर अंधेपन के भी शिकार हुए।
            </div>
          ),
        },
        {
          question: " 20. वायु प्रदूषण रोकने के उपाय बताइए?",
          answer: (
            <div>
              <p>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{color: "blue"}}>  वायु प्रदूषण रोकने के उपाय निम्न है: </b></p>
              <ul className="list-none ml-16">
                <li><span style={{ color: "red" }}>(I) वृक्षारोपण करें।</span></li>
                <li><span style={{ color: "red" }}>(II) सार्वजनिक परिवहन का उपयोग करें</span></li>
                <li><span style={{ color: "red" }}>(III) वाहनों की नियमित जांच करें।</span></li>
                <li><span style={{ color: "red" }}>(IV) बिजली की बचत करें।</span></li>
                <li><span style={{ color: "red" }}>(V) कूड़ा-कचरा सही तरीके से निपटाएं।</span></li>
                <li><span style={{ color: "red" }}>(VI) वायु प्रदूषण नियंत्रण कानून का पालन करें।</span></li>
                <li><span style={{ color: "red" }}>(VII) वायु प्रदूषण जागरूकता अभियान चलाएं।</span></li>
              </ul>
            </div>
          ),
        }




      ]
    }





  ];


  //px-6 
  ///max-w-6xl mx-auto px-4 py-12 
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Class 8th Science Question and Answer with Chapter Name</h1>
      {chapters.map((chapter, chapterIndex) => (
        <Chapter
          key={chapterIndex}
          chapter={chapter}
          chapterIndex={chapterIndex + 1} // Add chapter number
        />
      ))}
    </div>
  );
};

// Chapter Component
const Chapter = ({ chapter, chapterIndex }) => {
  const [isOpen, setIsOpen] = useState(false);

  // return (
  //   <div className="border border-gray-300 rounded-lg mb-4">
  //     <h2
  //       className="text-xl font-semibold bg-indigo-200 px-4 py-2 cursor-pointer"
  //       onClick={() => setIsOpen(!isOpen)}
  //     >
  //       {`अध्याय ${chapterIndex}: ${chapter.chapterName}`}
  //     </h2>
  //     {isOpen && (
  //       <div className="px-4 py-2">
  //         {chapter.questions.map((faq, questionIndex) => (
  //           <QuestionAnswer
  //             key={questionIndex}
  //             faq={faq}
  //             questionNumber={`${chapterIndex}.${questionIndex + 1}`} // Generate question number
  //           />
  //         ))}
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <div className="border border-gray-300 rounded-lg mb-4">

      <h2
        className="text-xl font-semibold bg-indigo-200 px-4 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {`अध्याय ${chapterIndex}: ${chapter.chapterName}`}
      </h2>

      {/* Show image if chapter is open */}
      {isOpen && chapter.imageUrl && (
        <div className="flex justify-center my-4">
          <img 
            src={chapter.imageUrl} 
            alt={`Image for ${chapter.chapterName}`} 
            className="w-full md:w-1/2 rounded-lg shadow-md" 
          />
        </div>
      )}

      {/* Show description if chapter is open */}
      {isOpen && chapter.description && (
        <div className="px-4 py-2 text-gray-700 text-md">
          <p>{chapter.description}</p>
        </div>
      )}

      {isOpen && (
        <div className="px-4 py-2">
          {chapter.questions.map((faq, questionIndex) => (
            <QuestionAnswer key={questionIndex} faq={faq} />
          ))}


        </div>

      )}

    </div>
  );

};

// QuestionAnswer Component
const QuestionAnswer = ({ faq, questionNumber }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
    <div >
        {/* <DefaultPage></DefaultPage> */}

        </div>

    <div className="border-b-2 border-gray-300 pb-8 cursor-pointer">
      <h3 className="text-xl font-bold text-red-600 flex justify-between items-center mt-2">
        {`प्रश्‍न: ${faq.question}`}

      </h3>

      {isOpen || <div className="text-gray-600 mt-4 text-xl">{faq.answer}</div>}
    </div>
    </>
 
  );
};

export default FAQ;



































// "use client";
// import { useState } from "react";

// const FAQ = () => {
//   // Class and Chapter Data
//   const classes = [
//     {
//       className: "8th Class",
//       chapters: [
//         {
//           chapterName: "फसल उत्पादन एवं प्रबंधन",
//           questions: [
//             {
//               question: "1. फसल किसे कहते हैं?",
//               answer: (
//                 <div>
//                   <b style={{ color: "green" }}>उत्तर: </b>
//                   जब एक ही किस्म के पौधे किसी स्थान पर बड़े पैमाने पर उगाए जाते हैं तो इसे <b style={{ color: "blue" }}>फसल</b> कहते हैं।
//                 </div>
//               ),
//             },
//             {
//               question: "2. जुताई किसे कहते हैं?",
//               answer: (
//                 <div>
//                   <b style={{ color: "green" }}>उत्तर: </b>
//                   मिट्टी को उलटने-पलटने एवं पोला करने की प्रक्रिया को <b style={{ color: "blue" }}>जुताई</b> कहते हैं।
//                 </div>
//               ),
//             },
//           ],
//         },
//       ],
//     },
//     {
//       className: "9th Class",
//       chapters: [
//         {
//           chapterName: "सजीवों की संरचना और प्रकार",
//           questions: [
//             {
//               question: "1. कोशिका किसे कहते हैं?",
//               answer: (
//                 <div>
//                   <b style={{ color: "green" }}>उत्तर: </b>
//                   कोशिका सभी जीवों का मूलभूत इकाई है जो जीवन की संरचना और कार्य का आधार है।
//                 </div>
//               ),
//             },
//             {
//               question: "2. पादप कोशिका और जंतु कोशिका में क्या अंतर है?",
//               answer: (
//                 <div>
//                   <h3 className="font-bold text-lg mb-2 text-indigo-700">उत्तर:</h3>
//                   <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
//                     <thead>
//                       <tr className="bg-indigo-100">
//                         <th className="border border-gray-400 px-6 py-3 text-left text-gray-700 font-medium">पादप कोशिका</th>
//                         <th className="border border-gray-400 px-6 py-3 text-left text-gray-700 font-medium">जंतु कोशिका</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white">
//                       <tr>
//                         <td className="border border-gray-400 px-6 py-4">कोशिका भित्ति होती है।</td>
//                         <td className="border border-gray-400 px-6 py-4">कोशिका भित्ति नहीं होती।</td>
//                       </tr>
//                       <tr>
//                         <td className="border border-gray-400 px-6 py-4">क्लोरोप्लास्ट होता है।</td>
//                         <td className="border border-gray-400 px-6 py-4">क्लोरोप्लास्ट नहीं होता।</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               ),
//             },
//           ],
//         },
//       ],
//     },
//     {
//       className: "10th Class",
//       chapters: [
//         {
//           chapterName: "गति और बल",
//           questions: [
//             {
//               question: "1. न्यूटन का प्रथम नियम क्या है?",
//               answer: (
//                 <div>
//                   <b style={{ color: "green" }}>उत्तर: </b>
//                   प्रत्येक पिंड अपनी अवस्था में तब तक बना रहता है जब तक कोई बाहरी बल उसे परिवर्तित न करे।
//                 </div>
//               ),
//             },
//             {
//               question: "2. बल किसे कहते हैं?",
//               answer: (
//                 <div>
//                   <b style={{ color: "green" }}>उत्तर: </b>
//                   बल वह क्रिया है जो किसी वस्तु की स्थिति या वेग में परिवर्तन लाती है।
//                 </div>
//               ),
//             },
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Frequently Asked Questions</h1>
//       {classes.map((cls, index) => (
//         <ClassFAQ key={index} classData={cls} />
//       ))}
//     </div>
//   );
// };

// const ClassFAQ = ({ classData }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border border-gray-300 rounded-lg mb-4">
//       <h2
//         className="text-2xl font-semibold bg-green-200 px-4 py-2 cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {classData.className}
//       </h2>
//       {isOpen && (
//         <div className="mt-4">
//           {classData.chapters.map((chapter, index) => (
//             <Chapter key={index} chapter={chapter} chapterIndex={index + 1} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const Chapter = ({ chapter, chapterIndex }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border border-gray-300 rounded-lg mb-4">
//       <h3
//         className="text-xl font-medium bg-indigo-200 px-4 py-2 cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {`अध्याय ${chapterIndex}: ${chapter.chapterName}`}
//       </h3>
//       {isOpen && (
//         <div className="px-4 py-2">
//           {chapter.questions.map((faq, idx) => (
//             <QuestionAnswer key={idx} faq={faq} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const QuestionAnswer = ({ faq }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border-b-2 border-gray-300 pb-4 mb-4">
//       <h4
//         className="text-lg font-medium text-red-600 flex justify-between items-center cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {faq.question}
//         <span>{isOpen ? "-" : "+"}</span>
//       </h4>
//       {isOpen && <div className="text-gray-600 mt-4">{faq.answer}</div>}
//     </div>
//   );
// };

// export default FAQ;
