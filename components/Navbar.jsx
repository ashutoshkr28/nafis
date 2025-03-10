// import { assets } from '@/assets/assets';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react'
// import { IoIosArrowDown } from "react-icons/io";

// const Navbar = () => {
//   return (
//     <div className='mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm'>
//       <section className='flex items-center gap-10'>
//       <Image 
//           src={assets.logo} width={50} height={50} 
//         />
//         <div className='flex items-center gap-4 transition-all'>
//         <Link href="/" className='group px-2 py-3 transition-all'>
//         <p className='flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black '> <span>Features</span>
//         <IoIosArrowDown className='rotate-180  transition-all group-hover:rotate-0' />
//         </p>
//         {/* drop down */}
//         <div className='absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex'>
         
//           <Link href="/" className='flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black'>Math</Link>
//         </div>
//         </Link>
//         </div>
//       </section>
      
//     </div>
//   )
// }

// export default Navbar;

// "use client"

// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
//   const [activeDropdown, setActiveDropdown] = useState(null); // Track open dropdown on desktop or mobile

//   const menus = [
//     { name: "Objective", links: ["/math", "/science", "/english"] },
//     { name: "Model Paper", links: ["/math", "/science", "/english"] },
//     { name: "Notes", links: ["/math", "/science", "/english"] },
//     { name: "Test Quiz", links: ["/math", "/science", "/english"] },
//     { name: "About Us", links: ["/about"] },
//     { name: "Contact", links: [] },
//   ];

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   return (
//     <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md">
//       {/* Navbar Container */}
//       <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Image
//             src={assets.logo}
//             alt="Logo"
//             width={60}
//             height={60}
//             className="select-none pointer-events-none"
//           />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden p-2 rounded-md bg-white text-indigo-600 hover:bg-gray-200 transition-all"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
//         </button>

//         {/* Menu Links */}
//         <div
//           className={`${
//             isMenuOpen ? "flex" : "hidden"
//           } lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent text-gray-800 lg:text-white z-20 shadow-lg lg:shadow-none`}
//         >
//           {menus.map((menu, index) => (
//             <div
//               key={index}
//               className="relative group w-full lg:w-auto"
//             >
//               {/* Menu Button */}
//               <button
//                 onClick={() => toggleDropdown(index)}
//                 className={`w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent ${
//                   menu.links.length > 0 ? "cursor-pointer" : ""
//                 }`}
//               >
//                 {menu.name}
//                 {menu.links.length > 0 && (
//                   <IoIosArrowDown
//                     className={`ml-2 transform transition-transform ${
//                       activeDropdown === index ? "rotate-180" : "rotate-0"
//                     } lg:rotate-0`}
//                   />
//                 )}
//               </button>

//               {/* Dropdown */}
//               {menu.links.length > 0 && (
//                 <div
//                   className={`${
//                     activeDropdown === index ? "block" : "hidden"
//                   } lg:group-hover:block lg:absolute left-0 lg:left-auto w-full lg:w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-20`}
//                 >
//                   {menu.links.map((link, i) => (
//                     <Link
//                       key={i}
//                       href={link}
//                       className="block px-6 py-2 text-sm font-medium whitespace-nowrap hover:bg-gray-100 hover:text-indigo-600"
//                     >
//                       {link.replace("/", "").toUpperCase()}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";

// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
//   const [activeDropdown, setActiveDropdown] = useState(null); // Track open dropdown on desktop or mobile

//   const menus = [
//     { name: "Objective", links: ["/math", "/science", "/english"] },
//     { name: "Model Paper", links: ["/math", "/science", "/english"] },
//     { name: "Notes", links: ["/math", "/science", "/english"] },
//     { name: "Test Quiz", links: ["/math", "/science", "/english"] },
//     { name: "About Us", links: ["/about"] },
//     { name: "Contact", links: [] },  // No links for direct navigation
//   ];

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   return (
//     <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md">
//       {/* Navbar Container */}
//       <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Image
//             src={assets.logo}
//             alt="Logo"
//             width={60}
//             height={60}
//             className="select-none pointer-events-none"
//           />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden p-2 rounded-md bg-white text-indigo-600 hover:bg-gray-200 transition-all"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
//         </button>

//         {/* Menu Links */}
//         <div
//           className={`${
//             isMenuOpen ? "flex" : "hidden"
//           } lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent text-gray-800 lg:text-white z-20 shadow-lg lg:shadow-none`}
//         >
//           {menus.map((menu, index) => (
//             <div
//               key={index}
//               className="relative group w-full lg:w-auto"
//             >
//               {/* If there are links, show a dropdown, otherwise, render a direct link */}
//               {menu.links.length > 0 ? (
//                 <>
//                   <button
//                     onClick={() => toggleDropdown(index)}
//                     className={`w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent ${
//                       menu.links.length > 0 ? "cursor-pointer" : ""
//                     }`}
//                   >
//                     {menu.name}
//                     {menu.links.length > 0 && (
//                       <IoIosArrowDown
//                         className={`ml-2 transform transition-transform ${
//                           activeDropdown === index ? "rotate-180" : "rotate-0"
//                         } lg:rotate-0`}
//                       />
//                     )}
//                   </button>

//                   {/* Dropdown */}
//                   {menu.links.length > 0 && (
//                     <div
//                       className={`${
//                         activeDropdown === index ? "block" : "hidden"
//                       } lg:group-hover:block lg:absolute left-0 lg:left-auto w-full lg:w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-20`}
//                     >
//                       {menu.links.map((link, i) => (
//                         <Link
//                           key={i}
//                           href={link}
//                           className="block px-6 py-2 text-sm font-medium whitespace-nowrap hover:bg-gray-100 hover:text-indigo-600"
//                         >
//                           {link.replace("/", "").toUpperCase()}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 // For "About Us" and "Contact" (direct links)
//                 menu.links.length > 0 && (
//                   <Link
//                     href={menu.links[0]}  // Only render Link if there is a valid link
//                     className="w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent"
//                   >
//                     {menu.name}
//                   </Link>
//                 )
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";

// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
//   const [activeDropdown, setActiveDropdown] = useState(null); // Track open dropdown on desktop or mobile

//   const menus = [
//     { name: "Objective", links: ["objective/math", "objective/science", "objective/english"] },
//     { name: "Model Paper", links: ["/modelpaper/math", "/modelpaper/science", "/modelpaper/english"] },
//     { name: "Notes", links: ["/notes/math", "/notes/science", "/notes/english"] },
//     { name: "Test Quiz", links: ["/testquiz/math", "/testquiz/science", "/testquiz/english"] },
//     { name: "About Us", links: ["/about"], isDirect: true }, // Direct link without dropdown
//     { name: "Contact", links: ["/contact"], isDirect: true }, // Direct link without dropdown
//   ];

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   return (
//     <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md">
//       {/* Navbar Container */}
//       <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Image
//             src={assets.logo}
//             alt="Logo"
//             width={60}
//             height={60}
//             className="select-none pointer-events-none"
//           />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden p-2 rounded-md bg-white text-indigo-600 hover:bg-gray-200 transition-all"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
//         </button>

//         {/* Menu Links */}
//         <div
//           className={`${
//             isMenuOpen ? "flex" : "hidden"
//           } lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent text-gray-800 lg:text-white z-20 shadow-lg lg:shadow-none`}
//         >
//           {menus.map((menu, index) => (
//             <div
//               key={index}
//               className="relative group w-full lg:w-auto"
//             >
//               {/* If the menu has links, show a dropdown, otherwise render it as a direct link */}
//               {menu.isDirect ? (
//                 // For direct links like About Us and Contact
//                 <Link
//                   href={menu.links[0]}  // Only render Link if there is a valid link
//                   className="w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent"
//                 >
//                   {menu.name}  {/* Display menu name like "About Us" */}
//                 </Link>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => toggleDropdown(index)}
//                     className={`w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent ${
//                       menu.links.length > 0 ? "cursor-pointer" : ""
//                     }`}
//                   >
//                     {menu.name}  {/* Display menu name like "Objective", "Model Paper", etc. */}
//                     {menu.links.length > 0 && (
//                       <IoIosArrowDown
//                         className={`ml-2 transform transition-transform ${
//                           activeDropdown === index ? "rotate-180" : "rotate-0"
//                         } lg:rotate-0`}
//                       />
//                     )}
//                   </button>

//                   {/* Dropdown */}
//                   {menu.links.length > 0 && (
//                     <div
//                       className={`${
//                         activeDropdown === index ? "block" : "hidden"
//                       } lg:group-hover:block lg:absolute left-0 lg:left-auto w-full lg:w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-20`}
//                     >
//                       {menu.links.map((link, i) => {
//                         const linkName = link.split("/")[1].toUpperCase();  // Extract and capitalize link name
//                         return (
//                           <Link
//                             key={i}
//                             href={link}
//                             className="block px-6 py-2 text-sm font-medium whitespace-nowrap hover:bg-gray-100 hover:text-indigo-600"
//                           >
//                             {linkName}  {/* Display the link name in the dropdown */}
//                           </Link>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// "use client";

// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
//   const [activeDropdown, setActiveDropdown] = useState(null); // Track open dropdown on desktop or mobile

//   const menus = [
//     { name: "Objective", links: ["objective/math", "objective/science", "objective/english"] },
//     { name: "Model Paper", links: ["modelpaper/math", "modelpaper/science", "modelpaper/english"] },
//     { name: "Notes", links: ["notes/math", "notes/science", "notes/english"] },
//     { name: "Test Quiz", links: ["testquiz/math", "testquiz/science", "testquiz/english"] },
//     { name: "About Us", links: ["/about"], isDirect: true }, // Direct link without dropdown
//     { name: "Contact", links: ["/contact"], isDirect: true }, // Direct link without dropdown
//   ];

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   // Helper function to format the subject name properly
//   const formatSubjectName = (link) => {
//     const subject = link.split("/")[1]; // Get the subject from the URL path
//     return subject.charAt(0).toUpperCase() + subject.slice(1); // Capitalize first letter
//   };

//   return (
//     <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md">
//       {/* Navbar Container */}
//       <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Image
//             src={assets.logo}
//             alt="Logo"
//             width={60}
//             height={60}
//             className="select-none pointer-events-none"
//           />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden p-2 rounded-md bg-white text-indigo-600 hover:bg-gray-200 transition-all"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
//         </button>

//         {/* Menu Links */}
//         <div
//           className={`${
//             isMenuOpen ? "flex" : "hidden"
//           } lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent text-gray-800 lg:text-white z-20 shadow-lg lg:shadow-none`}
//         >
//           {menus.map((menu, index) => (
//             <div
//               key={index}
//               className="relative group w-full lg:w-auto"
//             >
//               {/* If the menu has links, show a dropdown, otherwise render it as a direct link */}
//               {menu.isDirect ? (
//                 // For direct links like About Us and Contact
//                 <Link
//                   href={menu.links[0]}  // Only render Link if there is a valid link
//                   className="w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent"
//                 >
//                   {menu.name}  {/* Display menu name like "About Us" */}
//                 </Link>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => toggleDropdown(index)}
//                     className={`w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent ${
//                       menu.links.length > 0 ? "cursor-pointer" : ""
//                     }`}
//                   >
//                     {menu.name}  {/* Display menu name like "Objective", "Model Paper", etc. */}
//                     {menu.links.length > 0 && (
//                       <IoIosArrowDown
//                         className={`ml-2 transform transition-transform ${
//                           activeDropdown === index ? "rotate-180" : "rotate-0"
//                         } lg:rotate-0`}
//                       />
//                     )}
//                   </button>

//                   {/* Dropdown */}
//                   {menu.links.length > 0 && (
//                     <div
//                       className={`${
//                         activeDropdown === index ? "block" : "hidden"
//                       } lg:group-hover:block lg:absolute left-0 lg:left-auto w-full lg:w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-20`}
//                     >
//                       {menu.links.map((link, i) => {
//                         const formattedLinkName = formatSubjectName(link);  // Format the link to show subject names
//                         return (
//                           <Link
//                             key={i}
//                             href={link}
//                             className="block px-6 py-2 text-sm font-medium whitespace-nowrap hover:bg-gray-100 hover:text-indigo-600"
//                           >
//                             {formattedLinkName}  {/* Display the properly formatted subject name */}
//                           </Link>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";

// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
//   const [activeDropdown, setActiveDropdown] = useState(null); // Track open dropdown on desktop or mobile

//   const menus = [
//     { name: "Objective", links: ["objective/math", "objective/science", "objective/english"] },
//     { name: "Model Paper", links: ["modelpaper/math", "modelpaper/science", "modelpaper/english"] },
//     { name: "Notes", links: ["notes/math", "notes/science", "notes/english"] },
//     { name: "Test Quiz", links: ["testquiz/math", "testquiz/science", "testquiz/english"] },
//     { name: "About Us", links: ["/about"], isDirect: true }, // Direct link without dropdown
//     { name: "Contact", links: ["/contact"], isDirect: true }, // Direct link without dropdown
//   ];

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   return (
//     <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md">
//       {/* Navbar Container */}
//       <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Image
//             src={assets.logo}
//             alt="Logo"
//             width={60}
//             height={60}
//             className="select-none pointer-events-none"
//           />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden p-2 rounded-md bg-white text-indigo-600 hover:bg-gray-200 transition-all"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
//         </button>

//         {/* Menu Links */}
//         <div
//           className={`${
//             isMenuOpen ? "flex" : "hidden"
//           } lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent text-gray-800 lg:text-white z-20 shadow-lg lg:shadow-none`}
//         >
//           {menus.map((menu, index) => (
//             <div key={index} className="relative group w-full lg:w-auto">
//               {/* If the menu has links, show a dropdown, otherwise render it as a direct link */}
//               {menu.isDirect ? (
//                 <Link
//                   href={menu.links[0]}  // Only render Link if there is a valid link
//                   className="w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent"
//                 >
//                   {menu.name}  {/* Display menu name like "About Us" */}
//                 </Link>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => toggleDropdown(index)}
//                     className={`w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent ${
//                       menu.links.length > 0 ? "cursor-pointer" : ""
//                     }`}
//                   >
//                     {menu.name}  {/* Display menu name like "Objective", "Model Paper", etc. */}
//                     {menu.links.length > 0 && (
//                       <IoIosArrowDown
//                         className={`ml-2 transform transition-transform ${
//                           activeDropdown === index ? "rotate-180" : "rotate-0"
//                         } lg:rotate-0`}
//                       />
//                     )}
//                   </button>

//                   {/* Dropdown */}
//                   {menu.links.length > 0 && (
//                     <div
//                       className={`${
//                         activeDropdown === index ? "block" : "hidden"
//                       } lg:group-hover:block lg:absolute left-0 lg:left-auto w-full lg:w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-20`}
//                     >
//                       {menu.links.map((link, i) => {
//                         const linkName = link.split("/")[1].toUpperCase();  // Extract and capitalize link name
//                         return (
//                           <Link
//                             key={i}
//                             href={link}
//                             className="block px-6 py-2 text-sm font-medium whitespace-nowrap hover:bg-gray-100 hover:text-indigo-600"
//                           >
//                             {linkName}  {/* Display the link name in the dropdown */}
//                           </Link>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// "use client";

// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
//   const [activeDropdown, setActiveDropdown] = useState(null); // Track open dropdown on desktop or mobile

//   const menus = [
//     { name: "Objective", links: ["objective/math", "objective/science", "objective/english"] },
//     { name: "Model Paper", links: ["modelpaper/math", "modelpaper/science", "modelpaper/english"] },
//     { name: "Notes", links: ["notes/math", "notes/science", "notes/english"] },
//     { name: "Test Quiz", links: ["testquiz/math", "testquiz/science", "testquiz/english"] },
//     { name: "About Us", links: ["/about"], isDirect: true }, // Direct link without dropdown
//     { name: "Contact", links: ["/contact"], isDirect: true }, // Direct link without dropdown
//   ];

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index); // Toggle dropdown visibility
//   };

//   const closeDropdown = () => {
//     setActiveDropdown(null); // Close dropdown when link is clicked
//   };

//   return (
//     <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md">
//       {/* Navbar Container */}
//       <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/">
//           <Image
//             src={assets.logo}
//             alt="Logo"
//             width={60}
//             height={60}
//             className="select-none pointer-events-none"
//           /></Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden p-2 rounded-md bg-white text-indigo-600 hover:bg-gray-200 transition-all"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
//         </button>

//         {/* Menu Links */}
//         <div
//           className={`${
//             isMenuOpen ? "flex" : "hidden"
//           } lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent text-gray-800 lg:text-white z-20 shadow-lg lg:shadow-none`}
//         >
//           {menus.map((menu, index) => (
//             <div key={index} className="relative group w-full lg:w-auto">
//               {/* If the menu has links, show a dropdown, otherwise render it as a direct link */}
//               {menu.isDirect ? (
//                 <Link
//                   href={menu.links[0]}  // Only render Link if there is a valid link
//                   className="w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent"
//                   onClick={closeDropdown} // Close dropdown when link is clicked
//                 >
//                   {menu.name}  {/* Display menu name like "About Us" */}
//                 </Link>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => toggleDropdown(index)}
//                     className={`w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent ${
//                       menu.links.length > 0 ? "cursor-pointer" : ""
//                     }`}
//                   >
//                     {menu.name}  {/* Display menu name like "Objective", "Model Paper", etc. */}
//                     {menu.links.length > 0 && (
//                       <IoIosArrowDown
//                         className={`ml-2 transform transition-transform ${
//                           activeDropdown === index ? "rotate-180" : "rotate-0"
//                         } lg:rotate-0`}
//                       />
//                     )}
//                   </button>

//                   {/* Dropdown */}
//                   {menu.links.length > 0 && (
//                     <div
//                       className={`${
//                         activeDropdown === index ? "block" : "hidden"
//                       } lg:group-hover:block lg:absolute left-0 lg:left-auto w-full lg:w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-20`}
//                     >
//                       {menu.links.map((link, i) => {
//                         const linkName = link.split("/")[1].toUpperCase();  // Extract and capitalize link name
//                         return (
//                           <Link
//                             key={i}
//                             href={link}
//                             className="block px-6 py-2 text-sm font-medium whitespace-nowrap hover:bg-gray-100 hover:text-indigo-600"
//                             onClick={closeDropdown} // Close dropdown when a link is clicked
//                           >
//                             {linkName}  {/* Display the link name in the dropdown */}
//                           </Link>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client"

// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const menus = [
//     { name: "Objective", links: ["/objective/math", "/objective/science", "/objective/english"] },
//     { name: "Model Paper", links: ["/modelpaper/math", "/modelpaper/science", "/modelpaper/english"] },
//     { name: "Notes", links: ["/notes/math", "/notes/science", "/notes/english"] },
//     { name: "Test Quiz", links: ["/testquiz/math", "/testquiz/science", "/testquiz/english"] },
//     { name: "About Us", links: ["/about"], isDirect: true },
//     { name: "Contact", links: ["/contact"], isDirect: true },
//   ];

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   return (
//     <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md">
//       <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
//         <div className="flex items-center">
//           <Link href="/">
//             <Image src={assets.logo} alt="Logo" width={60} height={60} className="select-none pointer-events-none" />
//           </Link>
//         </div>
//         <button className="lg:hidden p-2 rounded-md bg-white text-indigo-600 hover:bg-gray-200 transition-all" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
//         </button>
//         <div className={`${isMenuOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent text-gray-800 lg:text-white z-20 shadow-lg lg:shadow-none`}>
//           {menus.map((menu, index) => (
//             <div key={index} className="relative group w-full lg:w-auto">
//               {menu.isDirect ? (
//                 <Link href={menu.links[0]} className="w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent">
//                   {menu.name}
//                 </Link>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => toggleDropdown(index)}
//                     className={`w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent ${
//                       menu.links.length > 0 ? "cursor-pointer" : ""
//                     }`}
//                   >
//                     {menu.name}
//                     {menu.links.length > 0 && <IoIosArrowDown className={`ml-2 transform transition-transform ${activeDropdown === index ? "rotate-180" : "rotate-0"} lg:rotate-0`} />}
//                   </button>
//                   {menu.links.length > 0 && (
//                     <div className={`${activeDropdown === index ? "block" : "hidden"} lg:group-hover:block lg:absolute left-0 lg:left-auto w-full lg:w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-20`}>
//                       {menu.links.map((link, i) => (
//                         <Link key={i} href={link} className="block px-6 py-2 text-sm font-medium whitespace-nowrap hover:bg-gray-100 hover:text-indigo-600">
//                           {link.split("/")[2].toUpperCase()}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// "use client";

// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
//   const [activeDropdown, setActiveDropdown] = useState(null); // Track open dropdown on desktop or mobile

//   const menus = [
//     { name: "Objective", links: ["/objective/math", "/objective/science", "/objective/english"] },
//     { name: "Model Paper", links: ["/modelpaper/math", "/modelpaper/science", "/modelpaper/english"] },
//     { name: "Notes", links: ["/notes/math", "/notes/science", "/notes/english"] },
//     { name: "Test Quiz", links: ["/testquiz/math", "/testquiz/science", "/testquiz/english"] },
//     { name: "About Us", links: ["/about"], isDirect: true }, // Direct link without dropdown
//     { name: "Contact", links: ["/contact"], isDirect: true }, // Direct link without dropdown
//   ];

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   // Function to handle link click: Close the mobile menu
//   const handleLinkClick = () => {
//     setIsMenuOpen(false); // Close the menu on mobile
//     setActiveDropdown(null); // Reset active dropdown
//   };

//   return (
//     <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md">
//       {/* Navbar Container */}
//       <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/" onClick={handleLinkClick}>
//             <Image
//               src={assets.newblack}
//               alt="Logo"
//               width={100}
//               height={85}
//               className="select-none pointer-events-none"
//             />
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden p-2 rounded-md bg-white text-indigo-600 hover:bg-gray-200 transition-all"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
//         </button>

//         {/* Menu Links */}
//         <div
//           className={`${
//             isMenuOpen ? "flex" : "hidden"
//           } lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent text-gray-800 lg:text-white z-20 shadow-lg lg:shadow-none`}
//         >
//           {menus.map((menu, index) => (
//             <div key={index} className="relative group w-full lg:w-auto">
//               {/* If the menu has links, show a dropdown, otherwise render it as a direct link */}
//               {menu.isDirect ? (
//                 <Link
//                   href={menu.links[0]}
//                   onClick={handleLinkClick} // Close menu on link click
//                   className="w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent"
//                 >
//                   {menu.name}
//                 </Link>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => toggleDropdown(index)}
//                     className={`w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent ${
//                       menu.links.length > 0 ? "cursor-pointer" : ""
//                     }`}
//                   >
//                     {menu.name}
//                     {menu.links.length > 0 && (
//                       <IoIosArrowDown
//                         className={`ml-2 transform transition-transform ${
//                           activeDropdown === index ? "rotate-180" : "rotate-0"
//                         } lg:rotate-0`}
//                       />
//                     )}
//                   </button>

//                   {/* Dropdown */}
//                   {menu.links.length > 0 && (
//                     <div
//                       className={`${
//                         activeDropdown === index ? "block" : "hidden"
//                       } lg:group-hover:block lg:absolute left-0 lg:left-auto w-full lg:w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-20`}
//                     >
//                       {menu.links.map((link, i) => {
//                         const linkName = link.split("/")[2]?.toUpperCase() || ""; // Extract and capitalize link name
//                         return (
//                           <Link
//                             key={i}
//                             href={link}
//                             onClick={handleLinkClick} // Close menu on link click
//                             className="block px-6 py-2 text-sm font-medium whitespace-nowrap hover:bg-gray-100 hover:text-indigo-600"
//                           >
//                             {linkName}
//                           </Link>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
  const [activeDropdown, setActiveDropdown] = useState(null); // Track open dropdown on desktop or mobile
  const menuRef = useRef(null); // Reference to menu container

  const menus = [
    { name: "Objective", links: ["/objective/math", "/objective/science", "/objective/english"] },
    { name: "Model Paper", links: ["/modelpaper/math", "/modelpaper/science","/modelpaper/social-science", "/modelpaper/english", "/modelpaper/hindi", "/modelpaper/sanskrit","/modelpaper/urdu", "/modelpaper/maithili", "/modelpaper/non-hindi"] },
    { name: "Notes", links: ["/notes/math", "/notes/science", "/notes/english"] },
    { name: "Test Quiz", links: ["/testquiz/math", "/testquiz/science", "/testquiz/english"] },
    { name: "About Us", links: ["/about"], isDirect: true }, // Direct link without dropdown
    { name: "Contact", links: ["/contact"], isDirect: true }, // Direct link without dropdown
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Function to handle link click: Close the mobile menu
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu on mobile
    setActiveDropdown(null); // Reset active dropdown
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md">
      {/* Navbar Container */}
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src={assets.newblack}
              alt="Logo"
              width={100}
              height={85}
              className="select-none pointer-events-none"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md bg-white text-indigo-600 hover:bg-gray-200 transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>

        {/* Menu Links */}
        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent text-gray-800 lg:text-white z-20 shadow-lg lg:shadow-none`}
        >
          {menus.map((menu, index) => (
            <div key={index} className="relative group w-full lg:w-auto">
              {/* If the menu has links, show a dropdown, otherwise render it as a direct link */}
              {menu.isDirect ? (
                <Link
                  href={menu.links[0]}
                  onClick={handleLinkClick} // Close menu on link click
                  className="w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent"
                >
                  {menu.name}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={`w-full lg:w-auto flex items-center justify-between px-4 py-3 text-lg font-semibold transition-all hover:bg-purple-800 lg:hover:bg-transparent ${
                      menu.links.length > 0 ? "cursor-pointer" : ""
                    }`}
                  >
                    {menu.name}
                    {menu.links.length > 0 && (
                      <IoIosArrowDown
                        className={`ml-2 transform transition-transform ${
                          activeDropdown === index ? "rotate-180" : "rotate-0"
                        } lg:rotate-0`}
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  {menu.links.length > 0 && (
                    <div
                      className={`${
                        activeDropdown === index ? "block" : "hidden"
                      } lg:group-hover:block lg:absolute left-0 lg:left-auto w-full lg:w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-20`}
                    >
                      {menu.links.map((link, i) => {
                        const linkName = link.split("/")[2]?.toUpperCase() || ""; // Extract and capitalize link name
                        return (
                          <Link
                            key={i}
                            href={link}
                            onClick={handleLinkClick} // Close menu on link click
                            className="block px-6 py-2 text-sm font-medium whitespace-nowrap hover:bg-gray-100 hover:text-indigo-600"
                          >
                            {linkName}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
