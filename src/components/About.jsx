import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-16 md:px-20 bg-black text-white flex flex-col justify-center items-start">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-500">About Me</h2>

      <div className="max-w-4xl text-lg md:text-xl leading-relaxed space-y-6">
        <p>
          Hi, I'm <strong className="text-purple-600">Nandhini</strong>, a passionate and detail-oriented <strong>Full Stack Developer</strong> specializing in the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js). I thrive at the intersection of logic and creativity — turning complex ideas into clean, scalable, and user-friendly web applications.
        </p>

        <p>
          With a strong foundation in both frontend and backend technologies, I enjoy building complete solutions — from designing responsive UIs with <strong>React & Tailwind CSS</strong> to implementing secure and efficient APIs with <strong>Node.js and MongoDB</strong>.
        </p>

        <p>
          What sets me apart is my <strong>curiosity and eagerness to learn</strong>. I continuously explore new tools and frameworks, enjoy solving real-world problems, and believe that great code is not just functional but also elegant and maintainable.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>⚙️ Hands-on experience with <strong>RESTful APIs</strong>, <strong>JWT Authentication</strong>, <strong>Mongoose</strong>, <strong>Formik</strong>, and <strong>React Router</strong></li>
          <li>💡 Strong grasp of <strong>JavaScript ES6+</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>Responsive Design</strong></li>
          <li>🔄 Version control with <strong>Git & GitHub</strong></li>
          <li>🧠 A self-driven learner with a never-stop-learning attitude</li>
        </ul>

        <p>
          Currently, I’m seeking opportunities where I can <strong>collaborate with dynamic teams</strong>, contribute to meaningful projects, and continue growing as a developer.
        </p>

        <p className="font-semibold text-purple-600">
          Let’s build something awesome together!
        </p>
      </div>
    </section>
  );
};

export default About;