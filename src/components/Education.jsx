import React from 'react'

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen py-16  px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-black mb-10  inline-block mt-4">
        Education
      </h2>

      <div className="max-w-4xl w-full space-y-6">
        {/* MCA */}
        <div className="bg-blue-200 p-6 rounded-lg shadow-md border-l-4 border-pink-300 hover:shadow-xl hover:scale-105 transform transition-all duration-300">
          <h3 className="text-2xl font-semibold text-black">
            Master of Computer Applications (MCA)
          </h3>
          <p className="text-black text-sm">Autonomous - Affiliated to Anna University</p>
          <p className="text-black text-sm mb-2">2016 | First Class with Distinction</p>
        </div>

        {/* B.Sc */}
        <div className="bg-blue-200 p-6 rounded-lg shadow-md border-l-4 border-pink-300 hover:shadow-xl hover:scale-105 transform transition-all duration-300">
          <h3 className="text-2xl font-semibold text-black">
            Bachelor of Science (Mathematics)
          </h3>
          <p className="text-black text-sm">Bharathiar University</p>
          <p className="text-black text-sm mb-2">2013 | First Class</p>
        </div>
      </div>
    </section>
  );
};

export default Education;