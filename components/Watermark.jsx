
// 'use client'; // Enables client-side behavior for this component

// import { useEffect } from 'react';

// const Watermark = () => {
//   useEffect(() => {
//     const disableRightClick = (e) => e.preventDefault();
//     document.addEventListener('contextmenu', disableRightClick);

//     return () => {
//       document.removeEventListener('contextmenu', disableRightClick);
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 pointer-events-none flex justify-center items-center opacity-5">
//       <h1 className="text-6xl text-gray-500 rotate-45">Your Watermark</h1>
//     </div>
//   );
// };


// export default Watermark;






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



// 'use client';

// import { useEffect } from 'react';

// const Watermark = () => {
//   useEffect(() => {
//     console.log('Watermark effect is running');
//     const disableRightClick = (e) => {
//       e.preventDefault();
//       console.log('Right-click disabled');
//     };
//     document.addEventListener('contextmenu', disableRightClick);

//     return () => {
//       document.removeEventListener('contextmenu', disableRightClick);
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 flex justify-center items-center opacity-10 pointer-events-none">
//       <h1 className="text-6xl text-gray-700 rotate-45">Nafis Sir Chhaurahi</h1>
//     </div>
//   );
// };

// export default Watermark;



'use client';

import { useEffect } from 'react';

const Watermark = () => {
  useEffect(() => {
    console.log('Watermark effect is running');
    const disableRightClick = (e) => {
      e.preventDefault();
      console.log('Right-click disabled');
    };
    document.addEventListener('contextmenu', disableRightClick);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center pointer-events-none z-50">
      {/* Responsive Watermark */}
      <h1 className="text-gray-700 rotate-45 text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl opacity-10">
        Nafis Sir Chhaurahi
      </h1>
    </div>
  );
};

export default Watermark;
