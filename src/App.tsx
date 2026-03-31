import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './i18n';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/ui/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Footer } from './components/sections/Footer';
import { ContactSection } from './components/sections/ContactSection';
import { ScrollProgress } from './components/ui/ScrollProgress';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'dark bg-zinc-900' : 'bg-gray-100'} min-h-screen transition-colors duration-300`}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Toaster position="top-center" />
      <ScrollProgress />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main id="main-content">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;