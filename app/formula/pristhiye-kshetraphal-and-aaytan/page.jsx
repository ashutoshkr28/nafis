import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

export default function GeometryFormulas() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Chapter 13: आयतन और पृष्ठीय क्षेत्रफल
        </h1>

        {/* Section 2: घन तथा घनाभ */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          2. घन तथा घनाभ में:
        </h2>
        <ol className="space-y-4 text-gray-800">
          <li>
            <InlineMath math="\text{घन का आयतन} = (\text{भुजा})^3" />
          </li>
          <li>
            <InlineMath math="\text{घन का कुल पृष्ठीय क्षेत्रफल} = 6 \times (\text{भुजा})^2" />
          </li>
          <li>
            <InlineMath math="\text{घन का पार्श्व पृष्ठ क्षेत्रफल} = 4 \times (\text{भुजा})^2" />
          </li>
          <li>
            <InlineMath math="\text{घन का विकर्ण} = \sqrt{3} \times \text{भुजा}" />
          </li>
          <li>
            <InlineMath math="\text{घनाभ का आयतन} = l \times b \times h" />
          </li>
          <li>
            <InlineMath math="\text{घनाभ का कुल पृष्ठीय क्षेत्रफल} = 2 (lb + bh + hl)" />
          </li>
          <li>
            <InlineMath math="\text{घनाभ का पार्श्व पृष्ठ क्षेत्रफल} = 2(l + b)h" />
          </li>
          <li>
            <InlineMath math="\text{घनाभ का विकर्ण} = \sqrt{l^2 + b^2 + h^2}" />
          </li>
          <li>
            <InlineMath math="\text{चारों दीवारों का क्षेत्रफल} = 2(l + b)h" />
          </li>
        </ol>

        {/* Section 3: बेलन */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
          3. बेलन में:
        </h2>
        <ol className="space-y-4 text-gray-800">
          <li>
            <InlineMath math="\text{बेलन का आयतन} = \pi r^2 h" />
          </li>
          <li>
            <InlineMath math="\text{बेलन का वक्र पृष्ठीय क्षेत्रफल} = 2 \pi r h" />
          </li>
          <li>
            <InlineMath math="\text{बेलन के पूर्ण पृष्ठीय क्षेत्रफल} = 2 \pi r (r + h)" />
          </li>
          <li>
            <InlineMath math="\text{खोखले बेलन का आयतन} = \pi h (R + r)(R - r)" />
          </li>
        </ol>

        {/* Section 4: गोला तथा अर्धगोला */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
          4. गोला तथा अर्धगोला में:
        </h2>
        <ol className="space-y-4 text-gray-800">
          <li>
            <InlineMath math="\text{गोले का आयतन} = \frac{4}{3} \pi r^3" />
          </li>
          <li>
            <InlineMath math="\text{गोले का सम्पूर्ण पृष्ठीय क्षेत्रफल} = 4 \pi r^2" />
          </li>
          <li>
            <InlineMath math="\text{गोलाकार खोल का आयतन} = \frac{4}{3} \pi (R^3 - r^3)" />
          </li>
          <li>
            <InlineMath math="\text{अर्धगोले का आयतन} = \frac{2}{3} \pi r^3" />
          </li>
          <li>
            <InlineMath math="\text{अर्धगोले का वक्र पृष्ठीय क्षेत्रफल} = 2 \pi r^2" />
          </li>
          <li>
            <InlineMath math="\text{अर्धगोले का पूर्ण पृष्ठीय क्षेत्रफल} = 3 \pi r^2" />
          </li>
        </ol>

        {/* Section 5: शंकु */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
          5. शंकु में:
        </h2>
        <ol className="space-y-4 text-gray-800">
          <li>
            <InlineMath math="\text{शंकु का आयतन} = \frac{1}{3} \pi r^2 h" />
          </li>
          <li>
            <InlineMath math="\text{शंकु का वक्र पृष्ठीय क्षेत्रफल} = \pi r l" />
          </li>
          <li>
            <InlineMath math="\text{शंकु का पूर्ण-पृष्ठीय क्षेत्रफल} = \pi r (l + r)" />
          </li>
          <li>
            <InlineMath math="l = \sqrt{h^2 + r^2}, \, r = \sqrt{l^2 - h^2}, \, h = \sqrt{l^2 - r^2}" />
          </li>
          <li>
            <InlineMath math="\text{शंकु के खिलेन्क का आयतन} = \frac{1}{3} \pi h (r_1^2 + r_2^2 + r_1 r_2)" />
          </li>
          <li>
            <InlineMath math="\text{शंकु के खिलेन्क का वक्र पृष्ठीय क्षेत्रफल} = \pi l (r_1 + r_2)" />
          </li>
          <li>
            <InlineMath math="\text{शंकु के खिलेन्क का कुल पृष्ठ क्षेत्रफल} = \pi (r_1 + r_2) l + \pi (r_1^2 + r_2^2)" />
          </li>
          <li>
            <InlineMath math="l = \sqrt{h^2 + (r_1 - r_2)^2}" />
          </li>
        </ol>
        <p className="mt-4 text-gray-600">
          <InlineMath math="\text{जहाँ } r_1, r_2 \text{ क्रमशः नीचे तथा ऊपर के सिरों की आधार की त्रिज्याएँ हैं।}" />
        </p>
      </div>
    </div>
  );
}