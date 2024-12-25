// // import { InlineMath } from 'react-katex';
// // import 'katex/dist/katex.min.css';

// // export default function Chapter7() {
// //   return (
// //     <div>
// //       <h2>Chapter 7: नियामक ज्यामिति (Coordinate Geometry)</h2>

// //       <p>
// //         <span>1. मूलबिंदु से किसी बिंदु की दूरी:</span> <InlineMath math="OP = \sqrt{x^2 + y^2}" />
// //       </p>

// //       <p>
// //         <strong>2. दो बिंदुओं के बीच की दूरी:</strong> <InlineMath math="PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" />
// //       </p>

// //       <p>
// //         <strong>3. मध्यबिंदु का निर्देशांक:</strong> <InlineMath math="\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)" />
// //       </p>

// //       <p>
// //         <strong>4. त्रिभुज का क्षेत्रफल:</strong> 
// //         <InlineMath math="\text{Area} = \frac{1}{2} \left[x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\right]" />
// //       </p>

// //       <p>
// //         <strong>5. त्रिभुज के केंद्रक का निर्देशांक:</strong> 
// //         <InlineMath math="\left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right)" />
// //       </p>

// //       <p>
// //         <strong>6. विभाजन सूत्र:</strong> 
// //         <InlineMath math="\left(\frac{m_1x_2 + m_2x_1}{m_1 + m_2}, \frac{m_1y_2 + m_2y_1}{m_1 + m_2}\right)" />
// //       </p>

// //       <p>
// //         <strong>7. त्रिभुज के अंतःकेंद्र का निर्देशांक:</strong> 
// //         <InlineMath math="\left(\frac{ax_1 + bx_2 + cx_3}{a + b + c}, \frac{ay_1 + by_2 + cy_3}{a + b + c}\right)" />
// //       </p>
// //     </div>
// //   );
// // }




// import { InlineMath } from 'react-katex';
// import 'katex/dist/katex.min.css';

// export default function Chapter7() {
//   return (
//     <div className="bg-gray-100 p-6 md:p-10 lg:p-14">
//       <h2 className="text-4xl font-bold text-blue-700 text-center mb-8">
//        नियामक ज्यामिति (Coordinate Geometry)
//       </h2>

//       <ol className="list-decimal  text-2xl space-y-6">
//         <li>
//           <p>
//             <strong>मूलबिंदु से किसी बिंदु की दूरी:</strong>{' '}
//             <InlineMath math="OP = \sqrt{x^2 + y^2}" />
//           </p>
//         </li>

//         <li>
//           <p>
//             <strong>दो बिंदुओं के बीच की दूरी:</strong>{' '}
//             <InlineMath math="PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" />
//           </p>
//         </li>

//         <li>
//           <p>
//             <strong>मध्यबिंदु का निर्देशांक:</strong>{' '}
//             <InlineMath math="\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)" />
//           </p>
//         </li>

//         <li>
//           <p>
//             <strong>त्रिभुज का क्षेत्रफल:</strong>{' '}
//             <InlineMath math="\text{Area} = \frac{1}{2} \left[x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\right]" />
//           </p>
//         </li>

//         <li>
//           <p>
//             <strong>त्रिभुज के केंद्रक का निर्देशांक:</strong>{' '}
//             <InlineMath math="\left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right)" />
//           </p>
//         </li>

//         <li>
//           <p>
//             <strong>विभाजन सूत्र:</strong>{' '}
//             <InlineMath math="\left(\frac{m_1x_2 + m_2x_1}{m_1 + m_2}, \frac{m_1y_2 + m_2y_1}{m_1 + m_2}\right)" />
//           </p>
//         </li>

//         <li>
//           <p>
//             <strong>त्रिभुज के अंतःकेंद्र का निर्देशांक:</strong>{' '}
//             <InlineMath math="\left(\frac{ax_1 + bx_2 + cx_3}{a + b + c}, \frac{ay_1 + by_2 + cy_3}{a + b + c}\right)" />
//           </p>
//         </li>
//       </ol>
//     </div>
//   );
// }




// import { InlineMath } from 'react-katex';
// import 'katex/dist/katex.min.css';

// export default function Chapter7() {
//   return (
//     <div className="bg-gray-50 px-4 py-6 sm:px-6 lg:px-20 lg:py-10">
//       <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 text-center mb-6">
//         ✤ Chapter 7: नियामक ज्यामिति (Coordinate Geometry)
//       </h2>

