import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ openResumeModal }) {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in IST (UTC+5:30)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setIstTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        
        <div className="footer-top">
          
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-initials">SR</span>
              <span className="footer-name">{personalInfo.name}</span>
            </div>
            <p className="footer-tagline">
              Final-year CS & AI student at GL Bajaj, building full-stack web applications and solving algorithmic problems.
            </p>
            <div className="footer-local-time">
              <Clock size={13} className="text-cyan" />
              <span>Noida, IN Time: <strong>{istTime || 'IST'}</strong></span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Navigation</h4>
            <a href="#about" className="footer-link">About</a>
            <a href="#projects" className="footer-link">Featured Projects</a>
            <a href="#dsa" className="footer-link">DSA & Problem Solving</a>
            <a href="#skills" className="footer-link">Tech Skills</a>
            <a href="#experience" className="footer-link">Experience & Education</a>
            <a href="#contact" className="footer-link">Get in Touch</a>
          </div>

          {/* Socials & Resume */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Connect</h4>
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="footer-link">
              GitHub (@sahilrai0201)
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="footer-link">
              LeetCode (@sahilrai02_)
            </a>
            <button onClick={openResumeModal} className="footer-link-btn">
              Download / View Resume
            </button>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Sahil Rai. Built with React & Vite. Powered by tactical thinking & caffeine.
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}
