import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 italic">
      <div className="flex items-center justify-between px-6 py-2">
        {/* Logo on the left */}
        <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />

        {/* Navigation links */}
        <ul className="flex space-x-6 font-medium items-center">
          {[
            "home", "about", "skills", "projects","tasks",
            "experience", "education", "certification", "contact"
          ].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer capitalize hover:text-blue-500"
              >
                {section}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
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