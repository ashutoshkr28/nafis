// import React from "react";
// import 'katex/dist/katex.min.css';
// import { InlineMath } from 'react-katex';

// const Chapter8 = () => {
//   return (
//     <div>
//       <h1>Chapter-8: त्रिकोणमिति (Trigonometry)</h1>
//       <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", textAlign: "center" }}>
//         <thead>
//           <tr>
//             <th>ट्रिगुण</th>
//             <th>0°</th>
//             <th>30°</th>
//             <th>45°</th>
//             <th>60°</th>
//             <th>90°</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>sinθ</td>
//             <td>0</td>
//             <td><InlineMath math="\frac{1}{2}" /></td>
//             <td><InlineMath math="\frac{1}{\sqrt{2}}" /></td>
//             <td><InlineMath math="\frac{\sqrt{3}}{2}" /></td>
//             <td>1</td>
//           </tr>
//           <tr>
//             <td>cosθ</td>
//             <td>1</td>
//             <td><InlineMath math="\frac{\sqrt{3}}{2}" /></td>
//             <td><InlineMath math="\frac{1}{\sqrt{2}}" /></td>
//             <td><InlineMath math="\frac{1}{2}" /></td>
//             <td>0</td>
//           </tr>
//           <tr>
//             <td>tanθ</td>
//             <td>0</td>
//             <td><InlineMath math="\frac{1}{\sqrt{3}}" /></td>
//             <td>1</td>
//             <td><InlineMath math="\sqrt{3}" /></td>
//             <td>∞ (अपरिभाषित)</td>
//           </tr>
//           <tr>
//             <td>cotθ</td>
//             <td>∞ (अपरिभाषित)</td>
//             <td><InlineMath math="\sqrt{3}" /></td>
//             <td>1</td>
//             <td><InlineMath math="\frac{1}{\sqrt{3}}" /></td>
//             <td>0</td>
//           </tr>
//           <tr>
//             <td>cosecθ</td>
//             <td>∞ (अपरिभाषित)</td>
//             <td>2</td>
//             <td><InlineMath math="\sqrt{2}" /></td>
//             <td><InlineMath math="\frac{2}{\sqrt{3}}" /></td>
//             <td>1</td>
//           </tr>
//           <tr>
//             <td>secθ</td>
//             <td>1</td>
//             <td><InlineMath math="\frac{2}{\sqrt{3}}" /></td>
//             <td><InlineMath math="\sqrt{2}" /></td>
//             <td>2</td>
//             <td>∞ (अपरिभाषित)</td>
//           </tr>
//         </tbody>
//       </table>

//       <h2>प्रमुख त्रिकोणमितीय सूत्र</h2>
//       <ol>
//         <li><InlineMath math="\sin^2\theta + \cos^2\theta = 1" /></li>
//         <li><InlineMath math="\sin^2\theta = 1 - \cos^2\theta" /></li>
//         <li><InlineMath math="\cos^2\theta = 1 - \sin^2\theta" /></li>
//         <li><InlineMath math="\sec^2\theta - \tan^2\theta = 1" /></li>
//         <li><InlineMath math="\sec^2\theta = 1 + \tan^2\theta" /></li>
//         <li><InlineMath math="\tan^2\theta = \sec^2\theta - 1" /></li>
//         <li><InlineMath math="\csc^2\theta - \cot^2\theta = 1" /></li>
//         <li><InlineMath math="\csc^2\theta = 1 + \cot^2\theta" /></li>
//         <li><InlineMath math="\cot^2\theta = \csc^2\theta - 1" /></li>
//         <li><InlineMath math="\sin\theta \cdot \csc\theta = 1" /></li>
//         <li><InlineMath math="\sin\theta = \frac{1}{\csc\theta}" /></li>
//       </ol>
//     </div>
//   );
// };

// export default Chapter8;




// import React from "react";
// import 'katex/dist/katex.min.css';
// import { InlineMath } from 'react-katex';

// const Chapter8 = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">
//         Chapter-8: त्रिकोणमिति (Trigonometry)
//       </h1>
      
