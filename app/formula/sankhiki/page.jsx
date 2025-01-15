// import React from "react";
// import { InlineMath } from "react-katex";

// const Chapter14 = () => {
//   return (
//     <div className="p-8 bg-white shadow-md rounded-md">
//       <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
//         ✦ Chapter-14
//       </h1>
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">
//         सांख्यिकी सूत्र
//       </h2>

//       <ol className="space-y-6 text-gray-800">
//         <li>
//           <p className="text-lg">
//             <span className="font-bold">i)</span>{" "}
//             <InlineMath math="\text{माध्य } A = \frac{\Sigma f x}{\Sigma f}" />
//           </p>
//         </li>
//         <li>
//           <p className="text-lg">
//             <span className="font-bold">ii)</span>{" "}
//             <InlineMath math="\text{माध्यिका } M = L + \frac{\frac{N}{2} - F}{f} \cdot i" />
//           </p>
//           <div className="ml-6 text-gray-600 mt-2">
//             <p>
//               <InlineMath math="\text{जहाँ, } L = \text{माध्यिका वर्ग की निम्न सीमा,}" />
//             </p>
//             <p>
//               <InlineMath math="f = \text{माध्यिका वर्ग की बारंबारता,}" />
//             </p>
//             <p>
//               <InlineMath math="N = \text{कुल बारंबारता} = \Sigma f," />
//             </p>
//             <p>
//               <InlineMath math="F = \text{माध्यिका वर्ग के ठीक पहले वाले वर्ग की संचयी बारंबारता,}" />
//             </p>
//             <p>
//               <InlineMath math="i = \text{माध्यिका वर्ग की लंबाई।}" />
//             </p>
//           </div>
//         </li>
//         <li>
//           <p className="text-lg">
//             <span className="font-bold">iii)</span>{" "}
//             <InlineMath math="\text{बहुलक } M_0 = L + \frac{f_0 - f_{-1}}{2f_0 - f_{-1} - f_1} \cdot i" />
//           </p>
//           <div className="ml-6 text-gray-600 mt-2">
//             <p>
//               <InlineMath math="\text{जहाँ, } L = \text{बहुलक वर्ग की निम्न सीमा,}" />
//             </p>
//             <p>
//               <InlineMath math="f_0 = \text{बहुलक वर्ग की बारंबारता,}" />
//             </p>
//             <p>
//               <InlineMath math="f_{-1} = \text{बहुलक वर्ग के ठीक पहले वाले वर्ग की बारंबारता,}" />
//             </p>
//             <p>
//               <InlineMath math="f_1 = \text{बहुलक वर्ग के ठीक बाद वाले वर्ग की बारंबारता,}" />
//             </p>
//             <p>
//               <InlineMath math="i = \text{वर्ग-अंतरालों की सामान्य लंबाई।}" />
//             </p>
//           </div>
//         </li>
//         <li>
//           <p className="text-lg">
//             <span className="font-bold">iv)</span>{" "}
//             <InlineMath math="\text बहुलक = 3 \times माध्यिका - 2 \times माध्य" />
//           </p>
//         </li>
//       </ol>
//     </div>
//   );
// };

// export default Chapter14;


// import React from "react";
// import { InlineMath } from "react-katex";

// const Chapter14 = () => {
//   return (
//     <div className="p-8 bg-gray-50 shadow-lg rounded-md max-w-3xl mx-auto">
//       <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
//         सांख्यिकी सूत्र
//       </h2>

