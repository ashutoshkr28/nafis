

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


      <div>
     <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2 border border-red-500 bg-red-500 text-white text-4xl text-center">
            All Math Formula Chapter 
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link href={"/formula/real-number"}>वास्तविक संख्याएँ </Link></td>
        </tr>
        <tr> 
          <td><Link href={"/formula/polynomiyal"}> बहुपद </Link></td>
        </tr>
        <tr> 
          <td><Link href={"/formula/raikhik-smikaran"}> दो चरों वाले रैखिक समीकरणों का युग्म </Link></td>
        </tr>
        <tr>
          <td > <Link href={"/formula/dwighat-samikaran"}> द्विघात समीकरण</Link></td>
        </tr>
        <tr>
          <td> <Link href={"/formula/samantar-sredhi"}>समान्तर श्रेढ़ी</Link></td>
        </tr>
        <tr>
          <td><Link href={"/formula/tribhuj"}> त्रिभुज</Link></td>
        </tr>
        <tr>
          <td> <Link href={"/formula/nirdesank"}>निर्देशांक ज्यामिति</Link></td>
        </tr>
        <tr>
          <td><Link href={"/formula/trikonmiti"}>त्रिकोणमिति</Link></td>
        </tr>
       
        <tr>
          <td><Link href={"/formula/vrit"}>वृत्त</Link></td>
        </tr>
        <tr>
          <td><Link href={"/formula/vrit-se-sambandhit-kshtraphal"}>वृतों से सम्बंधित क्षेत्रफल</Link></td>
        </tr>
        <tr>
          <td><Link href={"/formula/pristhiye-kshetraphal-and-aaytan"}>पृष्ठीय क्षेत्रफल एवं आयतन</Link></td>
        </tr>
        <tr>
          <td><Link href={"/formula/sankhiki"}>सांख्यिकी</Link></td>
        </tr>
      </tbody>
     </table>
      </div>






      <div className="min-h-screen mt-20 font-bold text-8xl">
        <Link href = {"/important-notes"}   className="border-orange-300">  Important Formula</Link >
       
      </div>
    </div>
  );
}

