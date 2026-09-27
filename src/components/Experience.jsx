import React from 'react';
import { Calendar, ShieldCheck, GraduationCap } from 'lucide-react';
import { educationList, certifications } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>Background</span>
          </div>
          <h2 className="section-title">
            Education & Certifications
          </h2>
          <p className="section-subtitle">
            My academic track at GL Bajaj, schooling, and technical certifications.
          </p>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="experience-simple-grid">
          
          {/* Education Timeline */}
          <div className="edu-column">
            <h3 className="section-subheading">
              <GraduationCap size={18} className="text-cyan" />
              <span>Education</span>
            </h3>

            <div className="edu-list">
              {educationList.map((item, idx) => (
                <div key={idx} className="edu-card glass-card">
                  <div className="edu-card-top">
                    <div>
                      <h4 className="edu-degree">{item.role}</h4>
                      <p className="edu-place">{item.place}</p>
                    </div>
                    <span className="edu-meta-badge">{item.meta}</span>
                  </div>
                  <div className="edu-card-bottom">
                    <span className="edu-period">
                      <Calendar size={13} /> {item.period}
                    </span>
                    <p className="edu-note">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="certs-column">
            <h3 className="section-subheading">
              <ShieldCheck size={18} className="text-emerald" />
              <span>Certifications</span>
            </h3>

            <div className="certs-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-simple-card glass-card">
                  <div className="cert-meta-row">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-badge-verified">Verified</span>
                  </div>
                  <h4 className="cert-name">{cert.title}</h4>
                  <p className="cert-text">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
