import { assets } from '@/assets/assets'
import { Fullscreen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DefaultPage = () => {
    return (
        <div>
            <Image src={assets.test} width={Fullscreen} height={Fullscreen}></Image>
            <div className='mt-10 p-4'>
            <h1 className='font-bold '> <span style={{color:"blue"}}>Class 8th Science Subjective Question </span> 2025 बिहार बोर्ड मैट्रिक परीक्षा 2025 (Bihar Board matric Exam 2025) की तैयारी कर रहा है छात्र-छात्राओं के लिए <br /><span style={{color: "violet"}}> <Link href={"/"}> Nafis Sir(nafissirchhaurahi.in)</Link></span> के द्वारा तैयार किया गया चैप्टर वाइज सब्जेक्टिव प्रश्नों (Chapter Wise Subjective Questions) का सेट काफी लाभदायक साबित होने जा रहा है आपको बता दे इस वर्ष की परीक्षा में भी 50% ऑब्जेक्टिव और 50% सब्जेक्टिव प्रश्न (Subjective Questions) पूछा जाना है ऐसे में अगर आप भी बिहार बोर्ड परीक्षा देने जा रहे हैं</h1>
            </div>


        </div>
    )
}

export default DefaultPage
