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
    {
      chapterName: "अध्याय 1: फसल उत्पादन एवं प्रबंधन",
      questions: [
        {
          question: "फसल किसे कहते हैं?",
          answer: "जब एक ही किस्म के पौधे किसी स्थान पर बड़े पैमाने पर उगाए जाते हैं तो इसे फसल कहते हैं।",
        },
        {
          question: "जुताई किसे कहते हैं?",
          answer: "मिट्टी को उलटने-पलटने एवं पोला करने की प्रक्रिया को जुताई कहते हैं।",
        },
        {
          question: "खाद एवं उर्वरक किसे कहते हैं?",
          answer: "वे पदार्थ जिन्हें मिट्टी में पोषक तत्व बनाए रखने के लिए मिलाया जाता है, उन्हें खाद एवं उर्वरक कहते हैं।",
        },
        {
            question: "उर्वरक कैसे बनाया जाता है?",
            answer: "खाद जैविक प्रक्रिया द्वारा फैक्ट्रियों में बनाया जाता है।",
          },
          {
            question: "फसल चक्रण किसे कहते हैं?",
            answer: "फसलों को अदल-बदल कर बोना फसल चक्रण कहलाता है।",
          },
          {
            question: "खेतों में लगातार फसल उगाने से क्या हानियाँ हैं?",
            answer: "खेतों में लगातार फसल उगाने से खेतों में पोषक तत्वों की कमी हो जाती है।",
          },
          {
            question: "तीन उर्वरकों के नाम लिखें।",
            answer: "यूरिया, अमोनियम, सल्फेट।",
          },
          
          
        {
          question: "खाद एवं उर्वरक में क्या अंतर है?",
          answer: (
            <div>
              <h3 className="font-bold text-lg mb-2 text-indigo-700">खाद और उर्वरक का अंतर:</h3>
              <table className="table-auto border-collapse border border-gray-400 text-gray-800">
                <thead>
                  <tr>
                    <th className="border border-gray-400 px-4 py-2">खाद</th>
                    <th className="border border-gray-400 px-4 py-2">उर्वरक</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">जैविक पदार्थ</td>
                    <td className="border border-gray-400 px-4 py-2">रासायनिक पदार्थ</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">सभी प्रकार के पोषक तत्व</td>
                    <td className="border border-gray-400 px-4 py-2">विशेष पोषक तत्व</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">अपशिष्ट से तैयार</td>
                    <td className="border border-gray-400 px-4 py-2">फैक्ट्रियों में तैयार</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
            question: "सिंचाई के पारम्परिक तरीके कौन-कौन से हैं?",
            answer: (
              <div>
                <p>सिंचाई के पारम्परिक निम्न तरीके हैं:</p>
                <ul className="list-decimal ml-6 text-gray-800">
                  <li>मोटर</li>
                  <li>चेन पम्प</li>
                  <li>ढकली</li>
                  <li>रिहट</li>
                </ul>
              </div>
            ),
          },
          {
            question: "सिंचाई के प्रमुख स्त्रोतों के नाम बताइये?",
            answer: (
              <div>
                <p>सिंचाई के प्रमुख स्त्रोत निम्न हैं:</p>
                <ul className="list-decimal ml-6 text-gray-800">
                  <li>कुएँ</li>
                  <li>नलकूप</li>
                  <li>तालाब या झील</li>
                  <li>नदियाँ</li>
                  <li>बांध और नहर आदि |</li>
                </ul>
              </div>
            ),
          },          
          {
            question: "उर्वरक किसे कहते हैं? किन्हीं दो उर्वरकों के नाम लिखे।",
            answer: (
              <div>
                <p>मिट्टी की उर्वरक शक्ति को बढ़ाने वाले तत्वों को उर्वरक कहते हैं।</p>
                <p>जैसे:</p>
                <ul className="list-decimal ml-6 text-gray-800">
                  <li>यूरिया</li>
                  <li>फास्फेट</li>
                </ul>
              </div>
            ),
          },
          {
            "question": "खरपतवार क्या हैं?",
            "answer": "फसलों के साथ कुछ अनचाहे पौधे भी उग आते हैं। इन पौधों को हम खरपतवार कहते हैं।"
          },
          {
            "question": "पीड़कनाशी क्या हैं?",
            "answer": "फल या फसलों उत्पादों की हानि पहुंचाने वाले जीवों को मारने वाली रासायनिक दवाइयों को पीड़कनाशी कहते हैं।"
          },
          {
            "question": "हार्वेस्टर क्या है?",
            "answer": "वह मशीन जिससे फसलों की कटाई की जाती है उसे हार्वेस्टर कहते हैं।"
          },
          {
            "question": "दालों की फसलों की जड़ों में कौनसा जीवाणु पाया जाता है?",
            "answer": "राइजोबियम नामक जीवाणु पाया जाता है।"
          },
          {
            "question": "हरित क्रांति से क्या तात्पर्य है?",
            "answer": "कृषि उत्पादन में तेजी से वृद्धि हुई है, इसे हरित क्रांति कहते हैं।"
          },
          {
            "question": "कॉम्बाइन मशीन क्या है?",
            "answer": "कॉम्बाइन मशीन वह मशीन है जो हार्वेस्टर तथा थ्रेशर दोनों का कार्य करता है, उसे कॉम्बाइन मशीन कहते हैं।"
          },
          {
            "question": "थ्रेशर क्या है?",
            "answer": "काटी गई फसलों से बीजों या दानों को भूसे से अलग करने की विधि को थ्रेशर कहते हैं।"
          },
          {
            question: "खरीफ फसल क्या है?",
            answer: (
              <div>
                <p>वह फसल जिन्हें वर्षा ऋतु में बोया जाता है, उन्हें खरीफ फसल कहते हैं।</p>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>धान</li>
                  <li>मक्का</li>
                  <li>कपास</li>
                  <li>सोयाबीन</li>
                  <li>मूंगफली</li>
                </ul>
                <p>नोट: भारत में वर्षा ऋतु सामान्यतः जून से सितंबर तक होती है।</p>
              </div>
            ),
          },          
          {
            question: "रबी फसल क्या है?",
            answer: (
              <div>
                <p>शीत ऋतु (अक्टूबर से मार्च तक) उगाई जाने वाली फसलें रबी फसल कहलाती हैं।</p>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>गेहूं</li>
                  <li>चना</li>
                  <li>मटर</li>
                  <li>सरसों इत्यादि।</li>
                </ul>
              </div>
            ),
          }, 
          {
            question: "समय-समय पर खेतों में खाद क्यों देनी चाहिए?",
            answer: (
              <div>
                <p>समय-समय पर खेतों में खाद देने के फायदे:</p>
                <ul className="list-decimal ml-6 text-gray-800">
                  <li>
                    <b>मिट्टी की उर्वरता बढ़ती है:</b> खाद में पोषक तत्व होते हैं जो मिट्टी की उर्वरता बढ़ाते हैं। इससे मिट्टी की क्षमता बढ़ती है और वह अधिक पौधों को सहारा दे सकती है।
                  </li>
                  <li>
                    <b>पौधों की वृद्धि बढ़ती है:</b> खाद में पोषक तत्व पौधों की वृद्धि को बढ़ावा देते हैं। इससे पौधे अधिक तेजी से बढ़ते हैं और उनकी पत्तियाँ और फल अधिक स्वस्थ होते हैं।
                  </li>
                  <li>
                    <b>फसल की गुणवत्ता में सुधार होता है:</b> खाद के उपयोग से फसल की गुणवत्ता में सुधार होता है। इससे फसल का स्वाद, रंग और पौष्टिकता बढ़ती है।
                  </li>
                  <li>
                    <b>मिट्टी की संरचना में सुधार होता है:</b> खाद के उपयोग से मिट्टी की संरचना में सुधार होता है। इससे मिट्टी की जल धारण क्षमता बढ़ती है और वह अधिक पौधों को सहारा दे सकती है।
                  </li>
                  <li>
                    <b>कीटों और रोगों का प्रभाव कम होता है:</b> खाद के उपयोग से कीटों और रोगों का प्रभाव कम होता है। इससे फसल की सुरक्षा बढ़ती है और वह अधिक स्वस्थ होती है।
                  </li>
                </ul>
              </div>
            ),
          },                   
          {
            question: "अच्छी फसल के लिए हमें किन-किन बातों पर ध्यान देना चाहिए?",
            answer: (
              <div>
                <p>अच्छी फसल के लिए हमें निम्नलिखित बातों पर ध्यान देना चाहिए:</p>
                <ul className="list-decimal ml-6 text-gray-800">
                  <li>
                    <b>मिट्टी की तैयारी:</b> मिट्टी की जाँच करें और उसमें आवश्यक पोषक तत्व मिलाएं। (उदाहरण: गोबर की खाद)
                  </li>
                  <li>
                    <b>बीज का चयन:</b> अच्छी गुणवत्ता वाले बीज का चयन करें। (उदाहरण: हाइब्रिड बीज)
                  </li>
                  <li>
                    <b>सिंचाई:</b> पौधों को आवश्यक पानी दें। (उदाहरण: ड्रिप सिंचाई)
                  </li>
                  <li>
                    <b>उर्वरकों का उपयोग:</b> अच्छी गुणवत्ता वाले उर्वरकों का उपयोग करें। (उदाहरण: यूरिया)
                  </li>
                  <li>
                    <b>कीट और रोग नियंत्रण:</b> कीट और रोग की पहचान करें और उनके नियंत्रण के लिए आवश्यक कदम उठाएं। (उदाहरण: कीटनाशकों का उपयोग)
                  </li>
                  <li>
                    <b>फसल की देखभाल:</b> फसल की नियमित जाँच करें और उसकी आवश्यकताओं को पूरा करें। (उदाहरण: फसल की पत्तियों की जाँच)
                  </li>
                </ul>
              </div>
            ),
          },
          
          {
            question: "फसल का संरक्षण कैसे किया जाता है?",
            answer: (
              <div>
                <p>फसल का संरक्षण करने के लिए निम्नलिखित तरीकों का पालन किया जा सकता है:</p>
                <ul className="list-decimal ml-6 text-gray-800">
                  <li>
                    <b>कीट और रोग नियंत्रण:</b> कीटनाशकों का उपयोग या जैविक नियंत्रण विधियों का प्रयोग।
                  </li>
                  <li>
                    <b>फसल की नियमित जाँच:</b> पौधों को पानी देना, उर्वरकों का उपयोग करना आदि।
                  </li>
                  <li>
                    <b>फसल की सुरक्षा:</b> फसल को जानवरों से बचाने के लिए बाड़ लगाना।
                  </li>
                  <li>
                    <b>मौसम की भविष्यवाणी:</b> मौसम की भविष्यवाणी करें और उसके अनुसार फसल की देखभाल करें।
                  </li>
                  <li>
                    <b>फसल की कटाई और भंडारण:</b> फसल को सही समय पर काटना और उसे सूखे और सुरक्षित स्थान पर भंडारण करना।
                  </li>
                </ul>
              </div>
            ),
          },
          {
            question: "पादप संकरण क्या है?",
            answer: (
              <div>
                <p>
                  पादप संकरण एक ऐसी प्रक्रिया है जिसमें दो या दो से अधिक पौधों के बीच जेनेटिक सामग्री का आदान-प्रदान किया जाता है, जिससे एक नई पौधा प्रजाति का निर्माण होता है।
                </p>
              </div>
            ),
          },
          
          {
            question: "सिंचाई किसे कहते है? इसकी आवश्यकता क्यों होती है?",
            answer: (
              <div>
                <p>
                  <b>सिंचाई की परिभाषा:</b> सिंचाई एक ऐसी प्रक्रिया है जिसमें पौधों को पानी दिया जाता है ताकि वे स्वस्थ और उत्पादक बने रहें।
                </p>
                <p>
                  <b>सिंचाई की आवश्यकता:</b> सिंचाई की आवश्यकता निम्नलिखित कारणों से होती है:
                </p>
                <ul className="list-decimal ml-6 text-gray-800">
                  <li><b>पौधों की वृद्धि:</b> पौधों को पानी की आवश्यकता होती है ताकि वे स्वस्थ और उत्पादक बने रहें।</li>
                  <li><b>मिट्टी की नमी:</b> मिट्टी में नमी की कमी होने पर पौधों को पानी देना आवश्यक होता है।</li>
                  <li><b>मौसम की परिस्थितियाँ:</b> शुष्क मौसम में पौधों को पानी देना आवश्यक होता है ताकि वे सूखने से बचें।</li>
                  <li><b>फसल की उत्पादकता:</b> सिंचाई से फसल की उत्पादकता में वृद्धि होती है और फसल की गुणवत्ता में सुधार होता है।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "जैविक खाद से क्या लाभ है?",
            answer: (
              <div>
                <p>जैविक खाद के निम्नलिखित लाभ हैं:</p>
                <ul className="list-decimal ml-6 text-gray-800">
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
            question: "खेतों की बार-बार सिंचाई करने की आवश्यकता क्यों होती है?",
            answer: (
              <div>
                <p>खेतों की बार-बार सिंचाई करने की आवश्यकता निम्नलिखित कारणों से होती है:</p>
                <ul className="list-decimal ml-6 text-gray-800">
                  <li><b>मिट्टी की नमी की कमी:</b> मिट्टी में नमी की कमी होने पर पौधों को पानी की आवश्यकता होती है।</li>
                  <li><b>मौसम की परिस्थितियाँ:</b> शुष्क मौसम में पौधों को पानी की आवश्यकता होती है ताकि वे सूखने से बचें।</li>
                  <li><b>पौधों की वृद्धि:</b> पौधों की वृद्धि के लिए पानी की आवश्यकता होती है।</li>
                  <li><b>मिट्टी की उर्वरता:</b> मिट्टी की उर्वरता बनाए रखने के लिए पानी की आवश्यकता होती है।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "फसलों की उपज में सुधार हेतु महत्वपूर्ण सुझाव दीजिए।",
            answer: (
              <div>
                <p>फसलों की उपज में सुधार हेतु महत्वपूर्ण सुझाव निम्नलिखित है:</p>
                <ul className="list-decimal ml-6 text-gray-800">
                  <li>उचित बीज चयन: फसल की आवश्यकताओं के अनुसार उचित बीज का चयन करें।</li>
                  <li>मिट्टी की जाँच: मिट्टी की जाँच करें और आवश्यक पोषक तत्वों का उपयोग करें।</li>
                  <li>सिंचाई प्रबंधन: सिंचाई का सही तरीके से प्रबंधन करें ताकि पानी की बर्बादी न हो।</li>
                  <li>उर्वरकों का उपयोग: उर्वरकों का उपयोग करें लेकिन उनकी मात्रा का ध्यान रखें।</li>
                  <li>कीट और रोग नियंत्रण: कीट और रोग का नियंत्रण करें ताकि फसल को नुकसान न हो।</li>
                  <li>फसल चक्र: फसल चक्र का पालन करें ताकि मिट्टी की उर्वरता बनी रहे।</li>
                  <li>प्रौद्योगिकी का उपयोग: प्रौद्योगिकी का उपयोग करें जैसे कि ड्रिप सिंचाई और प्रीसिजन फार्मिंग।</li>
                </ul>
              </div>
            ),
          },
          {
            question: "केंचुए को किसानों का मित्र कहा जाता है क्यों?",
            answer: (
              <div>
                <p>केंचुए को किसानों का मित्र कहा जाता है क्योंकि वे मिट्टी की गुणवत्ता में सुधार करते हैं, जिससे पौधों को आवश्यक पोषक तत्व मिलते हैं और मिट्टी की उर्वरता बनी रहती है।</p>
              </div>
            ),
          },
          {
            question: "जैविकनाशी किसे कहते हैं?",
            answer: (
              <div>
                <p>जैविकनाशी उन पदार्थों को कहते हैं जो जैविक रूप से कीटों, रोगों और अन्य हानिकारक जीवों को नष्ट करने में मदद करते हैं।</p>
              </div>
            ),
          },
          
        // Add more questions here...
      ],
    },
    {
        chapterName: " सूक्ष्मजीव मित्र एवं शत्रु",
        questions: [
            {
                question: "सूक्ष्मजीव किसे कहते हैं?",
                answer: (
                  <div>
                    <p>ऐसे जीव जिन्हें हम नंगी आँखों से नहीं देख सकते, जिन्हें सूक्ष्मदर्शी से देखा जा सकता है उन्हें सूक्ष्मजीव कहते हैं।</p>
                  </div>
                ),
              },
              {
                question: "सूक्ष्मजीवों को कितने वर्गों में बाँटा गया है?",
                answer: (
                  <div>
                    <p>सूक्ष्मजीवों को मुख्य चार वर्गों में बाँटा गया है:</p>
                    <ol className="list-decimal ml-6 text-gray-800">
                      <li>जीवाणु: जीवाणु एक प्रकार के सूक्ष्मजीव होते हैं जो एककोशिकीय होते हैं।</li>
                      <li>कवक: कवक एक प्रकार के सूक्ष्मजीव होते हैं जो बहुकोशिकीय होते हैं।</li>
                      <li>प्रोटोजोआ: प्रोटोजोआ एक प्रकार के सूक्ष्मजीव होते हैं जो एककोशिकीय होते हैं।</li>
                      <li>शैवाल: शैवाल एक प्रकार के सूक्ष्मजीव होते हैं जो बहुकोशिकीय होते हैं।</li>
                    </ol>
                  </div>
                ),
              },
              {
                question: "दूध को दही में परिवर्तित करने वाले जीवाणु का नाम बताइये।",
                answer: (
                  <div>
                    <p>लैक्टोबैसिलस जीवाणु दूध को दही में परिवर्तित करने में मदद करते हैं।</p>
                  </div>
                ),
              },
              {
                question: "यीस्ट श्वसन के दौरान कौन-सी गैस उत्पन्न करते हैं?",
                answer: (
                  <div>
                    <p>यीस्ट श्वसन के दौरान कार्बन डाइऑक्साइड गैस उत्पन्न करते हैं।</p>
                  </div>
                ),
              },
              {
                question: "एंटीबायोटिक क्या है?",
                answer: (
                  <div>
                    <p>एंटीबायोटिक ऐसी औषधि होती है जो जीवाणुओं के वृद्धि को रोक देती है या उन्हें समूल नष्ट कर देती है।</p>
                  </div>
                ),
              },
              {
                question: "पेनिसिलिन की खोज किसने और कब की?",
                answer: (
                  <div>
                    <p>सन 1929 में अलेक्जेंडर फ्लेमिंग ने पेनिसिलिन की खोज की।</p>
                  </div>
                ),
              },
              {
                question: "शिशु एवं बच्चों को टीका क्यों लगाया जाता है?",
                answer: (
                  <div>
                    <p>शिशु एवं बच्चों के शरीर में प्रतिरक्षी उत्पन्न करके रोगकारक सूक्ष्मजीव को नष्ट करने के लिए टीका लगाया जाता है। जैसे - हैजा, क्षय आदि बीमारियों को टीके द्वारा रोका जा सकता है।</p>
                  </div>
                ),
              },
              {
                question: "किण्वन किसे कहते हैं?",
                answer: (
                  <div>
                    <p>किण्वन एक प्रक्रिया है जिसमें फलों के रसों से अल्कोहल या शराब बनाई जाती है। इसमें यीस्ट प्राकृतिक शर्करा को निम्नीकरण कर अल्कोहल में परिवर्तित कर देते हैं।</p>
                  </div>
                ),
              },
              {
                question: "उस प्रक्रिया का नाम बताइये जिसमें फलों के रसों से अल्कोहल या शराब बनाई जाती है?",
                answer: (
                  <div>
                    <p>किण्वन प्रक्रिया।</p>
                  </div>
                ),
              },
              {
                question: "संचरणीय रोग किसे कहते हैं?",
                answer: (
                  <div>
                    <p>सूक्ष्मजीवों द्वारा फैलने वाला रोग को जो एक संक्रमित व्यक्ति में वायु, जल, भोजन या कायिक संपर्क द्वारा फैलते हैं संचरणीय रोग कहलाते हैं।</p>
                  </div>
                ),
              },
              {
                question: "जैविक नाइट्रोजन स्थिरिकारक का नाम लिखे?",
                answer: (
                  <div>
                    <p>राइजोबियम जीवाणु एवं नील हरित शैवाल।</p>
                  </div>
                ),
              },
              {
                question: "वायुमंडल में कितना प्रतिशत नाइट्रोजन गैस है?",
                answer: (
                  <div>
                    <p>78%</p>
                  </div>
                ),
              },
              {
                question: "संचरणीय रोग का मुख्य कारक क्या है?",
                answer: (
                  <div>
                    <p>घरेलू मक्खी।</p>
                  </div>
                ),
              },
              {
                question: "मलेरिया रोग का वाहक का नाम लिखें?",
                answer: (
                  <div>
                    <p>मादा एनाफ्लिज मच्छर।</p>
                  </div>
                ),
              },
              {
                question: "ब्रेड या इडली के फूलने का क्या कारण है?",
                answer: (
                  <div>
                    <p>यीस्ट कोशिकाओं की वृद्धि।</p>
                  </div>
                ),
              },
              {
                question: "डेंगू के वायरस का वाहक का नाम लिखिए?",
                answer: (
                  <div>
                    <p>मादा एडिस मच्छर।</p>
                  </div>
                ),
              },
              {
                question: "टाइफाइड रोग के संचरण का तरीका लिखिए?",
                answer: (
                  <div>
                    <p>इस रोग का संचरण जल के द्वारा होता है।</p>
                  </div>
                ),
              },
              {
                question: "हैजा रोग के संचरण का तरीका लिखिए?",
                answer: (
                  <div>
                    <p>इस रोग का संचरण जल या भोजन के द्वारा होता है।</p>
                  </div>
                ),
              },
              {
                question: "मच्छर फैलाने से रोकने के तीन उपाई बताइए?",
                answer: (
                  <div>
                    <p>मच्छर फैलाने से रोकने के तीन उपाई निम्न है:</p>
                    <ul className="list-disc ml-6 text-gray-800">
                      <li>हमें पानी को कहीं भी रुका नहीं रहने देना चाहिए।</li>
                      <li>इकट्ठा हुए पानी को मिट्टी का तेल या पेट्रोल का छिड़काव करना चाहिए।</li>
                      <li>हमें आस-पास के जगहों को साफ रखना चाहिए।</li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "सूक्ष्मजीव हमारे मित्र हैं। कैसे?",
                answer: (
                  <div>
                    <p>सूक्ष्मजीव हमारे मित्र हैं क्योंकि वे:</p>
                    <ul className="list-disc ml-6 text-gray-800">
                      <li>भोजन के उत्पादन में मदद करते हैं।</li>
                      <li>मिट्टी की उर्वरता में सुधार करते हैं।</li>
                      <li>रोग प्रतिरोधक क्षमता में सुधार करते हैं।</li>
                      <li>कचरे के प्रबंधन में मदद करते हैं।</li>
                      <li>वैक्सीने और दवाओं के उत्पादन में मदद करते हैं।</li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "यीस्ट और चीनी के साथ मैदे को गूँथ कर कुछ देर छोड़ देने के बाद मैदे का आयतन क्यों बढ़ जाता है?",
                answer: (
                  <div>
                    <p>यीस्ट और चीनी के साथ मैदे को गूँथ कर कुछ देर छोड़ देने के बाद मैदे का आयतन बढ़ जाता है क्योंकि यीस्ट चीनी को कार्बन डाइऑक्साइड और अल्कोहल में परिवर्तित करता है, जिससे मैदे में गैस के बुलबुले बनते हैं और मैदे का आयतन बढ़ जाता है।</p>
                  </div>
                ),
              },
              {
                question: "नमक और चीनी किस प्रकार से खाद्य की रक्षा करते हैं?",
                answer: (
                  <div>
                    <p>नमक और चीनी खाद्य की रक्षा करने में मदद करते हैं क्योंकि वे दोनों ही पानी को सोखने की क्षमता रखते हैं। जब नमक या चीनी को खाद्य में मिलाया जाता है, तो वे पानी को सोख लेते हैं और खाद्य में मौजूद बैक्टीरिया और फंगस को बढ़ने से रोकते हैं। इससे खाद्य की गुणवत्ता बनी रहती है और वह खराब नहीं होता।</p>
                  </div>
                ),
              },
              {
                question: "वैक्सीन का क्या कार्य है?",
                answer: (
                  <div>
                    <p>वैक्सीन में रोग के कारक सूक्ष्मजीव को कमजोरी बनाकर सूक्ष्म मात्रा में शरीर में डाला जाता है फिर सूक्ष्मजीव इतना कमजोर हो जाता है कि रोग उत्पन्न नहीं कर सकता है।</p>
                  </div>
                ),
              },
              {
                question: "रोगवाहक किसे कहा जाता है?",
                answer: (
                  <div>
                    <p>सूक्ष्मजीव जनित रोग कुछ कीटों एवं जन्तुओं के माध्यम से फैलते हैं। वास्तव में ये कीट या जन्तु रोग उत्पन्न करनेवाले सूक्ष्मजीवों के वाहक का कार्य करते हैं। इन्हें रोगवाहक कहते हैं।</p>
                  </div>
                ),
              },
              {
                question: "नाइट्रोजन स्थिरीकरण की उपयोगिता बताएँ।",
                answer: (
                  <div>
                    <p>नाइट्रोजन स्थिरीकरण से वायुमंडल में नाइट्रोजन के पुनः पूर्ति की प्रक्रिया चलती रहती है और नाइट्रोजन की मात्रा स्थिर रहती है।</p>
                  </div>
                ),
              },
              {
                question: "वायुमंडल में सर्वाधिक मात्रा में कौन-सी गैस पायी जाती है ?",
                answer: (
                  <div>
                    <p>वायुमंडल में सर्वाधिक मात्रा में नाइट्रोजन गैस पाया जाता है।</p>
                  </div>
                ),
              },
              {
                question: "खाद्य परिरक्षण किस प्रकार किया जा सकता है ?",
                answer: (
                  <div>
                    <p>खाद्य परिरक्षण निम्न प्रकार से किया जाता है:</p>
                    <ul className="list-disc ml-6 text-gray-800">
                      <li>निर्जलीकरण</li>
                      <li>रासायनिक तरीका</li>
                      <li>नमक और चीनी द्वारा परिरक्षण</li>
                      <li>तेल एवं सिरके द्वारा परिरक्षण</li>
                      <li>गर्म एवं ठंडा करके</li>
                      <li>पॉश्चुरीकरण</li>
                      <li>भंडारण एवं पैकिंग</li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "सूक्ष्मजीवों द्वारा होनेवाली हानियों का विवरण दीजिए।",
                answer: (
                  <div>
                    <p>सूक्ष्मजीवों द्वारा होनेवाली हानियाँ:</p>
                    <ul className="list-disc ml-6 text-gray-800">
                      <li>रोग पैदा करना: सूक्ष्मजीव जैसे कि बैक्टीरिया, वायरस और फंगस कई प्रकार के रोग पैदा कर सकते हैं।</li>
                      <li>खाद्य का खराब होना: सूक्ष्मजीव जैसे कि बैक्टीरिया और फंगस खाद्य को खराब कर सकते हैं।</li>
                      <li>पेयजल का प्रदूषण: सूक्ष्मजीव जैसे कि बैक्टीरिया और वायरस पेयजल को प्रदूषित कर सकते हैं।</li>
                      <li>कृषि उत्पादों का नुकसान: सूक्ष्मजीव जैसे कि फंगस और बैक्टीरिया कृषि उत्पादों को नुकसान पहुँचा सकते हैं।</li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "रोगकारक सूक्ष्मजीव हमारे शरीर में किस प्रकार प्रवेश करते हैं ?",
                answer: (
                  <div>
                    <p>रोगकारक सूक्ष्मजीव हमारे शरीर में निम्नलिखित तरीकों से प्रवेश कर सकते हैं:</p>
                    <ul className="list-disc ml-6 text-gray-800">
                      <li>वायुमार्ग: जब हम संक्रमित व्यक्ति के साथ सांस लेते हैं या संक्रमित व्यक्ति के द्वारा छोड़े गए ड्रॉपलेट्स के संपर्क में आते हैं।</li>
                      <li>जलमार्ग: जब हम संक्रमित जल पीते हैं या संक्रमित जल में नहाते हैं।</li>
                      <li>आहार: जब हम संक्रमित भोजन खाते हैं या संक्रमित पेय पदार्थों का सेवन करते हैं।</li>
                      <li>त्वचा: जब हम संक्रमित व्यक्ति के संपर्क में आते हैं या संक्रमित वस्तुओं को छूते हैं।</li>
                      <li>कीट और जानवर: जब कीट और जानवर संक्रमित होते हैं और हमारे संपर्क में आते हैं।</li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "फफूँद जीवाणु पर किस प्रकार प्रभाव डालती है ?",
                answer: (
                  <div>
                    <p>फफूँद जीवाणुओं की वृद्धि को रोक देते हैं।</p>
                  </div>
                ),
              },     
        ]
    },
    /////Chapter 3  संश्लेषित रेशे और प्लास्टिक
    {
        chapterName: " संश्लेषित रेशे और प्लास्टिक",
        questions: [
            {
                question: "कपड़े कितने प्रकार के प्राप्त रेशों से बनता है?",
                answer: (
                  <div>
                    <p>कपड़े दो प्रकार के रेशों से बनता है:</p>
                    <ul className="list-disc ml-6 text-gray-800">
                      <li>प्राकृतिक रेशे</li>
                      <li>कृत्रिम रेशे</li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "कुछ प्राकृतिक रेशों एवं उनके स्रोतों के नाम लिखिए।",
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
                question: "संश्लेषित रेशे किसे कहते है?",
                answer: (
                  <div>
                    <p>ऐसे रेशे जो मनुष्य स्वयं तैयार करता है, संश्लेषित रेशे कहलाता है।</p>
                  </div>
                ),
              },
              {
                question: "उसे संश्लेषित रेशे के नाम बताइए जिसका तार इस्पात के तार से भी मजबूत होता है?",
                answer: (
                  <div>
                    <p>नायलॉन।</p>
                  </div>
                ),
              },
              {
                question: "संश्लेषित रेशों के एक हानिकारक गुण लिखें?",
                answer: (
                  <div>
                    <p>संश्लेषित रेशों से बने वस्त्र में यदि आग लग जाए तो कपड़ा और पहनने वाला व्यक्ति के शरीर से चिपक जाता है।</p>
                  </div>
                ),
              },
              {
                question: "पेट क्या है?",
                answer: (
                  <div>
                    <p>एक बहुत सुपरिचित प्रकार का पॉलिएस्टर है, जिसका उपयोग बोतले, बर्तन, फिल्म, तार और अन्य उपयोगी उत्पादों के निर्माण के लिए किया जाता है।</p>
                  </div>
                ),
              },
              {
                question: "ऐक्रिलिक क्या है?",
                answer: (
                  <div>
                    <p>ऐसे ऊन जो प्राकृतिक स्रोतों से न प्राप्त कर संश्लेषित किए जाते हैं, उन्हें ऐक्रिलिक कहते हैं। इनसे ऊनी वस्त्र बनाए जाते हैं।</p>
                  </div>
                ),
              },
              {
                question: "संश्लेषित रेशों के गुण लिखिए।",
                answer: (
                  <div>
                    <p>संश्लेषित रेशों के गुण निम्नलिखित हैं:</p>
                    <ul className="list-disc ml-6 text-gray-800">
                      <li>यह शीघ्र सूखते हैं।</li>
                      <li>अधिक चलाऊ, कम महंगे और आसानी से उपलब्ध होते हैं।</li>
                      <li>यह रख-रखाव में सुविधाजनक होते हैं।</li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "प्लास्टिक कितने प्रकार के होते हैं?",
                answer: (
                  <div>
                    <p>प्लास्टिक दो प्रकार के होते हैं:</p>
                    <ul className="list-disc ml-6 text-gray-800">
                      <li>थर्मोप्लास्टिक</li>
                      <li>थर्मोसेटिंग प्लास्टिक</li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "सबसे अधिक ऊष्मा सहने की क्षमता वाले प्लास्टिक का नाम लिखिए।",
                answer: (
                  <div>
                    <p>मेलामाइन।</p>
                  </div>
                ),
              },
              {
                question: "थर्मोप्लास्टिक और थर्मोसेटिंग प्लास्टिक में क्या अंतर है?",
                answer: (
                  <div>
                    <p>थर्मोप्लास्टिक और थर्मोसेटिंग प्लास्टिक में निम्न अंतर है:</p>
                    <ul className="list-disc ml-6 text-gray-800">
                      <li><b>थर्मोप्लास्टिक:</b> यह गर्म करने पर विकृत हो जाते हैं, इन्हें सरलता पूर्वक मुड़ा जा सकता है, इनका उपयोग खिलौने और बर्तनों के बनाने में किया जाता है।</li>
                      <li><b>थर्मोसेटिंग प्लास्टिक:</b> यह गर्म करने पर विकृत नहीं होते हैं, यह मुड़ते नहीं हैं, इनसे बर्तनों के हत्थे जैसे गर्मी सहने वाले सामान बनाए जाते हैं।</li>
                    </ul>
                  </div>
                ),
              },
              {
                question: "आग बुझाने वाले कर्मचारियों के परिधानों पर किस पदार्थ की परत चढ़ी होती है और क्यों?",
                answer: (
                  <div>
                    <p>मेलामाइन की, क्योंकि ये आग का प्रतिरोधक है।</p>
                  </div>
                ),
              },
              {
                question: "रेशा का नाम बताइए जो:",
                answer: (
                  <div>
                    <p>
                      <b>(i) जलने पर कागज का गंध देता हो:</b> सूती वस्त्र
                    </p>
                    <p>
                      <b>(ii) जलने पर जलते हुए बाल का गंध देता हो:</b> रेशम
                    </p>
                    <p>
                      <b>(iii) जलने पर उबलती हुई फली का गंध देता हो:</b> नायलॉन
                    </p>
                  </div>
                ),
              },
              {
                question: "ऊन की पहचान क्या है?",
                answer: (
                  <div>
                    <p>यह धीरे-धीरे जलती है। जलते समय इसमें से पंखों के जलने के समान गंध निकलती है। जलने के उपरांत काले रंग के गुब्बारे जैसा अवशिष्ट पदार्थ रह जाता है।</p>
                  </div>
                ),
              },
              {
                question: "टेरीलीन क्या है?",
                answer: (
                  <div>
                    <p>टेरीलीन एक लोकप्रिय पॉलिएस्टर है।</p>
                  </div>
                ),
              },
              {
                question: "सूती कपड़ों को नमीयुक्त जगहों पर रखने से क्या प्रभाव पड़ता है?",
                answer: (
                  <div>
                    <p>नमीयुक्त जगहों पर रखने से फफूँद लग जाती है।</p>
                  </div>
                ),
              },
              {
                question: "नायलॉन का निर्माण किन चीजों से होता है?",
                answer: (
                  <div>
                    <p>कोयला, जल एवं वायु से यह बनता है। यह रेशा मजबूत, लचीला और हल्का होता है।</p>
                  </div>
                ),
              },
              {
                question: "कृत्रिम रेशा किसे कहते हैं?",
                answer: (
                  <div>
                    <p>आज के युग में नवीन रासायनिक रेशों का आविष्कार किया गया है, जिसे कृत्रिम या मानव निर्मित रेशा कहते हैं।</p>
                  </div>
                ),
              },
              {
                question: "रेशम की पहचान किस प्रकार होती है?",
                answer: (
                  <div>
                    <p>रेशम हवा में जल्दी जल जाती है और जलते समय उसमें से पंखों या बालों के जलने के समान गंध निकलती है। जले हुए किनारों पर चिपचिपे दाने पड़ जाते हैं।</p>
                  </div>
                ),
              },
              {
                question: "संश्लेषित रेशों के उदाहरण क्या हैं?",
                answer: (
                  <div>
                    <p>संश्लेषित रेशों के उदाहरण नायलॉन, पॉलिएस्टर, और एक्रिलिक हैं।</p>
                  </div>
                ),
              },
              {
                question: "प्लास्टिक के उपयोग क्या हैं?",
                answer: (
                  <div>
                    <p>प्लास्टिक के उपयोग विभिन्न हैं, जैसे कि पैकेजिंग, फर्नीचर, ऑटोमोबाइल, और चिकित्सा उपकरणों में।</p>
                  </div>
                ),
              },
              {
                question: "संश्लेषित रेशों और प्लास्टिक के नुकसान क्या हैं?",
                answer: (
                  <div>
                    <p>संश्लेषित रेशों और प्लास्टिक के नुकसान हैं पर्यावरण प्रदूषण, जानवरों के लिए हानिकारक, और गैर-बायोडिग्रेडेबल होना।</p>
                  </div>
                ),
              },
              {
                question: "रेशम किस प्रकार प्राप्त किया जाता है?",
                answer: (
                  <div>
                    <p>रेशम प्राप्त करने की प्रक्रिया निम्नलिखित है:</p>
                    <ol className="list-decimal ml-6 text-gray-800">
                      <li><b>रेशमकीट का पालन:</b> रेशमकीट के अंडों को उबालकर निकाला जाता है और उन्हें एक विशेष कमरे में रखा जाता है जहां वे 3-4 दिनों में बच्चे में बदल जाते हैं।</li>
                      <li><b>कोकून का निर्माण:</b> रेशमकीट के बच्चे पत्तियों को खाकर बड़े होते हैं और लगभग 30 दिनों में वे कोकून बनाने लगते हैं।</li>
                      <li><b>कोकून का संग्रह:</b> जब रेशमकीट कोकून बना लेता है, तो उसे सावधानी से इकट्ठा किया जाता है।</li>
                      <li><b>कोकून का उबालना:</b> इकट्ठे किए गए कोकून को उबालकर रेशमकीट को मार दिया जाता है।</li>
                      <li><b>रेशम का निकालना:</b> उबले हुए कोकून से रेशम को निकाला जाता है। यह प्रक्रिया हाथ से या मशीन की मदद से की जा सकती है।</li>
                      <li><b>रेशम का साफ़ करना:</b> निकाले गए रेशम को साफ़ किया जाता है और उसे सुखाया जाता है।</li>
                      <li><b>रेशम का बुनना:</b> साफ़ और सूखे रेशम को बुनकर कपड़ा बनाया जाता है।</li>
                    </ol>
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
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3 className="text-lg font-medium text-red-600 flex justify-between items-center">
        {`${questionNumber}. ${faq.question}`}
        <span className="text-indigo-500 text-xl font-bold">{isOpen ? "-" : "+"}</span>
      </h3>
      {isOpen && <div className="text-gray-600 mt-4">{faq.answer}</div>}
    </div>
  );
};

export default FAQ;

