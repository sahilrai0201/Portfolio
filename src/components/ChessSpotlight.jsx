import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function ChessSpotlight() {
  return (
    <section className="section chess-section">
      <div className="container">
        <div className="personal-note-card glass-card">
          <div className="personal-note-header">
            <span className="chess-icon-tag">♟</span>
            <span className="personal-note-tag">A quick personal note</span>
          </div>

          <h3 className="personal-note-title">
            Coding, Chess & Problem Solving
          </h3>

          <p className="personal-note-body">
            {personalInfo.chessNote.text}
          </p>

          <div className="personal-note-footer">
            <span className="note-pill">Favorite Openings: <strong>Sicilian Defense & Ruy Lopez</strong></span>
            <span className="note-pill">Format: <strong>10-min Rapid</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