//       <table className="min-w-full table-auto border-collapse border border-gray-300 mb-6">
//         <thead className="bg-blue-500 text-white">
//           <tr>
//             <th className="py-3 px-4 border-b">ट्रिगुण</th>
//             <th className="py-3 px-4 border-b">0°</th>
//             <th className="py-3 px-4 border-b">30°</th>
//             <th className="py-3 px-4 border-b">45°</th>
//             <th className="py-3 px-4 border-b">60°</th>
//             <th className="py-3 px-4 border-b">90°</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">sinθ</td>
//             <td className="py-2 px-4 border-b">0</td>
//             <td className="py-2 px-4 border-b"><InlineMath math="\frac{1}{2}" /></td>
//             <td className="py-2 px-4 border-b"><InlineMath math="\frac{1}{\sqrt{2}}" /></td>
//             <td className="py-2 px-4 border-b"><InlineMath math="\frac{\sqrt{3}}{2}" /></td>
//             <td className="py-2 px-4 border-b">1</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">cosθ</td>
//             <td className="py-2 px-4 border-b">1</td>
//             <td className="py-2 px-4 border-b"><InlineMath math="\frac{\sqrt{3}}{2}" /></td>
//             <td className="py-2 px-4 border-b"><InlineMath math="\frac{1}{\sqrt{2}}" /></td>
//             <td className="py-2 px-4 border-b"><InlineMath math="\frac{1}{2}" /></td>
//             <td className="py-2 px-4 border-b">0</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">tanθ</td>
//             <td className="py-2 px-4 border-b">0</td>
//             <td className="py-2 px-4 border-b"><InlineMath math="\frac{1}{\sqrt{3}}" /></td>
//             <td className="py-2 px-4 border-b">1</td>
//             <td className="py-2 px-4 border-b"><InlineMath math="\sqrt{3}" /></td>
//             <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">cotθ</td>
//             <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
//             <td className="py-2 px-4 border-b"><InlineMath math="\sqrt{3}" /></td>
//             <td className="py-2 px-4 border-b">1</td>
//             <td className="py-2 px-4 border-b"><InlineMath math="\frac{1}{\sqrt{3}}" /></td>
//             <td className="py-2 px-4 border-b">0</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">cosecθ</td>
//             <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
//             <td className="py-2 px-4 border-b">2</td>
//             <td className="py-2 px-4 border-b"><InlineMath math="\sqrt{2}" /></td>
//             <td className="py-2 px-4 border-b"><InlineMath math="\frac{2}{\sqrt{3}}" /></td>
//             <td className="py-2 px-4 border-b">1</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">secθ</td>
//             <td className="py-2 px-4 border-b">1</td>
//             <td className="py-2 px-4 border-b"><InlineMath math="\frac{2}{\sqrt{3}}" /></td>
//             <td className="py-2 px-4 border-b"><InlineMath math="\sqrt{2}" /></td>
//             <td className="py-2 px-4 border-b">2</td>
//             <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
//           </tr>
//         </tbody>
//       </table>

