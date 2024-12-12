

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const questions = [

    

    //  /Chapter 3  संश्लेषित रेशे और प्लास्टिक
    //  {
    //    chapterName: " संश्‍लेषित रेशे और प्लास्टिक",
    //    imageUrl: "/image/8th-S-Chap-3.png",  🖼️ Image for this chapter
    //    description: (
    //      <h1><b style={{ color: "blue" }}> इस अध्याय में ह उर्वरक।</b></h1>

    //    ),
    //    questions: [
        {
          question: " 1. कपड़े कितने प्रकार के प्राप्त रेशों से बनता है?",
          answer: (
            <div>
              <p>
                <b style={{ color: "green" }}>उत्तर: </b>
                <b className="text-lg text-blue-600">  कपड़े दो प्रकार के रेशों से बनता है: </b></p>
              <ul className="list-none ml-12">
                <li><b style={{ color: "red" }}>(i) प्राकृतिक रेशे</b></li>
                <li><b style={{ color: "red" }}>(ii) कृत्रिम रेशे</b></li>
              </ul>
            </div>
          ),
        },
        {
          question: "3. कुछ प्राकृतिक रेशों एवं उनके स्रोतों के नाम लिखिए।",
          answer: (
            <div>
              <p>रेशों और उनके स्रोतों के नाम निम्नलिखित हैं:</p>
              <table className="table-auto border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">रेशे</th>
                    <th className="border border-gray-300 px-4 py-2">स्त्रोत</th>
                  </tr>
               </thead>
                 <tbody>
                   <tr>
                     <td className="border border-gray-300 px-4 py-2">कपास</td>
                     <td className="border border-gray-300 px-4 py-2">पौधों से</td>
                   </tr>
                   <tr>
                     <td className="border border-gray-300 px-4 py-2">ऊन</td>
                     <td className="border border-gray-300 px-4 py-2">जंतुओं से</td>
                   </tr>
                   <tr>
                     <td className="border border-gray-300 px-4 py-2">रेशम</td>
                     <td className="border border-gray-300 px-4 py-2">जंतुओं से</td>
                   </tr>
                 </tbody>
               </table>
             </div>
           ),
         },
         {
           question: " 4. संश्लेषित रेशे किसे कहते हैं?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               ऐसे रेशे जो मनुष्य स्वयं तैयार करता है <b style={{ color: "blue" }}>संश्लेषित रेशे</b> कहलाते हैं।
             </div>
           ),
         },
         {
           question: "5.  उसे संश्लेषित रेशे के नाम बताइए जिसका तार इस्पात के तार से भी मजबूत होता है?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               <b style={{ color: "blue" }}>नायलॉन</b>।
             </div>
           ),
         },
         {
           question: "6.  संश्लेषित रेशों के एक हानिकारक गुण लिखें?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               संश्लेषित रेशों से बने वस्त्र में यदि आग लग जाए तो कपड़ा और पहनने वाला व्यक्ति के शरीर से चिपक जाता है।
             </div>
           ),
         },
         {
           question: "7.  पेट क्या है?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               एक बहुत सुपरिचित प्रकार का पॉलिएस्टर है, जिसका उपयोग बोतले, बर्तन, फिल्म, तार और अन्य उपयोगी उत्पादों के निर्माण के लिए किया जाता है।
             </div>
           ),
         },
         {
           question: "8.  ऐक्रिलिक क्या है?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               ऐसे ऊन जो प्राकृतिक स्रोतों से न प्राप्त कर संश्लेषित किए जाते हैं, उन्हें <b style={{ color: "blue" }}>ऐक्रिलिक</b> कहते हैं। इनसे ऊनी वस्त्र बनाए जाते हैं।
             </div>
           ),
         },
         {
           question: "9.  संश्लेषित रेशों के गुण लिखिए।",
           answer: (
             <div>
               <p>
                 <b style={{ color: "green" }}>उत्तर: </b>
                 <b style={{ color: "blue" }}>
                   संश्लेषित रेशों के गुण निम्नलिखित हैं:</b>
               </p>
               <ul className="ml-16">
                 <li><b>यह शीघ्र सूखते हैं।</b></li>
                 <li><b>अधिक चलाऊ कम महंगे और आसानी से उपलब्ध होते हैं।</b></li>
                 <li><b>यह रख रखाव में सुविधाजनक होते हैं।</b></li>
               </ul>
             </div>
           ),
         },
         {
           question: "10.  प्लास्टिक कितने प्रकार के होते हैं?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               <b style={{ color: "blue" }}>
                 प्लास्टिक दो प्रकार के होते हैं:
               </b>
               <ul className="ml-14">
                 <li><b>(i) थर्मोप्लास्टिक</b></li>
                 <li><b>(ii) थर्मोसेटिंग प्लास्टिक</b></li>
               </ul>
             </div>
           ),
         },
         {
           question: "11.  सबसे अधिक ऊष्मा सहने की क्षमता वाले प्लास्टिक का नाम लिखिए।",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               <b style={{ color: "blue" }}>मेलामाइन</b>।
             </div>
           ),
         },
         {
           question: "12.  थर्मोप्लास्टिक और थर्मोसेटिंग प्लास्टिक में क्या अंतर है?",
           answer: (
             <div>
               <p>              <b style={{ color: "green" }}>उत्तर: </b>
                 <b style={{ color: "blue" }}>
                   थर्मोप्लास्टिक और थर्मोसेटिंग प्लास्टिक में निम्नलिखित अंतर हैं:
                 </b>
               </p>
               <ul className="ml-14">
                 <li><b style={{ color: "red" }}>(i) थर्मोप्लास्टिक:</b> यह गर्म करने पर विकृत हो जाते हैं। ये सरलता पूर्वक मुड़ जाते हैं। इनका उपयोग खिलौने और बर्तनों के बनाने में किया जाता है।</li>
                 <li><b style={{ color: "red" }}>(ii) थर्मोसेटिंग प्लास्टिक:</b> यह गर्म करने पर विकृत नहीं होते हैं। यह मुड़ते नहीं हैं। इनसे बर्तनों के हत्थे जैसा गर्मी सहने वाला सामान बनाए जाते हैं।</li>
               </ul>
             </div>
           ),
         },
         {
           question: " 13. आग बुझाने वाले कर्मचारियों के परिधानों पर किस पदार्थ की परत चढ़ी होती है और क्यों?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               <b style={{ color: "blue" }}>मेलामाइन</b> की, क्योंकि ये आग का प्रतिरोधक है।
             </div>
           ),
         },
         {
           question: "14.  रेशा का नाम बताइए जो :",
           answer: (
             <div>
               <ul>
                 <li><b>(i) जलने पर कागज का गंध देता हो।</b></li>
                 <b style={{ color: "green" }}>उत्तर: </b>
                 <b style={{ color: "blue" }}>सूती वस्त्र</b>।

                 <li> <b>(ii) जलने पर जलते हुए बाल का गंध देता हो। </b></li>
                 <b style={{ color: "green" }}>उत्तर: </b>
                 <b style={{ color: "blue" }}>रेशम</b>।
                 <li><b>(iii) जलने पर उबलती हुई फली का गंध देता हो।</b></li>
                 <b style={{ color: "green" }}>उत्तर: </b>
                 <b style={{ color: "blue" }}>नायलॉन</b>।
               </ul>
             </div>

           ),
         },
         {
           question: "15.  ऊन की पहचान क्या है?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               यह धीरे-धीरे जलती है। जलते समय इसमें से पंखों के जलने के समान गंध निकलती है। जलने के उपरांत काले रंग के गुब्बारे जैसा अवशिष्ट पदार्थ रह जाता है।
             </div>
           ),
         },
         {
           question: " 16. टेरीलीन क्या है?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               <b style={{ color: "blue" }}>टेरीलीन</b> एक लोकप्रिय पॉलिएस्टर है।
             </div>
           ),
         },

         {
           question: "17.  सूती कपड़ों को नमीयुक्त जगहों पर रखने से क्या प्रभाव पड़ता है?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               नमीयुक्त जगहों पर रखने से <b style={{ color: "blue" }}>फफूँद</b> लग जाती है।
             </div>
           ),
         },
         {
           question: "18.  नायलॉन का निर्माण किन चीजों से होता है?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               <b style={{ color: "blue" }}>कोयला, जल और वायु</b> से यह बनता है। यह रेशा मजबूत, लचीला और हल्का होता है।
             </div>
           ),
         },
         {
           question: " 19. कृत्रिम रेशा किसे कहते हैं?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               आज के युग में नवीन रासायनिक रेशों का आविष्कार किया गया है, जिसे <b style={{ color: "blue" }}>कृत्रिम या मानव निर्मित रेशा</b> कहते हैं।
             </div>
           ),
         },
         {
           question: " 20.  रेशम की पहचान किस प्रकार होती है?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               रेशम हवा में जल्दी जल जाती है और जलते समय उसमें से पंखों या बालों के जलने के समान गंध निकलती है। जले हुए किनारों पर चिपचिपे दाने पड़ जाते हैं।
             </div>
           ),
         },
         {
           question: "21.  संश्लेषित रेशों के उदाहरण क्या हैं?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               संश्लेषित रेशों के उदाहरण <b style={{ color: "blue" }}>नायलॉन, पॉलिएस्टर, और एक्रिलिक</b> हैं।
             </div>
           ),
         },
         {
           question: " 22.  प्लास्टिक के उपयोग क्या हैं?",
           answer: (
             <div>
               <b style={{ color: "green" }}>उत्तर: </b>
               प्लास्टिक के उपयोग विभिन्न हैं, जैसे कि <b style={{ color: "blue" }}>पैकेजिंग, फर्नीचर, ऑटोमोबाइल, और चिकित्सा उपकरणों</b> में।
             </div>
           ),
         },
         {
           question: " 23. संश्लेषित रेशों और प्लास्टिक के नुकसान क्या हैं?",
           answer: (
             <div>
               <p> <b style={{ color: "green" }}>उत्तर: </b>
                 <b className="text-lg text-blue-600">  संश्लेषित रेशों और प्लास्टिक के नुकसान हैं: </b></p>
               <ul className="ml-16 list-none">
                 <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>पर्यावरण प्रदूषण</b></li>
                 <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>जानवरों के लिए हानिकारक</b></li>
                 <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>गैर-बायोडिग्रेडेबल होना</b></li>
               </ul>
             </div>
           ),
         },
         {
           question: "24.  रेशम किस प्रकार प्राप्त किया जाता है?",
           answer: (
             <div>
               <p>  <b style={{ color: "green" }}>उत्तर: </b>
                 <b className="text-lg text-blue-600">  रेशम प्राप्त करने की प्रक्रिया निम्नलिखित है: </b></p>
               <ul className="ml-16 list-none">
                 <li className="relative before:content-['(I)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>रेशमकीट का पालन:</b> रेशमकीट के अंडों को उबालकर निकाला जाता है और उन्हें एक विशेष कमरे में रखा जाता है जहां वे 3-4 दिनों में बच्चे में बदल जाते हैं।</li>
                 <li className="relative before:content-['(II)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>कोकून का निर्माण:</b> रेशमकीट के बच्चे पत्तियों को खाकर बड़े होते हैं और लगभग 30 दिनों में वे कोकून बनाने लगते हैं।</li>
                 <li className="relative before:content-['(III)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>कोकून का संग्रह:</b> जब रेशमकीट कोकून बना लेता है, तो उसे सावधानी से इकट्ठा किया जाता है।</li>
                 <li className="relative before:content-['(IV)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>कोकून का उबालना:</b> इकट्ठे किए गए कोकून को उबालकर रेशमकीट को मार दिया जाता है।</li>
                 <li className="relative before:content-['(V)'] before:absolute before:-left-9 before:text-red-500 font-bold"><b style={{ color: "red" }}>रेशम का निकालना:</b> उबले हुए कोकून से रेशम को निकाला जाता है। यह प्रक्रिया हाथ से या मशीन की मदद से की जा सकती है।</li>
                 <li className="relative before:content-['(VI)'] before:absolute before:-left-10 before:text-red-500 font-bold"><b style={{ color: "red" }}>रेशम का साफ़ करना:</b> निकाले गए रेशम को साफ़ किया जाता है और उसे सुखाया जाता है।</li>
                 <li className="relative before:content-['(VII)'] before:absolute before:-left-11 before:text-red-500 font-bold"><b style={{ color: "red" }}>रेशम का बुनना:</b> साफ़ और सूखे रेशम को बुनकर कपड़ा बनाया जाता है।</li>
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
        <Image src={"/image/8th-S-Chap-3.png"} className=' rounded mb-12' width={2500} height={300} alt='img'></Image>
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