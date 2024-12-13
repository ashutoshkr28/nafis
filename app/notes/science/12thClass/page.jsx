import React from 'react';
import Link from 'next/link';

export default function SubjectsPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-gray-800">
      <header className="text-center py-6 bg-blue-500 text-white shadow-lg">
        <h1 className="text-4xl font-bold tracking-wider">Subjects Portal</h1>
        <p className="text-sm mt-2 animate-fadeIn">Explore Physics, Chemistry, and Biology</p>
      </header>

      <div className="p-4 md:p-10 grid gap-6 md:grid-cols-3">
        
        {/* Physics */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Physics</h2>
          <ul>
            <li>
              <Link href="/subjects/physics/motion">
                <a className="text-blue-500 hover:underline">Motion</a>
              </Link>
            </li>
            <li>
              <Link href="/subjects/physics/energy">
                <a className="text-blue-500 hover:underline">Energy</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Chemistry */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-green-600 mb-4">Chemistry</h2>
          <ul>
            <li>
              <Link href="/subjects/chemistry/periodic-table">
                <a className="text-green-500 hover:underline">Periodic Table</a>
              </Link>
            </li>
            <li>
              <Link href="/subjects/chemistry/acids-bases">
                <a className="text-green-500 hover:underline">Acids and Bases</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Biology */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-pink-600 mb-4">Biology</h2>
          <ul>
            <li>
              <Link href="/subjects/biology/cells">
                <a className="text-pink-500 hover:underline">Cells</a>
              </Link>
            </li>
            <li>
              <Link href="/subjects/biology/genetics">
                <a className="text-pink-500 hover:underline">Genetics</a>
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
      
      <footer className="text-center py-4 bg-blue-500 text-white mt-6">
        <p className="text-sm">Made with ❤️ by Your Team</p>
      </footer>
    </div>
  );
}
