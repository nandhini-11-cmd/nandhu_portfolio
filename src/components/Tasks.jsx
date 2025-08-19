import React from "react";
import landingTask1 from "../assets/tasks/landingTask1-1.PNG";
import landingTask2 from "../assets/tasks/landingTask2-1.PNG";
import Movie from "../assets/tasks/Movie-1.PNG";
import Income from "../assets/tasks/income-exp.PNG";
import Shoppingkart2 from "../assets/tasks/Shoppingkart2-4.PNG";
import passwordReset from "../assets/tasks/passwordReset.PNG";
import AuthBackend from "../assets/tasks/AuthBackend.PNG";
import Recipedb from "../assets/tasks/Recipedb.PNG";

const tasks = [
  {
    title: "Password Reset Flow with Email Verification",
    description: "",
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
    title: "Recipes App – Node + Express + MVC + DB - BackEnd",
    description:
      "Recipes API with MVC architecture and database connectivity. (Backend URL must be live.)",
    stack: ["Node", "Express", "MongoDB", "MVC"],
    image: Recipedb,
    live: "https://recipe-api-g0ok.onrender.com/",
    github: "https://github.com/nandhini-11-cmd/recipe_api",
  },
  {
    title: "Movie Search App (OMDB)",
    description: "Search movies and view details via the OMDB API using React.",
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
    <section id="tasks" className="py-16 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-black mb-12">
        Learning Period – Tasks
      </h2>

      <div className="flex flex-col space-y-16 max-w-6xl w-full">
        {tasks.map((t, index) => (
         <div
  key={t.title}
  className={`flex flex-col lg:flex-row items-center gap-8 rounded-2xl border border-gray-200 shadow-md overflow-hidden bg-blue-200 ${
    index % 2 === 1 ? "lg:flex-row-reverse" : ""
  }`}
>
  {/* Image */}
  <div className="w-full lg:w-1/2">
    <img
      src={t.image}
      alt={t.title}
      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
    />
  </div>

  {/* Text Content */}
  <div className="w-full lg:w-1/2 p-6">
    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t.title}</h3>
    <p className="text-gray-600 mb-4">{t.description}</p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-4">
      {t.stack.map((s) => (
        <span
          key={s}
          className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-medium"
        >
          {s}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex gap-4">
      {t.live && (
        <a
          href={t.live}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm transition"
        >
          Live
        </a>
      )}
      {t.github && (
        <a
          href={t.github}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm transition"
        >
          GitHub
        </a>
      )}
    </div>
  </div>
</div>
        ))}
      </div>
    </section>
  );
};

export default Tasks;