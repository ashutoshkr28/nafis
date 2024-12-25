// import React from "react";
// import 'katex/dist/katex.min.css';
// import { InlineMath, BlockMath } from 'react-katex';

// const PolynomialInfo = () => {
//   return (
//     <div>
//       <h1>✤ Chapter-2</h1>
//       <h2>➤ रैखिक बहुपद</h2>
//       <ul className= "text-4xl">
//         <li>i) रैखिक बहुपद का व्यापक रूप <b><InlineMath math="ax + b" /></b> होता है।</li>
//         <li>ii) रैखिक बहुपद का घात <b><InlineMath math="1" /></b> होता है।</li>
//         <li>iii) रैखिक बहुपद का शून्यक <b><InlineMath math="1" /></b> होता है।</li>
//       </ul>

//       <h2>➤ द्विघात बहुपद</h2>
//       <ul className= "text-4xl">
//         <li>i) द्विघात बहुपद का घात <b><InlineMath math="2" /></b> होता है।</li>
//         <li>ii) द्विघात बहुपद का शून्यक <b><InlineMath math="2" /></b> होता है।</li>
//         <li>iii) द्विघात बहुपद का व्यापक रूप <b><InlineMath math="ax^2 + bx + c" /></b> होता है।</li>
//         <li>iv) शून्यकों का योगफल <b><InlineMath math="\alpha + \beta = \frac{-b}{a}" /></b></li>
//         <li>v) शून्यकों का गुणनफल <b><InlineMath math="\alpha \beta = \frac{c}{a}" /></b></li>
//       </ul>

//       <h2>➤ त्रिघात बहुपद</h2>
//       <ul className= "text-4xl">
//         <li>i) त्रिघात बहुपद का घात <b><InlineMath math="3" /></b> होता है।</li>
//         <li>ii) त्रिघात बहुपद का शून्यक <b><InlineMath math="3" /></b> होता है।</li>
//         <li>iii) त्रिघात बहुपद का व्याप्त रूप <b><InlineMath math="ax^3 + bx^2 + cx + d" /></b> होता है।</li>
//         <li>iv) शून्यकों का योगफल <b><InlineMath math="\alpha + \beta + \gamma = \frac{-b}{a}" /></b></li>
//         <li>v) दो-दो शून्यकों के गुणनफलों का योग <b><InlineMath  math="\alpha \beta + \beta \gamma + \gamma \alpha = \frac{c}{a}" /></b></li>
//         <li>vi) शून्यकों का गुणनफल <b><InlineMath math="\alpha \beta \gamma = \frac{-d}{a}" /></b></li>
//       </ul>
//     </div>
//   );
// };

// export default PolynomialInfo;




// import React from "react";
// import "katex/dist/katex.min.css";
// import { InlineMath } from "react-katex";

// const PolynomialInfo = () => {
//   return (
//     <div className="bg-gray-100 p-8 sm:p-12 lg:p-20">
//       <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
//       बहुपद  (Polynomial)
//       </h1>

//       <section className="mb-10">
//         <h2 className="text-3xl font-semibold text-blue-700 mb-6">➤ रैखिक बहुपद</h2>
//         <ul className="list-disc text-2xl space-y-4 pl-8">
//           <li>
//              रैखिक बहुपद का व्यापक  रूप <b><InlineMath math="ax + b" /></b> होता है।
//           </li>
//           <li>
//              रैखिक बहुपद का घात <b><InlineMath math="1" /></b> होता है।
//           </li>
//           <li>
//              रैखिक बहुपद का शून्यक <b><InlineMath math="1" /></b> होता है।
//           </li>
//         </ul>
//       </section>