//       <ol className="list-decimal space-y-6">
//         <li>
//           <p className="text-lg sm:text-xl lg:text-2xl">
//             <strong>मूलबिंदु से किसी बिंदु की दूरी:</strong>{' '}
//             <InlineMath math="OP = \sqrt{x^2 + y^2}" />
//           </p>
//         </li>

//         <li>
//           <p className="text-lg sm:text-xl lg:text-2xl">
//             <strong>दो बिंदुओं के बीच की दूरी:</strong>{' '}
//             <InlineMath math="PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" />
//           </p>
//         </li>

//         <li>
//           <p className="text-lg sm:text-xl lg:text-2xl">
//             <strong>मध्यबिंदु का निर्देशांक:</strong>{' '}
//             <InlineMath math="\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)" />
//           </p>
//         </li>

//         <li>
//           <p className="text-lg sm:text-xl lg:text-2xl">
//             <strong>त्रिभुज का क्षेत्रफल:</strong>{' '}
//             <InlineMath math="\text{Area} = \frac{1}{2} \left[x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\right]" />
//           </p>
//         </li>

//         <li>
//           <p className="text-lg sm:text-xl lg:text-2xl">
//             <strong>त्रिभुज के केंद्रक का निर्देशांक:</strong>{' '}
//             <InlineMath math="\left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right)" />
//           </p>
//         </li>

//         <li>
//           <p className="text-lg sm:text-xl lg:text-2xl">
//             <strong>विभाजन सूत्र:</strong>{' '}
//             <InlineMath math="\left(\frac{m_1x_2 + m_2x_1}{m_1 + m_2}, \frac{m_1y_2 + m_2y_1}{m_1 + m_2}\right)" />
//           </p>
//         </li>

//         <li>
//           <p className="text-lg sm:text-xl lg:text-2xl">
//             <strong>त्रिभुज के अंतःकेंद्र का निर्देशांक:</strong>{' '}
//             <InlineMath math="\left(\frac{ax_1 + bx_2 + cx_3}{a + b + c}, \frac{ay_1 + by_2 + cy_3}{a + b + c}\right)" />
//           </p>
//         </li>
//       </ol>
//     </div>
//   );
// }



import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function Chapter7() {
  return (
    <div className="bg-gray-50 px-4 py-6 sm:px-6 lg:px-20 lg:py-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 text-center mb-6">
        नियामक ज्यामिति (Coordinate Geometry)
      </h2>

      <div className="space-y-6">
        {/* Boxed sections for each formula */}
        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <p className="text-lg sm:text-xl lg:text-2xl">
            <span>मूलबिंदु से किसी बिंदु की दूरी:</span>{' '}
            <InlineMath math="OP = \sqrt{x^2 + y^2}" />
          </p>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <p className="text-lg sm:text-xl lg:text-2xl">
            <span>दो बिंदुओं के बीच की दूरी:</span>{' '}
            <InlineMath math="PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" />
          </p>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <p className="text-lg sm:text-xl lg:text-2xl">
            <span>मध्यबिंदु का निर्देशांक:</span>{' '}
            <InlineMath math="\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)" />
          </p>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <p className="text-lg sm:text-xl lg:text-2xl">
            <span>त्रिभुज का क्षेत्रफल:</span>{' '}
            <InlineMath math="\text{Area} = \frac{1}{2} \left[x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\right]" />
          </p>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <p className="text-lg sm:text-xl lg:text-2xl">
            <span>त्रिभुज के केंद्रक का निर्देशांक:</span>{' '}
            <InlineMath math="\left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right)" />
          </p>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <p className="text-lg sm:text-xl lg:text-2xl">
            <span>विभाजन सूत्र:</span>{' '}
            <InlineMath math="\left(\frac{m_1x_2 + m_2x_1}{m_1 + m_2}, \frac{m_1y_2 + m_2y_1}{m_1 + m_2}\right)" />
          </p>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <p className="text-lg sm:text-xl lg:text-2xl">
            <span>त्रिभुज के अंतःकेंद्र का निर्देशांक:</span>{' '}
            <InlineMath math="\left(\frac{ax_1 + bx_2 + cx_3}{a + b + c}, \frac{ay_1 + by_2 + cy_3}{a + b + c}\right)" />
          </p>
        </div>
      </div>
    </div>
  );
}
