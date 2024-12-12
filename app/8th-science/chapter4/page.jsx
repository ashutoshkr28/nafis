

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const questions = [


         {
               question: "1. पदार्थ किसे कहते हैं?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     वह वस्तु जो स्थान घिरे और उसमें कुछ न कुछ द्रव्यमान (वजन) हो वह वस्तु पदार्थ कहलाता है।
                   </p>
                 </div>
               ),
             },
             {
               question: "2. पदार्थ कितनी अवस्थाओं में पाया जाता है?",
               answer: (
                 <div>
                   <p> <b style={{ color: "green" }}>उत्तर: </b>
                     <b className="text-lg text-blue-600"> पदार्थ तीन अवस्थाओं में पाया जाता है:</b></p>
                   <ul className="list-none ml-16 text-gray-800">
                     <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'red' }}>ठोस</b> </li>
                     <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'red' }}>द्रव्य</b> </li>
                     <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: 'red' }}>गैस</b> </li>
                   </ul>
                   <ul className="ml-8">
                     <li><b style={{ color: 'blue' }}>ठोस: </b>पदार्थ की वह अवस्थाएँ जिनका आकार एवं आयतन दोनों निश्‍चित हो। <br />
                       <b><b style={{ color: "violet" }}> जैसे:—</b></b> पत्थर, फुटबॉल इत्यादि।</li>
                     <li><b style={{ color: 'blue' }}>द्रव्य: </b> पदार्थ की वह अवस्थाएँ जिनका आकार अनिश्‍चित एवं आयतन निश्‍चित हो। <br />
                       <b><b style={{ color: "violet" }}> जैसे:—</b></b> पानी, डीजल, पेट्रोल इत्यादि।</li>
                     <li><b style={{ color: 'blue' }}>गैस: </b> पदार्थ की वह अवस्थाएँ जिनका आकार एवं आयतन दोनों अनिश्‍चित हो। <br />
                       <b><b style={{ color: "violet" }}> जैसे:—</b></b> कार्बन डाई ऑक्साइड, नाइट्रोजन गैस।</li>
                   </ul>
    
                   {/* <b style={{ color: 'blue' }}>ठोस: </b> पदार्थ की वह अवस्थाएँ जिनका आकार एवं आयतन दोनों निश्‍चित हो। <br />
                       <b>जैसे:</b> पत्थर, फुटबॉल इत्यादि।
                       <br />
                
                       <b style={{ color: 'blue' }}>द्रव्य: </b> पदार्थ की वह अवस्थाएँ जिनका आकार अनिश्‍चित एवं आयतन निश्‍चित हो। <br />
                       <b>जैसे:</b> पानी, डीजल, पेट्रोल इत्यादि।
                       <br />
                
                       <b style={{ color: 'blue' }}>गैस: </b> पदार्थ की वह अवस्थाएँ जिनका आकार एवं आयतन दोनों अनिश्‍चित हो। <br />
                       <b>जैसे:</b> कार्बन डाई ऑक्साइड, नाइट्रोजन गैस। */}
                 </div>
               ),
             },
             {
               question: "3. धातु किसे कहते हैं?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     वे पदार्थ जिसमें विशेष प्रकार की चमक हो और इलेक्ट्रॉन
                     त्याग कर धन आयन बनाते हैं, एवं धातुओं को पीट-पीटकर चौड़ा किया जा सकता
                     है। <br />
                     <p className="ml-12">
                       <b style={{ color: "violet" }}> जैसे:—</b> सोना, चांदी, सोडियम।
                     </p>
                   </p>
                 </div>
               ),
             },
             {
               question: "4. अधातु किसे कहते हैं?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     वे पदार्थ जिसमें विशेष प्रकार की चमक नहीं होती है तथा
                     अधातु को पीटने पर भंगुर हो जाते हैं। <br />
                     <p className="ml-12">
                       <b style={{ color: "violet" }}> जैसे:—</b> ऑक्सीजन, सल्फर, क्लोरीन, ब्रोमीन इत्यादि।
                     </p>
                   </p>
                 </div>
               ),
             },
             {
               question: "5. अक्रिय धातु किसे कहते हैं?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     कुछ धातुएँ प्रकृति में स्वतंत्र अवस्था में पाई जाती हैं
                     जिन्हें अक्रिय धातु कहते हैं। <br />
                     <p className="ml-12">
                       <b style={{ color: "violet" }} > जैसे:—</b> सोना, चाँदी और प्लेटिनियम।
                     </p>
                   </p>
                 </div>
               ),
             },
    
    
              //   <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
              //   <thead>
              //     <tr className="bg-indigo-100">
              //       <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center"><b > खाद </b></th>
              //       <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center "> <b>उर्वरक </b></th>
              //     </tr>
              //   </thead>
              //   <tbody className="bg-white">
              //     <tr className="hover:bg-gray-50">
              //       <td className="border border-gray-400 px-4  py-4 ">(I) यह एक जैविक पदार्थ है।</td>
              //       <td className="border border-gray-400 px-4 py-4">(I) यह एक रासायनिक पदार्थ है।</td>
              //     </tr>
              //     <tr className="hover:bg-gray-50">
              //       <td className="border border-gray-400 px-4  py-4">(II) इसमें सभी प्रकार के पोषक तत्व पाये जाते हैं।</td>
              //       <td className="border border-gray-400 px-4  py-4">(II) इसमें विशेष प्रकार के पोषक तत्व पाये जाते हैं।</td>
              //     </tr>
              //     <tr className="hover:bg-gray-50">
              //       <td className="border border-gray-400 px-4  py-4">(III)  यह अपशिष्टों को मिट्टी में दबाकर बनाया जाता है।</td>
              //       <td className="border border-gray-400 px-4  py-4">(III) यह फैक्ट्रियों में बनाया जाता है। </td>
              //     </tr>
              //   </tbody>
              // </table>
    
             {
               question: "6. धातु और अधातु में क्या अंतर है?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     <b className="text-lg text-blue-600">   धातु और अधातु में निम्न अंतर है: </b>
                   </p>
                   <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
                     <thead >
                       <tr className="bg-indigo-100">
                         <th className="border border-gray-400 px-6 py-3 text-sky-500 font-lg text-center">धातु:</th>
                         <th className="border border-gray-400 px-6 py-3 text-sky-500 font-lg text-center">अधातु:</th>
                       </tr>
                     </thead>
                     <tbody className="bg-white">
                       <tr className="hover:bg-gray-50">
                         <td className="border border-gray-400 px-4  py-4 ">(I)धातुएँ विद्युत की अच्छी सुचालक होती हैं।</td>
                         <td className="border border-gray-400 px-4  py-4 ">(I)अधातुएँ विद्युत की कुचालक होती हैं।</td>
                       </tr>
                       <tr className="hover:bg-gray-50">
                         <td className="border border-gray-400 px-4  py-4 ">(II)धातुओं में विशेष प्रकार की चमक होती है।</td>
                         <td className="border border-gray-400 px-4  py-4 ">(II)अधातुओं में विशेष प्रकार की चमक नहीं होती है।</td>
                       </tr>
                       <tr className="hover:bg-gray-50">
                         <td className="border border-gray-400 px-4  py-4 ">(III)धातुओं को पीट कर पतली चादरें बनाई जा सकती हैं।</td>
                         <td className="border border-gray-400 px-4  py-4 ">(III)अधातुओं को पीटने पर भंगुर हो जाती हैं।</td>
                       </tr>
                       <tr className="hover:bg-gray-50">
                         <td className="border border-gray-400 px-4  py-4 ">(IV)धातुएँ इलेक्ट्रॉन त्याग कर धनायन बनाती हैं।</td>
                         <td className="border border-gray-400 px-4  py-4 ">(IV)अधातुएँ इलेक्ट्रॉन ग्रहण करके ऋणायन बनाती हैं।</td>
                       </tr>
                       <tr className="hover:bg-gray-50">
                         <td className="border border-gray-400 px-4  py-4 ">(V)धातुओं के ऑक्साइड क्षारीय होते हैं।</td>
                         <td className="border border-gray-400 px-4  py-4 ">(V)अधातुओं के ऑक्साइड अम्लीय होते हैं।</td>
                       </tr>
                       <tr className="hover:bg-gray-50">
                         <td className="border border-gray-400 px-4  py-4 "> <b className="text-sm"><b style={{ color: "violet" }}> उदाहरण:</b>  लोहा, तांबा, एल्युमिनियम, सोना, चांदी। </b></td>
                         <td className="border border-gray-400 px-4  py-4 "> <b className="text-sm"><b style={{ color: "violet" }}> उदाहरण:</b> कार्बन, सल्फर, ऑक्सीजन, नाइट्रोजन। </b></td>
                       </tr>
                     </tbody>
                   </table>
    
                   {/* <ul className="list-disc ml-6 text-gray-800">
                     <li>
                       <b>धातु:</b>
                       <ul className="list-disc ml-6">
                         <li>धातुएँ विद्युत की अच्छी सुचालक होती हैं।</li>
                         <li>धातुओं में विशेष प्रकार की चमक होती है।</li>
                         <li>धातुओं को पीट कर पतली चादरें बनाई जा सकती हैं।</li>
                         <li>धातुएँ इलेक्ट्रॉन त्याग कर धनायन बनाती हैं।</li>
                         <li>धातुओं के ऑक्साइड क्षारीय होते हैं।</li>
                         <li>
                           <i>उदाहरण:</i> लोहा, तांबा, एल्युमिनियम, सोना, चांदी।
                         </li>
                       </ul>
                     </li>
                     <li>
                       <b>अधातु:</b>
                       <ul className="list-disc ml-6">
                         <li>अधातुएँ विद्युत की कुचालक होती हैं।</li>
                         <li>अधातुओं में विशेष प्रकार की चमक नहीं होती है।</li>
                         <li>अधातुओं को पीटने पर भंगुर हो जाती हैं।</li>
                         <li>अधातुएँ इलेक्ट्रॉन ग्रहण करके ऋणायन बनाती हैं।</li>
                         <li>अधातुओं के ऑक्साइड अम्लीय होते हैं।</li>
                         <li>
                           <i>उदाहरण:</i> कार्बन, सल्फर, ऑक्सीजन, नाइट्रोजन।
                         </li>
                       </ul>
                     </li>
                   </ul> */}
                 </div>
               ),
             },
             {
               question: " 7. आघातवर्ध्यता किसे कहते हैं?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     जिन धातुओं को पीटकर चादर बनाई जाती है, उसे धातुओं के
                     गुण को आघातवर्ध्यता कहते हैं।
                   </p>
                   <p>आघातवर्ध्यता के कुछ मुख्य लक्षण हैं:</p>
                   <ul className="list-disc ml-10 text-gray-800">
                     <li>पीटने पर आकार बदलना: आघातवर्ध्य धातुएँ टूटती नहीं हैं।</li>
                     <li>दबाने पर आकार बदलना: आघातवर्ध्य धातुएँ दबाने पर भी आकार बदलती हैं।</li>
                     <li>टूटने की प्रतिरोधकता रखती हैं।</li>
                   </ul>
                   <p className="text-lg text-blue-600 ml-6">आघातवर्ध्यता के उदाहरण: सोना, चाँदी, ताँबा</p>
                   {/* <ul className="list-disc ml-6 text-gray-800">
                     <li>सोना</li>
                     <li>चाँदी</li>
                     <li>ताँबा</li>
                   </ul> */}
                 </div>
               ),
             },
             {
               question: "8. कॉपर जिंक को उसके लवण के विलयन से विस्थापित नहीं कर सकता है?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     कॉपर जिंक को उसके लवण के विलयन से विस्थापित नहीं कर सकता
                     है, क्योंकि जिंक कॉपर से अधिक अभिक्रियाशील है।
                   </p>
                 </div>
               ),
             },
             {
               question: "9. तन्यता किसे कहते हैं?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     जिन धातुओं को खींच कर लंबी तार बनाई जा सकती है धातुओं
                     के इस गुण को तन्यता कहते हैं।
                   </p>
                 </div>
               ),
             },
             {
               question: "10. कॉपर में जंग लगता है तो उसका रंग कैसा होता है?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     <span className="text-blue-500"> हरा (blue)</span>
                   </p>
                 </div>
               ),
             },
    
             {
               question: "11. अपरूप किसे कहते हैं? कार्बन के दो अपरूपों के नाम लिखें?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     एक ही तत्व के अलग-अलग रूपों को अपरूप कहते हैं। <br />
                     <b className="ml-8 text-blue-600">कार्बन के दो अपरूप:</b>
                   </p>
                   <ul className="list-none ml-10 text-gray-800 ">
                     <li>(i) हीरा</li>
                     <li>(ii) ग्रेफाइट</li>
                   </ul>
                 </div>
               ),
             },
             {
               question: "12. मिश्र धातु किसे कहते हैं?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     धातुओं और अधातुओं के मिश्रण से बने पदार्थ मिश्र धातु
                     कहलाते हैं।
                   </p>
                   <p className="ml-12"><b style={{ color: "violet" }}> उदाहरण:</b></p>
                   <ul className="list-disc ml-12 text-gray-800">
                     <li><b>इस्पात:</b> लोहे में कार्बन मिलाकर बनाया जाता है।</li>
                     <li><b>पीतल:</b> तांबे में जस्ता मिलाकर बनाया जाता है।</li>
                     <li><b>कांसा:</b> तांबे में टिन मिलाकर बनाया जाता है।</li>
                   </ul>
                 </div>
               ),
             },
             {
               question: "13. धात्विक ऑक्साइड की प्रकृति कैसी होती है?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     धात्विक ऑक्साइड की प्रकृति क्षारीय होती है।
                   </p>
                 </div>
               ),
             },
             {
               question: "14. अधात्विक ऑक्साइड की प्रकृति कैसी होती है?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     अधात्विक ऑक्साइड की प्रकृति अम्लीय होती है।
                   </p>
                 </div>
               ),
             },
             {
               question: " 15. धातु अम्ल से अभिक्रिया करके कौन सा गैस उत्पन्न करते हैं?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     हाइड्रोजन गैस।
                   </p>
                 </div>
               ),
             },
             {
               question: "16. पॉप ध्वनि के साथ जलने वाले गैस का नाम लिखिए?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     हाइड्रोजन गैस।
                   </p>
                 </div>
               ),
             },
             {
               question: "17. एक ऐसे धातु के नाम लिखें जो कमरे के ताप पर द्रव्य अवस्था में पाया जाता है?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     पारा।
                   </p>
                 </div>
               ),
             },
             {
               question: "18.  दो ऐसे धातु का नाम बताइए जिसे चाकू से काटा जा सकता है?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     सोडियम और पोटैशियम।
                   </p>
                 </div>
               ),
             },
             {
               question: "19.  मैग्नीशियम रिबन को वायु में जलने पर क्या होता है?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     मैग्नीशियम ऑक्साइड बनता है।
                   </p>
                 </div>
               ),
             },
             {
               question: "20. पॉप ध्वनि किसे कहते हैं?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     हाइड्रोजन गैस को जलाने पर जो ध्वनि निकलती है उसे पॉप
                     ध्वनि कहते हैं।
                   </p>
                 </div>
               ),
             },
              {
                question: " विस्थापन अभिक्रिया किसे कहते हैं?",
                answer: (
                  <div>
                    <p>
                      <b style={{ color: "green" }}>उत्तर: </b>
               ऐसी अभिक्रिया जिसमें अधिक क्रियाशील धातु कम क्रियाशील
                      धातु को उसके यौगिक से बाहर कर देता है, ऐसी अभिक्रिया को विस्थापन
                      अभिक्रिया कहते हैं।
                    </p>
                    <p>
                      <b>उदाहरण:</b>
                    </p>
                    <p>
                      मान लीजिए हमारे पास एक लोहे की कील है जिसे हम कॉपर सल्फेट के घोल में
                      डालते हैं। कुछ समय बाद हम देखेंगे कि लोहे की कील पर तांबे की एक परत
                      जम गई है और घोल का रंग हरा हो गया है।
                    </p>
                    <p>
                      इस अभिक्रिया को हम निम्न रासायनिक समीकरण से दर्शा सकते हैं:
                    </p>
                    <p className="font-mono mt-2">
                      Fe (s) + CuSO₄ (aq) → FeSO₄ (aq) + Cu (s)
                    </p>
                    <ul className="list-disc ml-6 text-gray-800">
                      <li>Fe (s): लोहा (ठोस अवस्था में)</li>
                      <li>CuSO₄ (aq): कॉपर सल्फेट (जलीय घोल में)</li>
                      <li>FeSO₄ (aq): आयरन सल्फेट (जलीय घोल में)</li>
                      <li>Cu (s): तांबा (ठोस अवस्था में)</li>
                    </ul>
                    <p>
                      <b>इस अभिक्रिया में क्या हुआ:</b>
                    </p>
                    <ul className="list-disc ml-6 text-gray-800">
                      <li>लोहा (Fe) कॉपर (Cu) से अधिक क्रियाशील है।</li>
                      <li>
                        लोहे ने कॉपर सल्फेट (CuSO₄) में मौजूद कॉपर को विस्थापित कर दिया और
                        स्वयं सल्फेट आयनों (SO₄²⁻) के साथ संयुक्त होकर आयरन सल्फेट (FeSO₄)
                        बनाया।
                      </li>
                      <li>विस्थापित हुआ तांबा (Cu) लोहे की कील पर जम गया।</li>
                    </ul>
                  </div>
                ),
              },
             {
               question: "21.  विस्थापन अभिक्रिया किसे कहते हैं?",
               answer: (
                 <div>
                   <p>
                     <b style={{ color: "green" }}>उत्तर: </b>
                     ऐसी अभिक्रिया जिसमें अधिक क्रियाशील धातु कम क्रियाशील
                     धातु को उसके यौगिक से बाहर कर देता है, ऐसी अभिक्रिया को <b style={{ color: 'blue' }}>विस्थापन अभिक्रिया</b>
                     कहते हैं।
                   </p>
                   <p>
                     <b style={{ color: "violet" }} className="ml-12"> उदाहरण:</b>
                   </p>
                   <p className="ml-12">
                     मान लीजिए हमारे पास एक लोहे की कील है जिसे हम कॉपर सल्फेट के घोल में
                     डालते हैं। कुछ समय बाद हम देखेंगे कि लोहे की कील पर तांबे की एक परत
                     जम गई है और घोल का रंग हरा हो गया है।
                   </p>
                   <p className="ml-12">
                     <b style={{ color: 'blue' }}>इस अभिक्रिया को हम निम्न रासायनिक समीकरण से दर्शा सकते हैं:</b>
                   </p>
                   <p className="font-mono mt-2 ml-12" style={{ color: 'brown' }}>
                     Fe (s) + CuSO₄ (aq) → FeSO₄ (aq) + Cu (s)
                   </p>
                   <ul className="list-disc ml-16 text-gray-800">
                     <li><b style={{ color: 'red' }}>Fe (s):</b> लोहा (ठोस अवस्था में)</li>
                     <li><b style={{ color: 'red' }}>CuSO₄ (aq):</b> कॉपर सल्फेट (जलीय घोल में)</li>
                     <li><b style={{ color: 'red' }}>FeSO₄ (aq):</b> आयरन सल्फेट (जलीय घोल में)</li>
                     <li><b style={{ color: 'red' }}>Cu (s):</b> तांबा (ठोस अवस्था में)</li>
                   </ul>
                   <p className="ml-12">
                     <b style={{ color: 'blue' }}>इस अभिक्रिया में क्या हुआ:</b>
                   </p>
                   <ul className="list-disc ml-16 text-gray-800">
                     <li><b style={{ color: 'orange' }}>लोहा (Fe)</b> कॉपर (Cu) से अधिक क्रियाशील है।</li>
                     <li>
                       <b style={{ color: 'orange' }}>लोहे</b> ने <b style={{ color: 'orange' }}>कॉपर सल्फेट (CuSO₄)</b> में मौजूद कॉपर को विस्थापित
                       कर दिया और स्वयं सल्फेट आयनों (SO₄²⁻) के साथ संयुक्त होकर आयरन
                       सल्फेट (FeSO₄) बनाया।
                     </li>
                     <li><b style={{ color: 'orange' }}>विस्थापित हुआ तांबा (Cu)</b> लोहे की कील पर जम गया।</li>
                   </ul>
                 </div>
               ),
             },
             {
               question: "22.  सोडियम और पोटेशियम को खुला वायु में छोड़ने पर क्या होता है?",
               answer: (
                 <div>
                   <b style={{ color: "green" }}>उत्तर: </b>
                   सोडियम और पोटेशियम को खुला वायु में छोड़ने पर <b style={{ color: 'red' }}>आग पकड़ लेता है</b>।
                 </div>
               ),
             },
    
             {
               question: "23. आभूषण बनाने में कितने कैरेट सोने का उपयोग किया जाता है?",
               answer: (
                 <div>
                   <b style={{ color: "green" }}>उत्तर: </b>
                   आभूषण बनाने में <b style={{ color: 'blue' }}>24 कैरेट सोने</b> का उपयोग किया जाता है।
                 </div>
               ),
             },
    
             {
               question: "24. सबसे सरल हाइड्रोकार्बन का नाम लिखें?",
               answer: (
                 <div>
                   <b style={{ color: "green" }}>उत्तर: </b>
                   सबसे सरल हाइड्रोकार्बन <b style={{ color: 'blue' }}>मीथेन (CH₄)</b> है।
                 </div>
               ),
             },
    
             {
               question: "25.  हाइड्रोकार्बन क्या है? किन्ही तीन हाइड्रोकार्बन का नाम लिखें?",
               answer: (
                 <div>
                   <b style={{ color: "green" }}>उत्तर: </b>
                   हाइड्रोजन तथा कार्बन से बने यौगिक को <b style={{ color: 'purple' }}>हाइड्रोकार्बन</b> कहते हैं।
                   <br />
                   <b className="text-blue-600 ml-10">तीन हाइड्रोकार्बन का नाम निम्न है:</b>
                   <ul className="list-none ml-10 text-gray-800">
                     <li ><b style={{ color: 'orange' }}>(i) मीथेन</b></li>
                     <li ><b style={{ color: 'orange' }}>(ii) एथेन</b></li>
                     <li ><b style={{ color: 'orange' }}>(iii) प्रोपेन</b></li>
                   </ul>
                 </div>
               ),
             },
    
             {
               question: "26.  सोल्डर क्या है? और कहाँ उपयोग होता है?",
               answer: (
                 <div>
                   <b style={{ color: "green" }}>उत्तर: </b>
                   सोल्डर एक मिश्र धातु है जो टीन और लैड के मिश्रण से बनाया जाता है। इसे <b style={{ color: 'brown' }}>बिजली के तारों को जोड़ने</b> में उपयोग किया जाता है।
                 </div>
               ),
             },
    
             {
               question: "27.  हीरे और ग्रेफाइट के गुणों में क्या अंतर होता है?",
               answer: (
                 <div>
                   <b style={{ color: "green" }}>उत्तर: </b>
    
                   <ul className="list-none ml-10 text-gray-800">
                     <li><b>(ii) हीरा</b>: रंगहीन, पारदर्शी, ठोस तथा कठोर होता है। यह विद्युत का <b style={{ color: 'red' }}>कुचालक</b> होता है।</li>
                     <li><b>(ii) ग्रेफाइट</b>: काला, चमकदार, ठोस, बहुत मुलायम, चिकना और फिसलदार होता है। यह विद्युत का <b style={{ color: 'red' }}>सुचालक</b> होता है।</li>
                   </ul>
                 </div>
               ),
             },
    
             {
               question: "28.  मिश्र धातुओं के बनाने के क्या फायदा है?",
               answer: (
                 <div>
                   <b style={{ color: "green" }}>उत्तर: </b>
                   <b style={{ color: 'blue' }}>
                     मिश्र धातु के बनाने के निम्न फायदा हैं:</b>
                   <ul className="list-none ml-12 text-gray-800">
                     <li><b>(i) मिश्र धातु तत्वों के मुकाबले अधिक मजबूत और कठोर होता है।</b></li>
                     <li ><b>(ii) मिश्र धातु पर जंग नहीं लगता है।</b></li>
                     <li ><b>(iii) मिश्र धातुओं से उपयोगी वस्तुएँ बनायी जाती हैं।</b></li>
                   </ul>
                 </div>
               ),
             },
    
             {
               question: "29.  ध्वनिकता क्या है?",
               answer: (
                 <div>
                   <b style={{ color: "green" }}>उत्तर: </b>
                   धातुओं को कठोर सतह से टकराने पर एक प्रकार की आवाज उत्पन्न होती है, जिसे <b style={{ color: 'red' }}>ध्वनिकता</b> कहा जाता है।
                 </div>
               ),
             },
             {
               question: "30.  लोहे पर जंग लगने का मुख्य कारण क्या है?",
               answer: (
                 <div>
                   <b style={{ color: "green" }}>उत्तर: </b>
                   लोहे पर जंग लगने का मुख्य कारण <b style={{ color: 'red' }}>ऑक्सीजन और नमी</b> की उपस्थिति है। जब लोहा पानी और हवा के संपर्क में आता है, तो यह ऑक्सीजन के साथ अभिक्रिया करके आयरन ऑक्साइड बनाता है, जिसे हम <b style={{ color: 'blue' }}>जंग</b> कहते हैं।
                   <br />
                   <b>जंग लगने की प्रक्रिया:</b>
                   <ul className="list-none ml-10 text-gray-800">
                     <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'purple' }}>लोहा पानी और ऑक्सीजन</b> के संपर्क में आता है।</li>
                     <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'purple' }}>पानी और ऑक्सीजन</b> लोहे के साथ रासायनिक अभिक्रिया करते हैं।</li>
                     <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: 'purple' }}>इस अभिक्रिया</b> से लोहे की सतह पर एक लाल-भूरे रंग की परत जम जाती है, जिसे जंग कहते हैं।</li>
                   </ul>
                   <b>जंग लगने से क्या होता है:</b>
                   <ul className="list-none ml-10 text-gray-800">
                     <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'red' }}>लोहा कमजोर</b> हो जाता है।</li>
                     <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'red' }}>लोहे की चमक</b> खत्म हो जाती है।</li>
                     <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: 'red' }}>लोहे का आकार</b> बदल जाता है।</li>
                   </ul>
                   <b className="">जंग लगने से कैसे बचें:</b>
                   <ul className="list-none ml-10 text-gray-800">
                     <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'blue' }}>लोहे पर पेंट</b> या तेल लगाएं।</li>
                     <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: 'blue' }}>लोहे को पानी से</b> दूर रखें।</li>
                     <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: 'blue' }}>लोहे को जंग रोधी पदार्थों</b> से ढकें।</li>
                     <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: 'blue' }}>गैल्वनाइजेशन की प्रक्रिया</b> का उपयोग करें।</li>
                   </ul>
                   <b>नोट:</b> <i>जंग लगना एक प्राकृतिक प्रक्रिया है, लेकिन हम कुछ उपायों से इसे रोक सकते हैं।</i>
                 </div>
               ),
             },
    
             {
               question: "31.  सोडियम को किरोसीन तेल में डूबाकर क्यों रखा जाता है?",
               answer: (
                 <div>
                   <b style={{ color: "green" }}>उत्तर: </b>
                   सोडियम एक बेहद क्रियाशील धातु है। यह हवा में मौजूद ऑक्सीजन और पानी के साथ बहुत तेजी से प्रतिक्रिया करता है। इस प्रतिक्रिया से काफी गर्मी पैदा होती है जिससे सोडियम में आग लग सकती है। इसे रोकने के लिए सोडियम को <b style={{ color: 'orange' }}>केरोसिन तेल</b> में डुबोकर रखा जाता है क्योंकि:
                   <ul className="list-none ml-6 text-gray-800">
                     <li><b style={{ color: 'blue' }}>(i) केरोसिन तेल</b> सोडियम को हवा और पानी से पूरी तरह से अलग कर देता है। इससे सोडियम, हवा और पानी के संपर्क में आने से बच जाता है और प्रतिक्रिया नहीं कर पाता।</li>
                     <li><b style={{ color: 'blue' }}>(ii) केरोसिन तेल</b> एक अक्रिय पदार्थ है। यह सोडियम के साथ किसी भी तरह की प्रतिक्रिया नहीं करता, जिससे सोडियम सुरक्षित रहता है।</li>
                   </ul>
                   <b>संक्षेप में:</b> <p>सोडियम को केरोसिन तेल में डुबोकर रखने का मुख्य उद्देश्य इसे हवा और पानी के संपर्क में आने से बचाना है ताकि यह प्रतिक्रिया न करे और आग लगने का खतरा कम हो।</p>
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
        <Image src={"/image/8th-S-Chap-4.png"} className=' rounded mb-12' width={2500} height={300} alt='img'></Image>
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