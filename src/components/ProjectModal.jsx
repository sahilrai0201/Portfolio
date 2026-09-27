import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Lock,
  Monitor
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const screenshots = project?.screenshots || [];
  const hasScreenshots = screenshots.length > 0;
  const currentScreen = hasScreenshots ? screenshots[activeScreenIndex] : null;

  const handleNextScreen = useCallback(() => {
    if (!hasScreenshots) return;
    setActiveScreenIndex((prev) => (prev + 1) % screenshots.length);
  }, [hasScreenshots, screenshots.length]);

  const handlePrevScreen = useCallback(() => {
    if (!hasScreenshots) return;
    setActiveScreenIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [hasScreenshots, screenshots.length]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      } else if (hasScreenshots) {
        if (e.key === 'ArrowRight') {
          handleNextScreen();
        } else if (e.key === 'ArrowLeft') {
          handlePrevScreen();
        }
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, isLightboxOpen, hasScreenshots, handleNextScreen, handlePrevScreen]);

  if (!project) return null;

  const highlights = project.highlights || project.bullets || [];
  const description = project.longDescription || project.story || project.description;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
        <div className="project-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
          
          {/* Modal Close Button */}
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="project-modal-header">
            <div className="modal-tag-badge">
              <Sparkles size={13} className="text-cyan" />
              <span>{project.category}</span>
            </div>
            <h2 className="project-modal-title">{project.title}</h2>
            <p className="project-modal-subtitle">{project.subtitle}</p>
          </div>

          {/* Tech Stack Pills */}
          <div className="project-modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="badge badge-glow">
                {tag}
              </span>
            ))}
          </div>

          {/* SCREENSHOT GALLERY OR TECH BANNER */}
          {hasScreenshots ? (
            <div className="modal-gallery-container">
              {/* Screen Category / Tab Selector */}
              <div className="modal-gallery-nav" role="tablist" aria-label="Application screenshots">
                {screenshots.map((s, index) => {
                  const isActive = index === activeScreenIndex;
                  return (
                    <button
                      key={s.id || index}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`gallery-nav-pill ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveScreenIndex(index)}
                    >
                      <span className="pill-dot" />
                      <span className="pill-label">{s.shortTitle || s.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Browser Mockup Window */}
              <div className="browser-mockup-frame">
                {/* Browser Title Bar */}
                <div className="browser-mockup-topbar">
                  <div className="browser-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>

                  <div className="browser-address-pill">
                    <Lock size={12} className="address-lock-icon" />
                    <span className="address-text">
                      https://{currentScreen.route || 'bizpulse-1.onrender.com'}
                    </span>
                  </div>

                  <div className="browser-topbar-actions">
                    <button
                      type="button"
                      className="browser-action-btn"
                      onClick={() => setIsLightboxOpen(true)}
                      title="View High-Resolution Image"
                      aria-label="View High-Resolution Image"
                    >
                      <Maximize2 size={13} />
                    </button>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="browser-action-btn"
                        title="Visit Live Application"
                        aria-label="Visit Live Application"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Screenshot Display Area */}
                <div className="browser-mockup-viewport" onClick={() => setIsLightboxOpen(true)}>
                  <img
                    src={currentScreen.url}
                    alt={currentScreen.title}
                    className="browser-mockup-img"
                    key={currentScreen.url}
                  />

                  {/* Hover Hint Overlay */}
                  <div className="viewport-zoom-hint">
                    <Maximize2 size={16} />
                    <span>Click to expand high-res screenshot</span>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    type="button"
                    className="carousel-btn prev-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevScreen();
                    }}
                    title="Previous Screenshot (Left Arrow)"
                    aria-label="Previous Screenshot"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    className="carousel-btn next-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextScreen();
                    }}
                    title="Next Screenshot (Right Arrow)"
                    aria-label="Next Screenshot"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Counter Badge */}
                  <div className="carousel-counter-badge">
                    <Monitor size={12} />
                    <span>{activeScreenIndex + 1} / {screenshots.length}</span>
                  </div>
                </div>

                {/* Caption & Explanation Card */}
                <div className="browser-mockup-caption-bar">
                  <div className="caption-main">
                    <span className="caption-badge">{currentScreen.title}</span>
                    <h4 className="caption-headline">{currentScreen.caption}</h4>
                    <p className="caption-desc">{currentScreen.description}</p>
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="browser-thumbnail-strip">
                  {screenshots.map((s, index) => {
                    const isActive = index === activeScreenIndex;
                    return (
                      <button
                        key={s.id || index}
                        type="button"
                        className={`thumbnail-thumb-btn ${isActive ? 'active' : ''}`}
                        onClick={() => setActiveScreenIndex(index)}
                        title={`View ${s.title}`}
                      >
                        <img src={s.url} alt={s.title} className="thumbnail-thumb-img" />
                        <span className="thumbnail-thumb-title">{s.shortTitle || s.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="project-modal-banner">
              <div className="modal-banner-icon">
                <Layers size={24} className="text-cyan" />
              </div>
              <div className="modal-banner-text">
                <span className="banner-title">Technical Deep Dive</span>
                <span className="banner-sub">Architecture, design patterns & engineering decisions</span>
              </div>
            </div>
          )}

          {/* Modal Body / Deep-Dive */}
          <div className="project-modal-body">
            <div className="project-modal-section">
              <h3 className="project-modal-section-title">
                <Cpu size={18} className="text-cyan" />
                <span>System Architecture & Engineering Overview</span>
              </h3>
              <p className="project-modal-desc">{description}</p>
            </div>

            <div className="project-modal-section">
              <h3 className="project-modal-section-title">
                <ShieldCheck size={18} className="text-emerald" />
                <span>Engineering Highlights & Key Innovations</span>
              </h3>
              <div className="project-modal-highlights">
                {highlights.map((item, index) => (
                  <div key={index} className="project-modal-highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon text-cyan" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="project-modal-actions">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <span>Live Application (Render)</span>
                  <ExternalLink size={16} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <GithubIcon size={17} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && currentScreen && (
        <div
          className="lightbox-overlay"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close high-res preview"
            >
              <X size={24} />
            </button>

            <div className="lightbox-header-bar">
              <div className="lightbox-info">
                <span className="lightbox-title">{currentScreen.title}</span>
                <span className="lightbox-route">https://{currentScreen.route}</span>
              </div>
              <span className="lightbox-counter">
                {activeScreenIndex + 1} of {screenshots.length}
              </span>
            </div>

            <div className="lightbox-image-wrap">
              <img
                src={currentScreen.url}
                alt={currentScreen.title}
                className="lightbox-image"
              />

              <button
                type="button"
                className="lightbox-arrow lightbox-prev"
                onClick={handlePrevScreen}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                type="button"
                className="lightbox-arrow lightbox-next"
                onClick={handleNextScreen}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            <div className="lightbox-footer">
              <p className="lightbox-caption">{currentScreen.caption}</p>
              <p className="lightbox-desc">{currentScreen.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
