import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'dark bg-zinc-900' : 'bg-gray-100'} min-h-screen transition-colors duration-300`}>
      <ScrollProgress />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Analytics />
      <Footer />
    </div>
  );
}

export default App;