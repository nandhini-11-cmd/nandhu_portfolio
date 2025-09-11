import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
    
      <div className="border-t border-gray-300 w-full"></div>

    
      <div className="bg-gradient-to-r from-green-100 via-pink-100 to-yellow-100">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-6 py-5 text-gray-700 space-y-4">
          
          
          <div className="flex space-x-6 text-xl">
            <a
              href="https://github.com/nandhini-11-cmd"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nandhiniks-mern/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:nandhini.ks11@gmail.com"
              className="hover:text-red-500 hover:scale-110 transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>

         
          <p className="text-base  text-center font-medium">
            © {new Date().getFullYear()} Nandhini ♥ | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}