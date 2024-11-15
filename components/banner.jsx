import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div>
        <Image src={assets.test} alt='banner'  width={800} />
        
      
    </div>
  )
}

export default Banner
