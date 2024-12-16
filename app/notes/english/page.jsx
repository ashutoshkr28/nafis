

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

// List of all the classes with their respective slugs for routing
const chapters = [
  { name: "8th Class   ( कक्षा 8 अंग्रेजी  ) ", slug: "8thClass" },
  { name: "9th Class ( कक्षा 9 अंग्रेजी )", slug: "9thClass" },
  { name: "10th Class ( कक्षा 10  अंग्रेजी )", slug: "10thClass" },
  { name: "11th Class ( कक्षा 11  अंग्रेजी )", slug: "11thClass" },
  { name: "12th Class ( कक्षा 12  अंग्रेजी )", slug: "12thClass" },
];

export default function ScienceNotes() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      {/* <h1 className="text-3xl font-bold mb-6">Science Subject</h1> */}
      {/* image resize for all screen */}
      <Image src={assets.banner8th} ></Image>
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
                    href={`/notes/english/${chapter.slug}/[chapter]`} // Add chapter specific URL part
                    as={`/notes/english/${chapter.slug}/chapter1`} // Example, you will adjust to fetch the correct chapter dynamically
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
    </div>
  );
}

