// import Link from "next/link";

// const UserDownloads = () => {
//   // List of PDFs (manually added in public/uploads directory)
//   const pdfFiles = [
//     { name: "Mathematics 2025", file: "/uploads/math.pdf" },
//     { name: "Mathematics 2024", file: "/uploads/science.pdf" },
//     { name: "Mathematics 2023", file: "/uploads/english.pdf" },
//     { name: "Mathematics 2022", file: "/uploads/english.pdf" },
//     { name: "Mathematics 2021", file: "/uploads/english.pdf" },
//     { name: "Mathematics 2020", file: "/uploads/english.pdf" },
//   ];

//   return (<>
//     <div className="mx-10 my-6 ">
//       <p className="text-4xl items-center text-center mx-4">
//         <span className="">Bihar Board 10th Math Model Paper 2023 ( BSEB ) क्लास 10th गणित मॉडल पेपर PDF Download बिहार बोर्ड मैट्रिक परीक्षा 2023</span>
//         </p>
//       </div>
//     <div className="flex flex-col items-center space-y-4 mt-10">

//       <h1 className="text-2xl font-bold">Available Downloads Link</h1>
//       <ul className="space-y-2">
//         {pdfFiles.map((pdf, index) => (
//           <li key={index} className="text-lg">
//             <div className="w-auto flex justify-between text-4xl m-5 px-10">
//             <h1 className="px-10">Download Link </h1>
//             <Link
//               href={pdf.file}
//               target="_blank"
//               rel="noopener noreferrer"
//               download
//               className="text-blue-600 hover:underline"
//             >
              
//               {pdf.name}
//             </Link>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </>
//   );
// };

// export default UserDownloads;





// import Link from "next/link";

// const UserDownloads = () => {
//   const pdfFiles = [
//     { name: "Mathematics 2025", file: "/math_model_paper_2025.pdf" },
//     { name: "Mathematics 2024", file: "/uploads/science.pdf" },
//     { name: "Mathematics 2023", file: "/uploads/english.pdf" },
//     { name: "Mathematics 2022", file: "/uploads/english.pdf" },
//     { name: "Mathematics 2021", file: "/uploads/english.pdf" },
//     { name: "Mathematics 2020", file: "/uploads/english.pdf" },
//   ];

//   return (
//     <>
//       <div className="mx-10 my-6">
//         <p className="text-4xl text-center mx-4">
//           Bihar Board 10th Math Model Paper (BSEB) क्लास 10th गणित मॉडल पेपर PDF Download बिहार बोर्ड मैट्रिक परीक्षा
//         </p>
//       </div>
//       <div className="flex flex-col items-center space-y-4 mt-10">
//         <h1 className="text-2xl font-bold">Available Downloads Link</h1>
//         <ul className="space-y-4">
//           {pdfFiles.map((pdf, index) => (
//             <li key={index} className="w-full flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
//               <h2 className="text-lg md:text-2xl font-semibold">Download Link</h2>
//               <img
//                 src="/Bihar-Board-Class-10th-Mathematics-Model-Paper-2025.webp" // Replace with your image path
//                 alt="Model Paper"
//                 className="w-24 h-24 object-cover"
//               />
//               <Link
//                 href={pdf.file}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline text-lg md:text-xl"
//               >
//                 {pdf.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default UserDownloads;


// import Link from "next/link";

