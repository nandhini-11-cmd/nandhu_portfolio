import React, { useState } from "react";

const Certification = () => {
  const certificates = [
    { title: "Full Stack Development (MERN) with AI Tools", img: "/certifications/cert1.png" },
    { title: "JavaScript Basics – GUVI", img: "/certifications/cert2.png" },
    { title: "HTML, CSS & Tailwind CSS – GUVI", img: "/certifications/cert3.png" },
    { title: "Advanced JavaScript – GUVI", img: "/certifications/cert4.png" },
    { title: "React.js – GUVI", img: "/certifications/cert5.png" },
    { title: "Database (SQL & MongoDB) – GUVI", img: "/certifications/cert6.png" },
    { title: "Node.js – GUVI", img: "/certifications/cert7.png" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const next = () => {
    setSelectedIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const selectFromThumb = (index) => {
    setSelectedIndex(index);
  };

  return (
    <section
      id="certification"
      className="min-h-screen py-16 px-4 sm:px-6 flex flex-col items-center "
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-10">
        Certifications
      </h2>

      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl max-w-4xl w-full">
        
        {/* ==== TITLE ===== */}
        <h3 className="text-center text-lg sm:text-xl font-bold mb-4 text-gray-700 px-2">
          {certificates[selectedIndex].title}
        </h3>

        {/* ==== MAIN LARGE CERTIFICATE ===== */}
        <div className="w-full flex justify-center">
          <img
            src={certificates[selectedIndex].img}
            className="rounded-lg shadow-lg max-h-[250px] sm:max-h-[350px] w-full object-contain"
            alt="certificate"
          />
        </div>

        {/* CAPTION */}
        <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">
          Certification {selectedIndex + 1} of {certificates.length}
        </p>

        {/* ==== NAVIGATION BUTTONS ==== */}
        <div className="flex justify-between mt-4 px-4">
          <button
            onClick={prev}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm sm:text-base"
          >
            ⬅
          </button>
          <button
            onClick={next}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm sm:text-base"
          >
            ➡
          </button>
        </div>

        {/* ==== THUMBNAILS GRID ==== */}
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 mt-6">
          {certificates.map((cert, index) => (
            <img
              key={index}
              src={cert.img}
              onClick={() => selectFromThumb(index)}
              className={`h-12 sm:h-16 w-full object-cover rounded-lg cursor-pointer border 
              ${
                selectedIndex === index
                  ? "border-blue-500 scale-105"
                  : "border-transparent"
              }
              hover:scale-105 transition duration-200`}
              alt="thumbnail"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
