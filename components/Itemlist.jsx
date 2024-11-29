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

// export default Itemlist;


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




"use client";

import { item_data } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import Link from "next/link";

const Itemlist = () => {
  const [menu, setMenu] = useState("All");

  // Dynamic button classes with updated colors
  const buttonClasses = (category) =>
    `py-2 px-4 rounded-full font-medium transition-transform transform duration-300 ${
      menu === category
        ? "bg-indigo-600 text-white shadow-lg scale-105"
        : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:text-indigo-800"
    }`;
      // Prevent text selection, right-click, and copy actions
  useEffect(() => {
    // Disable text selection
    document.body.style.userSelect = "none";

    // Disable right-click globally
    document.addEventListener("contextmenu", (event) => event.preventDefault());

    // Disable copy/cut/paste keyboard shortcuts
    document.addEventListener("keydown", (event) => {
      if (
        (event.ctrlKey && event.key === "c") ||
        (event.ctrlKey && event.key === "v") ||
        (event.ctrlKey && event.key === "x")
      ) {
        event.preventDefault();
      }
    });

    // Disable right-click on images specifically
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("contextmenu", (event) => event.preventDefault());
    });

    // Clean up event listeners when the component is unmounted
    return () => {
      document.removeEventListener("contextmenu", (event) => event.preventDefault());
      document.removeEventListener("keydown", (event) => {
        if (
          (event.ctrlKey && event.key === "c") ||
          (event.ctrlKey && event.key === "v") ||
          (event.ctrlKey && event.key === "x")
        ) {
          event.preventDefault();
        }
      });
    };
  }, []);

  return (
    <div className="py-10 px-5 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      {/* Category Menu */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button onClick={() => setMenu("All")} className={buttonClasses("All")}>
          All
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
              id = {item.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Itemlist;


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




// "use client";

// import { item_data } from "@/assets/assets";
// import React, { useState } from "react";
// import Item from "./Item";
// import Link from "next/link";

// const Itemlist = () => {
//   const [menu, setMenu] = useState("All");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const buttonClasses = (category) =>
//     `py-2 px-4 rounded-full font-medium transition-all duration-300 ${
//       menu === category
//         ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
//         : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-800"
//     }`;

//   return (
//     <div className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Mobile Menu Toggle */}
//       <div className="flex justify-between items-center mb-6 md:hidden">
//         <h2 className="text-lg font-semibold">Categories</h2>
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="p-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Categories Menu */}
//       <div
//         className={`flex-col md:flex md:flex-row md:justify-center gap-4 mb-10 ${
//           isMenuOpen ? "flex" : "hidden"
//         }`}
//       >
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
//         <Link href="/testquiz" className={buttonClasses("Blog ")}>
//           <button >Test Quiz</button>
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
//               id = {item.id}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Itemlist;




// drop down latest code


// "use client";

// import { item_data } from "@/assets/assets";
// import React, { useState } from "react";
// import Item from "./Item";
// import Link from "next/link";

// const Itemlist = () => {
//   const [menu, setMenu] = useState("All");

//   const categories = [
//     { name: "All", subcategories: [] },
//     { name: "Model Paper", subcategories: ["Class 10", "Class 12"] },
//     { name: "Notes", subcategories: ["Math", "Science", "History"] },
//     { name: "Latest Update", subcategories: ["News", "Events"] },
//     { name: "Blog", subcategories: [] },
//     { name: "Test Quiz", subcategories: [], isLink: true, link: "/testquiz" },
//   ];

//   const buttonClasses = (category) =>
//     `relative py-2 px-4 rounded-full font-medium transition-all duration-300 ${
//       menu === category
//         ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
//         : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-800"
//     }`;

//   return (
//     <div className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Dropdown Buttons */}
//       <div className="flex flex-wrap justify-center gap-6 mb-10">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="relative group" // Use `group` for hover-based styling
//           >
//             {cat.isLink ? (
//               <Link href={cat.link}>
//                 <button
//                   className={buttonClasses(cat.name)}
//                   onClick={() => setMenu(cat.name)}
//                 >
//                   {cat.name}
//                 </button>
//               </Link>
//             ) : (
//               <button
//                 className={buttonClasses(cat.name)}
//                 onClick={() => setMenu(cat.name)}
//               >
//                 {cat.name}
//               </button>
//             )}

//             {/* Dropdown Options (appear on hover) */}
//             {cat.subcategories.length > 0 && (
//               <div className="absolute hidden group-hover:block mt-2 w-48 bg-white border rounded shadow-lg z-10">
//                 {cat.subcategories.map((sub, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setMenu(sub)}
//                     className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
//                   >
//                     {sub}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
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
//               id={item.id}
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

//   const categories = [
//     { name: "All", subcategories: [] },
//     { name: "Model Paper", subcategories: ["Class 10", "Class 12"] },
//     { name: "Notes", subcategories: ["Math", "Science", "History"] },
//     { name: "Latest Update", subcategories: ["News", "Events"] },
//     {
//       name: "Test Quiz",
//       subcategories: [
//         { name: "Quiz 1", link: "/testquiz/quiz1" },
//         { name: "Quiz 2", link: "/testquiz/quiz2" },
//         { name: "Quiz 3", link: "/testquiz/quiz3" },
//       ],
//     },
//   ];

//   const buttonClasses = (category) =>
//     `relative py-2 px-4 rounded-full font-medium transition-all duration-300 ${
//       menu === category
//         ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
//         : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-800"
//     }`;

//   return (
//     <div className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Dropdown Buttons */}
//       <div className="flex flex-wrap justify-center gap-6 mb-10">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="relative group" // Use `group` for hover-based styling
//           >
//             <button
//               className={buttonClasses(cat.name)}
//               onClick={() => setMenu(cat.name)}
//             >
//               {cat.name}
//             </button>

//             {/* Dropdown Options (appear on hover) */}
//             {cat.subcategories.length > 0 && (
//               <div className="absolute hidden group-hover:block mt-2 w-48 bg-white border rounded shadow-lg z-10">
//                 {cat.subcategories.map((sub, i) => (
//                   <Link key={i} href={sub.link || "#"}>
//                     <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                       {sub.name}
//                     </a>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
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
//               id={item.id}
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

//   const categories = [
//     { name: "All", subcategories: [] },
//     { name: "Model Paper", subcategories: ["Class 10", "Class 12"] },
//     { name: "Notes", subcategories: ["Math", "Science", "History"] },
//     { name: "Latest Update", subcategories: ["News", "Events"] },
//     {
//       name: "Test Quiz",
//       subcategories: [
//         { name: "Quiz 1", link: "/testquiz/quiz1" },
//         { name: "Quiz 2", link: "/testquiz/quiz2" },
//         { name: "Quiz 3", link: "/testquiz/quiz3" },
//       ],
//     },
//   ];

//   const buttonClasses = (category) =>
//     `relative py-2 px-4 rounded-full font-medium transition-all duration-300 ${
//       menu === category
//         ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
//         : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-800"
//     }`;

//   return (
//     <div className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Dropdown Buttons */}
//       <div className="flex flex-wrap justify-center gap-6 mb-10">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="relative group" // Use `group` for hover-based styling
//           >
//             <button
//               className={buttonClasses(cat.name)}
//               onClick={() => setMenu(cat.name)}
//             >
//               {cat.name}
//             </button>

//             {/* Dropdown Options (appear on hover) */}
//             {cat.subcategories.length > 0 && (
//               <div className="absolute hidden group-hover:block mt-2 w-48 bg-white border rounded shadow-lg z-10">
//                 {cat.subcategories.map((sub, i) => (
//                   <Link key={i} href={sub.link || "#"}>
//                     <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                       {sub.name}
//                     </a>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
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
//               id={item.id}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Itemlist;




///// new check 
// "use client";

// import { item_data } from "@/assets/assets";
// import React, { useState } from "react";
// import Item from "./Item";
// import Link from "next/link";

// const Itemlist = () => {
//   const [menu, setMenu] = useState("All");

//   const categories = [
//     { name: "All", subcategories: [] },
//     { name: "Blog", subcategories: [] },
//     {
//       name: "Objective",
//       subcategories: [
//         { name: "Math", link: "/objective/math" },
//         { name: "Science", link: "/objective/science" },
//         { name: "English", link: "/objective/english" },
//       ],
//     },
//     {
//       name: "Model Paper",
//       subcategories: [
//         { name: "Math", link: "/modelpaper/math" },
//         { name: "Science", link: "/modelpaper/science" },
//         { name: "English", link: "/modelpaper/english" },
//       ],
//     },
//     {
//       name: "Notes",
//       subcategories: [
//         { name: "Math", link: "/notes/math" },
//         { name: "Science", link: "/notes/science" },
//         { name: "English", link: "/notes/english" },
//       ],
//     },
 
//     {
//       name: "Test Quiz",
//       subcategories: [
//         { name: "Math", link: "/math" },
//         { name: "Science", link: "/testquiz/science" },
//         { name: "English", link: "/testquiz/english" },
//       ],
//     },
//   ];

//   const buttonClasses = (category) =>
//     `relative py-2 px-4 rounded-full font-medium transition-all duration-300 ${
//       menu === category
//         ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
//         : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-800"
//     }`;

//   return (
//     <div className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Dropdown Buttons */}
//       <div className="flex flex-wrap justify-center gap-6 mb-10">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="relative group" // Use `group` for hover-based styling
//           >
//             <button
//               className={buttonClasses(cat.name)}
//               onClick={() => setMenu(cat.name)}
//             >
//               {cat.name}
//             </button>

//             {/* Dropdown Options (appear on hover) */}
//             {cat.subcategories.length > 0 && (
//               <div className="absolute left-0 hidden group-hover:block mt-2 w-48 bg-white border rounded shadow-lg z-10">
//                 {cat.subcategories.map((sub, i) => (
//                   <Link key={i} href={sub.link || "#"} passHref>
//                     <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
//                       {sub.name}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
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
//               id={item.id}
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
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // state for mobile menu toggle

//   const categories = [
//     { name: "All", subcategories: [] },
//     { name: "Blog", subcategories: [] },
//     {
//       name: "Objective",
//       subcategories: [
//         { name: "Math", link: "/objective/math" },
//         { name: "Science", link: "/objective/science" },
//         { name: "English", link: "/objective/english" },
//       ],
//     },
//     {
//       name: "Model Paper",
//       subcategories: [
//         { name: "Math", link: "/modelpaper/math" },
//         { name: "Science", link: "/modelpaper/science" },
//         { name: "English", link: "/modelpaper/english" },
//       ],
//     },
//     {
//       name: "Notes",
//       subcategories: [
//         { name: "Math", link: "/notes/math" },
//         { name: "Science", link: "/notes/science" },
//         { name: "English", link: "/notes/english" },
//       ],
//     },
//     {
//       name: "Test Quiz",
//       subcategories: [
//         { name: "Math", link: "/math" },
//         { name: "Science", link: "/testquiz/science" },
//         { name: "English", link: "/testquiz/english" },
//       ],
//     },
//   ];

//   const buttonClasses = (category) =>
//     `relative py-2 px-4 rounded-full font-medium transition-all duration-300 ${
//       menu === category
//         ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
//         : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-800"
//     }`;

//   return (
//     <div className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Mobile Menu Toggle */}
//       <div className="flex justify-between items-center mb-6 md:hidden">
//         <h2 className="text-lg font-semibold">Categories</h2>
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="p-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Categories Menu */}
//       <div
//         className={`flex-col md:flex md:flex-row md:justify-center gap-4 mb-10 ${
//           isMenuOpen ? "flex" : "hidden"
//         }`}
//       >
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="relative group"
//           >
//             <button
//               className={buttonClasses(cat.name)}
//               onClick={() => setMenu(cat.name)} // Optional click-based category switching
//             >
//               {cat.name}
//             </button>

//             {/* Dropdown Options (appear on hover for large screens) */}
//             {cat.subcategories.length > 0 && (
//               <div className="absolute left-0 hidden group-hover:block mt-2 w-48 bg-white border rounded shadow-lg z-10 hover:bg-indigo-50 transition-all duration-200">
//                 {cat.subcategories.map((sub, i) => (
//                   <Link key={i} href={sub.link || "#"} passHref>
//                     <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
//                       {sub.name}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
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
//               id={item.id}
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
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // state for mobile menu toggle

//   const categories = [
//     { name: "All", subcategories: [] },
//     { name: "Blog", subcategories: [] },
//     {
//       name: "Objective",
//       subcategories: [
//         { name: "Math", link: "/objective/math" },
//         { name: "Science", link: "/objective/science" },
//         { name: "English", link: "/objective/english" },
//       ],
//     },
//     {
//       name: "Model Paper",
//       subcategories: [
//         { name: "Math", link: "/modelpaper/math" },
//         { name: "Science", link: "/modelpaper/science" },
//         { name: "English", link: "/modelpaper/english" },
//       ],
//     },
//     {
//       name: "Notes",
//       subcategories: [
//         { name: "Math", link: "/notes/math" },
//         { name: "Science", link: "/notes/science" },
//         { name: "English", link: "/notes/english" },
//       ],
//     },
//     {
//       name: "Test Quiz",
//       subcategories: [
//         { name: "Math", link: "/math" },
//         { name: "Science", link: "/testquiz/science" },
//         { name: "English", link: "/testquiz/english" },
//       ],
//     },
//   ];

//   const buttonClasses = (category) =>
//     `relative py-2 px-6 rounded-full font-medium text-lg transition-all duration-300 ${
//       menu === category
//         ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl"
//         : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-indigo-300 hover:to-purple-200 hover:text-indigo-800 hover:shadow-md"
//     }`;

//   return (
//     <div className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Mobile Menu Toggle */}
//       <div className="flex justify-between items-center mb-6 md:hidden">
//         <h2 className="text-lg font-semibold text-gray-800">Categories</h2>
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="p-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none transition-all duration-200"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Categories Menu */}
//       <div
//         className={`flex-col md:flex md:flex-row md:justify-center gap-4 mb-10 ${
//           isMenuOpen ? "flex" : "hidden"
//         }`}
//       >
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="relative group"
//           >
//             <button
//               className={buttonClasses(cat.name)}
//               onClick={() => setMenu(cat.name)} // Optional click-based category switching
//             >
//               {cat.name}
//             </button>

//             {/* Dropdown Options (appear on hover for large screens) */}
//             {cat.subcategories.length > 0 && (
//               <div className="absolute left-0 hidden group-hover:block mt-2 w-48 bg-white border border-gray-300 rounded-xl shadow-xl z-10 hover:bg-indigo-50 transition-all duration-200">
//                 {cat.subcategories.map((sub, i) => (
//                   <Link key={i} href={sub.link || "#"} passHref>
//                     <div className="block px-4 py-3 text-gray-700 hover:bg-indigo-100 cursor-pointer rounded-xl transition-all duration-200">
//                       {sub.name}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
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
//               id={item.id}
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
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // state for mobile menu toggle

//   const categories = [
//     { name: "All", subcategories: [] },
//     { name: "Blog", subcategories: [] },
//     {
//       name: "Objective",
//       subcategories: [
//         { name: "Math", link: "/objective/math" },
//         { name: "Science", link: "/objective/science" },
//         { name: "English", link: "/objective/english" },
//       ],
//     },
//     {
//       name: "Model Paper",
//       subcategories: [
//         { name: "Math", link: "/modelpaper/math" },
//         { name: "Science", link: "/modelpaper/science" },
//         { name: "English", link: "/modelpaper/english" },
//       ],
//     },
//     {
//       name: "Notes",
//       subcategories: [
//         { name: "Math", link: "/notes/math" },
//         { name: "Science", link: "/notes/science" },
//         { name: "English", link: "/notes/english" },
//       ],
//     },
//     {
//       name: "Test Quiz",
//       subcategories: [
//         { name: "Math", link: "/math" },
//         { name: "Science", link: "/testquiz/science" },
//         { name: "English", link: "/testquiz/english" },
//       ],
//     },
//   ];

//   const buttonClasses = (category) =>
//     `relative py-2 px-6 rounded-full font-medium text-lg transition-all duration-300 ${
//       menu === category
//         ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl"
//         : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-indigo-300 hover:to-purple-200 hover:text-indigo-800 hover:shadow-md"
//     }`;

//   return (
//     <div className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Mobile Menu Toggle */}
//       <div className="flex justify-between items-center mb-6 md:hidden bg-indigo-600 py-2 px-4 rounded-lg shadow-lg">
//         <h2 className="text-lg font-semibold text-white">Categories</h2>
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="p-2 rounded-md bg-white text-indigo-600 hover:bg-gray-200 focus:outline-none transition-all duration-200"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile and Tablet Menu */}
//       <div
//         className={`flex-col md:flex md:flex-row md:justify-center gap-4 mb-10 bg-indigo-100 md:bg-transparent p-4 rounded-lg md:p-0 ${
//           isMenuOpen ? "flex" : "hidden"
//         } md:flex md:items-center`}
//       >
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="relative group"
//           >
//             <button
//               className={buttonClasses(cat.name)}
//               onClick={() => setMenu(cat.name)} // Optional click-based category switching
//             >
//               {cat.name}
//             </button>

