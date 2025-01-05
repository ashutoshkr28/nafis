// import { InlineMath } from 'react-katex';
// import 'katex/dist/katex.min.css';

// const ProofPage = () => {
//   return (
//     <div className="p-6 min-h-screen mx-auto text-lg leading-relaxed mb-8">

//       <h1 className='text-center font-bold text-xl mb-6 mt-4'>Some Important</h1>
      
//       <div className='border border-gray-400 shadow  p-8 text-2xl'>
//       <p className="mb-4 text-red-600 text-2xl font-bold">
//         <span>प्रश्‍न 1:</span> सिद्ध करें कि 
//         <InlineMath>{'\\sqrt{2}'}</InlineMath> एक अपरिमेय संख्या है?
//       </p>
      
//       <p className="mb-4 text-xl ">
//         <span className="font-semibold text-green-700">उत्तर:</span> 
//         माना कि <InlineMath>{'\\sqrt{2}'}</InlineMath> एक परिमेय संख्या है। <br />
//         तब, <InlineMath>{'\\sqrt{2} = \\frac{p}{q}'}</InlineMath> जहाँ, p और q कोई धन पूर्णांक हैं। <br />
//          जिसका कोई भी उभयनिष्ठ गुणनखंड नहीं है। <br />
//         दोनों तरफ वर्ग करने पर, <br /> 
//         <span className='ml-16'>
//         <InlineMath>{'\\left( \\sqrt{2} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath> 
//         </span> <br />
//         <span className=''>        2 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath></span>

        
//       </p>

//       <p className="mb-4 text-2xl ml-4">
//         <span className='ml-14'>
//         p<sup>2</sup> = 2q<sup>2</sup>  .................(i) </span> <br />  
//         <span className='ml-12'>
//         p = सम संख्या है। </span><br /> ∵ सम संख्या का वर्ग सम ही होता है।  <br />
//         माना कि p = 2m
//       </p>

//       <p className="mb-4 text-2xl ml-14">

//         समीकरण (i) से, <br />
//         <InlineMath>{'(2m)^2 = 2q^2'}</InlineMath> <br />

//         <span className='line-through'>4</span>m<sup>2</sup> = <span className='line-through'>2</span>q<sup>2</sup> 
//         <br />
//         2m<sup>2</sup> = q<sup>2</sup>
//       </p>

//       <p className="mb-4 text-2xl">
//        <span className='ml-12'> q = सम संख्या है। </span> <br /> अब, p और q में उभयनिष्ठ गुणनखंड 2 है।
//         <br />
//         अतः हमारी मान्यता गलत है।
//       </p>

//     <p className=' text-2xl'>      
//       <InlineMath>{'{\\therefore \\sqrt{2} \\text{ एक परिमेय संख्या नहीं  है।}}'}</InlineMath>
// </p>




//       <p className=" text-2xl font-bold py-5 ">


//         <InlineMath>{'\\boxed{\\therefore \\sqrt{2} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
//       </p>

//       <p className="mt-4">Proved</p>
//       </div>

//       <hr className="my-8" />

//       <div className='border border-gray-400 shadow  p-6 text-3xl'>

//       <p className="mb-4 text-red-600 text-xl font-bold">
//         <span className="font-bold">प्रश्‍न 2:</span> सिद्ध करें कि 
//         <InlineMath>{'\\sqrt{3}'}</InlineMath> एक अपरिमेय संख्या है?
//       </p>
      
//       <p className="mb-4 text-4xl">
//         <span className="font-semibold">उत्तर:</span> 
//         माना कि <InlineMath>{'\\sqrt{3}'}</InlineMath> एक परिमेय संख्या है। <br />
//         तब, <InlineMath>{'\\sqrt{3} = \\frac{p}{q}'}</InlineMath> जहाँ, p और q कोई धन पूर्णांक हैं और इनके बीच कोई उभयनिष्ठ गुणनखंड नहीं है।
//         दोनों तरफ वर्ग करने पर,
//         <InlineMath>{'\\left( \\sqrt{3} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath>
//         3 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath>
//       </p>

//       <p className="mb-4 text-4xl">
//         p<sup>2</sup> = 3q<sup>2</sup>  ...................(i)  <br />  
//         p = विषम संख्या है। <br /> ∵ विषम संख्या का वर्ग विषम ही होता है। 
//         माना कि p = 3m
//       </p>

//       <p className="mb-4 text-4xl">
//         समीकरण (i) से, <br />
//         <InlineMath>{'(3m)^2 = 3q^2'}</InlineMath> <br />
//         9m<sup>2</sup> = 3q<sup>2</sup> 
//         3m<sup>2</sup> = q<sup>2</sup>
//       </p>

//       <p className="mb-4 text-4xl">
//         q = विषम संख्या है। <br /> अब, p और q में उभयनिष्ठ गुणनखंड 3 है।
//         <br />
//         अतः हमारी मान्यता गलत है।
//       </p>

