import React from "react";
import profileImage from "../assets/nandhu.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 text-black gap-10"
    >
   
      <div className="w-full md:w-2/5  flex flex-col items-center md:items-start mt-20 md:mt-14 text-center md:text-left">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-3 mt-6">
          Hi, I'm <span className="text-red-500">Nandhini</span>
        </h1>
        <p className="text-lg mt-2 md:text-xl">
          Full Stack Developer (MERN) </p>
          <p className="text-lg mt-2 md:text-xl">React Enthusiast
        </p>
        <img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 md:w-80 md:h-72 rounded-xl shadow-lg object-cover mb-6 mt-8 md:mt-4 "
        />
      </div>

      <div className="mt-0 md:mt-6 w-3/5">
  <div className="bg-gray-900 rounded-lg font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap break-words text-left mt-0 md:mt-14 shadow-md overflow-hidden">


    <div className="flex items-center bg-gray-800 px-4 py-2 ">
      <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
      <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      <span className="text-gray-400 text-xs ml-4">candidateMatch.js</span>
    </div>

    <pre className="p-4">
      <code className="text-pink-400">
        <span className="text-purple-400">const</span> candidateMatch = (candidate) =&gt;{"\n"}
        {"  "} candidate.problemSolver &amp;&amp; candidate.skills.length &gt; 5{"\n"}
        {"    "} ? <span className="text-yellow-300">"Perfect Match"</span>{"\n"}
        {"    "} : <span className="text-yellow-300">"Next Candidate "</span>;{"\n\n"}

        <span className="text-purple-400">const</span> nandhini = {"{"}{"\n"}
        {"  "}name: <span className="text-green-300">"Nandhini K.S."</span>,{"\n"}
        {"  "}role: <span className="text-green-300">"Full Stack Developer (MERN)"</span>,{"\n"}
        {"  "}skills: [<span className="text-green-300"></span><span className="text-green-300">"React"</span>, 
        <span className="text-green-300">"Node"</span>,
         <span className="text-green-300">"Express"</span>,
         <span className="text-green-300">"MongoDB"</span>, <span className="text-green-300">"MySQL"</span>,
          <span className="text-green-300">"TailwindCSS"</span>, {"\n"}
          {"  "} <span className="text-green-300">"HTML5" <span className="text-pink-400">,</span> "CSS3"<span className="text-pink-400">],</span></span>{"\n"}
         
        {"  "}problemSolver: <span className="text-blue-400">true</span>,{"\n"}
        {"  "}teamPlayer: <span className="text-blue-400">true</span>,{"\n"}
        {"}"};
        {"\n\n"}
        console.log(candidateMatch(nandhini));
      </code>
    </pre>
  </div>
</div>
    </section>
  );
};

export default Hero;