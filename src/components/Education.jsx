import React from 'react'

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen py-16 bg-black px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-white mb-10  inline-block mt-20">
        Education
      </h2>

      <div className="max-w-4xl w-full space-y-6">
        {/* MCA */}
        <div className="bg-gray-300 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-2xl font-semibold text-blue-700">
            Master of Computer Applications (MCA)
          </h3>
          <p className="text-gray-600 text-sm">Bharathiar University</p>
          <p className="text-gray-500 text-sm mb-2">2016 | First Class</p>
        </div>

        {/* B.Sc */}
        <div className="bg-gray-300 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-2xl font-semibold text-blue-700">
            Bachelor of Science (Mathematics)
          </h3>
          <p className="text-gray-600 text-sm">Bharathiar University</p>
          <p className="text-gray-500 text-sm mb-2">2013 | First Class</p>
        </div>
      </div>
    </section>
  );
};

export default Education;