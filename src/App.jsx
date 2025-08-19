import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Tasks from "./components/Tasks";


function App() {
 

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 min-h-screen">
      <Navbar />
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200">
  <Hero />
</section>

<section id="about" className="min-h-screen bg-gradient-to-r from-gray-200 via-yellow-100 to-emerald-200">
  <About />
</section>

<section id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200">
  <Skills />
</section>

<section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 via-yellow-100 to-emerald-200">
  <Projects />
</section>
<section id="tasks" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200">
  <Tasks />
</section>

<section id="experience" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 via-yellow-100 to-emerald-200">
  <Experience />
</section>

<section id="education" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200">
  <Education />
</section>

<section id="certification" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 via-yellow-100 to-emerald-200">
  <Certifications />
</section>

<section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200">
  <Contact />
</section>

<section id="footer" className=" flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200">
  <Footer />
</section>


      
    </div>
  );
}

export default App
