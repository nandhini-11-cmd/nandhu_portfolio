import React from 'react';

const Certification = () => {
  const certifications = [
    {
      title: "Full Stack Development (MERN) with AI Tools – GUVI & IITM Pravartak",
      year: "2024",
      issuer: "GUVI & IITM Pravartak",
      link: "https://v2.zenclass.in/certificateDownload/S4BJhQDDby1OzBOt",
    },
    {
      title: "JavaScript Basics – GUVI",
      year: "2024",
      issuer: "GUVI (An IIT-Madras Incubated EdTech Platform)",
      link: "https://v2.zenclass.in/certificateDownload/DCIq9DHeJtrvuqFp",
    },
    {
      title: "HTML, CSS & Tailwind CSS – GUVI",
      year: "2024",
      issuer: "GUVI (An IIT-Madras Incubated EdTech Platform)",
      link: "https://v2.zenclass.in/certificateDownload/IbT4135SxR8Rbz8u",
    },
    {
      title: "Advanced JavaScript – GUVI",
      year: "2024",
      issuer: "GUVI (An IIT-Madras Incubated EdTech Platform)",
      link: "https://v2.zenclass.in/certificateDownload/NTzrP73O2yn8GZkG",
    },
    {
      title: "React.js – GUVI",
      year: "2024",
      issuer: "GUVI (An IIT-Madras Incubated EdTech Platform)",
      link: "https://v2.zenclass.in/certificateDownload/ZGilprdN3sFBV0Id",
    },
    {
      title: "MongoDB – GUVI",
      year: "2024",
      issuer: "GUVI (An IIT-Madras Incubated EdTech Platform)",
      link: "https://v2.zenclass.in/certificateDownload/5zeHwn70nOZ2SvPc",
    },
    {
      title: "Node.js – GUVI",
      year: "2024",
      issuer: "GUVI (An IIT-Madras Incubated EdTech Platform)",
      link: "https://v2.zenclass.in/certificateDownload/5uDMjy30jkPEqPh0",
    },
    
  ];

  return (
    <section
      id="certification"
      className="min-h-screen py-10 bg-black px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-white mb-10 inline-block mt-28">
        Certifications
      </h2>

      <div className="max-w-xl w-full space-y-6">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-700">{cert.title}</h3>
            <p className="text-gray-600 text-sm">{cert.issuer}</p>
            <p className="text-gray-600 text-sm mt-1">{cert.year}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certification;