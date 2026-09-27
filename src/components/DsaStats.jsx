import React from 'react';
import { ExternalLink } from 'lucide-react';
import { LeetCodeIcon } from './Icons';
import { dsaStats, personalInfo } from '../data/portfolioData';

export default function DsaStats() {
  return (
    <section className="section" id="dsa">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>Competitive Programming</span>
          </div>
          <h2 className="section-title">
            Data Structures & Algorithms
          </h2>
          <p className="section-subtitle">
            I solve problems primarily in C++ for execution speed and occasionally Java. Here is a snapshot of my contest stats and topics I've practiced.
          </p>
        </div>

        {/* LeetCode Banner */}
        <div className="dsa-highlight-card glass-card">
          <div className="dsa-highlight-info">
            <div className="dsa-profile-heading">
              <LeetCodeIcon size={22} className="text-amber" />
              <h3 className="dsa-handle">LeetCode: @sahilrai02_</h3>
            </div>
            <p className="dsa-summary">
              Over <strong>400 problems solved</strong> across LeetCode & GeeksforGeeks, with a <strong>1500+ contest rating</strong> from participating in weekly timed contests.
            </p>
          </div>

          <div className="dsa-highlight-stats">
            <div className="dsa-stat-pill">
              <span className="stat-big text-cyan">400+</span>
              <span className="stat-desc">Problems Solved</span>
            </div>
            <div className="dsa-stat-pill">
              <span className="stat-big text-amber">1500+</span>
              <span className="stat-desc">Contest Rating</span>
            </div>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>View Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Core Topics Pill Grid */}
        <div className="dsa-topics-box">
          <h4 className="topics-subhead">Topics Practiced:</h4>
          <div className="topics-tag-wrap">
            {dsaStats.topics.map((t) => (
              <span key={t} className="topic-tag">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
