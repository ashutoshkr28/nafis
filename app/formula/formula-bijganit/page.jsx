'use client'

// import dynamic from 'next/dynamic';

// // Dynamic import to prevent SSR issues
// const Math = dynamic(() => import('@/components/Math'), { ssr: false });

// export default function Identities() {
//   const identities = [
//     { id: 1, formula: "(a + b)^2 = a^2 + 2ab + b^2" },
//     { id: 2, formula: "(a - b)^2 = a^2 - 2ab + b^2" },
//     { id: 3, formula: "a^2 - b^2 = (a + b)(a - b)" },
//     { id: 4, formula: "a^2 + b^2 = (a + b)^2 - 2ab" },
//     { id: 5, formula: "a^2 + b^2 = (a - b)^2 + 2ab" },
//     { id: 6, formula: "(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3" },
//     { id: 7, formula: "(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3" },
//     { id: 8, formula: "a^3 + b^3 = (a + b)(a^2 - ab + b^2)" },
//     { id: 9, formula: "a^3 - b^3 = (a - b)(a^2 + ab + b^2)" },
//     { id: 10, formula: "a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)" },
//     { id: 11, formula: "(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca" },
//     { id: 12, formula: "(a - b - c)^2 = a^2 + b^2 + c^2 - 2ab + 2bc - 2ca" },
//     { id: 13, formula: "a^3 + b^3 + c^3 - 3abc = \\frac{1}{2} (a + b + c) \\left( (a - b)^2 + (b - c)^2 + (c - a)^2 \\right)" },
//   ];

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
//         महत्वपूर्ण गणितीय सर्वसमिकाएँ (Algebraic Identities)
//       </h1>

//       <div className="space-y-6">
//         {identities.map((item) => (
//           <div 
//             key={item.id} 
//             className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
//           >
//             {/* <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//               पहचान {item.id}:
//             </h2> */}
//             <div className="text-4xl text-gray-800 font-bold">
//               <Math math={item.formula} block={true} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// import dynamic from 'next/dynamic';

// // Dynamic import to prevent SSR issues
// const Math = dynamic(() => import('@/components/Math'), { ssr: false });

// export default function Identities() {
//   const identities = [
//     { id: 1, formula: "(a + b)^2 = a^2 + 2ab + b^2" },
//     { id: 2, formula: "(a - b)^2 = a^2 - 2ab + b^2" },
//     { id: 3, formula: "a^2 - b^2 = (a + b)(a - b)" },
//     { id: 4, formula: "a^2 + b^2 = (a + b)^2 - 2ab" },
//     { id: 5, formula: "a^2 + b^2 = (a - b)^2 + 2ab" },
//     { id: 6, formula: "(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3" },
//     { id: 7, formula: "(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3" },
//     { id: 8, formula: "a^3 + b^3 = (a + b)(a^2 - ab + b^2)" },
//     { id: 9, formula: "a^3 - b^3 = (a - b)(a^2 + ab + b^2)" },
//     { id: 10, formula: "a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)" },
//     { id: 11, formula: "(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca" },
//     { id: 12, formula: "(a - b - c)^2 = a^2 + b^2 + c^2 - 2ab + 2bc - 2ca" },
//     { id: 13, formula: "a^3 + b^3 + c^3 - 3abc = \\frac{1}{2} (a + b + c) \\left( (a - b)^2 + (b - c)^2 + (c - a)^2 \\right)" },
//   ];

//   return (
//     <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-700 mb-8">
//         महत्वपूर्ण गणितीय सर्वसमिकाएँ (Algebraic Identities)
//       </h1>

//       {/* Responsive grid layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {identities.map((item) => (
//           <div 
//             key={item.id} 
//             className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col items-center justify-center"
//           >
//             {/* <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
//               पहचान {item.id}:
//             </h2> */}
//             <div className="text-base sm:text-lg md:text-xl text-gray-800 text-center">
//               <Math math={item.formula} block={true} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import dynamic from 'next/dynamic';

const Math = dynamic(() => import('@/components/Math'), { ssr: false });

export default function Identities() {
  const identities = [
    { id: 1, formula: "(a + b)^2 = a^2 + 2ab + b^2" },
    { id: 2, formula: "(a - b)^2 = a^2 - 2ab + b^2" },
    { id: 3, formula: "a^2 - b^2 = (a + b)(a - b)" },
    { id: 4, formula: "a^2 + b^2 = (a + b)^2 - 2ab" },
    { id: 5, formula: "a^2 + b^2 = (a - b)^2 + 2ab" },
    { id: 6, formula: "(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3" },
    { id: 7, formula: "(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3" },
    { id: 8, formula: "a^3 + b^3 = (a + b)(a^2 - ab + b^2)" },
    { id: 9, formula: "a^3 - b^3 = (a - b)(a^2 + ab + b^2)" },
    { id: 10, formula: "a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)" },
    { id: 11, formula: "(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca" },
    { id: 12, formula: "(a - b - c)^2 = a^2 + b^2 + c^2 - 2ab + 2bc - 2ca" },
    { id: 13, formula: "a^3 + b^3 + c^3 - 3abc = \\frac{1}{2} (a + b + c) \\left[ (a - b)^2 + (b - c)^2 + (c - a)^2 \\right]" },
  ];

//   <Math math={"a^3 + b^3 + c^3 - 3abc = \\frac{1}{2} (a + b + c) \\left( (a - b)^2 + (b - c)^2 + (c - a)^2 \\right)"} block={true} />

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-700 mb-8">
        महत्वपूर्ण गणितीय सर्वसमिकाएँ (Algebraic Identities)
      </h1>

      <div className="flex flex-col space-y-4">
        {identities.map((item, index) => (
          <div 
            key={item.id} 
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col items-start space-y-4"
          >
            {/* <h2 className="text-xl font-semibold text-blue-600 mb-2">
              {index + 1}. पहचान {item.id}:
            </h2> */}
            <div className="w-full overflow-x-auto text-2xl font-bold">
              <Math math={item.formula} block={true} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
