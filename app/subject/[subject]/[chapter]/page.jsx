// import { useParams } from 'next/navigation';

// export default function ChapterPage() {
//   const params = useParams();
//   const { subject, chapter } = params;

//   return (
//     <div className="min-h-screen p-10 bg-gray-50">
//       <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
//         Subject: {subject.charAt(0).toUpperCase() + subject.slice(1)} 
//       </h1>
//       <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
//         Chapter: {chapter.replace(/-/g, ' ').toUpperCase()}
//       </h2>

//       <p className="text-lg text-gray-700">
//         This page contains content related to the {chapter} chapter of {subject}.
//       </p>
//     </div>
//   );
// }



// const chapterContent = {
//   physics: {
//     motion: 'This is the Motion chapter content',
//     energy: 'This is the Energy chapter content',
//   },
//   chemistry: {
//     'periodic-table': 'This is the Periodic Table chapter content',
//     'acids-bases': 'This is the Acids and Bases chapter content',
//   },
//   biology: {
//     cells: 'This is the Cells chapter content',
//     genetics: 'This is the Genetics chapter content',
//   },
// };

// export default function ChapterPage({ params }) {
//   const { subject, chapter } = params;
//   const content = chapterContent[subject]?.[chapter] || 'No content available for this chapter.';

//   return (
//     <div className="min-h-screen p-10 bg-gray-50">
//       <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
//         Subject: {subject.charAt(0).toUpperCase() + subject.slice(1)} 
//       </h1>
//       <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
//         Chapter: {chapter.replace(/-/g, ' ').toUpperCase()}
//       </h2>
//       <p className="text-lg text-gray-700">{content}</p>
//     </div>
//   );
// }
// export default function ChapterPage({ params }) {
//   const { subject, chapter } = params; // Destructure the dynamic route parameters

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-gray-800">
//       <header className="text-center py-6 bg-blue-500 text-white shadow-lg">
//         <h1 className="text-4xl font-bold tracking-wider">
//           {subject.charAt(0).toUpperCase() + subject.slice(1)} - {chapter.charAt(0).toUpperCase() + chapter.slice(1)} 
//         </h1>
//       </header>

//       <main className="p-4">
//         <p className="text-xl text-center">
//           Welcome to the <strong>{chapter}</strong> chapter of <strong>{subject}</strong>.
//         </p>
//         <p className="mt-4 text-center">
//           Here, you will find notes, questions, and resources to master this chapter.
//         </p>
//       </main>

//       <footer className="text-center py-4 bg-blue-500 text-white mt-6">
//         <p className="text-sm">Made with ❤️ by Your Team</p>
//       </footer>
//     </div>
//   );
// }