//             {/* Dropdown Options (appear on hover for large screens, or when clicked on mobile) */}
//             {cat.subcategories.length > 0 && (
//               <div className="absolute left-0 hidden group-hover:block mt-2 w-48 bg-white border border-gray-300 rounded-xl shadow-xl z-10 hover:bg-indigo-50 transition-all duration-200 md:flex md:flex-col md:w-60">
//                 {cat.subcategories.map((sub, i) => (
//                   <Link key={i} href={sub.link || "#"} passHref>
//                     <div className="block px-4 py-3 text-gray-700 hover:bg-indigo-100 cursor-pointer rounded-xl transition-all duration-200">
//                       {sub.name}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
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
//               id={item.id}
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
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

//   const categories = [
//     { name: "All", subcategories: [] },
//     { name: "Blog", subcategories: [] },
//     {
//       name: "Objective",
//       subcategories: [
//         { name: "Math", link: "/objective/math" },
//         { name: "Science", link: "/objective/science" },
//         { name: "English", link: "/objective/english" },
//       ],
//     },
//     {
//       name: "Model Paper",
//       subcategories: [
//         { name: "Math", link: "/modelpaper/math" },
//         { name: "Science", link: "/modelpaper/science" },
//         { name: "English", link: "/modelpaper/english" },
//       ],
//     },
//     {
//       name: "Notes",
//       subcategories: [
//         { name: "Math", link: "/notes/math" },
//         { name: "Science", link: "/notes/science" },
//         { name: "English", link: "/notes/english" },
//       ],
//     },
//     {
//       name: "Test Quiz",
//       subcategories: [
//         { name: "Math", link: "/math" },
//         { name: "Science", link: "/testquiz/science" },
//         { name: "English", link: "/testquiz/english" },
//       ],
//     },
//   ];

