"use client";
import { useState } from "react";

const FAQ = () => {
  // Sample questions and answers with headings and highlights
  const faqs = [
    {
      question: "त्रिभुज किसे कहते हैं और यह कितने प्रकार के होते हैं?",
      answer: (
        <div>
          <h3 className="font-bold text-lg mb-2 text-indigo-700">त्रिभुज की परिभाषा:</h3>
          <p className="mb-4 text-gray-800">
            त्रिभुज एक बंद आकृति होती है जिसमें तीन भुजाएं, तीन शीर्ष और तीन कोण होते हैं। इसके तीनों कोणों का योग हमेशा{" "}
            <strong className="text-indigo-600">180 डिग्री</strong> होता है।
          </p>

          <h3 className="font-bold text-lg mb-2 text-indigo-700">त्रिभुज के प्रकार:</h3>
          <ul className="list-disc ml-6 mb-4 text-gray-800">
            <li>
              <strong className="text-indigo-600">समबाहु त्रिभुज:</strong> सभी भुजाएं समान होती हैं।
            </li>
            <li>
              <strong className="text-indigo-600">समद्विबाहु त्रिभुज:</strong> दो भुजाएं समान होती हैं।
            </li>
            <li>
              <strong className="text-indigo-600">विषमबाहु त्रिभुज:</strong> सभी भुजाएं असमान होती हैं।
            </li>
          </ul>

          <h3 className="font-bold text-lg mb-2 text-indigo-700">त्रिभुज के गुणधर्म:</h3>
          <p className="text-gray-800">
            त्रिभुज के तीनों कोणों का योग हमेशा <strong className="text-indigo-600">180 डिग्री</strong> होता है।
          </p>
        </div>
      ),
    },
    {
      question: "How does server-side rendering work?",
      answer: (
        <div>
          <h3 className="font-bold text-lg mb-2 text-indigo-700">Definition:</h3>
          <p className="text-gray-800">
            Server-side rendering (SSR) generates HTML on the server for each request, improving performance and SEO.
          </p>

          <h3 className="font-bold text-lg mb-2 text-indigo-700">Benefits:</h3>
          <ul className="list-disc ml-6 mb-4 text-gray-800">
            <li>Improved SEO because the content is rendered before delivery.</li>
            <li>Faster perceived page load time for users.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What is static site generation?",
      answer: (
        <div>
          <h3 className="font-bold text-lg mb-2 text-indigo-700">Definition:</h3>
          <p className="text-gray-800">
            Static site generation (SSG) pre-renders pages at build time, offering fast load speeds and better caching.
          </p>

          <h3 className="font-bold text-lg mb-2 text-indigo-700">Advantages:</h3>
          <ul className="list-disc ml-6 mb-4 text-gray-800">
            <li>Fast page load times due to pre-rendering.</li>
            <li>Improved performance and reliability.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
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
        className="text-lg font-medium text-gray-800 flex justify-between items-center"
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
