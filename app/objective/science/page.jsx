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




import Link from "next/link";

const chapters = [
  // { name: "8th Class ( कक्षा 8 विज्ञान ) - Coming Soon..", slug: "8th Class" },
  // { name: "9th Class ( कक्षा 9 विज्ञान ) - Coming Soon..", slug: "matter-and-properties" },
  // { name: "10th Class ( कक्षा 10  विज्ञान ) - Coming Soon..", slug: "forces-and-motion" },
  // { name: "11th Class ( कक्षा 11  विज्ञान ) - Coming Soon..", slug: "the-living-world" },
  // { name: "12th Class ( कक्षा 12  विज्ञान ) - Coming Soon..", slug: "the-living-world" },
  { name: "8th Class (कक्षा 8)", slug: "8th-class" },
  { name: "9th Class (कक्षा 9)", slug: "9th-class" },
  { name: "10th Class (कक्षा 9)", slug: "10th-class" },
  { name: "11th Class (कक्षा 9)", slug: "11th-class" },
  { name: "12th Class (कक्षा 9)", slug: "12th-class" },
];

const  ScienceNotes =() => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Science Subject</h1>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300 text-left">All Class Objective Questions with Answer</th>
            </tr>
          </thead>
          <tbody>
            {chapters.map((chapter, index) => (
              <tr key={index} className="hover:bg-gray-100 transition duration-150">
                <td className="px-4 py-2 border border-gray-300">
                  <Link href={`/objective/science/${chapter.slug}`} className="text-blue-600 hover:underline">
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


export default ScienceNotes;
