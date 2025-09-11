import React from "react";
import { motion } from "framer-motion"; 
import yummyHubImage from "../assets/projects/YummyHub2.PNG";
import expensesT from "../assets/projects/ExpensesT-1.PNG";
import AhamahizhSuvai1 from "../assets/projects/AhamahizhSuvai1.PNG";

const projects = [
  {
    title: "Recipe Sharing Platform",
    description:
      "MERN-based recipe sharing app that allows users to publish, explore, and interact with recipes. Features include ratings, comments, ingredient-based search, meal planning, following users, and profile management.",
    tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS",
    image: yummyHubImage,
    frontend: "https://github.com/nandhini-11-cmd/recipeapp-frontend",
    backend: "https://github.com/nandhini-11-cmd/recipeapp-backend",
    demo: "https://yummyhub-recipes.netlify.app/",
  },
  {
    title: "Smart Expense Tracker",
    description:
      "A responsive React app to track daily expenses and income. Includes category-based filtering, visual analytics with charts, and data persistence via localStorage.",
    tech: "React.js, Chart.js, Tailwind CSS",
    image: expensesT,
    github: "https://github.com/yourusername/expense-tracker",
    demo: "https://expense-demo.netlify.app",
  },
  {
    title: "SuvaiSpot",
    description:
      "A modern landing page for a restaurant, featuring an interactive UI with smooth animations, responsive design, and visually engaging layout.",
    tech: "React.js, Tailwind CSS",
    image: AhamahizhSuvai1,
    github: "https://github.com/yourusername/suvaispot",
    demo: "https://suvai-demo.netlify.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-gray-200 via-yellow-100 to-emerald-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        <div className="space-y-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden"
            >
             
              <motion.div
                className="md:w-1/2 w-full h-64 overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover mt-4 ml-2"
                />
              </motion.div>

             
              <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-600 mb-4">{p.description}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    <strong>Tech Stack:</strong> {p.tech}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                  {p.demo && (
                    <motion.a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Live Demo
                    </motion.a>
                  )}

                  {p.frontend && (
                    <motion.a
                      href={p.frontend}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      GitHub-FrontEnd
                    </motion.a>
                  )}

                  {p.backend && (
                    <motion.a
                      href={p.backend}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                     GitHub-BackEnd
                    </motion.a>
                  )}

                  {p.github && (
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}