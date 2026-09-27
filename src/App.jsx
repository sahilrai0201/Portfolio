import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChessSpotlight from './components/ChessSpotlight';
import Projects from './components/Projects';
import DsaStats from './components/DsaStats';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import ResumeModal from './components/ResumeModal';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('sahil_theme') || 'dark';
  });
  const [cmdOpen, setCmdOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sahil_theme', theme);
  }, [theme]);

  // Global key listener for Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        openCommandPalette={() => setCmdOpen(true)}
        openResumeModal={() => setResumeOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero openResumeModal={() => setResumeOpen(true)} />
        <ChessSpotlight />
        <Projects />
        <DsaStats />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer openResumeModal={() => setResumeOpen(true)} />

      {/* Modals & Command Palette */}
      <CommandPalette
        isOpen={cmdOpen}
        onClose={() => setCmdOpen(false)}
        toggleTheme={toggleTheme}
        theme={theme}
        openResumeModal={() => setResumeOpen(true)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
