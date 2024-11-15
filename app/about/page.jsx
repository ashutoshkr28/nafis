import { assets } from "@/assets/assets";
import Image from "next/image";

const Page = () => {
  return (
    <footer>
      <section className="bg-gray-100 py-8 md:py-12" id="contact">
        {/* Contact Title */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Get In Touch</h1>
          <p className="text-lg md:text-xl text-gray-600">We&apos;d love to hear from you</p>
        </div>

        {/* Contact Content */}
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0">
          {/* Left: Title / Contact Info */}
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Managed By</h2>
            <div className="flex justify-center md:justify-start mb-4">
              <Image
                src={assets.abtimg}
                width={150}
                height={150}
                alt="Managed by Nafis"
                className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36"
              />
            </div>
            <p className="text-gray-600 mb-2">Md Nafis Akbar</p>
            <a href="mailto:mdnafisakbar289@gmail.com" className="text-gray-600 block mt-2">Email: mdnafisakbar289@gmail.com</a>
            <a href="tel:+918877241912" className="text-gray-600 block">Phone: +91 8877241912</a>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex space-x-4 justify-center md:justify-start">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12v-9.294H9.691v-3.623H12V8.413c0-2.276 1.391-3.516 3.422-3.516.974 0 1.814.072 2.058.104v2.387h-1.413c-1.107 0-1.322.527-1.322 1.299v1.704h2.646l-.344 3.623h-2.302V24h4.512C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>

            {/* Twitter Icon */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.391-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.194-.897-.959-2.178-1.559-3.594-1.559-2.723 0-4.928 2.206-4.928 4.928 0 .385.045.761.127 1.122-4.09-.205-7.719-2.165-10.148-5.144-.424.722-.666 1.561-.666 2.457 0 1.694.863 3.188 2.173 4.067-.8-.026-1.553-.246-2.213-.614v.061c0 2.366 1.682 4.342 3.916 4.787-.41.112-.844.171-1.292.171-.316 0-.624-.03-.924-.086.626 1.956 2.444 3.379 4.599 3.419-1.68 1.319-3.801 2.106-6.102 2.106-.396 0-.787-.023-1.175-.068 2.179 1.396 4.768 2.211 7.548 2.211 9.054 0 14.002-7.5 14.002-14.002 0-.213-.005-.425-.014-.636.961-.693 1.796-1.562 2.457-2.549z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.546C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.12 20.452H3.616V9.017H7.12v11.435zM5.367 7.65a2.048 2.048 0 1 1 0-4.096 2.048 2.048 0 0 1 0 4.096zM20.452 20.452h-3.503v-5.688c0-1.36-.027-3.113-1.896-3.113-1.897 0-2.187 1.48-2.187 3.004v5.797H9.361V9.017h3.366v1.561h.048c.47-.889 1.615-1.825 3.325-1.825 3.553 0 4.206 2.338 4.206 5.376v6.323z" />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.014 7.053.072 5.779.13 4.578.456 3.517 1.517S1.13 4.578.072 5.947C.014 7.229 0 7.64 0 12s.014 4.771.072 6.053c.058 1.266.337 2.633 1.312 3.608.975.975 2.242 1.25 3.608 1.312 1.266.058 1.646.07 4.85.07s3.584-.012 4.85-.07c1.366-.062 2.633-.337 3.608-1.312.975-.975 1.25-2.242 1.312-3.608.058-1.266.07-1.646.07-4.85s-.012-3.584-.07-4.85c-.062-1.366-.337-2.633-1.312-3.608-.975-.975-2.242-1.25-3.608-1.312-1.266-.058-1.646-.07-4.85-.07z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Page;
