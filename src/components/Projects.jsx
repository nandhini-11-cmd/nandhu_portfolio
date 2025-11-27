import React from "react";
import { motion } from "framer-motion"; 
import yummyHubImage from "../assets/projects/YummyHub2.PNG";
import QN1 from "../assets/projects/QN1.PNG";
import pesi1 from "../assets/projects/pesi1.PNG";

const projects = [
  
  {
    title: "QuizNova - AI Powered Quiz App using Gemini AI (MERN)",
    description:
      "An AI-powered quiz platform where teachers generate quizzes using Gemini AI and students take timed quizzes with instant AI explanations, analytics charts, PDF reports, and leaderboards.",
    tech: "React, Tailwind, Axios, Formik, ChartJS, jsPDF, Framer Motion, Node.js, Express, MongoDB Atlas, JWT, Multer, Nodemailer, Gemini AI.",
    image: QN1,
    github: "https://github.com/nandhini-11-cmd/Quiz_app",
    demo: "https://quiznova-ai-powered.netlify.app/",
  },
   {
    title: "PesiGo - Chat App (MERN)",
    description:
      "A real-time MERN chat app with live messaging, typing/online indicators, Cloudinary media uploads, message delete/forward, daily message limits, and Razorpay Premium for unlimited chats.",
    tech: "React, Tailwind CSS, Axios, Emoji Picker, Node.js, Express, MongoDB (Mongoose), Socket.IO, Cloudinary, Razorpay, MongoDB Atlas, Render, Netlify.",
    image: pesi1,
    github: "https://github.com/nandhini-11-cmd/mern-chat-app",
    demo: "https://pesigo-chatapp.netlify.app/",
  },
  {
    title: "YummyHub - Recipe Sharing Platform (MERN)",
    description:
      "MERN-based recipe sharing app that allows users to publish, explore, and interact with recipes. Features include ratings, comments, ingredient-based search, meal planning, following users, and profile management.",
    tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS",
    image: yummyHubImage,
    frontend: "https://github.com/nandhini-11-cmd/recipeapp-frontend",
    backend: "https://github.com/nandhini-11-cmd/recipeSharingApp",
    demo: "https://yummyhub-recipes.netlify.app/",
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
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden"
            >

              {/* FIXED PERFECT THUMBNAIL */}
              <motion.div
                className="md:w-1/2 w-full h-72 rounded-l-2xl overflow-hidden relative bg-white flex items-center justify-center shadow-lg border border-gray-200"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </motion.div>

              {/* RIGHT SIDE CONTENT */}
              <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                  <p className=" mb-4 font-semibold text-gray-800">{p.description}</p>
                  <p className="text-sm font-semibold text-gray-800 mb-4">
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
                      className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
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
                      className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500"
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
                      className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500"
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
                      className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500"
                    >
                    GitHub MonoRepo
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
