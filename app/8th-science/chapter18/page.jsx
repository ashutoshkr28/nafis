

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const questions = [


  //     /// chapter 18


//     {
//       chapterName: "वायु तथा जल का प्रदूषण",
//       imageUrl: "/image/8th-S-Chap-18.png", // 🖼️ Image for this chapter
//       description: (
//         <h1><b style={{ color: "blue" }}> इस अध्याय में ह उर्वरक।</b></h1>

//       ),
//       questions: [

        {
          question: " 1. वायु के संघटक क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वायु के संघटक वायु गैसों का मिश्रण है जिसमें 78% नाइट्रोजन 21% ऑक्सीजन 1% अन्य गैस
              <br />
              <b style={{ color: "violet" }}> जैसे:—</b> <span style={{ color: "blue" }}>कार्बन डाइऑक्साइड, कार्बन मोनोऑक्साइड, जल–कण, आर्गन, मेथेन</span> इत्यादि।
            </div>
          ),
        },
        {
          question: " 2. पर्यावरण की गुणवत्ता में कमी का उत्तरदायी कौन है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>मानव और उसकी गतिविधियाँ</span>।
            </div>
          ),
        },
        {
          question: " 3. वातावरण की कौन–सी परिस्थितियाँ आजकल उपलब्ध नहीं है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>साफ आकाश, ताजी हवा, साफ जल</span>।
            </div>
          ),
        },
        {
          question: " 4. कौन सा पदार्थ मुख्य वायु प्रदूषक है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>धुँवा</span>।
            </div>
          ),
        },
        {
          question: " 5. धुएँ के मुख्य कारण है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <b style={{ color: "blue" }}> धुएँ के मुख्य कारण निम्न है:</b>
              <ul className="ml-16">
                <li><span style={{ color: "red" }}>(I) वाहनों का धुँआ</span></li>
                <li><span style={{ color: "red" }}>(II) फैक्ट्रियों और उद्योगों का धुँआ</span></li>
                <li><span style={{ color: "red" }}>(III) जंगलों की आग</span></li>
                <li><span style={{ color: "red" }}>(IV) कूड़ा-कचरा जलाना</span></li>
                <li><span style={{ color: "red" }}>(V) वायु प्रदूषण</span></li>
              </ul>
            </div>
          ),
        },
        {
          question: " 6. वायु प्रदूषण से कौन–सा रोग फैलता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>श्‍वसन संबंधी रोग</span>।
            </div>
          ),
        },
        {
          question: " 7. वायु में कौन सी गैसे उत्सर्जित होती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वायु में <span style={{ color: "blue" }}>कार्बन डाइऑक्साइड, कार्बन मोनोऑक्साइड, नाइट्रोजन ऑक्साइड, धुँआ</span> आदि उत्सर्जित होती है।
            </div>
          ),
        },
        {
          question: " 8. कौन सी गैस रक्त में ऑक्सीजन ग्रहण करने की क्षमता को काम करती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>कार्बन मोनोऑक्साइड</span>।
            </div>
          ),
        },
        {
          question: " 9. धूम–कोहरा क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> धूम-कोहरा एक प्रकार का वायु प्रदूषण है जो वाहनों और उद्योगों से निकलने वाले धुएँ और कोहरे के मिश्रण से बनता है। यह एक खतरनाक वायु प्रदूषक है जो स्वास्थ्य के लिए हानिकारक हो सकता है।
            </div>
          ),
        },
        {
          question: " 10. क्लोरो–फ्लोरो कार्बन के दुष्प्रभाव क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>क्लोरोफ्लोरो (CFC)</span> कार्बन ओजोन परत को नष्ट करते हैं।
            </div>
          ),
        },
        {
          question: " 11. दो साफ इंधनों के नाम लिखिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>C.N.G</span> और <span style={{ color: "blue" }}>L.P.G</span>
            </div>
          ),
        },
        {
          question: " 12. C.N.G का पूरा नाम लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>संपिड़ित प्राकृतिक गैस</span>
            </div>
          ),
        },
        {
          question: " 13. L.P.G का पूरा नाम लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>द्रवित पेट्रोलियम गैस</span>
            </div>
          ),
        },
        {
          question: " 14. C.F.C का पूरा नाम लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>क्लोरो फ्लोरो कार्बन</span>
            </div>
          ),
        },
        {
          question: " 15. अम्ल वर्षा कैसी होती है? इसके प्रभाव की चर्चा कीजिए।",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> अम्ल वर्षा एक प्रकार की वर्षा है जिसमें वायुमंडल में उपस्थित अम्लीय गैसें वर्षा के साथ पृथ्वी पर गिरती हैं।
              <ul className="ml-16">
                <li><span style={{ color: "blue" }}>(I) पारिस्थितिकी तंत्र को नुकसान</span></li>
                <li><span style={{ color: "blue" }}>(II) जल स्रोतों का प्रदूषण</span></li>
                <li><span style={{ color: "blue" }}>(III) मिट्टी का प्रदूषण</span></li>
                <li><span style={{ color: "blue" }}>(IV)स्वास्थ्य पर प्रभाव</span></li>
                <li><span style={{ color: "blue" }}>(V) आर्थिक नुकसान</span></li>
              </ul>
            </div>
          ),
        },
        {
          question: "16. शुद्ध वायु और प्रदूषित वायु में क्या अंतर है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> शुद्ध वायु और प्रदूषित वायु में निम्नलिखित अंतर हैं:
              <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
                <thead>
                  <tr>
                    <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#d4edda" }}>
                      <b>शुद्ध वायु</b>
                    </th>
                    <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f8d7da" }}>
                      <b>प्रदूषित वायु</b>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      (I)  इसमें ऑक्सीजन, नाइट्रोजन और अन्य गैसें संतुलित मात्रा में होती हैं।
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      (I)  इसमें हानिकारक गैसें जैसे कि कार्बन मोनोऑक्साइड, सल्फर डाइऑक्साइड और नाइट्रोजन ऑक्साइड होती हैं।
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      (II)  इसमें कोई हानिकारक गैसें या कण नहीं होते हैं।
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      (II)  इसमें धूल, धुआं और अन्य हानिकारक कण होते हैं।
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      (III)  यह स्वास्थ्य के लिए लाभदायक होती है और जीवन के लिए आवश्यक है।
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      (III)  यह स्वास्थ्य के लिए हानिकारक होती है और जीवन के लिए खतरनाक हो सकती है।
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },

        {
          question: " 17. हरित गृह प्रभाव किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वायुमंडल में अत्यधिक <span style={{ color: "blue" }}>(CO₂)</span> की उपस्थिति से पर्यावरण पर प्रतिकूल प्रभाव पड़ता है जिसे <span style={{ color: "blue" }}>हरित गृह प्रभाव</span> कहते हैं।
            </div>
          ),
        },
        {
          question: " 18. जल प्रदूषण के क्या-क्या कारण है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जल प्रदूषण के निम्न कारण है:
              <ul className="ml-16 list-none">
                <li><b style={{ color: "blue" }} >(i) जैविक प्रदूषण:</b> नदियों में मलमूत्र बहाना तथा पशुओं को स्नान कराना, लाशें बहाना या अस्थि विसर्जन इत्यादि से जल प्रदूषण होता है।</li>
                <li><b style={{ color: "blue" }} >(ii) रासायनिक प्रदूषण:</b> कई प्रकार के धात्विक पदार्थ  <b style={{ color: "violet" }}>  जैसे – </b><span style={{ color: "blue" }}>सीसा, मरकरी, कैडमियम</span> इत्यादि जल को दूषित करते हैं। रासायनिक उर्वरकों के प्रयोग से भी जल प्रदूषण होता है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 19. भोपाल गैस कांड क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> भोपाल गैस कांड भारत के इतिहास में सबसे बड़ी औद्योगिक त्रासदियों में से एक है। यह त्रासदी 3 दिसंबर 1984 को मध्य प्रदेश की राजधानी भोपाल में हुई थी। उस समय यूनियन कार्बाइड के कारखाने से मिथाइल आइसोसाइनाइट (MIC) नामक जहरीली गैस का रिसाव हुआ था, जिससे लगभग 15,000 से अधिक लोगों की जान गई और बहुत सारे लोग अनेक तरह की शारीरिक अपंगता से लेकर अंधेपन के भी शिकार हुए।
            </div>
          ),
        },
        {
          question: " 20. वायु प्रदूषण रोकने के उपाय बताइए?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर:—</b> <b style={{ color: "blue" }}>  वायु प्रदूषण रोकने के उपाय निम्न है: </b></p>
              <ul className="list-none ml-16">
                <li><span style={{ color: "red" }}>(I) वृक्षारोपण करें।</span></li>
                <li><span style={{ color: "red" }}>(II) सार्वजनिक परिवहन का उपयोग करें</span></li>
                <li><span style={{ color: "red" }}>(III) वाहनों की नियमित जांच करें।</span></li>
                <li><span style={{ color: "red" }}>(IV) बिजली की बचत करें।</span></li>
                <li><span style={{ color: "red" }}>(V) कूड़ा-कचरा सही तरीके से निपटाएं।</span></li>
                <li><span style={{ color: "red" }}>(VI) वायु प्रदूषण नियंत्रण कानून का पालन करें।</span></li>
                <li><span style={{ color: "red" }}>(VII) वायु प्रदूषण जागरूकता अभियान चलाएं।</span></li>
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
        <Image src={"/image/8th-S-Chap-18.png"} className=' rounded mb-12 transition-all transform hover:animate-shake' width={2500} height={300} alt='img'></Image>
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