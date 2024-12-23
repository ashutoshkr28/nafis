import React from "react";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const Chapter6 = () => {
  return (
    <div>
      <h1>Chapter-6: त्रिभुज</h1>
      <ol>
        <li>
          <strong>त्रिभुज के समरूप होने का प्रतिबंध:</strong>
          <ul>
            <li>i) उनके संगत कोण बराबर हों।</li>
            <li>ii) उनकी संगत भुजाएँ समानुपाती हों।</li>
          </ul>
        </li>
        <li>
          <strong>थेल्स प्रमेय:</strong> यदि किसी त्रिभुज की एक भुजा के समानांतर एक रेखा खींची जाए, तो अन्य दो भुजाएँ एकही अनुपात में विभाजित हो जाती हैं।
        </li>
        <li>
          <strong>पाइथागोरस प्रमेय:</strong> एक समकोण त्रिभुज में कर्ण का वर्ग, अन्य दो भुजाओं के वर्गों के योगफल के बराबर होता है। 
          <InlineMath math="c^2 = a^2 + b^2" />
        </li>
        <li>
          <strong>जब त्रिभुज ABC में BC || DE तब:</strong>
          <ul>
            <li>i) <InlineMath math="\frac{AD}{DB} = \frac{AE}{EC}" /></li>
            <li>ii) <InlineMath math="\frac{AD}{AB} = \frac{AE}{AC}" /></li>
            <li>iii) <InlineMath math="\frac{AB}{DB} = \frac{AC}{EC}" /></li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Chapter6;
