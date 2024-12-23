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




import React from "react";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const Chapter8 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">
        Chapter-8: त्रिकोणमिति (Trigonometry)
      </h1>
      
      <table className="min-w-full table-auto border-collapse border border-gray-300 mb-6">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-3 px-4 border-b">ट्रिगुण</th>
            <th className="py-3 px-4 border-b">0°</th>
            <th className="py-3 px-4 border-b">30°</th>
            <th className="py-3 px-4 border-b">45°</th>
            <th className="py-3 px-4 border-b">60°</th>
            <th className="py-3 px-4 border-b">90°</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="py-2 px-4 border-b">sinθ</td>
            <td className="py-2 px-4 border-b">0</td>
            <td className="py-2 px-4 border-b"><InlineMath math="\frac{1}{2}" /></td>
            <td className="py-2 px-4 border-b"><InlineMath math="\frac{1}{\sqrt{2}}" /></td>
            <td className="py-2 px-4 border-b"><InlineMath math="\frac{\sqrt{3}}{2}" /></td>
            <td className="py-2 px-4 border-b">1</td>
          </tr>
          <tr className="text-center">
            <td className="py-2 px-4 border-b">cosθ</td>
            <td className="py-2 px-4 border-b">1</td>
            <td className="py-2 px-4 border-b"><InlineMath math="\frac{\sqrt{3}}{2}" /></td>
            <td className="py-2 px-4 border-b"><InlineMath math="\frac{1}{\sqrt{2}}" /></td>
            <td className="py-2 px-4 border-b"><InlineMath math="\frac{1}{2}" /></td>
            <td className="py-2 px-4 border-b">0</td>
          </tr>
          <tr className="text-center">
            <td className="py-2 px-4 border-b">tanθ</td>
            <td className="py-2 px-4 border-b">0</td>
            <td className="py-2 px-4 border-b"><InlineMath math="\frac{1}{\sqrt{3}}" /></td>
            <td className="py-2 px-4 border-b">1</td>
            <td className="py-2 px-4 border-b"><InlineMath math="\sqrt{3}" /></td>
            <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
          </tr>
          <tr className="text-center">
            <td className="py-2 px-4 border-b">cotθ</td>
            <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
            <td className="py-2 px-4 border-b"><InlineMath math="\sqrt{3}" /></td>
            <td className="py-2 px-4 border-b">1</td>
            <td className="py-2 px-4 border-b"><InlineMath math="\frac{1}{\sqrt{3}}" /></td>
            <td className="py-2 px-4 border-b">0</td>
          </tr>
          <tr className="text-center">
            <td className="py-2 px-4 border-b">cosecθ</td>
            <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
            <td className="py-2 px-4 border-b">2</td>
            <td className="py-2 px-4 border-b"><InlineMath math="\sqrt{2}" /></td>
            <td className="py-2 px-4 border-b"><InlineMath math="\frac{2}{\sqrt{3}}" /></td>
            <td className="py-2 px-4 border-b">1</td>
          </tr>
          <tr className="text-center">
            <td className="py-2 px-4 border-b">secθ</td>
            <td className="py-2 px-4 border-b">1</td>
            <td className="py-2 px-4 border-b"><InlineMath math="\frac{2}{\sqrt{3}}" /></td>
            <td className="py-2 px-4 border-b"><InlineMath math="\sqrt{2}" /></td>
            <td className="py-2 px-4 border-b">2</td>
            <td className="py-2 px-4 border-b">∞ (अपरिभाषित)</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">प्रमुख त्रिकोणमितीय सूत्र</h2>
      <ol className="list-decimal ml-6 space-y-2">
        <li><InlineMath math="\sin^2\theta + \cos^2\theta = 1" /></li>
        <li><InlineMath math="\sin^2\theta = 1 - \cos^2\theta" /></li>
        <li><InlineMath math="\cos^2\theta = 1 - \sin^2\theta" /></li>
        <li><InlineMath math="\sec^2\theta - \tan^2\theta = 1" /></li>
        <li><InlineMath math="\sec^2\theta = 1 + \tan^2\theta" /></li>
        <li><InlineMath math="\tan^2\theta = \sec^2\theta - 1" /></li>
        <li><InlineMath math="\csc^2\theta - \cot^2\theta = 1" /></li>
        <li><InlineMath math="\csc^2\theta = 1 + \cot^2\theta" /></li>
        <li><InlineMath math="\cot^2\theta = \csc^2\theta - 1" /></li>
        <li><InlineMath math="\sin\theta \cdot \csc\theta = 1" /></li>
        <li><InlineMath math="\sin\theta = \frac{1}{\csc\theta}" /></li>
        <li>
          <InlineMath math="\csc\theta = \frac{1}{\sin\theta}" />
        </li>
        <li>
          <InlineMath math="\cos\theta \cdot \sec\theta = 1" />
        </li>
        <li>
          <InlineMath math="\cos\theta = \frac{1}{\sec\theta}" />
        </li>
        <li>
          <InlineMath math="\sec\theta = \frac{1}{\cos\theta}" />
        </li>
        <li>
          <InlineMath math="\tan\theta \cdot \cot\theta = 1" />
        </li>
        <li>
          <InlineMath math="\tan\theta = \frac{1}{\cot\theta}" />
        </li>
        <li>
          <InlineMath math="\cot\theta = \frac{1}{\tan\theta}" />
        </li>
        <li>
          <InlineMath math="\tan\theta = \frac{\sin\theta}{\cos\theta}" />
        </li>
        <li>
          <InlineMath math="\cot\theta = \frac{\cos\theta}{\sin\theta}" />
        </li>
        <li>
          <InlineMath math="\sin(90^\circ - \theta) = \cos\theta" />
        </li>
        <li>
          <InlineMath math="\cos(90^\circ - \theta) = \sin\theta" />
        </li>
        <li>
          <InlineMath math="\tan(90^\circ - \theta) = \cot\theta" />
        </li>
        <li>
          <InlineMath math="\cot(90^\circ - \theta) = \tan\theta" />
        </li>
        <li>
          <InlineMath math="\sec(90^\circ - \theta) = \csc\theta" />
        </li>
        <li>
          <InlineMath math="\csc(90^\circ - \theta) = \sec\theta" />
        </li>
        <li>
          <InlineMath math="\sin\theta = \frac{p}{h}" />
        </li>
        <li>
          <InlineMath math="\csc\theta = \frac{h}{p}" />
        </li>
        <li>
          <InlineMath math="\cos\theta = \frac{b}{h}" />
        </li>
        <li>
          <InlineMath math="\sec\theta = \frac{h}{b}" />
        </li>
        <li>
          <InlineMath math="\tan\theta = \frac{p}{b}" />
        </li>
        <li>
          <InlineMath math="\cot\theta = \frac{b}{p}" />
        </li>
        <li>
          <InlineMath math="\cos^2\theta = 1 - \sin^2\theta" />
        </li>
        <li>
          <InlineMath math="\sec^2\theta - \tan^2\theta = 1" />
        </li>
        <li>
          <InlineMath math="\sec^2\theta = 1 + \tan^2\theta" />
        </li>
     
      <h2>Right Triangle Diagram</h2>
      <img
        src="/triangle-diagram.jpeg"
        alt="Right Triangle Diagram"
        style={{ maxWidth: '300px', marginTop: '20px' }}
      />
     
      </ol>
       {/* <h2>Right Triangle Diagram</h2>
       <img
         src="/triangle-diagram.jpeg"
         alt="Right Triangle Diagram"
         style={{ maxWidth: '300px', marginTop: '20px' }} */}
       {/* /> */}
    </div>
  );
};

export default Chapter8;
