import Link from "next/link";

const UserDownloads = () => {
  // List of PDFs (manually added in public/uploads directory)
  const pdfFiles = [
    { name: "Mathematics 2025", file: "/uploads/math.pdf" },
    { name: "Mathematics 2024", file: "/uploads/science.pdf" },
    { name: "Mathematics 2023", file: "/uploads/english.pdf" },
    { name: "Mathematics 2022", file: "/uploads/english.pdf" },
    { name: "Mathematics 2021", file: "/uploads/english.pdf" },
    { name: "Mathematics 2020", file: "/uploads/english.pdf" },
  ];

  return (<>
    <div className="mx-10 my-6 ">
      <p className="text-4xl items-center text-center mx-4">
        <span className="">Bihar Board 10th Science Model Paper 2023 ( BSEB ) क्लास 10th विज्ञान  मॉडल पेपर PDF Download बिहार बोर्ड मैट्रिक परीक्षा 2023</span>
        </p>
      </div>
    <div className="flex flex-col items-center space-y-4 mt-10">

      <h1 className="text-2xl font-bold">Available Downloads Link</h1>
      <ul className="space-y-2">
        {pdfFiles.map((pdf, index) => (
          <li key={index} className="text-lg">
            <div className="w-auto flex justify-between text-4xl m-5 px-10">
            <h1 className="px-10">Download Link </h1>
            <Link
              href={pdf.file}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="text-blue-600 hover:underline"
            >
              
              {pdf.name}
            </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>
  );
};

export default UserDownloads;
