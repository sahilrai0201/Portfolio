import React from 'react';
import { skillsList } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>Skills & Tools</span>
          </div>
          <h2 className="section-title">
            Technologies I Use
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, databases, and developer tools I work with on a day-to-day basis.
          </p>
        </div>

        {/* Clean Grouped Skill Cards */}
        <div className="skills-grouped-grid">
          {Object.entries(skillsList).map(([group, items]) => (
            <div key={group} className="skills-group-card glass-card">
              <h3 className="skills-group-title">{group}</h3>
              <div className="skills-item-tags">
                {items.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
