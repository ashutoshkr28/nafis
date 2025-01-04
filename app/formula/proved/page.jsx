import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const ProofPage = () => {
  return (
    <div className="p-6 min-h-screen mx-auto text-lg leading-relaxed mb-8">

      <h1 className='text-center font-bold text-4xl mb-6 mt-4'>Some Important</h1>
      
      <div className='border border-gray-400 shadow  p-6 text-2xl'>
      <p className="mb-4 text-red-600 text-2xl font-bold">
        <span>प्रश्‍न 1:</span> सिद्ध करें कि 
        <InlineMath>{'\\sqrt{2}'}</InlineMath> एक अपरिमेय संख्या है?
      </p>
      
      <p className="mb-4 text-xl ">
        <span className="font-semibold text-green-700">उत्तर:</span> 
        माना कि <InlineMath>{'\\sqrt{2}'}</InlineMath> एक परिमेय संख्या है। <br />
        तब, <InlineMath>{'\\sqrt{2} = \\frac{p}{q}'}</InlineMath> जहाँ, p और q कोई धन पूर्णांक हैं। जिसका कोई भी उभयनिष्ठ गुणनखंड नहीं है। <br />
        दोनों तरफ वर्ग करने पर, <br /> 
        <span className='ml-16'>
        <InlineMath>{'\\left( \\sqrt{2} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath> 
        </span> <br />
        <span className='ml-28'>        2 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath></span>

        
      </p>

      <p className="mb-4 text-2xl ml-4">
        <span className='ml-14'>
        p<sup>2</sup> = 2q<sup>2</sup>  .................(i) </span> <br />  
        <span className='ml-12'>
        p = सम संख्या है। </span><br /> ∵ सम संख्या का वर्ग सम ही होता है।  <br />
        माना कि p = 2m
      </p>

      <p className="mb-4 text-2xl ml-14">

        समीकरण (i) से, <br />
        <InlineMath>{'(2m)^2 = 2q^2'}</InlineMath> <br />
        4m<sup>2</sup> = 2q<sup>2</sup> 
        <br />
        2m<sup>2</sup> = q<sup>2</sup>
      </p>

      <p className="mb-4 text-2xl">
       <span className='ml-12'> q = सम संख्या है। </span> <br /> अब, p और q में उभयनिष्ठ गुणनखंड 2 है।
        <br />
        अतः हमारी मान्यता गलत है।
      </p>

    <p className=' text-2xl'>      
      <InlineMath>{'{\\therefore \\sqrt{2} \\text{ एक परिमेय संख्या नहीं  है।}}'}</InlineMath>
</p>




      <p className=" text-2xl font-bold py-5 ">


        <InlineMath>{'\\boxed{\\therefore \\sqrt{2} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
      </p>

      <p className="mt-4">Proved</p>
      </div>

      <hr className="my-8" />

      <div className='border border-gray-400 shadow  p-6 text-3xl'>

      <p className="mb-4 text-red-600 text-4xl font-bold">
        <span className="font-bold">प्रश्‍न 2:</span> सिद्ध करें कि 
        <InlineMath>{'\\sqrt{3}'}</InlineMath> एक अपरिमेय संख्या है?
      </p>
      
      <p className="mb-4 text-4xl">
        <span className="font-semibold">उत्तर:</span> 
        माना कि <InlineMath>{'\\sqrt{3}'}</InlineMath> एक परिमेय संख्या है। <br />
        तब, <InlineMath>{'\\sqrt{3} = \\frac{p}{q}'}</InlineMath> जहाँ, p और q कोई धन पूर्णांक हैं और इनके बीच कोई उभयनिष्ठ गुणनखंड नहीं है।
        दोनों तरफ वर्ग करने पर,
        <InlineMath>{'\\left( \\sqrt{3} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath>
        3 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath>
      </p>

      <p className="mb-4 text-4xl">
        p<sup>2</sup> = 3q<sup>2</sup>  ...................(i)  <br />  
        p = विषम संख्या है। <br /> ∵ विषम संख्या का वर्ग विषम ही होता है। 
        माना कि p = 3m
      </p>

      <p className="mb-4 text-4xl">
        समीकरण (i) से, <br />
        <InlineMath>{'(3m)^2 = 3q^2'}</InlineMath> <br />
        9m<sup>2</sup> = 3q<sup>2</sup> 
        3m<sup>2</sup> = q<sup>2</sup>
      </p>

      <p className="mb-4 text-4xl">
        q = विषम संख्या है। <br /> अब, p और q में उभयनिष्ठ गुणनखंड 3 है।
        <br />
        अतः हमारी मान्यता गलत है।
      </p>

      <p className="text-4xl ">
        <InlineMath>{'\\boxed{\\therefore \\sqrt{3} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
      </p>

      <p className="mt-4">Proved</p>

      </div>

      <hr className="my-8" />

      <div className='border border-gray-400 shadow  p-6 text-3xl'>

      <p className="mb-4 text-red-600 text-4xl font-bold ">
        <span className="font-bold">प्रश्‍न 3:</span> सिद्ध करें कि 
        <InlineMath>{'\\sqrt{7}'}</InlineMath> एक अपरिमेय संख्या है?
      </p>
      
      <p className="mb-4 text-4xl">
        <span className="font-semibold text-green-700">उत्तर:</span> 
        माना कि <InlineMath>{'\\sqrt{7}'}</InlineMath> एक परिमेय संख्या है। <br />
        तब, <InlineMath>{'\\sqrt{7} = \\frac{p}{q}'}</InlineMath> जहाँ, p और q कोई धन पूर्णांक हैं और इनके बीच कोई उभयनिष्ठ गुणनखंड नहीं है। <br />
        दोनों तरफ वर्ग करने पर, <br />
        <InlineMath>{'\\left( \\sqrt{7} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath> <br />
        7 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath>
      </p>

      <p className="mb-4 text-4xl">
        p<sup>2</sup> = 7q<sup>2</sup>  ...............(i)   <br />
        p = विषम संख्या है। ∵ विषम संख्या का वर्ग विषम ही होता है। <br />
        माना कि p = 7m
      </p>

      <p className="mb-4 text-4xl">
        समीकरण (i) से, <br />
        <InlineMath>{'(7m)^2 = 7q^2'}</InlineMath> <br />
        49m<sup>2</sup> = 7q<sup>2</sup> 
        <br />
        7m<sup>2</sup> = q<sup>2</sup>
      </p>

      <p className="mb-4 text-4xl">
        q = विषम संख्या है। <br /> अब, p और q में उभयनिष्ठ गुणनखंड 7 है। <br />
        अतः हमारी मान्यता गलत है।
      </p>

      <p className="text-4xl ">
        <InlineMath>{'\\boxed{\\therefore \\sqrt{7} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
      </p>

      <p className="mt-4">Proved</p>
      </div>
    </div>
  );
};

export default ProofPage;