//   const buttonClasses = (category) =>
//     `relative py-2 px-6 rounded-full font-medium text-lg transition-all duration-300 ${
//       menu === category
//         ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl"
//         : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-indigo-300 hover:to-purple-200 hover:text-indigo-800 hover:shadow-md"
//     }`;

//   return (
//     <div className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Mobile Menu Toggle */}
//       <div className="flex justify-between items-center mb-6 md:hidden bg-indigo-600 py-2 px-4 rounded-lg shadow-lg">
//         <h2 className="text-lg font-semibold text-white">Categories</h2>
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="p-2 rounded-md bg-white text-indigo-600 hover:bg-gray-200 focus:outline-none transition-all duration-200"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile and Tablet Menu */}
//       <div
//         className={`flex-col md:flex md:flex-row md:justify-center gap-4 mb-10 bg-indigo-100 md:bg-transparent p-4 rounded-lg md:p-0 ${
//           isMenuOpen ? "flex" : "hidden"
//         } md:flex md:items-center`}
//       >
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="relative group w-full" // Added `w-full` for full width on mobile
//           >
//             <button
//               className={`${buttonClasses(cat.name)} w-full`} // Full width button on mobile
//               onClick={() => setMenu(cat.name)} // Optional click-based category switching
//             >
//               {cat.name}
//             </button>

