// import Link from 'next/link'
// import React from 'react'

// const Description = () => {
//   return (
//     <div className=' bg-blue-300 '>
//         {/* <h1 className=' flex justify-center items-center py-4  text-4xl'>Nafis Sir</h1> */}
//         <div className='flex justify-between p-14'>
//         <div className=' text-black flex flex-col  '>
//             <Link href= "/" className='hover:bg-blue-600 rounded-lg'>Home Page</Link>
//             <Link href= "/testquiz" className='hover:bg-blue-600 rounded-lg'>Test Quiz</Link>
//             <Link href= "/about" className='hover:bg-blue-600 rounded-lg'>About</Link>
//         </div>
//         <div className='mt-20'>Copyright c 2024 Nafis Sir Chhaurahi, All rights reserved.</div>
//         <div className='text-black'>
//             <h1>All Exam Text</h1>
//             <p></p>
//         </div>
//         </div>
//     </div>
//   )
// }
// export default Description



import Link from 'next/link';
import React from 'react';

const Description = () => {
  return (
    <div className="bg-blue-300">
      {/* Header Section */}
      <div className="flex justify-between p-6 flex-wrap gap-6">
        {/* Navigation Links */}
        <div className="text-black flex flex-col space-y-2">
          <Link href="/" className="hover:bg-blue-600 px-4 py-2 rounded-lg">
            Home Page
          </Link>
          <Link href="/testquiz" className="hover:bg-blue-600 px-4 py-2 rounded-lg">
            Test Quiz
          </Link>
          <Link href="/about" className="hover:bg-blue-600 px-4 py-2 rounded-lg">
            About
          </Link>
        </div>

        {/* Text Section */}
        <div className="text-black flex flex-col">
          <h1 className="text-lg font-semibold">All Exam Text</h1>
          <p className="text-sm">
            This section is for additional information or text related to exams. Customize it as needed.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center bg-blue-400 py-4 mt-6 text-black">
        &copy; 2024 Nafis Sir Chhaurahi, All rights reserved.
      </footer>
    </div>
  );
};

export default Description;

