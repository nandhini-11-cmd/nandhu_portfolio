import React from 'react';
import profileImage from '../assets/nandhu.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="italic min-h-screen flex flex-col md:flex-row items-center px-4 md:px-12 bg-black text-white gap-8"
    >
      {/* 🖼️ Left: Profile Image (1/5 width) */}
      <div className="w-full md:w-1/5 flex justify-center mt-28 ml-18">
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 md:w-100 md:h-70 object-cover rounded-xl "
        />
      </div>

      {/* 📄 Right: Developer Intro & Code Block (4/5 width) */}
      <div className="w-full md:w-4/5">
        <h1 className="text-2xl md:text-4xl font-bold mb-3 ml-2">
          Hi, I'm <span className="text-red-500">Nandhini</span>
        </h1>

        <p className="text-md md:text-xl mb-6 ml-2">
          Full Stack Developer (MERN) | React Enthusiast
        </p>

        <div className="bg-gray-800 text-pink-400 p-4 rounded-md font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap break-words">
   {`  const developer = {
       name:'Nandhini K.S.',
       skills:['MERN Stack', 'React', 'Node', 'MongoDB',
              'Tailwind CSS', 'SQL', 'HTML5', 'CSS3', 'JS[ES6]'],
       hardWorker: true,
       problemSolver: true,
       hireable: function() {
       return this.hardWorker && this.problemSolver &&
       this.skills.length > 5;
      }
      };`}
        </div>
      </div>
    </section>
  );
};

export default Hero;