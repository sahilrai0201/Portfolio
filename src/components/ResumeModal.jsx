import React, { useEffect } from 'react';
import { X, Printer, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content resume-modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Top Controls Bar (Hidden during print) */}
        <div className="resume-controls-bar no-print">
          <div className="resume-status-indicator">
            <span className="pulse-dot"></span>
            <span>Resume (Standard 1-Page Format)</span>
          </div>
          <div className="resume-actions-group">
            <a
              href="/Sahil_Rai_Resume.pdf"
              download="Sahil_Rai_Resume.pdf"
              className="btn btn-secondary btn-sm"
              title="Download PDF"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
            <button onClick={handlePrint} className="btn btn-primary btn-sm">
              <Printer size={14} />
              <span>Print / Save as PDF</span>
            </button>
            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document — Exact LaTeX / Jake's Resume 1-Page Layout */}
        <div className="resume-paper" id="printable-resume">
          
          {/* Header */}
          <header className="latex-header">
            <h1 className="latex-name">{personalInfo.name}</h1>
            <div className="latex-contact-line">
              <span>{personalInfo.phone}</span>
              <span className="sep">|</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <span className="sep">|</span>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <span className="sep">|</span>
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer">GitHub</a>
              <span className="sep">|</span>
              <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
            </div>
          </header>

          {/* Education */}
          <section className="latex-section">
            <h2 className="latex-section-title">Education</h2>
            
            <div className="latex-entry">
              <div className="latex-row">
                <span className="latex-bold">GL Bajaj Institute of Technology & Management, Greater Noida</span>
                <span className="latex-right latex-bold">2023 – 2027</span>
              </div>
              <div className="latex-row">
                <span className="latex-italic">B.Tech in Computer Science with Artificial Intelligence</span>
                <span className="latex-right">CGPA: 7.5/10</span>
              </div>
            </div>

            <div className="latex-entry">
              <div className="latex-row">
                <span className="latex-bold">Sunbeam School, Ballia</span>
                <span className="latex-right latex-bold">2021 – 2022</span>
              </div>
              <div className="latex-row">
                <span className="latex-italic">Senior Secondary Education (Class XII)</span>
                <span className="latex-right">80%</span>
              </div>
            </div>

            <div className="latex-entry">
              <div className="latex-row">
                <span className="latex-bold">Devasthaly Vidyapeeth, Ballia</span>
                <span className="latex-right latex-bold">2019 – 2020</span>
              </div>
              <div className="latex-row">
                <span className="latex-italic">Secondary Education (Class X)</span>
                <span className="latex-right">71.2%</span>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="latex-section">
            <h2 className="latex-section-title">Technical Skills</h2>
            <div className="latex-skills">
              <p><strong>Languages:</strong> C++, Java, Python, JavaScript, SQL</p>
              <p><strong>Frontend:</strong> HTML, CSS, React.js, Tailwind CSS, Vite</p>
              <p><strong>Backend:</strong> Node.js, Express.js, REST APIs, JWT, Mongoose, Axios, Multer</p>
              <p><strong>Databases:</strong> MongoDB Atlas, MySQL</p>
              <p><strong>AI/GenAI:</strong> Gemini API, Prompt Engineering, LLM Workflows</p>
              <p><strong>Core CS:</strong> DSA, OOP, OS, CN, DBMS</p>
              <p><strong>Tools & Technologies:</strong> Git, GitHub, Postman, VS Code, IntelliJ IDEA, MySQL Workbench, Render</p>
            </div>
          </section>

          {/* Projects */}
          <section className="latex-section">
            <h2 className="latex-section-title">Projects</h2>
            
            {/* BizPulse */}
            <div className="latex-project-entry">
              <div className="latex-row">
                <div>
                  <span className="latex-bold">BizPulse – AI-Powered Business Management Dashboard</span>
                  <span className="latex-links">
                    {' '}[<a href="https://github.com/sahilrai0201/BizPulse" target="_blank" rel="noreferrer">GitHub</a>]
                    {' '}[<a href="https://bizpulse-1.onrender.com/" target="_blank" rel="noreferrer">Live Demo</a>]
                  </span>
                </div>
              </div>
              <div className="latex-tech-row latex-italic">
                React.js, Node.js, Express.js, MongoDB, Mongoose, Tailwind CSS, Gemini AI, JWT
              </div>
              <ul className="latex-bullets">
                <li>Built and deployed a full-stack AI-powered business management dashboard featuring Product, Customer, Invoice, and Analytics modules using the MERN stack.</li>
                <li>Integrated Google Gemini AI to automate invoice receipt OCR and generate personalized billing reminder emails, reducing manual invoice processing.</li>
                <li>Implemented secure JWT authentication with protected REST APIs, Axios interceptors, and role-based access for seamless client-server communication.</li>
                <li>Designed an automatic MongoDB Atlas fallback to an in-memory database with demo data auto-seeding, ensuring uninterrupted application availability during database connectivity failures.</li>
              </ul>
            </div>

            {/* CampusHub */}
            <div className="latex-project-entry">
              <div className="latex-row">
                <div>
                  <span className="latex-bold">CampusHub – College Management System</span>
                  <span className="latex-links">
                    {' '}[<a href="https://github.com/sahilrai0201/CampusHub" target="_blank" rel="noreferrer">GitHub</a>]
                    {' '}[<a href="https://campushub-fcw0.onrender.com/" target="_blank" rel="noreferrer">Live Demo</a>]
                  </span>
                </div>
              </div>
              <div className="latex-tech-row latex-italic">
                React.js, Vite, Tailwind CSS, Node.js, Express.js, MongoDB Atlas, Mongoose, JWT, Axios, Multer
              </div>
              <ul className="latex-bullets">
                <li>Developed and deployed a full-stack College Management System with dedicated Admin, Faculty, and Student portals using JWT authentication and role-based access control (RBAC).</li>
                <li>Built RESTful APIs with Express.js and MongoDB Atlas to manage departments, subjects, digital notices, assignments, attendance logs, lecture notes, and student submissions.</li>
                <li>Implemented secure authentication using JWT, bcryptjs, Helmet, CORS, and Multer for password hashing, API security, profile image uploads, and PDF document management.</li>
                <li>Designed a responsive React interface using React Router, Axios, Tailwind CSS, and reusable components to streamline academic workflows, profile management, and assignment tracking.</li>
              </ul>
            </div>
          </section>

          {/* Achievements */}
          <section className="latex-section">
            <h2 className="latex-section-title">Achievements</h2>
            <ul className="latex-bullets">
              <li>Solved 400+ DSA problems across LeetCode and GeeksforGeeks.</li>
              <li>Achieved a LeetCode Contest Rating of 1500+ with consistent participation in weekly contests.</li>
              <li>Led a 4-member team to develop a full-stack College Management System from architecture to deployment.</li>
            </ul>
          </section>

          {/* Certifications */}
          <section className="latex-section">
            <h2 className="latex-section-title">Certifications</h2>
            <ul className="latex-bullets">
              <li>Cisco Networking Academy – Introduction to Modern AI</li>
              <li>Cisco Networking Academy – Introduction to Cyber Security</li>
            </ul>
          </section>

        </div>

      </div>
    </div>
  );
}
