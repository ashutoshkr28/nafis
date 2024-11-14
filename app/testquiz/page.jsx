// // import Quiz from '@/components/Quiz'
// import Link from 'next/link'
// import React from 'react'

// const Testquiz = () => {
//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Quiz Test Mathematics</h1>
//       <h1 className='text-red-500  border border-blue-600 py-4  px-4  hover:bg-lime-700'>Choose Your Class</h1>


//       <div className='mt-10 flex justify-center gap-5'>
        
//         <Link href=".//class/sixth" className='bg-black text-white py-1 px-4 rounded-sm'>6th Class</Link>
//         <Link href="./class/seven" className='bg-black text-white py-1 px-4 rounded-sm'>7th Class</Link>
//         <Link href="./class/eight" className='bg-black text-white py-1 px-4 rounded-sm'>8th Class</Link>
//         <Link href="./class/nine" className='bg-black text-white py-1 px-4 rounded-sm'>9th Class</Link>
//         <Link href="./class/ten" className='bg-black text-white py-1 px-4 rounded-sm'>10th Class</Link>
//       </div>

//       <div className='mt-72'>

//       <Link href="./" className='bg-red-800 text-white py-7 px-7 '>Home</Link>

//       </div>



//       {/* <Quiz /> */}
//     </div>
//   )
// }

// export default Testquiz



import Link from 'next/link'
import React from 'react'

const Testquiz = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 md:p-8 lg:p-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
        Quiz Test Mathematics
      </h1>
      <h2 className="text-lg md:text-xl lg:text-2xl text-red-500 border border-blue-600 py-3 px-4 rounded hover:bg-lime-700 transition duration-300">
        Choose Your Class
      </h2>

      <div className="mt-8 lg:mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        <Link href="/class/sixth" className="bg-black text-white py-2 px-4 rounded-sm text-center hover:bg-gray-800 transition">
          6th Class
        </Link>
        <Link href="/class/seven" className="bg-black text-white py-2 px-4 rounded-sm text-center hover:bg-gray-800 transition">
          7th Class
        </Link>
        <Link href="/class/eight" className="bg-black text-white py-2 px-4 rounded-sm text-center hover:bg-gray-800 transition">
          8th Class
        </Link>
        <Link href="/class/nine" className="bg-black text-white py-2 px-4 rounded-sm text-center hover:bg-gray-800 transition">
          9th Class
        </Link>
        <Link href="/class/ten" className="bg-black text-white py-2 px-4 rounded-sm text-center hover:bg-gray-800 transition">
          10th Class
        </Link>
      </div>

      <div className="mt-auto pt-10">
        <Link href="/" className="bg-red-800 text-white py-2 px-6 rounded-md text-lg hover:bg-red-700 transition duration-300">
          Home
        </Link>
      </div>
    </div>
  )
}

export default Testquiz
