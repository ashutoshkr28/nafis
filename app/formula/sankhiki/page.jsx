import React from "react";
import { InlineMath } from "react-katex";

const Chapter14 = () => {
  return (
    <div className="p-8 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        ✦ Chapter-14
      </h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        सांख्यिकी सूत्र
      </h2>

      <ol className="space-y-6 text-gray-800">
        <li>
          <p className="text-lg">
            <span className="font-bold">i)</span>{" "}
            <InlineMath math="\text{माध्य } A = \frac{\Sigma f x}{\Sigma f}" />
          </p>
        </li>
        <li>
          <p className="text-lg">
            <span className="font-bold">ii)</span>{" "}
            <InlineMath math="\text{माध्यिका } M = L + \frac{\frac{N}{2} - F}{f} \cdot i" />
          </p>
          <div className="ml-6 text-gray-600 mt-2">
            <p>
              <InlineMath math="\text{जहाँ, } L = \text{माध्यिका वर्ग की निम्न सीमा,}" />
            </p>
            <p>
              <InlineMath math="f = \text{माध्यिका वर्ग की बारंबारता,}" />
            </p>
            <p>
              <InlineMath math="N = \text{कुल बारंबारता} = \Sigma f," />
            </p>
            <p>
              <InlineMath math="F = \text{माध्यिका वर्ग के ठीक पहले वाले वर्ग की संचयी बारंबारता,}" />
            </p>
            <p>
              <InlineMath math="i = \text{माध्यिका वर्ग की लंबाई।}" />
            </p>
          </div>
        </li>
        <li>
          <p className="text-lg">
            <span className="font-bold">iii)</span>{" "}
            <InlineMath math="\text{बहुलक } M_0 = L + \frac{f_0 - f_{-1}}{2f_0 - f_{-1} - f_1} \cdot i" />
          </p>
          <div className="ml-6 text-gray-600 mt-2">
            <p>
              <InlineMath math="\text{जहाँ, } L = \text{बहुलक वर्ग की निम्न सीमा,}" />
            </p>
            <p>
              <InlineMath math="f_0 = \text{बहुलक वर्ग की बारंबारता,}" />
            </p>
            <p>
              <InlineMath math="f_{-1} = \text{बहुलक वर्ग के ठीक पहले वाले वर्ग की बारंबारता,}" />
            </p>
            <p>
              <InlineMath math="f_1 = \text{बहुलक वर्ग के ठीक बाद वाले वर्ग की बारंबारता,}" />
            </p>
            <p>
              <InlineMath math="i = \text{वर्ग-अंतरालों की सामान्य लंबाई।}" />
            </p>
          </div>
        </li>
        <li>
          <p className="text-lg">
            <span className="font-bold">iv)</span>{" "}
            <InlineMath math="\text बहुलक = 3 \times माध्यिका - 2 \times माध्य" />
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Chapter14;