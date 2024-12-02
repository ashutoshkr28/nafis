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


"use client";
import { useState } from "react";

const FAQ = () => {
  // Chapter data
  const chapters = [

    //chapter first 
    {
      chapterName: " फसल उत्पादन एवं प्रबंधन",
      questions: [
        {
          question: "  फसल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              जब एक ही किस्म के पौधे किसी स्थान पर बड़े पैमाने पर उगाए जाते हैं तो इसे <b style={{ color: 'blue' }}>फसल</b> कहते हैं।
            </div>
          ),
        },
        {
          question: "  जुताई किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
                   मिट्टी को उलटने-पलटने एवं पोला करने की प्रक्रिया को <b style={{ color: 'blue' }}>जुताई</b> कहते हैं।
            </div>
          ),
        },
        {
          question: "  खाद एवं उर्वरक किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
                   वे पदार्थ जिन्हें मिट्टी में पोषक तत्व बनाए रखने के लिए मिलाया जाता है, उन्हें <b style={{ color: 'blue' }}>खाद</b> एवं <b style={{ color: 'blue' }}>उर्वरक</b> कहते हैं।
            </div>
          ),
        },
        {
          question: "  उर्वरक कैसे बनाया जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
                   खाद जैविक प्रक्रिया द्वारा फैक्ट्रियों में बनाया जाता है।
            </div>
          ),
        },
        {
          question: "  फसल चक्रण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
                   फसलों को अदल-बदल कर बोना <b style={{ color: 'blue' }}>फसल चक्रण</b> कहलाता है।
            </div>
          ),
        },
        {
          question: "  खेतों में लगातार फसल उगाने से क्या हानियाँ हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
                   खेतों में लगातार फसल उगाने से खेतों में पोषक तत्वों की कमी हो जाती है।
            </div>
          ),
        },
        {
          question: "  तीन उर्वरकों के नाम लिखें।",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
                   यूरिया, अमोनियम, सल्फेट
            </div>
          ),
        },
        
          {
            question:  " खाद एवं उर्वरक में क्या अंतर है?",
            answer: (
              <div>
               
                <h3 className="font-bold text-lg mb-2 text-indigo-700"> <b className="text-black">उत्तर: </b>खाद और उर्वरक का अंतर:</h3>
                <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-indigo-100">
                      <th className="border border-gray-400 px-6 py-3 text-left text-gray-700 font-medium">खाद</th>
                      <th className="border border-gray-400 px-6 py-3 text-left text-gray-700 font-medium">उर्वरक</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-400 px-6 py-4">(I) एक जैविक पदार्थ है।</td>
                      <td className="border border-gray-400 px-6 py-4">(I) यह एक रासायनिक पदार्थ है।</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-400 px-6 py-4">(II) इसमें सभी प्रकार के पोषक तत्व पाये जाते हैं।</td>
                      <td className="border border-gray-400 px-6 py-4">(II) इसमें विशेष प्रकार के पोषक तत्व पाये जाते हैं।</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-400 px-6 py-4">(III)  यह अपशिष्टों को मिट्टी में दबाकर बनाया जाता है।</td>
                      <td className="border border-gray-400 px-6 py-4">(III) यह फैक्ट्रियों में बनाया जाता है। </td>
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
            question: "  सिंचाई के पारम्परिक तरीके कौन-कौन से हैं?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   सिंचाई के पारम्परिक तरीके निम्न हैं:
                <ul className="list-disc ml-14">
                  <li>मोटर</li>
                  <li>चेन पम्प</li>
                  <li>ढकली</li>
                  <li>रिहट</li>
                </ul>
              </div>
            ),
          },
          {
            question: "  सिंचाई के प्रमुख स्त्रोतों के नाम बताइये।",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   सिंचाई के प्रमुख स्त्रोत निम्न हैं:
                <ul className="list-disc ml-14">
                  <li>कुएँ</li>
                  <li>नलकूप</li>
                  <li>तालाब या झील</li>
                  <li>नदियाँ</li>
                  <li>बांध और नहर आदि</li>
                </ul>
              </div>
            ),
          },
          {
            question: "  उर्वरक किसे कहते हैं? किन्हीं दो उर्वरकों के नाम लिखे।",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   मिट्टी की उर्वरक शक्ति को बढ़ाने वाले तत्वों को <b style={{ color: 'blue' }}>उर्वरक</b> कहते हैं।<br />
                दो उर्वरकों के नाम:
                <ul>
                  <li>यूरिया</li>
                  <li>फास्फेट</li>
                </ul>
              </div>
            ),
          },
          {
            question: "  खरपतवार क्या हैं?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   फसलों के साथ कुछ अनचाहे पौधे भी उग आते हैं। इन पौधों को हम <b style={{ color: 'blue' }}>खरपतवार</b> कहते हैं।
              </div>
            ),
          },
          
          
          {
            question: "  पीड़कनाशी क्या हैं?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   फल या फसलों उत्पादों की हानि पहुंचाने वाले जीवों को मारने वाली रासायनिक दवाइयों को <b style={{ color: 'blue' }}>पीड़कनाशी</b> कहते हैं।
              </div>
            ),
          },
          
          {
            question: "  हार्वेस्टर क्या है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   वह मशीन जिससे फसलों की कटाई की जाती है उसे <b style={{ color: 'blue' }}>हार्वेस्टर</b> कहते हैं।
              </div>
            ),
          },
          
          {
            question: "  दालों की फसलों की जड़ों में कौनसा जीवाणु पाया जाता है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   <b style={{ color: 'blue' }}>राइजोबियम</b> नामक जीवाणु पाया जाता है।
              </div>
            ),
          },
          
          {
            question: "  हरित क्रांति से क्या तात्पर्य है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   कृषि उत्पादन में तेजी से वृद्धि हुई है, इसे <b style={{ color: 'blue' }}>हरित क्रांति</b> कहते हैं।
              </div>
            ),
          },
          
          {
            question: "  कॉम्बाइन मशीन क्या है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   <b style={{ color: 'blue' }}>कॉम्बाइन मशीन</b> वह मशीन है जो हार्वेस्टर तथा थ्रेशर दोनों का कार्य करता है।
              </div>
            ),
          },
          
          {
            question: " थ्रेशर क्या है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   काटी गई फसलों से बीजों या दानों को भूसे से अलग करने की विधि को <b style={{ color: 'blue' }}>थ्रेशर</b> कहते हैं।
              </div>
            ),
          },
          
          {
            question: " खरीफ फसल क्या है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   वह फसल जिन्हें वर्षा ऋतु में बोया जाता है उन्हें <b style={{ color: 'blue' }}>खरीफ फसल</b> कहते हैं।
                <p><b>उदाहरण: </b></p>
                <h1> धान, मक्का, कपास,सोयाबीन,मूंगफली इत्यादि।</h1>
                
                <p style={{ color: "blue" }}><i>नोट:</i> भारत में वर्षा ऋतु सामान्यतः जून से सितंबर तक होती है।</p>
              </div>
            ),
          },
          {
            question: "  रबी फसल क्या है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   शीत ऋतु (अक्टूबर से मार्च तक) उगाई जाने वाली फसलें <b style={{ color: 'blue' }}>रबी फसल</b> कहलाती हैं।
                <p><b>उदाहरण: </b></p>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>गेहूं</li>
                  <li>चना</li>
                  <li>मटर</li>
                  <li>सरसों</li>
                </ul>
              </div>
            ),
          },
          {
            question: " समय-समय पर खेतों में खाद क्यों देनी चाहिए?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   समय-समय पर खेतों में खाद देने के निम्न फायदे हैं:
                <ul className="list-decimal ml-6 text-gray-800">
                  <li><b>मिट्टी की उर्वरता बढ़ती है:</b> खाद में पोषक तत्व होते हैं जो मिट्टी की उर्वरता बढ़ाते हैं। इससे मिट्टी की क्षमता बढ़ती है और वह अधिक पौधों को सहारा दे सकती है।</li>
                  <li><b>पौधों की वृद्धि बढ़ती है:</b> खाद में पोषक तत्व पौधों की वृद्धि को बढ़ावा देते हैं। इससे पौधे अधिक तेजी से बढ़ते हैं और उनकी पत्तियाँ और फल अधिक स्वस्थ होते हैं।</li>
                  <li><b>फसल की गुणवत्ता में सुधार होता है:</b> खाद के उपयोग से फसल की गुणवत्ता में सुधार होता है। इससे फसल का स्वाद, रंग और पौष्टिकता बढ़ती है।</li>
                  <li><b>मिट्टी की संरचना में सुधार होता है:</b> खाद के उपयोग से मिट्टी की संरचना में सुधार होता है। इससे मिट्टी की जल धारण क्षमता बढ़ती है और वह अधिक पौधों को सहारा दे सकती है।</li>
                  <li><b>कीटों और रोगों का प्रभाव कम होता है:</b> खाद के उपयोग से कीटों और रोगों का प्रभाव कम होता है। इससे फसल की सुरक्षा बढ़ती है और वह अधिक स्वस्थ होती है।</li>
                </ul>
              </div>
            ),
          },
                             
          {
            question: " अच्छी फसल के लिए हमें किन-किन बातों पर ध्यान देना चाहिए?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   अच्छी फसल के लिए हमें निम्नलिखित बातों पर ध्यान देना चाहिए:
                <ul>
                  <li><b>मिट्टी की तैयारी:</b> मिट्टी की जाँच करें और उसमें आवश्यक पोषक तत्व मिलाएं। (उदाहरण: गोबर की खाद)</li>
                  <li><b>बीज का चयन:</b> अच्छी गुणवत्ता वाले बीज का चयन करें। (उदाहरण: हाइब्रिड बीज)</li>
                  <li><b>सिंचाई:</b> पौधों को आवश्यक पानी दें। (उदाहरण: ड्रिप सिंचाई)</li>
                  <li><b>उर्वरकों का उपयोग:</b> अच्छी गुणवत्ता वाले उर्वरकों का उपयोग करें। (उदाहरण: यूरिया)</li>
                  <li><b>कीट और रोग नियंत्रण:</b> कीट और रोग की पहचान करें और उनके नियंत्रण के लिए आवश्यक कदम उठाएं। (उदाहरण: कीटनाशकों का उपयोग)</li>
                  <li><b>फसल की देखभाल:</b> फसल की नियमित जाँच करें और उसकी आवश्यकताओं को पूरा करें। (उदाहरण: फसल की पत्तियों की जाँच)</li>
                </ul>
              </div>
            ),
          },
          {
            question: "  फसल का संरक्षण कैसे किया जाता है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   फसल का संरक्षण करने के लिए निम्नलिखित तरीकों का पालन किया जा सकता है:
                <ul>
                  <li><b>कीट और रोग नियंत्रण:</b> कीटनाशकों का उपयोग या जैविक नियंत्रण विधियों का प्रयोग।</li>
                  <li><b>फसल की नियमित जाँच:</b> पौधों को पानी देना, उर्वरकों का उपयोग करना आदि।</li>
                  <li><b>फसल की सुरक्षा:</b> फसल को जानवरों से बचाने के लिए बाड़ लगाना।</li>
                  <li><b>मौसम की भविष्यवाणी:</b> मौसम की भविष्यवाणी करें और उसके अनुसार फसल की देखभाल करें।</li>
                  <li><b>फसल की कटाई और भंडारण:</b> फसल को सही समय पर काटना और उसे सूखे और सुरक्षित स्थान पर भंडारण करना।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "  पादप संकरण क्या है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   पादप संकरण एक ऐसी प्रक्रिया है जिसमें दो या दो से अधिक पौधों के बीच जेनेटिक सामग्री का आदान-प्रदान किया जाता है, जिससे एक नई पौधा प्रजाति का निर्माण होता है।
              </div>
            ),
          },
          {
            question: "  सिंचाई किसे कहते है? इसकी आवश्यकता क्यों होती है?",
            answer: (
              <div>
                <b style={{ color: "blue" }}>सिंचाई की परिभाषा: </b> सिंचाई एक ऐसी प्रक्रिया है जिसमें पौधों को पानी दिया जाता है ताकि वे स्वस्थ और उत्पादक बने रहें।
                <br /><b style={{ color: "blue" }}>सिंचाई की आवश्यकता:</b> सिंचाई की आवश्यकता निम्नलिखित कारणों से होती है:
                <ul>
                  <li><b style={{ color: "blue" }}>पौधों की वृद्धि:</b> पौधों को पानी की आवश्यकता होती है ताकि वे स्वस्थ और उत्पादक बने रहें।</li>
                  <li><b style={{ color: "blue" }}>मिट्टी की नमी:</b> मिट्टी में नमी की कमी होने पर पौधों को पानी देना आवश्यक होता है।</li>
                  <li><b style={{ color: "blue" }}>मौसम की परिस्थितियाँ:</b> शुष्क मौसम में पौधों को पानी देना आवश्यक होता है ताकि वे सूखने से बचें।</li>
                  <li><b style={{ color: "blue" }}>फसल की उत्पादकता:</b> सिंचाई से फसल की उत्पादकता में वृद्धि होती है और फसल की गुणवत्ता में सुधार होता है।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "  जैविक खाद से क्या लाभ है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   जैविक खाद के निम्नलिखित लाभ हैं:
                <ul>
                  <li><b style={{ color: "blue" }}>मिट्टी की उर्वरता में वृद्धि:</b> जैविक खाद मिट्टी की उर्वरता में वृद्धि करती है, जिससे पौधों को आवश्यक पोषक तत्व मिलते हैं।</li>
                  <li><b style={{ color: "blue" }}>पौधों की वृद्धि में वृद्धि:</b> जैविक खाद पौधों की वृद्धि में वृद्धि करती है, जिससे पौधे स्वस्थ और मजबूत होते हैं।</li>
                  <li><b style={{ color: "blue" }}>मिट्टी की संरचना में सुधार:</b> जैविक खाद मिट्टी की संरचना में सुधार करती है, जिससे मिट्टी में पानी का अवशोषण और वायु का संचार बेहतर होता है।</li>
                  <li><b style={{ color: "blue" }}>कीटों और रोगों का नियंत्रण:</b> जैविक खाद कीटों और रोगों का नियंत्रण करने में मदद करती है, जिससे पौधों को नुकसान नहीं पहुंचता है।</li>
                  <li><b style={{ color: "blue" }}>पर्यावरण के अनुकूल:</b> जैविक खाद पर्यावरण के अनुकूल होती है, जिससे मिट्टी, पानी और वायु प्रदूषण नहीं होता है।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "  खेतों की बार-बार सिंचाई करने की आवश्यकता क्यों होती है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   खेतों की बार-बार सिंचाई करने की आवश्यकता निम्नलिखित कारणों से होती है:
                <ul>
                  <li><b style={{ color: "blue" }}>मिट्टी की नमी की कमी:</b> मिट्टी में नमी की कमी होने पर पौधों को पानी की आवश्यकता होती है।</li>
                  <li><b style={{ color: "blue" }}>मौसम की परिस्थितियाँ:</b> शुष्क मौसम में पौधों को पानी की आवश्यकता होती है ताकि वे सूखने से बचें।</li>
                  <li><b style={{ color: "blue" }}>पौधों की वृद्धि:</b> पौधों की वृद्धि के लिए पानी की आवश्यकता होती है।</li>
                  <li><b style={{ color: "blue" }}>मिट्टी की उर्वरता:</b> मिट्टी की उर्वरता बनाए रखने के लिए पानी की आवश्यकता होती है।</li>
                </ul>
              </div>
            ),
          },
          {
            question: " फसलों की उपज में सुधार हेतु महत्वपूर्ण सुझाव दीजिए।",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   फसलों की उपज में सुधार हेतु महत्वपूर्ण सुझाव निम्नलिखित हैं:
                <ul>
                  <li><b style={{ color: "blue" }}>उचित बीज चयन:</b> फसल की आवश्यकताओं के अनुसार उचित बीज का चयन करें।</li>
                  <li><b style={{ color: "blue" }}>मिट्टी की जाँच:</b> मिट्टी की जाँच करें और आवश्यक पोषक तत्वों का उपयोग करें।</li>
                  <li><b style={{ color: "blue" }}>सिंचाई प्रबंधन:</b> सिंचाई का सही तरीके से प्रबंधन करें ताकि पानी की बर्बादी न हो।</li>
                  <li><b style={{ color: "blue" }}>उर्वरकों का उपयोग:</b> उर्वरकों का उपयोग करें लेकिन उनकी मात्रा का ध्यान रखें।</li>
                  <li><b style={{ color: "blue" }}>कीट और रोग नियंत्रण:</b> कीट और रोग का नियंत्रण करें ताकि फसल को नुकसान न हो।</li>
                  <li><b style={{ color: "blue" }}>फसल चक्र:</b> फसल चक्र का पालन करें ताकि मिट्टी की उर्वरता बनी रहे।</li>
                  <li><b style={{ color: "blue" }}>प्रौद्योगिकी का उपयोग:</b> प्रौद्योगिकी का उपयोग करें जैसे कि ड्रिप सिंचाई और प्रीसिजन फार्मिंग।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "  केंचुए को किसानों का मित्र कहा जाता है क्यों?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   केंचुए को किसानों का मित्र कहा जाता है क्योंकि वे मिट्टी की गुणवत्ता में सुधार करते हैं, जिससे पौधों को आवश्यक पोषक तत्व मिलते हैं और मिट्टी की उर्वरता बनी रहती है।
              </div>
            ),
          },
          {
            question: "  जैविकनाशी किसे कहते हैं?",
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
    {
        chapterName: "  सूक्ष्मजीव मित्र एवं शत्रु",
        questions: [
          {
            question: "  सूक्ष्मजीव किसे कहते हैं?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   ऐसे जीव जिन्हें हम नंगी आँखों से नहीं देख सकते, जिन्हें सूक्ष्मदर्शी से देखा जा सकता है उन्हें सूक्ष्मजीव कहते हैं।
              </div>
            ),
          },
          {
            question: "  सूक्ष्मजीवों को कितने वर्गों में बाँटा गया है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   सूक्ष्मजीवों को मुख्य चार वर्गों में बाँटा गया है:
                <ul>
                  <li><b style={{ color: "blue" }}>जीवाणु:</b> जीवाणु एक प्रकार के सूक्ष्मजीव होते हैं जो एककोशिकीय होते हैं।</li>
                  <li><b style={{ color: "blue" }}>कवक:</b> कवक एक प्रकार के सूक्ष्मजीव होते हैं जो बहुकोशिकीय होते हैं।</li>
                  <li><b style={{ color: "blue" }}>प्रोटोजोआ:</b> प्रोटोजोआ एक प्रकार के सूक्ष्मजीव होते हैं जो एककोशिकीय होते हैं।</li>
                  <li><b style={{ color: "blue" }}>शैवाल:</b> शैवाल एक प्रकार के सूक्ष्मजीव होते हैं जो बहुकोशिकीय होते हैं।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "  दूध को दही में परिवर्तित करने वाले जीवाणु का नाम बताइये।",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   <b style={{ color: "blue" }}>लैक्टोबैसिलस</b> जीवाणु दूध को दही में परिवर्तित करने में मदद करते हैं।
              </div>
            ),
          },
          {
            question: "  यीस्ट श्वसन के दौरान कौन-सी गैस उत्पन्न करते हैं?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   यीस्ट श्वसन के दौरान <b style={{ color: "blue" }}>कार्बन डाइऑक्साइड</b> गैस उत्पन्न करते हैं।
              </div>
            ),
          },
          {
            question: "  एंटीबायोटिक क्या है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   <b style={{ color: "blue" }}>एंटीबायोटिक</b> ऐसी औषधि होती है जो जीवाणुओं के वृद्धि को रोक देती है या उन्हें समूल नष्ट कर देती है।
              </div>
            ),
          },
          {
            question: "  पेनिसिलिन की खोज किसने और कब की?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   सन <b style={{ color: "blue" }}>1929</b> में <b style={{ color: "blue" }}>अलेक्जेंडर फ्लेमिंग</b> ने पेनिसिलिन की खोज की।
              </div>
            ),
          },
          {
            question: "  शिशु एवं बच्चों को टीका क्यों लगाया जाता है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   शिशु एवं बच्चों के शरीर में प्रतिरक्षी उत्पन्न करके रोगकारक सूक्ष्मजीव को नष्ट करने के लिए टीका लगाया जाता है। जैसे - हैजा , क्षय आदि बीमारियों को टीके द्वारा रोका जा सकता है।
              </div>
            ),
          },
          {
            question: "  किण्वन किसे कहते हैं?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   किण्वन एक प्रक्रिया है जिसमें फलों के रसों से अल्कोहल या शराब बनाई जाती है इसमें यीस्ट प्राकृतिक शर्करा को निम्नीकरण कर अल्कोहल में परिवर्तित कर देते हैं।
              </div>
            ),
          },
          {
            question: "  उस प्रक्रिया का नाम बताइये जिसमें फलों के रसों से अल्कोहल या शराब बनाई जाती है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   <b style={{ color: "blue" }}>किण्वन</b> प्रक्रिया।
              </div>
            ),
          },
          {
            question: "  संचरणीय रोग किसे कहते हैं?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   सूक्ष्मजीवों द्वारा फैलने वाला रोग को जो एक संक्रमित व्यक्ति में वायु, जल, भोजन या कायिक संपर्क द्वारा फैलते हैं, <b style={{ color: "blue" }}>संचरणीय रोग</b> कहलाते हैं।
              </div>
            ),
          },          
          {
            question: "  जैविक नाइट्रोजन स्थिरिकारक का नाम लिखे?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   <b style={{ color: "blue" }}>राइजोबियम जीवाणु</b> एवं <b style={{ color: "blue" }}>नील हरित शैवाल</b>।
              </div>
            ),
          },
          {
            question: "  वायुमंडल में कितना प्रतिशत नाइट्रोजन गैस है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   <b style={{ color: "blue" }}>78%</b> 
              </div>
            ),
          },
          {
            question: "  संचरणीय रोग का मुख्य कारक क्या है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   <b style={{ color: "blue" }}>घरेलू मक्खी</b>।
              </div>
            ),
          },
          {
            question: "  मलेरिया रोग का वाहक का नाम लिखें?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   <b style={{ color: "blue" }}>मादा एनाफ्लिज मच्छर</b>।
              </div>
            ),
          },
          {
            question: "  ब्रेड या इडली के फूलने का क्या कारण है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   <b style={{ color: "blue" }}>यीस्ट कोशिकाओं की वृद्धि</b>।
              </div>
            ),
          },
          {
            question: "  डेंगू के वायरस का वाहक का नाम लिखिए?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   <b style={{ color: "blue" }}>मादा एडिस मच्छर</b>।
              </div>
            ),
          },
          {
            question: "  टाइफाइड रोग के संचरण का तरीका लिखिए?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   इस रोग का संचरण <b style={{ color: "blue" }}>जल</b> के द्वारा होता है।
              </div>
            ),
          },
          {
            question: "  हैजा रोग के संचरण का तरीका लिखिए?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   इस रोग का संचरण <b style={{ color: "blue" }}>जल या भोजन</b> के द्वारा होता है।
              </div>
            ),
          },
          {
            question: "  मच्छर फैलाने से रोकने के तीन उपाई बताइए?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   मच्छर फैलाने से रोकने के तीन उपाई निम्न है:
                <ul>
                  <li><b style={{ color: "blue" }}>हमें पानी को कहीं भी रुका नहीं रहने देना चाहिए।</b></li>
                  <li><b style={{ color: "blue" }}>इकट्ठा हुए पानी को मिट्टी का तेल या पेट्रोल का छिड़काव करना चाहिए।</b></li>
                  <li><b style={{ color: "blue" }}>हमें आस–पास के जगहों को साफ रखना चाहिए।</b></li>
                </ul>
              </div>
            ),
          },
          {
            question: "  सूक्ष्मजीव हमारे मित्र हैं। कैसे?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   सूक्ष्मजीव हमारे मित्र हैं क्योंकि वे:
                <ul>
                  <li><b style={{ color: "blue" }}>भोजन के उत्पादन में मदद करते हैं।</b></li>
                  <li><b style={{ color: "blue" }}>मिट्टी की उर्वरता में सुधार करते हैं।</b></li>
                  <li><b style={{ color: "blue" }}>रोग प्रतिरोधक क्षमता में सुधार करते हैं।</b></li>
                  <li><b style={{ color: "blue" }}>कचरे के प्रबंधन में मदद करते हैं।</b></li>
                  <li><b style={{ color: "blue" }}>वैक्सीने और दवाओं के उत्पादन में मदद करते हैं।</b></li>
                </ul>
              </div>
            ),
          },
          {
            question: "  यीस्ट और चीनी के साथ मैदे को गूँथ कर कुछ देर छोड़ देने के बाद मैदे का आयतन क्यों बढ़ जाता है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   यीस्ट और चीनी के साथ मैदे को गूँथ कर कुछ देर छोड़ देने के बाद मैदे का आयतन बढ़ जाता है क्योंकि यीस्ट चीनी को <b style={{ color: "blue" }}>कार्बन डाइऑक्साइड</b> और <b style={{ color: "blue" }}>अल्कोहल</b> में परिवर्तित करता है, जिससे मैदे में गैस के बुलबुले बनते हैं और मैदे का आयतन बढ़ जाता है।
              </div>
            ),
          },
          {
            question: "  नमक और चीनी किस प्रकार से खाद्य की रक्षा करते हैं ?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   नमक और चीनी खाद्य की रक्षा करने में मदद करते हैं क्योंकि वे दोनों ही पानी को सोखने की क्षमता रखते हैं। जब नमक या चीनी को खाद्य में मिलाया जाता है, तो वे पानी को सोख लेते हैं और खाद्य में मौजूद बैक्टीरिया और फंगस को बढ़ने से रोकते हैं। इससे खाद्य की गुणवत्ता बनी रहती है और वह खराब नहीं होता।
              </div>
            ),
          },          
          {
            question: "  वैक्सीन का क्या कार्य है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   वैक्सीन में रोग के कारक सूक्ष्मजीव को कमजोरी बनाकर सूक्ष्म मात्रा में शरीर में डाला जाता है फिर सूक्ष्मजीव इतना कमजोर हो जाता है कि रोग उत्पन्न नहीं कर सकता है।
              </div>
            ),
          },
          {
            question: "  रोगवाहक किसे कहा जाता है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   सूक्ष्मजीव जनित रोग कुछ कीटों एवं जन्तुओं के माध्यम से फैलते हैं। वास्तव में ये कीट या जन्तु रोग उत्पन्न करनेवाले सूक्ष्मजीवों के वाहक का कार्य करते हैं। इन्हें <b style={{ color: "blue" }}>रोगवाहक</b> कहते हैं।
              </div>
            ),
          },
          {
            question: "  नाइट्रोजन स्थिरीकरण की उपयोगिता बताएँ?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   नाइट्रोजन स्थिरीकरण से वायुमंडल में नाइट्रोजन के पुनः पूर्ति की प्रक्रिया चलती रहती है और नाइट्रोजन की मात्रा स्थिर रहती है।
              </div>
            ),
          },
          {
            question: "  वायुमंडल में सर्वाधिक मात्रा में कौन-सी गैस पायी जाती है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   वायुमंडल में सर्वाधिक मात्रा में <b style={{ color: "blue" }}>नाइट्रोजन गैस</b> पाया जाता है।
              </div>
            ),
          },
          {
            question: "  खाद्य परिरक्षण किस प्रकार किया जा सकता है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   खाद्य परिरक्षण निम्न प्रकार से किया जाता है:
                <ul>
                  <li><b style={{ color: "blue" }}>निर्जलीकरण</b></li>
                  <li><b style={{ color: "blue" }}>रासायनिक तरीका</b></li>
                  <li><b style={{ color: "blue" }}>नमक और चीनी द्वारा परिरक्षण</b></li>
                  <li><b style={{ color: "blue" }}>तेल एवं सिरके द्वारा परिरक्षण</b></li>
                  <li><b style={{ color: "blue" }}>गर्म एवं ठंडा करके</b></li>
                  <li><b style={{ color: "blue" }}>पॉश्चुरीकरण</b></li>
                  <li><b style={{ color: "blue" }}>भंडारण एवं पैकिंग</b></li>
                </ul>
              </div>
            ),
          },
          {
            question: "  सूक्ष्मजीवों द्वारा होनेवाली हानियों का विवरण दीजिए?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   सूक्ष्मजीवों द्वारा होनेवाली हानियाँ:
                <ul>
                  <li><b style={{ color: "blue" }}>रोग पैदा करना:</b> सूक्ष्मजीव जैसे कि बैक्टीरिया, वायरस और फंगस कई प्रकार के रोग पैदा कर सकते हैं।</li>
                  <li><b style={{ color: "blue" }}>खाद्य का खराब होना:</b> सूक्ष्मजीव जैसे कि बैक्टीरिया और फंगस खाद्य को खराब कर सकते हैं।</li>
                  <li><b style={{ color: "blue" }}>पेयजल का प्रदूषण:</b> सूक्ष्मजीव जैसे कि बैक्टीरिया और वायरस पेयजल को प्रदूषित कर सकते हैं।</li>
                  <li><b style={{ color: "blue" }}>कृषि उत्पादों का नुकसान:</b> सूक्ष्मजीव जैसे कि फंगस और बैक्टीरिया कृषि उत्पादों को नुकसान पहुँचा सकते हैं।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "  रोगकारक सूक्ष्मजीव हमारे शरीर में किस प्रकार प्रवेश करते हैं?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   रोगकारक सूक्ष्मजीव हमारे शरीर में निम्नलिखित तरीकों से प्रवेश कर सकते हैं:
                <ul>
                  <li><b style={{ color: "blue" }}>वायुमार्ग:</b> जब हम संक्रमित व्यक्ति के साथ सांस लेते हैं या संक्रमित व्यक्ति के द्वारा छोड़े गए ड्रॉपलेट्स के संपर्क में आते हैं।</li>
                  <li><b style={{ color: "blue" }}>जलमार्ग:</b> जब हम संक्रमित जल पीते हैं या संक्रमित जल में नहाते हैं।</li>
                  <li><b style={{ color: "blue" }}>आहार:</b> जब हम संक्रमित भोजन खाते हैं या संक्रमित पेय पदार्थों का सेवन करते हैं।</li>
                  <li><b style={{ color: "blue" }}>त्वचा:</b> जब हम संक्रमित व्यक्ति के संपर्क में आते हैं या संक्रमित वस्तुओं को छूते हैं।</li>
                  <li><b style={{ color: "blue" }}>कीट और जानवर:</b> जब कीट और जानवर संक्रमित होते हैं और हमारे संपर्क में आते हैं।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "  फफूँद जीवाणु पर किस प्रकार प्रभाव डालती है?",
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
        chapterName: " संश्लेषित रेशे और प्लास्टिक",
        questions: [
          {
            question: "  कपड़े कितने प्रकार के प्राप्त रेशों से बनता है?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर: </b>
                   कपड़े दो प्रकार के रेशों से बनता है:
                <ul>
                  <li><b style={{ color: "blue" }}>प्राकृतिक रेशे</b></li>
                  <li><b style={{ color: "blue" }}>कृत्रिम रेशे</b></li>
                </ul>
              </div>
            ),
          },    
          {
                question: " कुछ प्राकृतिक रेशों एवं उनके स्रोतों के नाम लिखिए।",
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
                question: "  संश्लेषित रेशे किसे कहते हैं?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   ऐसे रेशे जो मनुष्य स्वयं तैयार करता है <b style={{ color: "blue" }}>संश्लेषित रेशे</b> कहलाते हैं।
                  </div>
                ),
              },
              {
                question: "  उसे संश्लेषित रेशे के नाम बताइए जिसका तार इस्पात के तार से भी मजबूत होता है?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                  <b style={{ color: "blue" }}>नायलॉन</b>।
                  </div>
                ),
              },
              {
                question: "  संश्लेषित रेशों के एक हानिकारक गुण लिखें?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   संश्लेषित रेशों से बने वस्त्र में यदि आग लग जाए तो कपड़ा और पहनने वाला व्यक्ति के शरीर से चिपक जाता है।
                  </div>
                ),
              },
              {
                question: "  पेट क्या है?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   एक बहुत सुपरिचित प्रकार का पॉलिएस्टर है, जिसका उपयोग बोतले, बर्तन, फिल्म, तार और अन्य उपयोगी उत्पादों के निर्माण के लिए किया जाता है।
                  </div>
                ),
              },
              {
                question: "  ऐक्रिलिक क्या है?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   ऐसे ऊन जो प्राकृतिक स्रोतों से न प्राप्त कर संश्लेषित किए जाते हैं, उन्हें <b style={{ color: "blue" }}>ऐक्रिलिक</b> कहते हैं। इनसे ऊनी वस्त्र बनाए जाते हैं।
                  </div>
                ),
              },
              {
                question: "  संश्लेषित रेशों के गुण लिखिए।",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   संश्लेषित रेशों के गुण निम्नलिखित हैं:
                    <ul>
                      <li><b style={{ color: "blue" }}>यह शीघ्र सूखते हैं।</b></li>
                      <li><b style={{ color: "blue" }}>अधिक चलाऊ कम महंगे और आसानी से उपलब्ध होते हैं।</b></li>
                      <li><b style={{ color: "blue" }}>यह रख रखाव में सुविधाजनक होते हैं।</b></li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "  प्लास्टिक कितने प्रकार के होते हैं?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   प्लास्टिक दो प्रकार के होते हैं:
                    <ul>
                      <li><b style={{ color: "blue" }}>थर्मोप्लास्टिक</b></li>
                      <li><b style={{ color: "blue" }}>थर्मोसेटिंग प्लास्टिक</b></li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "  सबसे अधिक ऊष्मा सहने की क्षमता वाले प्लास्टिक का नाम लिखिए।",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                  <b style={{ color: "blue" }}>मेलामाइन</b>।
                  </div>
                ),
              },
              {
                question: "  थर्मोप्लास्टिक और थर्मोसेटिंग प्लास्टिक में क्या अंतर है?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   थर्मोप्लास्टिक और थर्मोसेटिंग प्लास्टिक में निम्नलिखित अंतर हैं:
                    <ul>
                      <li><b style={{ color: "blue" }}>थर्मोप्लास्टिक:</b> यह गर्म करने पर विकृत हो जाते हैं। ये सरलता पूर्वक मुड़ जाते हैं। इनका उपयोग खिलौने और बर्तनों के बनाने में किया जाता है।</li>
                      <li><b style={{ color: "blue" }}>थर्मोसेटिंग प्लास्टिक:</b> यह गर्म करने पर विकृत नहीं होते हैं। यह मुड़ते नहीं हैं। इनसे बर्तनों के हत्थे जैसा गर्मी सहने वाला सामान बनाए जाते हैं।</li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "  आग बुझाने वाले कर्मचारियों के परिधानों पर किस पदार्थ की परत चढ़ी होती है और क्यों?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                  <b style={{ color: "blue" }}>मेलामाइन</b> की, क्योंकि ये आग का प्रतिरोधक है।
                  </div>
                ),
              },
              {
                question: "  रेशा का नाम बताइए जो :",
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
                question: "  ऊन की पहचान क्या है?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   यह धीरे-धीरे जलती है। जलते समय इसमें से पंखों के जलने के समान गंध निकलती है। जलने के उपरांत काले रंग के गुब्बारे जैसा अवशिष्ट पदार्थ रह जाता है।
                  </div>
                ),
              },
              {
                question: "  टेरीलीन क्या है?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                  <b style={{ color: "blue" }}>टेरीलीन</b> एक लोकप्रिय पॉलिएस्टर है।
                  </div>
                ),
              },
              
              {
                question: "  सूती कपड़ों को नमीयुक्त जगहों पर रखने से क्या प्रभाव पड़ता है?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   नमीयुक्त जगहों पर रखने से <b style={{ color: "blue" }}>फफूँद</b> लग जाती है।
                  </div>
                ),
              },
              {
                question: "  नायलॉन का निर्माण किन चीजों से होता है?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   <b style={{ color: "blue" }}>कोयला, जल और वायु</b> से यह बनता है। यह रेशा मजबूत, लचीला और हल्का होता है।
                  </div>
                ),
              },
              {
                question: "  कृत्रिम रेशा किसे कहते हैं?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   आज के युग में नवीन रासायनिक रेशों का आविष्कार किया गया है, जिसे <b style={{ color: "blue" }}>कृत्रिम या मानव निर्मित रेशा</b> कहते हैं।
                  </div>
                ),
              },
              {
                question: "  रेशम की पहचान किस प्रकार होती है?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   रेशम हवा में जल्दी जल जाती है और जलते समय उसमें से पंखों या बालों के जलने के समान गंध निकलती है। जले हुए किनारों पर चिपचिपे दाने पड़ जाते हैं।
                  </div>
                ),
              },
              {
                question: "  संश्लेषित रेशों के उदाहरण क्या हैं?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   संश्लेषित रेशों के उदाहरण <b style={{ color: "blue" }}>नायलॉन, पॉलिएस्टर, और एक्रिलिक</b> हैं।
                  </div>
                ),
              },
              {
                question: "  प्लास्टिक के उपयोग क्या हैं?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   प्लास्टिक के उपयोग विभिन्न हैं, जैसे कि <b style={{ color: "blue" }}>पैकेजिंग, फर्नीचर, ऑटोमोबाइल, और चिकित्सा उपकरणों</b> में।
                  </div>
                ),
              },
              {
                question: "  संश्लेषित रेशों और प्लास्टिक के नुकसान क्या हैं?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   संश्लेषित रेशों और प्लास्टिक के नुकसान हैं:
                    <ul>
                      <li><b style={{ color: "blue" }}>पर्यावरण प्रदूषण</b></li>
                      <li><b style={{ color: "blue" }}>जानवरों के लिए हानिकारक</b></li>
                      <li><b style={{ color: "blue" }}>गैर-बायोडिग्रेडेबल होना</b></li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "  रेशम किस प्रकार प्राप्त किया जाता है?",
                answer: (
                  <div>
                    <b style={{ color: "green" }}>उत्तर: </b>
                   रेशम प्राप्त करने की प्रक्रिया निम्नलिखित है:
                    <ul>
                      <li><b style={{ color: "blue" }}>रेशमकीट का पालन:</b> रेशमकीट के अंडों को उबालकर निकाला जाता है और उन्हें एक विशेष कमरे में रखा जाता है जहां वे 3-4 दिनों में बच्चे में बदल जाते हैं।</li>
                      <li><b style={{ color: "blue" }}>कोकून का निर्माण:</b> रेशमकीट के बच्चे पत्तियों को खाकर बड़े होते हैं और लगभग 30 दिनों में वे कोकून बनाने लगते हैं।</li>
                      <li><b style={{ color: "blue" }}>कोकून का संग्रह:</b> जब रेशमकीट कोकून बना लेता है, तो उसे सावधानी से इकट्ठा किया जाता है।</li>
                      <li><b style={{ color: "blue" }}>कोकून का उबालना:</b> इकट्ठे किए गए कोकून को उबालकर रेशमकीट को मार दिया जाता है।</li>
                      <li><b style={{ color: "blue" }}>रेशम का निकालना:</b> उबले हुए कोकून से रेशम को निकाला जाता है। यह प्रक्रिया हाथ से या मशीन की मदद से की जा सकती है।</li>
                      <li><b style={{ color: "blue" }}>रेशम का साफ़ करना:</b> निकाले गए रेशम को साफ़ किया जाता है और उसे सुखाया जाता है।</li>
                      <li><b style={{ color: "blue" }}>रेशम का बुनना:</b> साफ़ और सूखे रेशम को बुनकर कपड़ा बनाया जाता है।</li>
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
              question: " पदार्थ किसे कहते हैं?",
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
              question: " पदार्थ कितनी अवस्थाओं में पाया जाता है?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर: </b>
                   पदार्थ तीन अवस्थाओं में पाया जाता है:
                  <ul className="list-decimal ml-6 text-gray-800">
                    <li><b style={{ color: 'blue' }}>ठोस</b> </li>
                    <li><b style={{ color: 'blue' }}>द्रव्य</b> </li>
                    <li><b style={{ color: 'blue' }}>गैस</b> </li>
                  </ul>
            
                  <b style={{ color: 'blue' }}>ठोस: </b> पदार्थ की वह अवस्थाएँ जिनका आकार एवं आयतन दोनों निश्‍चित हो। <br />
                  <b>जैसे:</b> पत्थर, फुटबॉल इत्यादि।
                  <br />
            
                  <b style={{ color: 'blue' }}>द्रव्य: </b> पदार्थ की वह अवस्थाएँ जिनका आकार अनिश्‍चित एवं आयतन निश्‍चित हो। <br />
                  <b>जैसे:</b> पानी, डीजल, पेट्रोल इत्यादि।
                  <br />
            
                  <b style={{ color: 'blue' }}>गैस: </b> पदार्थ की वह अवस्थाएँ जिनका आकार एवं आयतन दोनों अनिश्‍चित हो। <br />
                  <b>जैसे:</b> कार्बन डाई ऑक्साइड, नाइट्रोजन गैस।
                </div>
              ),
            },
               {
                question: " धातु किसे कहते हैं?",
                answer: (
                  <div>
                    <p>
                      <b style={{ color: "green" }}>उत्तर: </b>
                   वे पदार्थ जिसमें विशेष प्रकार की चमक हो और इलेक्ट्रॉन
                      त्याग कर धन आयन बनाते हैं, एवं धातुओं को पीट-पीटकर चौड़ा किया जा सकता
                      है। <br />
                      <i>जैसे:</i> सोना, चांदी, सोडियम।
                    </p>
                  </div>
                ),
              },
              {
                question: " अधातु किसे कहते हैं?",
                answer: (
                  <div>
                    <p>
                      <b style={{ color: "green" }}>उत्तर: </b>
                   वे पदार्थ जिसमें विशेष प्रकार की चमक नहीं होती है तथा
                      अधातु को पीटने पर भंगुर हो जाते हैं। <br />
                      <i>जैसे:</i> ऑक्सीजन, सल्फर, क्लोरीन, ब्रोमीन इत्यादि।
                    </p>
                  </div>
                ),
              },
              {
                question: " अक्रिय धातु किसे कहते हैं?",
                answer: (
                  <div>
                    <p>
                      <b style={{ color: "green" }}>उत्तर: </b>
                   कुछ धातुएँ प्रकृति में स्वतंत्र अवस्था में पाई जाती हैं
                      जिन्हें अक्रिय धातु कहते हैं। <br />
                      <i>जैसे:</i> सोना, चाँदी और प्लेटिनियम।
                    </p>
                  </div>
                ),
              },
              {
                question: " धातु और अधातु में क्या अंतर है?",
                answer: (
                  <div>
                    <p>
                      <b style={{ color: "green" }}>उत्तर: </b>
                   धातु और अधातु में निम्न अंतर है:
                    </p>
                    <ul className="list-disc ml-6 text-gray-800">
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
                    </ul>
                  </div>
                ),
              },
              {
                question: " आघातवर्ध्यता किसे कहते हैं?",
                answer: (
                  <div>
                    <p>
                      <b style={{ color: "green" }}>उत्तर: </b>
                   जिन धातुओं को पीटकर चादर बनाई जाती है, उसे धातुओं के
                      गुण को आघातवर्ध्यता कहते हैं।
                    </p>
                    <p>आघातवर्ध्यता के कुछ मुख्य लक्षण हैं:</p>
                    <ul className="list-disc ml-6 text-gray-800">
                      <li>पीटने पर आकार बदलना: आघातवर्ध्य धातुएँ टूटती नहीं हैं।</li>
                      <li>दबाने पर आकार बदलना: आघातवर्ध्य धातुएँ दबाने पर भी आकार बदलती हैं।</li>
                      <li>टूटने की प्रतिरोधकता रखती हैं।</li>
                    </ul>
                    <p>आघातवर्ध्यता के उदाहरण:</p>
                    <ul className="list-disc ml-6 text-gray-800">
                      <li>सोना</li>
                      <li>चाँदी</li>
                      <li>ताँबा</li>
                    </ul>
                  </div>
                ),
              },
              {
                question: " कॉपर जिंक को उसके लवण के विलयन से विस्थापित नहीं कर सकता है?",
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
                question: " तन्यता किसे कहते हैं?",
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
                question: " कॉपर में जंग लगता है तो उसका रंग कैसा होता है?",
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
                  question: " अपरूप किसे कहते हैं? कार्बन के दो अपरूपों के नाम लिखें?",
                  answer: (
                    <div>
                      <p>
                        <b style={{ color: "green" }}>उत्तर: </b>
                   एक ही तत्व के अलग-अलग रूपों को अपरूप कहते हैं। <br />
                        <b>कार्बन के दो अपरूप:</b> 
                      </p>
                      <ul className="list-disc ml-6 text-gray-800">
                        <li>हीरा</li>
                        <li>ग्रेफाइट</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  question: " मिश्र धातु किसे कहते हैं?",
                  answer: (
                    <div>
                      <p>
                        <b style={{ color: "green" }}>उत्तर: </b>
                   धातुओं और अधातुओं के मिश्रण से बने पदार्थ मिश्र धातु
                        कहलाते हैं।
                      </p>
                      <p><b>उदाहरण:</b></p>
                      <ul className="list-disc ml-6 text-gray-800">
                        <li>इस्पात: लोहे में कार्बन मिलाकर बनाया जाता है।</li>
                        <li>पीतल: तांबे में जस्ता मिलाकर बनाया जाता है।</li>
                        <li>कांसा: तांबे में टिन मिलाकर बनाया जाता है।</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  question: " धात्विक ऑक्साइड की प्रकृति कैसी होती है?",
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
                  question: " अधात्विक ऑक्साइड की प्रकृति कैसी होती है?",
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
                  question: " धातु अम्ल से अभिक्रिया करके कौन सा गैस उत्पन्न करते हैं?",
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
                  question: " पॉप ध्वनि के साथ जलने वाले गैस का नाम लिखिए?",
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
                  question: " एक ऐसे धातु के नाम लिखें जो कमरे के ताप पर द्रव्य अवस्था में पाया जाता है?",
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
                  question: " दो ऐसे धातु का नाम बताइए जिसे चाकू से काटा जा सकता है?",
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
                  question: " मैग्नीशियम रिबन को वायु में जलने पर क्या होता है?",
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
                  question: " पॉप ध्वनि किसे कहते हैं?",
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
                  question: " विस्थापन अभिक्रिया किसे कहते हैं?",
                  answer: (
                    <div>
                      <p>
                        <b style={{ color: "green" }}>उत्तर: </b>
                   ऐसी अभिक्रिया जिसमें अधिक क्रियाशील धातु कम क्रियाशील
                        धातु को उसके यौगिक से बाहर कर देता है, ऐसी अभिक्रिया को <b style={{ color: 'blue' }}>विस्थापन अभिक्रिया</b>
                        कहते हैं।
                      </p>
                      <p>
                        <b>उदाहरण:</b>
                      </p>
                      <p>
                        मान लीजिए हमारे पास एक लोहे की कील है जिसे हम कॉपर सल्फेट के घोल में
                        डालते हैं। कुछ समय बाद हम देखेंगे कि लोहे की कील पर तांबे की एक परत
                        जम गई है और घोल का रंग हरा हो गया है।
                      </p>
                      <p>
                        <b style={{ color: 'blue' }}>इस अभिक्रिया को हम निम्न रासायनिक समीकरण से दर्शा सकते हैं:</b>
                      </p>
                      <p className="font-mono mt-2" style={{ color: 'brown' }}>
                        Fe (s) + CuSO₄ (aq) → FeSO₄ (aq) + Cu (s)
                      </p>
                      <ul className="list-disc ml-6 text-gray-800">
                        <li><b style={{ color: 'red' }}>Fe (s):</b> लोहा (ठोस अवस्था में)</li>
                        <li><b style={{ color: 'red' }}>CuSO₄ (aq):</b> कॉपर सल्फेट (जलीय घोल में)</li>
                        <li><b style={{ color: 'red' }}>FeSO₄ (aq):</b> आयरन सल्फेट (जलीय घोल में)</li>
                        <li><b style={{ color: 'red' }}>Cu (s):</b> तांबा (ठोस अवस्था में)</li>
                      </ul>
                      <p>
                        <b style={{ color: 'blue' }}>इस अभिक्रिया में क्या हुआ:</b>
                      </p>
                      <ul className="list-disc ml-6 text-gray-800">
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
                  question: " सोडियम और पोटेशियम को खुला वायु में छोड़ने पर क्या होता है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                   सोडियम और पोटेशियम को खुला वायु में छोड़ने पर <b style={{ color: 'red' }}>आग पकड़ लेता है</b>।
                    </div>
                  ),
                },
                
                {
                  question: " आभूषण बनाने में कितने कैरेट सोने का उपयोग किया जाता है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                   आभूषण बनाने में <b style={{ color: 'blue' }}>24 कैरेट सोने</b> का उपयोग किया जाता है।
                    </div>
                  ),
                },
                
                {
                  question: " सबसे सरल हाइड्रोकार्बन का नाम लिखें?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                   सबसे सरल हाइड्रोकार्बन <b style={{ color: 'blue' }}>मीथेन (CH₄)</b> है।
                    </div>
                  ),
                },
                
                {
                  question: " हाइड्रोकार्बन क्या है? किन्ही तीन हाइड्रोकार्बन का नाम लिखें?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                   हाइड्रोजन तथा कार्बन से बने यौगिक को <b style={{ color: 'purple' }}>हाइड्रोकार्बन</b> कहते हैं।
                      <br />
                      <b>तीन हाइड्रोकार्बन का नाम निम्न है:</b>
                      <ul className="list-decimal ml-6 text-gray-800">
                        <li><b style={{ color: 'orange' }}>मीथेन</b></li>
                        <li><b style={{ color: 'orange' }}>एथेन</b></li>
                        <li><b style={{ color: 'orange' }}>प्रोपेन</b></li>
                      </ul>
                    </div>
                  ),
                },
                
                {
                  question: " सोल्डर क्या है? और कहाँ उपयोग होता है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                   सोल्डर एक मिश्र धातु है जो टीन और लैड के मिश्रण से बनाया जाता है। इसे <b style={{ color: 'brown' }}>बिजली के तारों को जोड़ने</b> में उपयोग किया जाता है।
                    </div>
                  ),
                },
                
                {
                  question: " हीरे और ग्रेफाइट के गुणों में क्या अंतर होता है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                  
                      <ul className="list-decimal ml-6 text-gray-800">
                        <li><b style={{ color: 'blue' }}>हीरा</b>: रंगहीन, पारदर्शी, ठोस तथा कठोर होता है। यह विद्युत का <b style={{ color: 'red' }}>कुचालक</b> होता है।</li>
                        <li><b style={{ color: 'blue' }}>ग्रेफाइट</b>: काला, चमकदार, ठोस, बहुत मुलायम, चिकना और फिसलदार होता है। यह विद्युत का <b style={{ color: 'blue' }}>सुचालक</b> होता है।</li>
                      </ul>
                    </div>
                  ),
                },
                
                {
                  question: " मिश्र धातुओं के बनाने के क्या फायदा है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                   मिश्र धातु के बनाने के निम्न <b style={{ color: 'purple' }}>फायदा</b> हैं:
                      <ul className="list-decimal ml-6 text-gray-800">
                        <li><b style={{ color: 'blue' }}>मिश्र धातु तत्वों के मुकाबले अधिक मजबूत और कठोर होता है।</b></li>
                        <li><b style={{ color: 'blue' }}>मिश्र धातु पर जंग नहीं लगता है।</b></li>
                        <li><b style={{ color: 'blue' }}>मिश्र धातुओं से उपयोगी वस्तुएँ बनायी जाती हैं।</b></li>
                      </ul>
                    </div>
                  ),
                },
                
                {
                  question: " ध्वनिकता क्या है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                   धातुओं को कठोर सतह से टकराने पर एक प्रकार की आवाज उत्पन्न होती है, जिसे <b style={{ color: 'red' }}>ध्वनिकता</b> कहा जाता है।
                    </div>
                  ),
                },
                {
                  question: " लोहे पर जंग लगने का मुख्य कारण क्या है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                   लोहे पर जंग लगने का मुख्य कारण <b style={{ color: 'red' }}>ऑक्सीजन और नमी</b> की उपस्थिति है। जब लोहा पानी और हवा के संपर्क में आता है, तो यह ऑक्सीजन के साथ अभिक्रिया करके आयरन ऑक्साइड बनाता है, जिसे हम <b style={{ color: 'blue' }}>जंग</b> कहते हैं।
                      <br />
                      <b>जंग लगने की प्रक्रिया:</b>
                      <ul className="list-decimal ml-6 text-gray-800">
                        <li><b style={{ color: 'purple' }}>लोहा पानी और ऑक्सीजन</b> के संपर्क में आता है।</li>
                        <li><b style={{ color: 'purple' }}>पानी और ऑक्सीजन</b> लोहे के साथ रासायनिक अभिक्रिया करते हैं।</li>
                        <li><b style={{ color: 'purple' }}>इस अभिक्रिया</b> से लोहे की सतह पर एक लाल-भूरे रंग की परत जम जाती है, जिसे जंग कहते हैं।</li>
                      </ul>
                      <b>जंग लगने से क्या होता है:</b>
                      <ul className="list-decimal ml-6 text-gray-800">
                        <li><b style={{ color: 'red' }}>लोहा कमजोर</b> हो जाता है।</li>
                        <li><b style={{ color: 'red' }}>लोहे की चमक</b> खत्म हो जाती है।</li>
                        <li><b style={{ color: 'red' }}>लोहे का आकार</b> बदल जाता है।</li>
                      </ul>
                      <b>जंग लगने से कैसे बचें:</b>
                      <ul className="list-decimal ml-6 text-gray-800">
                        <li><b style={{ color: 'blue' }}>लोहे पर पेंट</b> या तेल लगाएं।</li>
                        <li><b style={{ color: 'blue' }}>लोहे को पानी से</b> दूर रखें।</li>
                        <li><b style={{ color: 'blue' }}>लोहे को जंग रोधी पदार्थों</b> से ढकें।</li>
                        <li><b style={{ color: 'blue' }}>गैल्वनाइजेशन की प्रक्रिया</b> का उपयोग करें।</li>
                      </ul>
                      <b>नोट:</b> <i>जंग लगना एक प्राकृतिक प्रक्रिया है, लेकिन हम कुछ उपायों से इसे रोक सकते हैं।</i>
                    </div>
                  ),
                },
                
                {
                  question: " सोडियम को किरोसीन तेल में डूबाकर क्यों रखा जाता है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                   सोडियम एक बेहद क्रियाशील धातु है। यह हवा में मौजूद ऑक्सीजन और पानी के साथ बहुत तेजी से प्रतिक्रिया करता है। इस प्रतिक्रिया से काफी गर्मी पैदा होती है जिससे सोडियम में आग लग सकती है। इसे रोकने के लिए सोडियम को <b style={{ color: 'orange' }}>केरोसिन तेल</b> में डुबोकर रखा जाता है क्योंकि:
                      <ul className="list-decimal ml-6 text-gray-800">
                        <li><b style={{ color: 'blue' }}>केरोसिन तेल</b> सोडियम को हवा और पानी से पूरी तरह से अलग कर देता है। इससे सोडियम, हवा और पानी के संपर्क में आने से बच जाता है और प्रतिक्रिया नहीं कर पाता।</li>
                        <li><b style={{ color: 'blue' }}>केरोसिन तेल</b> एक अक्रिय पदार्थ है। यह सोडियम के साथ किसी भी तरह की प्रतिक्रिया नहीं करता, जिससे सोडियम सुरक्षित रहता है।</li>
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
      question: " 1. जीवाश्म ईंधन किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर: </b> वे ईंधन, जिनका निर्माण सजीव प्राणियों के मृत अवशेषों से होता है, उन्हें <b style={{ color: "blue" }}>जीवाश्म ईंधन</b> कहते हैं। 
          <br />
          जैसे:— <b style={{ color: "blue" }}>कोयला, पेट्रोलियम और प्राकृतिक गैस</b>।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 2. जीवाश्म ईंधन कितने प्रकार के होते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर: </b> जीवाश्म ईंधन तीन प्रकार के होते हैं:
          <ul>
            <li><b style={{ color: "blue" }}>कोयला</b></li>
            <li><b style={{ color: "blue" }}>पेट्रोलियम</b></li>
            <li><b style={{ color: "blue" }}>प्राकृतिक गैस</b></li>
          </ul>
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 3. कोयला किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर: </b> <b style={{ color: "blue" }}>कोयला</b> एक जीवाश्म ईंधन है, जो पौधों के अवशेषों के दबाव और तापमान के कारण लाखों वर्षों में बनता है।
        </div>
      ),
    },
        {
          question: "प्रश्‍न: 4. पेट्रोलियम क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b> <b style={{ color: "blue" }}>पेट्रोलियम</b> एक जीवाश्म ईंधन है जो प्राचीन पौधों और जानवरों के अवशेषों से बनता है। यह एक तरल ईंधन है।
              <br />
              <b style={{ color: "blue" }}>उपयोग:</b> पेट्रोलियम का उपयोग विभिन्न उद्योगों में किया जाता है।
              <br />
              जैसे:— <b style={{ color: "blue" }}>वाहन ईंधन, ऊर्जा उत्पादन और पेट्रोकेमिकल्स के निर्माण</b> में।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 5. प्राकृतिक गैस क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b> <b style={{ color: "blue" }}>प्राकृतिक गैस</b> एक जीवाश्म ईंधन है जो प्राचीन पौधों और जानवरों के अवशेषों से बनती है। यह मुख्य रूप से <b style={{ color: "blue" }}>मिथेन (मीथेन)</b> CH₄ से बनी होती है।
              <br />
              <b style={{ color: "blue" }}>उदाहरण:</b> घरों में खाना पकाने के लिए उपयोग की जाने वाली गैस।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 6. कोयला का रासायनिक गुणधर्म लिखिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b> <b style={{ color: "blue" }}>कोयला</b> मुख्य रूप से <b style={{ color: "blue" }}>कार्बन (C)</b> और <b style={{ color: "blue" }}>हाइड्रोजन (H)</b> का मिश्रण है। 
              <br />
              इसके अलावा, इसमें <b style={{ color: "blue" }}>ऑक्सीजन (O)</b>, <b style={{ color: "blue" }}>नाइट्रोजन (N)</b> और <b style={{ color: "blue" }}>सल्फर (S)</b> जैसे अन्य तत्व भी उपस्थित होते हैं।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 7. कार्बनीकरण क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b> मृत वनस्पति के धीरे-धीरे प्रक्रम द्वारा <b style={{ color: "blue" }}>कोयला</b> में परिवर्तन को <b style={{ color: "blue" }}>कार्बनीकरण</b> कहते हैं।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 8. उद्योग में कोयला के प्रक्रमण द्वारा प्राप्त उत्पादों के नाम लिखिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b> <b style={{ color: "blue" }}>कोक</b>, <b style={{ color: "blue" }}>कोलतार</b>, और <b style={{ color: "blue" }}>कोयला गैस</b>।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 9. कोलतार क्या है? इसका उपयोग लिखे?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> यह एक अप्रिया गंध वाला काला गाढ़ा द्रव्य है। यह लगभग दो सौ (200) पदार्थों का मिश्रण होता है। 
              <br />
              <b>उपयोग:—</b> इसका उपयोग औद्योगिक निर्माण में संश्लेषित रंग, औषधि, विस्फोटक, सुगंध, प्लास्टिक आदि कार्यों में होता है।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 10. काला सोना किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पेट्रोलियम को।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 11. पेट्रोलियम को काला सोना क्यों कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पेट्रोलियम का उपयोग विभिन्न उत्पादों में किया जाता है, इनका अपना बहुत व्यवसायिक महत्व है। इसलिए इसे काला सोना कहते हैं।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 12. कोयला गैस कैसे प्राप्त होता है? इसका एक प्रमुख उपयोग लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कोयला के प्रक्रमण द्वारा कोक बनाते समय कोयला गैस प्राप्त होता है।
              <br />
              <b>उपयोग:—</b> इसका उपयोग उद्योगों में ईंधन के रूप में किया जाता है।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 13. भारत में पेट्रोलियम पदार्थों के संरक्षण कौन करता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पेट्रोलियम संरक्षण अनुसंधान समिति (PCRA)।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 14. PCRA लोगों को क्या सलाह देती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> पेट्रोलियम संरक्षण अनुसंधान समिति (PCRA) लोगों को ईंधन की बचत के लिए निम्नलिखित सलाह देती है:
              <ul style={{ color: "blue" }}>
                <li>जहाँ तक संभव हो गाड़ी समान और मध्यम गति से चलाइए।</li>
                <li>यातायात लाइटों पर अथवा जहाँ आपको प्रतीक्षा करनी है, गाड़ी का ईंधन बंद कर दीजिए।</li>
                <li>टायरों का दाब सही रखिए।</li>
                <li>गाड़ी का नियमित रखरखाव सुनिश्चित कीजिए।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 15. LPG और CNG का ईंधन के रूप में उपयोग करने से क्या लाभ है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> LPG और CNG का ईंधन के रूप में उपयोग करने से निम्नलिखित फायदे होते हैं:
              <ul style={{ color: "blue" }}>
                <li>प्रदूषण कम फैलता है।</li>
                <li>काम जल्दी से होता है।</li>
                <li>एक जगह से दूसरे जगह ले जाने में आसानी होती है।</li>
                <li>यह दोनों स्वच्छ ईंधन हैं।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 16. ईंधन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> हर एक जलने वाला पदार्थ जो जलकर ऊष्मा ऊर्जा देता है, उसे ईंधन कहते हैं।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 17. ईंधन किन-किन अवस्थाओं में पाया जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ठोस, द्रव या गैस।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 18. कोयला गैस का सर्वप्रथम प्रयोग कब एवं कहाँ किया गया?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कोयला गैस का सर्वप्रथम प्रयोग 1810 में लंदन में किया गया था।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 19. L.P.G का पूरा नाम लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> एलपीजी (LPG) का पूरा नाम है: लिक्विड पेट्रोलियम गैस (Liquid Petroleum Gas)।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 20. ईंधन कितने प्रकार के होते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ईंधन मुख्य रूप से तीन प्रकार के होते हैं:
              <ul style={{ color: "blue" }}>
                <li>ठोस ईंधन (जैसे: कोयला, लकड़ी)</li>
                <li>तरल ईंधन (जैसे: पेट्रोल, डीजल)</li>
                <li>गैसीय ईंधन (जैसे: एलपीजी, सीएनजी)</li>
              </ul>
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 21. C.N.G का पूरा नाम लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सीएनजी (CNG) का पूरा नाम है: 
              <br />
              संपीडित प्राकृतिक गैस (Compressed Natural Gas)।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 22. प्रकृति में प्रदूषण का प्रमुख कारण क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रकृति में प्रदूषण का प्रमुख कारण ईंधनों का जलना है।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 23. प्राथमिक ईंधन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जो ईंधन प्रकृति से हमें उसी रूप में प्राप्त होता है जिस रूप में उसका उपयोग होना है, प्राथमिक ईंधन कहलाता है।
              <br />
              <b>जैसे:—</b> लकड़ी, कोयला, पेट्रोलियम इत्यादि।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 24. द्वितीय ईंधन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वैसे ईंधन जो प्राथमिक ईंधन से प्राप्त किये जाते हैं, उसे द्वितीय ईंधन कहते हैं।
              <br />
              <b>जैसे:—</b> कोक, कोयला गैस, कोलतार इत्यादि।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 25. पेट्रोलियम का कौन–सा उत्पाद सड़क निर्माण हेतु उपयोग में लाया जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिटुमेन।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 26. कोक किस प्रकार प्राप्त किया जा सकता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कोयला को वायु की अनुपस्थिति में गर्म करने पर कोक प्राप्त होता है।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 27. कृत्रिम ढंग से कोयला कैसे बनाया जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> कृत्रिम ढंग से कोयला बनाने के लिए बंद बर्तन में लकड़ी को गर्म करने से लकड़ी धीरे-धीरे कोयले में बदल जाती है।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 28. भारत में तेल क्षेत्र कहाँ-कहाँ पाये जाते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> हमारे देश में तेल पैदा करने वाले क्षेत्र असम, गुजरात एवं मुंबई के कुछ क्षेत्र क्रमशः माहोर कटिया, अंकलेश्‍वर हैं।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 29. परिष्करण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जब तेल के कुएँ से तेल निकलता है तब वह कच्चा तेल होता है। इसमें विभिन्न संघटकों का मिश्रण रहता है। इन विभिन्न संघटकों को पृथक करने की प्रक्रिया परिष्करण कहलाती है।
            </div>
          ),
        },
        {
          question: "प्रश्‍न: 30. कोयला को जीवाश्म ईंधन क्यों कहा जाता है?",
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
      question: "प्रश्‍न: 1. दहन किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> वह रासायनिक प्रक्रम जिसमें कोई पदार्थ ऑक्सीजन से अभिक्रिया कर ऊष्मा देता है, दहन कहलाता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 2. ईंधन किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> ईंधन वे पदार्थ हैं जो जलने पर ऊर्जा प्रदान करते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 3. ज्वाला किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> ज्वाला जलने की प्रक्रिया में उत्पन्न होने वाली ऊर्जा के रूप में दिखाई देने वाली लौ को ज्वाला कहते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 4. ज्वलन ताप क्या है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> वह न्यूनतम ताप जिस पर कोई पदार्थ जलने लगता है, वह ताप उस पदार्थ का ज्वलन ताप कहलाता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 5. सूर्य में ऊष्मा और प्रकाश किस अभिक्रिया द्वारा उत्पन्न होते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> नाभिकीय संलयन अभिक्रिया के द्वारा।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 6. स्वत: दहन किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जो पदार्थ बिना गर्म किया स्वत: ही जल उठता है, स्वत: दहन कहलाता है।
          <br />
          <b>उदाहरण:—</b> पीले फॉस्फोरस का ज्वलन ताप कमरे के तापमान से कम होने के कारण यह स्वतः ही जल उठता है। क्योंकि इसका ज्वलन ताप कमरे के तापमान से कम होता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 7. ग्लोबल वार्मिंग का मुख्य कारण क्या है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> ग्रीनहाउस गैसों का उत्सर्जन, विशेष रूप से कार्बन डाइऑक्साइड (CO₂) ग्लोबल वार्मिंग का मुख्य कारण है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 8. इंधनों के अपूर्ण दहन से कौन–सा विषैला गैस बनता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> ईंधनों के अपूर्ण दहन से कार्बन मोनोऑक्साइड (CO) विषैला गैस बनता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 9. अम्लीय वर्षा का मुख्य कारण क्या है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> सल्फर और नाइट्रोजन के ऑक्साइड अम्लीय वर्षा का मुख्य कारण है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 10. कागज के कप में पानी को उबालने पर कागज जलता नहीं क्यों?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> कागज़ के कप में पानी को उबालने पर कागज़ जलता नहीं है, क्योंकि जल के कारण कागज़ का तापमान उसके ज्वलन तापमान से कम रहता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 11. जलने के तीन उपयोगी बात लिखिए?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> 
          (i) ज्वलनशील पदार्थ। <br />
          (ii) ज्वलन ताप। <br />
          (iii) ऑक्सीजन।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 12. दहन कितने प्रकार के होते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> दहन तीन प्रकार के होते हैं:
          <br />
          (i) तीव्र दहन ।<br />
          (ii) स्वतः दहन।<br />
          (iii) विस्फोटक।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 13. आग पर तुरंत काबू कैसे पाया जा सकता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> आग पर तुरंत काबू पाने के लिए ऑक्सीजन संपर्क को काट दिया जाता है, इसके लिए कई प्रचलित विधियाँ हैं।
          <br />
          जैसे:— पानी डालना, कार्बन डाइऑक्साइड का छिड़काव करना, इसे ज्वलन ताप भी तुरंत कम हो जाता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 14. कार्बन–डाइऑक्साइड (CO₂) कैसे एक अच्छा अग्निशमक है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> कार्बन-डाइऑक्साइड (CO₂) एक अच्छा अग्निशमक है, क्योंकि यह आग को हवा से दूर रखता है और आग के तापमान को कम करता है, जिससे आग जल्दी बुझ जाती है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 15. अम्लीय वर्षा के क्या हानिकारक प्रभाव है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> ये फसलों को नष्ट कर देती है, मृदा को अम्लीय बनाती है। अम्लीय वर्षा का पानी नदी या तालाब में मिल जाए तो जीव नष्ट हो सकते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 16. कोयले को हवा की अनुपस्थिति में गर्म करने से क्या प्राप्त होता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> कोयले को हवा की अनुपस्थिति में गर्म करने से हमें निम्नलिखित महत्वपूर्ण पदार्थ प्राप्त होते हैं:
          <br />
          (i) कृत्रिम पेट्रोलियम। <br />
          (ii) बेंजीन। <br />
          (iii) औषधियाँ। <br />
          (iv) विस्फोटक पदार्थ। <br />
          (v) ईंधन गैस। <br />
          (vi) कोक।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 17. अम्लीय वर्षा किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> सल्फर और नाइट्रोजन के ऑक्साइड वर्षा जल में घुल जाते हैं तथा अम्ल बनाते हैं, ऐसी वर्षा अम्लीय वर्षा कहलाती है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 18. ज्वाला के तीन भिन्न क्षेत्र कौन-कौन से हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> ज्वाला के तीन भिन्न क्षेत्र निम्न हैं:
          <br />
          (i) अदीप्त क्षेत्र। <br />
          (ii) दीप्त क्षेत्र। <br />
          (iii) ज्योतिहिन क्षेत्र।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 19. विद्युत उपकरणों में लगी आग को बुझाने के लिए कार्बन डाइऑक्साइड के छिड़काव के क्या लाभ है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> कार्बन डाइऑक्साइड से विद्युत उपकरणों को कोई हानि नहीं पहुँचती जबकि पानी डालने पर जल विद्युत का चालन कर सकता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 20. आग लगने पर उसे कई बार पानी डालकर बुझाते हैं। पानी डालने से आग कैसे बुझ जाती है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> आग को बुझाने के लिए साधारणतया जल का प्रयोग किया जाता है क्योंकि जल ज्वलनशील पदार्थ को ठंडा करता है और आग का फैलाव बंद हो जाता है। इस प्रक्रिया में जो जलवाष्प बनती है वह बाहर के वातावरण से वायु की आपूर्ति बंद कर देती है और आग बुझ जाती है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 21. अज्वलनशील पदार्थ किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जो पदार्थ लौ पर गर्म करने पर नहीं जलते हैं, अज्वलनशील पदार्थ कहलाते हैं।
          <br />
          जैसे:— पत्थर, धातु, पानी आदि।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 22. माचिस को जलाने के लिए उसे माचिस की डिब्बा से रगड़ा जाता है। ऐसा क्यों?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> हमारे घरों में जो माचिस की डिबियाँ उपयोग में लायी जाती हैं उनके तीलियों पर रसायन पोटैशियम क्लोरेट होता है। डिब्बी पर लाल फास्फोरस और सल्फर लगा होता है। जब हम तीलियों को डिब्बी पर रगड़ते हैं तो यह जल उठती है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 23. दहन और जंग लगने में क्या अंतर है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> दहन और जंग लगने में मुख्य अंतर यह है:
          <br />
          <b>दहन:</b> दहन एक रासायनिक प्रतिक्रिया है जिसमें कोई पदार्थ ऑक्सीजन की उपस्थिति में जलता है और ऊर्जा का उत्पादन करता है। इसमें ताप और प्रकाश का उत्पादन होता है।
          <br />
          <b>जंग लगना:</b> जंग लगना एक रासायनिक प्रतिक्रिया है जिसमें धातु ऑक्सीजन और नमी की उपस्थिति में क्षय होती है। इसमें धातु का ऑक्साइड बनता है और धातु की सतह पर जंग की परत बन जाती है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 24. मोमबत्ती में मोम किस रूप में जलता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> मोमबत्ती में मोम वाष्प रूप में जलता है। जब मोमबत्ती जलाई जाती है, तो मोम पिघलकर वाष्प में बदल जाता है और फिर यह वाष्प ऑक्सीजन की उपस्थिति में जलता है, जिससे प्रकाश और गर्मी उत्पन्न होती है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 25. बारूद किन पदार्थों से मिलकर बना होता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> बारूद मुख्य रूप से तीन पदार्थों से मिलकर बना होता है:
          <br />
          (i) सल्फर (गंधक) <br />
          (ii) कार्बन (कोयला) <br />
          (iii) नाइट्रेट (पोटैशियम नाइट्रेट या चीनी मिट्टी)
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
      question: "प्रश्‍न: 1. पौधों का संरक्षण क्यों आवश्यक है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> पौधों का संरक्षण आवश्यक है क्योंकि वे हमें ऑक्सीजन प्रदान करते हैं, वायु प्रदूषण को कम करते हैं, और जलवायु परिवर्तन को नियंत्रित करने में मदद करते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 2. जंतुओं का संरक्षण क्यों महत्वपूर्ण है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जंतुओं का संरक्षण महत्वपूर्ण है क्योंकि वे हमारे पारिस्थितिकी तंत्र का एक महत्वपूर्ण हिस्सा हैं। वे हमें भोजन प्रदान करते हैं, पारिस्थितिकी तंत्र को संतुलित रखते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 3. पौधों और जंतुओं के संरक्षण के लिए हम क्या कर सकते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> पौधों और जंतुओं के संरक्षण के लिए हम कई कदम उठा सकते हैं, जैसे कि:
          <ul>
            <li>पेड़ों को लगाना और उनकी देखभाल करना।</li>
            <li>जंतुओं के आवासों की रक्षा करना।</li>
            <li>प्रदूषण को कम करना।</li>
            <li>जंतुओं के शोषण को रोकना।</li>
            <li>संरक्षण के प्रयासों में भाग लेना।</li>
          </ul>
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 4. पौधों और जंतुओं के संरक्षण के लिए सरकार की भूमिका क्या है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> पौधों और जंतुओं के संरक्षण के लिए सरकार की भूमिका महत्वपूर्ण है। सरकार निम्नलिखित कदम उठा सकती है:
          <ul>
            <li>संरक्षण के लिए नीतियाँ और कानून बनाना।</li>
            <li>संरक्षण के प्रयासों के लिए धन और संसाधन प्रदान करना।</li>
            <li>संरक्षण के बारे में जागरूकता फैलाना।</li>
            <li>संरक्षण के प्रयासों की निगरानी और मूल्यांकन करना।</li>
          </ul>
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 5. सूखा पड़ने के क्या कारण है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> पृथ्वी के ताप में वृद्धि से जलचक्र का संतुलन बिगड़ता है, और वर्षा दर में कमी आती है जिसके कारण सूखा पड़ता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 6. उस गैस का नाम बताइए जो पृथ्वी द्वारा उत्सर्जित उष्मीय विकिरणों को ग्रहण कर लेता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> कार्बन डाइऑक्साइड (CO₂)
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 7. मरुस्थलीकरण किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> धीरे-धीरे उर्वर भूमि मरुस्थल में परिवर्तित हो जाने के प्रक्रम को मरुस्थलीकरण कहते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 8. अभ्यारण किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> अभयारण्य किसी विशेष प्रजाति के जानवरों या पौधों के संरक्षण के लिए बनाए गए सुरक्षित क्षेत्र को कहते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 9. जैव विविधता का क्या अर्थ है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जैव विविधता का अर्थ है पृथ्वी पर पाए जाने वाले विभिन्न प्रकार के जीव-जन्तुओं, पौधों, और सूक्ष्मजीवों की विविधता।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 10. वनस्पति जात क्या है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> किसी विशेष क्षेत्र में पाये जाने वाले पेड़–पौधे उस क्षेत्र के वनस्पति जात कहलाते हैं।
        </div>
      ),
    },

    {
      question: "प्रश्‍न: 11. प्राणी जात क्या है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> किसी विशेष क्षेत्र में पाये जाने वाले जीव–जंतु उस क्षेत्र के प्राणी जात कहलाते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 12. क्या होगा यदि किसी जंतु का आवास बधित हो?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> यदि किसी जंतु का आवास बधित हो तो उस जंतु का अस्तित्व ही खतरे में पड़ जाएगा और धीरे-धीरे उस जीव की प्रजाति ही विलुप्त हो जाएगी।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 13. अजैव घटक किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जलवायु, भूमि, नदी आदि को अजैव घटक कहते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 14. जैव घटक किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> सभी पौधे प्राणी एवं सूक्ष्मजीवों को जैव घटक कहते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 15. हमें जैव विविधता का संरक्षण क्यों करना चाहिए?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> पर्यावरण संतुलन के लिए जैव विविधता होना जरूरी है। इसलिए हमें जैव विविधता का संरक्षण करना आवश्यक है। अन्यथा असंतुलन पर्यावरण हमारे लिए घातक सिद्ध होगा।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 16. विनाश के मुख्य कारण एवं उसके प्रभाव बताइए?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> <b>विनाश के मुख्य कारण:</b>
          <ul>
            <li>वनस्पतिवृक्षों की कटाई</li>
            <li>औद्योगिक प्रदूषण</li>
            <li>जल प्रदूषण</li>
            <li>मिट्टी का क्षरण</li>
          </ul>
          <b>विनाश के प्रभाव:</b>
          <ul>
            <li>जैव विविधता की हानि</li>
            <li>जलवायु परिवर्तन</li>
            <li>मिट्टी की उर्वरता में कमी</li>
          </ul>
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 17. प्रवास से आप क्या समझते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> प्रवास (Pravas) का अर्थ है एक स्थान से दूसरे स्थान पर जाने की प्रक्रिया, जो अक्सर जानवरों और पक्षियों द्वारा उनके प्राकृतिक आवासों की खोज या मौसमी परिवर्तनों के कारण की जाती है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 18. जंगल नष्ट हो जाए तो जंतुओं पर क्या प्रभाव पड़ेगा?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जंगल नष्ट होने से जंतुओं के आवास नष्ट हो जाएंगे, भोजन की कमी होगी और उनकी प्रजातियों का अस्तित्व खतरे में पड़ जाएगा।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 19. वनोन्मूलन क्या है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> वनस्पतियों और पेड़ों की कटाई या नष्ट करने की प्रक्रिया को वनोन्मूलन कहते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 20. सामाजिक वानिकी किसे कहते हैं?",
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
      question: "प्रश्‍न: 1. कोशिका क्या है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> सजीवों के संरचनात्मक एवं क्रियात्मक इकाई को कोशिका कहते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 2. जंतु कोशिका किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जंतुओं के शरीर में पाई जाने वाली कोशिकाएँ जंतु कोशिका कहलाती हैं। इनमें केंद्रक, माइटोकॉन्ड्रिया और लाइसोसोम पाए जाते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 3. पादप कोशिका किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> पादप कोशिका पौधों के शरीर में पाई जाने वाली कोशिकाएँ होती हैं। इनमें केंद्रक, माइटोकॉन्ड्रिया, क्लोरोप्लास्ट और सेल्यूलोज़ की दीवार पाई जाती है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 4. कोशिकाओं को किस प्रकार देखा जा सकता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> कोशिकाओं का आकार बहुत छोटा होता है जिसे देखने के लिए हमें सूक्ष्मदर्शी का प्रयोग करना पड़ता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 5. एक कोशिकीय जीव क्या होता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> वह जीव जो एक ही कोशिका से बना हो वह एक कोशिकीय जीव कहलाता है।
          <br />
          जैसे:— अमीबा और पारामिशियम
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 6. बहुकोशिकीय जीव किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जिन जीवों का शरीर कई कोशिकाओं से मिलकर बना होता है, उन्हें बहुकोशिकीय जीव कहते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 7. कोशिका के किस भाग में कोशिकांग पाए जाते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> साइटोप्लाज्मा में।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 8. उत्तक क्या है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> उत्तक: एक ही प्रकार की कोशिकाओं के समूह को उत्तक कहते हैं। ये कोशिकाएँ आकार, संरचना और कार्य में समान होती हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 9. उस यंत्र का नाम बताइए जिससे कोशिका को देखा जा सकता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> माइक्रोस्कोप।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 10. कोशिका के मुख्य अंगत या भाग कौन-कौन से हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> कोशिका के मुख्य अंगत कोशिका झिल्ली, कोशिका द्रव्य और केंद्रक है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 11. कोशिका झिल्ली के अंदर पाये जाने वाले कोशिका अंगको के नाम बताइए?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> कोशिका द्रव और केंद्रक।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 12. कोशिका के किस भाग को कोशिका का जीवित पदार्थ कहा जाता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> प्रोटेप्लाजमा को।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 13. प्रोटेप्लाजमा किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जीवित कोशिका के अंदर के सभी भागों को प्रोटेप्लाजमा कहते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 14. जीन किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जीन: जीन एक अनुवांशिक इकाई है जो क्रोमोसोम में स्थित होती है और जीनेटिक गुणों को एक पीढ़ी से दूसरी पीढ़ी में स्थानांतरित करने में महत्वपूर्ण भूमिका निभाती है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 15. किन कोशिकाओं की आकृति निश्‍चित नहीं होती?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> श्‍वेत रक्त कोशिका की आकृति निश्‍चित नहीं होती।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 16. मानव शरीर में सबसे छोटी एवं बड़ी कोशिका का नाम बताएँ?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> मानव शरीर में लाल रक्त कोशिकाएँ सबसे छोटी होती है। तंत्रिका कोशिका सबसे बड़ी कोशिका होती है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 17. ऊतकों का निर्माण किस प्रकार होता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> बहुकोशिकीय जीवों में कोशिकाओं का विशिष्ट समूह ऊतकों का निर्माण करता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 18. मुर्गी के अंडे के पीला भाग एवं उजले भाग को क्या कहा जाता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> मुर्गी के अंडे के पीले भाग को एलब्यूमिन तथा उजला भाग योक कहलाता है। मुर्गी का यह अंडा एकल कोशिका रखता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 19. कोशिका का आकार किस बात पर निर्भर करता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> कोशिका का आकार का संबंध किसी जीव या पौधे के आकार से न होकर उस कोशिका विशेष के कार्य से होता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 20. क्लोरोफिल या पर्णहरित किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> पत्तियों का हरा रंग उनकी कोशिकाओं में स्थित हरे रंग के लवक क्लोरोप्लास्ट या हरित लवक के कारण होता है, जिसे क्लोरोफिल पर्णहरित कहते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 21. कोशिका झिल्ली किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> कोशिका झिल्ली एक पतली और लचीली परत होती है जो कोशिका के अंदरूनी हिस्से को बाहरी वातावरण से अलग करती है। यह झिल्ली कोशिका को सुरक्षा प्रदान करती है और पदार्थों के आदान-प्रदान को नियंत्रित करती है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 22. कोशिका भित्ति किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> पादप कोशिकाओं की बाहरी परत जो सेल्यूलोज़ से बनी होती है और कोशिका को आकार और संरचना प्रदान करती है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 23. केंद्रक झिल्ली किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> केंद्रक के चारों ओर स्थित एक दोहरी झिल्ली जो केंद्रक को कोशिका के सायटोप्लाज्म से अलग करती है और केंद्रक में आने-जाने वाले पदार्थों को नियंत्रित करती है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 24. रंजक किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> रंजक: कोशिका में पाए जाने वाले रंगीन पदार्थों को रंजक कहते हैं। ये पदार्थ कोशिका को विशिष्ट रंग प्रदान करते हैं और अक्सर कोशिका की विशिष्ट कार्यों में भी भूमिका निभाते हैं।
          <br />
          रंजकों के उदाहरण:
          <ul>
            <li><b>क्लोरोफिल:</b> पादप कोशिकाओं में पाया जाने वाला एक रंजक जो पौधों को हरा रंग प्रदान करता है और प्रकाश संश्‍लेषण में महत्वपूर्ण भूमिका निभाता है।</li>
            <li><b>हीमोग्लोबिन:</b> जंतु कोशिकाओं में पाया जाने वाला एक रंजक जो लाल रक्त कोशिकाओं में पाया जाता है और ऑक्सीजन को शरीर के विभिन्न अंगों तक पहुंचाने में मदद करता है।</li>
            <li><b>मेलानिन:</b> जंतु कोशिकाओं में पाया जाने वाला एक रंजक जो त्वचा, बालों और आंखों को रंग प्रदान करता है।</li>
          </ul>
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 25. जंतु कोशिका और पादप कोशिका में क्या अंतर है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जंतु कोशिका और पादप कोशिका में निम्न अंतर है:
          <ul>
            <li><b>पादप कोशिका में:</b> 
              <ul>
                <li>कोशिका भित्ति होती है।</li>
                <li>क्लोरोप्लास्ट होते हैं।</li>
                <li>वैक्यूल्स बड़े होते हैं।</li>
                <li>लाइसोसोम नहीं होते हैं।</li>
                <li>सेंट्रियोल नहीं होते हैं।</li>
              </ul>
            </li>
            <li><b>जंतु कोशिका में:</b> 
              <ul>
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

{
  chapterName: "कोशिका:  संरचना एवं प्रकार्य",
  questions: [ 

    {
      question: "प्रश्‍न: 1. जनन क्या है यह क्यों जरूरी है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जनन एक प्रक्रिया है जिसमें जीव अपने जैसे शिशु को जन्म देता है। यह बहुत जरूरी है क्योंकि इससे जीवन की निरंतरता बनी रहती है और जीवों की प्रजाति को बचाया जा सकता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 2. निषेचन किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> निषेचन एक प्रक्रिया है जिसमें नर कोशिका (शुक्राणु) और मादा कोशिका (अंडाणु) मिलकर एक नई कोशिका बनाते हैं, जिसे जाइगोट कहते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 3. निषेचन कितने प्रकार का होता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> निषेचन दो प्रकार के होते हैं:
          <ul>
            <li>(i) आंतरिक निषेचन (शरीर के अंदर)</li>
            <li>(ii) बाहरी निषेचन (शरीर के बाहर)</li>
          </ul>
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 4. युग्मनज किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> निषेचित अंडाणु को युग्मनज कहते हैं। यह नर और मादा की कोशिकाओं के मिलने से बनता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 5. शुक्राणु किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> पुरुष के शरीर में बनी विशेष प्रकार की कोशिका को शुक्राणु कहते हैं। यह कोशिका निषेचन प्रक्रिया में महत्वपूर्ण भूमिका निभाती है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 6. बाहरी निषेचन किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जब नर और मादा की कोशिकाएं जल में मिलकर निषेचन प्रक्रिया को पूरा करती हैं, जैसे कि मछली और मेंढ़क में, तो इसे बाहरी निषेचन कहते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 7. आंतरिक निषेचन किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जब नर और मादा की कोशिकाएं मादा के शरीर के अंदर मिलकर निषेचन प्रक्रिया को पूरा करती हैं, जैसे कि पक्षियों, स्तनधारियों और मनुष्य में, तो इसे आंतरिक निषेचन कहते हैं।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 8. मादा के किस जनन अंग में भूरण का रोपण होता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> मादा के गर्भाशय में भूरण का रोपण होता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 9. गर्भ किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> निषेचित अंडाणु के विकसित होने के बाद बने भुरण को गर्भ कहते हैं। यह मादा के गर्भाशय में विकसित होता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 10. भूरण कहाँ रोपित होता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> भूरण गर्भाश्‍य के दीवार में रोपित होकर विकसित होता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 11. मुर्गी के अंडे को चूजा बनने में कितना समय लगता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> मुर्गी के अंडे को चूजा बनने में लगभग 21 दिन या 3 सप्ताह का समय लगता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 12. अलैंगिक प्रजनन और लैंगिक प्रजनन में क्या अंतर है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> अलैंगिक प्रजनन और लैंगिक प्रजनन में निम्न अंतर हैं:
          <ul>
            <li><b>अलैंगिक प्रजनन:</b>
              <ul>
                <li>एक ही माता-पिता की कोशिका शामिल होती है।</li>
                <li>कोशिका विभाजन के माध्यम से नए जीव उत्पन्न होते हैं।</li>
                <li>इसमें लिंग कोशिकाएं नहीं होती हैं।</li>
                <li>इसमें जीन की विविधता नहीं होती है।</li>
                <li>यह प्रक्रिया तेजी से होती है और इसमें ऊर्जा की कम आवश्यकता होती है।</li>
              </ul>
            </li>
            <li><b>लैंगिक प्रजनन:</b>
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
      question: "प्रश्‍न: 13. आंतरिक निषेचन तथा बाहरी निषेचन में क्या अंतर है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> आंतरिक निषेचन तथा बाहरी निषेचन में निम्न अंतर हैं:
          <ul>
            <li><b>आंतरिक निषेचन:</b>
              <ul>
                <li>निषेचन मादा के शरीर के अंदर होता है।</li>
                <li>नर के शुक्राणु मादा के शरीर में प्रवेश करते हैं।</li>
                <li>यह प्रक्रिया स्तनधारियों, पक्षियों और कुछ अन्य जीवों में होती है।</li>
              </ul>
            </li>
            <li><b>बाहरी निषेचन:</b>
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
      question: "प्रश्‍न: 14. शिशु के लिंग निर्धारण का क्या अर्थ है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> शिशु के लिंग निर्धारण का अर्थ है कि शिशु के जन्म से पहले उसके लिंग का निर्धारण करना, यानी यह जानना कि शिशु लड़का होगा या लड़की।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 15. परखनली शिशु या कृत्रिम निषेचन किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> परखनली शिशु या कृत्रिम निषेचन एक ऐसी प्रक्रिया है जिसमें महिला के अंडाणु को पुरुष के शुक्राणु से परखनली में निषेचित किया जाता है, और फिर उसे महिला के गर्भाशय में स्थापित किया जाता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 16. विधि मुकुलन किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> विधि मुकुलन एक ऐसी प्रक्रिया है जिसमें एक पौधे या जीव की एक कोशिका या ऊतक को अलग करके एक नए पौधे या जीव को बनाया जाता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 17. द्विखण्डन किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> द्विखण्डन एक प्रकार का अलैंगिक प्रजनन है, जिसमें एक जीव अपने शरीर को दो बराबर भागों में विभाजित कर देता है, और प्रत्येक भाग से एक नए जीव का निर्माण होता है।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 18. जंतुओं में प्रजनन कितने प्रकार से होता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> जंतुओं में प्रजनन दो प्रकार से होता है:
          <ul>
            <li>(i) अलैंगिक प्रजनन</li>
            <li>(ii) लैंगिक प्रजनन</li>
          </ul>
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 19. क्या होगा यदि शुक्राणु को अंडाणु से मिलने नहीं दिया जाए?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> यदि शुक्राणु को अंडाणु से मिलने नहीं दिया जाए, तो निषेचन नहीं होगा और गर्भधारण नहीं होगा।
        </div>
      ),
    },
    {
      question: "प्रश्‍न: 20. प्रजनन आवश्यक क्यों है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> प्रजनन आवश्यक है क्योंकि यह जीवन की निरंतरता को बनाए रखने में मदद करता है। प्रजनन के माध्यम से नए जीव पैदा होते हैं और प्रजाति का अस्तित्व बना रहता है।
        </div>
      ),
    },

  ]
}

  

  ];



return (
  <div className="max-w-6xl mx-auto px-6 py-12 ">
    <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Frequently Asked Questions</h1>
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

return (
  <div className="border border-gray-300 rounded-lg mb-4">
    <h2
      className="text-xl font-semibold bg-indigo-200 px-4 py-2 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      {`अध्याय ${chapterIndex}: ${chapter.chapterName}`}
    </h2>
    {isOpen && (
      <div className="px-4 py-2">
        {chapter.questions.map((faq, questionIndex) => (
          <QuestionAnswer
            key={questionIndex}
            faq={faq}
            questionNumber={`${chapterIndex}.${questionIndex + 1}`} // Generate question number
          />
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
  <div className="border-b-2 border-gray-300 pb-8 cursor-pointer">
    <h3 className="text-lg font-medium text-red-600 flex justify-between items-center">
      {`प्रश्‍न: ${questionNumber}. ${faq.question}`}
    </h3>
    {isOpen || <div className="text-gray-600 mt-4">{faq.answer}</div>}
  </div>
);
};

export default FAQ;

