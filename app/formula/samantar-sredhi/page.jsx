// import React from "react";
// import 'katex/dist/katex.min.css';
// import { InlineMath, BlockMath } from 'react-katex';

// const Chapter5 = () => {
//   return (
//     <div>
//       <h1>Chapter-5: समांतर श्रेढ़ी</h1>
//       <ul>
//         <li>
//           <strong>समान्तर श्रेणी का nवाँ पद:</strong> 
//           <InlineMath math="t_n = a + (n - 1) d" />
//         </li>
//         <li>
//           <strong>n पदों का योगफल:</strong> 
//           <InlineMath math="S_n = \frac{n}{2} \times \left( 2a + (n - 1) d \right)" />
//           <ul>
//             <li>
//               जहाँ <InlineMath math="a" /> = प्रथम पद, <InlineMath math="d" /> = पंक्तांत या सार्थ अंतर
//             </li>
//             <li>
//               <InlineMath math="t_n" /> = nवाँ पद या अंतिम पद, <InlineMath math="S_n" /> = n पदों का योगफल
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>समान्तर श्रेणी का व्याप्त रूप:</strong> a, a + d, a + 2d, a + 3d, ...
//         </li>
//         <li>
//           <strong>समान्तर श्रेणी के परीक्षण से:</strong> <InlineMath math="a_2 - a_1 = a_3 - a_2" />
//         </li>
//         <li>
//           <strong>समान्तर श्रेणी में तीन संख्याएँ:</strong> α - β, α, α + β
//         </li>
//         <li>
//           <strong>समान्तर श्रेणी में चार संख्याएँ:</strong> α - 3β, α - β, α + β, α + 3β
//         </li>
//         <li>
//           <strong>a और b का समान्तर माध्य:</strong> <InlineMath math="\frac{a + b}{2}" />
//         </li>
//         <li>
//           <strong>प्रथम n प्राकृतिक संख्याओं का योगफल:</strong> 
//           <InlineMath math="S_n = \frac{n(n + 1)}{2}" />
//         </li>
//         <li>
//           <strong>प्रथम n सम प्राकृतिक संख्याओं का योगफल:</strong> 
//           <InlineMath math="S_n = n(n + 1)" />
//         </li>
//         <li>
//           <strong>प्रथम n विषम प्राकृतिक संख्याओं का योगफल:</strong> 
//           <InlineMath math="S_n = n^2" />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Chapter5;



// import React from "react";
// import "katex/dist/katex.min.css";
// import { InlineMath } from "react-katex";

// const Chapter5 = () => {
//   return (
//     <div className="bg-gray-100 p-8 sm:p-12 lg:p-16">
//       <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
//       समान्तर श्रेणी
//       </h1>

//       <ul className="text-2xl space-y-6">
//         <li>
//           <strong>समान्तर श्रेणी का nवाँ पद:</strong>{" "}
//           <InlineMath math="t_n = a + (n - 1) d" />
//         </li>
//         <li>
//           <strong>n पदों का योगफल:</strong>{" "}
//           <InlineMath math="S_n = \frac{n}{2} \times \left( 2a + (n - 1) d \right)" />
//           <ul className="ml-8 list-disc space-y-3">
//             <li>
//               जहाँ <InlineMath math="a" /> = प्रथम पद, <InlineMath math="d" /> = पंक्तांत या सार्थ अंतर
//             </li>
//             <li>
//               <InlineMath math="t_n" /> = nवाँ पद या अंतिम पद, <InlineMath math="S_n" /> = n पदों का योगफल
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>समान्तर श्रेणी का व्याप्त रूप:</strong> a, a + d, a + 2d, a + 3d, ...
//         </li>
//         <li>
//           <strong>समान्तर श्रेणी के परीक्षण से:</strong>{" "}
//           <InlineMath math="a_2 - a_1 = a_3 - a_2" />
//         </li>
//         <li>
//           <strong>समान्तर श्रेणी में तीन संख्याएँ:</strong>{" "}
//           <InlineMath math="\alpha - \beta, \alpha, \alpha + \beta" />
//         </li>
//         <li>
//           <strong>समान्तर श्रेणी में चार संख्याएँ:</strong>{" "}
//           <InlineMath math="\alpha - 3\beta, \alpha - \beta, \alpha + \beta, \alpha + 3\beta" />
//         </li>
//         <li>
//           <strong>a और b का समान्तर माध्य:</strong>{" "}
//           <InlineMath math="\frac{a + b}{2}" />
//         </li>
//         <li>
//           <strong>प्रथम n प्राकृतिक संख्याओं का योगफल:</strong>{" "}
//           <InlineMath math="S_n = \frac{n(n + 1)}{2}" />
//         </li>
//         <li>
//           <strong>प्रथम n सम प्राकृतिक संख्याओं का योगफल:</strong>{" "}
//           <InlineMath math="S_n = n(n + 1)" />
//         </li>
//         <li>
//           <strong>प्रथम n विषम प्राकृतिक संख्याओं का योगफल:</strong>{" "}
//           <InlineMath math="S_n = n^2" />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Chapter5;



