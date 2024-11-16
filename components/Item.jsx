// import { assets, item_data } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'

// const Item = ({title, description, category, image}) => {
//   return (
//     <div className='max-w-[330px] sm:max-w-[330px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
//       {/* <h1>Adarsh</h1> */}
//       <Image src={image} alt='notload'  width={400} height={400} className='' />
//       <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm '>{category}</p>
//       <div className='p-5'>
//         <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
//         <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
//         <div className='inline-flex items-center py-2 font-semibold text-center'>
//           Read more 
//           <Image src={assets.arrow} alt='' className='ml-2' width={12}/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Item





import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ title, description, category, image }) => {
  return (
    <div className="max-w-[350px] bg-white/90 border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-br hover:from-white hover:via-gray-100 hover:to-gray-200">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Image 
          src={image} 
          alt={`${title} image`} 
          width={400} 
          height={400} 
          className="object-cover w-full h-60 rounded-t-lg transition-transform duration-300 hover:scale-110"
        />
        <p className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-md uppercase tracking-wide">
          {category}
        </p>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h5 className="text-xl font-semibold text-gray-800 mb-3 hover:text-gray-600 transition-colors duration-200">
          {title}
        </h5>
        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>
        <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-all duration-300 group">
          Read more
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75l-4.5 4.5m0 0l-4.5-4.5m4.5 4.5V3.75" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Prop Validation
Item.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Item;
