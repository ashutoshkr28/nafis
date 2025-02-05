

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const questions = [



  
        //  chapter 5 कोयला और पेट्रोलियम
    
        // {
        //   chapterName: "कोयला और पेट्रोलियम",
        //   imageUrl: "/image/8th-S-Chap-5.png",  🖼️ Image for this chapter
        //   description: (
        //     <h1><b style={{ color: "blue" }}> इस अध्याय में ह उर्वरक।</b></h1>
    
        //   ),
        //   questions: [
            {
              question: "1. जीवाश्म ईंधन किसे कहते हैं?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर: </b> वे ईंधन, जिनका निर्माण सजीव प्राणियों के मृत अवशेषों से होता है, उन्हें जीवाश्म ईंधन कहते हैं।
                  <br />
                  <p className="ml-10"> <span style={{color:"violet"}}> जैसे:— </span>कोयला, पेट्रोलियम और प्राकृतिक गैस । </p>
                </div>
              ),
            },
            {
              question: " 2. जीवाश्म ईंधन कितने प्रकार के होते हैं?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर: </b> <b style={{ color: "blue" }}> जीवाश्म ईंधन तीन प्रकार के होते हैं:</b>
                  <ul className="ml-10">
                    <li>(i) कोयला</li>
                    <li>(ii) पेट्रोलियम</li>
                    <li>(iii) प्राकृतिक गैस</li>
                  </ul>
                </div>
              ),
            },
            {
              question: "3. कोयला किसे कहते हैं?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर: </b> कोयला एक जीवाश्म ईंधन है, जो पौधों के अवशेषों के दबाव और तापमान के कारण लाखों वर्षों में बनता है।
                </div>
              ),
            },
            {
              question: " 4. पेट्रोलियम क्या है?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर: </b> पेट्रोलियम एक जीवाश्म ईंधन है जो प्राचीन पौधों और जानवरों के अवशेषों से बनता है। यह एक तरल ईंधन है।
                  <br />
                  <b style={{ color: "violet" }} className="ml-12">उपयोग:</b> पेट्रोलियम का उपयोग विभिन्न उद्योगों में किया जाता है।
                  <br />
                  <p className="ml-12"> <b style={{ color: "violet" }}> जैसे:— </b> वाहन ईंधन, ऊर्जा उत्पादन और पेट्रोकेमिकल्स के निर्माण में।  </p>
                </div>
              ),
            },
            {
              question: " 5. प्राकृतिक गैस क्या है?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर: </b> <span style={{ color: "blue" }}>प्राकृतिक गैस</span> एक जीवाश्म ईंधन है जो प्राचीन पौधों और जानवरों के अवशेषों से बनती है। यह मुख्य रूप से <span style={{ color: "blue" }}>मिथेन (मीथेन)</span> CH₄ से बनी होती है।
                  <br />
                  <p className="ml-10">
                    <b style={{ color: "violet" }}>उदाहरण:</b> घरों में खाना पकाने के लिए उपयोग की जाने वाली गैस।
    
                  </p>
                </div>
              ),
            },
            {
              question: " 6. कोयला का रासायनिक गुणधर्म लिखिए?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर: </b> <span style={{ color: "blue" }}>कोयला</span> मुख्य रूप से <span style={{ color: "blue" }}>कार्बन (C)</span> और <span style={{ color: "blue" }}>हाइड्रोजन (H)</span> का मिश्रण है।
                  <br />
                  इसके अलावा, इसमें <span style={{ color: "blue" }}>ऑक्सीजन (O)</span>, <span style={{ color: "blue" }}>नाइट्रोजन (N)</span> और <span style={{ color: "blue" }}>सल्फर (S)</span> जैसे अन्य तत्व भी उपस्थित होते हैं।
                </div>
              ),
            },
            {
              question: " 7. कार्बनीकरण क्या है?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर: </b> मृत वनस्पति के धीरे-धीरे प्रक्रम द्वारा कोयला में परिवर्तन को कार्बनीकरण कहते हैं।
                </div>
              ),
            },
            {
              question: " 8. उद्योग में कोयला के प्रक्रमण द्वारा प्राप्त उत्पादों के नाम लिखिए?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर: </b> कोक, कोलतार, और कोयला गैस।
                </div>
              ),
            },
            {
              question: " 9. कोलतार क्या है? इसका उपयोग लिखे?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:-</b> यह एक अप्रिया गंध वाला काला गाढ़ा द्रव्य है। यह लगभग दो सौ (200) पदार्थों का मिश्रण होता है।
                  <br />
                  <p className="ml-14">
                    <b style={{ color: "violet" }}>उपयोग:—</b> इसका उपयोग औद्योगिक निर्माण में संश्लेषित रंग, औषधि, विस्फोटक, सुगंध, प्लास्टिक आदि कार्यों में होता है।
                  </p>
    
                </div>
              ),
            },
            {
              question: " 10. काला सोना किसे कहते हैं?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> पेट्रोलियम को।
                </div>
              ),
            },
            {
              question: " 11. पेट्रोलियम को काला सोना क्यों कहते हैं?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> पेट्रोलियम का उपयोग विभिन्न उत्पादों में किया जाता है, इनका अपना बहुत व्यवसायिक महत्व है। इसलिए इसे काला सोना कहते हैं।
                </div>
              ),
            },
            {
              question: " 12. कोयला गैस कैसे प्राप्त होता है? इसका एक प्रमुख उपयोग लिखें?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> कोयला के प्रक्रमण द्वारा कोक बनाते समय कोयला गैस प्राप्त होता है।
                  <br />
                  <p className="ml-14">
                    <b style={{ color: "violet" }}>उपयोग:—</b> इसका उपयोग उद्योगों में ईंधन के रूप में किया जाता है।
                  </p>
                </div>
              ),
            },
            {
              question: " 13. भारत में पेट्रोलियम पदार्थों के संरक्षण कौन करता है?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> पेट्रोलियम संरक्षण अनुसंधान समिति (PCRA)।
                </div>
              ),
            },
            {
              question: " 14. PCRA लोगों को क्या सलाह देती है?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:-</b> पेट्रोलियम संरक्षण अनुसंधान समिति (PCRA) लोगों को ईंधन की बचत के लिए निम्नलिखित सलाह देती है:
                  <ul className="ml-16">
                    <li>जहाँ तक संभव हो गाड़ी समान और मध्यम गति से चलाइए।</li>
                    <li>यातायात लाइटों पर अथवा जहाँ आपको प्रतीक्षा करनी है, गाड़ी का ईंधन बंद कर दीजिए।</li>
                    <li>टायरों का दाब सही रखिए।</li>
                    <li>गाड़ी का नियमित रखरखाव सुनिश्चित कीजिए।</li>
                  </ul>
                </div>
              ),
            },
            {
              question: " 15. LPG और CNG का ईंधन के रूप में उपयोग करने से क्या लाभ है?",
              answer: (
                <div>
                  <p>
                    <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }}> LPG और CNG का ईंधन के रूप में उपयोग करने से निम्नलिखित फायदे होते हैं:  </span></p>
                  <ul className="ml-16">
                    <li>प्रदूषण कम फैलता है।</li>
                    <li>काम जल्दी से होता है।</li>
                    <li>एक जगह से दूसरे जगह ले जाने में आसानी होती है।</li>
                    <li>यह दोनों स्वच्छ ईंधन हैं।</li>
                  </ul>
                </div>
              ),
            },
            {
              question: " 16. ईंधन किसे कहते हैं?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> हर एक जलने वाला पदार्थ जो जलकर ऊष्मा ऊर्जा देता है, उसे ईंधन कहते हैं।
                </div>
              ),
            },
            {
              question: " 17. ईंधन किन-किन अवस्थाओं में पाया जाता है?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> ठोस, द्रव या गैस।
                </div>
              ),
            },
            {
              question: " 18. कोयला गैस का सर्वप्रथम प्रयोग कब एवं कहाँ किया गया?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> कोयला गैस का सर्वप्रथम प्रयोग 1810 में लंदन में किया गया था।
                </div>
              ),
            },
            {
              question: " 19. L.P.G का पूरा नाम लिखें?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> एलपीजी (LPG) का पूरा नाम है: लिक्विड पेट्रोलियम गैस (Liquid Petroleum Gas)।
                </div>
              ),
            },
            {
              question: " 20. ईंधन कितने प्रकार के होते हैं?",
              answer: (
                <div>
                  <p> <b style={{ color: "green" }}>उत्तर:—</b> <span style={{ color: "blue" }} > ईंधन मुख्य रूप से तीन प्रकार के होते हैं: </span></p>
                  <ul className="ml-14">
                    <li>ठोस ईंधन (जैसे: कोयला, लकड़ी)</li>
                    <li>तरल ईंधन (जैसे: पेट्रोल, डीजल)</li>
                    <li>गैसीय ईंधन (जैसे: एलपीजी, सीएनजी)</li>
                  </ul>
                </div>
              ),
            },
            {
              question: " 21. C.N.G का पूरा नाम लिखें?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> सीएनजी (CNG) का पूरा नाम है:
                  <br />
                  संपीडित प्राकृतिक गैस (Compressed Natural Gas)।
                </div>
              ),
            },
            {
              question: " 22. प्रकृति में प्रदूषण का प्रमुख कारण क्या है?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> प्रकृति में प्रदूषण का प्रमुख कारण ईंधनों का जलना है।
                </div>
              ),
            },
            {
              question: " 23. प्राथमिक ईंधन किसे कहते हैं?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> जो ईंधन प्रकृति से हमें उसी रूप में प्राप्त होता है जिस रूप में उसका उपयोग होना है, प्राथमिक ईंधन कहलाता है।
                  <br />
                  <p className="ml-14">
                    <b style={{ color: "violet" }}>जैसे:—</b> लकड़ी, कोयला, पेट्रोलियम इत्यादि।
                  </p>
    
                </div>
              ),
            },
            {
              question: " 24. द्वितीय ईंधन किसे कहते हैं?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> वैसे ईंधन जो प्राथमिक ईंधन से प्राप्त किये जाते हैं, उसे द्वितीय ईंधन कहते हैं।
                  <br />
                  <p>
                    <b style={{ color: "violet" }}>जैसे:—</b> कोक, कोयला गैस, कोलतार इत्यादि।
                  </p>
                </div>
              ),
            },
            {
              question: " 25. पेट्रोलियम का कौन–सा उत्पाद सड़क निर्माण हेतु उपयोग में लाया जाता है?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> बिटुमेन।
                </div>
              ),
            },
            {
              question: " 26. कोक किस प्रकार प्राप्त किया जा सकता है?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> कोयला को वायु की अनुपस्थिति में गर्म करने पर कोक प्राप्त होता है।
                </div>
              ),
            },
            {
              question: " 27. कृत्रिम ढंग से कोयला कैसे बनाया जाता है?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> कृत्रिम ढंग से कोयला बनाने के लिए बंद बर्तन में लकड़ी को गर्म करने से लकड़ी धीरे-धीरे कोयले में बदल जाती है।
                </div>
              ),
            },
            {
              question: " 28. भारत में तेल क्षेत्र कहाँ-कहाँ पाये जाते हैं?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> हमारे देश में तेल पैदा करने वाले क्षेत्र असम, गुजरात एवं मुंबई के कुछ क्षेत्र क्रमशः माहोर कटिया, अंकलेश्‍वर हैं।
                </div>
              ),
            },
            {
              question: " 29. परिष्करण किसे कहते हैं?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> जब तेल के कुएँ से तेल निकलता है तब वह कच्चा तेल होता है। इसमें विभिन्न संघटकों का मिश्रण रहता है। इन विभिन्न संघटकों को पृथक करने की प्रक्रिया परिष्करण कहलाती है।
                </div>
              ),
            },
            {
              question: " 30. कोयला को जीवाश्म ईंधन क्यों कहा जाता है?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>उत्तर:—</b> कोयला लाखों वर्ष पूर्व प्राचीन वनस्पतियों और पौधों के अवशेषों से बनता है। समय के साथ-साथ दबाव और तापमान के कारण ये अवशेष कोयले में परिवर्तित हो जाते हैं। अतः कोयला को जीवाश्म ईंधन कहा जाता है।
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
        <Image src={"/image/8th-S-Chap-5.png"} className=' rounded mb-12 transition-all transform hover:animate-shake' width={2500} height={300} alt='img'></Image>
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