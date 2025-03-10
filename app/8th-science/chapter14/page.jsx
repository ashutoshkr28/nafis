

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const questions = [

  //     // chapter 14


//     {
//       chapterName: "विद्युत धारा के रासानिक प्रभाव",
//       imageUrl: "/image/8th-S-Chap-14.png", // 🖼️ Image for this chapter
//       description: (
//         <h1><b style={{ color: "blue" }}> इस अध्याय में ह उर्वरक।</b></h1>

//       ),
//       questions: [



          {
          question: "1. विद्युत धारा क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> विद्युत धारा इलेक्ट्रॉनों की गति या प्रवाह है, जो एक विद्युत परिपथ में होता है। यह इलेक्ट्रॉनों के एक स्थान से दूसरे स्थान तक प्रवाह करने की दर है।
            </div>
          ),
        },
        {
          question: "2. सुचालक क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:-</b> सुचालक एक ऐसा पदार्थ है जो विद्युत धारा को बिना किसी प्रतिरोध के प्रवाहित करने देता है।
              <br />
              <span style={{ color: "blue" }} className="ml-16">सुचालकों की विशेषताएं निम्नलिखित हैं:</span>
              <ul className="list-disc ml-16">
                <li>सुचालकों में इलेक्ट्रॉनों की गति स्वतंत्र होती है।</li>
                <li>वे विद्युत धारा को आसानी से प्रवाहित करने देते हैं।</li>
                <li>उदाहरण के लिए, तांबा, चांदी और सोना अच्छे सुचालक हैं।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "3. अल्पचालक क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> अल्पचालक एक ऐसा पदार्थ है जो विद्युत धारा को कम प्रतिरोध के साथ प्रवाहित करने देता है, लेकिन यह एक अच्छा चालक नहीं है। अल्पचालकों का प्रतिरोध तापमान पर निर्भर करता है और यह धातुओं की तुलना में अधिक होता है।
            </div>
          ),
        },
        {
          question: "4. विद्युत धारा के रासायनिक प्रभाव से आप क्या समझते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> विद्युत धारा के रासायनिक प्रभाव से तात्पर्य है विद्युत धारा के कारण रासायनिक परिवर्तनों की प्रक्रिया से। जब विद्युत धारा किसी विलयन या पदार्थ से गुजरती है, तो यह रासायनिक अभिक्रियाओं को उत्पन्न कर सकती है।
              <p>
                <b style={{ color: "violet" }} className="ml-16"> जैसे:—</b> कि विद्युत अपघटन।
              </p>
            </div>
          ),
        },
        {
          question: "5. क्या शुद्ध जल विद्युत का चालन करता है यदि नहीं तो इसे चालक बनने के लिए क्या करना होगा?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> शुद्ध जल विद्युत का चालन नहीं करता है, क्योंकि इसमें आयनों की अनुपस्थिति होती है। लेकिन जब इसमें कोई विद्युतीय रूप से सक्रिय पदार्थ जैसे कि नमक, अम्ल या क्षार मिलाया जाता है, तो यह आयनों को उत्पन्न करता है और विद्युत का चालन करने लगता है।
            </div>
          ),
        },
        {
          question: "6. विद्युत धारा प्रवाहित होने की दृष्टि से कितने तरह के पदार्थ होते हैं?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}> विद्युत धारा प्रवाहित होने की दृष्टि से पदार्थ तीन प्रकार के होते हैं: </span>
              </p>
              <ul className="ml-16">
                <li> (i) चालक (Conductor): <b style={{ color: "violet" }}> जैसे:—</b> कि तांबा, चांदी, सोना आदि।</li>
                <li>  (ii) अपचालक (Insulator):  <b style={{ color: "violet" }}> जैसे:—</b> कि लकड़ी, प्लास्टिक, कांच आदि।</li>
                <li>  (iii) अर्धचालक (Semiconductor):  <b style={{ color: "violet" }}> जैसे:—</b> कि सिलिकॉन, जर्मेनियम आदि।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "7. सुचालक एवं अल्पचालकों में क्या अंतर है?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर:-</b> <span style={{ color: "blue" }}> सुचालक और अल्पचालक में निम्नलिखित अंतर हैं: </span>
              </p>
              <ul className="ml-14">
                <li>
                  <span style={{ color: "blue" }} >सुचालक:</span> विद्युत धारा को आसानी से प्रवाहित करते हैं। इलेक्ट्रॉनों की गति स्वतंत्र होती है। उदाहरण: तांबा, चांदी, सोना आदि।
                </li>
                <li>
                  <span style={{ color: "blue" }}>अल्पचालक:</span> विद्युत धारा को कम प्रतिरोध के साथ प्रवाहित करते हैं। इलेक्ट्रॉनों की गति सीमित होती है। उदाहरण: कार्बन, सिलिकॉन, जर्मेनियम आदि।
                </li>
              </ul>
            </div>
          ),
        },
        {
          question: "8. हम्फ्री डेवी कौन थे?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> हम्फ्री डेवी एक प्रसिद्ध ब्रिटिश रसायनज्ञ और आविष्कारक थे। उनका जन्म 17 दिसंबर 1778 को पेंज़ांस, कॉर्नवॉल, इंग्लैंड में हुआ था। डेवी ने कई महत्वपूर्ण खोजें कीं, जिनमें से कुछ प्रमुख हैं:
              <ul>
                <li>डेवी लैंप का आविष्कार: डेवी ने एक विशेष प्रकार का लैंप विकसित किया जो खनन में उपयोग के लिए सुरक्षित था।</li>
                <li>आर्क लैंप का आविष्कार: डेवी ने आर्क लैंप का भी आविष्कार किया, जो एक प्रारंभिक रूप का विद्युत प्रकाश स्रोत था।</li>
                <li>नई तत्वों की खोज: डेवी ने कई नए तत्वों की खोज की, जिनमें पोटैशियम, सोडियम, कैल्शियम, स्ट्रोंटियम, बेरियम, मैग्नीशियम और बोरॉन शामिल हैं।</li>
                <li>इलेक्ट्रोकेमिस्ट्री का विकास: डेवी ने इलेक्ट्रोकेमिस्ट्री के क्षेत्र में महत्वपूर्ण योगदान दिया, जिसमें विद्युत ऊर्जा का उपयोग करके रासायनिक प्रतिक्रियाओं का अध्ययन शामिल है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "9. विलियम निकलसन कौन थे?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> विलियम निकोलसन एक अंग्रेजी रसायनज्ञ और भौतिक विज्ञानी थे। उनका जन्म 1753 में हुआ था और उनकी मृत्यु 1815 में हुई थी। निकोलसन ने विद्युत रसायन के क्षेत्र में महत्वपूर्ण योगदान दिया था।
              <br />
              उन्होंने 1800 में विद्युत विच्छेदन की प्रक्रिया का आविष्कार किया था, जिसमें विद्युत धारा का उपयोग करके एक यौगिक को उसके घटक तत्वों में विभाजित किया जा सकता है।
            </div>
          ),
        },
        {
          question: "10. परमाणु किसे कहते हैं ? यह कितने प्रकार के होते हैं ? उदाहरण के साथ लिखें।",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> परमाणु एक रसायनिक तत्व की मूलभूत इकाई है, जो उस तत्व के सभी गुणों को प्रदर्शित करती है। यह एक अत्यधिक छोटी इकाई है।
              <br />
             <span style={{color:"red"}}>  परमाणु तीन मुख्य घटकों से बनी होती है:</span>
              <ul className="ml-16 mt-2">
                <li>
                  <span style={{color:"blue"}}> (i) प्रोटॉन (Proton):</span> प्रोटॉन एक धनात्मक आवेश वाला कण होता है, जो परमाणु के नाभिक में स्थित होता है।
                </li>
                <li>
                  <span style={{color:"blue"}}>(ii) न्यूट्रॉन (Neutron):</span> न्यूट्रॉन एक तटस्थ आवेश वाला कण होता है, जो परमाणु के नाभिक में प्रोटॉन के साथ स्थित होता है।
                </li>
                <li>
                  <span style={{color:"blue"}}>(iii) इलेक्ट्रॉन (Electron):</span> इलेक्ट्रॉन एक ऋणात्मक आवेश वाला कण होता है, जो परमाणु के नाभिक के चारों ओर परिक्रमा करता है।
                </li>
              </ul>
              <p className="ml-16 mt-2">
                <span style={{ color: "red" }}> परमाणु मुख्य रूप से तीन प्रकार के होते हैं:</span>
              </p>
              <ul className="ml-16">
                <li>
                  <span style={{color:"blue"}}>(i) साधारण परमाणु (Ordinary Atom):</span> यह परमाणु एक निश्चित संख्या में प्रोटॉन, न्यूट्रॉन और इलेक्ट्रॉन से बना होता है। <b style={{ color: "violet" }}> उदाहरण:</b>  हाइड्रोजन (H) का परमाणु एक प्रोटॉन और एक इलेक्ट्रॉन से बना होता है।
                </li>
                <li>
                  <span style={{color:"blue"}}>(ii) आइसोटोप (Isotope):</span> यह परमाणु एक ही तत्व के दो या अधिक परमाणु होते हैं, जिनके प्रोटॉन की संख्या समान होती है, लेकिन न्यूट्रॉन की संख्या अलग-अलग होती है। <b style={{ color: "violet" }}> उदाहरण:</b> कार्बन-12 (C-12) और कार्बन-14 (C-14) दो आइसोटोप हैं, जिनके प्रोटॉन की संख्या समान होती है, लेकिन न्यूट्रॉन की संख्या अलग-अलग होती है।
                </li>
                <li>
                  <span style={{color:"blue"}}>(iii) आयन (Ion):</span> यह परमाणु एक या अधिक इलेक्ट्रॉनों को प्राप्त या खो देने के कारण बनता है, जिससे उसका आवेश बदल जाता है। <b style={{ color: "violet" }}> उदाहरण:</b> सोडियम (Na) का परमाणु एक इलेक्ट्रॉन खो देने पर सोडियम आयन (Na⁺) बनता है।
                </li>
              </ul>
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
        <Image src={"/image/8th-S-Chap-14.png"} className=' rounded mb-12 transition-all transform hover:animate-shake' width={2500} height={300} alt='img'></Image>
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