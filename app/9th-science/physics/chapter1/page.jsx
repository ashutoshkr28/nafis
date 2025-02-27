import Image from "next/image";

const questions = [
    {
      question: "1. विज्ञान किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> किसी भी वस्तु के बारे में जानकारी ग्रहण करके उसे सही तरीकों से लागू करना एवं किसी भी वस्तु का सही अवलोकन एवं उसका विश्‍लेषण करना ही विज्ञान कहलाता है।
        </div>
      ),
    },
    {
      question: "2. विज्ञान की कितनी शाखाएँ हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color:"blue"}}>विज्ञान की दो मुख्य शाखाएँ हैं। </span>
          <ul className="ml-16">
            <li><b style={{color: "black"}}>भौतिक विज्ञान:</b> इसमें हम निर्जीव पदार्थों और उनसे संबंधित घटनाओं के बारे में अध्ययन करते हैं।</li>
            <li><b style={{color: "black"}}>जीव विज्ञान:</b> इसमें हम सजीव पदार्थों और उनसे संबंधित घटनाओं के बारे में अध्ययन करते हैं।</li>
          </ul>
        </div>
      ),
    },
    {
      question: "3. भौतिक विज्ञान की कितनी शाखाएँ हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b>  <span style={{color:"blue"}}>भौतिक विज्ञान की दो मुख्य शाखाएँ हैं। </span>
          <ul className="ml-16">
            <li><span style={{color: "black"}}>भौतिक Physics</span></li>
            <li><span style={{color: "black"}}>रसायन शास्त्र Chemistry</span></li>
          </ul>
        </div>
      ),
    },
    {
      question: "4. जीव विज्ञान की कितनी शाखाएँ हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color:"blue"}}> जीव विज्ञान की दो मुख्य शाखाएँ हैं। </span>
          <ul className="ml-16">
            <li><span style={{color: "black"}}>वनस्पति विज्ञान Botany</span></li>
            <li><span style={{color: "black"}}>प्राणी विज्ञान Zoology</span></li>
          </ul>
        </div>
      ),
    },
    {
      question: "5. मात्रक किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> किसी भी राशि को मापने के लिए कुछ मानक मापों की आवश्यकता होती है उसी मानक को उस राशि का मात्रक कहते हैं।
        </div>
      ),
    },
    {
      question: "6. किसी भी राशि के परिमाण के पूर्ण वितरण के लिए किन बातों का ज्ञान होना आवश्यक है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> किसी भी राशि के परिमाण के पूर्ण वितरण के लिए निम्नांकित दो बातों का ज्ञान होना आवश्यक है।
          <ul>
            <li><span style={{color: "blue"}}>मात्रक:</span> जिसमें राशि को व्यक्त किया जाता है।</li>
            <li><span style={{color: "blue"}}>संख्यांक:</span> जो बताता है कि दी गई राशि कितना है।</li>
          </ul>
          <b style={{color: "violet"}}>जैसे:— </b>5 मीटर लंबाई का परिमाण।
          <p>इसमें <span style={{color: "blue"}}>(5)</span> संख्यांक और <span style={{color: "blue"}}> (मीटर)</span> मात्रक है।</p>
        </div>
      ),
    },
    {
      question: "7. भौतिक राशि किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> वैसे प्रकार की सभी राशि जिसे हम माप सकते हैं, भौतिक राशि कहलाती है।
          <br />
         <b style={{color: "violet"}}> जैसे:— </b>लंबाई, द्रव्यमान, क्षेत्रफल, आयतन, ऊर्जा इत्यादि।
        </div>
      ),
    },
    {
      question: "8. भौतिक राशि कितने प्रकार के होते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color:"blue"}}>भौतिक राशि दो प्रकार की होती है। </span>
          <ul>
            <li><span style={{color: "black"}}>(i) आधारी राशि</span></li>
            <li><span style={{color: "black"}}> (ii) व्युत्पन्न राशि</span></li>
          </ul>
        </div>
      ),
    },
    {
      question: "9. आधारी राशि किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> वैसे प्रकार की सभी राशि जो किसी अन्य राशि पर निर्भर नहीं करता हो आधारी राशि कहलाती है।
          <br />
          <b style={{color:"blue"}}>नोट:</b>  <span style={{color:"blue"}}>आधारी राशि सात प्रकार की होती है:</span>
          <ul className="ml-12">
            <li>(i)लंबाई</li>
            <li>(ii)द्रव्यमान</li>
            <li>(iii)समय</li>
            <li>(iV)विद्युत धारा</li>
            <li>(Vi)ताप या तापमान</li>
            <li>(Vii)ज्योति तीव्रता</li>
            <li>(Vii)पदार्थ का परिमाण</li>
          </ul>
        </div>
      ),
    },
    {
      question: "10. व्युत्पन्न राशि किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> वैसे प्रकार की सभी राशि जो आधारी राशि पर निर्भर करता है व्युत्पन्न राशि कहलाती है।
          <br />
         <b style={{color: "violet"}}> जैसे:—</b> वेग, त्वरण, बल इत्यादि।
        </div>
      ),
    },
    {
      question: "11. मात्रकों की पद्धतियाँ किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> सभी प्रकार की राशियों के लिए मात्रकों के पूरे समूह को मात्रकों की पद्धति कहते हैं।
        </div>
      ),
    },
    {
      question: "12. मात्रकों की पद्धति के प्रकार को लिखें?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b><span style={{color:"blue"}}> मात्रकों की पद्धति निम्नलिखित प्रकार से है। </span>
          <ul>
            <li><span style={{color: "red"}}>फुट–पाउंड–सेकंड पद्धति (FPS)</span>:— इस पद्धति में लंबाई को फुट में, द्रव्यमान को पाउंड में और समय को सेकंड में मापा जाता है।</li>
            <li><span style={{color: "red"}}>सेंटीमीटर–ग्राम–सेकंड पद्धति (CGS)</span>:— इस पद्धति में लंबाई को सेंटीमीटर में, द्रव्यमान को ग्राम में और समय को सेकंड में मापा जाता है।</li>
            <li><span style={{color: "red"}}>मीटर–किलोग्राम–सेकंड पद्धति (MKS)</span>:— इस पद्धति में लंबाई को मीटर में, द्रव्यमान को किलोग्राम में और समय को सेकंड में मापा जाता है।</li>
            <li><span style={{color: "red"}}>अंतर्राष्ट्रीय पद्धति (S.I)</span>:— वह मात्रक जो सभी देशों के लिए एक ही है।</li>
          </ul>
        </div>
      ),
    },
    {
      question: "13. आधारी राशियाँ और उनके S.I मात्रक को लिखें?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> <span style={{color:"blue"}}>आधारी राशियाँ और उनके S.I मात्रक निम्न हैं:</span>
          <ul>
            <li><span style={{color: "red"}}>लंबाई:</span> मीटर (M)</li>
            <li><span style={{color: "red"}}>द्रव्यमान:</span> किलोग्राम (Kg)</li>
            <li><span style={{color: "red"}}>समय:</span> सेकंड (S)</li>
            <li><span style={{color: "red"}}>विद्युत धारा:</span> एम्पीयर (A)</li>
            <li><span style={{color: "red"}}>ताप या तापमान:</span> केल्विन (K)</li>
            <li><span style={{color: "red"}}>ज्योति तीव्रता:</span> कैंडेला (Cd)</li>
            <li><span style={{color: "red"}}>पदार्थ का परिमाण:</span> मोल (Mol)</li>
          </ul>
        </div>
      ),
    },
    {
      question: "14. किसी वैज्ञानिक के काम करने के मुख्य कितने अंग है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> किसी वैज्ञानिक के काम करने के तरीके अर्थात वैज्ञानिक विधि के पांच मुख्य अंग है।
          <ul className="list list-disc ml-16">
            <li>घटनाओं का सावधानीपूर्वक किया गया प्रेक्षण।</li>
            <li>संभावित कारणों का अनुमान लगाना।</li>
            <li>परीक्षणों और प्रयोग द्वारा उन कारणों की जाँच।</li>
            <li>जाँचों के आधार पर किसी निष्कर्ष पर पहुँचना।</li>
            <li>आवश्यकतानुसार विचारों और सोच में अपरिहार्य परिवर्तन करना।</li>
          </ul>
        </div>
      ),
    },
    {
      question: "15. संपूरक राशियाँ और उनके S.I मात्रक को लिखें?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b>
          <ul>
            <li><span style={{color: "blue"}}>समतल कोण:</span> दो रेखाओं से बने कोण को समतल कोण कहते हैं।<span style={{color: "blue"}}> इसका S.I मात्रक रेडियन (rad)</span> है।</li>
            <li><span style={{color: "blue"}}>घन कोण:</span> तीन रेखाओं से बने कोण को घन कोण कहते हैं। <span style={{color: "blue"}}>इसका S.I मात्रक स्टेरेडियन (sr)</span> है।</li>
          </ul>
          <h4>मानक SI उपसर्ग</h4>
          <table border="1">
            <thead>
              <tr>
                <th>अंश</th>
                <th>उपसर्ग</th>
                <th>संकेत</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10⁻³</td>
                <td>मिली (milli)</td>
                <td>m</td>
              </tr>
              <tr>
                <td>10⁻⁶</td>
                <td>माइक्रो (micro)</td>
                <td>µ</td>
              </tr>
              <tr>
                <td>10⁻⁹</td>
                <td>नैनो (nano)</td>
                <td>n</td>
              </tr>
              <tr>
                <td>10⁻¹²</td>
                <td>पिको (pico)</td>
                <td>p</td>
              </tr>
              <tr>
                <td>10⁻¹⁵</td>
                <td>फेम्टो (femto)</td>
                <td>f</td>
              </tr>
              <tr>
                <td>10⁻¹⁸</td>
                <td>एट्टो (atto)</td>
                <td>a</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      question: "16. विभिन्न पद्धतियों में मात्रक और उनके संबंध?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> किसी व्युत्पन्न राशि के व्युत्पन्न मात्रक को प्राप्त करने के लिए हमें निम्नलिखित दो बातों का ज्ञान होना आवश्यक है।
          <ul>
            <li>व्युत्पन्न राशि को परिभाषित करने वाला समीकरण।</li>
            <li>उस समीकरण में शामिल आधारी राशियों के आधारी मात्रक।</li>
          </ul>
          <h4 style={{color: "violet"}}>उदाहरण:</h4>
          <ul>
            <li><b>चाल:</b> दूरी / समय  
              <br />चाल का S.I मात्रक <b>मीटर प्रति सेकंड (m/s)</b> होता है।
            </li>
            <li><b>क्षेत्रफल:</b> लंबाई × चौड़ाई  
              <br />क्षेत्रफल का S.I मात्रक <b>(मीटर)²</b> = m² होता है।
            </li>
            <li><b>आयतन:</b> लंबाई × चौड़ाई × ऊँचाई  
              <br />आयतन का S.I मात्रक <b>(मीटर)³</b> = m³ होता है।
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "17. 1 m² = ..........cm²",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b>
          <p>1 m = 100 cm</p>
          <p>अब, 1 m² = (100 cm)² = (100 cm) × (100 cm) = 10000 cm²</p>
          <p>1 m² = 10⁴ cm²</p>
          <p><b>एक वर्ग मीटर = 10⁴ वर्ग सेंटीमीटर</b></p>
          <p><b>एक वर्ग सेंटीमीटर = 10⁻⁴ वर्ग मीटर</b></p>
        </div>
      ),
    },
    {
      question: "18. 1 m² = .........mm²",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b>
          <p>1 cm = 10 mm</p>
          <p>1 cm² = (10 mm)² = 100 mm² = 10² mm²</p>
          <p>अब, 1 m² = 10⁴ cm² = 10⁴ × 10² mm² = 10⁶ mm²</p>
          <p><b>1 m² = 10⁶ mm²</b></p>
          <p><b>घनत्व = द्रव्यमान / आयतन</b><br />घनत्व का S.I मात्रक = किलोग्राम प्रति घन मीटर (kg/m³)</p>
          <p><b>बल का S.I मात्रक:</b> न्यूटन (N)</p>
          <p><b>ऊर्जा का S.I मात्रक:</b> जूल (J)</p>
        </div>
      ),
    },
    {
      question: "19. दाब किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b> प्रति एकांक क्षेत्रफल पर लगने वाले बल को दाब कहते हैं।
          <p><b>दाब = बल / क्षेत्रफल</b></p>
          <p><b>दाब का S.I मात्रक:</b> न्यूटन प्रति वर्ग मीटर (N/m²)</p>
          <p><b>न्यूटन प्रति वर्ग मीटर (N/m²)</b> को <b>पास्कल</b> कहते हैं।</p>
          <p><b>1 Pa (पास्कल) = 1 N/m²</b></p>
          <p>गैसीय दाब को मापने के लिए एक मात्रक <b>एटमॉस्फेयर (atm)</b> है।</p>
          <p>वायुमंडल में वायु का दाब <b>वायुमंडलीय दाब</b> कहलाता है।</p>
          <p>समुद्र की सतह पर वायुमंडलीय दाब का एटमॉस्फेयर होता है जिसे <b>सामान्य दाब</b> कहते हैं।</p>
          <p><b>1 atm = 1.013 × 10⁵ Pa</b></p>
          <p><b>ताप का S.I मात्रक:</b> <b>केल्विन (K)</b> होता है।</p>
          <p><b>ताप का एक मात्रक:</b> डिग्री सेल्सियस (°C) भी होता है, जिसे <b>0°C</b> से सूचित किया जाता है।</p>
          <p><b>0°C = 273.15K या 273K लगभग</b></p>
          <p><b>बर्फ का गलनांक:</b> 0°C = 273.15K = 273K (लगभग)</p>
          <p><b>जल का क्वथनांक:</b> 100°C = 373.15K = 373K (लगभग)</p>
          <p>ऊष्मा भी एक प्रकार की ऊर्जा है अतः ऊष्मा का <b>S.I मात्रक</b> भी <b>जूल (J)</b> होता है।</p>
          <p>ऊष्मा या ऊर्जा का एक मात्रक <b>कैलोरी (cal)</b> भी होता है और एक और मात्रक <b>किलोकैलोरी (kcal)</b> है।</p>
          <p><b>एक किलो कैलोरी (kcal) = 1000 cal</b></p>
          <p><b>एक कैलोरी (cal) = 4.186 J = 4.2 J (लगभग)</b></p>
          <p><b>एक किलो कैलोरी (kcal) = 4186 J = 4200 J (लगभग)</b></p>
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
                    <Image src={"/image/9th-subjective-physice-chapter-1.png"} className=' rounded mb-12 transition-all transform hover:animate-shake' width={2500} height={300} alt='img'></Image>
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
              
