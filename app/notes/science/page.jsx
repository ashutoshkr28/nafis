"use client";
import { useState } from "react";

const FAQ = () => {


const cropManagementQuestions = [
  {
    question: "फसल किसे कहते हैं?",
    answer: (
      <div>
        <p className="text-gray-800">
          जब एक ही किस्म के पौधे किसी स्थान पर बड़े पैमाने पर उगाए जाते हैं तो इसे फसल कहते हैं।
        </p>
      </div>
    ),
  },
  {
    question: "जुताई किसे कहते हैं?",
    answer: (
      <div>
        <p className="text-gray-800">
          मिट्टी को उलटने-पलटने एवं पोला करने की प्रक्रिया को जुताई कहते हैं।
        </p>
      </div>
    ),
  },
  {
    question: "खाद एवं उर्वरक किसे कहते हैं?",
    answer: (
      <div>
        <p className="text-gray-800">
          वे पदार्थ जिन्हें मिट्टी में पोषक तत्व बनाए रखने के लिए मिलाया जाता है, उन्हें खाद एवं उर्वरक कहते हैं।
        </p>
      </div>
    ),
  },
  {
    question: "उर्वरक कैसे बनाया जाता है?",
    answer: (
      <div>
        <p className="text-gray-800">
          खाद जैविक प्रक्रिया द्वारा फैक्ट्रियों में बनाया जाता है।
        </p>
      </div>
    ),
  },
  {
    question: "फसल चक्रण किसे कहते हैं?",
    answer: (
      <div>
        <p className="text-gray-800">
          फसलों को अदल-बदल कर बोना फसल चक्रण कहलाता है।
        </p>
      </div>
    ),
  },
  {
    question: "खेतों में लगातार फसल उगाने से क्या हानियाँ हैं?",
    answer: (
      <div>
        <p className="text-gray-800">
          खेतों में लगातार फसल उगाने से खेतों में पोषक तत्वों की कमी हो जाती है।
        </p>
      </div>
    ),
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
    question: "खरीफ फसल क्या है?",
    answer: (
      <div>
        <p className="text-gray-800">
          वह फसल जिन्हें वर्षा ऋतु में बोया जाता है उन्हें खरीफ फसल कहते हैं।
        </p>
        <ul className="list-disc ml-6 text-gray-800">
          <li>धान</li>
          <li>मक्का</li>
          <li>कपास</li>
          <li>सोयाबीन</li>
          <li>मूंगफली</li>
        </ul>
      </div>
    ),
  },
  {
    question: "रबी फसल क्या है?",
    answer: (
      <div>
        <p className="text-gray-800">
          शीत ऋतु में उगाई जाने वाली फसलें रबी फसल कहलाती हैं।
        </p>
        <ul className="list-disc ml-6 text-gray-800">
          <li>गेहूं</li>
          <li>चना</li>
          <li>मटर</li>
          <li>सरसों</li>
        </ul>
      </div>
    ),
  },
];

return (
  <div className="max-w-4xl mx-auto px-6 py-12">
    <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Frequently Asked Questions</h1>
    <div className="space-y-6">
      {cropManagementQuestions.map((faq, index) => (
        <QuestionAnswer key={index} faq={faq} />
      ))}
    </div>
  </div>
);
};

const QuestionAnswer = ({ faq }) => {
const [isOpen, setIsOpen] = useState(false);

return (
  <div
    className="border-b-2 border-gray-300 pb-4 cursor-pointer"
    onClick={() => setIsOpen(!isOpen)}
  >
    <h2
      className="text-lg font-medium text-red-600 flex justify-between items-center"
    >
      {faq.question}
      <span className="text-indigo-500 text-xl font-bold">
        {isOpen ? "-" : "+"}
      </span>
    </h2>
    {isOpen && (
      <div className="text-gray-600 mt-4">
        {faq.answer}
      </div>
    )}
  </div>
);
};

export default FAQ;

