import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/50 backdrop-blur-md shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full shadow-md animate-spin" />
          <span className="text-xl font-bold text-gray-900 tracking-wide">
            Nandhini
          </span>
        </div>

        {/* Navigation links */}
        <ul className="flex space-x-6 font-medium items-center">
          {[
            "home", "about", "skills", "projects", "tasks",
            "experience", "education", "certification", "contact"
          ].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer capitalize text-gray-900 font-semibold hover:text-blue-600 relative group"
              >
                {section}
                {/* Underline effect */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}

          {/* Resume button */}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;