import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

const Chapter5 = () => {
  return (
    <div className="bg-gray-100 px-4 py-8 sm:px-8 sm:py-12 lg:px-16">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-blue-800 mb-10">
        समांतर श्रेढ़ी (Arithmetic Progression)
      </h1>

      <div className="space-y-6">
        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-2xl  sm:text-2xl">समांतर श्रेढ़ी का n वाँ पद के लिए :</span> <br /> 
          <span className="text-base sm:text-2xl ml-2">
            <InlineMath math="t_n = a + (n - 1) d" />
          </span>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">n पदों का योगफल के लिए :</span>
          <p className="text-base sm:text-xl mt-2">
            <InlineMath math="S_n = \frac{n}{2} \times \left[ 2a + (n - 1) d \right]" />
          </p>
          <ul className="ml-4 sm:ml-8 list-disc mt-4 text-sm sm:text-lg space-y-2">
            <li>
              जहाँ <InlineMath math="a" /> = प्रथम पद, <span className="ml-2">  <InlineMath math="d" /> = पदांतर या सर्वां अंतर</span>
            </li>
            <li>
              <InlineMath math="t_n" /> = nवाँ पद या अंतिम पद, <span className="ml-2"> <InlineMath math="S_n" /> = n पदों का योगफल </span>
            </li>
          </ul>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 place-items-center rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">समांतर श्रेढ़ी का व्यापक रूप =</span> <br /> 
          <span className="text-lg sm:text-2xl ml-2">ɑ, ɑ + d, ɑ + 2d, ɑ + 3d, ............</span>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">समांतर श्रेढ़ी के परिभाषा से:</span> <br />
          <span className="text-base sm:text-2xl ml-2">
            <InlineMath math="a_2 - a_1 = a_3 - a_2" />
          </span>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">समांतर श्रेढ़ी में तीन संख्याएँ:</span>
          <span className="text-base sm:text-2xl ml-2">
            <InlineMath math="\alpha - \beta, \alpha, \alpha + \beta" />
          </span>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">समांतर श्रेढ़ी में चार संख्याएँ:</span> <br />
          <span className="text-base sm:text-2xl ml-2">
            <InlineMath math="\alpha - 3\beta, \alpha - \beta, \alpha + \beta, \alpha + 3\beta" />
          </span>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">ɑ और b का समांतर माध्य =</span>
          <span className="text-base sm:text-2xl ml-2">
            <InlineMath math="\frac{a + b}{2}" />
          </span>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">प्रथम n प्राकृतिक संख्याओं का योगफल:</span> <br />
          <span className="text-xl  sm:text-2xl ml-72 ">
            <InlineMath math="S_n = \frac{n(n + 1)}{2}" />
          </span>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">प्रथम n सम प्राकृतिक संख्याओं का योगफल:</span> <br /> 
          <span className="text-base sm:text-2xl ml-72">
            <InlineMath math="S_n = n(n + 1)" />
          </span>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">प्रथम n विषम प्राकृतिक संख्याओं का योगफल:</span> <br />
          <span className="text-base sm:text-2xl ml-72">
            <InlineMath math="S_n = n^2" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chapter5;