//       <p className="text-4xl ">
//         <InlineMath>{'\\boxed{\\therefore \\sqrt{3} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
//       </p>

//       <p className="mt-4">Proved</p>

//       </div>

//       <hr className="my-8" />

//       <div className='border border-gray-400 shadow  p-6 text-3xl'>

//       <p className="mb-4 text-red-600 text-4xl font-bold ">
//         <span className="font-bold">प्रश्‍न 3:</span> सिद्ध करें कि 
//         <InlineMath>{'\\sqrt{7}'}</InlineMath> एक अपरिमेय संख्या है?
//       </p>
      
//       <p className="mb-4 text-4xl">
//         <span className="font-semibold text-green-700">उत्तर:</span> 
//         माना कि <InlineMath>{'\\sqrt{7}'}</InlineMath> एक परिमेय संख्या है। <br />
//         तब, <InlineMath>{'\\sqrt{7} = \\frac{p}{q}'}</InlineMath> जहाँ, p और q कोई धन पूर्णांक हैं और इनके बीच कोई उभयनिष्ठ गुणनखंड नहीं है। <br />
//         दोनों तरफ वर्ग करने पर, <br />
//         <InlineMath>{'\\left( \\sqrt{7} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath> <br />
//         7 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath>
//       </p>

//       <p className="mb-4 text-4xl">
//         p<sup>2</sup> = 7q<sup>2</sup>  ...............(i)   <br />
//         p = विषम संख्या है। ∵ विषम संख्या का वर्ग विषम ही होता है। <br />
//         माना कि p = 7m
//       </p>

//       <p className="mb-4 text-4xl">
//         समीकरण (i) से, <br />
//         <InlineMath>{'(7m)^2 = 7q^2'}</InlineMath> <br />
//         49m<sup>2</sup> = 7q<sup>2</sup> 
//         <br />
//         7m<sup>2</sup> = q<sup>2</sup>
//       </p>

//       <p className="mb-4 text-4xl">
//         q = विषम संख्या है। <br /> अब, p और q में उभयनिष्ठ गुणनखंड 7 है। <br />
//         अतः हमारी मान्यता गलत है।
//       </p>

//       <p className="text-4xl ">
//         <InlineMath>{'\\boxed{\\therefore \\sqrt{7} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
//       </p>

//       <p className="mt-4">Proved</p>
//       </div>
//     </div>
//   );
// };

// export default ProofPage;



// const GalleryPage = () => {
//   // Array of 15 image URLs (you can replace these with your own URLs)
//   const images = [
//     "/image/proved1.png",
//     "/image/proved2.png",
//     "/image/proved3.png",
//     "/image/proved4.png",
//     "/image/proved5.png",
//     "/image/proved6.png",
//     "/image/proved7.png",
//     "/image/proved8.png",
//     "/image/proved9.png",
//     "/image/proved10.png",
//     "/image/proved11.png",
//     "/image/proved12.png",
//     "/image/proved13.png",
//     "/image/proved14.png",
//     "/image/proved15.png",
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold text-center mb-6">Image Gallery</h1>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded overflow-hidden hover:scale-105 transition-transform"
//           >
//             <img
//               src={image}
//               alt={`Image ${index + 1}`}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;



// const GalleryPage = () => {
//   // Array of 15 image URLs (you can replace these with your own URLs)
//   const images = [
//     "/image/proved1.png",
//     "/image/proved2.png",
//     "/image/proved3.png",
//     "/image/proved4.png",
//     "/image/proved5.png",
//     "/image/proved6.png",
//     "/image/proved7.png",
//     "/image/proved8.png",
//     "/image/proved9.png",
//     "/image/proved10.png",
//     "/image/proved11.png",
//     "/image/proved12.png",
//     "/image/proved13.png",
//     "/image/proved14.png",
//     "/image/proved15.png",
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold text-center mb-6">Important</h1>
//       <div className="space-y-4">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded overflow-hidden hover:scale-105 transition-transform"
//           >
//             <img
//               src={image}
//               alt={`Image ${index + 1}`}
//               className="w-full h-auto object-cover"
//             />
//             <p className="text-center text-gray-600 mt-2">**Imporatnat**</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;



