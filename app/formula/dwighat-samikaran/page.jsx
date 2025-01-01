// import React from "react";
// import 'katex/dist/katex.min.css';
// import { InlineMath, BlockMath } from 'react-katex';

// const Chapter4 = () => {
//   return (
//     <div>
//       <h1>Chapter-4: द्विघात समीकरण</h1>
//       <ul>
//         <li>
//           <span>द्विघात समीकरण का व्याप्त रूप:</span>{" "}
//           <InlineMath math="ax^2 + bx + c = 0" />
//         </li>
//         <li>
//           <strong>विविक्तकार (विवेचक):</strong>{" "}
//           <InlineMath math="D = b^2 - 4ac" />
//         </li>
//         <li>
//           <strong>द्विघात सूत्र:</strong>{" "}
//           <span>
//             <InlineMath math="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
//           </span>
//         </li>
//         <li>
//           <strong>जब D = 0:</strong> तब मूल वास्तविक और समान होंगे।
//         </li>
//         <li>
//           <strong>जब D &gt; 0:</strong> तब मूल वास्तविक और असमान होंगे।
//         </li>
//         <li>
//           <strong>जब D &lt; 0:</strong> तब मूल वास्तविक नहीं होंगे।
//         </li>
//         <li>
//           <strong>मूलों का योग (α + β):</strong> <InlineMath math="-\frac{b}{a}" />
//         </li>
//         <li>
//           <strong>मूलों का गुणनफल (α × β):</strong> <InlineMath math="\frac{c}{a}" />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Chapter4;




// import React from "react";
// import "katex/dist/katex.min.css";
// import { InlineMath } from "react-katex";

// const Chapter4 = () => {
//   return (
//     <div className="bg-gray-100 p-8 sm:p-12 lg:p-16">
//       <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
//         द्विघात समीकरण
//       </h1>

//       <ul className="text-2xl space-y-6">
//         <li>
//           <strong>द्विघात समीकरण का व्याप्त रूप:</strong>{" "}
//           <InlineMath math="ax^2 + bx + c = 0" />
//         </li>
//         <li>
//           <strong>विविक्तकार (विवेचक):</strong>{" "}
//           <InlineMath math="D = b^2 - 4ac" />
//         </li>
//         <li>
//           <strong>द्विघात सूत्र:</strong>{" "}
//           <InlineMath math="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
//         </li>
//         <li>
//           <strong>जब D = 0:</strong> तब मूल वास्तविक और समान होंगे।
//         </li>
//         <li>
//           <strong>जब D &gt; 0:</strong> तब मूल वास्तविक और असमान होंगे।
//         </li>
//         <li>
//           <strong>जब D &lt; 0:</strong> तब मूल वास्तविक नहीं होंगे।
//         </li>
//         <li>
//           <strong>मूलों का योग (α + β):</strong>{" "}
//           <InlineMath math="-\frac{b}{a}" />
//         </li>
//         <li>
//           <strong>मूलों का गुणनफल (α × β):</strong>{" "}
//           <InlineMath math="\frac{c}{a}" />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Chapter4;



import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

const Chapter4 = () => {
  return (
    <div className="bg-gray-100 px-4 py-8 sm:px-8 sm:py-12 lg:px-16">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-blue-800 mb-10">
        द्विघात समीकरण
      </h1>

      <div className="space-y-6">
        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">द्विघात समीकरण का व्यापक रूप:</span>{" "}
          <p className="text-base sm:text-xl mt-2">
            <InlineMath math="ax^2 + bx + c = 0" />
          </p>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">विविक्तकर (विवेचक) =</span>{" "}
          <span className="text-base sm:text-xl mt-2">
            <InlineMath math="D = b^2 - 4ac" />
          </span>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">द्विघात सूत्र</span>{" "}
          <span  className="text-base sm:text-3xl ">
            <InlineMath math="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
          </span >
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">जब D = 0,</span>{" "}
          <span className="text-base sm:text-xl mt-2">तब मूल वास्तविक और समान होंगे।</span>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">जब D &gt; 0,</span>{" "}
          <span className="text-base sm:text-xl mt-2">तब मूल वास्तविक और असमान होंगे।</span>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">जब D &lt; 0, </span>{" "}
          <span className="text-base sm:text-xl mt-2">तब मूल वास्तविक नहीं होंगे।</span>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">मूलों का योग (α + β) =</span>{" "}
          <span className="text-base sm:text-xl mt-2">
            <InlineMath math="-\frac{b}{a}" />
          </span>
        </div>

        <div className="bg-white shadow p-4 sm:p-6 rounded hover:scale-105 transition duration-300 ease-in-out">
          <span className="text-lg sm:text-2xl">मूलों का गुणनफल (α × β) =</span>{""}
          <span className="text-base sm:text-xl mt-2">
            <InlineMath math="\frac{c}{a}" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chapter4;
