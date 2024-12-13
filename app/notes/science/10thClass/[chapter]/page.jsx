import React from 'react';
import Link from 'next/link';

const SubjectTable = ({ subject, chapters, subjectKey }) => {
  return (
    <div className="mb-8">
      <h2 className="text-center text-2xl text-blue-600 font-semibold">{subject}</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white uppercase">
              <th className="py-3 px-4">Serial Number</th>
              <th className="py-3 px-4">Chapter Name</th>
            </tr>
          </thead>
          <tbody>
            {chapters.map((chapter, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200 transition-colors duration-300`}
              >
                <td className="py-3 px-4 border border-gray-300 text-sm sm:text-base">{index + 1}</td> {/* Smaller serial number on small screens */}
                <td className="py-3 px-4 border border-gray-300">
                  <Link
                    href={`/${subjectKey}/chapter-${index + 1}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    {chapter}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Home = () => {
  const subjects = [
    {
      key: 'physics',
      name: 'Physics',
      chapters: [
        'Kinematics',
        'Laws of Motion',
        'Work, Energy and Power',
        'Gravitation',
      ],
    },
    {
      key: 'chemistry',
      name: 'Chemistry',
      chapters: [
        'Atomic Structure',
        'Periodic Table',
        'Chemical Bonding',
        'Thermodynamics',
      ],
    },
    {
      key: 'biology',
      name: 'Biology',
      chapters: [
        'Cell Structure',
        'Genetics',
        'Human Physiology',
        'Plant Physiology',
      ],
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-center text-4xl text-gray-800 font-bold mb-6">Subjects and Chapters</h1>
      {subjects.map((subject) => (
        <SubjectTable
          key={subject.key}
          subject={subject.name}
          chapters={subject.chapters}
          subjectKey={subject.key}
        />
      ))}
    </div>
  );
};

export default Home;
