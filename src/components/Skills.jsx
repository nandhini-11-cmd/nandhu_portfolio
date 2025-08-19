import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React.js', icon: <FaReact className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-800" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
  { name: 'MVC Pattern', icon: <FaDatabase className="text-purple-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-black" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
];

// Animation settings
const getAnimation = (rowIndex) => {
  return {
    hidden: { opacity: 0, x: rowIndex % 2 === 0 ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 "
    >
      <h2 className="text-4xl font-bold text-black mb-10 border-b-4 inline-block">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl">
        {skills.map((skill, index) => {
          const rowIndex = Math.floor(index / 4); // Every 4 items is a new row
          return (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 transform hover:scale-110 transition duration-300"
              variants={getAnimation(rowIndex)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-lg font-bold text-black">{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;