import React from "react";
import landingTask1 from "../assets/tasks/landingTask1-1.PNG";
import landingTask2 from "../assets/tasks/landingTask2-1.PNG";
import Movie from "../assets/tasks/Movie-1.PNG";
import Income from "../assets/tasks/income-exp.PNG";
import Shoppingkart2 from "../assets/tasks/Shoppingkart2-4.PNG";
import passwordReset from "../assets/tasks/passwordReset.PNG";
import AuthBackend from "../assets/tasks/AuthBackend.PNG";
import Recipedb from "../assets/tasks/Recipedb.PNG";

// 👉 Dummy images for now. Replace later with your screenshots in /src/assets/tasks
 // create these or replace with placeholders

const tasks = [
  {
    title: "Password Reset Flow with Email Verification",
    description:
      "",
    stack: ["Node", "Express", "MongoDB", "Nodemailer", "Bcrypt", "JWT", "React"],
    image: passwordReset,
    live: "https://amazing-frangipane-bea4be.netlify.app/",
    github: "https://github.com/nandhini-11-cmd/Password_Reset_Flow",
  },
  {
    title: "User Authentication & Authorization API-BackEnd",
    description:
      "Role-based auth with signup/login, password hashing, protected routes, JWT.",
    stack: ["Node", "Express", "MongoDB", "JWT", "Bcrypt"],
    image: AuthBackend,
    live: null,
    github: "https://github.com/nandhini-11-cmd/user-auth-api",
  },
  {
    title: "Recipes App – MVC + DB - BackEnd",
    description:
      "Recipes API with MVC architecture and database connectivity. (Backend URL must be live.)",
    stack: ["Node", "Express", "MongoDB", "MVC"],
    image: Recipedb,
    live: "https://recipe-api-g0ok.onrender.com/",
    github: "https://github.com/nandhini-11-cmd/recipe_api",
  },
  {
    title: "Movie Search App (OMDB)",
    description:
      "Search movies and view details via the OMDB API using React.",
    stack: ["React", "OMDB API"],
    image: Movie,
    live: "https://bright-bonbon-041f68.netlify.app/",
    github: "https://github.com/nandhini-11-cmd/search_movie_app",
  },
  {
    title: "React Product & Cart (Router)",
    description:
      "Product page + cart functionality with add/remove and proper routing.",
    stack: ["React", "React Router"],
    image: Shoppingkart2,
    live: "https://hilarious-donut-7f43fb.netlify.app/",
    github: "https://github.com/nandhini-11-cmd/shopify_router",
  },
  {
    title: "Income & Expense Tracker (CRUD)",
    description:
      "Add/edit/delete income & expenses; CRUD with React JS and local storage.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: Income,
    live: "https://ornate-melomakarona-a93d07.netlify.app/",
    github: "https://github.com/nandhini-11-cmd/ToDo_List/tree/main",
  },
  {
    title: "Landing Page – Tailwind (Figma to Code)",
    description:
      "Responsive landing page translated from Figma using Tailwind CSS.",
    stack: ["HTML", "Tailwind CSS"],
    image: landingTask2,
    live: "https://zesty-dragon-dbba1a.netlify.app/",
    github: "https://github.com/nandhini-11-cmd/GUVI_TAST2_TAILWIND/tree/main",
  },
  {
    title: "Landing Page – HTML & CSS (Figma to Code)",
    description:
      "Responsive landing page translated from Figma using vanilla HTML & CSS.",
    stack: ["HTML", "CSS"],
    image: landingTask1,
    live: "https://extraordinary-crisp-521c63.netlify.app/",
    github: "https://github.com/nandhini-11-cmd/GUVI_ASSIGN1_HTML_CSS",
  },
];

const Tasks = () => {
  return (
    <section id="tasks" className="py-16 bg-gray-950 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-10">Learning Period – Tasks</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl w-full">
        {tasks.map((t) => (
          <article key={t.title} className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-900 border border-gray-800">
            {/* Image */}
            <div className="relative w-full h-52">
              <img src={t.image} alt={t.title} className="w-full h-full object-cover" loading="lazy" />
              {/* Slide-up overlay */}
              <div className="absolute inset-0 bg-black/85 text-white flex flex-col items-center justify-center px-5 text-center
                              translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
               
                <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                  {t.stack.map((s) => (
                    <span key={s} className="px-2 py-1 rounded bg-white/10 text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {t.live && (
                    <a
                      href={t.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition text-sm"
                    >
                      Live
                    </a>
                  )}
                  {t.github && (
                    <a
                      href={t.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Static footer */}
            <div className="p-4">
              <h4 className="text-white font-medium text-base line-clamp-1">{t.title}</h4>
              <p className="text-gray-400 text-sm line-clamp-2 mt-1">{t.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Tasks;