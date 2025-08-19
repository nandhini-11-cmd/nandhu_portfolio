import React from 'react';
import profileImage from '../assets/nandhu.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="italic min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-start px-4 md:px-12 text-black gap-8"
    >
      {/* 🖼️ Left: Profile Image */}
      <div className="w-full md:w-1/5 flex justify-center md:justify-start mt-28 md:mt-0">
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* 📄 Right: Developer Intro & Code Block */}
      <div className="w-full md:w-4/5 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          Hi, I'm <span className="text-red-500">Nandhini</span>
        </h1>

        <p className="text-md md:text-xl mb-6">
          Full Stack Developer (MERN) | React Enthusiast
        </p>

        <div className="bg-gray-800 text-green-500 p-4 rounded-md font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap break-words">
   {`  const developer = {
       name: 'Nandhini K.S.',
       skills: ['MERN Stack', 'React', 'Node', 'Express', 'MongoDB', 'MySQL',
                'Tailwind CSS', 'HTML5', 'CSS3', 'JS[ES6]'],       
       problemSolver: true,
       teamPlayer: true,
       hireable: function() {
         return this.teamPlayer && this.problemSolver &&
         this.skills.length > 5;
       }
     };`}
        </div>
      </div>
    </section>
  );
};

export default Hero;