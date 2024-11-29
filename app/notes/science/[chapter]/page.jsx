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
          question: "प्रश्‍न:  फसल किसे कहते हैं?",
          answer: (
            <div>
              <b>उत्तर: </b> जब एक ही किस्म के पौधे किसी स्थान पर बड़े पैमाने पर उगाए जाते हैं तो इसे <b style={{ color: 'green' }}>फसल</b> कहते हैं।
            </div>
          ),
        },
        {
          question: "प्रश्‍न:  जुताई किसे कहते हैं?",
          answer: (
            <div>
              <b>उत्तर: </b> मिट्टी को उलटने-पलटने एवं पोला करने की प्रक्रिया को <b style={{ color: 'green' }}>जुताई</b> कहते हैं।
            </div>
          ),
        },
        {
          question: "प्रश्‍न:  खाद एवं उर्वरक किसे कहते हैं?",
          answer: (
            <div>
              <b>उत्तर: </b> वे पदार्थ जिन्हें मिट्टी में पोषक तत्व बनाए रखने के लिए मिलाया जाता है, उन्हें <b style={{ color: 'green' }}>खाद</b> एवं <b style={{ color: 'green' }}>उर्वरक</b> कहते हैं।
            </div>
          ),
        },
        {
          question: "प्रश्‍न:  उर्वरक कैसे बनाया जाता है?",
          answer: (
            <div>
              <b>उत्तर: </b> खाद जैविक प्रक्रिया द्वारा फैक्ट्रियों में बनाया जाता है।
            </div>
          ),
        },
        {
          question: "प्रश्‍न:  फसल चक्रण किसे कहते हैं?",
          answer: (
            <div>
              <b>उत्तर: </b> फसलों को अदल-बदल कर बोना <b style={{ color: 'green' }}>फसल चक्रण</b> कहलाता है।
            </div>
          ),
        },
        {
          question: "प्रश्‍न:  खेतों में लगातार फसल उगाने से क्या हानियाँ हैं?",
          answer: (
            <div>
              <b>उत्तर: </b> खेतों में लगातार फसल उगाने से खेतों में पोषक तत्वों की कमी हो जाती है।
            </div>
          ),
        },
        {
          question: "प्रश्‍न:  तीन उर्वरकों के नाम लिखें।",
          answer: (
            <div>
              <b>उत्तर: </b> यूरिया, अमोनियम, सल्फेट
            </div>
          ),
        },
        
          {
            question:  "प्रश्‍न: खाद एवं उर्वरक में क्या अंतर है?",
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
          //   question: "प्रश्‍न: 8. खाद एवं उर्वरक में क्या अंतर है?",
          //   answer: (
          //     <div>
          //       <b>उत्तर: </b> खाद एवं उर्वरक में निम्न अंतर है:
          //       <table border="1" style={{ width: '100%', marginTop: '10px', textAlign: 'center' }}>
          //         <thead>
          //           <tr>
          //             <th> </th>
          //             <th><b style={{ color: 'green' }}>खाद</b></th>
          //             <th><b style={{ color: 'green' }}>उर्वरक</b></th>
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
            question: "प्रश्‍न:  सिंचाई के पारम्परिक तरीके कौन-कौन से हैं?",
            answer: (
              <div>
                <b>उत्तर: </b> सिंचाई के पारम्परिक तरीके निम्न हैं:
                <ul>
                  <li>मोटर</li>
                  <li>चेन पम्प</li>
                  <li>ढकली</li>
                  <li>रिहट</li>
                </ul>
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  सिंचाई के प्रमुख स्त्रोतों के नाम बताइये।",
            answer: (
              <div>
                <b>उत्तर: </b> सिंचाई के प्रमुख स्त्रोत निम्न हैं:
                <ul>
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
            question: "प्रश्‍न:  उर्वरक किसे कहते हैं? किन्हीं दो उर्वरकों के नाम लिखे।",
            answer: (
              <div>
                <b>उत्तर: </b> मिट्टी की उर्वरक शक्ति को बढ़ाने वाले तत्वों को <b style={{ color: 'green' }}>उर्वरक</b> कहते हैं।<br />
                दो उर्वरकों के नाम:
                <ul>
                  <li>यूरिया</li>
                  <li>फास्फेट</li>
                </ul>
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  खरपतवार क्या हैं?",
            answer: (
              <div>
                <b>उत्तर: </b> फसलों के साथ कुछ अनचाहे पौधे भी उग आते हैं। इन पौधों को हम <b style={{ color: 'green' }}>खरपतवार</b> कहते हैं।
              </div>
            ),
          },
          
          
          {
            question: "प्रश्‍न:  पीड़कनाशी क्या हैं?",
            answer: (
              <div>
                <b>उत्तर: </b> फल या फसलों उत्पादों की हानि पहुंचाने वाले जीवों को मारने वाली रासायनिक दवाइयों को <b style={{ color: 'green' }}>पीड़कनाशी</b> कहते हैं।
              </div>
            ),
          },
          
          {
            question: "प्रश्‍न:  हार्वेस्टर क्या है?",
            answer: (
              <div>
                <b>उत्तर: </b> वह मशीन जिससे फसलों की कटाई की जाती है उसे <b style={{ color: 'green' }}>हार्वेस्टर</b> कहते हैं।
              </div>
            ),
          },
          
          {
            question: "प्रश्‍न:  दालों की फसलों की जड़ों में कौनसा जीवाणु पाया जाता है?",
            answer: (
              <div>
                <b>उत्तर: </b> <b style={{ color: 'green' }}>राइजोबियम</b> नामक जीवाणु पाया जाता है।
              </div>
            ),
          },
          
          {
            question: "प्रश्‍न:  हरित क्रांति से क्या तात्पर्य है?",
            answer: (
              <div>
                <b>उत्तर: </b> कृषि उत्पादन में तेजी से वृद्धि हुई है, इसे <b style={{ color: 'green' }}>हरित क्रांति</b> कहते हैं।
              </div>
            ),
          },
          
          {
            question: "प्रश्‍न:  कॉम्बाइन मशीन क्या है?",
            answer: (
              <div>
                <b>उत्तर: </b> <b style={{ color: 'green' }}>कॉम्बाइन मशीन</b> वह मशीन है जो हार्वेस्टर तथा थ्रेशर दोनों का कार्य करता है।
              </div>
            ),
          },
          
          {
            question: "प्रश्‍न: थ्रेशर क्या है?",
            answer: (
              <div>
                <b>उत्तर: </b> काटी गई फसलों से बीजों या दानों को भूसे से अलग करने की विधि को <b style={{ color: 'green' }}>थ्रेशर</b> कहते हैं।
              </div>
            ),
          },
          
          {
            question: "प्रश्‍न: खरीफ फसल क्या है?",
            answer: (
              <div>
                <b>उत्तर: </b> वह फसल जिन्हें वर्षा ऋतु में बोया जाता है उन्हें <b style={{ color: 'green' }}>खरीफ फसल</b> कहते हैं।
                <p><b>उदाहरण: </b></p>
                <ul className="list-decimal ml-6 text-gray-800">
                  <li>धान</li>
                  <li>मक्का</li>
                  <li>कपास</li>
                  <li>सोयाबीन</li>
                  <li>मूंगफली</li>
                </ul>
                <p><i>नोट:</i> भारत में वर्षा ऋतु सामान्यतः जून से सितंबर तक होती है।</p>
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  रबी फसल क्या है?",
            answer: (
              <div>
                <b>उत्तर: </b> शीत ऋतु (अक्टूबर से मार्च तक) उगाई जाने वाली फसलें <b style={{ color: 'green' }}>रबी फसल</b> कहलाती हैं।
                <p><b>उदाहरण: </b></p>
                <ul className="list-decimal ml-6 text-gray-800">
                  <li>गेहूं</li>
                  <li>चना</li>
                  <li>मटर</li>
                  <li>सरसों</li>
                </ul>
              </div>
            ),
          },
          {
            question: "प्रश्‍न: समय-समय पर खेतों में खाद क्यों देनी चाहिए?",
            answer: (
              <div>
                <b>उत्तर: </b> समय-समय पर खेतों में खाद देने के निम्न फायदे हैं:
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
            question: "प्रश्‍न: अच्छी फसल के लिए हमें किन-किन बातों पर ध्यान देना चाहिए?",
            answer: (
              <div>
                <b>उत्तर: </b> अच्छी फसल के लिए हमें निम्नलिखित बातों पर ध्यान देना चाहिए:
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
            question: "प्रश्‍न:  फसल का संरक्षण कैसे किया जाता है?",
            answer: (
              <div>
                <b>उत्तर: </b> फसल का संरक्षण करने के लिए निम्नलिखित तरीकों का पालन किया जा सकता है:
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
            question: "प्रश्‍न:  पादप संकरण क्या है?",
            answer: (
              <div>
                <b>उत्तर: </b> पादप संकरण एक ऐसी प्रक्रिया है जिसमें दो या दो से अधिक पौधों के बीच जेनेटिक सामग्री का आदान-प्रदान किया जाता है, जिससे एक नई पौधा प्रजाति का निर्माण होता है।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  सिंचाई किसे कहते है? इसकी आवश्यकता क्यों होती है?",
            answer: (
              <div>
                <b>सिंचाई की परिभाषा: </b> सिंचाई एक ऐसी प्रक्रिया है जिसमें पौधों को पानी दिया जाता है ताकि वे स्वस्थ और उत्पादक बने रहें।
                <br /><b>सिंचाई की आवश्यकता:</b> सिंचाई की आवश्यकता निम्नलिखित कारणों से होती है:
                <ul>
                  <li><b>पौधों की वृद्धि:</b> पौधों को पानी की आवश्यकता होती है ताकि वे स्वस्थ और उत्पादक बने रहें।</li>
                  <li><b>मिट्टी की नमी:</b> मिट्टी में नमी की कमी होने पर पौधों को पानी देना आवश्यक होता है।</li>
                  <li><b>मौसम की परिस्थितियाँ:</b> शुष्क मौसम में पौधों को पानी देना आवश्यक होता है ताकि वे सूखने से बचें।</li>
                  <li><b>फसल की उत्पादकता:</b> सिंचाई से फसल की उत्पादकता में वृद्धि होती है और फसल की गुणवत्ता में सुधार होता है।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  जैविक खाद से क्या लाभ है?",
            answer: (
              <div>
                <b>उत्तर: </b> जैविक खाद के निम्नलिखित लाभ हैं:
                <ul>
                  <li><b>मिट्टी की उर्वरता में वृद्धि:</b> जैविक खाद मिट्टी की उर्वरता में वृद्धि करती है, जिससे पौधों को आवश्यक पोषक तत्व मिलते हैं।</li>
                  <li><b>पौधों की वृद्धि में वृद्धि:</b> जैविक खाद पौधों की वृद्धि में वृद्धि करती है, जिससे पौधे स्वस्थ और मजबूत होते हैं।</li>
                  <li><b>मिट्टी की संरचना में सुधार:</b> जैविक खाद मिट्टी की संरचना में सुधार करती है, जिससे मिट्टी में पानी का अवशोषण और वायु का संचार बेहतर होता है।</li>
                  <li><b>कीटों और रोगों का नियंत्रण:</b> जैविक खाद कीटों और रोगों का नियंत्रण करने में मदद करती है, जिससे पौधों को नुकसान नहीं पहुंचता है।</li>
                  <li><b>पर्यावरण के अनुकूल:</b> जैविक खाद पर्यावरण के अनुकूल होती है, जिससे मिट्टी, पानी और वायु प्रदूषण नहीं होता है।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  खेतों की बार-बार सिंचाई करने की आवश्यकता क्यों होती है?",
            answer: (
              <div>
                <b>उत्तर: </b> खेतों की बार-बार सिंचाई करने की आवश्यकता निम्नलिखित कारणों से होती है:
                <ul>
                  <li><b>मिट्टी की नमी की कमी:</b> मिट्टी में नमी की कमी होने पर पौधों को पानी की आवश्यकता होती है।</li>
                  <li><b>मौसम की परिस्थितियाँ:</b> शुष्क मौसम में पौधों को पानी की आवश्यकता होती है ताकि वे सूखने से बचें।</li>
                  <li><b>पौधों की वृद्धि:</b> पौधों की वृद्धि के लिए पानी की आवश्यकता होती है।</li>
                  <li><b>मिट्टी की उर्वरता:</b> मिट्टी की उर्वरता बनाए रखने के लिए पानी की आवश्यकता होती है।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "प्रश्‍न: फसलों की उपज में सुधार हेतु महत्वपूर्ण सुझाव दीजिए।",
            answer: (
              <div>
                <b>उत्तर: </b> फसलों की उपज में सुधार हेतु महत्वपूर्ण सुझाव निम्नलिखित हैं:
                <ul>
                  <li><b style={{ color: "green" }}>उचित बीज चयन:</b> फसल की आवश्यकताओं के अनुसार उचित बीज का चयन करें।</li>
                  <li><b style={{ color: "green" }}>मिट्टी की जाँच:</b> मिट्टी की जाँच करें और आवश्यक पोषक तत्वों का उपयोग करें।</li>
                  <li><b style={{ color: "green" }}>सिंचाई प्रबंधन:</b> सिंचाई का सही तरीके से प्रबंधन करें ताकि पानी की बर्बादी न हो।</li>
                  <li><b style={{ color: "green" }}>उर्वरकों का उपयोग:</b> उर्वरकों का उपयोग करें लेकिन उनकी मात्रा का ध्यान रखें।</li>
                  <li><b style={{ color: "green" }}>कीट और रोग नियंत्रण:</b> कीट और रोग का नियंत्रण करें ताकि फसल को नुकसान न हो।</li>
                  <li><b style={{ color: "green" }}>फसल चक्र:</b> फसल चक्र का पालन करें ताकि मिट्टी की उर्वरता बनी रहे।</li>
                  <li><b style={{ color: "green" }}>प्रौद्योगिकी का उपयोग:</b> प्रौद्योगिकी का उपयोग करें जैसे कि ड्रिप सिंचाई और प्रीसिजन फार्मिंग।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  केंचुए को किसानों का मित्र कहा जाता है क्यों?",
            answer: (
              <div>
                <b>उत्तर: </b> केंचुए को किसानों का मित्र कहा जाता है क्योंकि वे मिट्टी की गुणवत्ता में सुधार करते हैं, जिससे पौधों को आवश्यक पोषक तत्व मिलते हैं और मिट्टी की उर्वरता बनी रहती है।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  जैविकनाशी किसे कहते हैं?",
            answer: (
              <div>
                <b>उत्तर: </b> जैविकनाशी उन पदार्थों को कहते हैं जो जैविक रूप से कीटों, रोगों और अन्य हानिकारक जीवों को नष्ट करने में मदद करते हैं।
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
            question: "प्रश्‍न:  सूक्ष्मजीव किसे कहते हैं?",
            answer: (
              <div>
                <b>उत्तर: </b> ऐसे जीव जिन्हें हम नंगी आँखों से नहीं देख सकते, जिन्हें सूक्ष्मदर्शी से देखा जा सकता है उन्हें सूक्ष्मजीव कहते हैं।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  सूक्ष्मजीवों को कितने वर्गों में बाँटा गया है?",
            answer: (
              <div>
                <b>उत्तर: </b> सूक्ष्मजीवों को मुख्य चार वर्गों में बाँटा गया है:
                <ul>
                  <li><b style={{ color: "green" }}>जीवाणु:</b> जीवाणु एक प्रकार के सूक्ष्मजीव होते हैं जो एककोशिकीय होते हैं।</li>
                  <li><b style={{ color: "green" }}>कवक:</b> कवक एक प्रकार के सूक्ष्मजीव होते हैं जो बहुकोशिकीय होते हैं।</li>
                  <li><b style={{ color: "green" }}>प्रोटोजोआ:</b> प्रोटोजोआ एक प्रकार के सूक्ष्मजीव होते हैं जो एककोशिकीय होते हैं।</li>
                  <li><b style={{ color: "green" }}>शैवाल:</b> शैवाल एक प्रकार के सूक्ष्मजीव होते हैं जो बहुकोशिकीय होते हैं।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  दूध को दही में परिवर्तित करने वाले जीवाणु का नाम बताइये।",
            answer: (
              <div>
                <b>उत्तर: </b> <b style={{ color: "green" }}>लैक्टोबैसिलस</b> जीवाणु दूध को दही में परिवर्तित करने में मदद करते हैं।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  यीस्ट श्वसन के दौरान कौन-सी गैस उत्पन्न करते हैं?",
            answer: (
              <div>
                <b>उत्तर: </b> यीस्ट श्वसन के दौरान <b style={{ color: "green" }}>कार्बन डाइऑक्साइड</b> गैस उत्पन्न करते हैं।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  एंटीबायोटिक क्या है?",
            answer: (
              <div>
                <b>उत्तर: </b> <b style={{ color: "green" }}>एंटीबायोटिक</b> ऐसी औषधि होती है जो जीवाणुओं के वृद्धि को रोक देती है या उन्हें समूल नष्ट कर देती है।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  पेनिसिलिन की खोज किसने और कब की?",
            answer: (
              <div>
                <b>उत्तर: </b> सन <b style={{ color: "green" }}>1929</b> में <b style={{ color: "green" }}>अलेक्जेंडर फ्लेमिंग</b> ने पेनिसिलिन की खोज की।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  शिशु एवं बच्चों को टीका क्यों लगाया जाता है?",
            answer: (
              <div>
                <b>उत्तर: </b> शिशु एवं बच्चों के शरीर में प्रतिरक्षी उत्पन्न करके रोगकारक सूक्ष्मजीव को नष्ट करने के लिए टीका लगाया जाता है। जैसे - हैजा , क्षय आदि बीमारियों को टीके द्वारा रोका जा सकता है।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  किण्वन किसे कहते हैं?",
            answer: (
              <div>
                <b>उत्तर: </b> किण्वन एक प्रक्रिया है जिसमें फलों के रसों से अल्कोहल या शराब बनाई जाती है इसमें यीस्ट प्राकृतिक शर्करा को निम्नीकरण कर अल्कोहल में परिवर्तित कर देते हैं।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  उस प्रक्रिया का नाम बताइये जिसमें फलों के रसों से अल्कोहल या शराब बनाई जाती है?",
            answer: (
              <div>
                <b>उत्तर: </b> <b style={{ color: "green" }}>किण्वन</b> प्रक्रिया।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  संचरणीय रोग किसे कहते हैं?",
            answer: (
              <div>
                <b>उत्तर: </b> सूक्ष्मजीवों द्वारा फैलने वाला रोग को जो एक संक्रमित व्यक्ति में वायु, जल, भोजन या कायिक संपर्क द्वारा फैलते हैं, <b style={{ color: "green" }}>संचरणीय रोग</b> कहलाते हैं।
              </div>
            ),
          },          
          {
            question: "प्रश्‍न:  जैविक नाइट्रोजन स्थिरिकारक का नाम लिखे?",
            answer: (
              <div>
                <b>उत्तर: </b> <b style={{ color: "green" }}>राइजोबियम जीवाणु</b> एवं <b style={{ color: "green" }}>नील हरित शैवाल</b>।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  वायुमंडल में कितना प्रतिशत नाइट्रोजन गैस है?",
            answer: (
              <div>
                <b>उत्तर: </b> <b style={{ color: "green" }}>78%</b> 
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  संचरणीय रोग का मुख्य कारक क्या है?",
            answer: (
              <div>
                <b>उत्तर: </b> <b style={{ color: "green" }}>घरेलू मक्खी</b>।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  मलेरिया रोग का वाहक का नाम लिखें?",
            answer: (
              <div>
                <b>उत्तर: </b> <b style={{ color: "green" }}>मादा एनाफ्लिज मच्छर</b>।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  ब्रेड या इडली के फूलने का क्या कारण है?",
            answer: (
              <div>
                <b>उत्तर: </b> <b style={{ color: "green" }}>यीस्ट कोशिकाओं की वृद्धि</b>।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  डेंगू के वायरस का वाहक का नाम लिखिए?",
            answer: (
              <div>
                <b>उत्तर: </b> <b style={{ color: "green" }}>मादा एडिस मच्छर</b>।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  टाइफाइड रोग के संचरण का तरीका लिखिए?",
            answer: (
              <div>
                <b>उत्तर: </b> इस रोग का संचरण <b style={{ color: "green" }}>जल</b> के द्वारा होता है।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  हैजा रोग के संचरण का तरीका लिखिए?",
            answer: (
              <div>
                <b>उत्तर: </b> इस रोग का संचरण <b style={{ color: "green" }}>जल या भोजन</b> के द्वारा होता है।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  मच्छर फैलाने से रोकने के तीन उपाई बताइए?",
            answer: (
              <div>
                <b>उत्तर: </b> मच्छर फैलाने से रोकने के तीन उपाई निम्न है:
                <ul>
                  <li><b style={{ color: "green" }}>हमें पानी को कहीं भी रुका नहीं रहने देना चाहिए।</b></li>
                  <li><b style={{ color: "green" }}>इकट्ठा हुए पानी को मिट्टी का तेल या पेट्रोल का छिड़काव करना चाहिए।</b></li>
                  <li><b style={{ color: "green" }}>हमें आस–पास के जगहों को साफ रखना चाहिए।</b></li>
                </ul>
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  सूक्ष्मजीव हमारे मित्र हैं। कैसे?",
            answer: (
              <div>
                <b>उत्तर: </b> सूक्ष्मजीव हमारे मित्र हैं क्योंकि वे:
                <ul>
                  <li><b style={{ color: "green" }}>भोजन के उत्पादन में मदद करते हैं।</b></li>
                  <li><b style={{ color: "green" }}>मिट्टी की उर्वरता में सुधार करते हैं।</b></li>
                  <li><b style={{ color: "green" }}>रोग प्रतिरोधक क्षमता में सुधार करते हैं।</b></li>
                  <li><b style={{ color: "green" }}>कचरे के प्रबंधन में मदद करते हैं।</b></li>
                  <li><b style={{ color: "green" }}>वैक्सीने और दवाओं के उत्पादन में मदद करते हैं।</b></li>
                </ul>
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  यीस्ट और चीनी के साथ मैदे को गूँथ कर कुछ देर छोड़ देने के बाद मैदे का आयतन क्यों बढ़ जाता है?",
            answer: (
              <div>
                <b>उत्तर: </b> यीस्ट और चीनी के साथ मैदे को गूँथ कर कुछ देर छोड़ देने के बाद मैदे का आयतन बढ़ जाता है क्योंकि यीस्ट चीनी को <b style={{ color: "green" }}>कार्बन डाइऑक्साइड</b> और <b style={{ color: "green" }}>अल्कोहल</b> में परिवर्तित करता है, जिससे मैदे में गैस के बुलबुले बनते हैं और मैदे का आयतन बढ़ जाता है।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  नमक और चीनी किस प्रकार से खाद्य की रक्षा करते हैं ?",
            answer: (
              <div>
                <b>उत्तर: </b> नमक और चीनी खाद्य की रक्षा करने में मदद करते हैं क्योंकि वे दोनों ही पानी को सोखने की क्षमता रखते हैं। जब नमक या चीनी को खाद्य में मिलाया जाता है, तो वे पानी को सोख लेते हैं और खाद्य में मौजूद बैक्टीरिया और फंगस को बढ़ने से रोकते हैं। इससे खाद्य की गुणवत्ता बनी रहती है और वह खराब नहीं होता।
              </div>
            ),
          },          
          {
            question: "प्रश्‍न:  वैक्सीन का क्या कार्य है?",
            answer: (
              <div>
                <b>उत्तर: </b> वैक्सीन में रोग के कारक सूक्ष्मजीव को कमजोरी बनाकर सूक्ष्म मात्रा में शरीर में डाला जाता है फिर सूक्ष्मजीव इतना कमजोर हो जाता है कि रोग उत्पन्न नहीं कर सकता है।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  रोगवाहक किसे कहा जाता है?",
            answer: (
              <div>
                <b>उत्तर: </b> सूक्ष्मजीव जनित रोग कुछ कीटों एवं जन्तुओं के माध्यम से फैलते हैं। वास्तव में ये कीट या जन्तु रोग उत्पन्न करनेवाले सूक्ष्मजीवों के वाहक का कार्य करते हैं। इन्हें <b style={{ color: "green" }}>रोगवाहक</b> कहते हैं।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  नाइट्रोजन स्थिरीकरण की उपयोगिता बताएँ?",
            answer: (
              <div>
                <b>उत्तर: </b> नाइट्रोजन स्थिरीकरण से वायुमंडल में नाइट्रोजन के पुनः पूर्ति की प्रक्रिया चलती रहती है और नाइट्रोजन की मात्रा स्थिर रहती है।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  वायुमंडल में सर्वाधिक मात्रा में कौन-सी गैस पायी जाती है?",
            answer: (
              <div>
                <b>उत्तर: </b> वायुमंडल में सर्वाधिक मात्रा में <b style={{ color: "green" }}>नाइट्रोजन गैस</b> पाया जाता है।
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  खाद्य परिरक्षण किस प्रकार किया जा सकता है?",
            answer: (
              <div>
                <b>उत्तर: </b> खाद्य परिरक्षण निम्न प्रकार से किया जाता है:
                <ul>
                  <li><b style={{ color: "green" }}>निर्जलीकरण</b></li>
                  <li><b style={{ color: "green" }}>रासायनिक तरीका</b></li>
                  <li><b style={{ color: "green" }}>नमक और चीनी द्वारा परिरक्षण</b></li>
                  <li><b style={{ color: "green" }}>तेल एवं सिरके द्वारा परिरक्षण</b></li>
                  <li><b style={{ color: "green" }}>गर्म एवं ठंडा करके</b></li>
                  <li><b style={{ color: "green" }}>पॉश्चुरीकरण</b></li>
                  <li><b style={{ color: "green" }}>भंडारण एवं पैकिंग</b></li>
                </ul>
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  सूक्ष्मजीवों द्वारा होनेवाली हानियों का विवरण दीजिए?",
            answer: (
              <div>
                <b>उत्तर: </b> सूक्ष्मजीवों द्वारा होनेवाली हानियाँ:
                <ul>
                  <li><b style={{ color: "green" }}>रोग पैदा करना:</b> सूक्ष्मजीव जैसे कि बैक्टीरिया, वायरस और फंगस कई प्रकार के रोग पैदा कर सकते हैं।</li>
                  <li><b style={{ color: "green" }}>खाद्य का खराब होना:</b> सूक्ष्मजीव जैसे कि बैक्टीरिया और फंगस खाद्य को खराब कर सकते हैं।</li>
                  <li><b style={{ color: "green" }}>पेयजल का प्रदूषण:</b> सूक्ष्मजीव जैसे कि बैक्टीरिया और वायरस पेयजल को प्रदूषित कर सकते हैं।</li>
                  <li><b style={{ color: "green" }}>कृषि उत्पादों का नुकसान:</b> सूक्ष्मजीव जैसे कि फंगस और बैक्टीरिया कृषि उत्पादों को नुकसान पहुँचा सकते हैं।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  रोगकारक सूक्ष्मजीव हमारे शरीर में किस प्रकार प्रवेश करते हैं?",
            answer: (
              <div>
                <b>उत्तर: </b> रोगकारक सूक्ष्मजीव हमारे शरीर में निम्नलिखित तरीकों से प्रवेश कर सकते हैं:
                <ul>
                  <li><b style={{ color: "green" }}>वायुमार्ग:</b> जब हम संक्रमित व्यक्ति के साथ सांस लेते हैं या संक्रमित व्यक्ति के द्वारा छोड़े गए ड्रॉपलेट्स के संपर्क में आते हैं।</li>
                  <li><b style={{ color: "green" }}>जलमार्ग:</b> जब हम संक्रमित जल पीते हैं या संक्रमित जल में नहाते हैं।</li>
                  <li><b style={{ color: "green" }}>आहार:</b> जब हम संक्रमित भोजन खाते हैं या संक्रमित पेय पदार्थों का सेवन करते हैं।</li>
                  <li><b style={{ color: "green" }}>त्वचा:</b> जब हम संक्रमित व्यक्ति के संपर्क में आते हैं या संक्रमित वस्तुओं को छूते हैं।</li>
                  <li><b style={{ color: "green" }}>कीट और जानवर:</b> जब कीट और जानवर संक्रमित होते हैं और हमारे संपर्क में आते हैं।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "प्रश्‍न:  फफूँद जीवाणु पर किस प्रकार प्रभाव डालती है?",
            answer: (
              <div>
                <b>उत्तर: </b> <b style={{ color: "green" }}>फफूँद</b> जीवाणुओं की वृद्धि को रोक देते हैं।
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
            question: "प्रश्‍न:  कपड़े कितने प्रकार के प्राप्त रेशों से बनता है?",
            answer: (
              <div>
                <b>उत्तर: </b> कपड़े दो प्रकार के रेशों से बनता है:
                <ul>
                  <li><b style={{ color: "green" }}>प्राकृतिक रेशे</b></li>
                  <li><b style={{ color: "green" }}>कृत्रिम रेशे</b></li>
                </ul>
              </div>
            ),
          },    
          {
                question: "प्रश्‍न: कुछ प्राकृतिक रेशों एवं उनके स्रोतों के नाम लिखिए।",
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
                question: "प्रश्‍न:  संश्लेषित रेशे किसे कहते हैं?",
                answer: (
                  <div>
                    <b>उत्तर: </b> ऐसे रेशे जो मनुष्य स्वयं तैयार करता है <b style={{ color: "green" }}>संश्लेषित रेशे</b> कहलाते हैं।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  उसे संश्लेषित रेशे के नाम बताइए जिसका तार इस्पात के तार से भी मजबूत होता है?",
                answer: (
                  <div>
                    <b>उत्तर: </b><b style={{ color: "green" }}>नायलॉन</b>।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  संश्लेषित रेशों के एक हानिकारक गुण लिखें?",
                answer: (
                  <div>
                    <b>उत्तर: </b> संश्लेषित रेशों से बने वस्त्र में यदि आग लग जाए तो कपड़ा और पहनने वाला व्यक्ति के शरीर से चिपक जाता है।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  पेट क्या है?",
                answer: (
                  <div>
                    <b>उत्तर: </b> एक बहुत सुपरिचित प्रकार का पॉलिएस्टर है, जिसका उपयोग बोतले, बर्तन, फिल्म, तार और अन्य उपयोगी उत्पादों के निर्माण के लिए किया जाता है।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  ऐक्रिलिक क्या है?",
                answer: (
                  <div>
                    <b>उत्तर: </b> ऐसे ऊन जो प्राकृतिक स्रोतों से न प्राप्त कर संश्लेषित किए जाते हैं, उन्हें <b style={{ color: "green" }}>ऐक्रिलिक</b> कहते हैं। इनसे ऊनी वस्त्र बनाए जाते हैं।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  संश्लेषित रेशों के गुण लिखिए।",
                answer: (
                  <div>
                    <b>उत्तर: </b> संश्लेषित रेशों के गुण निम्नलिखित हैं:
                    <ul>
                      <li><b style={{ color: "green" }}>यह शीघ्र सूखते हैं।</b></li>
                      <li><b style={{ color: "green" }}>अधिक चलाऊ कम महंगे और आसानी से उपलब्ध होते हैं।</b></li>
                      <li><b style={{ color: "green" }}>यह रख रखाव में सुविधाजनक होते हैं।</b></li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  प्लास्टिक कितने प्रकार के होते हैं?",
                answer: (
                  <div>
                    <b>उत्तर: </b> प्लास्टिक दो प्रकार के होते हैं:
                    <ul>
                      <li><b style={{ color: "green" }}>थर्मोप्लास्टिक</b></li>
                      <li><b style={{ color: "green" }}>थर्मोसेटिंग प्लास्टिक</b></li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  सबसे अधिक ऊष्मा सहने की क्षमता वाले प्लास्टिक का नाम लिखिए।",
                answer: (
                  <div>
                    <b>उत्तर: </b><b style={{ color: "green" }}>मेलामाइन</b>।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  थर्मोप्लास्टिक और थर्मोसेटिंग प्लास्टिक में क्या अंतर है?",
                answer: (
                  <div>
                    <b>उत्तर: </b> थर्मोप्लास्टिक और थर्मोसेटिंग प्लास्टिक में निम्नलिखित अंतर हैं:
                    <ul>
                      <li><b style={{ color: "green" }}>थर्मोप्लास्टिक:</b> यह गर्म करने पर विकृत हो जाते हैं। ये सरलता पूर्वक मुड़ जाते हैं। इनका उपयोग खिलौने और बर्तनों के बनाने में किया जाता है।</li>
                      <li><b style={{ color: "green" }}>थर्मोसेटिंग प्लास्टिक:</b> यह गर्म करने पर विकृत नहीं होते हैं। यह मुड़ते नहीं हैं। इनसे बर्तनों के हत्थे जैसा गर्मी सहने वाला सामान बनाए जाते हैं।</li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  आग बुझाने वाले कर्मचारियों के परिधानों पर किस पदार्थ की परत चढ़ी होती है और क्यों?",
                answer: (
                  <div>
                    <b>उत्तर: </b><b style={{ color: "green" }}>मेलामाइन</b> की, क्योंकि ये आग का प्रतिरोधक है।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  रेशा का नाम बताइए जो : (i) जलने पर कागज का गंध देता हो।",
                answer: (
                  <div>
                    <b>उत्तर: </b><b style={{ color: "green" }}>सूती वस्त्र</b>।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  (ii) जलने पर जलते हुए बाल का गंध देता हो।",
                answer: (
                  <div>
                    <b>उत्तर: </b><b style={{ color: "green" }}>रेशम</b>।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  (iii) जलने पर उबलती हुई फली का गंध देता हो।",
                answer: (
                  <div>
                    <b>उत्तर: </b><b style={{ color: "green" }}>नायलॉन</b>।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  ऊन की पहचान क्या है?",
                answer: (
                  <div>
                    <b>उत्तर: </b> यह धीरे-धीरे जलती है। जलते समय इसमें से पंखों के जलने के समान गंध निकलती है। जलने के उपरांत काले रंग के गुब्बारे जैसा अवशिष्ट पदार्थ रह जाता है।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  टेरीलीन क्या है?",
                answer: (
                  <div>
                    <b>उत्तर: </b><b style={{ color: "green" }}>टेरीलीन</b> एक लोकप्रिय पॉलिएस्टर है।
                  </div>
                ),
              },
              
              {
                question: "प्रश्‍न:  सूती कपड़ों को नमीयुक्त जगहों पर रखने से क्या प्रभाव पड़ता है?",
                answer: (
                  <div>
                    <b>उत्तर: </b> नमीयुक्त जगहों पर रखने से <b style={{ color: "green" }}>फफूँद</b> लग जाती है।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  नायलॉन का निर्माण किन चीजों से होता है?",
                answer: (
                  <div>
                    <b>उत्तर: </b> <b style={{ color: "green" }}>कोयला, जल और वायु</b> से यह बनता है। यह रेशा मजबूत, लचीला और हल्का होता है।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  कृत्रिम रेशा किसे कहते हैं?",
                answer: (
                  <div>
                    <b>उत्तर: </b> आज के युग में नवीन रासायनिक रेशों का आविष्कार किया गया है, जिसे <b style={{ color: "green" }}>कृत्रिम या मानव निर्मित रेशा</b> कहते हैं।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  रेशम की पहचान किस प्रकार होती है?",
                answer: (
                  <div>
                    <b>उत्तर: </b> रेशम हवा में जल्दी जल जाती है और जलते समय उसमें से पंखों या बालों के जलने के समान गंध निकलती है। जले हुए किनारों पर चिपचिपे दाने पड़ जाते हैं।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  संश्लेषित रेशों के उदाहरण क्या हैं?",
                answer: (
                  <div>
                    <b>उत्तर: </b> संश्लेषित रेशों के उदाहरण <b style={{ color: "green" }}>नायलॉन, पॉलिएस्टर, और एक्रिलिक</b> हैं।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  प्लास्टिक के उपयोग क्या हैं?",
                answer: (
                  <div>
                    <b>उत्तर: </b> प्लास्टिक के उपयोग विभिन्न हैं, जैसे कि <b style={{ color: "green" }}>पैकेजिंग, फर्नीचर, ऑटोमोबाइल, और चिकित्सा उपकरणों</b> में।
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  संश्लेषित रेशों और प्लास्टिक के नुकसान क्या हैं?",
                answer: (
                  <div>
                    <b>उत्तर: </b> संश्लेषित रेशों और प्लास्टिक के नुकसान हैं:
                    <ul>
                      <li><b style={{ color: "green" }}>पर्यावरण प्रदूषण</b></li>
                      <li><b style={{ color: "green" }}>जानवरों के लिए हानिकारक</b></li>
                      <li><b style={{ color: "green" }}>गैर-बायोडिग्रेडेबल होना</b></li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "प्रश्‍न:  रेशम किस प्रकार प्राप्त किया जाता है?",
                answer: (
                  <div>
                    <b>उत्तर: </b> रेशम प्राप्त करने की प्रक्रिया निम्नलिखित है:
                    <ul>
                      <li><b style={{ color: "green" }}>रेशमकीट का पालन:</b> रेशमकीट के अंडों को उबालकर निकाला जाता है और उन्हें एक विशेष कमरे में रखा जाता है जहां वे 3-4 दिनों में बच्चे में बदल जाते हैं।</li>
                      <li><b style={{ color: "green" }}>कोकून का निर्माण:</b> रेशमकीट के बच्चे पत्तियों को खाकर बड़े होते हैं और लगभग 30 दिनों में वे कोकून बनाने लगते हैं।</li>
                      <li><b style={{ color: "green" }}>कोकून का संग्रह:</b> जब रेशमकीट कोकून बना लेता है, तो उसे सावधानी से इकट्ठा किया जाता है।</li>
                      <li><b style={{ color: "green" }}>कोकून का उबालना:</b> इकट्ठे किए गए कोकून को उबालकर रेशमकीट को मार दिया जाता है।</li>
                      <li><b style={{ color: "green" }}>रेशम का निकालना:</b> उबले हुए कोकून से रेशम को निकाला जाता है। यह प्रक्रिया हाथ से या मशीन की मदद से की जा सकती है।</li>
                      <li><b style={{ color: "green" }}>रेशम का साफ़ करना:</b> निकाले गए रेशम को साफ़ किया जाता है और उसे सुखाया जाता है।</li>
                      <li><b style={{ color: "green" }}>रेशम का बुनना:</b> साफ़ और सूखे रेशम को बुनकर कपड़ा बनाया जाता है।</li>
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
              question: "प्रश्‍न: पदार्थ किसे कहते हैं?",
              answer: (
                <div>
                  <p>
                    <b>उत्तर: </b> वह वस्तु जो स्थान घिरे और उसमें कुछ न कुछ द्रव्यमान (वजन) हो वह वस्तु पदार्थ कहलाता है।
                  </p>
                </div>
              ),
            },
            {
              question: "प्रश्‍न: पदार्थ कितनी अवस्थाओं में पाया जाता है?",
              answer: (
                <div>
                  <b>उत्तर: </b> पदार्थ तीन अवस्थाओं में पाया जाता है:
                  <ul className="list-decimal ml-6 text-gray-800">
                    <li><b style={{ color: 'green' }}>ठोस</b> </li>
                    <li><b style={{ color: 'green' }}>द्रव्य</b> </li>
                    <li><b style={{ color: 'green' }}>गैस</b> </li>
                  </ul>
            
                  <b style={{ color: 'green' }}>ठोस: </b> पदार्थ की वह अवस्थाएँ जिनका आकार एवं आयतन दोनों निश्‍चित हो। <br />
                  <b>जैसे:</b> पत्थर, फुटबॉल इत्यादि।
                  <br />
            
                  <b style={{ color: 'green' }}>द्रव्य: </b> पदार्थ की वह अवस्थाएँ जिनका आकार अनिश्‍चित एवं आयतन निश्‍चित हो। <br />
                  <b>जैसे:</b> पानी, डीजल, पेट्रोल इत्यादि।
                  <br />
            
                  <b style={{ color: 'green' }}>गैस: </b> पदार्थ की वह अवस्थाएँ जिनका आकार एवं आयतन दोनों अनिश्‍चित हो। <br />
                  <b>जैसे:</b> कार्बन डाई ऑक्साइड, नाइट्रोजन गैस।
                </div>
              ),
            },
               {
                question: "प्रश्‍न: धातु किसे कहते हैं?",
                answer: (
                  <div>
                    <p>
                      <b>उत्तर: </b> वे पदार्थ जिसमें विशेष प्रकार की चमक हो और इलेक्ट्रॉन
                      त्याग कर धन आयन बनाते हैं, एवं धातुओं को पीट-पीटकर चौड़ा किया जा सकता
                      है। <br />
                      <i>जैसे:</i> सोना, चांदी, सोडियम।
                    </p>
                  </div>
                ),
              },
              {
                question: "प्रश्‍न: अधातु किसे कहते हैं?",
                answer: (
                  <div>
                    <p>
                      <b>उत्तर: </b> वे पदार्थ जिसमें विशेष प्रकार की चमक नहीं होती है तथा
                      अधातु को पीटने पर भंगुर हो जाते हैं। <br />
                      <i>जैसे:</i> ऑक्सीजन, सल्फर, क्लोरीन, ब्रोमीन इत्यादि।
                    </p>
                  </div>
                ),
              },
              {
                question: "प्रश्‍न: अक्रिय धातु किसे कहते हैं?",
                answer: (
                  <div>
                    <p>
                      <b>उत्तर: </b> कुछ धातुएँ प्रकृति में स्वतंत्र अवस्था में पाई जाती हैं
                      जिन्हें अक्रिय धातु कहते हैं। <br />
                      <i>जैसे:</i> सोना, चाँदी और प्लेटिनियम।
                    </p>
                  </div>
                ),
              },
              {
                question: "प्रश्‍न: धातु और अधातु में क्या अंतर है?",
                answer: (
                  <div>
                    <p>
                      <b>उत्तर: </b> धातु और अधातु में निम्न अंतर है:
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
                question: "प्रश्‍न: आघातवर्ध्यता किसे कहते हैं?",
                answer: (
                  <div>
                    <p>
                      <b>उत्तर: </b> जिन धातुओं को पीटकर चादर बनाई जाती है, उसे धातुओं के
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
                question: "प्रश्‍न: कॉपर जिंक को उसके लवण के विलयन से विस्थापित नहीं कर सकता है?",
                answer: (
                  <div>
                    <p>
                      <b>उत्तर: </b> कॉपर जिंक को उसके लवण के विलयन से विस्थापित नहीं कर सकता
                      है, क्योंकि जिंक कॉपर से अधिक अभिक्रियाशील है।
                    </p>
                  </div>
                ),
              },
              {
                question: "प्रश्‍न: तन्यता किसे कहते हैं?",
                answer: (
                  <div>
                    <p>
                      <b>उत्तर: </b> जिन धातुओं को खींच कर लंबी तार बनाई जा सकती है धातुओं
                      के इस गुण को तन्यता कहते हैं।
                    </p>
                  </div>
                ),
              },
              {
                question: "प्रश्‍न: कॉपर में जंग लगता है तो उसका रंग कैसा होता है?",
                answer: (
                  <div>
                    <p>
                      <b>उत्तर: </b> <span className="text-green-500"> हरा (Green)</span>
                    </p>
                  </div>
                ),
              },
      
                {
                  question: "प्रश्‍न: अपरूप किसे कहते हैं? कार्बन के दो अपरूपों के नाम लिखें?",
                  answer: (
                    <div>
                      <p>
                        <b>उत्तर: </b> एक ही तत्व के अलग-अलग रूपों को अपरूप कहते हैं। <br />
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
                  question: "प्रश्‍न: मिश्र धातु किसे कहते हैं?",
                  answer: (
                    <div>
                      <p>
                        <b>उत्तर: </b> धातुओं और अधातुओं के मिश्रण से बने पदार्थ मिश्र धातु
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
                  question: "प्रश्‍न: धात्विक ऑक्साइड की प्रकृति कैसी होती है?",
                  answer: (
                    <div>
                      <p>
                        <b>उत्तर: </b> धात्विक ऑक्साइड की प्रकृति क्षारीय होती है।
                      </p>
                    </div>
                  ),
                },
                {
                  question: "प्रश्‍न: अधात्विक ऑक्साइड की प्रकृति कैसी होती है?",
                  answer: (
                    <div>
                      <p>
                        <b>उत्तर: </b> अधात्विक ऑक्साइड की प्रकृति अम्लीय होती है।
                      </p>
                    </div>
                  ),
                },
                {
                  question: "प्रश्‍न: धातु अम्ल से अभिक्रिया करके कौन सा गैस उत्पन्न करते हैं?",
                  answer: (
                    <div>
                      <p>
                        <b>उत्तर: </b> हाइड्रोजन गैस।
                      </p>
                    </div>
                  ),
                },
                {
                  question: "प्रश्‍न: पॉप ध्वनि के साथ जलने वाले गैस का नाम लिखिए?",
                  answer: (
                    <div>
                      <p>
                        <b>उत्तर: </b> हाइड्रोजन गैस।
                      </p>
                    </div>
                  ),
                },
                {
                  question: "प्रश्‍न: एक ऐसे धातु के नाम लिखें जो कमरे के ताप पर द्रव्य अवस्था में पाया जाता है?",
                  answer: (
                    <div>
                      <p>
                        <b>उत्तर: </b> पारा।
                      </p>
                    </div>
                  ),
                },
                {
                  question: "प्रश्‍न: दो ऐसे धातु का नाम बताइए जिसे चाकू से काटा जा सकता है?",
                  answer: (
                    <div>
                      <p>
                        <b>उत्तर: </b> सोडियम और पोटैशियम।
                      </p>
                    </div>
                  ),
                },
                {
                  question: "प्रश्‍न: मैग्नीशियम रिबन को वायु में जलने पर क्या होता है?",
                  answer: (
                    <div>
                      <p>
                        <b>उत्तर: </b> मैग्नीशियम ऑक्साइड बनता है।
                      </p>
                    </div>
                  ),
                },
                {
                  question: "प्रश्‍न: पॉप ध्वनि किसे कहते हैं?",
                  answer: (
                    <div>
                      <p>
                        <b>उत्तर: </b> हाइड्रोजन गैस को जलाने पर जो ध्वनि निकलती है उसे पॉप
                        ध्वनि कहते हैं।
                      </p>
                    </div>
                  ),
                },
                // {
                //   question: "प्रश्‍न: विस्थापन अभिक्रिया किसे कहते हैं?",
                //   answer: (
                //     <div>
                //       <p>
                //         <b>उत्तर: </b> ऐसी अभिक्रिया जिसमें अधिक क्रियाशील धातु कम क्रियाशील
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
                  question: "प्रश्‍न: विस्थापन अभिक्रिया किसे कहते हैं?",
                  answer: (
                    <div>
                      <p>
                        <b>उत्तर: </b> ऐसी अभिक्रिया जिसमें अधिक क्रियाशील धातु कम क्रियाशील
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
                        <b style={{ color: 'green' }}>इस अभिक्रिया को हम निम्न रासायनिक समीकरण से दर्शा सकते हैं:</b>
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
                        <b style={{ color: 'green' }}>इस अभिक्रिया में क्या हुआ:</b>
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
                  question: "प्रश्‍न: सोडियम और पोटेशियम को खुला वायु में छोड़ने पर क्या होता है?",
                  answer: (
                    <div>
                      <b>उत्तर: </b> सोडियम और पोटेशियम को खुला वायु में छोड़ने पर <b style={{ color: 'red' }}>आग पकड़ लेता है</b>।
                    </div>
                  ),
                },
                
                {
                  question: "प्रश्‍न: आभूषण बनाने में कितने कैरेट सोने का उपयोग किया जाता है?",
                  answer: (
                    <div>
                      <b>उत्तर: </b> आभूषण बनाने में <b style={{ color: 'green' }}>24 कैरेट सोने</b> का उपयोग किया जाता है।
                    </div>
                  ),
                },
                
                {
                  question: "प्रश्‍न: सबसे सरल हाइड्रोकार्बन का नाम लिखें?",
                  answer: (
                    <div>
                      <b>उत्तर: </b> सबसे सरल हाइड्रोकार्बन <b style={{ color: 'blue' }}>मीथेन (CH₄)</b> है।
                    </div>
                  ),
                },
                
                {
                  question: "प्रश्‍न: हाइड्रोकार्बन क्या है? किन्ही तीन हाइड्रोकार्बन का नाम लिखें?",
                  answer: (
                    <div>
                      <b>उत्तर: </b> हाइड्रोजन तथा कार्बन से बने यौगिक को <b style={{ color: 'purple' }}>हाइड्रोकार्बन</b> कहते हैं।
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
                  question: "प्रश्‍न: सोल्डर क्या है? और कहाँ उपयोग होता है?",
                  answer: (
                    <div>
                      <b>उत्तर: </b> सोल्डर एक मिश्र धातु है जो टीन और लैड के मिश्रण से बनाया जाता है। इसे <b style={{ color: 'brown' }}>बिजली के तारों को जोड़ने</b> में उपयोग किया जाता है।
                    </div>
                  ),
                },
                
                {
                  question: "प्रश्‍न: हीरे और ग्रेफाइट के गुणों में क्या अंतर होता है?",
                  answer: (
                    <div>
                      <b>उत्तर: </b>
                      <ul className="list-decimal ml-6 text-gray-800">
                        <li><b style={{ color: 'blue' }}>हीरा</b>: रंगहीन, पारदर्शी, ठोस तथा कठोर होता है। यह विद्युत का <b style={{ color: 'red' }}>कुचालक</b> होता है।</li>
                        <li><b style={{ color: 'blue' }}>ग्रेफाइट</b>: काला, चमकदार, ठोस, बहुत मुलायम, चिकना और फिसलदार होता है। यह विद्युत का <b style={{ color: 'green' }}>सुचालक</b> होता है।</li>
                      </ul>
                    </div>
                  ),
                },
                
                {
                  question: "प्रश्‍न: मिश्र धातुओं के बनाने के क्या फायदा है?",
                  answer: (
                    <div>
                      <b>उत्तर: </b> मिश्र धातु के बनाने के निम्न <b style={{ color: 'purple' }}>फायदा</b> हैं:
                      <ul className="list-decimal ml-6 text-gray-800">
                        <li><b style={{ color: 'green' }}>मिश्र धातु तत्वों के मुकाबले अधिक मजबूत और कठोर होता है।</b></li>
                        <li><b style={{ color: 'green' }}>मिश्र धातु पर जंग नहीं लगता है।</b></li>
                        <li><b style={{ color: 'green' }}>मिश्र धातुओं से उपयोगी वस्तुएँ बनायी जाती हैं।</b></li>
                      </ul>
                    </div>
                  ),
                },
                
                {
                  question: "प्रश्‍न: ध्वनिकता क्या है?",
                  answer: (
                    <div>
                      <b>उत्तर: </b> धातुओं को कठोर सतह से टकराने पर एक प्रकार की आवाज उत्पन्न होती है, जिसे <b style={{ color: 'red' }}>ध्वनिकता</b> कहा जाता है।
                    </div>
                  ),
                },
                {
                  question: "प्रश्‍न: लोहे पर जंग लगने का मुख्य कारण क्या है?",
                  answer: (
                    <div>
                      <b>उत्तर: </b> लोहे पर जंग लगने का मुख्य कारण <b style={{ color: 'red' }}>ऑक्सीजन और नमी</b> की उपस्थिति है। जब लोहा पानी और हवा के संपर्क में आता है, तो यह ऑक्सीजन के साथ अभिक्रिया करके आयरन ऑक्साइड बनाता है, जिसे हम <b style={{ color: 'green' }}>जंग</b> कहते हैं।
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
                  question: "प्रश्‍न: सोडियम को किरोसीन तेल में डूबाकर क्यों रखा जाता है?",
                  answer: (
                    <div>
                      <b>उत्तर: </b> सोडियम एक बेहद क्रियाशील धातु है। यह हवा में मौजूद ऑक्सीजन और पानी के साथ बहुत तेजी से प्रतिक्रिया करता है। इस प्रतिक्रिया से काफी गर्मी पैदा होती है जिससे सोडियम में आग लग सकती है। इसे रोकने के लिए सोडियम को <b style={{ color: 'orange' }}>केरोसिन तेल</b> में डुबोकर रखा जाता है क्योंकि:
                      <ul className="list-decimal ml-6 text-gray-800">
                        <li><b style={{ color: 'green' }}>केरोसिन तेल</b> सोडियम को हवा और पानी से पूरी तरह से अलग कर देता है। इससे सोडियम, हवा और पानी के संपर्क में आने से बच जाता है और प्रतिक्रिया नहीं कर पाता।</li>
                        <li><b style={{ color: 'green' }}>केरोसिन तेल</b> एक अक्रिय पदार्थ है। यह सोडियम के साथ किसी भी तरह की प्रतिक्रिया नहीं करता, जिससे सोडियम सुरक्षित रहता है।</li>
                      </ul>
                      <b>संक्षेप में:</b> <i>सोडियम को केरोसिन तेल में डुबोकर रखने का मुख्य उद्देश्य इसे हवा और पानी के संपर्क में आने से बचाना है ताकि यह प्रतिक्रिया न करे और आग लगने का खतरा कम हो।</i>
                    </div>
                  ),
                },
                
                
                
                
                
            
              
    
            




            
          ]
        }
            
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
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
    <div
      className="border-b-2 border-gray-300 pb-4 cursor-pointer"
    //   onClick={() => setIsOpen(!isOpen)}
    >
      <h3 className="text-lg font-medium text-red-600 flex justify-between items-center">
        {`${questionNumber}. ${faq.question}`}
        {/* <span className="text-indigo-500 text-xl font-bold">{isOpen ? "-" : "+"}</span> */}
      </h3>
      {isOpen || <div className="text-gray-600 mt-4">{faq.answer}</div>}
    </div>
  );
};

export default FAQ;

