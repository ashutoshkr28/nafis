// "use client"

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
