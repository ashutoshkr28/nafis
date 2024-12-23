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



import Image from "next/image";
import React from "react";

const RealNumbers = () => {
  return (
    <div className="">

        {/* <Image src={"/image/8th-S-Chap-1.png"} width={2300} height={230}></Image> */}
     
   
      <ul className=" ml-16 text-left text-4xl">
        <li>
        i) युक्लिड विभाजन प्रमेयिका से:
          <p>a = bq + r जहाँ 0 ≤ r &lt; b</p>
        </li>
        <li>
        ii) भाज्य = भाजक × भागफल + शेषफल
        </li>
        <li>
        iii) महत्तम (a, b) × लघुत्तम (a, b) = a × b
        </li>
      </ul>
    </div>
  );
};

export default RealNumbers;
