import React from 'react';

export default function SubjectsPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-gray-800">
      {/* Header */}
      <header className="text-center py-6 bg-blue-500 text-white shadow-lg">
        <h1 className="text-4xl font-bold tracking-wider">Subjects Portal</h1>
        <p className="text-sm mt-2 animate-fadeIn">Explore Physics, Chemistry, and Biology</p>
      </header>

      {/* Main Content */}
      <div className="p-4 md:p-10 grid gap-6 md:grid-cols-3">
        {/* Physics Card */}
        <div className="group p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-600 mb-2 group-hover:text-blue-700">Physics</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center p-2 bg-blue-100 rounded-lg hover:bg-blue-200 cursor-pointer">
              <span>Motion</span>
              <span className="text-sm text-gray-600 group-hover:text-gray-800">10 Questions</span>
            </li>
            <li className="flex justify-between items-center p-2 bg-blue-100 rounded-lg hover:bg-blue-200 cursor-pointer">
              <span>Energy</span>
              <span className="text-sm text-gray-600 group-hover:text-gray-800">8 Questions</span>
            </li>
          </ul>
        </div>

        {/* Chemistry Card */}
        <div className="group p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-green-600 mb-2 group-hover:text-green-700">Chemistry</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center p-2 bg-green-100 rounded-lg hover:bg-green-200 cursor-pointer">
              <span>Periodic Table</span>
              <span className="text-sm text-gray-600 group-hover:text-gray-800">12 Questions</span>
            </li>
            <li className="flex justify-between items-center p-2 bg-green-100 rounded-lg hover:bg-green-200 cursor-pointer">
              <span>Acids and Bases</span>
              <span className="text-sm text-gray-600 group-hover:text-gray-800">15 Questions</span>
            </li>
          </ul>
        </div>

        {/* Biology Card */}
        <div className="group p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-pink-600 mb-2 group-hover:text-pink-700">Biology</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center p-2 bg-pink-100 rounded-lg hover:bg-pink-200 cursor-pointer">
              <span>Cells</span>
              <span className="text-sm text-gray-600 group-hover:text-gray-800">18 Questions</span>
            </li>
            <li className="flex justify-between items-center p-2 bg-pink-100 rounded-lg hover:bg-pink-200 cursor-pointer">
              <span>Genetics</span>
              <span className="text-sm text-gray-600 group-hover:text-gray-800">20 Questions</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-blue-500 text-white mt-6">
        <p className="text-sm animate-pulse">Made with ❤️ by Your Team</p>
      </footer>
    </div>
  );
}