//             {/* Dropdown Options (appear on hover for large screens, or when clicked on mobile) */}
//             {cat.subcategories.length > 0 && (
//               <div className="absolute left-0 hidden group-hover:block mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-xl z-10 hover:bg-indigo-50 transition-all duration-200 md:flex md:flex-col md:w-60">
//                 {cat.subcategories.map((sub, i) => (
//                   <Link key={i} href={sub.link || "#"} passHref>
//                     <div className="block w-full px-4 py-3 text-gray-700 hover:bg-indigo-100 cursor-pointer rounded-xl transition-all duration-200">
//                       {sub.name}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
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
//               id={item.id}
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
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state

//   const categories = [
//     { name: "All", subcategories: [] },
//     { name: "Blog", subcategories: [] },
//     {
//       name: "Objective",
//       subcategories: [
//         { name: "Math", link: "/objective/math" },
//         { name: "Science", link: "/objective/science" },
//         { name: "English", link: "/objective/english" },
//       ],
//     },
//     {
//       name: "Model Paper",
//       subcategories: [
//         { name: "Math", link: "/modelpaper/math" },
//         { name: "Science", link: "/modelpaper/science" },
//         { name: "English", link: "/modelpaper/english" },
//       ],
//     },
//     {
//       name: "Notes",
//       subcategories: [
//         { name: "Math", link: "/notes/math" },
//         { name: "Science", link: "/notes/science" },
//         { name: "English", link: "/notes/english" },
//       ],
//     },
//     {
//       name: "Test Quiz",
//       subcategories: [
//         { name: "Math", link: "/testquiz/math" },
//         { name: "Science", link: "/testquiz/science" },
//         { name: "English", link: "/testquiz/english" },
//       ],
//     },
//   ];

