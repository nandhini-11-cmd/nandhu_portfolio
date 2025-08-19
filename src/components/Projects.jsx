import React from "react";
import { motion } from "framer-motion"; // 🎬 animations
import yummyHubImage from "../assets/projects/YummyHub2.PNG";
import expensesT from "../assets/projects/ExpensesT-1.PNG";
import AhamahizhSuvai1 from "../assets/projects/AhamahizhSuvai1.PNG";
import memoryg1 from "../assets/projects/memoryg1.PNG";

const projects = [
  {
    title: "Recipe Sharing Platform",
    description:
      "Share, discover, and interact with recipes. Ratings, comments, ingredient search, meal plans, and profiles.",
    stack: ["MongoDB", "Express", "React", "Node"],
    image: yummyHubImage,
    live: "https://yummyhub-recipes.netlify.app/",
    github: "https://github.com/nandhini-11-cmd/recipeapp-frontend",
  },
  {
    title: "Smart Expense Tracker",
    description:
      "Track daily expenses by category, filter over time, and visualize spending with charts. Persists via localStorage.",
    stack: ["React", "Chart.js", "LocalStorage"],
    image: expensesT,
    live: "https://bucolic-druid-7443ff.netlify.app/",
    github: "https://github.com/nandhini-11-cmd/income_expenses_tracker",
  },
  {
    title: "Ahamahizh Suvai Spot",
    description:
      "Dynamic recipe app using public meals API. Search & filter by ingredients, categories, and meal types.",
    stack: ["React", "API"],
    image: AhamahizhSuvai1,
    live: "https://lucky-pegasus-eb9526.netlify.app/",
    github: "https://github.com/nandhini-11-cmd/recipe_app",
  },
  {
    title: "Memory Game",
    description:
      "Flip cards to find matching pairs. HTML for structure, CSS for styles, and JavaScript for logic (DOM).",
    stack: ["HTML", "CSS", "JavaScript"],
    image: memoryg1,
    live: "https://benevolent-conkies-55a639.netlify.app/",
    github: "https://github.com/nandhini-11-cmd/MINI_PROJECT_1",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-16 px-6 flex flex-col items-center bg-gradient-to-br from-gray-200 via-yellow-100 to-emerald-200"
    >
      <h2 className="text-4xl font-bold text-black mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl border border-gray-300 shadow-md overflow-hidden bg-white hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-60 md:h-72 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Slide-up overlay */}
              <div className="absolute inset-0 bg-black/80 text-white flex flex-col items-center justify-center px-6 text-center
                              translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded bg-white/20 text-xs md:text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-5">
              <h3 className="text-black text-lg md:text-xl font-semibold">
                {p.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mt-1 line-clamp-2">
                {p.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;