//       <section className="mb-10">
//         <h2 className="text-3xl font-semibold text-blue-700 mb-6">➤ द्विघात बहुपद</h2>
//         <ul className="list-disc text-2xl space-y-4 pl-8">
//           <li>
//              द्विघात बहुपद का घात <b><InlineMath math="2" /></b> होता है।
//           </li>
//           <li>
//              द्विघात बहुपद का शून्यक <b><InlineMath math="2" /></b> होता है।
//           </li>
//           <li>
//              द्विघात बहुपद का व्यापक रूप <b><InlineMath math="ax^2 + bx + c" /></b> होता है।
//           </li>
//           <li>
//              शून्यकों का योगफल <b><InlineMath math="\alpha + \beta = \frac{-b}{a}" /></b>
//           </li>
//           <li>
//              शून्यकों का गुणनफल <b><InlineMath math="\alpha \beta = \frac{c}{a}" /></b>
//           </li>
//         </ul>
//       </section>

//       <section>
//         <h2 className="text-3xl font-semibold text-blue-700 mb-6">➤ त्रिघात बहुपद</h2>
//         <ul className="list-disc text-2xl space-y-4 pl-8">
//           <li>
//              त्रिघात बहुपद का घात <b><InlineMath math="3" /></b> होता है।
//           </li>
//           <li>
//              त्रिघात बहुपद का शून्यक <b><InlineMath math="3" /></b> होता है।
//           </li>
//           <li>
//              त्रिघात बहुपद का व्यापक रूप <b><InlineMath math="ax^3 + bx^2 + cx + d" /></b> होता है।
//           </li>
//           <li>
//              शून्यकों का योगफल <b><InlineMath math="\alpha + \beta + \gamma = \frac{-b}{a}" /></b>
//           </li>
//           <li>
//              दो-दो शून्यकों के गुणनफलों का योग <b><InlineMath math="\alpha \beta + \beta \gamma + \gamma \alpha = \frac{c}{a}" /></b>
//           </li>
//           <li>
//              शून्यकों का गुणनफल <b><InlineMath math="\alpha \beta \gamma = \frac{-d}{a}" /></b>
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default PolynomialInfo;




// import React from "react";
// import "katex/dist/katex.min.css";
// import { InlineMath } from "react-katex";

// const PolynomialInfo = () => {
//   return (
//     <div className="bg-gray-100 p-8 sm:p-12 lg:p-20">
//       <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
//         बहुपद (Polynomial)
//       </h1>

//       <section className="mb-10">
//         <h2 className="text-3xl font-semibold text-blue-700 mb-6">➤ रैखिक बहुपद</h2>
//         <ul className="list-disc text-2xl space-y-4 pl-8">
//           <li>
//             रैखिक बहुपद का व्यापक रूप{" "}
//             <span className="bg-white shadow p-2 rounded inline-block">
//               <InlineMath math="ax + b" />
//             </span>{" "}
//             होता है।
//           </li>
//           <li>
//             रैखिक बहुपद का घात{" "}
//             <span className="bg-white shadow p-2 rounded inline-block">
//               <InlineMath math="1" />
//             </span>{" "}
//             होता है।
//           </li>
//           <li>
//             रैखिक बहुपद का शून्यक{" "}
//             <span className="bg-white shadow p-2 rounded inline-block">
//               <InlineMath math="1" />
//             </span>{" "}
//             होता है।
//           </li>
//         </ul>
//       </section>

//       <section className="mb-10">
//         <h2 className="text-3xl font-semibold text-blue-700 mb-6">➤ द्विघात बहुपद</h2>
//         <ul className="list-disc text-2xl space-y-4 pl-8">
//           <li>
//             द्विघात बहुपद का घात{" "}
//             <span className="bg-white shadow p-2 rounded inline-block">
//               <InlineMath math="2" />
//             </span>{" "}
//             होता है।
//           </li>
//           <li>
//             द्विघात बहुपद का शून्यक{" "}
//             <span className="bg-white shadow p-2 rounded inline-block">
//               <InlineMath math="2" />
//             </span>{" "}
//             होता है।
//           </li>
//           <li>
//             द्विघात बहुपद का व्यापक रूप{" "}
//             <span className="bg-white shadow p-2 rounded inline-block">
//               <InlineMath math="ax^2 + bx + c" />
//             </span>{" "}
//             होता है।
//           </li>
//           <li>
//             शून्यकों का योगफल{" "}
//             <span className="bg-white shadow p-2 rounded inline-block">
//               <InlineMath math="\alpha + \beta = \frac{-b}{a}" />
//             </span>
//           </li>
//           <li>
//             शून्यकों का गुणनफल{" "}
//             <span className="bg-white shadow p-2 rounded inline-block">
//               <InlineMath math="\alpha \beta = \frac{c}{a}" />
//             </span>
//           </li>
//         </ul>
//       </section>

