import React from "react";
import Image from "next/image";

// Question Component
const Question = ({ question, answer, image }) => (
  <div className="mb-8 p-4 border-2 border-gray-300 rounded-lg  ">
    <h2 className="text-xl text-red-600 font-semibold mb-4">{question}</h2>
    <p className="text-gray-700 text-xl mb-4 ">{answer}</p>
    <div className="relative w-full h-64">
      <Image src={image}  layout="fill" objectFit="contain" />
    </div>
  </div>
);

const GeometryConcepts = () => {
  return (
   <div className="min-h-screen ">
    <h1 className="text-3xl font-bold text-center  mt-10">रेखागणित (Geometry)</h1>
      {/* extra ques */}
      <div className=" p-6 ">
       <div className="mb-6 p-4  border border-gray-300 rounded-lg text-xl">
      <p className="text-red-600 font-bold">रेखागणित क्या है?</p>
      
        <p>  रेखागणित गणित की वह शाखा है जिसमें रेखा अथवा रेखाखंड से घिरे क्षेत्र के गुणों एवं बनावटों का अध्ययन करते हैं।</p>
        </div>
        <div className="mb-4 p-4 border-2 border-gray-300 rounded-lg text-xl">
      <p className="text-red-600 font-bold">बिंदु क्या है?</p>
      
        <p> बिंदु वह है जिसकी मात्र कल्पना की जा सके एवं जिसमें लंबाई, चौड़ाई तथा मोटाई कुछ भी न हो किंतु स्थान अवश्य छेंकता हो उसे बिंदु कहते हैं।</p>
        </div>
        <div className=" p-4 border-2 border-gray-300 rounded-lg text-xl">
      <p className="text-red-600 font-bold">समतल क्या है?</p>
      <p>जिस तल में सभी बिंदु एक ही सतह में होते हैं उसे समतल कहते हैं।</p>
        </div>
      </div>

    <div className="   p-5 ">


    

      <Question
        question="रेखाखंड क्या है?"
        answer="रेखाखंड में दो अंत बिंदु होते हैं। उदाहरण के लिए, AB एक रेखाखंड को दर्शाता है जिसके अंत बिंदु A और B हैं।"
        image="/image/line-segment.png"
      />

      <Question
        question="रेखा क्या है?"
        answer="रेखा का कोई अंत नहीं होता। इसे तीरों से दर्शाया जाता है। उदाहरण के लिए, AB एक रेखा को दर्शाता है जिसके दोनों ओर बिंदु A और B अनंत तक फैली हुई है।"
        image="/image/line.png"
      />

      <Question
        question="किरण क्या है?"
        answer="यदि रेखाखंड के एक ओर तीर का निशान लगा दिया जाए तो उसे किरण कहते हैं।"
        image="/image/ray.png"
      />

      <Question
        question="कोण क्या है?"
        answer="किसी बिंदु पर दो सरल रेखाओं के मिलने से जो झुकाव बनता है उसे कोण कहते हैं।"
        image="/image/angle.png"
      />

      <Question
        question="त्रिभुज क्या है?"
        answer="त्रिभुज एक बंद आकृति होती है जिसमें तीन भुजाएँ और तीन कोण होते हैं। अर्थात तीन रेखाओं से घिरे हुए आकृति को त्रिभुज कहते हैं।"
        image="/image/triangle.png"
      />

      <Question
        question="समबाहु त्रिभुज क्या है?"
        answer="इस त्रिभुज की सभी भुजाएँ और सभी कोण बराबर होते हैं।"
        image="/image/equilateral-triangle.png"
      />

      <Question
        question="समद्विबाहु त्रिभुज क्या है?"
        answer="इस त्रिभुज की दो भुजाएँ बराबर होती हैं और उनके सामने के कोण भी बराबर होते हैं।"
        image="/image/isosceles-triangle.png"
      />

      <Question
        question="विषमबाहु त्रिभुज क्या है?"
        answer="इस त्रिभुज की सभी भुजाएँ और सभी कोण अलग-अलग होते हैं।"
        image="/image/scalene-triangle.png"
      />

      <Question
        question="समकोण त्रिभुज क्या है?"
        answer="जिस त्रिभुज का एक कोण समकोण अर्थात, 90° हो उसे समकोण त्रिभुज कहते हैं।"
        image="/image/right-angled-triangle.png"
      />

      <Question
        question="न्यूनकोण त्रिभुज क्या है?"
        answer="जिस त्रिभुज के तीनों कोण 90° से छोटा हो उसे न्यूनकोण त्रिभुज कहते हैं।"
        image="/image/acute-angled-triangle.png"
      />

      <Question
        question="अधिक कोण त्रिभुज क्या है?"
        answer="जिस त्रिभुज का एक कोण 90° से अधिक हो उसे अधिक कोण त्रिभुज कहते हैं।"
        image="/image/obtuse-angled-triangle.png"
      />

    

      <Question
        question="चतुर्भुज क्या है?"
        answer="चार सरल रेखाओं से घिरी बन्द आकृति को चतुर्भुज कहते हैं। यूक्लिडियन समतल ज्यामिति में, चतुर्भुज एक बहुभुज है जिसमें चार किनारे (या भुजा) और चार शीर्ष (या कोने) होते हैं।"
        image="/image/quadrilateral.png"
      />

      <Question
        question="समांतर चतुर्भुज क्या है?"
        answer="समानांतर भुजाओं के दो युग्मों वाला एक चतुर्भुज। ऐसा चतुर्भुज, जिसमें सम्मुख(आमने-सामने की) भुजाएँ बराबर; सम्मुख कोण बराबर; या विकर्ण एक दूसरे को समद्विभाजित करते हैं।"
        image="/image/parallelogram.png"
      />

      <Question
        question="समचतुर्भुज क्या है?"
        answer="सभी चारों भुजाएँ समान होती हैं और दोनों विकर्ण एक दूसरे को लंब-समद्विभाजित करते हैं। वर्ग, एक समचतुर्भुज होता है।"
        image="/image/rhombus.png"
      />

      <Question
        question="वर्ग क्या है?"
        answer="सभी चारों भुजाएँ समान होती हैं, और चारों कोण समकोण होते हैं। सम्मुख भुजाएँ समानांतर होती हैं।"
        image="/image/square.png"
      />

      <Question
        question="आयत क्या है?"
        answer="सम्मुख भुजाएँ समान होती हैं, चारों कोण समकोण होते हैं, विकर्ण एक दूसरे को समद्विभाजित करते हैं और लंबाई में बराबर होते हैं।"
        image="/image/rectangle.png"
      />

      <Question
        question="समलंब चतुर्भुज क्या है?"
        answer="सम्मुख भुजाओं का कम से कम एक युग्म समानांतर होता है। समांतर चतुर्भुज एक समलंब चतुर्भुज होता है।"
        image="/image/trapezoid.png"
      />
    </div>
    </div>

  );
};

export default GeometryConcepts;
