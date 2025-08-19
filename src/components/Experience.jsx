import React from "react";
import accentureLogo from "../assets/accenture.png"; // ✅ Save logo inside src/assets/

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-16  px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-black mb-10 inline-block">
        Experience
      </h2>

      <div className="max-w-4xl w-full space-y-6">
        <div className="bg-pink-200 p-6 rounded-2xl shadow-lg border-l-4 border-blue-200 hover:shadow-xl hover:scale-105 transform transition-all duration-300">
          <div className="flex items-center space-x-4">
            {/* Company Logo (Circular Avatar) */}
            <img
              src={accentureLogo}
              alt="Accenture Logo"
              className="w-16 h-16 object-contain rounded-full border-2 border-white shadow-md"
            />

            {/* Job Title & Company */}
            <div>
              <h3 className="text-2xl font-bold text-black">
                Software Engineer
              </h3>
              <p className="text-lg font-semibold text-shadow-black">
                Accenture Solutions Pvt. Ltd. – Chennai
              </p>
              <p className="text-shadow-black">June 2016 – Feb 2019</p>
            </div>
          </div>

          {/* Job Description */}
          <ul className="list-disc pl-6 mt-4 space-y-2 text-black text-lg">
            <p className="font-bold text-xl">Client: CareCentrix (US) – A leading healthcare management company providing post-acute care solutions across the U.S.</p>
            <li>
              Provided production support for Healthcare Provider Data (HPD) applications, handling incident tickets, root cause analysis, and delivering defect fixes using Java, Drools, and SQL.
            </li>
            <li>
             Implemented enhancements in provider data services (search, credentialing, in-network validations) by updating business rules in Drools, and optimizing SQL queries.
            </li>
            <li>
              Collaborated with cross-functional teams (IBR, BizTalk, Database) to resolve integration issues and improve provider data workflows, ensuring smooth interoperability with payer systems.
            </li>
            <li className="font-bold">
              Key Achievements: Received 2 Best Performer Awards for on-time delivery of enhancements, and quality defect resolution.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;