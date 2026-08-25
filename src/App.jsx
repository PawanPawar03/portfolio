import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Experience } from './components/experience/Experience';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen aesthetic-canvas text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-primary-500 selection:text-white relative overflow-x-hidden w-full">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