//       <h2 className="text-2xl font-semibold text-blue-700 mb-4">प्रमुख त्रिकोणमितीय सूत्र</h2>
//       <ol className="list-decimal ml-6 space-y-2">
//         <li><InlineMath math="\sin^2\theta + \cos^2\theta = 1" /></li>
//         <li><InlineMath math="\sin^2\theta = 1 - \cos^2\theta" /></li>
//         <li><InlineMath math="\cos^2\theta = 1 - \sin^2\theta" /></li>
//         <li><InlineMath math="\sec^2\theta - \tan^2\theta = 1" /></li>
//         <li><InlineMath math="\sec^2\theta = 1 + \tan^2\theta" /></li>
//         <li><InlineMath math="\tan^2\theta = \sec^2\theta - 1" /></li>
//         <li><InlineMath math="\csc^2\theta - \cot^2\theta = 1" /></li>
//         <li><InlineMath math="\csc^2\theta = 1 + \cot^2\theta" /></li>
//         <li><InlineMath math="\cot^2\theta = \csc^2\theta - 1" /></li>
//         <li><InlineMath math="\sin\theta \cdot \csc\theta = 1" /></li>
//         <li><InlineMath math="\sin\theta = \frac{1}{\csc\theta}" /></li>
//         <li>
//           <InlineMath math="\csc\theta = \frac{1}{\sin\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\cos\theta \cdot \sec\theta = 1" />
//         </li>
//         <li>
//           <InlineMath math="\cos\theta = \frac{1}{\sec\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\sec\theta = \frac{1}{\cos\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\tan\theta \cdot \cot\theta = 1" />
//         </li>
//         <li>
//           <InlineMath math="\tan\theta = \frac{1}{\cot\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\cot\theta = \frac{1}{\tan\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\tan\theta = \frac{\sin\theta}{\cos\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\cot\theta = \frac{\cos\theta}{\sin\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\sin(90^\circ - \theta) = \cos\theta" />
//         </li>
//         <li>
//           <InlineMath math="\cos(90^\circ - \theta) = \sin\theta" />
//         </li>
//         <li>
//           <InlineMath math="\tan(90^\circ - \theta) = \cot\theta" />
//         </li>
//         <li>
//           <InlineMath math="\cot(90^\circ - \theta) = \tan\theta" />
//         </li>
//         <li>
//           <InlineMath math="\sec(90^\circ - \theta) = \csc\theta" />
//         </li>
//         <li>
//           <InlineMath math="\csc(90^\circ - \theta) = \sec\theta" />
//         </li>
//         <li>
//           <InlineMath math="\sin\theta = \frac{p}{h}" />
//         </li>
//         <li>
//           <InlineMath math="\csc\theta = \frac{h}{p}" />
//         </li>
//         <li>
//           <InlineMath math="\cos\theta = \frac{b}{h}" />
//         </li>
//         <li>
//           <InlineMath math="\sec\theta = \frac{h}{b}" />
//         </li>
//         <li>
//           <InlineMath math="\tan\theta = \frac{p}{b}" />
//         </li>
//         <li>
//           <InlineMath math="\cot\theta = \frac{b}{p}" />
//         </li>
//         <li>
//           <InlineMath math="\cos^2\theta = 1 - \sin^2\theta" />
//         </li>
//         <li>
//           <InlineMath math="\sec^2\theta - \tan^2\theta = 1" />
//         </li>
//         <li>
//           <InlineMath math="\sec^2\theta = 1 + \tan^2\theta" />
//         </li>
     
//       <h2>Right Triangle Diagram</h2>
//       <img
//         src="/triangle-diagram.jpeg"
//         alt="Right Triangle Diagram"
//         style={{ maxWidth: '300px', marginTop: '20px' }}
//       />
     
//       </ol>
//        {/* <h2>Right Triangle Diagram</h2>
//        <img
//          src="/triangle-diagram.jpeg"
//          alt="Right Triangle Diagram"
//          style={{ maxWidth: '300px', marginTop: '20px' }} */}
//        {/* /> */}
//     </div>
//   );
// };

// export default Chapter8;





// import React from "react";
// import "katex/dist/katex.min.css";
// import { InlineMath } from "react-katex";

// const Chapter8 = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">
//         Chapter-8: त्रिकोणमिति (Trigonometry)
//       </h1>

//       {/* Trigonometric Ratios Table */}
//       <table className="min-w-full table-auto border-collapse border border-gray-300 mb-8">
//         <thead className="bg-blue-500 text-white">
//           <tr>
//             <th className="py-3 px-4 border-b">ट्रिगुण</th>
//             <th className="py-3 px-4 border-b">0°</th>
//             <th className="py-3 px-4 border-b">30°</th>
//             <th className="py-3 px-4 border-b">45°</th>
//             <th className="py-3 px-4 border-b">60°</th>
//             <th className="py-3 px-4 border-b">90°</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">sinθ</td>
//             <td className="py-2 px-4 border-b">0</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{\sqrt{2}}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{\sqrt{3}}{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">1</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">cosθ</td>
//             <td className="py-2 px-4 border-b">1</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{\sqrt{3}}{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{\sqrt{2}}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">0</td>
//           </tr>
//           {/* Add remaining rows for tanθ, cotθ, cosecθ, secθ */}
//         </tbody>
//       </table>

