import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, FileText, Moon, Sun, Mail, Sparkles, Trophy, Layers, Home, Code2, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, toggleTheme, theme, openResumeModal }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const commands = [
    {
      id: 'home',
      label: 'Home / Hero',
      category: 'Navigation',
      icon: Home,
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'projects',
      label: 'Featured Projects (BizPulse, CampusHub, AlgoSphere)',
      category: 'Navigation',
      icon: Layers,
      action: () => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'dsa',
      label: 'DSA & LeetCode (400+ Solved, 1500+ Rating)',
      category: 'Navigation',
      icon: Trophy,
      action: () => {
        const el = document.getElementById('dsa');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'skills',
      label: 'Technical Skills Matrix',
      category: 'Navigation',
      icon: Code2,
      action: () => {
        const el = document.getElementById('skills');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'bizpulse-demo',
      label: 'Open BizPulse Live Demo (AI Dashboard)',
      category: 'Projects',
      icon: ExternalLink,
      action: () => {
        window.open('https://bizpulse-1.onrender.com/', '_blank');
        onClose();
      }
    },
    {
      id: 'campushub-demo',
      label: 'Open CampusHub Live Demo (College Portal)',
      category: 'Projects',
      icon: ExternalLink,
      action: () => {
        window.open('https://campushub-fcw0.onrender.com/', '_blank');
        onClose();
      }
    },
    {
      id: 'resume',
      label: 'Open Resume Preview / PDF Download',
      category: 'Actions',
      icon: FileText,
      action: () => {
        onClose();
        openResumeModal();
      }
    },
    {
      id: 'copy-email',
      label: `Copy Email (${personalInfo.email})`,
      category: 'Actions',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        confetti({ particleCount: 50, spread: 60 });
        onClose();
      }
    },
    {
      id: 'theme',
      label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      category: 'Actions',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        toggleTheme();
        onClose();
      }
    },
    {
      id: 'github',
      label: 'Open GitHub Profile (@sahilrai0201)',
      category: 'Socials',
      icon: GithubIcon,
      action: () => {
        window.open(personalInfo.socials.github, '_blank');
        onClose();
      }
    },
    {
      id: 'leetcode',
      label: 'Open LeetCode Profile (@sahilrai02_)',
      category: 'Socials',
      icon: LeetCodeIcon,
      action: () => {
        window.open(personalInfo.socials.leetcode, '_blank');
        onClose();
      }
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn Profile',
      category: 'Socials',
      icon: LinkedinIcon,
      action: () => {
        window.open(personalInfo.socials.linkedin, '_blank');
        onClose();
      }
    },
    {
      id: 'confetti',
      label: 'Celebrate / Fire Confetti 🎉',
      category: 'Easter Egg',
      icon: Sparkles,
      action: () => {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
        onClose();
      }
    }
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop cmd-backdrop" onClick={onClose}>
      <div className="cmd-modal glass-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Search Input Bar */}
        <div className="cmd-input-bar">
          <Search size={18} className="cmd-search-icon" />
          <input
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="cmd-input"
            autoFocus
          />
          <button onClick={onClose} className="cmd-close-btn" aria-label="Close Command Palette">
            <span className="kbd-esc">ESC</span>
          </button>
        </div>

        {/* Results List */}
        <div className="cmd-results-list">
          {filteredCommands.length === 0 ? (
            <div className="cmd-empty-state">
              No matching commands or destinations found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`cmd-item ${isSelected ? 'selected' : ''}`}
                >
                  <div className="cmd-item-left">
                    <div className="cmd-icon-wrap">
                      <Icon size={16} />
                    </div>
                    <span className="cmd-item-text">{cmd.label}</span>
                  </div>
                  <div className="cmd-item-right">
                    <span className="cmd-item-category">{cmd.category}</span>
                    {isSelected && <ArrowRight size={14} className="cmd-select-arrow" />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="cmd-footer">
          <div className="cmd-shortcut-hint">
            <span>Use</span> <kbd>↑</kbd> <kbd>↓</kbd> <span>to navigate</span>
          </div>
          <div className="cmd-shortcut-hint">
            <span>Press</span> <kbd>Enter</kbd> <span>to select</span>
          </div>
          <div className="cmd-shortcut-hint">
            <span>Press</span> <kbd>Esc</kbd> <span>to dismiss</span>
          </div>
        </div>

      </div>
    </div>
  );
}
