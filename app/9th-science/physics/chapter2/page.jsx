import Image from "next/image";

const questions = [


  {
    question: "1. विराम या स्थिर किसे कहते हैं?",
    answer: (
      <div>
        <b style={{color: "green"}}>उत्तर:-</b> किसी भी वस्तु की स्थिति में समय के साथ कोई भी परिवर्तन नहीं होता है तो उस वस्तु को विराम या स्थिर अवस्था में कहा जाता है।
        <p><b style={{color: "violet"}}>जैसे:</b> घर, पेड़, पहाड़, इत्यादि।</p>
      </div>
    ),
  },
  {
    question: "2. गति किसे कहते हैं?",
    answer: (
      <div>
        <b style={{color: "green"}}>उत्तर:-</b> यदि किसी वस्तु की स्थिति अन्य वस्तु की अपेक्षा समय के साथ बदलती हो तो उस वस्तु को गति में कहा जाता है।
        <p><b style={{color: "violet"}}>जैसे:</b> 
          <ol>
            <li>चलती हुई कार सड़क पर खड़े व्यक्ति की अपेक्षा गति में है।</li>
            <li>बस या रेलगाड़ी में बगल के सीट पर बैठे हुए व्यक्ति बस या रेलगाड़ी के अपेक्षा विराम अवस्था में होती है।</li>
          </ol>
        </p>
      </div>
    ),
  },
  {
    question: "3. गति कितने प्रकार के होते हैं?",
    answer: (
      <div>
        <b style={{color: "green"}}>उत्तर:-</b> <span style={{color: "blue"}}> गति चार प्रकार के होते हैं। </span>
        <ul className="ml-14">
          <li>(i) रैखिक गति</li>
          <li>(ii) वृत्तीय गति</li>
          <li>(iii) दोलनी गति</li>
          <li>(iv) आवर्त गति</li>
        </ul>
      </div>
    ),
  },
  {
    question: "4. रैखिक गति किसे कहते हैं?",
    answer: (
      <div>
        <b style={{color: "green"}}>उत्तर:-</b> इस गति में वस्तु सीधी या वक्र रेखा पर चलती है।
        <p><b style={{color: "violet"}}>जैसे:</b> बंदूक से छोड़ी गई गोली।</p>
      </div>
    ),
  },
  {
    question: "5. वित्तीय गति किसे कहते हैं?",
    answer: (
      <div>
        <b style={{color: "green"}}>उत्तर:-</b> इस गति में वस्तु वृत्त पर चलती है।
        <p><b style={{color: "violet"}}>जैसे:</b> सूर्य के चारों ओर पृथ्वी की गति।</p>
      </div>
    ),
  },
  {
    question: "6. दोलनी गति किसे कहते हैं?",
    answer: (
      <div>
        <b style={{color: "green"}}>उत्तर:-</b> इस गति में वस्तु एक निश्‍चित बिंदु के आगे–पीछे या ऊपर–नीचे चलती है।
        <p><b style={{color: "violet"}}>जैसे:</b> झूले की गति, दीवार घड़ी की पेंडुलम की गति।</p>
      </div>
    ),
  },
  {
    question: "7. आवर्त गति किसे कहते हैं?",
    answer: (
      <div>
        <b style={{color: "green"}}>उत्तर:-</b> इस गति में वस्तु एक निश्‍चित समय अंतरालों पर अपनी गति को दोहराती है।
        <p><b style={{color: "violet"}}>जैसे:</b> सिलाई मशीन की गति।</p>
      </div>
    ),
  },
  {
    question: "8. सरल रेखा पर गतिशील कण की स्थिति?",
    answer: (
      <div>
        <b style={{color: "green"}}>उत्तर:-</b> सरल रेखा पर किसी कण की स्थिति का वर्णन करने के लिए हमें निम्नलिखित दो बातों का ज्ञान होना आवश्यक है:
        <ol>
          <li>इस रेखा पर कोई मूल बिंदु चुनना होगा।</li>
          <li>मूल बिंदु से उसकी दूरी और दिशा बतानी होगी।</li>
        </ol>
        <p><b style={{color: "violet"}}>जैसे:-</b> B की स्थिति मूल बिंदु से दाई ओर 4 m है।</p>
        <p><b style={{color: "violet"}}>जैसे:-</b> A की स्थिति मूल बिंदु से बाई ओर –3 m है।</p>
      </div>
    ),
  },
  {
    question: "9. दूरी किसे कहते हैं?",
    answer: (
      <div>
        <b style={{color: "green"}}>उत्तर:-</b> जब कोई वस्तु किसी एक स्थान से दूसरी स्थान तक जाती है तो वस्तु द्वारा तय की गई पथ की पूरी लंबाई को दूरी कहते हैं।
      </div>
    ),
  },
  {
    question: "10. विस्थापन किसे कहते हैं?",
    answer: (
      <div>
        <b style={{color: "green"}}>उत्तर:-</b> जब कोई वस्तु किसी एक स्थान से दूसरे स्थान तक जाती है तो वस्तु द्वारा तय की गई दोनों स्थानों के बीच की न्यूनतम दूरी और एक दिशा दोनों मिलकर विस्थापन कहलाता है।
      </div>
    ),
  },
  {
    question: "11. दूरी और विस्थापन में क्या अंतर है?",
    answer: (
      <div>
        {/* <b style={{color: "green"}}>उत्तर:-</b> दूरी और विस्थापन में निम्नलिखित अंतर है: */}

        <h3 className="font-bold text-lg mb-2 text-indigo-700"> <b style={{ color: "green" }} className="text-xl">उत्तर: </b>दूरी और विस्थापन में निम्नलिखित अंतर है:</h3>
            <table className="table-auto border-collapse text-gray-800 w-full shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center"><b > दूरी: </b></th>
                  <th className="border border-gray-400 px-6 py-3 text-sky-500 font-medium text-center "> <b>विस्थापन: </b></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4 ">(I) दूरी कभी भी ऋणात्मक नहीं होती अर्थात दूरी का मान हमेशा धनात्मक होता है।</td>
                  <td className="border border-gray-400 px-4 py-4">(I) विस्थापन का मान धनात्मक तथा ऋणात्मक दोनों होता है।</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(II) दूरी कभी भी शून्य नहीं होती है।</td>
                  <td className="border border-gray-400 px-4  py-4">(II) विस्थापन का मान शून्य भी होता है।</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(III)  दूरी में केवल परिमाण होता है।</td>
                  <td className="border border-gray-400 px-4  py-4">(III) विस्थापन में परिमाण और दिशा दोनों होता है। </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4  py-4">(IV)  दूरी एक अदिश राशि है।</td>
                  <td className="border border-gray-400 px-4  py-4">(IV) विस्थापन एक सदिश राशि है। </td>
                </tr>
              </tbody>
            </table>
            <p><b style={{color: "violet"}}>नोट:</b> यदि कोई वस्तु सरल रेखा पर बिना दिशा परिवर्तन के चले तो उस वस्तु का दूरी और विस्थापन का मान बराबर होगा।</p>




{/* 
        <ul>
          <li><b style={{color: "blue"}}>दूरी:</b>
            <ul>
              <li>दूरी कभी भी ऋणात्मक नहीं होती अर्थात दूरी का मान हमेशा धनात्मक होता है।</li>
              <li>दूरी कभी भी शून्य नहीं होती है।</li>
              <li>दूरी में केवल परिमाण होता है।</li>
              <li>दूरी एक अदिश राशि है।</li>
            </ul>
          </li>
          <li><b style={{color: "blue"}}>विस्थापन:</b>
            <ul>
              <li>विस्थापन का मान धनात्मक तथा ऋणात्मक दोनों होता है।</li>
              <li>विस्थापन का मान शून्य भी होता है।</li>
              <li>विस्थापन में परिमाण और दिशा दोनों होता है।</li>
              <li>विस्थापन एक सदिश राशि है।</li>
            </ul>
          </li>
        </ul>
        <p><b style={{color: "violet"}}>नोट:</b> यदि कोई वस्तु सरल रेखा पर बिना दिशा परिवर्तन के चले तो उस वस्तु का दूरी और विस्थापन का मान बराबर होगा।</p> */}
      </div>
    ),
  },
  {
    question: "12. सरल लेख पर विस्थापन ज्ञात करना है।",
    answer: (
      <div>
        <b style={{color: "green"}}>उत्तर:-</b> विस्थापन को&apos; S&apos; सूचित किया जाता है।
        <p>विस्थापन = अंतिम स्थिति– प्रारंभिक स्थिति</p>
        <p>या S = X₂ - X₁</p>
        <p><b style={{color: "violet"}}>जैसे:-</b></p>
        <p>(i) जब वस्तु A से D गया। X₁ = 1 m, X₂ = 4 m, S = X₂ - X₁ = 4–1 = 3 m</p>
        <p>(ii) जब वस्तु D से B गया। X₁ = 4 m, X₂ = 2 m, S = X₂ - X₁ = 2–4 = –2 m</p>
        <p>(iii) जब वस्तु C से C गया। X₁ = 3 m, X₂ = 3 m, S = X₂ - X₁ = 3–3 = 0</p>
        <p><b style={{color: "violet"}}>नोट:-</b> 
          <ul>
            <li>(i) यदि वस्तु का विस्थापन धनात्मक है, तो उसकी अंतिम स्थिति उसकी प्रारंभिक स्थिति के दाहिनी ओर होगी।</li>
            <li>(ii) यदि वस्तु का विस्थापन ऋणात्मक है तो उसकी अंतिम स्थिति उसकी प्रारंभिक स्थिति के बाई ओर होगी।</li>
            <li>(iii) यदि वस्तु का विस्थापन शून्य है तो उसकी अंतिम स्थिति और प्रारंभिक स्थिति एक ही है।</li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    question: "13. अदिश राशि किसे कहते हैं?",
    answer: (
      <div>
        <b style={{color: "green"}}>उत्तर:-</b> वैसे प्रकार की राशि जिसको पूर्ण–रूप से व्यक्त करने के लिए केवल परिमाण की आवश्यकता होती है उस राशि को अदिश राशि कहते हैं। 
        <p><b style={{color: "violet"}}>जैसे:-</b> दूरी, द्रव्यमान, समय, क्षेत्रफल इत्यादि।</p>
      </div>
    ),
  },
  {
    question: "14. सदिश राशि किसे कहते हैं?",
    answer: (
      <div>
        <b style={{color: "green"}}>उत्तर:-</b> वैसे प्रकार की राशि जिसको पूर्ण–रूप से व्यक्त करने के लिए परिमाण और दिशा दोनों की आवश्यकता होती है उस राशि को सदिश राशि कहते हैं।
        <p><b style={{color: "violet"}}>जैसे:-</b> विस्थापन, बाल वेग, त्वरण इत्यादि।</p>
        <p><b style={{color: "violet"}}>नोट:-</b> किसी सदिश राशि को एक तीर (<span style={{ fontSize: "1.5em" }}>→</span>) चिह्न द्वारा सूचित किया जाता है।</p>
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
                    <Image src={"/image/9th-subjective-physice-chapter-2.png"} className=' rounded mb-12 transition-all transform hover:animate-shake' width={2500} height={300} alt='img'></Image>
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
              
