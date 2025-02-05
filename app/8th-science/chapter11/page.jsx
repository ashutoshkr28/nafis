

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const questions = [


  

//       ]
//     },

//     // chapter 11 बल तथा दाब
//     {
//       chapterName: "बल तथा दाब",
//       imageUrl: "/image/8th-S-Chap-11.png", // 🖼️ Image for this chapter
//       description: (
//         <h1><b style={{ color: "blue" }}> इस अध्याय में ह उर्वरक।</b></h1>

//       ),
//       questions: [

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
                <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}> बल दो प्रकार के होते हैं:</span>
              </p>
              <ul className="ml-16">
                <li> (i) संपर्क बल</li>
                <li> (ii) असंपर्क बल</li>
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
                <li><span style={{color:"violet"}}>जैसे:—</span> गुरुत्वाकर्षण बल, चुंबकीय बल और विद्युत बल।</li>
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
                <li> (i) पेशीय बल</li>
                <li> (ii) घर्षण बल </li>
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
                <li><b style={{color:"violet"}}> जैसे:—</b> धक्का देना या खींचना।</li>
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
                <li><b style={{color:"violet"}}> जैसे:—</b> जब आप एक पेंसिल को कागज़ पर रगड़ते हैं, तो पेंसिल और कागज़ के बीच घर्षण बल लगता है।</li>
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
                <b style={{ color: "green" }}>उत्तर:—</b> <b style={{ color: "blue" }}> असंपर्क बल दो प्रकार के होते हैं: </b>
              </p>
              <ul className="ml-16">
                <li>(i) चुंबकीय बल</li>
                <li>(ii) गुरुत्व बल</li>
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
                <li> <b style={{ color: "violet" }}> जैसे:—</b> जब आप एक चुंबक को लोहे के टुकड़े के पास लाते हैं, तो चुंबकीय बल के कारण लोहे का टुकड़ा चुंबक की ओर आकर्षित होता है।</li>
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
                <li><b style={{ color: "violet" }}> जैसे:—</b> जब आप कोई वस्तु ऊपर फेंकते हैं, तो वह वस्तु गुरुत्व बल के कारण नीचे गिरती है।</li>
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





//       ]
//     },






//       ]
//     },





//       ]
//     },






//       ]
//     },





//       ]
//     },




    
]



const QuestionAnswerPage = () => {
    return (
      <div className="p-4">
        {/* <h1 className="text-2xl font-bold mb-6">प्रश्न और उत्तर</h1> */}
        {/* <Image sr></Image> */}
        <div className='flex justify-between'>
          <div>
        <Image src={"/image/8th-S-Chap-11.png"} className=' rounded mb-12 transition-all transform hover:animate-shake' width={2500} height={300} alt='img'></Image>
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