//       {/* Key Formulas Section */}
//       <h2 className="text-2xl font-semibold text-blue-700 mb-4">
//         प्रमुख त्रिकोणमितीय सूत्र
//       </h2>
//       <ol className="list-decimal ml-6 space-y-2">
//         <li>
//           <InlineMath math="\sin^2\theta + \cos^2\theta = 1" />
//         </li>
//         <li>
//           <InlineMath math="\sin^2\theta = 1 - \cos^2\theta" />
//         </li>
//         <li>
//           <InlineMath math="\cos^2\theta = 1 - \sin^2\theta" />
//         </li>
//         <li>
//           <InlineMath math="\sec^2\theta - \tan^2\theta = 1" />
//         </li>
//         <li>
//           <InlineMath math="\sec^2\theta = 1 + \tan^2\theta" />
//         </li>
//         {/* Add remaining formulas */}
//       </ol>

//       {/* Right Triangle Diagram Section */}
//       <h2 className="text-2xl font-semibold text-blue-700 mt-8">
//         Right Triangle Diagram
//       </h2>
//       <div className="flex justify-center mt-4">
//         <img
//           src="/triangle-diagram.jpeg"
//           alt="Right Triangle Diagram"
//           className="max-w-xs sm:max-w-sm lg:max-w-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default Chapter8;






// import React from "react";
// import "katex/dist/katex.min.css";
// import { InlineMath } from "react-katex";

// const Chapter8 = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">
//         Chapter-8: त्रिकोणमिति (Trigonometry)
//       </h1>

//       {/* Trigonometric Ratios Table */}
//       <table className="min-w-full table-auto border-collapse border border-gray-300 mb-8">
//         <thead className="bg-blue-500 text-white">
//           <tr>
//             <th className="py-3 px-4 border-b">ट्रिगुण</th>
//             <th className="py-3 px-4 border-b">0°</th>
//             <th className="py-3 px-4 border-b">30°</th>
//             <th className="py-3 px-4 border-b">45°</th>
//             <th className="py-3 px-4 border-b">60°</th>
//             <th className="py-3 px-4 border-b">90°</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">sinθ</td>
//             <td className="py-2 px-4 border-b">0</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{\sqrt{2}}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{\sqrt{3}}{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">1</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">cosθ</td>
//             <td className="py-2 px-4 border-b">1</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{\sqrt{3}}{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{\sqrt{2}}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">0</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">tanθ</td>
//             <td className="py-2 px-4 border-b">0</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{\sqrt{3}}" />
//             </td>
//             <td className="py-2 px-4 border-b">1</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\sqrt{3}" />
//             </td>
//             <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">cotθ</td>
//             <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\sqrt{3}" />
//             </td>
//             <td className="py-2 px-4 border-b">1</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{\sqrt{3}}" />
//             </td>
//             <td className="py-2 px-4 border-b">0</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">cosecθ</td>
//             <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
//             <td className="py-2 px-4 border-b">2</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\sqrt{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{2}{\sqrt{3}}" />
//             </td>
//             <td className="py-2 px-4 border-b">1</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">secθ</td>
//             <td className="py-2 px-4 border-b">1</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{2}{\sqrt{3}}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\sqrt{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">2</td>
//             <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
//           </tr>
//         </tbody>
//       </table>

