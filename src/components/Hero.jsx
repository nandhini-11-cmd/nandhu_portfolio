import React from "react";
import profileImage from "../assets/nandhu.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 md:pt-24 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 text-black gap-10 bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200"
    >
      {/* LEFT SIDE */}
      <div className="w-full md:w-2/5 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 mt-4">
          Hi, I'm <span className="text-red-500">Nandhini</span>
        </h1>
        <p className="text-lg mt-2 md:text-xl font-bold">
          Full Stack Developer (MERN)
        </p>

        <img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 md:w-72 md:h-64 rounded-xl shadow-lg object-cover mb-6 mt-6"
        />
      </div>

      {/* RIGHT SIDE CODE BOX */}
      <div className="w-full md:w-3/5 mt-2 md:mt-6">
        <div className="bg-gray-900 rounded-lg font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap break-words text-left shadow-md overflow-hidden">
          {/* TOP BAR */}
          <div className="flex items-center bg-gray-800 px-4 py-2">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-gray-400 text-xs ml-4">candidateMatch.js</span>
          </div>

          {/* CODE BLOCK */}
          <pre className="p-4 overflow-x-auto">
            <code className="text-pink-400">
              <span className="text-purple-400">const</span> candidateMatch = (candidate) =&gt;{"\n"}
              {"  "} candidate.problemSolver &amp;&amp; candidate.skills.length &gt; 5{"\n"}
              {"    "} ?{" "}
              <span className="text-yellow-300">"Perfect Match"</span>
              {"\n"}
              {"    "} :{" "}
              <span className="text-yellow-300">"Next Candidate "</span>;{"\n\n"}
              <span className="text-purple-400">const</span> nandhini = {"{"}
              {"\n"}
              {"  "}name:{" "}
              <span className="text-green-300">"Nandhini K.S."</span>,{"\n"}
              {"  "}role:{" "}
              <span className="text-green-300">
                "Full Stack Developer (MERN)"
              </span>
              ,{"\n"}
              {"  "}skills: [
              <span className="text-green-300">"React"</span>,{" "}
              <span className="text-green-300">"Node"</span>,{" "}
              <span className="text-green-300">"Express"</span>,{" "}
              <span className="text-green-300">"MongoDB"</span>,{" "}
              <span className="text-green-300">"MySQL"</span>,{" "}
              <span className="text-green-300">"CSS3"</span>,{"\n"}
              {"  "} <span className="text-green-300">"HTML5", "TailwindCSS"</span>],{"\n"}
              {"  "}problemSolver:{" "}
              <span className="text-blue-400">true</span>,{"\n"}
              {"  "}teamPlayer:{" "}
              <span className="text-blue-400">true</span>,{"\n"}
              {"}"};{"\n\n"}
              console.log(candidateMatch(nandhini));
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
