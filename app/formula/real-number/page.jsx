// import React from "react";
// import Math from "@/components/Math"; // Update the path to your Math component

// const Chapter1 = () => {
//   return (
//     <div className="p-4 text-lg font-serif leading-relaxed">
//       <h1 className="text-xl font-bold mb-4">✤ Chapter-1</h1>
//       <h2 className="font-semibold mb-2">➤ वास्तविक संख्याएँ</h2>
//       <ul className="list-decimal pl-6">
//         <li className="mb-4">
//           <span>युक्लिड विभाजन प्रमेयिका से:</span>
//           <Math math={"a = bq + r \\ \\text{जहाँ } 0 \\leq r < b"} block={true} />
//         </li>
//         <li className="mb-4">
//           {/* <span>भाज्य = भाजक × भागफल + शेषफल:</span> */}
//           <Math math={"\\text भाज्य = भाजक \\times \\text  भागफल + शेषफल"} block={true} />
//         </li>
//         <li className="mb-4">
//           {/* <span>महत्तम और लघुत्तम:</span> */}
//           <Math math={"\\text{महत्तम } (a, b) \\times \\text{लघुत्तम } (a, b) = a \\times b"} block={true} />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Chapter1;



// import Image from "next/image";
// import React from "react";

// const RealNumbers = () => {
//   return (
//     <div className="">

//         {/* <Image src={"/image/8th-S-Chap-1.png"} width={2300} height={230}></Image> */}
     
   
//       <ul className=" ml-16 text-left text-2xl">
//         <li>
//         i) युक्लिड विभाजन प्रमेयिका से:
//           <p>a = bq + r जहाँ 0 ≤ r &lt; b</p>
//         </li>
//         <li>
//         ii) भाज्य = भाजक × भागफल + शेषफल
//         </li>
//         <li>
//         iii) महत्तम (a, b) × लघुत्तम (a, b) = a × b
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default RealNumbers;


// import React from "react";

// const RealNumbers = () => {
//   return (
//     <div className="bg-gray-100 py-10 px-5 sm:px-10 md:px-20 lg:px-40">
//       {/* Uncomment this if the image is needed */}
//       {/* <div className="mb-8">
//         <Image
//           src="/image/8th-S-Chap-1.png"
//           alt="Real Numbers Diagram"
//           width={2300}
//           height={230}
//           className="rounded-lg shadow-md"
//         />
//       </div> */}

//       <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
//         Real Numbers: Key Concepts
//       </h1>

//       <ul className="list-disc pl-8 sm:pl-16 text-left text-xl sm:text-2xl text-gray-700 space-y-6">
//         <li>
//           <strong>i) युक्लिड विभाजन प्रमेयिका:</strong>
//           <p className="pl-4 mt-2 text-lg sm:text-xl">
//             a = bq + r जहाँ 0 ≤ r &lt; b
//           </p>
//         </li>
//         <li>
//           <strong>ii) भाज्य = भाजक × भागफल + शेषफल</strong>
//         </li>
//         <li>
//           <strong>iii) मo सo  (a, b) × लo सo  (a, b) = a × b</strong>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default RealNumbers;





import React from "react";

const RealNumbers = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 sm:px-10 md:px-20 lg:px-40">
      {/* Uncomment this if the image is needed */}
      {/* <div className="mb-8">
        <Image
          src="/image/8th-S-Chap-1.png"
          alt="Real Numbers Diagram"
          width={2300}
          height={230}
          className="rounded-lg shadow-md"
        />
      </div> */}

      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
        Real Numbers (वास्तविक संख्या)
      </h1>

      <ul className="list-none pl-8 sm:pl-16 text-left text-xl sm:text-2xl text-gray-700 space-y-6">
        <li className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <p className="text-lg sm:text-xl block ">युक्लिड विभाजन प्रमेयिका से :</p>
            <p className="pl-4 text-lg sm:text-xl">
              a = bq + r जहाँ <span className="ml-2">  0 ≤ r &lt; b </span>
            </p>
          </div>
        </li>
        <li className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <p className="text-lg sm:text-xl block"> भाज्य = भाजक × भागफल + शेषफल</p>
          </div>
        </li>
        <li className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <p className="text-lg sm:text-xl block"> मo सo  (a, b) × लo सo  (a, b) = a × b</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RealNumbers;