//       {/* Key Trigonometric Formulas */}
//       <h2 className="text-2xl font-semibold text-blue-700 mb-4 ">
//         प्रमुख त्रिकोणमितीय सूत्र
//       </h2>
//       <ol className="list-decimal ml-8 space-y-2">
//         <li>
//           <InlineMath math="\sin^2\theta + \cos^2\theta = 1" />
//         </li>
//         <li>
//           <InlineMath math="\sin^2\theta = 1 - \cos^2\theta" />
//         </li>
//         <li>
//           <InlineMath math="\cos^2\theta = 1 - \sin^2\theta" />
//         </li>
//         <li>
//           <InlineMath math="\sec^2\theta - \tan^2\theta = 1" />
//         </li>
//         <li>
//           <InlineMath math="\sec^2\theta = 1 + \tan^2\theta" />
//         </li>
//         <li>
//           <InlineMath math="\tan^2\theta = \sec^2\theta - 1" />
//         </li>
//         <li>
//           <InlineMath math="\csc^2\theta - \cot^2\theta = 1" />
//         </li>
//         <li>
//           <InlineMath math="\csc^2\theta = 1 + \cot^2\theta" />
//         </li>
//         <li>
//           <InlineMath math="\cot^2\theta = \csc^2\theta - 1" />
//         </li>
//         <li>
//           <InlineMath math="\sin\theta \cdot \csc\theta = 1" />
//         </li>
//         <li>
//           <InlineMath math="\sin\theta = \frac{1}{\csc\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\csc\theta = \frac{1}{\sin\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\cos\theta \cdot \sec\theta = 1" />
//         </li>
//         <li>
//           <InlineMath math="\cos\theta = \frac{1}{\sec\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\sec\theta = \frac{1}{\cos\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\tan\theta \cdot \cot\theta = 1" />
//         </li>
//         <li>
//           <InlineMath math="\tan\theta = \frac{1}{\cot\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\cot\theta = \frac{1}{\tan\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\tan\theta = \frac{\sin\theta}{\cos\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\cot\theta = \frac{\cos\theta}{\sin\theta}" />
//         </li>
//         <li>
//           <InlineMath math="\sin(90^\circ - \theta) = \cos\theta" />
//         </li>
//         <li>
//           <InlineMath math="\cos(90^\circ - \theta) = \sin\theta" />
//         </li>
//         <li>
//           <InlineMath math="\tan(90^\circ - \theta) = \cot\theta" />
//         </li>
//         <li>
//           <InlineMath math="\cot(90^\circ - \theta) = \tan\theta" />
//         </li>
//       </ol>

//       {/* Right Triangle Diagram Section */}
//       <h2 className="text-2xl font-semibold text-blue-700 mt-8">
//         Right Triangle Diagram
//       </h2>
//       <div className="flex justify-center mt-4">
//         <img
//           src="/triangle-diagram.jpeg"
//           alt="Right Triangle Diagram"
//           className="max-w-xs sm:max-w-sm lg:max-w-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default Chapter8;






// import React from "react";
// import "katex/dist/katex.min.css";
// import { InlineMath } from "react-katex";

// const Chapter8 = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">
//         Chapter-8: त्रिकोणमिति (Trigonometry)
//       </h1>

