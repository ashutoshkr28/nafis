import Link from "next/link";




const notfound = () => {
  return (
    <div>
      <div className="flex flex-col  items-center mt-10">
      <h1 className="text-4xl">Page Not Found</h1>

      <br />
      <h1 className="text-4xl">Coming Soon.....</h1> 
      </div>
      <br />
      <br />
      <br />
      <div className="flex justify-center px-6 mb-10">
      <Link href={'/'}>
      <button className="border px-10 py-6 rounded-lg shadow-lg shadow-teal-400 hover:border-s-cyan-700 bg-teal-300 " >Go to Home Page</button >
      </Link>
      </div>
    </div>
  )
}

export default notfound;
