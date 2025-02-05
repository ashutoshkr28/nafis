

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const questions = [


  //     // chapter 10 

//     {
//       chapterName: "किशोरावस्था की ओर",
//       imageUrl: "/image/8th-S-Chap-10.png", // 🖼️ Image for this chapter
//       description: (
//         <h1><b style={{ color: "blue" }}> इस अध्याय में ह उर्वरक।</b></h1>

//       ),
//       questions: [

        {
          question: "1. किशोरावस्था किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जीवनकाल की वह अवधि जब जनन विकास के कारण शरीर में परिवर्तन होते हैं किशोरावस्था कहलाती है।
              <ul>
                <li>यह अवस्था 11 वर्ष की आयु से 18 या 19 वर्ष की आयु तक रहती है।</li>
                <li>किशोरावस्था को टीनेजर्स भी कहते हैं।</li>
                <li>लड़कियों में यह अवस्था लड़कों की अपेक्षा एक या दो वर्ष पूर्व प्रारंभ हो जाती है।</li>
              </ul>
            </div>
          ),
        },
        {
          question: "2. यौवनारंभ का सबसे महत्वपूर्ण परिवर्तन क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> लड़के एवं लड़कियों की जन्म क्षमता का विकास।
            </div>
          ),
        },
        {
          question: "3. लिंग गुणसूत्र किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> लिंग गुणसूत्र वे गुणसूत्र होते हैं जो जीव के लिंग का निर्धारण करते हैं। मानव में लिंग गुणसूत्र X और Y होते हैं।
            </div>
          ),
        },
        {
          question: "4. रजोनिवृत किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> रजोनिवृत्ति वह समय होता है जब महिला के शरीर में अंडाणु का उत्पादन बंद हो जाता है और मासिक धर्म चक्र समाप्त हो जाता है। यह आमतौर पर महिलाओं में 45-55 वर्ष की आयु के बीच होता है।
            </div>
          ),
        },
        {
          question: "5. रजोदर्शन किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> रजोदर्शन वह समय होता है जब महिला के शरीर में पहली बार मासिक धर्म शुरू होता है। यह आमतौर पर लड़कियों में 10-16 वर्ष की आयु के बीच होता है।
            </div>
          ),
        },
        {
          question: "6. रजोधर्म किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> रजोधर्म या मासिक धर्म वह प्रक्रिया होती है जिसमें महिला के शरीर से गर्भाशय की परत और रक्त का स्राव होता है, जब गर्भधारण नहीं होता है। यह आमतौर पर महिलाओं में हर (28–30) दिनों में होता है।
            </div>
          ),
        },
        {
          question: "7. लड़कियों में स्तन का विकास किस प्रकार होते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> लड़कियों में स्तन का विकास यौवनावस्था के दौरान होता है, जो आमतौर पर 10-14 वर्ष की आयु के बीच शुरू होता है। इस प्रक्रिया में स्तन के ऊतकों का विकास होता है, जिससे स्तन का आकार और रूप बदलता है।
            </div>
          ),
        },



        {
          question: "8. किशोरावस्था, बाल्यावस्था से किस प्रकार भिन्न है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color:"blue"}}> किशोरावस्था और बाल्यावस्था में कई अंतर हैं:</span>
              <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center"><b > बाल्यावस्था (6-10 वर्ष): </b></th>
                    <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center "> <b>किशोरावस्था (11-19 वर्ष): </b></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4 ">(I) शारीरिक विकास धीमा होता है।</td>
                    <td className="border border-gray-400 px-4 py-4">(I) शारीरिक विकास तेजी से होता है।</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4">(II) मानसिक विकास तेजी से होता है।</td>
                    <td className="border border-gray-400 px-4  py-4">(II) मानसिक विकास भी तेजी से होता है।</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4">(III)  बच्चे अधिक आश्रित होते हैं।</td>
                    <td className="border border-gray-400 px-4  py-4">(III) किशोर अधिक स्वतंत्र होते हैं। </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4">(IV)  यौन विकास नहीं होता है।</td>
                    <td className="border border-gray-400 px-4  py-4">(IV) यौन विकास होता है और यौन परिपक्वता प्राप्त होती है। </td>
                  </tr>

                </tbody>
              </table>

            </div>
          ),
        },
        {
          question: "9. बेहतर सेहत के लिए आप क्या करते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बेहतर सेहत के लिए हमें अपने आहार में कार्बोहाइड्रेट, प्रोटीन, विटामिन, वसा और खनिजों की पर्याप्त मात्रा शामिल करनी चाहिए। यह हमारे शरीर को आवश्यक पोषक तत्व प्रदान करता है और हमें स्वस्थ और ऊर्जावान बनाए रखता है।
            </div>
          ),
        },
        {
          question: "10. किशोरावस्था में स्वर में बदलाव क्यों आता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> किशोरावस्था में स्वर में बदलाव हार्मोनल परिवर्तनों के कारण आता है। इस दौरान लड़कों में टेस्टोस्टेरोन हार्मोन की मात्रा में वृद्धि होती है, जिससे उनकी आवाज़ मोटी और गहरी हो जाती है। लड़कियों में भी एस्ट्रोजन हार्मोन की मात्रा में वृद्धि होती है, जिससे उनकी आवाज़ में भी बदलाव आता है।
            </div>
          ),
        },
        {
          question: "11. किशोरावस्था में लंबाई तेजी से क्यों बढ़ता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> किशोरावस्था में लंबाई तेजी से बढ़ता है क्योंकि शरीर की हड्डियों में तेजी से वृद्धि होती है। लगभग 18 वर्ष की आयु तक लड़के और लड़कियाँ अपनी अधिकतम लंबाई प्राप्त कर लेते हैं।
            </div>
          ),
        },

        {
          question: "12. शारीरिक बनावट में किस प्रकार परिवर्तन आते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color: "blue"}}>शारीरिक बनावट में निम्न परिवर्तन आते हैं:</span>
              <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center"><b > लड़कों में: </b></th>
                    <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center "> <b>लड़कियों में: </b></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4 ">(I) लंबाई और वजन में वृद्धि।</td>
                    <td className="border border-gray-400 px-4 py-4">(I) लंबाई और वजन में वृद्धि।</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4">(II) मांसपेशियों का विकास।</td>
                    <td className="border border-gray-400 px-4  py-4">(II) स्तनों का विकास।</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4">(III)  आवाज़ में गहरापन।</td>
                    <td className="border border-gray-400 px-4  py-4">(III) कूल्हों और जांघों का विकास। </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4">(IV)  दाढ़ी और मूंछों का उगना।</td>
                    <td className="border border-gray-400 px-4  py-4">(IV) मासिक धर्म की शुरुआत। </td>
                  </tr>

                </tbody>
              </table>
            </div>
          ),
        },
        {
          question: "13. मनुष्य के जीवन काल को कितने भागों में बाँटा जाता है?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर:—</b>  मनुष्य के जीवन काल को चार भागों में बाँटा जाता है: 
              </p>
              <ul className="ml-16">
                <li> <span style={{color:"blue"}}>बाल्यावस्था (0-12 वर्ष): </span>बचपन का समय</li>
                <li> <span style={{color:"blue"}}>किशोरावस्था (13-19 वर्ष): </span>जवानी की शुरुआत</li>
                <li> <span style={{color:"blue"}}>प्रौढ़ावस्था (20-59 वर्ष): </span> जवानी का समय</li>
                <li> <span style={{color:"blue"}}>वृद्धावस्था (60 वर्ष से अधिक):</span> बुढ़ापा</li>
              </ul>
            </div>
          ),
        },

        {
          question: "14. मानसिक एवं संवेदनात्मक विकास किस प्रकार होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> मानसिक एवं संवेदनात्मक विकास निम्न हैं:
              <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center"><b > मानसिक विकास: </b></th>
                    <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center "> <b>संवेदनात्मक विकास: </b></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4 ">(I) सोच और समझ में सुधार</td>
                    <td className="border border-gray-400 px-4 py-4">(I) भावनाओं को समझने और नियंत्रित करने में सुधार</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4">(II) समस्याओं का समाधान करने में सुधार</td>
                    <td className="border border-gray-400 px-4  py-4">(II) दूसरों की भावनाओं को समझने में सुधार</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4  py-4">(III)  निर्णय लेने में सुधार</td>
                    <td className="border border-gray-400 px-4  py-4">(III) सामाजिक और रिश्तों में सुधार </td>
                  </tr>

                </tbody>
              </table>
            </div>
          ),
        },
        {
          question: "15. परिपक्वता किसे कहते हैं ?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> परिपक्वता का अर्थ है व्यक्ति का शारीरिक, मानसिक और भावनात्मक रूप से पूरी तरह से विकसित होना।
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
        <Image src={"/image/8th-S-Chap-10.png"} className=' rounded mb-12 transition-all transform hover:animate-shake' width={2500} height={300} alt='img'></Image>
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