//       {/* Trigonometric Ratios Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto border-collapse border border-gray-300 mb-8 shadow-lg rounded-lg">
//           <caption className="text-lg font-medium text-gray-700 py-2">
//             Trigonometric Ratios
//           </caption>
//           <thead className="bg-blue-500 text-white">
//             <tr>
//               <th className="py-3 px-4 border-b">ट्रिगुण</th>
//               <th className="py-3 px-4 border-b">0°</th>
//               <th className="py-3 px-4 border-b">30°</th>
//               <th className="py-3 px-4 border-b">45°</th>
//               <th className="py-3 px-4 border-b">60°</th>
//               <th className="py-3 px-4 border-b">90°</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               { name: "sinθ", values: ["0", "\\frac{1}{2}", "\\frac{1}{\\sqrt{2}}", "\\frac{\\sqrt{3}}{2}", "1"] },
//               { name: "cosθ", values: ["1", "\\frac{\\sqrt{3}}{2}", "\\frac{1}{\\sqrt{2}}", "\\frac{1}{2}", "0"] },
//               { name: "tanθ", values: ["0", "\\frac{1}{\\sqrt{3}}", "1", "\\sqrt{3}", "∞ (अपरिभाषित)"] },
//               { name: "cotθ", values: ["∞ (अपरिभाषित)", "\\sqrt{3}", "1", "\\frac{1}{\\sqrt{3}}", "0"] },
//               { name: "cosecθ", values: ["∞ (अपरिभाषित)", "2", "\\sqrt{2}", "\\frac{2}{\\sqrt{3}}", "1"] },
//               { name: "secθ", values: ["1", "\\frac{2}{\\sqrt{3}}", "\\sqrt{2}", "2", "∞ (अपरिभाषित)"] },
//             ].map((row, rowIndex) => (
//               <tr
//                 key={row.name}
//                 className={`text-center ${
//                   rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
//                 } hover:bg-blue-100`}
//               >
//                 <td className="py-2 px-4 border-b font-medium">{row.name}</td>
//                 {row.values.map((value, colIndex) => (
//                   <td key={colIndex} className="py-2 px-4 border-b">
//                     {value.startsWith("\\") ? (
//                       <InlineMath math={value} />
//                     ) : (
//                       value
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Key Trigonometric Formulas */}
//       <h2 className="text-2xl font-semibold text-blue-700 mb-4">
//         प्रमुख त्रिकोणमितीय सूत्र
//       </h2>
//       <ol className="list-decimal ml-8 space-y-2">
//         {[
//           "\\sin^2\\theta + \\cos^2\\theta = 1",
//           "\\sin^2\\theta = 1 - \\cos^2\\theta",
//           "\\cos^2\\theta = 1 - \\sin^2\\theta",
//           "\\sec^2\\theta - \\tan^2\\theta = 1",
//           "\\sec^2\\theta = 1 + \\tan^2\\theta",
//           "\\tan^2\\theta = \\sec^2\\theta - 1",
//           "\\csc^2\\theta - \\cot^2\\theta = 1",
//           "\\csc^2\\theta = 1 + \\cot^2\\theta",
//           "\\cot^2\\theta = \\csc^2\\theta - 1",
//           "\\sin\\theta \\cdot \\csc\\theta = 1",
//           "\\sin\\theta = \\frac{1}{\\csc\\theta}",
//           "\\csc\\theta = \\frac{1}{\\sin\\theta}",
//           "\\cos\\theta \\cdot \\sec\\theta = 1",
//           "\\cos\\theta = \\frac{1}{\\sec\\theta}",
//           "\\sec\\theta = \\frac{1}{\\cos\\theta}",
//           "\\tan\\theta \\cdot \\cot\\theta = 1",
//           "\\tan\\theta = \\frac{1}{\\cot\\theta}",
//           "\\cot\\theta = \\frac{1}{\\tan\\theta}",
//           "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
//           "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
//           "\\sin(90^\\circ - \\theta) = \\cos\\theta",
//           "\\cos(90^\\circ - \\theta) = \\sin\\theta",
//           "\\tan(90^\\circ - \\theta) = \\cot\\theta",
//           "\\cot(90^\\circ - \\theta) = \\tan\\theta",
//         ].map((formula, index) => (
//           <li key={index}>
//             <InlineMath math={formula} />
//           </li>
//         ))}
//       </ol>

//       {/* Right Triangle Diagram Section */}
//       <h2 className="text-2xl font-semibold text-blue-700 mt-8">
//         Right Triangle Diagram
//       </h2>
//       <div className="flex justify-center mt-4">
//         <img
//           src="/triangle-diagram.jpeg"
//           alt="Right Triangle showing angles and sides labeled"
//           className="max-w-xs sm:max-w-sm lg:max-w-md rounded-lg shadow-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default Chapter8;






// import React from "react";
// import "katex/dist/katex.min.css";
// import { InlineMath } from "react-katex";

// const Chapter8 = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">
//         Chapter-8: त्रिकोणमिति (Trigonometry)
//       </h1>

//       {/* Trigonometric Ratios Table */}
//       <table className="min-w-full table-auto border-collapse border border-gray-300 mb-8">
//         <thead className="bg-blue-500 text-white">
//           <tr>
//             <th className="py-3 px-4 border-b">ट्रिगुण</th>
//             <th className="py-3 px-4 border-b">0°</th>
//             <th className="py-3 px-4 border-b">30°</th>
//             <th className="py-3 px-4 border-b">45°</th>
//             <th className="py-3 px-4 border-b">60°</th>
//             <th className="py-3 px-4 border-b">90°</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">sinθ</td>
//             <td className="py-2 px-4 border-b">0</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{\sqrt{2}}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{\sqrt{3}}{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">1</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">cosθ</td>
//             <td className="py-2 px-4 border-b">1</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{\sqrt{3}}{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{\sqrt{2}}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">0</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">tanθ</td>
//             <td className="py-2 px-4 border-b">0</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{\sqrt{3}}" />
//             </td>
//             <td className="py-2 px-4 border-b">1</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\sqrt{3}" />
//             </td>
//             <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">cotθ</td>
//             <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\sqrt{3}" />
//             </td>
//             <td className="py-2 px-4 border-b">1</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{1}{\sqrt{3}}" />
//             </td>
//             <td className="py-2 px-4 border-b">0</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">cosecθ</td>
//             <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
//             <td className="py-2 px-4 border-b">2</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\sqrt{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{2}{\sqrt{3}}" />
//             </td>
//             <td className="py-2 px-4 border-b">1</td>
//           </tr>
//           <tr className="text-center">
//             <td className="py-2 px-4 border-b">secθ</td>
//             <td className="py-2 px-4 border-b">1</td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\frac{2}{\sqrt{3}}" />
//             </td>
//             <td className="py-2 px-4 border-b">
//               <InlineMath math="\sqrt{2}" />
//             </td>
//             <td className="py-2 px-4 border-b">2</td>
//             <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
//           </tr>
//         </tbody>
//       </table>

