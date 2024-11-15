// "use client"
// import { item_data } from '@/assets/assets'
// import React, { useState } from 'react'
// import Item from './Item'
// import Link from 'next/link'

// const Itemlist = () => {

//     const [menu, setMenu] = useState("All")


//   return (
//     <div>
//         <div className='flex justify-center gap-6 my-10'>
//             <button onClick={() => setMenu("All")} className={menu === "All"? 'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
//             <button onClick={() => setMenu("Model Paper")} className={menu === "Model Paper"? 'bg-black text-white py-1 px-4 rounded-sm':""}>Model Paper</button>
//             <button onClick={() => setMenu("Notes")} className={menu === "Notes"? 'bg-black text-white py-1 px-4 rounded-sm':""}>Notes</button>
//             <button onClick={() => setMenu("Latest Update")} className={menu === "Latest Update"? 'bg-black text-white py-1 px-4 rounded-sm':""}>Latest Update</button>
//             <button onClick={() => setMenu("Test Quiz")} className={menu === "Test Quiz"? 'bg-black text-white py-1 px-4 rounded-sm':""}>
//             Test Quiz
//                 </button>
//             <Link href= "/textquiz">Test Quiz</Link>

//         </div>
//         <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
//             {item_data.filter((item)=> menu === "All" ?true:item.category===menu ).map((item, index)=> {
//                 return <Item key={index} image = {item.image} title = {item.title} description={item.description} category={item.category} />

//             })}
//         </div>
//     </div>
//   )
// }

// export default Itemlist


// "use client";

// import { item_data } from '@/assets/assets';
// import React, { useState } from 'react';
// import Item from './Item';
// import Link from 'next/link';

// const Itemlist = () => {
//   const [menu, setMenu] = useState("All");

//   const buttonClasses = (category) =>
//     menu === category ? '  bg-black text-white py-1 px-4 rounded-sm' : '';

//   return (
//     <div>
//       <div className="flex justify-center gap-6 my-10 ">
//         <button onClick={() => setMenu("All")} className={ buttonClasses("All")}>
//           All
//         </button>
//         <button onClick={() => setMenu("Model Paper")} className={buttonClasses("Model Paper")}>
//           Model Paper
//         </button>
//         <button onClick={() => setMenu("Notes")} className={buttonClasses("Notes")}>
//           Notes
//         </button>
//         <button onClick={() => setMenu("Latest Update")} className={buttonClasses("Latest Update")}>
//           Latest Update
//         </button>
//         <button onClick={() => setMenu("Blog")} className={buttonClasses("Blog")}>
//           Blog
//         </button>
//         <Link href="/testquiz" className={buttonClasses("Test Quiz")} >
//           Test Quiz
//         </Link>
//         {/* className="bg-black text-white py-1 px-4 rounded-sm" */}
//       </div>

//       <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
//         {item_data
//           .filter((item) => (menu === "All" ? true : item.category === menu))
//           .map((item, index) => (
//             <Item
//               key={index}
//               image={item.image}
//               title={item.title}
//               description={item.description}
//               category={item.category}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Itemlist;





// "use client";

// import { item_data } from "@/assets/assets";
// import React, { useState } from "react";
// import Item from "./Item";
// import Link from "next/link";

// const Itemlist = () => {
//   const [menu, setMenu] = useState("All");

//   // Dynamic button classes
//   const buttonClasses = (category) =>
//     `py-2 px-4 rounded-full font-medium transition-colors duration-300 ${
//       menu === category
//         ? "bg-black text-white shadow-md"
//         : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
//     }`;

//   return (
//     <div className="py-10 px-5">
//       {/* Category Menu */}
//       <div className="flex flex-wrap justify-center gap-4 mb-10">
//         <button onClick={() => setMenu("All")} className={buttonClasses("All")}>
//           All
//         </button>
//         <button
//           onClick={() => setMenu("Model Paper")}
//           className={buttonClasses("Model Paper")}
//         >
//           Model Paper
//         </button>
//         <button
//           onClick={() => setMenu("Notes")}
//           className={buttonClasses("Notes")}
//         >
//           Notes
//         </button>
//         <button
//           onClick={() => setMenu("Latest Update")}
//           className={buttonClasses("Latest Update")}
//         >
//           Latest Update
//         </button>
//         <button onClick={() => setMenu("Blog")} className={buttonClasses("Blog")}>
//           Blog
//         </button>
//         <Link href="/testquiz">
//           <button className={buttonClasses("Test Quiz")}>Test Quiz</button>
//         </Link>
//       </div>

//       {/* Item Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {item_data
//           .filter((item) => (menu === "All" ? true : item.category === menu))
//           .map((item, index) => (
//             <Item
//               key={index}
//               image={item.image}
//               title={item.title}
//               description={item.description}
//               category={item.category}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Itemlist;




// "use client";

