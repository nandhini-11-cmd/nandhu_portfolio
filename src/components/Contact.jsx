import React from 'react'

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-16 bg-black px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-white mb-10  inline-block mt-26">
        Contact
      </h2>

      <div className="max-w-2xl w-full bg-gray-50 p-6 rounded-lg shadow-md space-y-6 text-gray-800">
        {/* Location */}
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-blue-600 text-xl" />
          <p>Erode, Tamil Nadu – 638457, India</p>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-blue-600 text-xl" />
          <a href="mailto:nandhini.ks11@gmail.com" className="hover:underline">
            nandhini.ks11@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-blue-600 text-xl" />
          <a href="tel:+919500747485" className="hover:underline">
            +91 95007 47485
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-4">
          <FaLinkedin className="text-blue-600 text-xl" />
          <a
            href="https://www.linkedin.com/in/nandhiniks-mern/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/nandhiniks-mern/
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-4">
          <FaGithub className="text-blue-600 text-xl" />
          <a
            href="https://github.com/nandhini-11-cmd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/nandhini-11-cmd
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;