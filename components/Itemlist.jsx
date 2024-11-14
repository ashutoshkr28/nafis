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


"use client";

import { item_data } from '@/assets/assets';
import React, { useState } from 'react';
import Item from './Item';
import Link from 'next/link';

const Itemlist = () => {
  const [menu, setMenu] = useState("All");

  const buttonClasses = (category) =>
    menu === category ? '  bg-black text-white py-1 px-4 rounded-sm' : '';

  return (
    <div>
      <div className="flex justify-center gap-6 my-10 ">
        <button onClick={() => setMenu("All")} className={ buttonClasses("All")}>
          All
        </button>
        <button onClick={() => setMenu("Model Paper")} className={buttonClasses("Model Paper")}>
          Model Paper
        </button>
        <button onClick={() => setMenu("Notes")} className={buttonClasses("Notes")}>
          Notes
        </button>
        <button onClick={() => setMenu("Latest Update")} className={buttonClasses("Latest Update")}>
          Latest Update
        </button>
        {/* <button onClick={() => setMenu("Test Quiz")} className={buttonClasses("Test Quiz")}>
          Test Quiz
        </button> */}
        <Link href="/testquiz" className={buttonClasses("Test Quiz")} >
          Test Quiz
        </Link>
        {/* className="bg-black text-white py-1 px-4 rounded-sm" */}
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
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
