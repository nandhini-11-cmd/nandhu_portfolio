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
      title: "Database(SQL,MongoDB) – GUVI",
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
      className="min-h-screen py-10  px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-black mb-10 inline-block mt-6">
        Certifications
      </h2>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-pink-200 p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-blue-600">{cert.title}</h3>
            <p className="text-black text-sm mt-1">{cert.issuer}</p>
            <p className="text-black text-sm">{cert.year}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certification;