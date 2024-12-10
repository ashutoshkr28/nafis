"use client";
import { useState } from "react";

const FAQ = () => {
  // Chapter data
  const chapters = [
    {
      chapterName: "फसल उत्पादन एवं प्रबंधन",
      imageUrl: "/image/ashu.png", // 🖼️ Image for this chapter
      description: (
        <h1><b style={{color:"blue"}}> इस अध्याय में ह उर्वरक।</b></h1>
       
      ),
      questions: [
        {
          question: "1. फसल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              जब एक ही किस्म के पौधे किसी स्थान पर बड़े पैमाने पर उगाए जाते हैं तो इसे <b style={{ color: 'blue' }}>फसल</b> कहते हैं।
            </div>
          ),
        },
        {
          question: "2. जुताई किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर: </b>
              मिट्टी को उलटने-पलटने एवं पोला करने की प्रक्रिया को <b style={{ color: 'blue' }}>जुताई</b> कहते हैं।
            </div>
          ),
        },
      ],
    },
    {
      chapterName: "सिंचाई के तरीके",
      imageUrl: "/images/sinchai.jpg", // 🖼️ Image for this chapter
      description: "इस अध्याय में हम सिंचाई के विभिन्न तरीकों और उनके महत्व के बारे में जानकारी प्राप्त करेंगे।",
      questions: [
        {
          question: "सिंचाई के पारम्परिक तरीके कौन-कौन से हैं?",
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
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
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
  const [isOpen, setIsOpen] = useState(false); // State to toggle chapter open/close

  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      {/* Chapter Heading */}
      <h2
        className="text-xl font-semibold bg-indigo-200 px-4 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} // Toggle the chapter
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

      {/* Show questions if chapter is open */}
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
const QuestionAnswer = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle Q&A

  return (
    <div className="border-b-2 border-gray-300 pb-8 cursor-pointer">
      <h3 
        className="text-lg font-medium text-red-600 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)} // Toggle answer visibility
      >
        {`प्रश्‍न: ${faq.question}`}
      </h3>
      {isOpen && <div className="text-gray-600 mt-4">{faq.answer}</div>}
    </div>
  );
};

export default FAQ;
