

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const questions = [

  //     // chapter 15

//     {
//       chapterName: "कुछ प्राकृतिक परिघटनाएँ",
//       imageUrl: "/image/8th-S-Chap-15.png", // 🖼️ Image for this chapter
//       description: (
//         <h1><b style={{ color: "blue" }}> इस अध्याय में ह उर्वरक।</b></h1>

//       ),
//       questions: [


        {
          question: " 1. बिजली क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली एक प्राकृतिक परिघटना है, जिसमें विद्युत ऊर्जा का प्रवाह होता है।
            </div>
          ),
        },
        {
          question: " 2. बिजली कैसे उत्पन्न होती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली मेघों में विद्युत आवेशों के जमाव के कारण उत्पन्न होती है।
            </div>
          ),
        },
        {
          question: " 3. बिजली के दौरान क्या होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली के दौरान विद्युत ऊर्जा का प्रवाह होता है, जिससे तेज़ प्रकाश और ध्वनि उत्पन्न होती है।
            </div>
          ),
        },
        {
          question: " 4. बादलों में बिजली कैसे उत्पन्न होती है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बादलों में बिजली विद्युत आवेशों के जमाव के कारण उत्पन्न होती है।
            </div>
          ),
        },
        {
          question: " 5. बिजली के प्रकार क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली के दो प्रकार हैं: आकाशीय बिजली और मानव निर्मित बिजली।
            </div>
          ),
        },
        {
          question: " 6. आकाशीय बिजली क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> आकाशीय बिजली एक प्राकृतिक परिघटना है जिसमें विद्युत ऊर्जा का प्रवाह होता है।
            </div>
          ),
        },
        {
          question: " 7. मानव निर्मित बिजली क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> मानव निर्मित बिजली विद्युत ऊर्जा का मानव द्वारा निर्मित रूप है।
            </div>
          ),
        },
        {
          question: " 8. बिजली के क्या उपयोग हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली के कई उपयोग हैं, जैसे कि घरों में प्रकाश और ऊर्जा की आपूर्ति करना।
            </div>
          ),
        },
        {
          question: " 9. बिजली के क्या नुकसान हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली के कई नुकसान हैं, जैसे कि इसके कारण आग लगने का खतरा होता है।
            </div>
          ),
        },
        {
          question: " 10. बिजली से बचाव के तरीके क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली से बचाव के तरीके हैं जैसे कि बिजली के तारों से दूर रहना और बिजली के उपकरणों का सही तरीके से उपयोग करना।
            </div>
          ),
        },
        {
          question: " 11. भूकंप क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> भूकंप एक प्राकृतिक परिघटना है जिसमें पृथ्वी की सतह पर अचानक से कंपन होता है।
            </div>
          ),
        },
        {
          question: " 12. भूकंप के क्या कारण हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> भूकंप के कई कारण हैं, जैसे कि पृथ्वी की प्लेटों का गतिशील होना।
            </div>
          ),
        },
        {
          question: " 13. भूकंप के क्या प्रभाव हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> भूकंप के कई प्रभाव हैं, जैसे कि इमारतों का ध्वस्त होना और जान-माल की हानि।
            </div>
          ),
        },
        {
          question: " 14. भूकंप से बचाव के तरीके क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> भूकंप से बचाव के तरीके हैं जैसे कि भूकंप के दौरान सुरक्षित स्थान पर जाना और इमारतों को भूकंप प्रतिरोधी बनाना।
            </div>
          ),
        },
        {
          question: " 15. ज्वालामुखी क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ज्वालामुखी एक प्राकृतिक परिघटना है जिसमें पृथ्वी की सतह से लावा और गैसें निकलती हैं।
            </div>
          ),
        },
        {
          question: " 16. ज्वालामुखी के क्या प्रभाव हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ज्वालामुखी के कई प्रभाव हैं, जैसे कि लावा के कारण जंगलों और शहरों का नष्ट होना, और वायुमंडल में गैसों के कारण वायु प्रदूषण।
            </div>
          ),
        },
        {
          question: " 17. ज्वालामुखी से बचाव के तरीके क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ज्वालामुखी से बचाव के तरीके हैं जैसे कि ज्वालामुखी के आसपास के क्षेत्र से दूर रहना, और ज्वालामुखी के विस्फोट के दौरान सुरक्षित स्थान पर जाना।
            </div>
          ),
        },
        {
          question: " 18. तूफान क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तूफान एक प्राकृतिक परिघटना है जिसमें हवा की गति बहुत अधिक होती है, जिससे विनाशकारी प्रभाव पड़ता है।
            </div>
          ),
        },
        {
          question: " 19. तूफान के क्या कारण हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तूफान के कई कारण हैं, जैसे कि तापमान और आर्द्रता के कारण हवा की गति में परिवर्तन।
            </div>
          ),
        },
        {
          question: " 20. तूफान के क्या प्रभाव हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तूफान के कई प्रभाव हैं, जैसे कि इमारतों का ध्वस्त होना, पेड़ों का उखड़ना, और जान-माल की हानि।
            </div>
          ),
        },
        {
          question: " 21. तूफान से बचाव के तरीके क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तूफान से बचाव के तरीके हैं जैसे कि तूफान के दौरान सुरक्षित स्थान पर जाना, और तूफान के पूर्वानुमान के अनुसार आवश्यक कदम उठाना।
            </div>
          ),
        },
        {
          question: " 22. सुनामी क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सुनामी एक प्राकृतिक परिघटना है जिसमें समुद्र के पानी में अचानक से विशाल तरंगें उत्पन्न होती हैं।
            </div>
          ),
        },
        {
          question: " 23. सुनामी के क्या कारण हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सुनामी के कई कारण हैं, जैसे कि भूकंप, ज्वालामुखी विस्फोट, और समुद्री भूकंप।
            </div>
          ),
        },
        {
          question: " 24. सुनामी के क्या प्रभाव हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सुनामी के कई प्रभाव हैं, जैसे कि तटीय क्षेत्रों में व्यापक विनाश, जान-माल की हानि, और समुद्री जीवन को नुकसान।
            </div>
          ),
        },
        {
          question: " 25. सुनामी से बचाव के तरीके क्या हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सुनामी से बचाव के तरीके हैं जैसे कि सुनामी के पूर्वानुमान के अनुसार आवश्यक कदम उठाना, तटीय क्षेत्रों से दूर रहना, और सुरक्षित स्थान पर जाना।
            </div>
          ),
        },
        {
          question: " 26. चक्रवात क्या है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> चक्रवात एक प्राकृतिक परिघटना है जिसमें हवा की गति बहुत अधिक होती है, जिससे विनाशकारी प्रभाव पड़ता है।
            </div>
          ),
        },
        {
          question: " 27. चक्रवात के क्या कारण हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> चक्रवात के कई कारण हैं, जैसे कि तापमान और आर्द्रता के कारण हवा की गति में परिवर्तन।
            </div>
          ),
        },
        {
          question: " 28. चक्रवात के क्या प्रभाव हैं?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> चक्रवात के कई प्रभाव हैं, जैसे कि इमारतों का ध्वस्त होना, पेड़ों का उखड़ना, और जान-माल की हानि।
            </div>
          ),
        },
        {
          question: " 29. ज्वालामुखी के विस्फोट के दौरान क्या होता है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ज्वालामुखी के विस्फोट के दौरान लावा और गैसें पृथ्वी की सतह से निकलती हैं, जिससे विनाशकारी प्रभाव पड़ता है।
            </div>
          ),
        },
        {
          question: " 30. ज्वालामुखी के अध्ययन से हमें क्या लाभ है?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ज्वालामुखी के अध्ययन से हमें ज्वालामुखी के विस्फोट के पूर्वानुमान लगाने में मदद मिलती है, जिससे हम ज्वालामुखी से बचाव के लिए आवश्यक कदम उठा सकते हैं।
            </div>
          ),
        },
        {
          question: " 31. बिजली के दौरान क्या सावधानियाँ बरतनी चाहिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> बिजली के दौरान सावधानियाँ बरतने के लिए हमें बिजली के तारों से दूर रहना चाहिए, और बिजली के उपकरणों का सही तरीके से उपयोग करना चाहिए।
            </div>
          ),
        },
        {
          question: " 32. भूकंप के दौरान क्या सावधानियाँ बरतनी चाहिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> भूकंप के दौरान सावधानियाँ बरतने के लिए हमें भूकंप के दौरान सुरक्षित स्थान पर जाना चाहिए, और इमारतों को भूकंप प्रतिरोधी बनाना चाहिए।
            </div>
          ),
        },
        {
          question: " 33. ज्वालामुखी के विस्फोट के दौरान क्या सावधानियाँ बरतनी चाहिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> ज्वालामुखी के विस्फोट के दौरान सावधानियाँ बरतने के लिए हमें ज्वालामुखी के आसपास के क्षेत्र से दूर रहना चाहिए, और ज्वालामुखी के विस्फोट के दौरान सुरक्षित स्थान पर जाना चाहिए।
            </div>
          ),
        },
        {
          question: " 34. तूफान के दौरान क्या सावधानियाँ बरतनी चाहिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> तूफान के दौरान सावधानियाँ बरतने के लिए हमें तूफान के दौरान सुरक्षित स्थान पर जाना चाहिए, और तूफान के पूर्वानुमान के अनुसार आवश्यक कदम उठाना चाहिए।
            </div>
          ),
        },
        {
          question: " 35. सुनामी के दौरान क्या सावधानियाँ बरतनी चाहिए?",
          answer: (
            <div>
              <b style={{ color: "green" }}>उत्तर:—</b> सुनामी के दौरान सावधानियाँ बरतने के लिए हमें सुनामी के पूर्वानुमान के अनुसार आवश्यक कदम उठाना चाहिए, और तटीय क्षेत्रों से दूर रहना चाहिए।
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
        <Image src={"/image/8th-S-Chap-15.png"} className=' rounded mb-12' width={2500} height={300} alt='img'></Image>
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