

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const questions = [



  
//     // chapter 12 घर्षण

//     {
//       chapterName: "घर्षण",
//       imageUrl: "/image/8th-S-Chap-12.png", // 🖼️ Image for this chapter
//       description: (
//         <h1><b style={{ color: "blue" }}> इस अध्याय में ह उर्वरक।</b></h1>

//       ),
//       questions: [

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
              <p className="ml-16"><b style={{ color: "violet" }}> जैसे:—</b> कि एक गाड़ी को खींचने के लिए लगाया जाने वाला बल।</p>
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
              <p className="ml-16"> <b style={{ color: "violet" }}> जैसे:—</b> हवा भरे बैलून को बल लगाने से आकृति में परिवर्तन आता है।</p>
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
              <p className="ml-14 mt-1"> <b style={{ color: "blue" }}> राशियाँ  दो प्रकार के होते हैं: </b></p>
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
                <b style={{ color: "violet" }}> जैसे:—</b> बल, वेग, और त्वरण सदिश राशियाँ हैं।
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
                <b style={{ color: "violet" }}> जैसे:—</b> द्रव्यमान, तापमान, समय, और घनत्व अदिश राशियाँ हैं।
              </p>
            </div>
          ),
        }




    
]



const QuestionAnswerPage = () => {
    return (
      <div className="p-4">
        {/* <h1 className="text-2xl font-bold mb-6">प्रश्न और उत्तर</h1> */}
        {/* <Image sr></Image> */}
        <div className='flex justify-between'>
          <div>
        <Image src={"/image/8th-S-Chap-12.png"} className=' rounded mb-12' width={2500} height={300} alt='img'></Image>
        </div>
  
        {/* <div className='border border-x-8  flex flex-col'>
          <h1>Topics Name</h1>
          <Link href={"#"}>Chapter 2</Link>
          <Link href={"#"}>Chapter 3</Link>
          <Link href={"#"}>Chapter 4</Link>
          <Link href={"#"}>Chapter 5</Link>
          <Link href={"#"}>Chapter 6</Link>
          <Link href={"#"}>Chapter 7</Link>
        </div> */}
  
        </div>
  
        {questions.map((faq, index) => (
          <div key={index} className="mb-8 border-b-2 border-gray-300 pb-4">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              प्रश्‍न: {faq.question}
            </h3>
            <div className="text-xl mt-2">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default QuestionAnswerPage;