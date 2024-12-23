import React from "react";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const PolynomialInfo = () => {
  return (
    <div>
      <h1>✤ Chapter-2</h1>
      <h2>➤ रैखिक बहुपद</h2>
      <ul className= "text-4xl">
        <li>i) रैखिक बहुपद का व्याप्त रूप <b><InlineMath math="ax + b" /></b> होता है।</li>
        <li>ii) रैखिक बहुपद का घात <b><InlineMath math="1" /></b> होता है।</li>
        <li>iii) रैखिक बहुपद का शून्यक <b><InlineMath math="1" /></b> होता है।</li>
      </ul>

      <h2>➤ द्विघात बहुपद</h2>
      <ul className= "text-4xl">
        <li>i) द्विघात बहुपद का घात <b><InlineMath math="2" /></b> होता है।</li>
        <li>ii) द्विघात बहुपद का शून्यक <b><InlineMath math="2" /></b> होता है।</li>
        <li>iii) द्विघात बहुपद का व्याप्त रूप <b><InlineMath math="ax^2 + bx + c" /></b> होता है।</li>
        <li>iv) शून्यकों का योगफल <b><InlineMath math="\alpha + \beta = \frac{-b}{a}" /></b></li>
        <li>v) शून्यकों का गुणनफल <b><InlineMath math="\alpha \beta = \frac{c}{a}" /></b></li>
      </ul>

      <h2>➤ त्रिघात बहुपद</h2>
      <ul className= "text-4xl">
        <li>i) त्रिघात बहुपद का घात <b><InlineMath math="3" /></b> होता है।</li>
        <li>ii) त्रिघात बहुपद का शून्यक <b><InlineMath math="3" /></b> होता है।</li>
        <li>iii) त्रिघात बहुपद का व्याप्त रूप <b><InlineMath math="ax^3 + bx^2 + cx + d" /></b> होता है।</li>
        <li>iv) शून्यकों का योगफल <b><InlineMath math="\alpha + \beta + \gamma = \frac{-b}{a}" /></b></li>
        <li>v) दो-दो शून्यकों के गुणनफलों का योग <b><InlineMath  math="\alpha \beta + \beta \gamma + \gamma \alpha = \frac{c}{a}" /></b></li>
        <li>vi) शून्यकों का गुणनफल <b><InlineMath math="\alpha \beta \gamma = \frac{-d}{a}" /></b></li>
      </ul>
    </div>
  );
};

export default PolynomialInfo;
