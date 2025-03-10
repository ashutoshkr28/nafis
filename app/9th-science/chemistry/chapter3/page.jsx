import Image from "next/image";

const questions = [
    {
      question: "1. डाल्टन के परमाणु सिद्धांत की मान्यताएँ?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b>
          <ul>
            <li>(i) सभी पदार्थ अत्यंत सूक्ष्म कणों का बना होता है, जिसे परमाणु कहते हैं, डाल्टन के अनुसार परमाणु को खंडित नहीं किया जा सकता है।</li>
            <li>(ii) रासायनिक अभिक्रिया से परमाणु का निर्माण नहीं किया जा सकता है।</li>
            <li>(iii) किसी तत्व के सभी परमाणु समान होते हैं। एक तत्व का परमाणु, द्रव्यमान और रासायनिक गुण एक समान होते हैं।</li>
            <li>(iv) विभिन्न तत्व के परमाणु संख्या, द्रव्यमान और गुण अलग-अलग होते हैं।</li>
            <li>(v) रासायनिक संयोग में दो या दो से अधिक तत्व संयोग करके यौगिक बनता है।</li>
            <li>(vi) रासायनिक संयोग में विभिन्न तत्व के परमाणु का अनुपात अलग-अलग होता है।</li>
            <li>(vii) एक ही तत्व के परमाणु एक से अधिक तत्व के साथ संयोग करके यौगिक बनता है।</li>
          </ul>
        </div>
      ),
    },
    {
      question: "2. डाल्टन के परमाणु सिद्धांत के गुण को लिखें?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b>
          <ul>
            <li>(i) डाल्टन के परमाणु सिद्धांत के अनुसार रासायनिक संयोग के नियम की व्याख्या की जाती है।</li>
            <li>(ii) सर्वप्रथम डाल्टन ने तत्व के अंतिम कण परमाणु और यौगिक के अंतिम कण यौगिक परमाणु कहते हैं।</li>
          </ul>
        </div>
      ),
    },
    {
      question: "3. डाल्टन के परमाणु सिद्धांत के दोष को लिखें?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b>
          <ul>
            <li>(i) डाल्टन के अनुसार परमाणु को खंडित नहीं किया जा सकता है, जो मान्यता गलत हो गई थी। परमाणु को खंडित किया जा सकता है (इलेक्ट्रॉन, प्रोटॉन और न्यूट्रॉन)।</li>
            <li>(ii) डाल्टन के अनुसार एक ही तत्व के परमाणु द्रव्यमान समान होते हैं, लेकिन एक ही तत्व का परमाणु द्रव्यमान अलग-अलग होते हैं, जिसे समस्थानिक तत्व कहते हैं।</li>
            <li>(iii) डाल्टन के अनुसार विभिन्न तत्व के परमाणु द्रव्यमान अलग-अलग होते हैं, लेकिन विभिन्न तत्व के परमाणु द्रव्यमान समान होते हैं, जिसे समभारिक तत्व कहते हैं।</li>
            <li>(iv) चारकोल, ग्रेफाइट और हीरा तीनों कार्बन से बने होते हैं, लेकिन तीनों के गुण अलग-अलग होते हैं।</li>
          </ul>
        </div>
      ),
    },
    {
      question: "4. परमाणु किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b>
          किसी तत्व का अंतिम सूक्ष्मतम कण जो रासायनिक अभिक्रिया में भाग लेता है, उसे परमाणु कहते हैं।
        </div>
      ),
    },
    {
      question: "5. परमाणु का आकार कैसा होता है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b>
          परमाणु एक गोलीय कण होता है, जिसे साधारण माइक्रोस्कोप से नहीं देखा जा सकता है। परमाणु का व्यास 10⁻¹⁵ m होता है।
        </div>
      ),
    },
    {
      question: "6. संकेत किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b>
          <p>(i) तत्व के अंग्रेजी नाम का प्रथम अक्षर संकेत कहलाता है।</p>
          <table>
            <thead>
              <tr>
                <th>तत्व</th>
                <th>संकेत</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Hydrogen</td><td>H</td></tr>
              <tr><td>Oxygen</td><td>O</td></tr>
              <tr><td>Nitrogen</td><td>N</td></tr>
              <tr><td>Carbon</td><td>C</td></tr>
              <tr><td>Sulphur</td><td>S</td></tr>
              <tr><td>Phosphorus</td><td>P</td></tr>
              <tr><td>Fluorine</td><td>F</td></tr>
              <tr><td>Boron</td><td>B</td></tr>
            </tbody>
          </table>
          <p>(ii) जब दो या दो से अधिक तत्व के अंग्रेजी नाम का प्रथम अक्षर समान हो, तो तत्व के अंग्रेजी नाम का प्रथम और दूसरा अक्षर लिया जाता है।</p>
          <table>
            <thead>
              <tr>
                <th>तत्व</th>
                <th>संकेत</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Calcium</td><td>Ca</td></tr>
              <tr><td>Barium</td><td>Ba</td></tr>
              <tr><td>Bismuth</td><td>Bi</td></tr>
              <tr><td>Silicon</td><td>Si</td></tr>
              <tr><td>Bromine</td><td>Br</td></tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      question: "7. तत्वों के नाम उनके लैटिन नाम एवं संकेत को लिखें?",
      answer: (
        <div className="">
          <b style={{ color: "green" }}>उत्तर:—</b>
          {/* <p><b style={{color: "blue"}}>तत्वों के नाम:</b></p> */}





          <table className="table-auto border-collapse text-gray-800 sm:text-sm w-full shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center"><b > तत्वों के नाम </b></th>
                  <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center "> <b>लैटिन नाम </b></th>
                  <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center "> <b>संकेत </b></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4 ">(I) Sodium</td>
                  <td className="border border-gray-400 px-4 py-4">(I) नात्रियम (Natrium)</td>
                  <td className="border border-gray-400 px-4 py-4">(I) Na</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(II) Potassium</td>
                  <td className="border border-gray-400 px-4  py-4">(II) कालियम (Kalium)</td>
                  <td className="border border-gray-400 px-4  py-4">(II) K</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(III) Copper</td>
                  <td className="border border-gray-400 px-4  py-4">(III) क्यूप्रम (Cuprum) </td>
                  <td className="border border-gray-400 px-4  py-4">(III) Cu </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(IV) Iron</td>
                  <td className="border border-gray-400 px-4  py-4">(IV) फेरम (Ferrum) </td>
                  <td className="border border-gray-400 px-4  py-4">(IV) Fe </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(V) Gold</td>
                  <td className="border border-gray-400 px-4  py-4">(V) औरम (Aurum) </td>
                  <td className="border border-gray-400 px-4  py-4">(V) Au </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(VI) Silver</td>
                  <td className="border border-gray-400 px-4  py-4">(VI) आर्जेन्टम (Argentum) </td>
                  <td className="border border-gray-400 px-4  py-4">(VI) Ag </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(VII) Mercury</td>
                  <td className="border border-gray-400 px-4  py-4">(VII) हाइड्रार जाइरम (Hydrargyrum)  </td>
                  <td className="border border-gray-400 px-4  py-4">(VII) Hg </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(VIII) Lead</td>
                  <td className="border border-gray-400 px-4  py-4">(VIII) प्लंबम  (Plumbum)  </td>
                  <td className="border border-gray-400 px-4  py-4">(VIII) Pb </td>
                </tr>
              </tbody>
            </table>






{/* 
          <ul>
            <li>Sodium</li>
            <li>Potassium</li>
            <li>Copper</li>
            <li>Iron</li>
            <li>Gold</li>
            <li>Silver</li>
            <li>Mercury</li>
            <li>Lead</li>
          </ul>
          <p><b style={{color: "blue"}}>लैटिन नाम:</b></p>
          <ul>
            <li>नात्रियम (Natrium)</li>
            <li>कालियम (Kalium)</li>
            <li>क्युप्रम (Cuprum)</li>
            <li>फेरम (Ferrum)</li>
            <li>औरम (Aurum)</li>
            <li>आर्जेन्टम (Argentum)</li>
            <li>हाइड्रार जाइरम (Hydrargyrum)</li>
            <li>प्लंबम (Plumbum)</li>
          </ul>
          <p><b style={{color: "blue"}}>संकेत:</b></p>
          <ul>
            <li>Na</li>
            <li>K</li>
            <li>Cu</li>
            <li>Fe</li>
            <li>Au</li>
            <li>Ag</li>
            <li>Hg</li>
            <li>Pb</li>
          </ul> */}
        </div>
      ),
    },
    {
      question: "8. संकेत का क्या महत्व है?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b>
          <ul>
            <li>(i) संकेत किसी विशेष तत्व को निरूपण करता है।</li>
            <li>(ii) संकेत तत्व के परमाणु संख्या को व्यक्त करता है।</li>
            <li>(iii) संकेत किसी तत्व का परमाणु द्रव्यमान को व्यक्त करता है।</li>
          </ul>
          <p><b style={{color:"violet"}}> जैसे:—</b> संकेत = C (Carbon) परमाणु संख्या = 6 परमाणु द्रव्यमान = 12g</p>
        </div>
      ),
    },
    {
      question: "9. अणु किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b>
          दो या दो से अधिक पदार्थ तत्व या यौगिक जो रासायनिक संयोग में भाग लेते हैं, उसे अणु कहते हैं।
        </div>
      ),
    },
    {
      question: "10. अणु की विशेषताएँ को लिखें?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b>
          <ul>
            <li>(i) किसी पदार्थ के सभी अणु एक समान होते हैं।</li>
            <li>(ii) विभिन्न पदार्थ के अणु भिन्न-भिन्न होते हैं।</li>
            <li>(iii) किसी पदार्थ में उपस्थित सभी अणु एक समान होते हैं।</li>
          </ul>
        </div>
      ),
    },
    {
      question: "11. यौगिक के अणु किसे कहते हैं?",
      answer: (
        <div>
          <b style={{ color: "green" }}>उत्तर:—</b>
          <ul>
            <li>किसी यौगिक में उपस्थित दो या दो से अधिक परमाणु को यौगिक के अणु कहते हैं।</li>
            <li><b style={{color:"violet"}}> जैसे:—</b> 
              <ul>
                <li>ग्लूकोस (C₆H₁₂O₆)</li>
                <li>चीनी (सुक्रोज) (C₁₂H₂₂O₁₁)</li>
                <li>जल (H₂O)</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
      {
        question: "12. परमाणुकता किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b>
            <p>किसी पदार्थ तत्व या यौगिक के एक अणु में उपस्थित परमाणुओं की संख्या को परमाणुकता कहते हैं।</p>
            <table>
              <thead>
                <tr>
                  <th>पदार्थ</th>
                  <th>परमाणुकता</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>H₂O</td><td>2+1=3</td></tr>
                <tr><td>CH₄</td><td>1+4=5</td></tr>
                <tr><td>C₆H₁₂O₆</td><td>6+12+6=24</td></tr>
                <tr><td>NH₃</td><td>1+3=4</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        question: "13. एक परमाणुक अणु किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b>
            <p>एक परमाणु से बने अणु को एक परमाणुक अणु कहते हैं।</p>
            <p><b style={{color:"violet"}}> जैसे:—</b> He, Ar</p>
          </div>
        ),
      },
      {
        question: "14. द्विपरमाणुक अणु किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b>
            <p>दो परमाणु से बने अणु को द्विपरमाणुक अणु कहते हैं।</p>
            <p><b style={{color:"violet"}}> जैसे:—</b> H₂, O₂, N₂</p>
          </div>
        ),
      },
      {
        question: "15. त्रिपरमाणुक अणु किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b>
            <p>तीन परमाणु से बने अणु को त्रिपरमाणुक अणु कहते हैं।</p>
            <p><b style={{color:"violet"}}> जैसे:—</b> H₂O, CO₂, O₃</p>
          </div>
        ),
      },
      {
        question: "16. चतुष्परमाणुक अणु किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b>
            <p>चार परमाणु से बने अणु को चतुष्परमाणुक अणु कहते हैं।</p>
            <p><b style={{color:"violet"}}> जैसे:—</b> NH₃, S</p>
          </div>
        ),
      },
      {
        question: "17. बहुपरमाणुक अणु किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b>
            <p>चार से अधिक परमाणु से बने अणु बहुपरमाणुक अणु कहते हैं।</p>
            <p><b style={{color:"violet"}}> जैसे:—</b> CH₄, H₂SO₄</p>
          </div>
        ),
      },
      {
        question: "18. परमाणु और अणु में क्या अंतर है?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b>
            <div>


            <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center"><b > ★ परमाणु </b></th>
                  <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center "> <b>★ अणु </b></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4 ">(I) तत्व का सूक्ष्मतम कण जो मुक्त अवस्था में नहीं पाया जाता है।</td>
                  <td className="border border-gray-400 px-4 py-4">(I) तत्व या यौगिक का सूक्ष्मतम कण जो मुक्त अवस्था में पाया जाता है।</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(II) परमाणु का आकार गोलीय होता है।</td>
                  <td className="border border-gray-400 px-4  py-4">(II) अणु का आकृति रैखिक या त्रिकोणीय होता है।</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(III)  परमाणु में कोई बंधन नहीं होता है।</td>
                  <td className="border border-gray-400 px-4  py-4">(III) अणु के परमाणु रासायनिक बंधन से जुड़े होते हैं। </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(IV)  परमाणु को विभाजित नहीं किया जा सकता है।</td>
                  <td className="border border-gray-400 px-4  py-4">(IV) अणु को विभाजित किया जाता है। </td>
                </tr>
              </tbody>
            </table>


{/* 
              <b style={{color: "blue"}}>★ परमाणु:—</b>
              <ul>
                <li>(i) तत्व का सूक्ष्मतम कण जो मुक्त अवस्था में नहीं पाया जाता है।</li>
                <li>(ii) परमाणु का आकार गोलीय होता है।</li>
                <li>(iii) परमाणु में कोई बंधन नहीं होता है।</li>
                <li>(iv) परमाणु को विभाजित नहीं किया जा सकता है।</li>
              </ul>
            </div>
            <div>
              <b style={{color: "blue"}}>★ अणु:—</b>
              <ul>
                <li>(i) तत्व या यौगिक का सूक्ष्मतम कण जो मुक्त अवस्था में पाया जाता है।</li>
                <li>(ii) अणु का आकृति रैखिक या त्रिकोणीय होता है।</li>
                <li>(iii) अणु के परमाणु रासायनिक बंधन से जुड़े होते हैं।</li>
                <li>(iv) अणु को विभाजित किया जाता है।</li>
              </ul>
            </div> */}

            </div>
          </div>
        ),
      },
      {
        question: "19. आयन क्या है?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b>
            <p>जिस यौगिक पर आवेशित कण होते हैं उसमें धनायन और ऋणायन उपस्थित होते हैं उसे आयन कहते हैं।</p>
          </div>
        ),
      },
      {
        question: "20. धनायन आयन किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b>
            <p>जब कोई परमाणु इलेक्ट्रॉन का त्याग करता है तो उस परमाणु पर धनायन आयन आते हैं।</p>
          </div>
        ),
      },
      {
        question: "21. ऋणायन आयन किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b>
            <p>जब कोई परमाणु इलेक्ट्रॉन का ग्रहण करता है तो उस परमाणु पर ऋणायन आयन आता है।</p>
          </div>
        ),
      },
      {
        question: "22. सरल सूत्र किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b>
            <p>किसी यौगिक के अणु में उपस्थित परमाणुओं की संख्या को सरल सूत्र कहते हैं।</p>
            <p><b style={{color:"violet"}}> जैसे:—</b> ग्लूकोस (C₆H₁₂O₆), चीनी (C₁₂H₂₂O₁₁), जल (H₂O)</p>
          </div>
        ),
      },
      {
        question: "23. अणु सूत्र या रासायनिक सूत्र किसे कहते हैं?",
        answer: (
          <div>
            <b style={{ color: "green" }}>उत्तर:—</b>
            <p>किसी यौगिक के परमाणु में उपस्थित परमाणुओं की संख्या का अनुपात या वास्तविक संख्या को व्यक्त करता हो उसे अणु सूत्र या रासायनिक सूत्र कहते हैं।</p>
            <p><b style={{color:"violet"}}> जैसे:—</b> एसिटिक अम्ल के लिए:</p>
            <ul>
              <li><b >अणु सूत्र:</b> C₂H₄O₂</li>
              <li><b >सरल सूत्र:</b> CH₂O</li>
            </ul>
            <p><b style={{color: "blue"}}>★ सरल सूत्र प्राप्त करने की विधि:</b></p>
            <ol>
              <li>अणु सूत्र के सभी तत्वों के परमाणुओं की संख्या लिखें:</li>
              <ul>
                <li>कार्बन (C) = 2</li>
                <li>हाइड्रोजन (H) = 4</li>
                <li>ऑक्सीजन (O) = 2</li>
              </ul>
              <li>सभी संख्याओं को उनके महत्तम समापवर्तक (म० स०) से भाग दें। यहाँ म० स० 2 है।</li>
              <li>भाग देने पर प्राप्त संख्याएँ सरल सूत्र में तत्वों के अनुपात को दर्शाती हैं: C:H:O = 2:4:2</li>
              <li>सरलतम रूप में: C:H:O = 1:2:1</li>
              <li>अतः सरल सूत्र CH₂O है।</li>
            </ol>
          </div>
        ),
      },
        {
          question: "24. संयोजकता के आधार पर रासायनिक सूत्र लिखें?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b>
              <p>यौगिक के अणु में संयोग करने वाले तत्वों की परमाणु संख्या को विपरीत दिशा में लिखा जाता है।</p>
              <table>
                <thead>
                  <tr>
                    <th>तत्व</th>
                    <th>संयोजकता</th>
                    <th>रासायनिक सूत्र</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Na</td><td>1</td><td>SO₄</td><td>सोडियम सल्फेट - Na₂SO₄</td></tr>
                  <tr><td>Na</td><td>1</td><td>SO₃</td><td>सोडियम सल्फाइट - Na₂SO₃</td></tr>
                  <tr><td>Na</td><td>1</td><td>PO₄</td><td>सोडियम फॉस्फेट - Na₃PO₄</td></tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          question: "25. रासायनिक समीकरण किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b>
              <p>रासायनिक अभिक्रिया में भाग लेने वाले पदार्थ को संकेत और सूत्र का उपयोग करके अभिक्रिया को लिखा जाता है उसे रासायनिक समीकरण कहते हैं।</p>
              <ul>
                <li>(i) C + O₂ → CO₂</li>
                <li>(ii) H₂ + O₂ → H₂O</li>
              </ul>
            </div>
          ),
        },
        {
          question: "26. अभिकारक किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b>
              <p>रासायनिक अभिक्रिया में भाग लेने वाले पदार्थ को अभिकारक कहते हैं।</p>
              <p><b style={{color:"violet"}}> जैसे:—</b> C + O₂ → CO₂</p>
            </div>
          ),
        },
        {
          question: "27. प्रतिफल किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b>
              <p>रासायनिक अभिक्रिया के बाद जो एक नया पदार्थ बनता है उसे प्रतिफल कहते हैं।</p>
              <p><b style={{color:"violet"}}> जैसे:—</b> H₂ + O₂ → H₂O</p>
              <p>अभिकारक → प्रतिफल</p>
            </div>
          ),
        },
        {
          question: "28. रासायनिक समीकरण से प्राप्त होनेवाली सूचनाएँ?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b>
              <ol>
                <li>हाइड्रोजन और क्लोरीन अभिक्रिया करके हाइड्रोजन क्लोराइड बनता है। H₂ + Cl₂ → 2HCl</li>
                <li>हाइड्रोजन का एक अणु और क्लोरीन का एक अणु अभिक्रिया करके हाइड्रोजन क्लोराइड के दो अणु बनाते हैं।</li>
                <li>हाइड्रोजन के द्रव्यमान (2×1=2g) और क्लोरीन का द्रव्यमान (2×35.5=71g) संयोग करके हाइड्रोजन क्लोराइड के द्रव्यमान 73g प्राप्त होता है।</li>
              </ol>
            </div>
          ),
        },
        {
          question: "29. ग्राम–परमाणु द्रव्यमान किसे कहते हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b>
              <p>जब तत्व के परमाणु द्रव्यमान को ग्राम में लिखा जाता है तो उसे ग्राम परमाणु द्रव्यमान कहते हैं।</p>
              <table>
                <thead>
                  <tr>
                    <th>तत्व</th>
                    <th>द्रव्यमान</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>हाइड्रोजन (H)</td><td>1</td></tr>
                  <tr><td>ऑक्सीजन (O)</td><td>16</td></tr>
                  <tr><td>नाइट्रोजन (N)</td><td>14</td></tr>
                  <tr><td>कार्बन (C)</td><td>12</td></tr>
                  <tr><td>मैग्नीशियम (Mg)</td><td>24</td></tr>
                  <tr><td>सल्फर (S)</td><td>32</td></tr>
                  <tr><td>क्लोरीन (Cl)</td><td>35.5</td></tr>
                  <tr><td>कैल्शियम (Ca)</td><td>40</td></tr>
                </tbody>
              </table>
            </div>
          ),
        },
          {
            question: "30. आणविक द्रव्यमान किसे कहते हैं?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर:—</b>
                <p>किसी अणु में उपस्थित परमाणुओं के द्रव्यमान का योगफल आणविक द्रव्यमान कहलाता है।</p>
                <p><b style={{color:"violet"}}> जैसे:—</b></p>
                <ol>
                  <li>
                    (i) H₂O का आणविक द्रव्यमान ज्ञात करें।
                    <br />
                    H₂O = 2×H + 1×O = 2×1 + 1×16 = 2 + 16 = 18g
                  </li>
                  <li>
                    (ii) सल्फ्यूरिक एसिड H₂SO₄ का आणविक द्रव्यमान ज्ञात करें।
                    <br />
                    H₂SO₄ = 2×H + 1×S + 4×O = 2×1 + 1×32 + 4×16 = 2 + 32 + 64 = 98g
                  </li>
                  <li>
                    (iii) कैल्शियम कार्बोनेट CaCO₃ का आणविक द्रव्यमान ज्ञात करें।
                    <br />
                    CaCO₃ = 1×Ca + 1×C + 3×O = 1×40 + 1×12 + 3×16 = 40 + 12 + 48 = 100g
                  </li>
                </ol>
              </div>
            ),
          },
          {
            question: "31. मोल किसे कहते हैं?",
            answer: (
              <div>
                <b style={{ color: "green" }}>उत्तर:—</b>
                <p>
                  परमाणु का एक मोल जिसका कुल द्रव्यमान एक ग्राम परमाणु द्रव्यमान के बराबर होता है।
                </p>
                <p>1 मोल = 6.0022×10²³</p>
                <p>मोलों की संख्या = तत्व का ग्राम द्रव्यमान / आणविक द्रव्यमान</p>
                <p><b style={{color:"violet"}}> जैसे:—</b></p>
                <ol>
                  <li>
                    (i) 36g ग्राम जल (H₂O) में मोलों की संख्या ज्ञात करें।
                    <br />
                    ग्राम द्रव्यमान = 36g, आणविक द्रव्यमान = 18g
                    <br />
                    मोल की संख्या = 36/18 = 2 मोल
                  </li>
                  <li>
                    (ii) 98g सल्फ्यूरिक अम्ल (H₂SO₄) में मोल की संख्या ज्ञात करें।
                    <br />
                    ग्राम द्रव्यमान = 98g, आणविक द्रव्यमान = 98g
                    <br />
                    मोल की संख्या = 98/98 = 1 मोल
                  </li>
                  <li>
                    (iii) 360g ग्लूकोस (C₆H₁₂O₆) में मोल की संख्या ज्ञात करें।
                    <br />
                    ग्राम द्रव्यमान = 360g, आणविक द्रव्यमान = 180g
                    <br />
                    मोल की संख्या = 360/180 = 2 मोल
                  </li>
                </ol>
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
                    <Image src={"/image/9th-chemistry-subjective-chapter-3.png"} className=' rounded mb-12 transition-all transform hover:animate-shake' width={2500} height={300} alt='img'></Image>
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
              
