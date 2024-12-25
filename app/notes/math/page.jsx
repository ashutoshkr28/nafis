

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

// List of all the classes with their respective slugs for routing
const chapters = [
  { name: "8th Class   ( कक्षा 8 गणित  ) ", slug: "8thClass" },
  { name: "9th Class ( कक्षा 9 गणित )", slug: "9thClass" },
  { name: "10th Class ( कक्षा 10  गणित )", slug: "10thClass" },
  { name: "11th Class ( कक्षा 11  गणित )", slug: "11thClass" },
  { name: "12th Class ( कक्षा 12  गणित )", slug: "12thClass" },
];

export default function ScienceNotes() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      {/* <h1 className="text-3xl font-bold mb-6">Science Subject</h1> */}
      {/* image resize for all screen */}
      <Image src={assets.banner10th} ></Image>
      {/* width={900} height={400} */}
      <br />
      <div className="overflow-x-auto w-full max-w-4xl mb-48 mt-10">
        <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-red-500 bg-red-500 text-white text-4xl text-center ">
                All Class Subjective Questions with Answer
              </th>
            </tr>
          </thead>
          <tbody>
            {chapters.map((chapter, index) => (
              <tr key={index} className="hover:bg-gray-100 transition duration-150">
                <td className="px-4 py-2 border text-2xl text-left border-gray-300">
                  {/* Update the link to handle both class and chapter dynamically */}
                  <Link
                    href={`/notes/math/${chapter.slug}/[chapter]`} // Add chapter specific URL part
                    as={`/notes/math/${chapter.slug}/chapter1`} // Example, you will adjust to fetch the correct chapter dynamically
                    className="text-blue-600 hover:underline"
                  >
                    {chapter.name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Image src={"/image/math-important.png"} className=' rounded mb-12 transition-all transform hover:animate-shake' width={2500} height={300} alt='img'></Image>

      <div className="p-10 max-w-3xl mx-auto bg-white rounded-xl shadow-lg shadow-blue-500 mb-16 space-y-6 mt-5">
        

      {/* <div className="overflow-x-auto w-full max-w-4xl  p-6 mb-48 mt-10"> */}
  <h1 className="text-3xl md:text-5xl font-extrabold text-center text-indigo-700 mb-10">
    All Mathematics Formula
  </h1>
  <div className=" max-w-6xl  bg-gradient-to-r from-white via-gray-100 to-blue-50 rounded-xl shadow-lg space-y-6">
    {/* <div className="grid gap-y-4 text-xl"> */}
    <div className="space-y-4  px-0 text-xl ">

      {[
        { href: "/formula/real-number", label: "वास्तविक संख्याएँ" },
        {href: "/formula/formula-bijganit", label: "बीजगणित "},
        { href: "/formula/polynomiyal", label: "बहुपद" },
        { href: "/formula/raikhik-smikaran", label: "दो चरों वाले रैखिक समीकरणों का युग्म" },
        { href: "/formula/dwighat-samikaran", label: "द्विघात समीकरण" },
        { href: "/formula/samantar-sredhi", label: "समान्तर श्रेढ़ी" },
        { href: "/formula/tribhuj", label: "त्रिभुज" },
        { href: "/formula/nirdesank", label: "निर्देशांक ज्यामिति" },
        { href: "/formula/trikonmiti", label: "त्रिकोणमिति" },
        { href: "/formula/vrit", label: "वृतों से सम्बंधित क्षेत्रफल" },
        { href: "/formula/pristhiye-kshetraphal-and-aaytan", label: "पृष्ठीय क्षेत्रफल एवं आयतन" },
        { href: "/formula/sankhiki", label: "सांख्यिकी" },
      ].map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block w-full text-center bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600 hover:scale-105 hover:shadow-lg transition-all"
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
</div>



{/* 
      <div className="overflow-x-auto w-full max-w-4xl mb-48 mt-10">

        <h1>All Mathematics Formula</h1>

      <div className="p-6 max-w-20xl min-h-screen mx-auto bg-white rounded-xl shadow-lg shadow-blue-500 mb-16 space-y-6 mt-5">
  <div className="space-y-4 text-xl">
    <Link
      href="/formula/real-number"
      className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600 transition-all transform hover:scale-110 hover:animate-shake"
    >
      वास्तविक संख्याएँ
    </Link>
    <Link
      href="/formula/polynomiyal"
      className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600 transition-all transform hover:scale-110 hover:animate-shake"
    >
      बहुपद
    </Link>
    <Link
      href="/formula/raikhik-smikaran"
      className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600 transition-all transform hover:scale-110 hover:animate-shake"
    >
      दो चरों वाले रैखिक समीकरणों का युग्म
    </Link>
    <Link
      href="/formula/dwighat-samikaran"
      className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600 transition-all transform hover:scale-110 hover:animate-shake"
    >
      द्विघात समीकरण
    </Link>
    <Link
      href="/formula/samantar-sredhi"
      className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600 transition-all transform hover:scale-110 hover:animate-shake"
    >
      समान्तर श्रेढ़ी
    </Link>
    <Link
      href="/formula/tribhuj"
      className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600 transition-all transform hover:scale-110 hover:animate-shake"
    >
      त्रिभुज
    </Link>
    <Link
      href="/formula/nirdesank"
      className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600 transition-all transform hover:scale-110 hover:animate-shake"
    >
      निर्देशांक ज्यामिति
    </Link>
    <Link
      href="/formula/trikonmiti"
      className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600 transition-all transform hover:scale-110 hover:animate-shake"
    >
      त्रिकोणमिति
    </Link>
    <Link
      href="/formula/vrit"
      className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600 transition-all transform hover:scale-110 hover:animate-shake"
    >
      वृत्त
    </Link>
    <Link
      href="/formula/vrit-se-sambandhit-kshtraphal"
      className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600 transition-all transform hover:scale-110 hover:animate-shake"
    >
      वृतों से सम्बंधित क्षेत्रफल
    </Link>
    <Link
      href="/formula/pristhiye-kshetraphal-and-aaytan"
      className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600 transition-all transform hover:scale-110 hover:animate-shake"
    >
      पृष्ठीय क्षेत्रफल एवं आयतन
    </Link>
    <Link
      href="/formula/sankhiki"
      className="block w-full text-left bg-indigo-600 text-white font-bold py-3 px-3 rounded-lg hover:bg-teal-600 transition-all transform hover:scale-110 hover:animate-shake"
    >
      सांख्यिकी
    </Link>
  </div>
</div>
</div> */}


      {/* <div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
    <thead>
      <tr className="bg-gray-200">
        <th className="px-4 py-2 border border-red-500 bg-red-500 text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center">
          All Math Formula Chapter
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-2 border">
          <Link href="/formula/real-number" className="hover:underline">
            वास्तविक संख्याएँ
          </Link>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">
          <Link href="/formula/polynomiyal" className="hover:underline">
            बहुपद
          </Link>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">
          <Link href="/formula/raikhik-smikaran" className="hover:underline">
            दो चरों वाले रैखिक समीकरणों का युग्म
          </Link>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">
          <Link href="/formula/dwighat-samikaran" className="hover:underline">
            द्विघात समीकरण
          </Link>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">
          <Link href="/formula/samantar-sredhi" className="hover:underline">
            समान्तर श्रेढ़ी
          </Link>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">
          <Link href="/formula/tribhuj" className="hover:underline">
            त्रिभुज
          </Link>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">
          <Link href="/formula/nirdesank" className="hover:underline">
            निर्देशांक ज्यामिति
          </Link>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">
          <Link href="/formula/trikonmiti" className="hover:underline">
            त्रिकोणमिति
          </Link>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">
          <Link href="/formula/vrit" className="hover:underline">
            वृत्त
          </Link>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">
          <Link href="/formula/vrit-se-sambandhit-kshtraphal" className="hover:underline">
            वृतों से सम्बंधित क्षेत्रफल
          </Link>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">
          <Link href="/formula/pristhiye-kshetraphal-and-aaytan" className="hover:underline">
            पृष्ठीय क्षेत्रफल एवं आयतन
          </Link>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">
          <Link href="/formula/sankhiki" className="hover:underline">
            सांख्यिकी
          </Link>
        </td>
      </tr>
    </tbody>
  </table>
</div> */}






<div className="min-h-screen flex items-center justify-center shadow-md w-full px-4 text-center">
  <Link
    href="/important-notes"
    className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-8 py-4 text-lg md:text-2xl lg:text-4xl font-bold text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition-transform transform hover:scale-105 md:hover:scale-110 lg:hover:scale-115 origin-center overflow-hidden"
    aria-label="Go to Important Formula page"
  >
    Important Formula
  </Link>
</div>







    </div>
  );
}

