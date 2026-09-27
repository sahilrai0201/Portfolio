import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, FileText, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ openResumeModal }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 35,
      spread: 45,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#818cf8', '#34d399']
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero-section section" id="about">
      <div className="container hero-container">
        
        {/* Left Column: Natural Introduction */}
        <div className="hero-content">
          
          {/* Status Badge */}
          <div className="status-pill-badge">
            <span className="pulse-dot"></span>
            <span className="status-text">{personalInfo.availability}</span>
            <span className="status-divider">•</span>
            <span className="status-location">
              <MapPin size={13} /> {personalInfo.location}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="hero-headline">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>.
          </h1>

          <p className="hero-subhead">
            Final-year Computer Science & AI student at GL Bajaj, Greater Noida. I build full-stack web applications with the <strong>MERN stack</strong> and actively practice <strong>Data Structures & Algorithms</strong>.
          </p>

          <div className="hero-bio">
            <p>
              I like building software that actually gets used—from an AI-powered billing dashboard to a college management portal for my university. Most of my day is spent writing clean React components, REST APIs in Node.js, or practicing C++ problem solving on LeetCode.
            </p>
          </div>

          {/* CTA Actions */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowUpRight size={16} />
            </a>

            <button onClick={openResumeModal} className="btn btn-secondary">
              <FileText size={16} />
              <span>Resume</span>
            </button>

            <button onClick={copyEmail} className="btn btn-ghost copy-btn" title="Copy email address">
              {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
              <span>{copied ? 'Copied to clipboard' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Social Profiles */}
          <div className="hero-social-strip">
            <span className="social-strip-label">Profiles:</span>
            <div className="social-icons">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="GitHub"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="LinkedIn"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn highlight-leetcode"
                title="LeetCode"
              >
                <LeetCodeIcon size={16} />
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Developer Profile Photo & Key Highlights */}
        <div className="hero-visual">
          <div className="avatar-card-container">
            <div className="avatar-frame">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="avatar-image"
                onError={(e) => {
                  // Fallback to local avatar if offline
                  e.target.src = '/avatar.jpg';
                }}
              />
            </div>

            {/* Clean, Grounded Stats Card */}
            <div className="profile-quick-stats glass-card">
              <div className="quick-stat-item">
                <span className="stat-number text-cyan">400+</span>
                <span className="stat-label">DSA Solved</span>
              </div>
              <div className="quick-stat-divider"></div>
              <div className="quick-stat-item">
                <span className="stat-number text-amber">1500+</span>
                <span className="stat-label">LeetCode Rating</span>
              </div>
              <div className="quick-stat-divider"></div>
              <div className="quick-stat-item">
                <span className="stat-number text-purple">MERN</span>
                <span className="stat-label">Full Stack</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
