

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const questions = [


  //     // chapter 7 पौधे एवं जंतुओं का संरक्षण



//     {
//       chapterName: "पौधे एवं जंतुओं का संरक्षण",
//       imageUrl: "/image/8th-S-Chap-7.png", // 🖼️ Image for this chapter
//       description: (
//         <h1><b style={{ color: "blue" }}> इस अध्याय में ह उर्वरक।</b></h1>

//       ),
//       questions: [

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
              <b style={{ color: "green" }}>उत्तर:—</b> पौधों और जंतुओं के संरक्षण के लिए हम कई कदम उठा सकते हैं, <br /> <span style={{ color: "violet" }} className=" ml-16"> जैसे कि: </span>
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
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color:"blue"}}>विनाश के मुख्य कारण:</span>
              <ul className="ml-16 ">
                <li>वनस्पतिवृक्षों की कटाई</li>
                <li>औद्योगिक प्रदूषण</li>
                <li>जल प्रदूषण</li>
                <li>मिट्टी का क्षरण</li>
              </ul>
              <span className="ml-16 text-blue-600">विनाश के प्रभाव:</span>
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



const QuestionAnswerPage = () => {
    return (
      <div className="p-4">
        {/* <h1 className="text-2xl font-bold mb-6">प्रश्न और उत्तर</h1> */}
        {/* <Image sr></Image> */}
        <div className='flex justify-between'>
          <div>
        <Image src={"/image/8th-S-Chap-7.png"} className=' rounded mb-12 transition-all transform hover:animate-shake' width={2500} height={300} alt='img'></Image>
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