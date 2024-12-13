// import { assets } from '@/assets/assets';
// import Image from 'next/image';
// // import logo from '@/assets/logo.png';

// const Header = () => {
//   return (
//     <div className="py-5 px-5 md:px-12 lg:px-28">
//       <div className="flex justify-between items-center">
//         <Image src={assets.log} width={90} height={90} alt="Company Logo" className="w-[70px] h-[70px] sm:w-auto sm:h-auto" />
//         <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-5 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
//           Get Started <Image src={assets.arrow} />
//         </button>
//       </div>
//       <div className="text-center my-8">
//         <h1 className="text-3xl sm:text-5xl font-medium">Latest Update</h1>
//         <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
//           New change ipsum dolor sit amet consectetur, adipisicing elit. Earum expedita itaque nostrum quasi, quam repellat perspiciatis perferendis voluptas reiciendis adipisci consequatur  repudiandae?
//         </p>
//         <form className='flex justify-between max-w-[200] scale-75 sm:scale-90 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action="">
//           <input type="email" placeholder='Enter your email' className='pl-4 outline-none' />
//           <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
//         </form>

//       </div>
//     </div>
//   );
// };

// export default Header;


import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="py-4 px-4 md:px-8 lg:px-20 xl:px-32 bg-gray-100">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Logo */}
        {/* <Image 
          src={assets.logo} 
          width={90} 
          height={90} 
          alt="Company Logo" 
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
        /> */}
        
        {/* Get Started Button */}
        {/* <button className="flex items-center gap-2 font-medium py-2 px-3 md:py-3 md:px-6 border border-black shadow-[-4px_4px_0px_#000000] hover:bg-gray-200 transition duration-300">
          Get Started 
          <Image src={assets.arrow} width={16} height={16} alt="Arrow Icon" className="w-4 h-4 md:w-5 md:h-5" />
        </button> */}
      </div>

      {/* Content Section */}
      <div className="text-center mt-6 md:mt-10 lg:mt-12 xl:mt-14">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800">Welcome to Education World</h1>
        <p className="mt-4 font-medium sm:mt-6 lg:mt-8 max-w-lg mx-auto text-sm sm:text-base md:text-lg lg:text-2xl">
          {/* An innovative learning platform is under development, designed to transform education with engaging resources, interactive tools, and personalized learning experiences </p> */}
         <b style={{color:"red"}}> &quot; हमारी वेबसाइट अभी निर्माणाधीन है!
<br />
हमारी टीम मेहनत से काम कर रही है ताकि हम आपको जल्द ही एक बेहतरीन अनुभव प्रदान कर सकें। कृपया थोड़ा इंतजार करें और हमारी वेबसाइट को फिर से विजिट करें।
<br />
धन्यवाद! &quot;</b></p>



{/* <Link href={"/subject"}> got subject</Link>
<p>The fraction is &frac12;</p>
<p>The fraction is {'\u00BD'}</p>
<p>The fraction is &frac12;</p>
<div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
      <span>1</span>
      <span style={{ borderTop: '1px solid black', width: '100%' }}></span>
      <span>2</span>
    </div> */}

        {/* Subscription Form */}
        <form className="flex justify-between items-center max-w-xs sm:max-w-md lg:max-w-lg mx-auto mt-8 md:mt-10 border border-black shadow-[-4px_4px_0px_#000000]" action="">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow pl-4 py-3 outline-none text-sm sm:text-base"
          />
          <button 
            type="submit" 
            className="border-l border-black py-3 px-4 sm:px-6 text-xs sm:text-sm md:text-base lg:text-lg bg-gray-100 hover:bg-gray-300 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
