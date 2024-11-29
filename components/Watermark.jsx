
'use client'; // Enables client-side behavior for this component

import { useEffect } from 'react';

const Watermark = () => {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener('contextmenu', disableRightClick);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none flex justify-center items-center opacity-5">
      <h1 className="text-6xl text-gray-500 rotate-45">Your Watermark</h1>
    </div>
  );
};


export default Watermark;






// const Watermark = ( ) => {
//     return (
//         <div className="fixed inset-0 pointer-events-none flex justify-center items-center opacity-5">
//           <h1 className="text-6xl text-gray-500 rotate-45">Your Watermark</h1>
//         </div>
//       );
//     };


// export default function Watermark() {
//     return (
//       <div className="fixed inset-0 pointer-events-none flex justify-center items-center opacity-5">
//         <h1 className="text-6xl text-gray-500 rotate-45">Your Watermark</h1>
//       </div>
//     );
//   }
  

// export default Watermark;