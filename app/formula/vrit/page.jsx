import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function CircleMath() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Chapter 12: वृत्त से संबंधित क्षेत्र (Circle and Related Areas)
        </h1>
        <ol className="space-y-4 text-gray-800">
          <li>
            <strong>i)</strong>{' '}
            <InlineMath math="\text{वृत्त का क्षेत्रफल} = \pi r^2" />
          </li>
          <li>
            <strong>ii)</strong>{' '}
            <InlineMath math="\text{आधार का क्षेत्रफल} = \pi r^2" />
          </li>
          <li>
            <strong>iii)</strong>{' '}
            <InlineMath math="\text{आधार की परिधि} = 2 \pi r" />
          </li>
          <li>
            <strong>iv)</strong>{' '}
            <InlineMath math="\text{वृत्त की परिधि} = 2 \pi r" />
          </li>
          <li>
            <strong>v)</strong>{' '}
            <InlineMath math="\text{वृत्त का त्रिज्या} \, r = \frac{d}{2}" />
          </li>
          <li>
            <strong>vi)</strong>{' '}
            <InlineMath math="\text{वृत्त का व्यास} \, d = 2r" />
          </li>
          <li>
            <strong>vii)</strong>{' '}
            <InlineMath math="\text{अर्धवृत्त का क्षेत्रफल} = \frac{1}{2} \pi r^2" />
          </li>
          <li>
            <strong>viii)</strong>{' '}
            <InlineMath math="\text{अर्धवृत्त की परिधि} = (\pi + 2)r" />
          </li>
          <li>
            <strong>ix)</strong>{' '}
            <InlineMath math="\text{वृत्त के चतुर्थांश का क्षेत्रफल} = \frac{1}{4} \pi r^2" />
          </li>
          <li>
            <strong>x)</strong>{' '}
            <InlineMath math="\text{वलय का क्षेत्रफल} = \pi (R^2 - r^2)" />
          </li>
          <li>
            <strong>xi)</strong>{' '}
            <InlineMath math="\text{त्रिज्याखंड का क्षेत्रफल} = \frac{\theta}{360} \times \pi r^2" />
          </li>
          <li>
            <strong>xii)</strong>{' '}
            <InlineMath math="\text{वृत्तखंड का क्षेत्रफल} = r^2 \left(\frac{\pi \theta}{360^\circ} - \frac{1}{2} \sin \theta \right)" />
          </li>
          <li>
            <strong>xiii)</strong>{' '}
            <InlineMath math="\text{त्रिज्याखंड की परिधि} = r \left(2 + \frac{\pi \theta}{180^\circ} \right)" />
          </li>
          <li>
            <strong>xiv)</strong>{' '}
            <InlineMath math="\text{वृत्तखंड की परिधि} = l + \frac{\pi r \theta}{180^\circ}" />
          </li>
          <li>
            <strong>xv)</strong>{' '}
            <InlineMath math="\text{चाप की लंबाई} = \frac{\pi r \theta}{180^\circ}" />
          </li>
        </ol>
      </div>
    </div>
  );
}