//       <ol className="space-y-6 text-gray-800">
//         <li>
//           <p className="text-lg">
//             <span className="font-bold text-blue-600">i)</span>{" "}
//             <InlineMath math="\text{माध्य } A = \frac{\Sigma f x}{\Sigma f}" />
//           </p>
//         </li>
//         <li>
//           <p className="text-lg">
//             <span className="font-bold text-blue-600">ii)</span>{" "}
//             <InlineMath math="\text{माध्यिका } M = L + \frac{\frac{N}{2} - F}{f} \cdot i" />
//           </p>
//           <div className="ml-6 text-gray-600 mt-2 bg-gray-100 p-4 rounded-lg shadow-sm">
//             <p>
//               <InlineMath math="\text{जहाँ, } L = \text{माध्यिका वर्ग की निम्न सीमा,}" />
//             </p>
//             <p>
//               <InlineMath math="f = \text{माध्यिका वर्ग की बारंबारता,}" />
//             </p>
//             <p>
//               <InlineMath math="N = \text{कुल बारंबारता} = \Sigma f," />
//             </p>
//             <p>
//               <InlineMath math="F = \text{माध्यिका वर्ग के ठीक पहले वाले वर्ग की संचयी बारंबारता,}" />
//             </p>
//             <p>
//               <InlineMath math="i = \text{माध्यिका वर्ग की लंबाई।}" />
//             </p>
//           </div>
//         </li>
//         <li>
//           <p className="text-lg">
//             <span className="font-bold text-blue-600">iii)</span>{" "}
//             <InlineMath math="\text{बहुलक } M_0 = L + \frac{f_0 - f_{-1}}{2f_0 - f_{-1} - f_1} \cdot i" />
//           </p>
//           <div className="ml-6 text-gray-600 mt-2 bg-gray-100 p-4 rounded-lg shadow-sm">
//             <p>
//               <InlineMath math="\text{जहाँ, } L = \text{बहुलक वर्ग की निम्न सीमा,}" />
//             </p>
//             <p>
//               <InlineMath math="f_0 = \text{बहुलक वर्ग की बारंबारता,}" />
//             </p>
//             <p>
//               <InlineMath math="f_{-1} = \text{बहुलक वर्ग के ठीक पहले वाले वर्ग की बारंबारता,}" />
//             </p>
//             <p>
//               <InlineMath math="f_1 = \text{बहुलक वर्ग के ठीक बाद वाले वर्ग की बारंबारता,}" />
//             </p>
//             <p>
//               <InlineMath math="i = \text{वर्ग-अंतरालों की सामान्य लंबाई।}" />
//             </p>
//           </div>
//         </li>
//         <li>
//           <p className="text-lg">
//             <span className="font-bold text-blue-600">iv)</span>{" "}
//             <InlineMath math="\text{बहुलक} = 3 \times \text{माध्यिका} - 2 \times \text{माध्य}" />
//           </p>
//         </li>
//       </ol>
//     </div>
//   );
// };

// export default Chapter14;




// import React from "react";
// import { InlineMath } from "react-katex";

// const ExplanationBlock = ({ details }) => (
//   <div className="ml-6 text-gray-600 mt-2 bg-gray-100 p-4 rounded-lg shadow-sm">
//     {details.map((detail, index) => (
//       <p key={index}>
//         <InlineMath math={detail} />
//       </p>
//     ))}
//   </div>
// );

// const Chapter14 = () => {
//   return (
//     <div className="p-8 bg-gray-50 shadow-lg rounded-md max-w-3xl mx-auto">
//       <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
//         सांख्यिकी सूत्र
//       </h2>

//       <ol className="space-y-6 text-gray-800">
//         {/* Formula 1 */}
//         <li className="hover:bg-blue-50 p-4 rounded-lg transition">
//           <p className="text-lg">
//             <span className="font-bold text-blue-600">i)</span>{" "}
//             <InlineMath math="\text{माध्य } A = \frac{\Sigma f x}{\Sigma f}" />
//           </p>
//         </li>

//         {/* Formula 2 */}
//         <li className="hover:bg-blue-50 p-4 rounded-lg transition">
//           <p className="text-lg">
//             <span className="font-bold text-blue-600">ii)</span>{" "}
//             <InlineMath math="\text{माध्यिका } M = L + \frac{\frac{N}{2} - F}{f} \cdot i" />
//           </p>
//           <ExplanationBlock
//             details={[
//               "\\text{जहाँ, } L = \\text{माध्यिका वर्ग की निम्न सीमा,}",
//               "f = \\text{माध्यिका वर्ग की बारंबारता,}",
//               "N = \\text{कुल बारंबारता} = \\Sigma f,",
//               "F = \\text{माध्यिका वर्ग के ठीक पहले वाले वर्ग की संचयी बारंबारता,}",
//               "i = \\text{माध्यिका वर्ग की लंबाई।}",
//             ]}
//           />
//         </li>

//         {/* Formula 3 */}
//         <li className="hover:bg-blue-50 p-4 rounded-lg transition">
//           <p className="text-lg">
//             <span className="font-bold text-blue-600">iii)</span>{" "}
//             <InlineMath math="\text{बहुलक } M_0 = L + \frac{f_0 - f_{-1}}{2f_0 - f_{-1} - f_1} \cdot i" />
//           </p>
//           <ExplanationBlock
//             details={[
//               "\\text{जहाँ, } L = \\text{बहुलक वर्ग की निम्न सीमा,}",
//               "f_0 = \\text{बहुलक वर्ग की बारंबारता,}",
//               "f_{-1} = \\text{बहुलक वर्ग के ठीक पहले वाले वर्ग की बारंबारता,}",
//               "f_1 = \\text{बहुलक वर्ग के ठीक बाद वाले वर्ग की बारंबारता,}",
//               "i = \\text{वर्ग-अंतरालों की सामान्य लंबाई।}",
//             ]}
//           />
//         </li>

