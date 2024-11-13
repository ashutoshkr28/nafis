import { assets } from '@/assets/assets';
import Image from 'next/image';
// import logo from '@/assets/logo.png';

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image src={assets.log} width={90} height={90} alt="Company Logo" className="w-[70px] h-[70px] sm:w-auto sm:h-auto" />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-5 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get Started <Image src={assets.arrow} />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Update</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
          New change ipsum dolor sit amet consectetur, adipisicing elit. Earum expedita itaque nostrum quasi, quam repellat perspiciatis perferendis voluptas reiciendis adipisci consequatur explicabo praesentium doloribus voluptatum voluptatibus odit dignissimos sed repudiandae?
        </p>
        <form className='flex justify-between max-w-[500] scale-75 sm:scale-100 mx-auto mt-10 border border-black' action="">
          <input type="text" placeholder='Enter your email' className='pl-4 outline-none' />
          <button className='border-1 border-black py-4 px-4'>Subscribe</button>
        </form>

      </div>
    </div>
  );
};

export default Header;
