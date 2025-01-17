"use client"

import { assets, item_data } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = ({params}) => {

    const [data , setData] = useState(null)

    const fetchBlogData = () => {
        for(let i = 0; i < item_data.length;  i++)
        {
            if (Number(params.id) === item_data[i].id) {
                setData(item_data[i]);
                break;
                // console.log(item_data[i])
                
            } else {
                
            }
        }
    }
    useEffect(() => {
        fetchBlogData()

    }, [fetchBlogData]) /// solving error ashu write (fetchBlogData)

  return (data? <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Link href= "/">
            <Image src={assets.newblack} width={180} alt='' className='w-[130px] sm:w-auto'/>
            </Link>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Started
                <Image src={assets.arrow} alt=''/>
            </button>
        </div>
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto' >{data.title}</h1>
            <Image className='mx-auto mt-6 border border-white rounded-full ' src={data.author_img} width={60} height={60} alt=''/>
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div> 
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image src={data.image} width={1280} height={720}  alt='' className='border-4 border-white'/>
        <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
        <p>{data.description}</p>
        <h3 className='my-5  text-[18px] font-semibold'>Step 1: Self Reflection and Goal Setting</h3>
        <p className='my-3'>Before you can mange your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspiration, and long-term goals. </p>
        <p className='my-3'>Before you can mange your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspiration, and long-term goals. </p>
        <h3 className='my-5  text-[18px] font-semibold'>Step 2: Self Reflection and Goal Setting</h3>
        <p className='my-3'>Before you can mange your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspiration, and long-term goals. </p>
        <p className='my-3'>Before you can mange your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspiration, and long-term goals. </p>
        <h3 className='my-5  text-[18px] font-semibold'>Step 3: Self Reflection and Goal Setting</h3>
        <p className='my-3'>Before you can mange your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspiration, and long-term goals. </p>
        <p className='my-3'>Before you can mange your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspiration, and long-term goals. </p>
        <h3 className='my-5  text-[18px] font-semibold'>Conclusion:</h3>
        <p className='my-3'>Manging your lifestyle is a journey that requires commitment and self-awareness. By following this step-by-step guide, you can take control of your life and make meaningful changes that lead to a more balanced and fulfilling lifestyle. Remember that its&apos; okay to seek support and guidance from professionals or mentors along the way. Your well being and happiness are worth the effort.</p>

        <div className='my-24'>
            <p className='text-black font font-semibold my-4 '>Share this article on social media  </p>
            <div className='flex'>
             <Image src={assets.facebook_icon} width={50} alt=''/>
             <Image src={assets.twitter_icon} width={50} alt=''/>
             <Image src={assets.googleplus_icon} width={50} alt=''/>

            </div>
        </div>


        {/* <p className='my-3'>Before you can mange your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspiration, and long-term goals. </p> */}

    </div>
    </>:<></>
  )
}

export default Page;