// import { item_data } from "@/assets/assets";
// import React, { useState } from "react";
// import Item from "./Item";
// import Link from "next/link";

// const Itemlist = () => {
//   const [menu, setMenu] = useState("All");

//   // Dynamic button classes with updated colors
//   const buttonClasses = (category) =>
//     `py-2 px-4 rounded-full font-medium transition-transform transform duration-300 ${
//       menu === category
//         ? "bg-indigo-600 text-white shadow-lg scale-105"
//         : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:text-indigo-800"
//     }`;

//   return (
//     <div className="py-10 px-5 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
//       {/* Category Menu */}
//       <div className="flex flex-wrap justify-center gap-4 mb-10">
//         <button onClick={() => setMenu("All")} className={buttonClasses("All")}>
//           All
//         </button>
//         <button
//           onClick={() => setMenu("Model Paper")}
//           className={buttonClasses("Model Paper")}
//         >
//           Model Paper
//         </button>
//         <button
//           onClick={() => setMenu("Notes")}
//           className={buttonClasses("Notes")}
//         >
//           Notes
//         </button>
//         <button
//           onClick={() => setMenu("Latest Update")}
//           className={buttonClasses("Latest Update")}
//         >
//           Latest Update
//         </button>
//         <button onClick={() => setMenu("Blog")} className={buttonClasses("Blog")}>
//           Blog
//         </button>
//         <Link href="/testquiz">
//           <button className={buttonClasses("Test Quiz")}>Test Quiz</button>
//         </Link>
//       </div>

//       {/* Item Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {item_data
//           .filter((item) => (menu === "All" ? true : item.category === menu))
//           .map((item, index) => (
//             <Item
//               key={index}
//               image={item.image}
//               title={item.title}
//               description={item.description}
//               category={item.category}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Itemlist;


// "use client";

// import { item_data } from "@/assets/assets";
// import React, { useState } from "react";
// import Item from "./Item";
// import Link from "next/link";

// const Itemlist = () => {
//   const [menu, setMenu] = useState("All");

//   const buttonClasses = (category) =>
//     `py-2 px-4 rounded-full font-medium transition-all duration-300 ${
//       menu === category
//         ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
//         : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-800"
//     }`;

//   return (
//     <div className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Category Menu */}
//       <div className="flex flex-wrap justify-center gap-4 mb-10">
//         <button onClick={() => setMenu("All")} className={buttonClasses("All")}>
//           All
//         </button>
//         <button
//           onClick={() => setMenu("Model Paper")}
//           className={buttonClasses("Model Paper")}
//         >
//           Model Paper
//         </button>
//         <button
//           onClick={() => setMenu("Notes")}
//           className={buttonClasses("Notes")}
//         >
//           Notes
//         </button>
//         <button
//           onClick={() => setMenu("Latest Update")}
//           className={buttonClasses("Latest Update")}
//         >
//           Latest Update
//         </button>
//         <button onClick={() => setMenu("Blog")} className={buttonClasses("Blog")}>
//           Blog
//         </button>
//         <Link href="/testquiz">
//           <button className={buttonClasses("Test Quiz")}>Test Quiz</button>
//         </Link>
//       </div>

//       {/* Item Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {item_data
//           .filter((item) => (menu === "All" ? true : item.category === menu))
//           .map((item, index) => (
//             <Item
//               key={index}
//               image={item.image}
//               title={item.title}
//               description={item.description}
//               category={item.category}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Itemlist;




"use client";

import { item_data } from "@/assets/assets";
import React, { useState } from "react";
import Item from "./Item";
import Link from "next/link";

const Itemlist = () => {
  const [menu, setMenu] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttonClasses = (category) =>
    `py-2 px-4 rounded-full font-medium transition-all duration-300 ${
      menu === category
        ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
        : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-800"
    }`;

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Mobile Menu Toggle */}
      <div className="flex justify-between items-center mb-6 md:hidden">
        <h2 className="text-lg font-semibold">Categories</h2>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Categories Menu */}
      <div
        className={`flex-col md:flex md:flex-row md:justify-center gap-4 mb-10 ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <button onClick={() => setMenu("All")} className={buttonClasses("All")}>
          All
        </button>
        <button
          onClick={() => setMenu("Model Paper")}
          className={buttonClasses("Model Paper")}
        >
          Model Paper
        </button>
        <button
          onClick={() => setMenu("Notes")}
          className={buttonClasses("Notes")}
        >
          Notes
        </button>
        <button
          onClick={() => setMenu("Latest Update")}
          className={buttonClasses("Latest Update")}
        >
          Latest Update
        </button>
        <button onClick={() => setMenu("Blog")} className={buttonClasses("Blog")}>
          Blog
        </button>
        <Link href="/testquiz">
          <button className={buttonClasses("Test Quiz")}>Test Quiz</button>
        </Link>
      </div>

      {/* Item Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {item_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => (
            <Item
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
};

export default Itemlist;
