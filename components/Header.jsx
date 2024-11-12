import Image from 'next/image';
import logo from '@/assets/logo.png';

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image src={logo} width={180} alt="Company Logo" className="w-[130px] sm:w-auto" />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get Started
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Update</h1>
        <p>
          New change ipsum dolor sit amet consectetur, adipisicing elit. Earum expedita itaque nostrum quasi, quam repellat perspiciatis perferendis voluptas reiciendis adipisci consequatur explicabo praesentium doloribus voluptatum voluptatibus odit dignissimos sed repudiandae?
        </p>
      </div>
    </div>
  );
};

export default Header;
