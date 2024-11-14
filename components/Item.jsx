import { assets, item_data } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Item = ({title, description, category, image}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[330px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      {/* <h1>Adarsh</h1> */}
      <Image src={image} alt='notload'  width={400} height={400} className='' />
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm '>{category}</p>
      <div className='p-5'>
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
        <div className='inline-flex items-center py-2 font-semibold text-center'>
          Read more 
          <Image src={assets.arrow} alt='' className='ml-2' width={12}/>
        </div>
      </div>
    </div>
  )
}

export default Item
