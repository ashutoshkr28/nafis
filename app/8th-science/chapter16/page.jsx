

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const questions = [


  
//     // chapter 16


//     {
//       chapterName: "प्रकाश",
//       imageUrl: "/image/8th-S-Chap-16.png", // 🖼️ Image for this chapter
//       description: (
//         <h1><b style={{ color: "blue" }}> इस अध्याय में ह उर्वरक।</b></h1>

//       ),
//       questions: [

        {
          question: " 1. प्रकाश क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रकाश एक प्रकार की ऊर्जा है जो हमें देखने में मदद करती है। यह एक विद्युत चुंबकीय तरंग है जिसकी तरंगें विभिन्न रंगों का अनुभव कराती हैं।
            </div>
          ),
        },
        {
          question: " 2. छाया बनने के लिए किन चीजों का होना आवश्यक है?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर :—</b> <span style={{ color: "blue" }}> छाया बनने के लिए तीन चीजों का होना आवश्यक है: </span>
              </p>
              <ul className="ml-16">
                <li>(i) प्रकाश: प्रकाश के बिना छाया नहीं बन सकती है।</li>
                <li>(ii) वस्तु: वस्तु के बिना छाया नहीं बन सकती है।</li>
                <li>(iii) पृष्ठभूमि: पृष्ठभूमि के बिना छाया नहीं दिखाई देती है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 3. प्रकाश स्रोत किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जिस वस्तु से प्रकाश निकलता है उसे प्रकाश स्रोत कहते हैं।
              <p className="ml-16">
                <b style={{ color: "violet" }}> जैसे:—</b> सूर्य, लालटेन, टॉर्च इत्यादि
              </p>
            </div>
          ),
        },
        {
          question: " 4. प्रकाश स्रोत कितने प्रकार के होते हैं?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>  प्रकाश स्रोत दो प्रकार के होते हैं: </span>
              </p>
              <ul className="ml-16">
                <li>  (i) प्राकृतिक प्रकाश स्रोत:—  वैसा प्रकाश स्रोत जिसका निर्माण मानव द्वारा नहीं किया गया हो, प्राकृतिक प्रकाश स्रोत कहलाते हैं। <p> <b style={{ color: "violet" }}> जैसे:—</b> सूर्य, तारे इत्यादि।</p></li>
                <li>  (ii) मानव निर्मित प्रकाश स्रोत:—  वैसा प्रकाश स्रोत जिसका निर्माण मानव द्वारा किया गया हो, मानव निर्मित प्रकाश स्रोत कहलाता है। <p> <b style={{ color: "violet" }}> जैसे:—</b> मोमबत्ती, लालटेन, बिजली इत्यादि। </p> </li>
              </ul>
            </div>
          ),
        },
        {
          question: " 5. प्रदीप्त वस्तुएँ किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वैसा वस्तु जो प्रकाश उत्सर्जित करता हो, प्रदीप वस्तुएँ कहलाती हैं। जैसे:— सूर्य, तारे, जलती हुई टॉर्च इत्यादि।
            </div>
          ),
        },
        {
          question: " 6. अप्रदीप्त वस्तुएँ किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> वैसा वस्तु जो प्रकाश उत्सर्जित नहीं करता हो, अप्रदीप्त वस्तुएँ कहलाती हैं। जैसे:— चंद्रमा, लकड़ी, पत्थर इत्यादि।
            </div>
          ),
        },
        {
          question: " 7. प्रकीर्णन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सूर्य से आती हुई प्रकाश किरणें जब सूक्ष्म कणों पर पड़ती हैं तो वह उनपर पड़ने वाले प्रकाश के कुछ ऊर्जा को अवशोषित कर फिर उसे चारों ओर फैला देती हैं, प्रकाश की इसी घटना को प्रकाश का प्रकीर्णन कहते हैं।
            </div>
          ),
        },
        {
          question: " 8. प्रकाश किरण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> एक सरल रेखा में चलने वाले प्रकाश को प्रकाश किरण कहते हैं। इसे तीर चिन्ह द्वारा दर्शाया जाता है।
            </div>
          ),
        },
        {
          question: " 9. किरण पुंज किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रकाश की किरणों के समूह को किरण पुंज कहते हैं।
            </div>
          ),
        },
        {
          question: " 10. प्रकाश का परावर्तन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रकाश की किरण दर्पण या किसी चिकनी सतह से टकराकर पुनः उसी माध्यम में लौट जाती है, इसी घटना को प्रकाश का परावर्तन कहते हैं।
            </div>
          ),
        },
        {
          question: " 11. समतल दर्पण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जिस दर्पण का एक भाग कलई या रजतित किया गया हो तथा वह आकार में सीधा हो, समतल दर्पण कहलाता है।
            </div>
          ),
        },
        {
          question: " 12. प्रकाश के परावर्तन के नियम किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> प्रकाश की किरण किसी सतह पर परकर जिन नियमों का पालन करते हुए उस सतह से परावर्तित होती है, उन नियमों को परावर्तन के नियम कहते हैं।
            </div>
          ),
        },
        {
          question: " 13. आपतित किरण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आने वाली प्रकाश की किरण को आपतित किरण कहते हैं।
            </div>
          ),
        },
        {
          question: " 14. परावर्तित किरण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सतह से टकराकर वापस लौट जाने वाली किरण को परावर्तित किरण कहते हैं।
            </div>
          ),
        },
        {
          question: " 15. अभिलंब किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आपतन बिंदु पर डाला गया लंब अभिलंब कहलाता है।
            </div>
          ),
        },
        {
          question: " 16. आपतन बिंदु किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आपतित किरण सतह के जिस बिंदु से टकराती है, उसे आपतन बिंदु कहते हैं।
            </div>
          ),
        },
        {
          question: " 17. आपतन कोण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आपतित किरण और अभिलंब के साथ बना कोण आपतन कोण कहलाता है।
            </div>
          ),
        },
        {
          question: " 18. परावर्तन कोण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> परावर्तित किरण और अभिलंब के साथ बना कोण परावर्तन कोण कहलाता है।
            </div>
          ),
        },
        {
          question: " 19. प्रकाश के परावर्तन के कितने नियम है?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}>  प्रकाश के परावर्तन के दो नियम हैं: </span>
              </p>
              <ul className="ml-16">
                <li>(i) आपतित किरण, परावर्तित किरण तथा आपतन बिंदु पर डाला गया अभिलंब तीनों एक ही समतल में होते हैं।</li>
                <li>(ii) आपतन कोण और परावर्तन कोण बराबर होते हैं।</li>
              </ul>
            </div>
          ),
        },

        {
          question: " 20. आप अपनी आँखों की देखभाल कैसे करेंगे?",
          answer: (
            <div>
              <p >
                <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}> आँखों की देखभाल करने के लिए निम्नलिखित बातों का ध्यान रखना चाहिए:</span>
              </p>
              <ul className="ml-16 ">
                <li> <span style={{color:"red"}}>नियमित जाँच: </span>अपनी आँखों की नियमित जाँच करवाएं। इससे आपको अपनी आँखों की समस्याओं का पता लगाने में मदद मिलेगी।</li>
                <li> <span style={{color:"red"}}>स्वच्छता: </span>अपनी आँखों को नियमित रूप से साफ करें। इससे आपकी आँखों में धूल और गंदगी जमा नहीं होगी।</li>
                <li> <span style={{color:"red"}}>सूरज की रोशनी से बचाव: </span> सूरज की रोशनी से अपनी आँखों का बचाव करें। सूरज की रोशनी में यूवी किरणें होती हैं जो आपकी आँखों को नुकसान पहुँचा सकती हैं।</li>
                <li> <span style={{color:"red"}}>आहार: </span> अपने आहार में विटामिन ए और ओमेगा-3 फैटी एसिड युक्त खाद्य पदार्थों को शामिल करें। ये पोषक तत्व आपकी आँखों के लिए फायदेमंद होते हैं।</li>
                <li> <span style={{color:"red"}}>धूम्रपान से बचाव: </span> धूम्रपान से अपनी आँखों का बचाव करें। धूम्रपान आपकी आँखों को नुकसान पहुँचा सकता है।</li>
                <li> <span style={{color:"red"}}>नींद: </span> पर्याप्त नींद लें। नींद की कमी आपकी आँखों को थका सकती है।</li>
                <li> <span style={{color:"red"}}>आँखों का व्यायाम:</span> अपनी आँखों का व्यायाम करें। इससे आपकी आँखों की मांसपेशियाँ मजबूत होंगी।</li>
              </ul>
            </div>
          ),
        },
        {
          question: " 21. मान लीजिए आपके सामने दीवार पर एक फोटो टंगा है। आपका मित्र आपकी आँखों के सामने अपना कॉपी ला देता है। क्या आप फोटो को देख पाएंगे? वर्णन कीजिए।",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जब हमारी आँखों के सामने दीवार पर फोटो टंगी रहती है तो उसके द्वारा परावर्तित प्रकाश हमारी आँखों पड़ते रहता है, जिससे हम उसको देख पाते हैं। जब हमारी आँखों के सामने कोई कॉपी ला दी जाती है तब हम उस दीवार के फोटो को नहीं देख पाते हैं।
            </div>
          ),
        },
        {
          question: " 22. यदि परावर्तित किरण आपतित किरण से 90⁰ का कोण बनाये तो आपतन कोण का मान कितना होगा?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आपतन कोण का मान <b> 45⁰ </b> होगा।
            </div>
          ),
        },
        {
          question: " 23. दो समतल दर्पण का उपयोग क्यों एवं कहाँ किया जाता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> दो समतल दर्पण का उपयोग पारदर्शी बनाने में किया जाता है, जिनका उपयोग पनडुब्बियों, टैंको तथा बंकरों में छिपे सैनिकों द्वारा बाहर की वस्तुओं को देखने के लिए किया जाता है।
            </div>
          ),
        },
        {
          question: " 24. शंकु का कार्य क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तीव्र प्रकाश के लिए सुग्राही होते हैं तथा रंगों की सूचनाएँ भेजने का कार्य इनके द्वारा होता है।
            </div>
          ),
        },
        {
          question: " 25. अनियमित परावर्तन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> अनियमित परावर्तन एक ऐसी प्रक्रिया है जिसमें प्रकाश की किरणें एक असमान सतह से टकराकर विभिन्न दिशाओं में बिखर जाती हैं।
            </div>
          ),
        },
        {
          question: " 26. मानव नेत्र का एक नामांकित रेखा चित्र बनाइए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> मानव नेत्र का नामांकित रेखा चित्र निम्नलिखित प्रकार से बनता है:
              {/* <img src="path_to_image_of_eye_diagram" alt="Human Eye Diagram" /> */}
              {/* Replace path_to_image_of_eye_diagram with the actual image path */}
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
        <Image src={"/image/8th-S-Chap-16.png"} className=' rounded mb-12 transition-all transform hover:animate-shake' width={2500} height={300} alt='img'></Image>
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