import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [noteCopied, setNoteCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [fallbackActive, setFallbackActive] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 30,
      spread: 45,
      origin: { y: 0.85 },
      colors: ['#38bdf8', '#34d399', '#818cf8']
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const copyDraftNote = () => {
    const text = `To: ${personalInfo.email}\nFrom: ${formData.name} <${formData.email}>\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setNoteCopied(true);
    setTimeout(() => setNoteCopied(false), 2000);
  };

  const handleMailtoFallback = () => {
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Sahil,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setError('');
    setFallbackActive(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/sahilatwork21@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _subject: formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`,
          message: formData.message.trim()
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setSubmitted(true);
        confetti({
          particleCount: 55,
          spread: 65,
          origin: { y: 0.7 },
          colors: ['#38bdf8', '#34d399', '#818cf8']
        });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch {
      setFallbackActive(true);
      setError('Direct submission could not reach the server (possibly due to network or adblocker). You can send via your email client or copy the message below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>Contact</span>
          </div>
          <h2 className="section-title">
            Get in Touch
          </h2>
          <p className="section-subtitle">
            I'm currently looking for full-time software engineering roles and internships. My inbox is always open.
          </p>
        </div>

        {/* 2-Column Clean Contact */}
        <div className="contact-clean-grid">
          
          {/* Direct Details */}
          <div className="contact-details-col">
            
            {/* Email Card */}
            <div className="contact-card glass-card">
              <div className="contact-card-icon text-cyan">
                <Mail size={20} />
              </div>
              <div className="contact-card-body">
                <span className="contact-label">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="contact-value">
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={copyEmail}
                className="contact-copy-btn"
                title="Copy email address"
                aria-label="Copy email"
              >
                {copied ? <Check size={15} className="text-emerald" /> : <Copy size={15} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-card glass-card">
              <div className="contact-card-icon text-emerald">
                <Phone size={20} />
              </div>
              <div className="contact-card-body">
                <span className="contact-label">Phone & WhatsApp</span>
                <a href={`tel:${personalInfo.phone}`} className="contact-value">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-card glass-card">
              <div className="contact-card-icon text-purple">
                <MapPin size={20} />
              </div>
              <div className="contact-card-body">
                <span className="contact-label">Location</span>
                <span className="contact-value">{personalInfo.location}</span>
                <span className="contact-subtext">Open to on-site, hybrid, and remote roles</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-socials-box glass-card">
              <span className="socials-box-label">Find me on other platforms:</span>
              <div className="contact-social-pills">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-link"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-link"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-link highlight-leetcode"
                >
                  <LeetCodeIcon size={16} />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Simple Direct Message Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <div className="form-card-header">
                <MessageSquare size={18} className="text-cyan" />
                <h3 className="form-card-title">Send a Quick Message</h3>
              </div>

              {submitted ? (
                <div className="form-success-box">
                  <div className="form-success-icon-wrap">
                    <CheckCircle2 size={38} className="text-emerald" />
                  </div>
                  <h4>Message Sent Successfully!</h4>
                  <p>
                    Thanks for reaching out, <strong>{formData.name}</strong>! Your message was delivered straight to Sahil's inbox. Expect a response soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {error && (
                    <div className="form-error-alert">
                      <AlertCircle size={16} className="error-alert-icon" />
                      <span>{error}</span>
                    </div>
                  )}

                  {fallbackActive && (
                    <div className="form-fallback-box">
                      <span className="fallback-note">Choose an alternate option:</span>
                      <div className="form-fallback-actions">
                        <button
                          type="button"
                          onClick={handleMailtoFallback}
                          className="btn btn-secondary btn-sm"
                        >
                          <Mail size={14} />
                          <span>Open in Email App</span>
                        </button>
                        <button
                          type="button"
                          onClick={copyDraftNote}
                          className="btn btn-secondary btn-sm"
                        >
                          {noteCopied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                          <span>{noteCopied ? 'Copied Note!' : 'Copy Note'}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="e.g. Alex Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Role Opportunity / Project / Question"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      placeholder="Hi Sahil, I checked out your portfolio and wanted to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="btn-spinner"></span>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
