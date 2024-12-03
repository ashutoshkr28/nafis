import Link from "next/link";




const notfound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <br />
      <Link href={'/'}>
      <h1>Go to Home Page</h1>
      </Link>
    </div>
  )
}

export default notfound;
