
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Full-width Header Section */}
      <div className="w-full bg-white p-6 sm:p-8">
        <h1 className="text-xl sm:text-2xl font-medium leading-relaxed text-gray-800 text-center">
          बिहार बोर्ड परीक्षा (Class 8) 2025 के लिए गणित  के महत्वपूर्ण ऑब्जेक्टिव प्रश्‍न और उनके उत्तर दिए गए हैं।
          <span className="text-blue-600 font-bold"> Nafis Sir </span> ने class 8 के लिए बेहद महत्वपूर्ण प्रश्‍न चुने हैं, जिन्हें अवश्य पढ़ें।
          बेहतर अंक प्राप्त करने के लिए नियमित रूप से
          <Link href="/" className="text-blue-600 font-bold"> Nafis Sir Chhaurahi </Link> पर विजिट करें और सभी नवीनतम अपडेट्स प्राप्त करें।
        </h1>

        <p className="mt-4 text-lg text-gray-700 text-center">
          वर्ग 8 के गणित  के chapters के link नीचे दिए गए हैं, जिससे आप आसानी से अपनी तैयारी को बेहतर बना सकते हैं।
          ये प्रश्‍न <span className="text-blue-600 font-bold"> Nafis Sir </span> द्वारा सावधानीपूर्वक चयनित किए गए हैं।
        </p>
      </div>

      {/* Chapter List Section */}
      <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg shadow-blue-500 mb-16 space-y-6 mt-5">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Class 8th Math Question and Answer with Chapter Name</h1>

        <div className="space-y-4 text-xl ">
          {/* <Link href="/8th-science/chapter1" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600  transition-all">
            अध्याय 1: फसल उत्पादन एवं प्रबंधन
          </Link> */}
          <Link
            href="/8th-math-obj/chapter1"
            className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600 transition-all 
  transform hover:scale-110 hover:animate-shake "
          >
            अध्याय 1: Wait Comming Soon....
          </Link>
          {/* <Link href="/8th-math-obj/chapter2" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 2: सूक्ष्मजीव मित्र एवं शत्रु
          </Link>
          <Link href="/8th-math-obj/chapter3" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 3: संश्लेषित रेशे और प्लास्टिक
          </Link>
          <Link href="/8th-math-obj/chapter4" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 4: पदार्थ धातु और अधातु
          </Link>
          <Link href="/8th-math-obj/chapter5" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 5: कोयला और पेट्रोलियम
          </Link>
          <Link href="/8th-math-obj/chapter6" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 6: दहन एवं ज्वाला
          </Link>
          <Link href="/8th-math-obj/chapter7" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 7: पौधा एवं जंतुओं का संरक्षण
          </Link>
          <Link href="/8th-math-obj/chapter8" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 8: कोशिका: संरचना एवं प्रकार्य
          </Link>
          <Link href="/8th-math-obj/chapter9" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 9: जन्तुओं में जनन
          </Link>
          <Link href="/8th-math-obj/chapter10" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 10: किशोरावस्था की और
          </Link>
          <Link href="/8th-math-obj/chapter11" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 11: बल तथा दाब
          </Link>
          <Link href="/8th-math-obj/chapter12" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 12: घर्षण
          </Link>
          <Link href="/8th-math-obj/chapter13" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 13: ध्वनि
          </Link>
          <Link href="/8th-math-obj/chapter14" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 14: विधुत धारा के रासानिक प्रभाव
          </Link>
          <Link href="/8th-math-obj/chapter15" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 15: कुछ प्राकृतिक परिघटनाएँ
          </Link>
          <Link href="/8th-math-obj/chapter16" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 16: प्रकाश
          </Link>
          <Link href="/8th-math-obj/chapter17" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 17: तारे एवं सौर परिवार
          </Link>
          <Link href="/8th-math-obj/chapter18" className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110 hover:animate-shake">
            अध्याय 18: वायु तथा जल का प्रदूषण
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

