// import React from "react";
// import 'katex/dist/katex.min.css';
// import { InlineMath, BlockMath } from 'react-katex';

// const Chapter3 = () => {
//   return (
//     <div>
//       <h2>✤ Chapter-3</h2>
//       <h3>➤ दो चर वाले रैखिक समीकरण का व्याप्त रूप:</h3>
//       <p className="text-4xl">
//         <strong>
//           <InlineMath math="a_1 x + b_1 y + c_1 = 0" />
//         </strong>,{" "}
//         <strong>
//           <InlineMath math="a_2 x + b_2 y + c_2 = 0" />
//         </strong>
//       </p>

//       <ul className="text-4xl">
//         <li>
//           <strong>जब</strong>{" "}
//           <em>
//             <InlineMath math="\frac{a_1}{a_2} \neq \frac{b_1}{b_2}" />
//           </em>:
//           <ul>
//             <li>i) प्रतिछेदी रेखा</li>
//             <li>ii) केवल एक हल (अद्वितीय हल)</li>
//             <li>iii) युग्म संगत (अविरोधी)</li>
//           </ul>
//         </li>

//         <li>
//           <strong>जब</strong>{" "}
//           <em>
//             <InlineMath math="\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}" />
//           </em>:
//           <ul className="text-4xl">
//             <li>i) रेखा समानांतर</li>
//             <li>ii) कोई हल नहीं</li>
//             <li>iii) युग्म असंगत (विरोधी)</li>
//           </ul>
//         </li>

//         <li>
//           <strong>जब</strong>{" "}
//           <em>
//             <InlineMath math="\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}" />
//           </em>:
//           <ul>
//             <li>i) रेखा संपाती</li>
//             <li>ii) अपरिमित रूप से अनेक हल होंगे</li>
//             <li>iii) युग्म संगत (आश्रित)</li>
//           </ul>
//         </li>
//       </ul>

//       <h3>➤ बर्ज गुणन विधि:</h3>
//       <p className="text-4xl">
//         <strong>
//           <InlineMath math="x = \frac{b_1 c_2 - b_2 c_1}{b_1 a_2 - b_2 a_1}" />,{" "}
//           <InlineMath math="y = \frac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1}" />
//         </strong>
//       </p>
//     </div>
//   );
// };

// export default Chapter3;




// import React from "react";
// import "katex/dist/katex.min.css";
// import { InlineMath } from "react-katex";

// const Chapter3 = () => {
//   return (
//     <div className="bg-gray-100 p-8 sm:p-12 lg:p-16">
//       <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
//         दो चर वाले रैखिक समीकरण
//       </h1>

//       <section className="mb-10">
//         <h2 className="text-3xl font-semibold text-blue-700 mb-6">
//           ➤ दो चर वाले रैखिक समीकरण का व्याप्त रूप:
//         </h2>
//         <p className="text-2xl mb-6">
//           <strong>
//             <InlineMath math="a_1 x + b_1 y + c_1 = 0" />
//           </strong>,{" "}
//           <strong>
//             <InlineMath math="a_2 x + b_2 y + c_2 = 0" />
//           </strong>
//         </p>

//         <ul className="text-2xl space-y-6">
//           <li>
//             <strong>जब</strong>{" "}
//             <em>
//               <InlineMath math="\frac{a_1}{a_2} \neq \frac{b_1}{b_2}" />
//             </em>:
//             <ul className="list-disc pl-8 mt-2 space-y-2">
//               <li>i) प्रतिछेदी रेखा</li>
//               <li>ii) केवल एक हल (अद्वितीय हल)</li>
//               <li>iii) युग्म संगत (अविरोधी)</li>
//             </ul>
//           </li>

//           <li>
//             <strong>जब</strong>{" "}
//             <em>
//               <InlineMath math="\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}" />
//             </em>:
//             <ul className="list-disc pl-8 mt-2 space-y-2">
//               <li>i) रेखा समानांतर</li>
//               <li>ii) कोई हल नहीं</li>
//               <li>iii) युग्म असंगत (विरोधी)</li>
//             </ul>
//           </li>

//           <li>
//             <strong>जब</strong>{" "}
//             <em>
//               <InlineMath math="\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}" />
//             </em>:
//             <ul className="list-disc pl-8 mt-2 space-y-2">
//               <li>i) रेखा संपाती</li>
//               <li>ii) अपरिमित रूप से अनेक हल होंगे</li>
//               <li>iii) युग्म संगत (आश्रित)</li>
//             </ul>
//           </li>
//         </ul>
//       </section>

//       <section>
//         <h2 className="text-3xl font-semibold text-blue-700 mb-6">
//           ➤ बर्ज गुणन विधि:
//         </h2>
//         <p className="text-2xl">
//           <strong>
//             <InlineMath math="x = \frac{b_1 c_2 - b_2 c_1}{b_1 a_2 - b_2 a_1}" />,{" "}
//             <InlineMath math="y = \frac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1}" />
//           </strong>
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Chapter3;











import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

const Chapter3 = () => {
  return (
    <div className="bg-gray-100 px-4 py-8 sm:px-8 sm:py-12 lg:px-16">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-blue-800 mb-10">
        दो चर वाले रैखिक समीकरण
      </h1>

      {/* व्याप्त रूप Section */}
      <section className="mb-10">
        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-xl sm:text-3xl font-semibold text-blue-700 mb-4 sm:mb-6">
            ➤ दो चर वाले रैखिक समीकरण का व्याप्त रूप:
          </h2>
          <p className="text-lg sm:text-2xl mb-4 sm:mb-6">
            <strong>
              <InlineMath math="a_1 x + b_1 y + c_1 = 0" />
            </strong>,{" "}
            <strong>
              <InlineMath math="a_2 x + b_2 y + c_2 = 0" />
            </strong>
          </p>

          <ul className="text-lg sm:text-2xl space-y-4 sm:space-y-6">
            <li>
              <strong>जब</strong>{" "}
              <em>
                <InlineMath math="\frac{a_1}{a_2} \neq \frac{b_1}{b_2}" />
              </em>:
              <ul className="list-disc pl-6 sm:pl-8 mt-2 space-y-2">
                <li>i) प्रतिछेदी रेखा</li>
                <li>ii) केवल एक हल (अद्वितीय हल)</li>
                <li>iii) युग्म संगत (अविरोधी)</li>
              </ul>
            </li>

            <li>
              <strong>जब</strong>{" "}
              <em>
                <InlineMath math="\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}" />
              </em>:
              <ul className="list-disc pl-6 sm:pl-8 mt-2 space-y-2">
                <li>i) रेखा समानांतर</li>
                <li>ii) कोई हल नहीं</li>
                <li>iii) युग्म असंगत (विरोधी)</li>
              </ul>
            </li>

            <li>
              <strong>जब</strong>{" "}
              <em>
                <InlineMath math="\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}" />
              </em>:
              <ul className="list-disc pl-6 sm:pl-8 mt-2 space-y-2">
                <li>i) रेखा संपाती</li>
                <li>ii) अपरिमित रूप से अनेक हल होंगे</li>
                <li>iii) युग्म संगत (आश्रित)</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* बर्ज गुणन विधि Section */}
      <section>
        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-xl sm:text-3xl font-semibold text-blue-700 mb-4 sm:mb-6">
            ➤ बर्ज गुणन विधि:
          </h2>
          <p className="text-lg sm:text-2xl">
            <strong>
              <InlineMath math="x = \frac{b_1 c_2 - b_2 c_1}{b_1 a_2 - b_2 a_1}" />,{" "}
              <InlineMath math="y = \frac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1}" />
            </strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Chapter3;