//       <section>
//         <h2 className="text-3xl font-semibold text-blue-700 mb-6">➤ त्रिघात बहुपद</h2>
//         <ul className="list-disc text-2xl space-y-4 pl-8">
//           <li>
//             त्रिघात बहुपद का घात{" "}
//             <span className="bg-white shadow p-2 rounded inline-block">
//               <InlineMath math="3" />
//             </span>{" "}
//             होता है।
//           </li>
//           <li>
//             त्रिघात बहुपद का शून्यक{" "}
//             <span className="bg-white shadow p-2 rounded inline-block">
//               <InlineMath math="3" />
//             </span>{" "}
//             होता है।
//           </li>
//           <li>
//             त्रिघात बहुपद का व्यापक रूप{" "}
//             <span className="bg-white shadow p-2 rounded inline-block">
//               <InlineMath math="ax^3 + bx^2 + cx + d" />
//             </span>{" "}
//             होता है।
//           </li>
//           <li>
//             शून्यकों का योगफल{" "}
//             <span className="bg-white shadow p-2 rounded inline-block">
//               <InlineMath math="\alpha + \beta + \gamma = \frac{-b}{a}" />
//             </span>
//           </li>
//           <li>
//             दो-दो शून्यकों के गुणनफलों का योग{" "}
//             <span className="bg-white shadow p-2 rounded inline-block">
//               <InlineMath math="\alpha \beta + \beta \gamma + \gamma \alpha = \frac{c}{a}" />
//             </span>
//           </li>
//           <li>
//             शून्यकों का गुणनफल{" "}
//             <span className="bg-white shadow p-2 rounded inline-block">
//               <InlineMath math="\alpha \beta \gamma = \frac{-d}{a}" />
//             </span>
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default PolynomialInfo;


// import React from "react";
// import "katex/dist/katex.min.css";
// import { InlineMath } from "react-katex";

// const PolynomialInfo = () => {
//   return (
//     <div className="bg-gray-100 p-8 sm:p-12 lg:p-20">
//       <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
//         बहुपद (Polynomial)
//       </h1>