//   const buttonClasses = (category) =>
//     `relative py-2 px-6 rounded-full font-medium text-lg transition-all duration-300 ${
//       menu === category
//         ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl"
//         : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-indigo-300 hover:to-purple-200 hover:text-indigo-800 hover:shadow-md"
//     }`;

//   return (
//     <div className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Mobile Menu Toggle */}
//       <div className="flex justify-between items-center mb-6 md:hidden bg-indigo-600 py-2 px-4 rounded-lg shadow-lg">
//         <h2 className="text-lg font-semibold text-white">Categories</h2>
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="p-2 rounded-md bg-white text-indigo-600 hover:bg-gray-200 focus:outline-none transition-all duration-200"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile and Tablet Menu */}
//       <div
//         className={`flex-col md:flex md:flex-row md:justify-center gap-4 mb-10 bg-indigo-100 md:bg-transparent p-4 rounded-lg md:p-0 ${
//           isMenuOpen ? "flex" : "hidden"
//         } md:flex md:items-center`}
//       >
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="relative group w-full" // `w-full` ensures full width in mobile mode
//           >
//             <button
//               className={`${buttonClasses(cat.name)} w-full`} // Full width button on mobile
//               onClick={() => setMenu(cat.name)}
//             >
//               {cat.name}
//             </button>