//         {/* Formula 4 */}
//         <li className="hover:bg-blue-50 p-4 rounded-lg transition">
//           <p className="text-lg">
//             <span className="font-bold text-blue-600">iv)</span>{" "}
//             <InlineMath math="\text{बहुलक} = 3 \times \text{माध्यिका} - 2 \times \text{माध्य}" />
//           </p>
//         </li>
//       </ol>
//     </div>
//   );
// };

// export default Chapter14;








import React from "react";
import { InlineMath, BlockMath } from "react-katex";

const Chapter14 = () => {
  return (
    <div className="p-8 bg-gray-50 shadow-lg rounded-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        सांख्यिकी सूत्र
      </h2>

      <ol className="space-y-6 text-gray-800">
        {/* Formula 1 */}
        <li className="hover:bg-blue-50 p-4 rounded-lg transition">
          <p className="text-lg">
            <span className="font-bold text-blue-600">i)</span>{" "}
            <InlineMath math="\text{माध्य} \; A = \frac{\Sigma f x}{\Sigma f}" />
          </p>
        </li>

        {/* Formula 2 */}
        <li className="hover:bg-blue-50 p-4 rounded-lg transition">
          <p className="text-lg">
            <span className="font-bold text-blue-600">ii)</span>{" "}
            <InlineMath math="\text{माध्यिका} \; M = L + \frac{\frac{N}{2} - F}{f} \cdot i" />
          </p>
          <ul className="ml-6 text-gray-600 mt-2 bg-gray-100 p-4 rounded-lg shadow-sm">
            <li>
              <InlineMath math="\text{माध्यिका वर्ग: जहाँ} \; \frac{N}{2} \; \text{इससे ठीक बड़ी संचयी बारंबारता के संगत वर्ग-अंतराल को माध्यिका-वर्ग कहलाता है।}" />
            </li>
            <li>
              <InlineMath math="L = \text{माध्यिका-वर्ग की निम्न सीमा}" />
            </li>
            <li>
              <InlineMath math="f = \text{माध्यिका-वर्ग की बारंबारता}" />
            </li>
            <li>
              <InlineMath math="N = \text{कुल बारंबारता} = \Sigma f" />
            </li>
            <li>
              <InlineMath math="F = \text{माध्यिका-वर्ग के ठीक पहले वाले वर्ग की संचयी बारंबारता}" />
            </li>
            <li>
              <InlineMath math="i = \text{माध्यिका-वर्ग की लंबाई।}" />
            </li>
          </ul>
        </li>

        {/* Formula 3 */}
        <li className="hover:bg-blue-50 p-4 rounded-lg transition">
          <p className="text-lg">
            <span className="font-bold text-blue-600">iii)</span>{" "}
            <InlineMath math="\text{बहुलक} \; M_0 = L + \frac{f_0 - f_{-1}}{2f_0 - f_{-1} - f_1} \cdot i" />
          </p>
          <ul className="ml-6 text-gray-600 mt-2 bg-gray-100 p-4 rounded-lg shadow-sm">
            <li>
              <InlineMath math="\text{बहुलक वर्ग: सर्वाधिक बारंबारता वाला वर्ग बहुलक वर्ग कहलाता है।}" />
            </li>
            <li>
              <InlineMath math="L = \text{बहुलक वर्ग की निम्न सीमा}" />
            </li>
            <li>
              <InlineMath math="f_0 = \text{बहुलक वर्ग की बारंबारता}" />
            </li>
            <li>
              <InlineMath math="f_{-1} = \text{बहुलक वर्ग के ठीक पहले वाले वर्ग की बारंबारता}" />
            </li>
            <li>
              <InlineMath math="f_1 = \text{बहुलक वर्ग के ठीक बाद वाले वर्ग की बारंबारता}" />
            </li>
            <li>
              <InlineMath math="i = \text{वर्ग-अंतरालों की सामान्य लंबाई।}" />
            </li>
          </ul>
        </li>

        {/* Formula 4 */}
        <li className="hover:bg-blue-50 p-4 rounded-lg transition">
          <p className="text-lg">
            <span className="font-bold text-blue-600">iv)</span>{" "}
            <InlineMath math="\text{बहुलक} = 3 \times \text{माध्यिका} - 2 \times \text{माध्य}" />
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Chapter14;