//       {/* रैखिक बहुपद Section */}
//       <section className="mb-10">
//         <div className="bg-white shadow p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
//           <h2 className="text-3xl font-semibold text-blue-700 mb-6">➤ रैखिक बहुपद</h2>
//           <ul className="list-disc text-2xl space-y-4 pl-8">
//             <li>
//               रैखिक बहुपद का व्यापक रूप{" "}
//               <span className="bg-gray-100 shadow p-2 rounded inline-block">
//                 <InlineMath math="ax + b" />
//               </span>{" "}
//               होता है।
//             </li>
//             <li>
//               रैखिक बहुपद का घात{" "}
//               <span className="bg-gray-100 shadow p-2 rounded inline-block">
//                 <InlineMath math="1" />
//               </span>{" "}
//               होता है।
//             </li>
//             <li>
//               रैखिक बहुपद का शून्यक{" "}
//               <span className="bg-gray-100 shadow p-2 rounded inline-block">
//                 <InlineMath math="1" />
//               </span>{" "}
//               होता है।
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* द्विघात बहुपद Section */}
//       <section className="mb-10">
//         <div className="bg-white shadow p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
//           <h2 className="text-3xl font-semibold text-blue-700 mb-6">➤ द्विघात बहुपद</h2>
//           <ul className="list-disc text-2xl space-y-4 pl-8">
//             <li>
//               द्विघात बहुपद का घात{" "}
//               <span className="bg-gray-100 shadow p-2 rounded inline-block">
//                 <InlineMath math="2" />
//               </span>{" "}
//               होता है।
//             </li>
//             <li>
//               द्विघात बहुपद का शून्यक{" "}
//               <span className="bg-gray-100 shadow p-2 rounded inline-block">
//                 <InlineMath math="2" />
//               </span>{" "}
//               होता है।
//             </li>
//             <li>
//               द्विघात बहुपद का व्यापक रूप{" "}
//               <span className="bg-gray-100 shadow p-2 rounded inline-block">
//                 <InlineMath math="ax^2 + bx + c" />
//               </span>{" "}
//               होता है।
//             </li>
//             <li>
//               शून्यकों का योगफल{" "}
//               <span className="bg-gray-100 shadow p-2 rounded inline-block">
//                 <InlineMath math="\alpha + \beta = \frac{-b}{a}" />
//               </span>
//             </li>
//             <li>
//               शून्यकों का गुणनफल{" "}
//               <span className="bg-gray-100 shadow p-2 rounded inline-block">
//                 <InlineMath math="\alpha \beta = \frac{c}{a}" />
//               </span>
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* त्रिघात बहुपद Section */}
//       <section>
//         <div className="bg-white shadow p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
//           <h2 className="text-3xl font-semibold text-blue-700 mb-6">➤ त्रिघात बहुपद</h2>
//           <ul className="list-disc text-2xl space-y-4 pl-8">
//             <li>
//               त्रिघात बहुपद का घात{" "}
//               <span className="bg-gray-100 shadow p-2 rounded inline-block">
//                 <InlineMath math="3" />
//               </span>{" "}
//               होता है।
//             </li>
//             <li>
//               त्रिघात बहुपद का शून्यक{" "}
//               <span className="bg-gray-100 shadow p-2 rounded inline-block">
//                 <InlineMath math="3" />
//               </span>{" "}
//               होता है।
//             </li>
//             <li>
//               त्रिघात बहुपद का व्यापक रूप{" "}
//               <span className="bg-gray-100 shadow p-2 rounded inline-block">
//                 <InlineMath math="ax^3 + bx^2 + cx + d" />
//               </span>{" "}
//               होता है।
//             </li>
//             <li>
//               शून्यकों का योगफल{" "}
//               <span className="bg-gray-100 shadow p-2 rounded inline-block">
//                 <InlineMath math="\alpha + \beta + \gamma = \frac{-b}{a}" />
//               </span>
//             </li>
//             <li>
//               दो-दो शून्यकों के गुणनफलों का योग{" "}
//               <span className="bg-gray-100 shadow p-2 rounded inline-block">
//                 <InlineMath math="\alpha \beta + \beta \gamma + \gamma \alpha = \frac{c}{a}" />
//               </span>
//             </li>
//             <li>
//               शून्यकों का गुणनफल{" "}
//               <span className="bg-gray-100 shadow p-2 rounded inline-block">
//                 <InlineMath math="\alpha \beta \gamma = \frac{-d}{a}" />
//               </span>
//             </li>
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PolynomialInfo;






import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

