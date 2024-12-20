// import 'katex/dist/katex.min.css';
// import { InlineMath } from 'react-katex';

// export default function Math({ math }) {
//   return <InlineMath math={math} />;
// }


// import 'katex/dist/katex.min.css';
// import { InlineMath } from 'react-katex';

// export default function Math({ math }) {
//   return <InlineMath math={math} />;
// }

// import 'katex/dist/katex.min.css'; // ✅ Import KaTeX styles
// import { InlineMath, BlockMath } from 'react-katex'; // ✅ Import KaTeX components

// // ✅ Default export of the Math component
// export default function Math({ math, block = false }) {
//   if (!math) {
//     console.error('Math component requires a "math" prop.');
//     return null; // Prevent crashing if math prop is missing
//   }
  
//   return block ? <BlockMath math={math} /> : <InlineMath math={math} />;
// }


// src/components/Math.jsx
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function Math({ math, block = false }) {
  return block ? <BlockMath>{math}</BlockMath> : <InlineMath>{math}</InlineMath>;
}
