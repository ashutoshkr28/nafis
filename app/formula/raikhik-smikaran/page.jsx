import React from "react";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const Chapter3 = () => {
  return (
    <div>
      <h2>✤ Chapter-3</h2>
      <h3>➤ दो चर वाले रैखिक समीकरण का व्याप्त रूप:</h3>
      <p className="text-4xl">
        <strong>
          <InlineMath math="a_1 x + b_1 y + c_1 = 0" />
        </strong>,{" "}
        <strong>
          <InlineMath math="a_2 x + b_2 y + c_2 = 0" />
        </strong>
      </p>

      <ul className="text-4xl">
        <li>
          <strong>जब</strong>{" "}
          <em>
            <InlineMath math="\frac{a_1}{a_2} \neq \frac{b_1}{b_2}" />
          </em>:
          <ul>
            <li>i) प्रतिछेदी रेखा</li>
            <li>ii) केवल एक हल (अद्वितीय हल)</li>
            <li>iii) युग्म संगत (अविरोधी)</li>
          </ul>
        </li>

        <li>
          <strong>जब</strong>{" "}
          <em>
            <InlineMath math="\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}" />
          </em>:
          <ul className="text-4xl">
            <li>i) रेखा समानांतर</li>
            <li>ii) कोई हल नहीं</li>
            <li>iii) युग्म असंगत (विरोधी)</li>
          </ul>
        </li>

        <li>
          <strong>जब</strong>{" "}
          <em>
            <InlineMath math="\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}" />
          </em>:
          <ul>
            <li>i) रेखा संपाती</li>
            <li>ii) अपरिमित रूप से अनेक हल होंगे</li>
            <li>iii) युग्म संगत (आश्रित)</li>
          </ul>
        </li>
      </ul>

      <h3>➤ बर्ज गुणन विधि:</h3>
      <p className="text-4xl">
        <strong>
          <InlineMath math="x = \frac{b_1 c_2 - b_2 c_1}{b_1 a_2 - b_2 a_1}" />,{" "}
          <InlineMath math="y = \frac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1}" />
        </strong>
      </p>
    </div>
  );
};

export default Chapter3;
