

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const questions = [

                  {
                  question: " 1. सूक्ष्मजीव किसे कहते हैं?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      ऐसे जीव जिन्हें हम नंगी आँखों से नहीं देख सकते, जिन्हें सूक्ष्मदर्शी से देखा जा सकता है उन्हें सूक्ष्मजीव कहते हैं।
                    </div>
                  ),
                },
                {
                  question: " 2. सूक्ष्मजीवों को कितने वर्गों में बाँटा गया है?",
                  answer: (
                    <div>
                      <p ><b style={{ color: "green" }}>उत्तर: </b>
        
                        <b style={{ color: "blue " }}>सूक्ष्मजीवों को मुख्य चार वर्गों में बाँटा गया है:</b ></p>
                      <ul className="ml-12 list-none">
                        <li className="relative before:content before:absolute before:-left-9 before:text-red-500 my-2 "><b style={{ color: "red " }}> (I) जीवाणु:</b> जीवाणु एक प्रकार के सूक्ष्मजीव होते हैं जो एककोशिकीय होते हैं।</li>
                        <li className="relative before:content  before:absolute before:-left-9 before:text-red-500 my-2"><b style={{ color: "red " }}>(II) कवक:</b> कवक एक प्रकार के सूक्ष्मजीव होते हैं जो बहुकोशिकीय होते हैं।</li>
                        <li className="relative before:content  before:absolute before:-left-10 before:text-red-500 my-2 "><b style={{ color: "red " }}> (III) प्रोटोजोआ:</b> प्रोटोजोआ एक प्रकार के सूक्ष्मजीव होते हैं जो एककोशिकीय होते हैं।</li>
                        <li className="relative before:content  before:absolute before:-left-10 before:text-red-500 my-2"><b style={{ color: "red " }}>(IV) शैवाल:</b> शैवाल एक प्रकार के सूक्ष्मजीव होते हैं जो बहुकोशिकीय होते हैं।</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  question: "3.  दूध को दही में परिवर्तित करने वाले जीवाणु का नाम बताइये।",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      <b style={{ color: "blue" }}>लैक्टोबैसिलस</b> जीवाणु दूध को दही में परिवर्तित करने में मदद करते हैं।
                    </div>
                  ),
                },
                {
                  question: "4.  यीस्ट श्वसन के दौरान कौन-सी गैस उत्पन्न करते हैं?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      यीस्ट श्वसन के दौरान <b style={{ color: "blue" }}>कार्बन डाइऑक्साइड</b> गैस उत्पन्न करते हैं।
                    </div>
                  ),
                },
                {
                  question: " 5. एंटीबायोटिक क्या है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      <b style={{ color: "blue" }}>एंटीबायोटिक</b> ऐसी औषधि होती है जो जीवाणुओं के वृद्धि को रोक देती है या उन्हें समूल नष्ट कर देती है।
                    </div>
                  ),
                },
                {
                  question: "6.  पेनिसिलिन की खोज किसने और कब की?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      सन <b style={{ color: "blue" }}>1929</b> में <b style={{ color: "blue" }}>अलेक्जेंडर फ्लेमिंग</b> ने पेनिसिलिन की खोज की।
                    </div>
                  ),
                },
                {
                  question: "7.  शिशु एवं बच्चों को टीका क्यों लगाया जाता है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      शिशु एवं बच्चों के शरीर में प्रतिरक्षी उत्पन्न करके रोगकारक सूक्ष्मजीव को नष्ट करने के लिए टीका लगाया जाता है।<p className="ml-10 text-blue-600">  <b style={{ color: "deeppink" }}> जैसे:—</b> <span style={{color:"blueviolet"}}> हैजा , क्षय आदि बीमारियों को टीके द्वारा रोका जा सकता है।</span></p>
                    </div>
                  ),
                },
                {
                  question: " 8. किण्वन किसे कहते हैं?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      किण्वन एक प्रक्रिया है जिसमें फलों के रसों से अल्कोहल या शराब बनाई जाती है इसमें यीस्ट प्राकृतिक शर्करा को निम्नीकरण कर अल्कोहल में परिवर्तित कर देते हैं।
                    </div>
                  ),
                },
                {
                  question: "9.  उस प्रक्रिया का नाम बताइये जिसमें फलों के रसों से अल्कोहल या शराब बनाई जाती है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      <b style={{ color: "blue" }}>किण्वन</b> प्रक्रिया।
                    </div>
                  ),
                },
                {
                  question: " 10. संचरणीय रोग किसे कहते हैं?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      सूक्ष्मजीवों द्वारा फैलने वाला रोग को जो एक संक्रमित व्यक्ति में वायु, जल, भोजन या कायिक संपर्क द्वारा फैलते हैं, <b style={{ color: "blue" }}>संचरणीय रोग</b> कहलाते हैं।
                    </div>
                  ),
                },
                {
                  question: " 11.  जैविक नाइट्रोजन स्थिरिकारक का नाम लिखे?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      <b style={{ color: "blue" }}>राइजोबियम जीवाणु</b> एवं <b style={{ color: "blue" }}>नील हरित शैवाल</b>।
                    </div>
                  ),
                },
                {
                  question: "12. वायुमंडल में कितना प्रतिशत नाइट्रोजन गैस है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      <b style={{ color: "blue" }}>78%</b>
                    </div>
                  ),
                },
                {
                  question: " 13. संचरणीय रोग का मुख्य कारक क्या है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      <b style={{ color: "blue" }}>घरेलू मक्खी</b>।
                    </div>
                  ),
                },
                {
                  question: " 14. मलेरिया रोग का वाहक का नाम लिखें?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      <b style={{ color: "blue" }}>मादा एनाफ्लिज मच्छर</b>।
                    </div>
                  ),
                },
                {
                  question: "15.  ब्रेड या इडली के फूलने का क्या कारण है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      <b style={{ color: "blue" }}>यीस्ट कोशिकाओं की वृद्धि</b>।
                    </div>
                  ),
                },
                {
                  question: " 16.  डेंगू के वायरस का वाहक का नाम लिखिए?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      <b style={{ color: "blue" }}>मादा एडिस मच्छर</b>।
                    </div>
                  ),
                },
                {
                  question: "17.  टाइफाइड रोग के संचरण का तरीका लिखिए?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      इस रोग का संचरण <b style={{ color: "blue" }}>जल</b> के द्वारा होता है।
                    </div>
                  ),
                },
                {
                  question: " 18.  हैजा रोग के संचरण का तरीका लिखिए?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      इस रोग का संचरण <b style={{ color: "blue" }}>जल या भोजन</b> के द्वारा होता है।
                    </div>
                  ),
                },
                {
                  question: " 19.  मच्छर फैलाने से रोकने के तीन उपाई बताइए?",
                  answer: (
                    <div>
        
                      <p><b style={{ color: "green" }}>उत्तर: </b>
                        <b style={{ color: "blue" }}> मच्छर फैलाने से रोकने के तीन उपाई निम्न है:</b></p>
                      <ul className="ml-12 list-none">
                        <li className="relative before:content before:absolute before:-left-9 before:text-red-500 my-2">(I) हमें पानी को कहीं भी रुका नहीं रहने देना चाहिए।</li>
                        <li className="relative before:content  before:absolute before:-left-9 before:text-red-500 my-2 ">(II) इकट्ठा हुए पानी को मिट्टी का तेल या पेट्रोल का छिड़काव करना चाहिए।</li>
                        <li className="relative before:content  before:absolute before:-left-10 before:text-red-500 my-2">(III) हमें आस–पास के जगहों को साफ रखना चाहिए।</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  question: "20.  सूक्ष्मजीव हमारे मित्र हैं। कैसे?",
                  answer: (
                    <div>
                      <p>
                        <b style={{ color: "green" }}>उत्तर: </b>
                        <b style={{ color: "blue" }}>  सूक्ष्मजीव हमारे मित्र हैं क्योंकि वे:  </b></p>
                      <ul className="ml-12 list-none">
                        <li className="relative before:content before:absolute before:-left-9 before:text-red-500 my-2 ">(I) भोजन के उत्पादन में मदद करते हैं।</li>
                        <li className="relative before:content  before:absolute before:-left-9 before:text-red-500  my-2">(II) मिट्टी की उर्वरता में सुधार करते हैं।</li>
                        <li className="relative before:content  before:absolute before:-left-10 before:text-red-500  my-2">(III) रोग प्रतिरोधक क्षमता में सुधार करते हैं।</li>
                        <li className="relative before:content  before:absolute before:-left-10 before:text-red-500  my-2">(IV) कचरे के प्रबंधन में मदद करते हैं।</li>
                        <li className="relative before:content before:absolute before:-left-9 before:text-red-500 my-2">(V) वैक्सीने और दवाओं के उत्पादन में मदद करते हैं।</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  question: " 21.  यीस्ट और चीनी के साथ मैदे को गूँथ कर कुछ देर छोड़ देने के बाद मैदे का आयतन क्यों बढ़ जाता है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      यीस्ट और चीनी के साथ मैदे को गूँथ कर कुछ देर छोड़ देने के बाद मैदे का आयतन बढ़ जाता है क्योंकि यीस्ट चीनी को <b style={{ color: "blue" }}>कार्बन डाइऑक्साइड</b> और <b style={{ color: "blue" }}>अल्कोहल</b> में परिवर्तित करता है, जिससे मैदे में गैस के बुलबुले बनते हैं और मैदे का आयतन बढ़ जाता है।
                    </div>
                  ),
                },
                {
                  question: " 22.  नमक और चीनी किस प्रकार से खाद्य की रक्षा करते हैं ?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      नमक और चीनी खाद्य की रक्षा करने में मदद करते हैं क्योंकि वे दोनों ही पानी को सोखने की क्षमता रखते हैं। जब नमक या चीनी को खाद्य में मिलाया जाता है, तो वे पानी को सोख लेते हैं और खाद्य में मौजूद बैक्टीरिया और फंगस को बढ़ने से रोकते हैं। इससे खाद्य की गुणवत्ता बनी रहती है और वह खराब नहीं होता।
                    </div>
                  ),
                },
                {
                  question: " 23.  वैक्सीन का क्या कार्य है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      वैक्सीन में रोग के कारक सूक्ष्मजीव को कमजोरी बनाकर सूक्ष्म मात्रा में शरीर में डाला जाता है फिर सूक्ष्मजीव इतना कमजोर हो जाता है कि रोग उत्पन्न नहीं कर सकता है।
                    </div>
                  ),
                },
                {
                  question: " 24. रोगवाहक किसे कहा जाता है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      सूक्ष्मजीव जनित रोग कुछ कीटों एवं जन्तुओं के माध्यम से फैलते हैं। वास्तव में ये कीट या जन्तु रोग उत्पन्न करनेवाले सूक्ष्मजीवों के वाहक का कार्य करते हैं। इन्हें <b style={{ color: "blue" }}>रोगवाहक</b> कहते हैं।
                    </div>
                  ),
                },
                {
                  question: " 25.  नाइट्रोजन स्थिरीकरण की उपयोगिता बताएँ?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      नाइट्रोजन स्थिरीकरण से वायुमंडल में नाइट्रोजन के पुनः पूर्ति की प्रक्रिया चलती रहती है और नाइट्रोजन की मात्रा स्थिर रहती है।
                    </div>
                  ),
                },
                {
                  question: "26.  वायुमंडल में सर्वाधिक मात्रा में कौन-सी गैस पायी जाती है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      वायुमंडल में सर्वाधिक मात्रा में <b style={{ color: "blue" }}>नाइट्रोजन गैस</b> पाया जाता है।
                    </div>
                  ),
                },
                {
                  question: " 27. खाद्य परिरक्षण किस प्रकार किया जा सकता है?",
                  answer: (
                    <div>
        
                      <p><b style={{ color: "green" }}>उत्तर: </b>
                        <b style={{ color: "blue" }}>  खाद्य परिरक्षण निम्न प्रकार से किया जाता है:</b></p>
                      <ul className="ml-12 list-none">
                        <li className="relative before:content before:absolute before:-left-9 before:text-red-500 my-2 ">(I) निर्जलीकरण</li>
                        <li className="relative before:content  before:absolute before:-left-9 before:text-red-500 my-2">(II) रासायनिक तरीका</li>
                        <li className="relative before:content  before:absolute before:-left-10 before:text-red-500 my-2 ">(III) नमक और चीनी द्वारा परिरक्षण</li>
                        <li className="relative before:content  before:absolute before:-left-10 before:text-red-500 my-2 ">(IV) तेल एवं सिरके द्वारा परिरक्षण</li>
                        <li className="relative before:content before:absolute before:-left-9 before:text-red-500 my-2 ">(V) गर्म एवं ठंडा करके</li>
                        <li className="relative before:content  before:absolute before:-left-10 before:text-red-500 my-2 ">(VI) पॉश्चुरीकरण</li>
                        <li className="relative before:content  before:absolute before:-left-11 before:text-red-500 my-2 ">(VII)भंडारण एवं पैकिंग</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  question: " 28. सूक्ष्मजीवों द्वारा होनेवाली हानियों का विवरण दीजिए?",
                  answer: (
                    <div>
                      <p> <b style={{ color: "green" }}>उत्तर: </b>
                        <b style={{ color: "blue" }}> सूक्ष्मजीवों द्वारा होनेवाली हानियाँ:</b></p>
                      <ul className="ml-12 list-none">
                        <li className="relative before:content before:absolute before:-left-9 before:text-red-500 my-2"><b style={{ color: "red" }}>(I) रोग पैदा करना:</b> सूक्ष्मजीव जैसे कि बैक्टीरिया, वायरस और फंगस कई प्रकार के रोग पैदा कर सकते हैं।</li>
                        <li className="relative before:content  before:absolute before:-left-9 before:text-red-500 my-2"><b style={{ color: "red" }}>(II) खाद्य का खराब होना:</b> सूक्ष्मजीव जैसे कि बैक्टीरिया और फंगस खाद्य को खराब कर सकते हैं।</li>
                        <li className="relative before:content  before:absolute before:-left-10 before:text-red-500 my-2"><b style={{ color: "red" }}>(III) पेयजल का प्रदूषण:</b> सूक्ष्मजीव जैसे कि बैक्टीरिया और वायरस पेयजल को प्रदूषित कर सकते हैं।</li>
                        <li className="relative before:content  before:absolute before:-left-10 before:text-red-500 my-2"><b style={{ color: "red" }}>(IV) कृषि उत्पादों का नुकसान:</b> सूक्ष्मजीव जैसे कि फंगस और बैक्टीरिया कृषि उत्पादों को नुकसान पहुँचा सकते हैं।</li>
                      </ul>
                    </div>  
                  ),
                },
                {
                  question: " 29. रोगकारक सूक्ष्मजीव हमारे शरीर में किस प्रकार प्रवेश करते हैं?",
                  answer: (
                    <div>
                      <p>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      <b style={{color:"blue"}}>रोगकारक सूक्ष्मजीव हमारे शरीर में निम्नलिखित तरीकों से प्रवेश कर सकते हैं:</b></p>
                      <ul className="ml-12 list-none">
                        <li className="relative before:content before:absolute before:-left-9 before:text-red-500 my-2"><b style={{ color: "red" }}>(I) वायुमार्ग:</b> जब हम संक्रमित व्यक्ति के साथ सांस लेते हैं या संक्रमित व्यक्ति के द्वारा छोड़े गए ड्रॉपलेट्स के संपर्क में आते हैं।</li>
                        <li className="relative before:content  before:absolute before:-left-9 before:text-red-500 my-2"><b style={{ color: "red" }}>(II) जलमार्ग:</b> जब हम संक्रमित जल पीते हैं या संक्रमित जल में नहाते हैं।</li>
                        <li className="relative before:content  before:absolute before:-left-10 before:text-red-500 my-2"><b style={{ color: "red" }}>(III) आहार:</b> जब हम संक्रमित भोजन खाते हैं या संक्रमित पेय पदार्थों का सेवन करते हैं।</li>
                        <li className="relative before:content  before:absolute before:-left-10 before:text-red-500 my-2"><b style={{ color: "red" }}>(IV) त्वचा:</b> जब हम संक्रमित व्यक्ति के संपर्क में आते हैं या संक्रमित वस्तुओं को छूते हैं।</li>
                        <li className="relative before:content before:absolute before:-left-9 before:text-red-500 my-2"><b style={{ color: "red" }}>(V) कीट और जानवर:</b> जब कीट और जानवर संक्रमित होते हैं और हमारे संपर्क में आते हैं।</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  question: "30.  फफूँद जीवाणु पर किस प्रकार प्रभाव डालती है?",
                  answer: (
                    <div>
                      <b style={{ color: "green" }}>उत्तर: </b>
                      <b style={{ color: "blue" }}>फफूँद</b> जीवाणुओं की वृद्धि को रोक देते हैं।
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
        <Image src={"/image/8th-S-Chap-2.png"} className=' rounded mb-12 transition-all transform hover:animate-shake' width={2500} height={300} alt='img'></Image>
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