//             {/* Dropdown Options (appear on hover for large screens, or when clicked on mobile) */}
//             {cat.subcategories.length > 0 && (
//               <div
//                 className={`absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-xl z-10 ${
//                   cat.subcategories.length > 0 ? "group-hover:block hidden" : "hidden"
//                 }`}
//               >
//                 {cat.subcategories.map((sub, i) => (
//                   <Link key={i} href={sub.link || "#"} passHref>
//                     <div className="block w-full px-4 py-3 text-gray-700 hover:bg-indigo-100 cursor-pointer rounded-xl transition-all duration-200">
//                       {sub.name}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
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
//               id={item.id}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Itemlist;




// "use client";

// import { item_data } from "@/assets/assets";
// import React, { useState, useEffect } from "react";
// import Item from "./Item";
// import Link from "next/link";

// const Itemlist = () => {
//   const [menu, setMenu] = useState("All");
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state

//   const categories = [
//     { name: "All", subcategories: [] },
//     { name: "Blog", subcategories: [] },
//     {
//       name: "Objective",
//       subcategories: [
//         { name: "Math", link: "/objective/math" },
//         { name: "Science", link: "/objective/science" },
//         { name: "English", link: "/objective/english" },
//       ],
//     },
//     {
//       name: "Model Paper",
//       subcategories: [
//         { name: "Math", link: "/modelpaper/math" },
//         { name: "Science", link: "/modelpaper/science" },
//         { name: "English", link: "/modelpaper/english" },
//       ],
//     },
//     {
//       name: "Notes",
//       subcategories: [
//         { name: "Math", link: "/notes/math" },
//         { name: "Science", link: "/notes/science" },
//         { name: "English", link: "/notes/english" },
//       ],
//     },
//     {
//       name: "Test Quiz",
//       subcategories: [
//         { name: "Math", link: "/testquiz/math" },
//         { name: "Science", link: "/testquiz/science" },
//         { name: "English", link: "/testquiz/english" },
//       ],
//     },
//   ];

