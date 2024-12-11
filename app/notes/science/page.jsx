// import Link from "next/link";

// const chapters = [
//   { name: "Introduction to Science", slug: "introduction-to-science" },
//   { name: "Matter and Its Properties", slug: "matter-and-properties" },
//   { name: "Forces and Motion", slug: "forces-and-motion" },
//   { name: "The Living World", slug: "the-living-world" },
// ];

// const ScienceTable = () => {
//   return (
//     <div className="flex justify-center items-center p-6">
//       <div className="overflow-x-auto w-full max-w-4xl">
//         <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-4 py-2 border border-gray-300 text-left">Chapter Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {chapters.map((chapter, index) => (
//               <tr key={index} className="hover:bg-gray-100 transition duration-150">
//                 <td className="px-4 py-2 border border-gray-300">
//                   <Link href={`/notes/science/${chapter.slug}`} className="text-blue-600 hover:underline">
//                     {chapter.name}
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ScienceTable;


//actuall 

// import Link from "next/link";

// const chapters = [
//   { name: "8th Class ( कक्षा 8 विज्ञान )", slug: "8th Class" },
//   { name: "9th Class ( कक्षा 9 विज्ञान )", slug: "9th class" },
//   { name: "10th Class ( कक्षा 10  विज्ञान )", slug: "10th class" },
//   { name: "11th Class ( कक्षा 11  विज्ञान )", slug: "11th class" },
//   { name: "12th Class ( कक्षा 12  विज्ञान )", slug: "12th class" },
// ];

// export default function ScienceNotes() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
//       <h1 className="text-3xl font-bold mb-6">Science Subject</h1>
//       <div className="overflow-x-auto w-full max-w-4xl">
//         <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-4 py-2 border border-gray-300 text-left">All Class Subjective Questions with Answer</th>
//             </tr>
//           </thead>
//           <tbody>
//             {chapters.map((chapter, index) => (
//               <tr key={index} className="hover:bg-gray-100 transition duration-150">
//                 <td className="px-4 py-2 border border-gray-300">
//                   <Link href={`/notes/science/${chapter.slug}`} className="text-blue-600 hover:underline">
//                     {chapter.name}
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



// checking


// import Link from "next/link";

// // List of all the chapters with their respective slugs for routing
// const chapters = [
//   { name: "8th Class ( कक्षा 8 विज्ञान )", slug: "8thClass" },
//   { name: "9th Class ( कक्षा 9 विज्ञान )", slug: "9thClass" },
//   { name: "10th Class ( कक्षा 10  विज्ञान )", slug: "10thClass" },
//   { name: "11th Class ( कक्षा 11  विज्ञान )", slug: "11thClass" },
//   { name: "12th Class ( कक्षा 12  विज्ञान )", slug: "12thClass" },
// ];

// export default function ScienceNotes() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
//       <h1 className="text-3xl font-bold mb-6">Science Subject</h1>
//       <div className="overflow-x-auto w-full max-w-4xl">
//         <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-4 py-2 border border-gray-300 text-left">
//                 All Class Subjective Questions with Answer
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {chapters.map((chapter, index) => (
//               <tr key={index} className="hover:bg-gray-100 transition duration-150">
//                 <td className="px-4 py-2 border border-gray-300">
//                     <Link
//                       href={`/notes/science/9thClass/${chapter.slug}`}
//                       className="text-blue-600 hover:underline"
//                     >
//                       {chapter.name}
//                     </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }













import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

// List of all the classes with their respective slugs for routing
const chapters = [
  { name: "8th Class   ( कक्षा 8 विज्ञान ) ", slug: "8thClass" },
  { name: "9th Class ( कक्षा 9 विज्ञान )", slug: "9thClass" },
  { name: "10th Class ( कक्षा 10  विज्ञान )", slug: "10thClass" },
  { name: "11th Class ( कक्षा 11  विज्ञान )", slug: "11thClass" },
  { name: "12th Class ( कक्षा 12  विज्ञान )", slug: "12thClass" },
];

export default function ScienceNotes() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      {/* <h1 className="text-3xl font-bold mb-6">Science Subject</h1> */}
      {/* image resize for all screen */}
      <Image src={assets.banner8th} ></Image>
      {/* width={900} height={400} */}
      <br />
      <div className="overflow-x-auto w-full max-w-4xl mb-48 mt-10">
        <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-red-500 bg-red-500 text-white text-4xl text-center ">
                All Class Subjective Questions with Answer
              </th>
            </tr>
          </thead>
          <tbody>
            {chapters.map((chapter, index) => (
              <tr key={index} className="hover:bg-gray-100 transition duration-150">
                <td className="px-4 py-2 border text-2xl text-left border-gray-300">
                  {/* Update the link to handle both class and chapter dynamically */}
                  <Link
                    href={`/notes/science/${chapter.slug}/[chapter]`} // Add chapter specific URL part
                    as={`/notes/science/${chapter.slug}/chapter1`} // Example, you will adjust to fetch the correct chapter dynamically
                    className="text-blue-600 hover:underline"
                  >
                    {chapter.name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

