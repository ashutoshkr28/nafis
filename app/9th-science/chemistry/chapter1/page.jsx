import Image from "next/image";

const questions = [
    {
      question: "1. पदार्थ किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> कोई वस्तु जो कुछ स्थान घेरे, जिसमें
          द्रव्यमान और आयतन हो, और जो अवरोध उत्पन्न करें उसे पदार्थ कहते हैं।<br />
          <b style={{color: "violet"}}>जैसे:-</b> कुर्सी, पंखा, मेज, गेट, ईंट, बोर्ड इत्यादि।
        </div>
      ),
    },
    {
      question: "2. पदार्थ कितने प्रकार के होते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color:"blue"}}> पदार्थ तीन प्रकार के होते हैं:</span>
          <ul>
            <li>
              <b >ठोस:</b> वैसे पदार्थ जिसकी आकृति और आयतन दोनों निश्चित होते हैं।
              <b style={{color: "violet"}}> <br />
                जैसे:</b> ईंट, पत्थर, लकड़ी, बोर्ड।
            </li>
            <li>
              <b >द्रव:</b> वैसे पदार्थ जिसकी आकृति अनिश्चित लेकिन आयतन निश्चित
              होता है। <b style={{color: "violet"}}> <br /> जैसे:</b> पानी, डीजल, दूध।
            </li>
            <li>
              <b >गैस:</b> वैसे पदार्थ जिसकी आकृति और आयतन दोनों अनिश्चित होते हैं।
              <b style={{color: "violet"}}> <br /> जैसे:</b> ऑक्सीजन, नाइट्रोजन, कार्बन डाइऑक्साइड।
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "3. ठोस पदार्थ के सामान्य गुण क्या हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color:"blue"}}> ठोस पदार्थ के सामान्य गुण निम्न हैं:</span>
          <ul>
            <li>आकृति और आयतन निश्चित होते हैं।</li>
            <li>द्रवनांक और क्वथनांक अधिक होते हैं।</li>
            <li>संपीड़यता कम होती है।</li>
            <li>ठोस पदार्थ के कण मजबूती से बंधे रहते हैं।</li>
          </ul>
        </div>
      ),
    },
    {
      question: "4. द्रव पदार्थ के सामान्य गुण क्या हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color:"blue"}}> द्रव पदार्थ के सामान्य गुण:</span>
          <ul>
            <li>आकृति अनिश्चित होती है, लेकिन आयतन निश्चित होता है।</li>
            <li>द्रवनांक और क्वथनांक ठोस से कम होते हैं।</li>
            <li>संपीड़यता संभव है।</li>
          </ul>
        </div>
      ),
    },
    {
      question: "5. गैस पदार्थ के सामान्य गुण क्या हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color: "blue"}}>गैस पदार्थ के सामान्य गुण:</span>
          <ul>
            <li>आकृति और आयतन दोनों अनिश्चित होते हैं।</li>
            <li>द्रवनांक और क्वथनांक कमरे के ताप से कम होते हैं।</li>
            <li>दाब लगाने पर आयतन में परिवर्तन संभव होता है।</li>
          </ul>
        </div>
      ),
    },
    {
      question: "6. द्रव का जमना किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> किसी द्रव का ठोस के रूप में
          परिवर्तन द्रव का जमना कहलाता है। <br />
          <b style={{color: "violet"}}>जैसे:-</b> जल को 0°C या 273K तक ठंडा करने पर ठोस में बदल जाता है।
        </div>
      ),
    },
    {
      question: "7. वाष्पन किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> किसी थाली में जल को लेकर उसे
          खुली वायु में रख दिया जाता है तो जल धीरे-धीरे गायब हो जाता है, इसे
          वाष्पन कहते हैं।
        </div>
      ),
    },
    {
      question: "8. वाष्पन को प्रभावित करने वाले कारण क्या हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color:"blue"}}>वाष्पन को प्रभावित करने वाले
          कारण निम्न हैं:</span>
          <ul>
            <li>द्रव का क्वथनांक (जितना कम, वाष्पन उतना तेज)।</li>
            <li>द्रव का ताप (जितना अधिक, वाष्पन उतना तेज)।</li>
            <li>पृष्ठीय क्षेत्रफल (जितना अधिक, वाष्पन उतना तेज)।</li>
            <li>वायु का वेग (जितना अधिक, वाष्पन उतना तेज)।</li>
          </ul>
        </div>
      ),
    },
    {
      question: "9. क्वथन किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> द्रव की उबलने की प्रक्रिया को
          क्वथन कहते हैं।
        </div>
      ),
    },
      {
        question: "10. क्वथनांक किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b> जिस ताप पर कोई द्रव उबलना
            प्रारंभ करता है उसे क्वथनांक कहते हैं।<br />
            <ul>
              <li>द्रव का क्वथनांक <span style={{color:"blue"}}>100⁰ C</span> होता है।</li>
              <li>अगर पानी में नमक मिला दिया जाए तो पानी का क्वथनांक <span style={{color:"blue"}}>100⁰ C</span> से अधिक होता है।</li>
              <li>अगर पानी में चीनी मिला दिया जाए तो पानी का क्वथनांक <span style={{color:"blue"}}>100⁰ C</span> से अधिक होता है।</li>
            </ul>
          </div>
        ),
      },
      {
        question: "11. वाष्पन और क्वथन में क्या अंतर है?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color:"blue"}}> वाष्पन और क्वथन में निम्न अंतर है:</span>
            <ul>
              <li>
                <b >वाष्पन:</b>
                <ul>
                  <li>वाष्पन की प्रक्रिया सभी तापों पर होती है।</li>
                  <li>वाष्पन की प्रक्रिया द्रव के ऊपरी सतह पर होती है।</li>
                  <li>वाष्पन की क्रिया में ठंडक उत्पन्न होती है।</li>
                </ul>
              </li>
              <li>
                <b >क्वथन:</b>
                <ul>
                  <li>क्वथन की प्रक्रिया एक निश्चित ताप पर होती है।</li>
                  <li>क्वथन की प्रक्रिया द्रव के सभी भागों पर होती है।</li>
                  <li>क्वथन की क्रिया में ठंडक उत्पन्न नहीं होती है।</li>
                </ul>
              </li>
            </ul>
          </div>
        ),
      },
      {
        question: "12. गैसों का विसरण किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b> एक गैस किसी दूसरी गैस में
            मिश्रित होती है उसे गैसों का विसरण कहते हैं।
          </div>
        ),
      },
      {
        question: "13. गैसों का संघनन किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b> जब कोई गैसीय पदार्थ का द्रव के
            रूप में परिवर्तन गैसों का संघनन कहलाता है।
          </div>
        ),
      },
      {
        question: "14. जलवाष्प का संघनन किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b> जलवाष्प का संघनन ठंडी सतह पर
            होता है।
          </div>
        ),
      },
      {
        question: "15. गैस का दाब किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b> बर्तन के दीवारों पर गैसों के कण
            द्वारा आरोपित बल गैस का दाब कहलाता है।
          </div>
        ),
      },
      {
        question: "16. पदार्थ की अवस्थाओं में परिवर्तन?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color:"blue"}}>पदार्थ की तीन अवस्थाएँ होती हैं:-</span>
          <span >  ठोस, द्रव, गैस।</span> <br />
            पदार्थ की अवस्थाओं में परिवर्तन निम्नलिखित हैं:
            <ul>
              <li>
                <b >ठोस से तरल में परिवर्तन:</b> जब ठोस पदार्थ को गर्म किया जाता है,
                तो वह तरल में बदल जाता है। इस प्रक्रिया को पिघलना या गलना कहते हैं।
                <br />
                <b style={{color: "violet"}}>उदाहरण:-</b> बर्फ को गर्म करने पर वह पानी में बदल जाती है।
              </li>
              <li>
                <b >तरल से गैस में परिवर्तन:</b> जब तरल पदार्थ को गर्म किया जाता है,
                तो वह गैस में बदल जाता है। इस प्रक्रिया को वाष्पीकरण या भाप बनना कहते
                हैं। <br />
                <b style={{color: "violet"}}>उदाहरण:-</b> पानी को गर्म करने पर वह भाप में बदल जाता है।
              </li>
              <li>
                <b >गैस से तरल में परिवर्तन:</b> जब गैस को ठंडा किया जाता है, तो वह
                तरल में बदल जाता है। इस प्रक्रिया को संघनन या तरल बनना कहते हैं। <br />
                <b style={{color: "violet"}}>उदाहरण:-</b> भाप को ठंडा करने पर वह पानी में बदल जाता है।
              </li>
              <li>
                <b >तरल से ठोस में परिवर्तन:</b> जब तरल पदार्थ को ठंडा किया जाता है,
                तो वह ठोस में बदल जाता है। इस प्रक्रिया को जमना या ठोस बनना कहते हैं।{" "}
                <br />
                <b style={{color: "violet"}}>उदाहरण:-</b> पानी को ठंडा करने पर वह बर्फ में बदल जाता है।
              </li>
              <li>
                <b >ठोस से गैस में परिवर्तन:</b> जब ठोस पदार्थ को गर्म किया जाता है,
                तो वह सीधे गैस में बदल जाता है। इस प्रक्रिया को उड़ना या वाष्प बनना
                कहते हैं। <br />
                <b style={{color: "violet"}}>उदाहरण:-</b> नमक को गर्म करने पर वह सीधे वाष्प में बदल जाता है।
              </li>
            </ul>
          </div>
        ),
      },
        {
          question: "17. ठोस द्रव और गैस में क्या अंतर है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color:"blue"}}> ठोस द्रव और गैस में निम्न अंतर है।</span>
              <ul>
                <li>
                  <b >ठोस:</b>
                  <ul>
                    <li>ठोस की आकृति और आयतन निश्चित होते हैं।</li>
                    <li>ठोस पदार्थ में अंतर-अणुक स्थान बहुत कम होते हैं।</li>
                    <li>ठोस पदार्थ में संपीड़नता बहुत कम होते हैं।</li>
                  </ul>
                </li>
                <li>
                  <b >द्रव:</b>
                  <ul >
                    <li>द्रव की आकृति निश्चित नहीं होती, लेकिन आयतन निश्चित होते हैं।</li>
                    <li>द्रव पदार्थ में अंतर-अणुक स्थान ठोस से अधिक होते हैं।</li>
                    <li>द्रव पदार्थ में संपीड़नता ठोस से अधिक होते हैं।</li>
                  </ul>
                </li>
                <li>
                  <b >गैस:</b>
                  <ul>
                    <li>गैस की आकृति और आयतन निश्चित नहीं होते हैं।</li>
                    <li>गैस पदार्थ में अंतर-अणुक स्थान सबसे अधिक होते हैं।</li>
                    <li>गैस पदार्थ में संपीड़नता सबसे अधिक होती है।</li>
                  </ul>
                </li>
              </ul>
            </div>
          ),
        },
        {
          question: "18. वाष्पन की क्रिया में ठंडक उत्पन्न होती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> मिट्टी की सुराही में छोटे-छोटे
              छिद्र होते हैं, जिनसे होकर जल के कण सुराही की बाहरी सतह पर चले आते हैं।
              वाष्पन से यह कण जलवाष्प के रूप में वायु में चले जाते हैं जिससे सुराही का जल
              ठंडा हो जाता है।
            </div>
          ),
        },
        {
          question: "19. गर्मी के दिनों में हम कपास के बने कपड़े (सूती–वस्त्र) क्यों पहनते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> गर्मी के दिनों में हमारे शरीर से
              पसीना काफी मात्रा में निकलता है। सूती वस्त्र जल का एक अच्छा शोषक है, यह
              हमारे शरीर से निकले पसीने को आसानी से शोषित कर इसे वायु के संपर्क में ला देता
              है, जिससे हमें ठंडक का एहसास होता है। इसलिए गर्मी के दिनों में हम सूती वस्त्र
              पहनना पसंद करते हैं।
            </div>
          ),
        },
        {
          question: "20. ठोस पदार्थ का द्रवण क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जिस ताप पर कोई ठोस पदार्थ द्रव की
              अवस्था में परिवर्तन होता है, उसे ठोस पदार्थ का द्रवण कहते हैं।
              <br />
              <b style={{color: "violet"}}>जैसे:-</b> बर्फ का द्रवणांक 0⁰ C या 273.15K होता है, और ठोस पदार्थ द्रव
              में परिवर्तन होते हैं।
            </div>
          ),
        },
        {
          question: "21. द्रवण की गुप्त ऊष्मा किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> किसी ठोस पदार्थ के 1Kg को उसके
              द्रवणांक पर द्रव की अवस्था में परिवर्तन लाने के लिए जो ऊष्मा प्रदान करते हैं,
              उसे द्रवण की गुप्त ऊष्मा कहते हैं।
            </div>
          ),
        },
        {
          question: "22. द्रव का क्वथनांक किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जिस ताप पर कोई पदार्थ द्रव की अवस्था
              से गैस या वाष्प की अवस्था में परिवर्तन होते हैं, इसे द्रव का क्वथनांक कहते हैं।
              <br />
              <b style={{color: "violet"}}>जैसे:-</b> जल का क्वथनांक 100⁰C या 373.15 K।
            </div>
          ),
        },
        {
          question: "23. वाष्पन की गुप्त ऊष्मा किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जिस ताप पर कोई पदार्थ उबलना प्रारंभ
              करता है, उस ताप को वाष्पन की गुप्त ऊष्मा कहते हैं।
            </div>
          ),
        },
        {
          question: "24. द्रव का जमना किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> जिस ताप पर कोई पदार्थ द्रव की अवस्था
              से ठोस की अवस्था में परिवर्तन होते हैं, यह प्रक्रिया द्रव का जमना कहलाती है।
            </div>
          ),
        },
        {
          question: "25. गैस और वाष्प में अंतर लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> गैस और वाष्प में कोई अंतर नहीं होता
              है, जल के गैसीय रूप को वाष्प कहते हैं।
            </div>
          ),
        },
        {
          question: "26. ऊष्मा का अवशोषण?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> काला कपड़ा ऊष्मा का अवशोषण अधिक
              मात्रा में करता है। लेकिन सफेद कपड़ा ऊष्मा का अवशोषण कम मात्रा में करता है।
              इसीलिए गर्मी के दिनों में सफेद कपड़ा पहनना चाहिए।
            </div>
          ),
        },
          {
            question: "27. पदार्थ की प्लाज्मा अवस्था?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर:—</b> वैज्ञानिक ने पदार्थ की एक नई अवस्था
                का आविष्कार किया है जिसे प्लाज्मा अवस्था कहते हैं। प्लाज्मा अवस्था अब तक ज्ञात
                पदार्थ की तीन अवस्था (ठोस, द्रव्य और गैस) में किसी के साथ समानता नहीं रहती है।
                पदार्थ की प्लाज्मा अवस्था का उपयोग बल्ब में किया जाता है, बल्ब में नियॉन गैस
                भरा रहता है, इसमें विद्युत धारा प्रवाहित करने पर रंग में परिवर्तन होता है।
              </div>
            ),
          },
          {
            question: "28. किसी पदार्थ का तापमान 30⁰C है तो K में कितना होगा?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर:—</b> केल्विन (K) में तापमान को सेल्सियस (⁰C)
                से बदलने के लिए, हमें निम्नलिखित सूत्र का उपयोग करना होता है:
                <br />
                <b>K = ⁰C + 273.15</b>
                <br />
                इस सूत्र का उपयोग करके, हमें:
                <br />
                <b>K = 30⁰ + 273.15</b>
                <br />
                <b>K = 303.15</b>
                <br />
                इसलिए, 30⁰C का तापमान K में 303.15 K होगा।
              </div>
            ),
          },
          {
            question: "29. किसी पदार्थ का तापमान 575K है तो C⁰ में कितना होगा?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर:—</b> केल्विन (K) में तापमान को सेल्सियस (°C) में
                बदलने के लिए, हमें निम्नलिखित सूत्र का उपयोग करना होता है:
                <br />
                <b>°C = K - 273.15</b>
                <br />
                इस सूत्र का उपयोग करके, हमें:
                <br />
                <b>°C = 575 - 273.15</b>
                <br />
                <b>°C = 301.85</b>
                <br />
                इसलिए, 575 K का तापमान °C में 301.85°C होगा।
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
                    <Image src={"/image/9th-chemistry-subjective-chapter-1.png"} className=' rounded mb-12 transition-all transform hover:animate-shake' width={2500} height={300} alt='img'></Image>
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
              