//       {/* Key Trigonometric Formulas */}
//       <div className="border border-gray-300 bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-semibold text-blue-700 mb-4">
//           प्रमुख त्रिकोणमितीय सूत्र
//         </h2>
//         <ol className="list-decimal ml-8 space-y-2">
//           {[
//             "\\sin^2\\theta + \\cos^2\\theta = 1",
//             "\\sin^2\\theta = 1 - \\cos^2\\theta",
//             "\\cos^2\\theta = 1 - \\sin^2\\theta",
//             "\\sec^2\\theta - \\tan^2\\theta = 1",
//             "\\sec^2\\theta = 1 + \\tan^2\\theta",
//             "\\tan^2\\theta = \\sec^2\\theta - 1",
//             "\\csc^2\\theta - \\cot^2\\theta = 1",
//             "\\csc^2\\theta = 1 + \\cot^2\\theta",
//             "\\cot^2\\theta = \\csc^2\\theta - 1",
//             "\\sin\\theta \\cdot \\csc\\theta = 1",
//             "\\sin\\theta = \\frac{1}{\\csc\\theta}",
//             "\\csc\\theta = \\frac{1}{\\sin\\theta}",
//             "\\cos\\theta \\cdot \\sec\\theta = 1",
//             "\\cos\\theta = \\frac{1}{\\sec\\theta}",
//             "\\sec\\theta = \\frac{1}{\\cos\\theta}",
//             "\\tan\\theta \\cdot \\cot\\theta = 1",
//             "\\tan\\theta = \\frac{1}{\\cot\\theta}",
//             "\\cot\\theta = \\frac{1}{\\tan\\theta}",
//             "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
//             "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
//             "\\sin(90^\\circ - \\theta) = \\cos\\theta",
//             "\\cos(90^\\circ - \\theta) = \\sin\\theta",
//             "\\tan(90^\\circ - \\theta) = \\cot\\theta",
//             "\\cot(90^\\circ - \\theta) = \\tan\\theta",
//           ].map((formula, index) => (
//             <li key={index}>
//               <InlineMath math={formula} />
//             </li>
//           ))}
//         </ol>
//       </div>

//       {/* Right Triangle Diagram Section */}
//       <h2 className="text-2xl font-semibold text-blue-700 mt-8">
//         Right Triangle Diagram
//       </h2>
//       <div className="flex justify-center mt-4">
//         <img
//           src="/triangle-diagram.jpeg"
//           alt="Right Triangle Diagram"
//           className="max-w-xs sm:max-w-sm lg:max-w-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default Chapter8;




import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

