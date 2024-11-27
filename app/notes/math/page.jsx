"use client";
import { useState } from "react";

const FAQ = () => {
  // Sample questions and answers with headings and highlights
  const faqs = [
    // ques 1
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
          <h4>त्रिभुज के कुछ महत्वपूर्ण गुणधर्म हैं:</h4>
          <ul className="list-disc ml-6 mb-4 text-gray-800">
            <li>
              <strong className="text-indigo-600">त्रिभुज का क्षेत्रफल:</strong> त्रिभुज का क्षेत्रफल उसकी भुजाओं और कोणों के आधार पर निर्धारित किया जा सकता है।
            </li>
            <li>
              <strong className="text-indigo-600">त्रिभुज की परिधि:</strong> त्रिभुज की परिधि उसकी तीनों भुजाओं के योग के बराबर होती है।
            </li>
            <li>
              <strong className="text-indigo-600">त्रिभुज के कोणों का योग:</strong> त्रिभुज के तीनों कोणों का योग हमेशा 180 डिग्री होता है।
            </li>
          </ul>

          {/* <p className="text-gray-800">
            त्रिभुज के तीनों कोणों का योग हमेशा <strong className="text-indigo-600">180 डिग्री</strong> होता है।
          </p> */}
        </div>
      ),
    },
    //  ques 2
    {
      question: "त्रिभुज सर्वांगसम कब होगा?",
      answer: (
        <div>
          <h3 className="font-bold text-lg mb-2 text-indigo-700">त्रिभुज सर्वांगसम की शर्तें:</h3>
          <p className="mb-4 text-gray-800">
            त्रिभुज सर्वांगसम तब होगा जब दो त्रिभुजों में निम्नलिखित शर्तें पूरी हों:
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-800">
            <li>
              <strong className="text-indigo-600">भुजा-भुजा-भुजा (SSS) शर्त:</strong> दोनों त्रिभुजों की तीनों भुजाएं एक दूसरे के समान होनी चाहिए।
            </li>
            <li>
              <strong className="text-indigo-600">कोण-कोण-कोण (AAA) शर्त:</strong> दोनों त्रिभुजों के तीनों कोण एक दूसरे के समान होने चाहिए।
            </li>
            <li>
              <strong className="text-indigo-600">भुजा-कोण-भुजा (SAS) शर्त:</strong> दोनों त्रिभुजों की दो भुजाएं और उनके बीच का कोण एक दूसरे के समान होने चाहिए।
            </li>
          </ul>
          <h3 className="font-bold text-lg mb-2 text-indigo-700">अन्य शर्तें:</h3>
          <ul className="list-disc ml-6 mb-4 text-gray-800">
            <li>दोनों त्रिभुजों के क्षेत्रफल समान हों।</li>
            <li>दोनों त्रिभुजों की परिधि समान हो।</li>
            <li>दोनों त्रिभुजों के कोणों का योग समान हो (180 डिग्री)।</li>
          </ul>
          <p className="text-gray-800">
            यदि इनमें से कोई भी शर्त पूरी होती है, तो दो त्रिभुज सर्वांगसम होंगे। इसका मतलब है कि दोनों त्रिभुजों की सभी भुजाएं और कोण एक दूसरे के समान होंगे, और उनके आकार और दिशा भी एक दूसरे के समान होंगे।
          </p>
        </div>
      ),
    },
    //  ques 3
    {
      question: "चतुर्भुज किसे कहते हैं और यह कितने प्रकार के होते हैं?",
      answer: (
        <div>
          <h3 className="font-bold text-lg mb-2 text-indigo-700">चतुर्भुज की परिभाषा:</h3>
          <p className="mb-4 text-gray-800">
            चतुर्भुज एक बंद आकृति होती है जिसमें चार भुजाएं, चार शीर्ष और चार कोण होते हैं। इसके चारों कोणों का योग हमेशा{" "}
            <strong className="text-indigo-600">360 डिग्री</strong> होता है।
          </p>
        </div>
      ),
    },
        //  ques 3
        {
          question: "आयत किसे कहते हैं और इसकी विशेषताएं क्या हैं?",
          answer: (
            <div>
              <h3 className="font-bold text-lg mb-2 text-indigo-700">आयत की परिभाषा:</h3>
              <p className="mb-4 text-gray-800">
                आयत एक प्रकार का चतुर्भुज होता है जिसकी विपरीत भुजाएं समांतर और समान होती हैं।
              </p>
        
              <h3 className="font-bold text-lg mb-2 text-indigo-700">आयत की विशेषताएं:</h3>
              <ul className="list-disc ml-6 mb-4 text-gray-800 space-y-2">
                <li>
                  <strong className="text-indigo-600">विपरीत भुजाएं समांतर और समान:</strong> आयत की विपरीत भुजाएं समांतर और समान होती हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">विपरीत कोण समान:</strong> आयत के विपरीत कोण समान होते हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">चारों कोणों का योग:</strong> आयत के चारों कोणों का योग हमेशा{" "}
                  <strong className="text-indigo-600">360 डिग्री</strong> होता है।
                </li>
                <li>
                  <strong className="text-indigo-600">दो जोड़ी समांतर भुजाएं:</strong> आयत में दो जोड़ी समांतर भुजाएं होती हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">आयत का क्षेत्रफल:</strong> उसकी लंबाई और चौड़ाई के गुणनफल के बराबर होता है।
                </li>
                <li>
                  <strong className="text-indigo-600">आयत की परिधि:</strong> उसकी लंबाई और चौड़ाई के योग के दोगुने के बराबर होती है।
                </li>
                <li>
                  <strong className="text-indigo-600">आयत के विकर्ण:</strong> एक दूसरे को दो बराबर भागों में विभाजित करते हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">आयत के कोण:</strong> हमेशा{" "}
                  <strong className="text-indigo-600">समकोण (90 डिग्री)</strong> होते हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">आयत का उपयोग:</strong> वास्तुकला, इंजीनियरिंग, कला और डिज़ाइन जैसे क्षेत्रों में किया जाता है।
                </li>
              </ul>
            </div>
          ),
        },

        {
          question: "वर्ग किसे कहते हैं और इसकी विशेषताएं क्या हैं?",
          answer: (
            <div>
              <h3 className="font-bold text-lg mb-2 text-indigo-700">वर्ग की परिभाषा:</h3>
              <p className="mb-4 text-gray-800">
                वर्ग एक प्रकार का आयत होता है जिसकी सभी भुजाएं समान होती हैं।
              </p>
        
              <h3 className="font-bold text-lg mb-2 text-indigo-700">वर्ग की विशेषताएं:</h3>
              <ul className="list-disc ml-6 mb-4 text-gray-800 space-y-2">
                <li>
                  <strong className="text-indigo-600">सभी भुजाएं समान:</strong> वर्ग की सभी भुजाएं समान होती हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">सभी कोण समकोण:</strong> वर्ग के सभी कोण{" "}
                  <strong className="text-indigo-600">समकोण (90 डिग्री)</strong> होते हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">चारों कोणों का योग:</strong> वर्ग के चारों कोणों का योग हमेशा{" "}
                  <strong className="text-indigo-600">360 डिग्री</strong> होता है।
                </li>
                <li>
                  <strong className="text-indigo-600">वर्ग का क्षेत्रफल:</strong> उसकी एक भुजा के वर्ग के बराबर होता है।
                </li>
                <li>
                  <strong className="text-indigo-600">वर्ग की परिधि:</strong> उसकी एक भुजा के चार गुने के बराबर होती है।
                </li>
                <li>
                  <strong className="text-indigo-600">वर्ग के विकर्ण:</strong> वर्ग के विकर्ण एक दूसरे को दो बराबर भागों में विभाजित करते हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">वर्ग का उपयोग:</strong> वर्ग का उपयोग विभिन्न क्षेत्रों में किया जाता है, जैसे कि वास्तुकला, इंजीनियरिंग, कला और डिज़ाइन में।
                </li>
              </ul>
            </div>
          ),
        },

        {
          question: "समांतर चतुर्भुज किसे कहते हैं और इसकी विशेषताएं क्या हैं?",
          answer: (
            <div>
              <h3 className="font-bold text-lg mb-2 text-indigo-700">समांतर चतुर्भुज की परिभाषा:</h3>
              <p className="mb-4 text-gray-800">
                समांतर चतुर्भुज एक प्रकार का चतुर्भुज होता है जिसकी विपरीत भुजाएं समांतर होती हैं।
              </p>
        
              <h3 className="font-bold text-lg mb-2 text-indigo-700">समांतर चतुर्भुज की विशेषताएं:</h3>
              <ul className="list-disc ml-6 mb-4 text-gray-800 space-y-2">
                <li>
                  <strong className="text-indigo-600">विपरीत भुजाएं समांतर:</strong> समांतर चतुर्भुज की विपरीत भुजाएं समांतर होती हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">विपरीत कोण समान:</strong> समांतर चतुर्भुज के विपरीत कोण समान होते हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">चारों कोणों का योग:</strong> समांतर चतुर्भुज के चारों कोणों का योग हमेशा{" "}
                  <strong className="text-indigo-600">360 डिग्री</strong> होता है।
                </li>
                <li>
                  <strong className="text-indigo-600">दो जोड़ी समांतर भुजाएं:</strong> इसमें दो जोड़ी समांतर भुजाएं होती हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">समांतर चतुर्भुज का क्षेत्रफल:</strong> यह उसकी आधार भुजा और ऊंचाई के गुणनफल के बराबर होता है।
                </li>
                <li>
                  <strong className="text-indigo-600">समांतर चतुर्भुज की परिधि:</strong> इसकी परिधि उसकी चारों भुजाओं के योग के बराबर होती है।
                </li>
                <li>
                  <strong className="text-indigo-600">समांतर चतुर्भुज के विकर्ण:</strong> इसके विकर्ण एक दूसरे को दो बराबर भागों में विभाजित करते हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">समांतर चतुर्भुज का उपयोग:</strong> इसका उपयोग विभिन्न क्षेत्रों में, जैसे कि वास्तुकला, इंजीनियरिंग, कला और डिज़ाइन में किया जाता है।
                </li>
              </ul>
            </div>
          ),
        },

          {
          question: "वृत्त किसे कहते हैं?",
          answer: (
            <div>
              <h3 className="font-bold text-lg mb-2 text-indigo-700">वृत्त की परिभाषा:</h3>
              <p className="mb-4 text-gray-800">
                वृत्त एक बंद आकार होता है जिसकी सभी बिंदु एक निश्चित बिंदु से समान दूरी पर होते हैं। 
                इस निश्चित बिंदु को <strong className="text-indigo-600">वृत्त का केंद्र</strong> कहते हैं और समान दूरी को <strong className="text-indigo-600">वृत्त की त्रिज्या</strong> कहते हैं।
              </p>
        
              <h3 className="font-bold text-lg mb-2 text-indigo-700">वृत्त की विशेषताएं:</h3>
              <ul className="list-disc ml-6 mb-4 text-gray-800 space-y-2">
                <li>
                  <strong className="text-indigo-600">केंद्र:</strong> वृत्त का केंद्र वह बिंदु होता है जिससे वृत्त के सभी बिंदु समान दूरी पर होते हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">त्रिज्या:</strong> वृत्त की त्रिज्या वह दूरी होती है जो केंद्र से वृत्त के किसी भी बिंदु तक होती है।
                </li>
                <li>
                  <strong className="text-indigo-600">व्यास:</strong> वृत्त का व्यास वह दूरी होती है जो वृत्त के दो विपरीत बिंदुओं के बीच होती है। व्यास हमेशा त्रिज्या के <strong className="text-indigo-600">दोगुने</strong> के बराबर होता है।
                </li>
                <li>
                  <strong className="text-indigo-600">परिधि:</strong> वृत्त की परिधि वह दूरी होती है जो वृत्त के चारों ओर होती है। इसे सूत्र{" "}
                  <strong className="text-indigo-600">2πr</strong> द्वारा गणना किया जा सकता है, जहां r वृत्त की त्रिज्या है।
                </li>
                <li>
                  <strong className="text-indigo-600">क्षेत्रफल:</strong> वृत्त का क्षेत्रफल वह क्षेत्र होता है जो वृत्त के अंदर होता है। इसे सूत्र{" "}
                  <strong className="text-indigo-600">πr²</strong> द्वारा गणना किया जा सकता है।
                </li>
                <li>
                  <strong className="text-indigo-600">वृत्त के खंड:</strong> वृत्त के खंड वह रेखा है जो केंद्र से वृत्त की किसी भी बिंदु तक खींची जाती है।
                </li>
                <li>
                  <strong className="text-indigo-600">वृत्त के चाप:</strong> वृत्त के चाप किसी भी दो बिंदुओं के बीच का भाग होता है।
                </li>
              </ul>
            </div>
          ),
        },

        {
          question: "घन क्या है?",
          answer: (
            <div>
              <h3 className="font-bold text-lg mb-2 text-indigo-700">घन की परिभाषा:</h3>
              <p className="mb-4 text-gray-800">
                घन एक त्रि-आयामी आकार होता है जिसकी सभी भुजाएं समान होती हैं और सभी कोण समकोण होते हैं।
              </p>
        
              <h3 className="font-bold text-lg mb-2 text-indigo-700">घन की विशेषताएं:</h3>
              <ul className="list-disc ml-6 mb-4 text-gray-800 space-y-2">
                <li>
                  <strong className="text-indigo-600">समान भुजाएं:</strong> घन की सभी भुजाएं समान होती हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">समकोण कोण:</strong> घन के सभी कोण समकोण (90°) होते हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">छह समान चेहरे:</strong> घन के छह चेहरे होते हैं जो सभी समान होते हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">बारह समान किनारे:</strong> घन के बारह किनारे होते हैं जो सभी समान होते हैं।
                </li>
                <li>
                  <strong className="text-indigo-600">आठ शिखर:</strong> घन के कुल आठ शिखर (vertices) होते हैं।
                </li>
              </ul>
        
              <h3 className="font-bold text-lg mb-2 text-indigo-700">घन के सूत्र:</h3>
              <ul className="list-disc ml-6 mb-4 text-gray-800 space-y-2">
                <li>
                  <strong className="text-indigo-600">आयतन:</strong> घन का आयतन उसकी एक भुजा के घन के बराबर होता है।<br />
                  <strong className="text-indigo-600">V = a³</strong>, जहां <strong>a</strong> भुजा की लंबाई है।
                </li>
                <li>
                  <strong className="text-indigo-600">परिमाप:</strong> घन का परिमाप उसकी एक भुजा के 12 गुने के बराबर होता है।<br />
                  <strong className="text-indigo-600">P = 12a</strong>, जहां <strong>a</strong> भुजा की लंबाई है।
                </li>
                <li>
                  <strong className="text-indigo-600">पृष्ठीय क्षेत्रफल:</strong> घन का पृष्ठीय क्षेत्रफल उसकी एक भुजा के वर्ग के 6 गुने के बराबर होता है।<br />
                  <strong className="text-indigo-600">A = 6a²</strong>, जहां <strong>a</strong> भुजा की लंबाई है।
                </li>
              </ul>
            </div>
          ),
        },

        {
          question: "वृत्त संबंधित प्रश्न और उनके उत्तर",
          answer: (
            <div>
              <h3 className="font-bold text-lg mb-2 text-indigo-700">प्रश्न 1: वृत्त क्या है?</h3>
              <p className="mb-4 text-gray-800">
                वृत्त एक दो-आयामी आकार होता है जिसके सभी बिंदु एक निश्चित बिंदु से समान दूरी पर होते हैं।
              </p>
        
              <h3 className="font-bold text-lg mb-2 text-indigo-700">प्रश्न 2: वृत्त के मुख्य भाग क्या हैं?</h3>
              <p className="mb-4 text-gray-800">
                वृत्त के मुख्य भाग हैं:
              </p>
              <ul className="list-disc ml-6 mb-4 text-gray-800">
                <li>केंद्र</li>
                <li>त्रिज्या</li>
                <li>व्यास</li>
                <li>परिधि</li>
              </ul>
        
              <h3 className="font-bold text-lg mb-2 text-indigo-700">प्रश्न 3: वृत्त की परिधि का सूत्र क्या है?</h3>
              <p className="mb-4 text-gray-800">
                वृत्त की परिधि का सूत्र है: <strong className="text-indigo-600">परिधि = 2 × π × त्रिज्या</strong>
              </p>
        
              <h3 className="font-bold text-lg mb-2 text-indigo-700">प्रश्न 4: वृत्त का क्षेत्रफल कैसे निकाला जाता है?</h3>
              <p className="mb-4 text-gray-800">
                वृत्त का क्षेत्रफल निकालने के लिए सूत्र है: <strong className="text-indigo-600">क्षेत्रफल = π × त्रिज्या²</strong>
              </p>
        
              <h3 className="font-bold text-lg mb-2 text-indigo-700">प्रश्न 5: वृत्त के व्यास और त्रिज्या में क्या संबंध है?</h3>
              <p className="mb-4 text-gray-800">
                वृत्त के व्यास और त्रिज्या में संबंध है: <strong className="text-indigo-600">व्यास = 2 × त्रिज्या</strong>
              </p>
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