//   const buttonClasses = (category) =>
//     `relative py-2 px-6 rounded-full font-medium text-lg transition-all duration-300 ${
//       menu === category
//         ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl"
//         : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-indigo-300 hover:to-purple-200 hover:text-indigo-800 hover:shadow-md"
//     }`;

//   // Prevent text selection, right-click, and copy actions
//   useEffect(() => {
//     // Disable text selection
//     document.body.style.userSelect = "none";

//     // Disable right-click globally
//     document.addEventListener("contextmenu", (event) => event.preventDefault());

//     // Disable copy/cut/paste keyboard shortcuts
//     document.addEventListener("keydown", (event) => {
//       if (
//         (event.ctrlKey && event.key === "c") ||
//         (event.ctrlKey && event.key === "v") ||
//         (event.ctrlKey && event.key === "x")
//       ) {
//         event.preventDefault();
//       }
//     });

//     // Disable right-click on images specifically
//     document.querySelectorAll("img").forEach((img) => {
//       img.addEventListener("contextmenu", (event) => event.preventDefault());
//     });

//     // Clean up event listeners when the component is unmounted
//     return () => {
//       document.removeEventListener("contextmenu", (event) => event.preventDefault());
//       document.removeEventListener("keydown", (event) => {
//         if (
//           (event.ctrlKey && event.key === "c") ||
//           (event.ctrlKey && event.key === "v") ||
//           (event.ctrlKey && event.key === "x")
//         ) {
//           event.preventDefault();
//         }
//       });
//     };
//   }, []);

//   return (
//     <div className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Mobile Menu Toggle */}
//       <div className="flex justify-between items-center mb-6 md:hidden bg-indigo-600 py-2 px-4 rounded-lg shadow-lg">
//         <h2 className="text-lg font-semibold text-white">Categories</h2>
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="p-2 rounded-md bg-white text-indigo-600 hover:bg-gray-200 focus:outline-none transition-all duration-200"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile and Tablet Menu */}
//       <div
//         className={`flex-col md:flex md:flex-row md:justify-center gap-4 mb-10 bg-indigo-100 md:bg-transparent p-4 rounded-lg md:p-0 ${
//           isMenuOpen ? "flex" : "hidden"
//         } md:flex md:items-center`}
//       >
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="relative group w-full" // `w-full` ensures full width in mobile mode
//           >
//             <button
//               className={`${buttonClasses(cat.name)} w-full`} // Full width button on mobile
//               onClick={() => setMenu(cat.name)}
//             >
//               {cat.name}
//             </button>

//             {/* Dropdown Options (appear on hover for large screens, or when clicked on mobile) */}
//             {cat.subcategories.length > 0 && (
//               <div
//                 className={`absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-xl z-10 ${
//                   cat.subcategories.length > 0 ? "group-hover:block hidden" : "hidden"
//                 }`}
//               >
//                 {cat.subcategories.map((sub, i) => (
//                   <Link key={i} href={sub.link || "#"} passHref>
//                     <div className="block w-full px-4 py-3 text-gray-700 hover:bg-indigo-100 cursor-pointer rounded-xl transition-all duration-200">
//                       {sub.name}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
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
//               id={item.id}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Itemlist;
