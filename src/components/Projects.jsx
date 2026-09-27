import React, { useState } from 'react';
import { ExternalLink, Eye, Lock, Images } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [previewIndices, setPreviewIndices] = useState({});

  const handleCardScreenSelect = (projectId, index, e) => {
    e.stopPropagation();
    setPreviewIndices((prev) => ({
      ...prev,
      [projectId]: index
    }));
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>Projects</span>
          </div>
          <h2 className="section-title">
            Things I've Built
          </h2>
          <p className="section-subtitle">
            A few full-stack web applications and tools I've worked on recently. Both web apps have live demos deployed on Render.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => {
            const screenshots = project.screenshots || [];
            const hasMedia = screenshots.length > 0;
            const currentPreviewIdx = previewIndices[project.id] || 0;
            const currentScreen = hasMedia ? screenshots[currentPreviewIdx] : null;

            return (
              <div
                key={project.id}
                className={`project-card glass-card ${hasMedia ? 'project-card-has-media' : ''}`}
              >
                {/* Media Preview Column for projects with screenshots */}
                {hasMedia && currentScreen && (
                  <div className="project-card-media-col" onClick={() => setActiveProject(project)}>
                    <div className="card-browser-mockup">
                      {/* Browser Header Bar */}
                      <div className="card-browser-header">
                        <div className="browser-dots">
                          <span className="dot dot-red" />
                          <span className="dot dot-yellow" />
                          <span className="dot dot-green" />
                        </div>
                        <div className="card-browser-address">
                          <Lock size={11} className="text-cyan" />
                          <span className="address-text">
                            https://{currentScreen.route || 'bizpulse-1.onrender.com'}
                          </span>
                        </div>
                        <div className="card-browser-badge">
                          <Images size={12} />
                          <span>{screenshots.length} Screens</span>
                        </div>
                      </div>

                      {/* Image Preview Container */}
                      <div className="card-browser-img-wrap">
                        <img
                          src={currentScreen.url}
                          alt={currentScreen.title}
                          className="card-browser-img"
                          loading="lazy"
                        />
                        <div className="card-browser-overlay">
                          <span className="card-preview-btn">
                            <Eye size={15} />
                            <span>View Full Case Study & Gallery</span>
                          </span>
                        </div>
                      </div>

                      {/* Mini Switcher Chips */}
                      <div className="card-browser-chips-bar" onClick={(e) => e.stopPropagation()}>
                        <div className="chips-list">
                          {screenshots.slice(0, 5).map((s, idx) => (
                            <button
                              key={s.id || idx}
                              type="button"
                              className={`card-chip-btn ${idx === currentPreviewIdx ? 'active' : ''}`}
                              onClick={(e) => handleCardScreenSelect(project.id, idx, e)}
                              title={`Preview ${s.title}`}
                            >
                              {s.shortTitle || s.title}
                            </button>
                          ))}
                          {screenshots.length > 5 && (
                            <button
                              type="button"
                              className="card-chip-more"
                              onClick={() => setActiveProject(project)}
                              title="Click to see all screens in Case Study"
                            >
                              +{screenshots.length - 5} more
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Column */}
                <div className="project-card-body">
                  <div className="project-top-meta">
                    <span className="project-category-tag">{project.category}</span>
                    <div className="project-quick-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-icon-link"
                          title="GitHub Repository"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="project-icon-link highlight-live"
                          title="Live Demo"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 
                    className="project-title project-title-clickable" 
                    onClick={() => setActiveProject(project)}
                    title="Click to view deep dive case study"
                  >
                    {project.title}
                  </h3>
                  <p className="project-subtext">{project.subtitle}</p>

                  <p className="project-story">{project.story}</p>

                  {/* Bullets */}
                  <ul className="project-bullet-list">
                    {project.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="project-tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Action */}
                  <div className="project-footer-links">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="btn btn-secondary btn-sm"
                      title="View architecture & key innovations"
                    >
                      <Eye size={14} />
                      <span>Case Study {hasMedia ? `& Gallery` : ''}</span>
                    </button>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <GithubIcon size={14} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
