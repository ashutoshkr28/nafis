import React from "react";

const Chapter7 = () => {
  return (
    <div>
      <h1>Chapter-7: नियामक ज्यामिति</h1>
      <ol>
        <li>
          <strong>मूलबिंदु से किसी बिंदु की दूरी:</strong>
          <p>OP = √(x² + y²)</p>
        </li>
        <li>
          <strong>दो बिंदुओं (x₁, y₁) तथा (x₂, y₂) के बीच की दूरी:</strong>
          <p>PQ = √((x₂ - x₁)² + (y₂ - y₁)²)</p>
        </li>
        <li>
          <strong>दो बिंदुओं (x₁, y₁) तथा (x₂, y₂) को मिलानेवाले रेखाखंड के मध्यबिंदु के निर्देशांक:</strong>
          <p>
            ({`(x₁ + x₂) / 2, (y₁ + y₂) / 2`})
          </p>
        </li>
        <li>
          <strong>त्रिभुज का क्षेत्रफल:</strong>
          <p>
            ½ × [x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)]
          </p>
        </li>
        <li>
          <strong>त्रिभुज के केंद्र के निर्देशांक:</strong>
          <p>
            ({`(x₁ + x₂ + x₃) / 3, (y₁ + y₂ + y₃) / 3`})
          </p>
        </li>
        <li>
          <strong>विभाजन सूत्र:</strong>
          <p>
            ({`(m₁x₂ + m₂x₁) / (m₁ + m₂), (m₁y₂ + m₂y₁) / (m₁ + m₂)`})
          </p>
        </li>
        <li>
          <strong>त्रिभुज के अंतःकेंद्र के निर्देशांक:</strong>
          <p>
            ({`(ax₁ + bx₂ + cx₃) / (a + b + c), (ay₁ + by₂ + cy₃) / (a + b + c)`})
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Chapter7;
