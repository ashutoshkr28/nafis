import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const ProofPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-lg leading-relaxed">
      
      <p className="mb-4">
        <span className="font-bold">प्रश्‍न 1:</span> सिद्ध करें कि 
        <InlineMath>{'\\sqrt{2}'}</InlineMath> एक अपरिमेय संख्या है?
      </p>
      
      <p className="mb-4">
        <span className="font-semibold">उत्तर:</span> 
        माना कि <InlineMath>{'\\sqrt{2}'}</InlineMath> एक परिमेय संख्या है।
        तब, <InlineMath>{'\\sqrt{2} = \\frac{p}{q}'}</InlineMath> जहाँ, p और q कोई धन पूर्णांक हैं और इनके बीच कोई उभयनिष्ठ गुणनखंड नहीं है।
        दोनों तरफ वर्ग करने पर,
        <InlineMath>{'\\left( \\sqrt{2} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath>
        2 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath>
      </p>

      <p className="mb-4">
        p<sup>2</sup> = 2q<sup>2</sup>  (i)  
        p = सम संख्या है। ∵ सम संख्या का वर्ग सम ही होता है। 
        माना कि p = 2m
      </p>

      <p className="mb-4">
        समीकरण (i) से,
        <InlineMath>{'(2m)^2 = 2q^2'}</InlineMath>
        4m<sup>2</sup> = 2q<sup>2</sup> 
        2m<sup>2</sup> = q<sup>2</sup>
      </p>

      <p className="mb-4">
        q = सम संख्या है। अब, p और q में उभयनिष्ठ गुणनखंड 2 है।
        अतः हमारी मान्यता गलत है।
      </p>

      <p className="text-xl font-bold">
        <InlineMath>{'\\boxed{\\therefore \\sqrt{2} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
      </p>

      <p className="mt-4">Proved</p>

      <hr className="my-8" />

      <p className="mb-4">
        <span className="font-bold">प्रश्‍न 2:</span> सिद्ध करें कि 
        <InlineMath>{'\\sqrt{3}'}</InlineMath> एक अपरिमेय संख्या है?
      </p>
      
      <p className="mb-4">
        <span className="font-semibold">उत्तर:</span> 
        माना कि <InlineMath>{'\\sqrt{3}'}</InlineMath> एक परिमेय संख्या है।
        तब, <InlineMath>{'\\sqrt{3} = \\frac{p}{q}'}</InlineMath> जहाँ, p और q कोई धन पूर्णांक हैं और इनके बीच कोई उभयनिष्ठ गुणनखंड नहीं है।
        दोनों तरफ वर्ग करने पर,
        <InlineMath>{'\\left( \\sqrt{3} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath>
        3 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath>
      </p>

      <p className="mb-4">
        p<sup>2</sup> = 3q<sup>2</sup>  (i)  
        p = विषम संख्या है। ∵ विषम संख्या का वर्ग विषम ही होता है। 
        माना कि p = 3m
      </p>

      <p className="mb-4">
        समीकरण (i) से,
        <InlineMath>{'(3m)^2 = 3q^2'}</InlineMath>
        9m<sup>2</sup> = 3q<sup>2</sup> 
        3m<sup>2</sup> = q<sup>2</sup>
      </p>

      <p className="mb-4">
        q = विषम संख्या है। अब, p और q में उभयनिष्ठ गुणनखंड 3 है।
        अतः हमारी मान्यता गलत है।
      </p>

      <p className="text-xl font-bold">
        <InlineMath>{'\\boxed{\\therefore \\sqrt{3} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
      </p>

      <p className="mt-4">Proved</p>

      <hr className="my-8" />

      <p className="mb-4">
        <span className="font-bold">प्रश्‍न 3:</span> सिद्ध करें कि 
        <InlineMath>{'\\sqrt{7}'}</InlineMath> एक अपरिमेय संख्या है?
      </p>
      
      <p className="mb-4">
        <span className="font-semibold">उत्तर:</span> 
        माना कि <InlineMath>{'\\sqrt{7}'}</InlineMath> एक परिमेय संख्या है।
        तब, <InlineMath>{'\\sqrt{7} = \\frac{p}{q}'}</InlineMath> जहाँ, p और q कोई धन पूर्णांक हैं और इनके बीच कोई उभयनिष्ठ गुणनखंड नहीं है।
        दोनों तरफ वर्ग करने पर,
        <InlineMath>{'\\left( \\sqrt{7} \\right)^2 = \\left( \\frac{p}{q} \\right)^2'}</InlineMath>
        7 = <InlineMath>{'\\frac{p^2}{q^2}'}</InlineMath>
      </p>

      <p className="mb-4">
        p<sup>2</sup> = 7q<sup>2</sup>  (i)  
        p = विषम संख्या है। ∵ विषम संख्या का वर्ग विषम ही होता है। 
        माना कि p = 7m
      </p>

      <p className="mb-4">
        समीकरण (i) से,
        <InlineMath>{'(7m)^2 = 7q^2'}</InlineMath>
        49m<sup>2</sup> = 7q<sup>2</sup> 
        7m<sup>2</sup> = q<sup>2</sup>
      </p>

      <p className="mb-4">
        q = विषम संख्या है। अब, p और q में उभयनिष्ठ गुणनखंड 7 है।
        अतः हमारी मान्यता गलत है।
      </p>

      <p className="text-xl font-bold">
        <InlineMath>{'\\boxed{\\therefore \\sqrt{7} \\text{ एक अपरिमेय संख्या है।}}'}</InlineMath>
      </p>

      <p className="mt-4">Proved</p>
    </div>
  );
};

export default ProofPage;
