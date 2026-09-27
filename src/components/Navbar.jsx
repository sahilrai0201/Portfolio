import React, { useState, useEffect } from 'react';
import { Sun, Moon, Command, Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme, openCommandPalette, openResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'DSA & LeetCode', href: '#dsa' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" aria-label="Sahil Rai Portfolio">
          <div className="logo-badge">
            <span className="logo-initials">SR</span>
          </div>
          <div className="brand-meta">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-status">
              <span className="pulse-dot"></span>
              Available for hire
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link-item">
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Command Palette Trigger */}
          <button
            onClick={openCommandPalette}
            className="cmd-trigger-btn"
            title="Open Command Palette (Ctrl+K or Cmd+K)"
            aria-label="Search and commands"
          >
            <Command size={14} />
            <span className="cmd-label">Ctrl+K</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Resume Modal Trigger */}
          <button onClick={openResumeModal} className="nav-cta-btn">
            <FileText size={15} />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-drawer-item"
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-drawer-actions">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openResumeModal();
                }}
                className="mobile-resume-btn"
              >
                <FileText size={16} />
                <span>View Complete Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
