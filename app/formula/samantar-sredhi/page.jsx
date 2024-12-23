import React from "react";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const Chapter5 = () => {
  return (
    <div>
      <h1>Chapter-5: समान्तर श्रेणी</h1>
      <ul>
        <li>
          <strong>समान्तर श्रेणी का nवाँ पद:</strong> 
          <InlineMath math="t_n = a + (n - 1) d" />
        </li>
        <li>
          <strong>n पदों का योगफल:</strong> 
          <InlineMath math="S_n = \frac{n}{2} \times \left( 2a + (n - 1) d \right)" />
          <ul>
            <li>
              जहाँ <InlineMath math="a" /> = प्रथम पद, <InlineMath math="d" /> = पंक्तांत या सार्थ अंतर
            </li>
            <li>
              <InlineMath math="t_n" /> = nवाँ पद या अंतिम पद, <InlineMath math="S_n" /> = n पदों का योगफल
            </li>
          </ul>
        </li>
        <li>
          <strong>समान्तर श्रेणी का व्याप्त रूप:</strong> a, a + d, a + 2d, a + 3d, ...
        </li>
        <li>
          <strong>समान्तर श्रेणी के परीक्षण से:</strong> <InlineMath math="a_2 - a_1 = a_3 - a_2" />
        </li>
        <li>
          <strong>समान्तर श्रेणी में तीन संख्याएँ:</strong> α - β, α, α + β
        </li>
        <li>
          <strong>समान्तर श्रेणी में चार संख्याएँ:</strong> α - 3β, α - β, α + β, α + 3β
        </li>
        <li>
          <strong>a और b का समान्तर माध्य:</strong> <InlineMath math="\frac{a + b}{2}" />
        </li>
        <li>
          <strong>प्रथम n प्राकृतिक संख्याओं का योगफल:</strong> 
          <InlineMath math="S_n = \frac{n(n + 1)}{2}" />
        </li>
        <li>
          <strong>प्रथम n सम प्राकृतिक संख्याओं का योगफल:</strong> 
          <InlineMath math="S_n = n(n + 1)" />
        </li>
        <li>
          <strong>प्रथम n विषम प्राकृतिक संख्याओं का योगफल:</strong> 
          <InlineMath math="S_n = n^2" />
        </li>
      </ul>
    </div>
  );
};

export default Chapter5;
