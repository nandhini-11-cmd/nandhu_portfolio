import React from 'react'

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-16 bg-black px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-white mb-10   inline-block mt-26">
        Experience
      </h2>

      <div className="max-w-4xl w-full space-y-6">
        <div className="bg-gray-300 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-3xl font-bold text-black">
            Software Engineer
          </h3>
          <p className="mt-2 text-2xl font-semibold">Accenture Solutions Pvt. Ltd. – Chennai</p>
          <p className=" text-2xl mb-3 font-semibold">June 2016 – Feb 2019</p>

          <ul className="list-disc pl-5  space-y-2 text-xl">
            <li>
              Developed modules efficiently for large-scale healthcare applications.
            </li>
            <li>
              Integrated and executed functional testing to ensure performance standards.
            </li>
            <li>
              Collaborated with cross-functional teams to create technical documentation.
            </li>
            <li>
              Ensured high code quality through rigorous deployment and troubleshooting.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;