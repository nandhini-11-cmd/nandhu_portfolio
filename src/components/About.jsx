import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16 md:px-20 text-black flex flex-col justify-center items-center text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">About Me</h2>

      <div className="max-w-4xl text-lg md:text-xl leading-relaxed space-y-6">
        <p className="sparkle-text  font-bold text-2xl">
          Code ≠ Just Syntax. Code = Creativity + Problem solving — it’s a way to bring ideas to life.
        </p>
        <p>
          Hi, I’m Nandhini, a Full Stack Developer who thrives on blending design, logic, and problem-solving
          to build meaningful digital experiences. I believe the best solutions come from empathy for the user,
          attention to detail, and continuous learning. Whether it’s crafting smooth UIs with React or building
          APIs with Node.js, I aim to create applications that people love to use.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-left mx-auto w-fit">
          <li>
            ⚙️ Hands-on experience with <strong>RESTful APIs</strong>, <strong>JWT Authentication</strong>,{' '}
            <strong>Mongoose</strong>, <strong>Formik</strong>, and <strong>React Routers</strong>
          </li>
          <li>
            💡 Strong grasp of <strong>JavaScript ES6+</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, and{' '}
            <strong>Responsive Design (Tailwind CSS)</strong>
          </li>
          <li>🔄 Version control with <strong>Git & GitHub</strong></li>
          <li>🧠 A self-driven learner with a never-stop-learning attitude</li>
        </ul>

        <p>
          Currently, I’m seeking opportunities where I can <strong>collaborate with dynamic teams</strong>, contribute
          to meaningful projects, and continue growing as a developer.
        </p>
        </div>
    </section>
  );
};

export default About;