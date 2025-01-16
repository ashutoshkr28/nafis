
import Link from "next/link";

const UserDownloads = () => {
  const pdfFiles = [
    { name: "English 2025", file: "/English_model_paper_2025.pdf", image: "/image/Bihar-Board-Class-10th-English-Model-Paper-2025.png" },
    { name: "English 2024", file: "/uploads/English.pdf", image: "/image/Bihar-Board-Class-10th-English-Model-Paper-2024.png" },
    { name: "English 2023", file: "/uploads/english.pdf", image: "/image/Bihar-Board-Class-10th-English-Model-Paper-2023.png" },
    { name: "English 2022", file: "/uploads/english.pdf", image: "/image/Bihar-Board-Class-10th-English-Model-Paper-2022.png" },
    { name: "English 2021", file: "/uploads/english.pdf", image: "/image/Bihar-Board-Class-10th-English-Model-Paper-2021.png" },
    { name: "English 2020", file: "/uploads/english.pdf", image: "/image/Bihar-Board-Class-10th-English-Model-Paper-2020.png" },
  ];

  return (
    <>
      <div className="mx-10 my-6">
        <p className="text-4xl text-center mx-4">
          Bihar Board 10th English Model Paper (BSEB) क्लास 10th अंग्रेजी मॉडल पेपर PDF Download बिहार बोर्ड मैट्रिक परीक्षा 
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4 mt-10">
        <h1 className="text-2xl font-bold">Available Downloads Link</h1>
        <ul className="space-y-8">
          {pdfFiles.map((pdf, index) => (
            <li key={index} className="w-full flex flex-col items-center text-center">
              <img
                src={pdf.image}
                alt={pdf.name}
                className=" object-cover mb-4"
                height={700}
                width={1200}
              />
              <p className="text-lg font-medium mb-2">{pdf.name}</p>
              <Link
                href={pdf.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-lg"
              >
                Download PDF
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserDownloads;