const Chapter8 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">
        त्रिकोणमिति (Trigonometry)
      </h1>

      {/* Trigonometric Table with Formulas */}
      <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white shadow-lg">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-3 px-4 border-b">सूत्र/अनुपात</th>
            <th className="py-3 px-4 border-b">Formula</th>
          </tr>
        </thead>
        <tbody>
          {/* Trigonometric Ratios */}
          <tr>
            <td className="py-3 px-4 border-b">sin, cos, tan (0°, 30°, 45°, 60°, 90°)</td>
            <td className="py-3 px-4 border-b">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-3 border-b">θ</th>
                    <th className="py-2 px-3 border-b">sinθ</th>
                    <th className="py-2 px-3 border-b">cosθ</th>
                    <th className="py-2 px-3 border-b">tanθ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="py-2 px-3 border-b">0°</td>
                    <td className="py-2 px-3 border-b">0</td>
                    <td className="py-2 px-3 border-b">1</td>
                    <td className="py-2 px-3 border-b">0</td>
                  </tr>
                  <tr className="text-center">
                    <td className="py-2 px-3 border-b">30°</td>
                    <td className="py-2 px-3 border-b">
                      <InlineMath math="\frac{1}{2}" />
                    </td>
                    <td className="py-2 px-3 border-b">
                      <InlineMath math="\frac{\sqrt{3}}{2}" />
                    </td>
                    <td className="py-2 px-3 border-b">
                      <InlineMath math="\frac{1}{\sqrt{3}}" />
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="py-2 px-3 border-b">45°</td>
                    <td className="py-2 px-3 border-b">
                      <InlineMath math="\frac{1}{\sqrt{2}}" />
                    </td>
                    <td className="py-2 px-3 border-b">
                      <InlineMath math="\frac{1}{\sqrt{2}}" />
                    </td>
                    <td className="py-2 px-3 border-b">1</td>
                  </tr>
                  <tr className="text-center">
                    <td className="py-2 px-3 border-b">60°</td>
                    <td className="py-2 px-3 border-b">
                      <InlineMath math="\frac{\sqrt{3}}{2}" />
                    </td>
                    <td className="py-2 px-3 border-b">
                      <InlineMath math="\frac{1}{2}" />
                    </td>
                    <td className="py-2 px-3 border-b">
                      <InlineMath math="\sqrt{3}" />
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="py-2 px-3 border-b">90°</td>
                    <td className="py-2 px-3 border-b">1</td>
                    <td className="py-2 px-3 border-b">0</td>
                    <td className="py-2 px-3 border-b">∞ (अपरिभाषित)</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Fundamental Trigonometric Identities */}
          <tr>
            <td className="py-3 px-4 border-b">Fundamental Identities</td>
            <td className="py-3 px-4 border-b">
              <InlineMath math="\sin^2\theta + \cos^2\theta = 1" />,{" "}
              <InlineMath math="\sec^2\theta - \tan^2\theta = 1" />,{" "}
              <InlineMath math="\csc^2\theta - \cot^2\theta = 1" />
            </td>
          </tr>

          {/* Reciprocal Identities */}
          <tr>
            <td className="py-3 px-4 border-b">Reciprocal Identities</td>
            <td className="py-3 px-4 border-b">
              <InlineMath math="\sin\theta = \frac{1}{\csc\theta}" />,{" "}
              <InlineMath math="\cos\theta = \frac{1}{\sec\theta}" />,{" "}
              <InlineMath math="\tan\theta = \frac{1}{\cot\theta}" />
            </td>
          </tr>

          {/* Ratio Identities */}
          <tr>
            <td className="py-3 px-4 border-b">Ratio Identities</td>
            <td className="py-3 px-4 border-b">
              <InlineMath math="\tan\theta = \frac{\sin\theta}{\cos\theta}" />,{" "}
              <InlineMath math="\cot\theta = \frac{\cos\theta}{\sin\theta}" />
            </td>
          </tr>

          {/* Complementary Angles */}
          <tr>
            <td className="py-3 px-4 border-b">Complementary Angles</td>
            <td className="py-3 px-4 border-b">
              <InlineMath math="\sin(90^\circ - \theta) = \cos\theta" />,{" "}
              <InlineMath math="\cos(90^\circ - \theta) = \sin\theta" />,{" "}
              <InlineMath math="\tan(90^\circ - \theta) = \cot\theta" />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Right Triangle Diagram Section */}
      <h2 className="text-2xl font-semibold text-blue-700 mt-8">
        Right Triangle Diagram
      </h2>
      <div className="flex justify-center mt-4">
        <img
          src="/triangle-diagram.jpeg"
          alt="Right Triangle Diagram"
          className="max-w-xs sm:max-w-sm lg:max-w-md"
        />
      </div>
    </div>
  );
};

export default Chapter8;