const PolynomialInfo = () => {
  return (
    <div className="bg-gray-100 px-4 py-8 sm:px-8 sm:py-12 lg:px-20 lg:py-16">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-blue-800 mb-8">
        बहुपद (Polynomial)
      </h1>

      {/* रैखिक बहुपद Section */}
      <section className="mb-10">
        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-xl sm:text-3xl font-semibold text-blue-700 mb-4 sm:mb-6">
            ➤ रैखिक बहुपद
          </h2>
          <ul className="list-disc text-lg sm:text-2xl space-y-3 sm:space-y-4 pl-6 sm:pl-8">
            <li>
              रैखिक बहुपद का व्यापक रूप{" "}
              <span className="bg-gray-100 shadow p-1 sm:p-2 rounded inline-block">
                <InlineMath math="ax + b" />
              </span>{" "}
              होता है।
            </li>
            <li>
              रैखिक बहुपद का घात{" "}
              <span className="bg-gray-100 shadow p-1 sm:p-2 rounded inline-block">
                <InlineMath math="1" />
              </span>{" "}
              होता है।
            </li>
            <li>
              रैखिक बहुपद का शून्यक{" "}
              <span className="bg-gray-100 shadow p-1 sm:p-2 rounded inline-block">
                <InlineMath math="1" />
              </span>{" "}
              होता है।
            </li>
          </ul>
        </div>
      </section>

      {/* द्विघात बहुपद Section */}
      <section className="mb-10">
        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-xl sm:text-3xl font-semibold text-blue-700 mb-4 sm:mb-6">
            ➤ द्विघात बहुपद
          </h2>
          <ul className="list-disc text-lg sm:text-2xl space-y-3 sm:space-y-4 pl-6 sm:pl-8">
            <li>
              द्विघात बहुपद का घात{" "}
              <span className="bg-gray-100 shadow p-1 sm:p-2 rounded inline-block">
                <InlineMath math="2" />
              </span>{" "}
              होता है।
            </li>
            <li>
              द्विघात बहुपद का शून्यक{" "}
              <span className="bg-gray-100 shadow p-1 sm:p-2 rounded inline-block">
                <InlineMath math="2" />
              </span>{" "}
              होता है।
            </li>
            <li>
              द्विघात बहुपद का व्यापक रूप{" "}
              <span className="bg-gray-100 shadow p-1 sm:p-2 rounded inline-block">
                <InlineMath math="ax^2 + bx + c" />
              </span>{" "}
              होता है।
            </li>
            <li>
              शून्यकों का योगफल{" "}
              <span className="bg-gray-100 shadow p-1 sm:p-2 rounded inline-block">
                <InlineMath math="\alpha + \beta = \frac{-b}{a}" />
              </span>
            </li>
            <li>
              शून्यकों का गुणनफल{" "}
              <span className="bg-gray-100 shadow p-1 sm:p-2 rounded inline-block">
                <InlineMath math="\alpha \beta = \frac{c}{a}" />
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* त्रिघात बहुपद Section */}
      <section>
        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-xl sm:text-3xl font-semibold text-blue-700 mb-4 sm:mb-6">
            ➤ त्रिघात बहुपद
          </h2>
          <ul className="list-disc text-lg sm:text-2xl space-y-3 sm:space-y-4 pl-6 sm:pl-8">
            <li>
              त्रिघात बहुपद का घात{" "}
              <span className="bg-gray-100 shadow p-1 sm:p-2 rounded inline-block">
                <InlineMath math="3" />
              </span>{" "}
              होता है।
            </li>
            <li>
              त्रिघात बहुपद का शून्यक{" "}
              <span className="bg-gray-100 shadow p-1 sm:p-2 rounded inline-block">
                <InlineMath math="3" />
              </span>{" "}
              होता है।
            </li>
            <li>
              त्रिघात बहुपद का व्यापक रूप{" "}
              <span className="bg-gray-100 shadow p-1 sm:p-2 rounded inline-block">
                <InlineMath math="ax^3 + bx^2 + cx + d" />
              </span>{" "}
              होता है।
            </li>
            <li>
              शून्यकों का योगफल{" "}
              <span className="bg-gray-100 shadow p-1 sm:p-2 rounded inline-block">
                <InlineMath math="\alpha + \beta + \gamma = \frac{-b}{a}" />
              </span>
            </li>
            <li>
              दो-दो शून्यकों के गुणनफलों का योग{" "}
              <span className="bg-gray-100 shadow p-1 sm:p-2 rounded inline-block">
                <InlineMath math="\alpha \beta + \beta \gamma + \gamma \alpha = \frac{c}{a}" />
              </span>
            </li>
            <li>
              शून्यकों का गुणनफल{" "}
              <span className="bg-gray-100 shadow p-1 sm:p-2 rounded inline-block">
                <InlineMath math="\alpha \beta \gamma = \frac{-d}{a}" />
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PolynomialInfo;
