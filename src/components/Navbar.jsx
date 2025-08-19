import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    "home",
    "about",
    "skills",
    "projects",
    "tasks",
    "experience",
    "education",
    "certification",
    "contact",
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/50 backdrop-blur-md shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src={Logo}
            alt="Logo"
            className="w-10 h-10 rounded-full shadow-md"
          />
          <span className="text-xl font-bold text-gray-900 tracking-wide">
            Nandhini
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium items-center">
          {navLinks.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer capitalize text-gray-900 font-semibold hover:text-blue-600 relative group"
              >
                {section}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer mr-18" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium">
            {navLinks.map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="cursor-pointer capitalize text-gray-900 font-semibold hover:text-blue-600"
                >
                  {section}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                onClick={toggleMenu}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;