// const UserDownloads = () => {
//   const pdfFiles = [
//     {
//       name: "Mathematics 2025",
//       file: "/math_model_paper_2025.pdf",
//       image: "/images/math_2025.webp",
//       description: "Prepare for the 2025 Bihar Board exams with the latest Math model paper.",
//     },
//     {
//       name: "Mathematics 2024",
//       file: "/uploads/science.pdf",
//       image: "/images/math_2024.webp",
//       description: "Get the 2024 Math model paper to enhance your preparation.",
//     },
//     {
//       name: "Mathematics 2023",
//       file: "/uploads/english.pdf",
//       image: "/images/math_2023.webp",
//       description: "Download the 2023 Math model paper and practice for excellence.",
//     },
//     {
//       name: "Mathematics 2022",
//       file: "/uploads/english.pdf",
//       image: "/images/math_2022.webp",
//       description: "Access the 2022 Math model paper for effective practice.",
//     },
//     {
//       name: "Mathematics 2021",
//       file: "/uploads/english.pdf",
//       image: "/images/math_2021.webp",
//       description: "Improve your skills with the 2021 Math model paper.",
//     },
//     {
//       name: "Mathematics 2020",
//       file: "/uploads/english.pdf",
//       image: "/images/math_2020.webp",
//       description: "Start your preparation with the 2020 Math model paper.",
//     },
//   ];

//   return (
//     <>
//       <div className="mx-10 my-6">
//         <p className="text-4xl text-center mx-4">
//           Bihar Board 10th Math Model Paper (BSEB) क्लास 10th गणित मॉडल पेपर PDF Download बिहार बोर्ड मैट्रिक परीक्षा
//         </p>
//       </div>
//       <div className="flex flex-col items-center space-y-4 mt-10">
//         <h1 className="text-2xl font-bold">Available Downloads Link</h1>
//         <ul className="space-y-4">
//           {pdfFiles.map((pdf, index) => (
//             <li key={index} className="w-full flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
//               <h2 className="text-lg md:text-2xl font-semibold">Download Link</h2>
//               <img
//                 src={pdf.image}
//                 alt={`Model Paper ${pdf.name}`}
//                 className="w-24 h-24 object-cover"
//               />
//               <Link
//                 href={pdf.file}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline text-lg md:text-xl"
//               >
//                 {pdf.name}
//               </Link>
//               <p className="text-sm md:text-base text-gray-600">{pdf.description}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default UserDownloads;



import Link from "next/link";

const UserDownloads = () => {
  const pdfFiles = [
    { name: "Mathematics 2025", file: "/math_model_paper_2025.pdf", image: "/image/Bihar-Board-Class-10th-Math-Model-Paper-2025.png" },
    { name: "Mathematics 2024", file: "/uploads/science.pdf", image: "/image/Bihar-Board-Class-10th-Mathematics-Model-Paper-2024.png" },
    { name: "Mathematics 2023", file: "/uploads/english.pdf", image: "/image/Bihar-Board-Class-10th-Mathematics-Model-Paper-2023.png" },
    { name: "Mathematics 2022", file: "/uploads/english.pdf", image: "/image/Bihar-Board-Class-10th-Mathematics-Model-Paper-2022.png" },
    { name: "Mathematics 2021", file: "/uploads/english.pdf", image: "/image/Bihar-Board-Class-10th-Mathematics-Model-Paper-2021.png" },
    { name: "Mathematics 2020", file: "/uploads/english.pdf", image: "/image/Bihar-Board-Class-10th-Mathematics-Model-Paper-2020.png" },
  ];

  return (
    <>
      <div className="mx-10 my-6">
        <p className="text-4xl text-center mx-4">
          Bihar Board 10th Math Model Paper 2023 (BSEB) क्लास 10th गणित मॉडल पेपर PDF Download बिहार बोर्ड मैट्रिक परीक्षा 2023
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4 mt-10">
        <h1 className="text-2xl font-bold">Available Downloads Link</h1>
        <ul className="space-y-8">
          {pdfFiles.map((pdf, index) => (
            <li key={index} className="w-full flex flex-col items-center text-center">
              <img
                src={pdf.image}
                alt={pdf.name}
                className="object-cover mb-4"
                height={600}
                width={800}
              />
              <p className="text-lg font-medium mb-2">{pdf.name}</p>
              <Link
                href={pdf.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-lg"
              >
                Download PDF
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserDownloads;
