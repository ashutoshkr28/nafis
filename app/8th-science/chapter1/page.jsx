import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const questions = [
    {
        question: "1. फसल किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }} className="text-xl">उत्तर: </b>
            जब एक ही किस्म के पौधे किसी स्थान पर  बड़े पैमाने पर उगाए जाते हैं तो इसे <b style={{ color: 'blue' }}>फसल</b> कहते हैं।
          </div>
        ),
      },
      {
        question: "2. जुताई किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }} className="text-xl" >उत्तर: </b>
            मिट्टी को उलटने-पलटने एवं पोला करने की प्रक्रिया को <b style={{ color: 'blue' }}>जुताई</b> कहते हैं।
          </div>
        ),
      },
      {
        question: "3.  खाद एवं उर्वरक किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }} className="text-xl" >उत्तर: </b>
            वे पदार्थ जिन्हें मिट्टी में पोषक तत्व बनाए रखने के लिए मिलाया जाता है, उन्हें <b style={{ color: 'blue' }}>खाद</b> एवं <b style={{ color: 'blue' }}>उर्वरक</b> कहते हैं।
          </div>
        ),
      },
      {
        question: "4. उर्वरक कैसे बनाया जाता है?",
        answer: (
          <div>
            <b style={{ color: "green" }} className="text-xl" >उत्तर: </b>
            खाद जैविक प्रक्रिया द्वारा फैक्ट्रियों में बनाया जाता है।
          </div>
        ),
      },
      {
        question: "5.  फसल चक्रण किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }} className="text-xl" >उत्तर: </b>
            फसलों को अदल-बदल कर बोना <b style={{ color: 'blue' }}>फसल चक्रण</b> कहलाता है।
          </div>
        ),
      },
      {
        question: "6.  खेतों में लगातार फसल उगाने से क्या हानियाँ हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }} className="text-xl">उत्तर: </b>
            खेतों में लगातार फसल उगाने से खेतों में पोषक तत्वों की कमी हो जाती है।
          </div>
        ),
      },
      {
        question: "7.  तीन उर्वरकों के नाम लिखें।",
        answer: (
          <div>
            <b style={{ color: "green" }} className="text-xl">उत्तर: </b>
            <b style={{ color: "blue" }}>  यूरिया, अमोनियम, सल्फेट </b>
          </div>
        ),
      },

      {
        question: "8.  खाद एवं उर्वरक में क्या अंतर है?",
        answer: (
          <div>

            <h3 className="font-bold text-lg mb-2 text-indigo-700"> <b style={{ color: "green" }} className="text-xl">उत्तर: </b>खाद और उर्वरक में निम्न अंतर है:</h3>
            <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center"><b > खाद </b></th>
                  <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center "> <b>उर्वरक </b></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4 ">(I) यह एक जैविक पदार्थ है।</td>
                  <td className="border border-gray-400 px-4 py-4">(I) यह एक रासायनिक पदार्थ है।</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(II) इसमें सभी प्रकार के पोषक तत्व पाये जाते हैं।</td>
                  <td className="border border-gray-400 px-4  py-4">(II) इसमें विशेष प्रकार के पोषक तत्व पाये जाते हैं।</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(III)  यह अपशिष्टों को मिट्टी में दबाकर बनाया जाता है।</td>
                  <td className="border border-gray-400 px-4  py-4">(III) यह फैक्ट्रियों में बनाया जाता है। </td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },


      // {
      //   question: " 8. खाद एवं उर्वरक में क्या अंतर है?",
      //   answer: (
      //     <div>
      //       <b style={{ color: "green" }}>उत्तर: </b>
      //  खाद एवं उर्वरक में निम्न अंतर है:
      //       <table border="1" style={{ width: '100%', marginTop: '10px', textAlign: 'center' }}>
      //         <thead>
      //           <tr>
      //             <th> </th>
      //             <th><b style={{ color: 'blue' }}>खाद</b></th>
      //             <th><b style={{ color: 'blue' }}>उर्वरक</b></th>
      //           </tr>
      //         </thead>
      //         <tbody>
      //           <tr>
      //             <td>(i)</td>
      //             <td>एक जैविक पदार्थ है।</td>
      //             <td>यह एक रासायनिक पदार्थ है।</td>
      //           </tr>
      //           <tr>
      //             <td>(ii)</td>
      //             <td>इसमें सभी प्रकार के पोषक तत्व पाये जाते हैं।</td>
      //             <td>इसमें विशेष प्रकार के पोषक तत्व पाये जाते हैं।</td>
      //           </tr>
      //           <tr>
      //             <td>(iii)</td>
      //             <td>यह अपशिष्टों को मिट्टी में दबाकर बनाया जाता है।</td>
      //             <td>यह फैक्ट्रियों में बनाया जाता है।</td>
      //           </tr>
      //         </tbody>
      //       </table>
      //     </div>
      //   ),
      // },
      {
        question: "9. सिंचाई के पारम्परिक तरीके कौन-कौन से हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }} className="text-xl">उत्तर: </b>

            <b style={{ color: "blue" }}> सिंचाई के पारम्परिक तरीके निम्न हैं: </b>

            <p className="ml-10">मोटर, चेन पम्प, ढकली, रिहट आदि।</p>

          </div>
        ),
      },
      {
        question: " 10.  सिंचाई के प्रमुख स्त्रोतों के नाम बताइये।",
        answer: (
          <div>
            <b style={{ color: "green" }} className="text-xl">उत्तर: </b>

            <b style={{ color: "blue" }}> सिंचाई के प्रमुख स्त्रोत निम्न हैं: </b>
            <ul className=" ml-10 list-none pl-5">
              <li className="relative before:content-['●'] before:absolute before:-left-5 before:text-violet-500">कुएँ</li>
              <li className="relative before:content-['●'] before:absolute before:-left-5 before:text-violet-500">नलकूप</li>
              <li className="relative before:content-['●'] before:absolute before:-left-5 before:text-violet-500">तालाब या झील</li>
              <li className="relative before:content-['●'] before:absolute before:-left-5 before:text-violet-500">नदियाँ</li>
              <li className="relative before:content-['●'] before:absolute before:-left-5 before:text-violet-500">बांध और नहर आदि।</li>
            </ul>
          </div>
        ),
      },
      {
        question: " 11. उर्वरक किसे कहते हैं? किन्हीं दो उर्वरकों के नाम लिखे।",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            मिट्टी की उर्वरक शक्ति को बढ़ाने वाले तत्वों को <b style={{ color: 'blue' }}>उर्वरक</b> कहते हैं।<br />
            <b style={{ color: "blue" }} className="ml-10"> दो उर्वरकों के नाम निम्न हैं: </b>

            <p className="ml-10"> (I) यूरिया  (II) फास्फेट </p>
            {/* <ul className="list-decimal ml-8">
                <li><b style={{ color: "blue" }}></b></li>
                <li><b style={{ color: "blue" }}></b></li>
              </ul> */}
          </div>
        ),
      },
      {
        question: " 12.   खरपतवार क्या हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            फसलों के साथ कुछ अनचाहे पौधे भी उग आते हैं। इन पौधों को हम <b style={{ color: 'blue' }}>खरपतवार</b> कहते हैं।
          </div>
        ),
      },


      {
        question: " 13.  पीड़कनाशी क्या हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            फल या फसलों उत्पादों की हानि पहुंचाने वाले जीवों को मारने वाली रासायनिक दवाइयों को <b style={{ color: 'blue' }}>पीड़कनाशी</b> कहते हैं।
          </div>
        ),
      },

      {
        question: "14.  हार्वेस्टर क्या है?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            वह मशीन जिससे फसलों की कटाई की जाती है उसे <b style={{ color: 'blue' }}>हार्वेस्टर</b> कहते हैं।
          </div>
        ),
      },

      {
        question: " 15.  दालों की फसलों की जड़ों में कौनसा जीवाणु पाया जाता है?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            <b style={{ color: 'blue' }}>राइजोबियम</b> नामक जीवाणु पाया जाता है।
          </div>
        ),
      },

      {
        question: " 16.  हरित क्रांति से क्या तात्पर्य है?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            कृषि उत्पादन में तेजी से वृद्धि हुई है, इसे <b style={{ color: 'blue' }}>हरित क्रांति</b> कहते हैं।
          </div>
        ),
      },

      {
        question: " 17.  कॉम्बाइन मशीन क्या है?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            <b style={{ color: 'blue' }}>कॉम्बाइन मशीन</b> वह मशीन है जो हार्वेस्टर तथा थ्रेशर दोनों का कार्य करता है।
          </div>
        ),
      },

      {
        question: " 18. थ्रेशर क्या है?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            काटी गई फसलों से बीजों या दानों को भूसे से अलग करने की विधि को <b style={{ color: 'blue' }}>थ्रेशर</b> कहते हैं।
          </div>
        ),
      },

      {
        question: " 19. खरीफ फसल क्या है?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            वह फसल जिन्हें वर्षा ऋतु में बोया जाता है उन्हें <b style={{ color: 'blue' }}>खरीफ फसल</b> कहते हैं।
            <br /> <br />
            <p><b style={{ color: "violet" }}>उदाहरण: </b>धान, मक्का, कपास, सोयाबीन, मूंगफली इत्यादि।</p>
            {/* <h1> </h1> */}

            <p style={{ color: "blue" }}><b>नोट:</b> भारत में वर्षा ऋतु सामान्यतः जून से सितंबर तक होती है।</p>
          </div>
        ),
      },
      {
        question: " 20.  रबी फसल क्या है?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            शीत ऋतु (अक्टूबर से मार्च तक) उगाई जाने वाली फसलें <b style={{ color: 'blue' }}>रबी फसल</b> कहलाती हैं।
            <br /> <br />
            <p><b style={{ color: "violet" }}>उदाहरण: </b>गेहूं, चना, मटर, सरसों इत्यादि।</p>
            {/* <ul className="list-disc ml-6 text-gray-800">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul> */}
          </div>
        ),
      },
      {
        question: " 21. समय-समय पर खेतों में खाद क्यों देनी चाहिए?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            <b style={{ color: "blue" }} >  समय-समय पर खेतों में खाद देने के निम्न फायदे हैं: </b>
            <ul className="ml-16 mt-2 list-none">
              <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"> <b style={{ color: "red" }} >मिट्टी की उर्वरता बढ़ती है:</b> खाद में पोषक तत्व होते हैं जो मिट्टी की उर्वरता बढ़ाते हैं। इससे मिट्टी की क्षमता बढ़ती है और वह अधिक पौधों को सहारा दे सकती है।</li>
              <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }} >पौधों की वृद्धि बढ़ती है:</b> खाद में पोषक तत्व पौधों की वृद्धि को बढ़ावा देते हैं। इससे पौधे अधिक तेजी से बढ़ते हैं और उनकी पत्तियाँ और फल अधिक स्वस्थ होते हैं।</li>
              <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }} >फसल की गुणवत्ता में सुधार होता है:</b> खाद के उपयोग से फसल की गुणवत्ता में सुधार होता है। इससे फसल का स्वाद, रंग और पौष्टिकता बढ़ती है।</li>
              <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }} >मिट्टी की संरचना में सुधार होता है:</b> खाद के उपयोग से मिट्टी की संरचना में सुधार होता है। इससे मिट्टी की जल धारण क्षमता बढ़ती है और वह अधिक पौधों को सहारा दे सकती है।</li>
              <li className="relative before:content-['(V)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }} >कीटों और रोगों का प्रभाव कम होता है:</b> खाद के उपयोग से कीटों और रोगों का प्रभाव कम होता है। इससे फसल की सुरक्षा बढ़ती है और वह अधिक स्वस्थ होती है।</li>
            </ul>
          </div>
        ),
      },

      {
        question: " 22. अच्छी फसल के लिए हमें किन-किन बातों पर ध्यान देना चाहिए?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            <b style={{ color: "blue" }} > अच्छी फसल के लिए हमें निम्नलिखित बातों पर ध्यान देना चाहिए: </b>
            <ul className="ml-16 mt-2 list-none">
              <li className="relative before:content-['(I)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >मिट्टी की तैयारी:</b> मिट्टी की जाँच करें और उसमें आवश्यक पोषक तत्व मिलाएं। <br /><b style={{ color: "violet" }} > (उदाहरण: गोबर की खाद)</b> </li>
              <li className="relative before:content-['(II)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >बीज का चयन:</b> अच्छी गुणवत्ता वाले बीज का चयन करें। <br /><b style={{ color: "violet" }} > (उदाहरण: हाइब्रिड बीज)</b></li>
              <li className="relative before:content-['(III)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >सिंचाई:</b> पौधों को आवश्यक पानी दें। <br /> <b style={{ color: "violet" }} >  (उदाहरण: ड्रिप सिंचाई) </b></li>
              <li className="relative before:content-['(IV)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >उर्वरकों का उपयोग:</b> अच्छी गुणवत्ता वाले उर्वरकों का उपयोग करें। <br /><b style={{ color: "violet" }} > (उदाहरण: यूरिया) </b></li>
              <li className="relative before:content-['(V)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >कीट और रोग नियंत्रण:</b> कीट और रोग की पहचान करें और उनके नियंत्रण के लिए आवश्यक कदम उठाएं। <br /><b style={{ color: "violet" }} > (उदाहरण: कीटनाशकों का उपयोग)</b></li>
              <li className="relative before:content-['(VI)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >फसल की देखभाल:</b> फसल की नियमित जाँच करें और उसकी आवश्यकताओं को पूरा करें। <br /><b style={{ color: "violet" }} > (उदाहरण: फसल की पत्तियों की जाँच)</b></li>
            </ul>
          </div>
        ),
      },
      {
        question: " 23.  फसल का संरक्षण कैसे किया जाता है?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            <b style={{ color: "blue" }}>
              फसल का संरक्षण करने के लिए निम्नलिखित तरीकों का पालन किया जा सकता है:</b>
            <ul className="ml-16 mt-2 list-none ">
              <li className="relative before:content-['(I)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >कीट और रोग नियंत्रण:</b><span className=""> कीटनाशकों का उपयोग या जैविक नियंत्रण विधियों का प्रयोग।</span></li>
              <li className="relative before:content-['(II)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }} >फसल की नियमित जाँच:</b> पौधों को पानी देना, उर्वरकों का उपयोग करना आदि।</li>
              <li className="relative before:content-['(III)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }} >फसल की सुरक्षा:</b> फसल को जानवरों से बचाने के लिए बाड़ लगाना।</li>
              <li className="relative before:content-['(IV)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }} >मौसम की भविष्यवाणी:</b> मौसम की भविष्यवाणी करें और उसके अनुसार फसल की देखभाल करें।</li>
              <li className="relative before:content-['(V)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }} >फसल की कटाई और भंडारण:</b> फसल को सही समय पर काटना और उसे सूखे और सुरक्षित स्थान पर भंडारण करना।</li>
            </ul>
          </div>
        ),
      },
      {
        question: " 24.  पादप संकरण क्या है?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            पादप संकरण एक ऐसी प्रक्रिया है जिसमें दो या दो से अधिक पौधों के बीच जेनेटिक सामग्री का आदान-प्रदान किया जाता है, जिससे एक नई पौधा प्रजाति का निर्माण होता है।
          </div>
        ),
      },
      {
        question: " 25.  सिंचाई किसे कहते है? इसकी आवश्यकता क्यों होती है?",
        answer: (
          <div>

            <p >    <b style={{ color: "green" }} className="text-xl">उत्तर: </b>
              सिंचाई एक ऐसी प्रक्रिया है जिसमें पौधों को पानी दिया जाता है ताकि वे स्वस्थ और उत्पादक बने रहें।</p>
            <p className="ml-12  "><b style={{ color: "blue" }}> सिंचाई की आवश्यकता निम्नलिखित कारणों से होती है:</b></p>
            <ul className="ml-16   list-none">
              <li className="relative before:content-['(I)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }}>पौधों की वृद्धि:</b> पौधों को पानी की आवश्यकता होती है ताकि वे स्वस्थ और उत्पादक बने रहें।</li>
              <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>मिट्टी की नमी:</b> मिट्टी में नमी की कमी होने पर पौधों को पानी देना आवश्यक होता है।</li>
              <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>मौसम की परिस्थितियाँ:</b> शुष्क मौसम में पौधों को पानी देना आवश्यक होता है ताकि वे सूखने से बचें।</li>
              <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>फसल की उत्पादकता:</b> सिंचाई से फसल की उत्पादकता में वृद्धि होती है और फसल की गुणवत्ता में सुधार होता है।</li>
            </ul>
          </div>
        ),
      },
      {
        question: " 26.  जैविक खाद से क्या लाभ है?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            <b style={{ color: "blue" }}> जैविक खाद के निम्नलिखित लाभ हैं:</b>
            <ul className="ml-16 list-none">
              <li className="relative before:content-['(I)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }}>मिट्टी की उर्वरता में वृद्धि:</b> जैविक खाद मिट्टी की उर्वरता में वृद्धि करती है, जिससे पौधों को आवश्यक पोषक तत्व मिलते हैं।</li>
              <li className="relative before:content-['(II)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }}>पौधों की वृद्धि में वृद्धि:</b> जैविक खाद पौधों की वृद्धि में वृद्धि करती है, जिससे पौधे स्वस्थ और मजबूत होते हैं।</li>
              <li className="relative before:content-['(III)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>मिट्टी की संरचना में सुधार:</b> जैविक खाद मिट्टी की संरचना में सुधार करती है, जिससे मिट्टी में पानी का अवशोषण और वायु का संचार बेहतर होता है।</li>
              <li className="relative before:content-['(IV)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>कीटों और रोगों का नियंत्रण:</b> जैविक खाद कीटों और रोगों का नियंत्रण करने में मदद करती है, जिससे पौधों को नुकसान नहीं पहुंचता है।</li>
              <li className="relative before:content-['(V)'] before:absolute before:-left-8 before:text-red-500 font-bold"><b style={{ color: "red" }}>पर्यावरण के अनुकूल:</b> जैविक खाद पर्यावरण के अनुकूल होती है, जिससे मिट्टी, पानी और वायु प्रदूषण नहीं होता है।</li>
            </ul>
          </div>
        ),
      },
      {
        question: " 27.  खेतों की बार-बार सिंचाई करने की आवश्यकता क्यों होती है?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            <b style={{ color: "blue" }}>
              खेतों की बार-बार सिंचाई करने की आवश्यकता निम्नलिखित कारणों से होती है:</b>
            <ul className="ml-16 list-none">
              <l className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold" i><b style={{ color: "red" }}>मिट्टी की नमी की कमी:</b> मिट्टी में नमी की कमी होने पर पौधों को पानी की आवश्यकता होती है।</l>
              <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>मौसम की परिस्थितियाँ:</b> शुष्क मौसम में पौधों को पानी की आवश्यकता होती है ताकि वे सूखने से बचें।</li>
              <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>पौधों की वृद्धि:</b> पौधों की वृद्धि के लिए पानी की आवश्यकता होती है।</li>
              <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>मिट्टी की उर्वरता:</b> मिट्टी की उर्वरता बनाए रखने के लिए पानी की आवश्यकता होती है।</li>
            </ul>
          </div>
        ),
      },
      {
        question: " 28. फसलों की उपज में सुधार हेतु महत्वपूर्ण सुझाव दीजिए।",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            <b style={{ color: "blue" }}> फसलों की उपज में सुधार हेतु महत्वपूर्ण सुझाव निम्नलिखित हैं:</b>
            <ul className="ml-16 list-none">
              <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>उचित बीज चयन:</b> फसल की आवश्यकताओं के अनुसार उचित बीज का चयन करें।</li>
              <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>मिट्टी की जाँच:</b> मिट्टी की जाँच करें और आवश्यक पोषक तत्वों का उपयोग करें।</li>
              <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>सिंचाई प्रबंधन:</b> सिंचाई का सही तरीके से प्रबंधन करें ताकि पानी की बर्बादी न हो।</li>
              <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>उर्वरकों का उपयोग:</b> उर्वरकों का उपयोग करें लेकिन उनकी मात्रा का ध्यान रखें।</li>
              <li className="relative before:content-['(V)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>कीट और रोग नियंत्रण:</b> कीट और रोग का नियंत्रण करें ताकि फसल को नुकसान न हो।</li>
              <li className="relative before:content-['(VI)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>फसल चक्र:</b> फसल चक्र का पालन करें ताकि मिट्टी की उर्वरता बनी रहे।</li>
              <li className="relative before:content-['(VII)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>प्रौद्योगिकी का उपयोग:</b> प्रौद्योगिकी का उपयोग करें जैसे कि ड्रिप सिंचाई और प्रीसिजन फार्मिंग।</li>
            </ul>
          </div>
        ),
      },
      {
        question: " 29.  केंचुए को किसानों का मित्र कहा जाता है क्यों?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            केंचुए को किसानों का मित्र कहा जाता है क्योंकि वे मिट्टी की गुणवत्ता में सुधार करते हैं, जिससे पौधों को आवश्यक पोषक तत्व मिलते हैं और मिट्टी की उर्वरता बनी रहती है।
          </div>
        ),
      },
      {
        question: " 30.  जैविकनाशी किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर: </b>
            जैविकनाशी उन पदार्थों को कहते हैं जो जैविक रूप से कीटों, रोगों और अन्य हानिकारक जीवों को नष्ट करने में मदद करते हैं।
          </div>
        ),
      }

];

const QuestionAnswerPage = () => {
  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold mb-6">प्रश्न और उत्तर</h1> */}
      {/* <Image sr></Image> */}
      <div className='flex justify-between'>
        <div>
      <Image src={"/image/8th-S-Chap-1.png"} className=' rounded mb-12 transition-all transform hover:scale-110 hover:animate-shake' width={2500} height={300} alt='img'></Image>
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
