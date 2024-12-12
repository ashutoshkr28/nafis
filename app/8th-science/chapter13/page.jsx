

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const questions = [


  //     // chapter 13 ध्वनि


//     {
//       chapterName: "ध्वनि",
//       imageUrl: "/image/8th-S-Chap-13.png", // 🖼️ Image for this chapter
//       description: (
//         <h1><b style={{ color: "blue" }}> इस अध्याय में ह उर्वरक।</b></h1>

//       ),
//       questions: [

        {
          question: "1. ध्वनि किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ध्वनि एक प्रकार का यांत्रिक तरंग है जो एक माध्यम, जैसे कि हवा, पानी या ठोस पदार्थ, के माध्यम से चलती है और जिसे हम सुन सकते हैं।
            </div>
          ),
        },
        {
          question: "2. कंपन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> किसी वस्तु की अपनी माध्य स्थिति के आगे–पीछे या बाएँ–दाएँ होने वाली गति को कंपन कहते हैं।
            </div>
          ),
        },
        {
          question: "3. आयाम क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> किसी वस्तु की कंपन की अधिकतम विचलन को आयाम कहते हैं।
            </div>
          ),
        },
        {
          question: "4. दोलन क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> दोलन एक वस्तु की नियमित और आवर्ती गति को कहते हैं, जिसमें वस्तु एक स्थिर बिंदु के चारों ओर आगे-पीछे या ऊपर-नीचे चलती है।
            </div>
          ),
        },
        {
          question: "5. आवृत्ति क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रति सेकंड होने वाले दोलनों की संख्या को दोलन की आवृत्ति कहते हैं। आवृत्ति को हर्ट्ज (Hz) में मापा जाता है।
            </div>
          ),
        },
        {
          question: "6. आवर्तकाल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आवर्तकाल एक दोलन के एक पूर्ण चक्र को पूरा करने में लगने वाले समय को कहते हैं।
            </div>
          ),
        },
        {
          question: "7. शोर किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> अप्रिया ध्वनियों को शोर कहते हैं।
            </div>
          ),
        },
        {
          question: "8. ध्वनि किस प्रकार संचारित होती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ध्वनि एक माध्यम के द्वारा संचारित होती है।
              <p className="ml-16"> <b style={{ color: "violet" }}> जैसे:—</b> कि हवा, पानी या ठोस पदार्थ।
              </p>
            </div>
          ),
        },
        {
          question: "9. तारत्वता किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तारत्वता ध्वनि की ऊंचाई या स्वर को कहते हैं।
            </div>
          ),
        },
        {
          question: "10. ध्वनि प्रदूषण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> अनावश्यक और अवांछित ध्वनि को ध्वनि प्रदूषण कहते हैं।
              <p className="ml-16">
                <b style={{ color: "violet" }}> जैसे:—</b> कि ट्रैफिक की आवाज़, फैक्ट्री की मशीनों की आवाज़, लाउडस्पीकर की तेज़ आवाज़ आदि।
              </p>
            </div>
          ),
        },
        {
          question: "11. प्रबलता क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ध्वनि के आयाम को प्रबलता कहते हैं। प्रबलता की इकाई डेसीबल है। जब किसी कंपित वस्तु का आयाम अधिक होता है तो इसके द्वारा उत्पन्न ध्वनि प्रबल होती है।
            </div>
          ),
        },
        {
          question: "12. मानव कान का बाहरी तथा आंतरिक बनावट में क्या अंतर है? वर्णन कीजिए।",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b><br /> <b style={{ color: "blue" }} className="ml-16">मानव कान की बाहरी बनावट में तीन मुख्य भाग होते हैं:</b>
              <ul className="ml-16">
                <li>(i) बाहरी कान: यह कान का वह हिस्सा होता है जो बाहर दिखाई देता है।</li>
                <li>(ii) कान की नली: यह एक छोटी सी नली होती है जो बाहरी कान को कान के पर्दे से जोड़ती है।</li>
                <li>(iii) कान का पर्दा: यह एक पतली झिल्ली होती है जो कान की नली के अंत में होती है और ध्वनि तरंगों को आंतरिक कान में भेजती है।</li>
              </ul>
              <b style={{ color: "blue" }} className="ml-16">आंतरिक बनावट में तीन मुख्य भाग होते हैं:</b>
              <ul className="ml-16">
                <li>(i) कर्णावर्त: यह एक छोटी सी हड्डी होती है जो कान के पर्दे से जुड़ी होती है और ध्वनि तरंगों को आंतरिक कान में भेजती है।</li>
                <li>(ii) अर्धचक्र: यह तीन अर्धवृत्ताकार नलियाँ होती हैं जो आंतरिक कान में होती हैं और संतुलन बनाए रखने में मदद करती हैं।</li>
                <li>(iii) कर्णकोष: यह एक छोटी सी गुहा होती है जो आंतरिक कान में होती है और ध्वनि तरंगों को मस्तिष्क तक पहुँचाने में मदद करती है।</li>
              </ul>
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
        <Image src={"/image/8th-S-Chap-13.png"} className=' rounded mb-12' width={2500} height={300} alt='img'></Image>
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