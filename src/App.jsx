import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

import Tasks from "./components/Tasks";


function App() {
 

  return (
    <div className="bg-black">
      <Navbar />
      <section id="home" className="min-h-screen flex items-center justify-center bg-black">
  <Hero />
</section>

<section id="about" className="min-h-screen flex items-center justify-center bg-black">
  <About />
</section>

<section id="skills" className="min-h-screen flex items-center justify-center bg-black">
  <Skills />
</section>

<section id="projects" className="min-h-screen flex items-center justify-center bg-black">
  <Projects />
</section>
<section id="tasks" className="min-h-screen flex items-center justify-center bg-black">
  <Tasks />
</section>

<section id="experience" className="min-h-screen flex items-center justify-center bg-black">
  <Experience />
</section>

<section id="education" className="min-h-screen flex items-center justify-center bg-black">
  <Education />
</section>

<section id="certification" className="min-h-screen flex items-center justify-center bg-black">
  <Certifications />
</section>

<section id="contact" className="min-h-screen flex items-center justify-center bg-black">
  <Contact />
</section>

      
    </div>
  );
}

export default App