import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const ProofPage = () => {
  return (
    <div className="p-6 min-h-screen mx-auto text-lg leading-relaxed mb-8 items-center text-center ">

      <h1 className="text-center font-bold text-4xl mb-6 mt-4 text-blue-500">Some Important Proofs</h1>

      {/* Proof for Root 2 */}
      <div className="border border-blue-600 -mx-4 shadow my-20  text-xl">
        <p className="mb-4 text-red-600 text-xl font-bold">
          <span className="font-bold">प्रश्‍न 1:</span> सिद्ध करें कि 
          <InlineMath>{'\\sqrt{2}'}</InlineMath> एक अपरिमेय संख्या है?
        </p>
        <p className="mb-4 text-xl">
          <span className="font-semibold text-green-700">उत्तर:</span> 
          माना कि <InlineMath>{'\\sqrt{2}'}</InlineMath> एक परिमेय संख्या है। <br />
          <span className='ml-10'>
          तब, <InlineMath>{'\\sqrt{2} = \\frac{p}{q}'}</InlineMath>, जहाँ p और q कोई धन पूर्णांक हैं। </span><br />
          <span className='ml-10'>  जिसका  कोई भी उभयनिष्ठ गुणनखंड नहीं है। </span> <br />
         <span className='ml-24'>  दोनों तरफ वर्ग करने पर, </span><br />

         <span className=''>
          <InlineMath>{'\\left( \\sqrt{2} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath> </span><br />
          <span className=''> 2 = 
          <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath></span>
          
        </p>
        <p className="mb-4  text-xl">
          p<sup>2</sup> = 2q<sup>2</sup>  ...............(i)   <br />
          p = सम संख्या है। <br />
          <span className=''> ∵ सम संख्या का वर्ग सम ही होता है। </span><br />
          माना कि p = 2m
        </p>
        <p className="mb-4 text-xl ">
          समीकरण (i) से, <br />
          <InlineMath>{'(2m)^2 = 2q^2'}</InlineMath> <br />
          <span className='line-through'>4</span>m<sup>2</sup> =<span className='line-through'> 2</span>q<sup>2</sup> <br />
          2m<sup>2</sup> = q<sup>2</sup>
        </p>
        <p className="mb-4 text-xl ml-24">
          q = सम संख्या है। <br /> <span className='-ml-14'> अब, p और q में उभयनिष्ठ गुणनखंड 2 है। </span><br />
          अतः हमारी मान्यता गलत है।
        </p>
        <p className="text-xl">
          <InlineMath>{'\\boxed{\\therefore \\sqrt{2} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
        </p>
        <p className="mt-4">Proved</p>
      </div>

      <hr className="my-8" />

      {/* Proof for Root 3 */}
      <div className="border border-gray-400 shadow p-6 text-3xl">
        <p className="mb-4 text-red-600 text-xl font-bold">
          <span className="font-bold">प्रश्‍न 2:</span> सिद्ध करें कि 
          <InlineMath>{'\\sqrt{3}'}</InlineMath> एक अपरिमेय संख्या है?
        </p>
        <p className="mb-4 text-xl">
          <span className="font-semibold text-green-700">उत्तर:</span> 
          माना कि <InlineMath>{'\\sqrt{3}'}</InlineMath> एक परिमेय संख्या है। <br />
          तब, <InlineMath>{'\\sqrt{3} = \\frac{p}{q}'}</InlineMath>, जहाँ p और q कोई धन पूर्णांक हैं। <br />
          दोनों तरफ वर्ग करने पर: <br />
          <InlineMath>{'\\left( \\sqrt{3} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath> <br />
          3 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath>
        </p>
        <p className="mb-4 text-xl">
          p<sup>2</sup> = 3q<sup>2</sup>  ...............(i)   <br />
          p = विषम संख्या है। ∵ विषम संख्या का वर्ग विषम ही होता है। <br />
          माना कि p = 3m
        </p>
        <p className="mb-4 text-xl">
          समीकरण (i) से, <br />
          <InlineMath>{'(3m)^2 = 3q^2'}</InlineMath> <br />
          9m<sup>2</sup> = 3q<sup>2</sup> <br />
          3m<sup>2</sup> = q<sup>2</sup>
        </p>
        <p className="mb-4 text-xl">
          q = विषम संख्या है। <br /> अब, p और q में उभयनिष्ठ गुणनखंड 3 है। <br />
          अतः हमारी मान्यता गलत है।
        </p>
        <p className="text-xl">
          <InlineMath>{'\\boxed{\\therefore \\sqrt{3} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
        </p>
        <p className="mt-4">Proved</p>
      </div>

      <hr className="my-8" />

      {/* Proof for Root 7 */}
      <div className="border border-gray-400 shadow p-6 text-3xl">
        <p className="mb-4 text-red-600 text-xl font-bold">
          <span className="font-bold">प्रश्‍न 3:</span> सिद्ध करें कि 
          <InlineMath>{'\\sqrt{7}'}</InlineMath> एक अपरिमेय संख्या है?
        </p>
        <p className="mb-4 text-xl">
          <span className="font-semibold text-green-700">उत्तर:</span> 
          माना कि <InlineMath>{'\\sqrt{7}'}</InlineMath> एक परिमेय संख्या है। <br />
          तब, <InlineMath>{'\\sqrt{7} = \\frac{p}{q}'}</InlineMath>, जहाँ p और q कोई धन पूर्णांक हैं। <br />
          दोनों तरफ वर्ग करने पर: <br />
          <InlineMath>{'\\left( \\sqrt{7} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath> <br />
          7 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath>
        </p>
        <p className="mb-4 text-xl">
          p<sup>2</sup> = 7q<sup>2</sup>  ...............(i)   <br />
          p = विषम संख्या है। ∵ विषम संख्या का वर्ग विषम ही होता है। <br />
          माना कि p = 7m
        </p>
        <p className="mb-4 text-xl">
          समीकरण (i) से, <br />
          <InlineMath>{'(7m)^2 = 7q^2'}</InlineMath> <br />
          49m<sup>2</sup> = 7q<sup>2</sup> <br />
          7m<sup>2</sup> = q<sup>2</sup>
        </p>
        <p className="mb-4 text-xl">
          q = विषम संख्या है। <br /> अब, p और q में उभयनिष्ठ गुणनखंड 7 है। <br />
          अतः हमारी मान्यता गलत है।
        </p>
        <p className="text-xl">
          <InlineMath>{'\\boxed{\\therefore \\sqrt{7} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
        </p>
        <p className="mt-4">Proved</p>
      </div>

      <hr className="my-8" />

      {/* Proof for Root 5 */}
      <div className="border border-gray-400 shadow p-6 text-3xl">
        <p className="mb-4 text-red-600 text-xl font-bold">
          <span className="font-bold">प्रश्‍न 4:</span> सिद्ध करें कि 
          <InlineMath>{'\\sqrt{5}'}</InlineMath> एक अपरिमेय संख्या है?
        </p>
        <p className="mb-4 text-xl">
          <span className="font-semibold text-green-700">उत्तर:</span> 
          माना कि <InlineMath>{'\\sqrt{5}'}</InlineMath> एक परिमेय संख्या है। <br />
          तब, <InlineMath>{'\\sqrt{5} = \\frac{p}{q}'}</InlineMath>, जहाँ p और q कोई धन पूर्णांक हैं। <br />
          दोनों तरफ वर्ग करने पर: <br />
          <InlineMath>{'\\left( \\sqrt{5} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath> <br />
          5 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath>
        </p>
        <p className="mb-4 text-xl">
          p<sup>2</sup> = 5q<sup>2</sup>  ...............(i)   <br />
          p = विषम संख्या है। ∵ विषम संख्या का वर्ग विषम ही होता है। <br />
          माना कि p = 5m
        </p>
        <p className="mb-4 text-xl">
          समीकरण (i) से, <br />
          <InlineMath>{'(5m)^2 = 5q^2'}</InlineMath> <br />
          25m<sup>2</sup> = 5q<sup>2</sup> <br />
          5m<sup>2</sup> = q<sup>2</sup>
        </p>
        <p className="mb-4 text-xl">
          q = विषम संख्या है। <br /> अब, p और q में उभयनिष्ठ गुणनखंड 5 है। <br />
          अतः हमारी मान्यता गलत है।
        </p>
        <p className="text-xl">
          <InlineMath>{'\\boxed{\\therefore \\sqrt{5} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
        </p>
        <p className="mt-4">Proved</p>
      </div>

      {/* root 11 proved */}

      
      <div className="border border-gray-400 shadow p-6 text-3xl">
  <p className="mb-4 text-red-600 text-xl font-bold">
    <span className="font-bold">प्रश्‍न 5:</span> सिद्ध करें कि 
    <InlineMath>{'\\sqrt{11}'}</InlineMath> एक अपरिमेय संख्या है?
  </p>
  <p className="mb-4 text-xl">
    <span className="font-semibold text-green-700">उत्तर:</span> 
    माना कि <InlineMath>{'\\sqrt{11}'}</InlineMath> एक परिमेय संख्या है। <br />
    तब, <InlineMath>{'\\sqrt{11} = \\frac{p}{q}'}</InlineMath>, जहाँ p और q कोई धन पूर्णांक हैं, <br />
    जिनका कोई भी उभयनिष्ठ गुणनखंड नहीं है। <br />
    दोनों तरफ वर्ग करने पर: <br />
    <InlineMath>{'\\left( \\sqrt{11} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath> <br />
    11 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath>
  </p>
  <p className="mb-4 text-xl">
    <InlineMath>{'p^2 = 11q^2'}</InlineMath> ...............(i)   <br />
    p = विषम संख्या है। ∵ विषम संख्या का वर्ग विषम ही होता है। <br />
    माना कि p = 11m
  </p>
  <p className="mb-4 text-xl">
    समीकरण (i) से, <br />
    <InlineMath>{'(11m)^2 = 11q^2'}</InlineMath> <br />
    121m<sup>2</sup> = 11q<sup>2</sup> <br />
    11m<sup>2</sup> = q<sup>2</sup>
  </p>
  <p className="mb-4 text-xl">
    q = विषम संख्या है। <br /> अब, p और q में उभयनिष्ठ गुणनखंड 11 है। <br />
    अतः हमारी मान्यता गलत है।
  </p>
  <p className="text-xl">
    <InlineMath>{'\\boxed{\\therefore \\sqrt{11} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
  </p>
  <p className="mt-4">Proved</p>
</div>

{/* root 13 proved   */}


<div className="border border-gray-400 shadow p-6 text-3xl">
  <p className="mb-4 text-red-600 text-xl font-bold">
    <span className="font-bold">प्रश्‍न 6:</span> सिद्ध करें कि 
    <InlineMath>{'\\sqrt{13}'}</InlineMath> एक अपरिमेय संख्या है?
  </p>
  <p className="mb-4 text-xl">
    <span className="font-semibold text-green-700">उत्तर:</span> 
    माना कि <InlineMath>{'\\sqrt{13}'}</InlineMath> एक परिमेय संख्या है। <br />
    तब, <InlineMath>{'\\sqrt{13} = \\frac{p}{q}'}</InlineMath>, जहाँ p और q कोई धन पूर्णांक हैं, <br />
    जिनका कोई भी उभयनिष्ठ गुणनखंड नहीं है। <br />
    दोनों तरफ वर्ग करने पर: <br />
    <InlineMath>{'\\left( \\sqrt{13} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath> <br />
    13 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath>
  </p>
  <p className="mb-4 text-xl">
    <InlineMath>{'p^2 = 13q^2'}</InlineMath> ...............(i)   <br />
    p = विषम संख्या है। ∵ विषम संख्या का वर्ग विषम ही होता है। <br />
    माना कि p = 13m
  </p>
  <p className="mb-4 text-xl">
    समीकरण (i) से, <br />
    <InlineMath>{'(13m)^2 = 13q^2'}</InlineMath> <br />
    169m<sup>2</sup> = 13q<sup>2</sup> <br />
    13m<sup>2</sup> = q<sup>2</sup>
  </p>
  <p className="mb-4 text-xl">
    q = विषम संख्या है। <br /> अब, p और q में उभयनिष्ठ गुणनखंड 13 है। <br />
    अतः हमारी मान्यता गलत है।
  </p>
  <p className="text-xl">
    <InlineMath>{'\\boxed{\\therefore \\sqrt{13} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
  </p>
  <p className="mt-4">Proved</p>
</div>















<div className="border border-gray-400 shadow p-6 text-3xl">
  <p className="mb-4 text-red-600 text-xl font-bold">
    <span className="font-bold">प्रश्‍न 6:</span> सिद्ध करें कि 
    <InlineMath>{'\\sqrt{13}'}</InlineMath> एक अपरिमेय संख्या है?
  </p>
  <p className="mb-4 text-xl">
    <span className="font-semibold text-green-700">उत्तर:</span> 
    माना कि <InlineMath>{'\\sqrt{13}'}</InlineMath> एक परिमेय संख्या है। <br />
    तब, <InlineMath>{'\\sqrt{13} = \\frac{p}{q}'}</InlineMath>, जहाँ p और q कोई धन पूर्णांक हैं, <br />
    जिनका कोई भी उभयनिष्ठ गुणनखंड नहीं है। <br />
    दोनों तरफ वर्ग करने पर: <br />
    <InlineMath>{'\\left( \\sqrt{13} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath> <br />
    13 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath>
  </p>
  <p className="mb-4 text-xl">
    <InlineMath>{'p^2 = 13q^2'}</InlineMath> ...............(i)   <br />
    p = विषम संख्या है। ∵ विषम संख्या का वर्ग विषम ही होता है। <br />
    माना कि p = 13m
  </p>
  <p className="mb-4 text-xl">
    समीकरण (i) से, <br />
    <InlineMath>{'(13m)^2 = 13q^2'}</InlineMath> <br />
    169m<sup>2</sup> = 13q<sup>2</sup> <br />
    13m<sup>2</sup> = q<sup>2</sup>
  </p>
  <p className="mb-4 text-xl">
    q = विषम संख्या है। <br /> अब, p और q में उभयनिष्ठ गुणनखंड 13 है। <br />
    अतः हमारी मान्यता गलत है।
  </p>
  <p className="text-xl">
    <InlineMath>{'\\boxed{\\therefore \\sqrt{13} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
  </p>
  <p className="mt-4">Proved</p>
</div>





{/* root 15  */}



<div className="border border-gray-400 shadow p-6 text-3xl">
  <p className="mb-4 text-red-600 text-xl font-bold">
    <span className="font-bold">प्रश्‍न 7:</span> सिद्ध करें कि 
    <InlineMath>{'\\sqrt{15}'}</InlineMath> एक अपरिमेय संख्या है?
  </p>
  <p className="mb-4 text-xl">
    <span className="font-semibold text-green-700">उत्तर:</span> 
    माना कि <InlineMath>{'\\sqrt{15}'}</InlineMath> एक परिमेय संख्या है। <br />
    तब, <InlineMath>{'\\sqrt{15} = \\frac{p}{q}'}</InlineMath>, जहाँ p और q कोई धन पूर्णांक हैं, <br />
    जिनका कोई भी उभयनिष्ठ गुणनखंड नहीं है। <br />
    दोनों तरफ वर्ग करने पर: <br />
    <InlineMath>{'\\left( \\sqrt{15} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath> <br />
    15 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath>
  </p>
  <p className="mb-4 text-xl">
    <InlineMath>{'p^2 = 15q^2'}</InlineMath> ...............(i)   <br />
    p = विषम संख्या है। ∵ विषम संख्या का वर्ग विषम ही होता है। <br />
    माना कि p = 15m
  </p>
  <p className="mb-4 text-xl">
    समीकरण (i) से, <br />
    <InlineMath>{'(15m)^2 = 15q^2'}</InlineMath> <br />
    225m<sup>2</sup> = 15q<sup>2</sup> <br />
    15m<sup>2</sup> = q<sup>2</sup>
  </p>
  <p className="mb-4 text-xl">
    q = विषम संख्या है। <br /> अब, p और q में उभयनिष्ठ गुणनखंड 15 है। <br />
    अतः हमारी मान्यता गलत है।
  </p>
  <p className="text-xl">
    <InlineMath>{'\\boxed{\\therefore \\sqrt{15} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
  </p>
  <p className="mt-4">Proved</p>
</div>



{/* 1 by root 2   */}



<div className="border border-purple-500 p-6 shadow text-3xl">
  <p className="mb-4 text-red-600 text-xl font-bold">
    प्रश्‍न: 8. सिद्ध करें कि <InlineMath>{'\\frac{1}{\\sqrt{2}}'}</InlineMath> एक अपरिमेय संख्या है।
  </p>
  <p className="mb-4 text-xl">
    <span className="font-semibold text-green-700">उत्तर:</span> 
    माना कि <InlineMath>{'\\frac{1}{\\sqrt{2}}'}</InlineMath> एक परिमेय संख्या r है। <br />
    अब, <InlineMath>{'\\frac{1}{\\sqrt{2}} = r'}</InlineMath>, जहाँ r कोई धन पूर्णांक है। <br />
    या, <InlineMath>{'\\sqrt{2} = \\frac{1}{r}'}</InlineMath> <br />
    यहाँ, <InlineMath>{'\\sqrt{2}'}</InlineMath> एक अपरिमेय संख्या है। <br />
    एवं, <InlineMath>{'\\frac{1}{r}'}</InlineMath> एक परिमेय संख्या है। <br />
    अपरिमेय संख्या = परिमेय संख्या (जो कि संभव नहीं है)। <br />
    अतः हमारी मान्यता गलत है। 
  </p>
  <p className="mb-4 text-xl">
    <InlineMath>{'\\therefore \\frac{1}{\\sqrt{2}}'}</InlineMath> एक परिमेय संख्या नहीं है। <br />
    <InlineMath>{'\\boxed{\\therefore \\frac{1}{\\sqrt{2}} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
  </p>
  <p className="text-xl font-semibold text-blue-700">Proved</p>
</div>



{/* 1 by root 3   */}


<div className="border border-purple-500 p-6 shadow text-3xl">
  <p className="mb-4 text-red-600 text-xl font-bold">
    प्रश्‍न: 9. सिद्ध करें कि <InlineMath>{'\\frac{1}{\\sqrt{3}}'}</InlineMath> एक अपरिमेय संख्या है।
  </p>
  <p className="mb-4 text-xl">
    <span className="font-semibold text-green-700">उत्तर:</span> 
    माना कि <InlineMath>{'\\frac{1}{\\sqrt{3}}'}</InlineMath> एक परिमेय संख्या r है। <br />
    अब, <InlineMath>{'\\frac{1}{\\sqrt{3}} = r'}</InlineMath>, जहाँ r कोई धन पूर्णांक है। <br />
    या, <InlineMath>{'\\sqrt{3} = \\frac{1}{r}'}</InlineMath> <br />
    यहाँ, <InlineMath>{'\\sqrt{3}'}</InlineMath> एक अपरिमेय संख्या है। <br />
    एवं, <InlineMath>{'\\frac{1}{r}'}</InlineMath> एक परिमेय संख्या है। <br />
    अपरिमेय संख्या = परिमेय संख्या (जो कि संभव नहीं है)। <br />
    अतः हमारी मान्यता गलत है। 
  </p>
  <p className="mb-4 text-xl">
    <InlineMath>{'\\therefore \\frac{1}{\\sqrt{3}}'}</InlineMath> एक परिमेय संख्या नहीं है। <br />
    <InlineMath>{'\\boxed{\\therefore \\frac{1}{\\sqrt{3}} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
  </p>
  <p className="text-xl font-semibold text-blue-700">Proved</p>
</div>
  

  {/* 1 by root 5   */}



  <div className="border border-purple-500 p-6 shadow text-3xl">
  <p className="mb-4 text-red-600 text-xl font-bold">
    प्रश्‍न: 10. सिद्ध करें कि <InlineMath>{'\\frac{1}{\\sqrt{5}}'}</InlineMath> एक अपरिमेय संख्या है।
  </p>
  <p className="mb-4 text-xl">
    <span className="font-semibold text-green-700">उत्तर:</span> 
    माना कि <InlineMath>{'\\frac{1}{\\sqrt{5}}'}</InlineMath> एक परिमेय संख्या r है। <br />
    अब, <InlineMath>{'\\frac{1}{\\sqrt{5}} = r'}</InlineMath>, जहाँ r कोई धन पूर्णांक है। <br />
    या, <InlineMath>{'\\sqrt{5} = \\frac{1}{r}'}</InlineMath> <br />
    यहाँ, <InlineMath>{'\\sqrt{5}'}</InlineMath> एक अपरिमेय संख्या है। <br />
    एवं, <InlineMath>{'\\frac{1}{r}'}</InlineMath> एक परिमेय संख्या है। <br />
    अपरिमेय संख्या = परिमेय संख्या (जो कि संभव नहीं है)। <br />
    अतः हमारी मान्यता गलत है। 
  </p>
  <p className="mb-4 text-xl">
    <InlineMath>{'\\therefore \\frac{1}{\\sqrt{5}}'}</InlineMath> एक परिमेय संख्या नहीं है। <br />
    <InlineMath>{'\\boxed{\\therefore \\frac{1}{\\sqrt{5}} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
  </p>
  <p className="text-xl font-semibold text-blue-700">Proved</p>
</div>


{/* root 2 by 3   */}



<div className="border border-purple-500 p-6 shadow text-3xl">
      <p className="mb-4 text-red-600 text-xl font-bold">
        प्रश्‍न: 11. सिद्ध करें कि <InlineMath math={'2\\sqrt{3}'} /> एक अपरिमेय संख्या है।
      </p>
      <p className="mb-4 text-xl">
        <span className="font-semibold text-green-700">उत्तर:</span> 
        माना कि <InlineMath math={'2\\sqrt{3}'} /> एक परिमेय संख्या <InlineMath math={'r'} /> है। <br />
        अब, <InlineMath math={'2\\sqrt{3} = r'} />, जहाँ <InlineMath math={'r'} /> कोई धन पूर्णांक है। <br />
        या, <InlineMath math={'\\sqrt{3} = \\frac{r}{2}'} /> <br />
        यहाँ, <InlineMath math={'\\sqrt{3}'} /> एक अपरिमेय संख्या है। <br />
        एवं, <InlineMath math={'\\frac{r}{2}'} /> एक परिमेय संख्या है। <br />
        अपरिमेय संख्या = परिमेय संख्या (जो कि संभव नहीं है)। <br />
        अतः हमारी मान्यता गलत है। 
      </p>
      <p className="mb-4 text-xl">
        <InlineMath math={'\\therefore 2\\sqrt{3}'} /> एक परिमेय संख्या नहीं है। <br />
        <InlineMath math={'\\boxed{\\therefore 2\\sqrt{3} \\text{ एक अपरिमेय संख्या है।}}'} />
      </p>
      <p className="text-xl font-semibold text-blue-700">Proved</p>
    </div>


    {/* root 7 by 2   */}



    <div className="border border-purple-500 p-6 shadow text-3xl">
  <p className="mb-4 text-red-600 text-xl font-bold">
    प्रश्‍न: 12. सिद्ध करें कि <InlineMath math={'7\\sqrt{2}'} /> एक अपरिमेय संख्या है।
  </p>
  <p className="mb-4 text-xl">
    <span className="font-semibold text-green-700">उत्तर:</span> 
    माना कि <InlineMath math={'7\\sqrt{2}'} /> एक परिमेय संख्या <InlineMath math={'r'} /> है। <br />
    अब, <InlineMath math={'7\\sqrt{2} = r'} />, जहाँ <InlineMath math={'r'} /> कोई धन पूर्णांक है। <br />
    या, <InlineMath math={'\\sqrt{2} = \\frac{r}{7}'} /> <br />
    यहाँ, <InlineMath math={'\\sqrt{2}'} /> एक अपरिमेय संख्या है। <br />
    एवं, <InlineMath math={'\\frac{r}{7}'} /> एक परिमेय संख्या है। <br />
    अपरिमेय संख्या = परिमेय संख्या (जो कि संभव नहीं है)। <br />
    अतः हमारी मान्यता गलत है। 
  </p>
  <p className="mb-4 text-xl">
    <InlineMath math={'\\therefore 7\\sqrt{2}'} /> एक परिमेय संख्या नहीं है। <br />
    <InlineMath math={'\\boxed{\\therefore 7\\sqrt{2} \\text{ एक अपरिमेय संख्या है।}}'} />
  </p>
  <p className="text-xl font-semibold text-blue-700">Proved</p>
</div>


{/* 3 - root 2  */}



<div className="border border-purple-500 p-6 shadow text-3xl">
  <p className="mb-4 text-red-600 text-xl font-bold">
    प्रश्‍न: 13. सिद्ध करें कि <InlineMath math={'3 - \\sqrt{2}'} /> एक अपरिमेय संख्या है।
  </p>
  <p className="mb-4 text-xl">
    <span className="font-semibold text-green-700">उत्तर:</span> 
    माना कि <InlineMath math={'3 - \\sqrt{2}'} /> एक परिमेय संख्या <InlineMath math={'r'} /> है। <br />
    अब, <InlineMath math={'3 - \\sqrt{2} = r'} />, जहाँ <InlineMath math={'r'} /> कोई धन पूर्णांक है। <br />
    या, <InlineMath math={'-\\sqrt{2} = r - 3'} /> <br />
    या, <InlineMath math={'\\sqrt{2} = 3 - r'} /> <br />
    यहाँ, <InlineMath math={'\\sqrt{2}'} /> एक अपरिमेय संख्या है। <br />
    एवं, <InlineMath math={'(3 - r)'} /> परिमेय संख्याओं का अंतर है। <br />
    अपरिमेय संख्या = परिमेय संख्या (जो कि संभव नहीं है)। <br />
    अतः हमारी मान्यता गलत है। 
  </p>
  <p className="mb-4 text-xl">
    <InlineMath math={'\\therefore 3 - \\sqrt{2}'} /> एक परिमेय संख्या नहीं है। <br />
    <InlineMath math={'\\boxed{\\therefore 3 - \\sqrt{2} \\text{ एक अपरिमेय संख्या है।}}'} />
  </p>
  <p className="text-xl font-semibold text-blue-700">Proved</p>
</div>





<div className="border border-purple-500 p-6 shadow text-3xl">
  <p className="mb-4 text-red-600 text-xl font-bold">
    प्रश्‍न: 14. सिद्ध करें कि <InlineMath math={'5 - \\sqrt{3}'} /> एक अपरिमेय संख्या है।
  </p>
  <p className="mb-4 text-xl">
    <span className="font-semibold text-green-700">उत्तर:</span> 
    माना कि <InlineMath math={'5 - \\sqrt{3}'} /> एक परिमेय संख्या <InlineMath math={'r'} /> है। <br />
    अब, <InlineMath math={'5 - \\sqrt{3} = r'} />, जहाँ <InlineMath math={'r'} /> कोई धन पूर्णांक है। <br />
    या, <InlineMath math={'-\\sqrt{3} = r - 5'} /> <br />
    या, <InlineMath math={'\\sqrt{3} = 5 - r'} /> <br />
    यहाँ, <InlineMath math={'\\sqrt{3}'} /> एक अपरिमेय संख्या है। <br />
    एवं, <InlineMath math={'(5 - r)'} /> परिमेय संख्याओं का अंतर है। <br />
    अपरिमेय संख्या = परिमेय संख्या (जो कि संभव नहीं है)। <br />
    अतः हमारी मान्यता गलत है। 
  </p>
  <p className="mb-4 text-xl">
    <InlineMath math={'\\therefore 5 - \\sqrt{3}'} /> एक परिमेय संख्या नहीं है। <br />
    <InlineMath math={'\\boxed{\\therefore 5 - \\sqrt{3} \\text{ एक अपरिमेय संख्या है।}}'} />
  </p>
  <p className="text-xl font-semibold text-blue-700">Proved</p>
</div>

















<div className="border border-purple-500 p-6 shadow text-3xl">
  <p className="mb-4 text-red-600 text-xl font-bold">
    प्रश्‍न: 15. सिद्ध करें कि <InlineMath math={'3 + 2\\sqrt{5}'} /> एक अपरिमेय संख्या है।
  </p>
  <p className="mb-4 text-xl">
    <span className="font-semibold text-green-700">उत्तर:</span> 
    माना कि <InlineMath math={'3 + 2\\sqrt{5}'} /> एक परिमेय संख्या <InlineMath math={'r'} /> है। <br />
    अब, <InlineMath math={'3 + 2\\sqrt{5} = r'} />, जहाँ <InlineMath math={'r'} /> कोई धन पूर्णांक है। <br />
    या, <InlineMath math={'2\\sqrt{5} = r - 3'} /> <br />
    या, <InlineMath math={'\\sqrt{5} = \\frac{r - 3}{2}'} /> <br />
    यहाँ, <InlineMath math={'\\sqrt{5}'} /> एक अपरिमेय संख्या है। <br />
    एवं, <InlineMath math={'\\frac{r - 3}{2}'} /> परिमेय संख्याओं का अंतर है। <br />
    अपरिमेय संख्या = परिमेय संख्या (जो कि संभव नहीं है)। <br />
    अतः हमारी मान्यता गलत है। 
  </p>
  <p className="mb-4 text-xl">
    <InlineMath math={'\\therefore 3 + 2\\sqrt{5}'} /> एक परिमेय संख्या नहीं है। <br />
    <InlineMath math={'\\boxed{\\therefore 3 + 2\\sqrt{5} \\text{ एक अपरिमेय संख्या है।}}'} />
  </p>
  <p className="text-xl font-semibold text-blue-700">Proved</p>
</div>









    </div>
  );
};

export default ProofPage;
