import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero'; 
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills /> 
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
        <p>© 2026 Natee. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;