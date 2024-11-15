import Link from 'next/link'
import React from 'react'

const Description = () => {
  return (
    <div className=' bg-blue-300 '>
        {/* <h1 className=' flex justify-center items-center py-4  text-4xl'>Nafis Sir</h1> */}
        <div className='flex justify-between p-14'>
        <div className=' text-black flex flex-col  '>
            <Link href= "/" className='hover:bg-blue-600 rounded-lg'>Home Page</Link>
            <Link href= "/testquiz" className='hover:bg-blue-600 rounded-lg'>Test Quiz</Link>
            <Link href= "/about" className='hover:bg-blue-600 rounded-lg'>About</Link>
        </div>
        <div className='text-black'>
            <h1>All Exam Text</h1>
            <p></p>
        </div>
        </div>
    </div>
  )
}
export default Description
