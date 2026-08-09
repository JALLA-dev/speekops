'use client';

import { useState } from 'react';

interface BookDemoSectionProps {
  isModal?: boolean;
  onClose?: () => void;
}

export default function BookDemoSection({ isModal = false, onClose }: BookDemoSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '10:00 AM EST',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const timeSlots = [
    '09:00 AM EST',
    '10:30 AM EST',
    '01:00 PM EST',
    '03:00 PM EST',
    '04:30 PM EST',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit demo booking');
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const content = (
    <div className={`demo-card ${isModal ? 'demo-modal-card' : ''}`}>
      {isModal && (
        <button className="demo-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
      )}

      <div className="demo-header">
        <div className="demo-badge">
          <span className="badge-dot pulse"></span>
          <span>Neon DB Connected · Live Scheduling</span>
        </div>
        <h2>
          Experience <span className="gradient-text">Staffless AI</span> in Action
        </h2>
        <p>Book a 1-on-1 personalized live demonstration tailored to your enterprise workflows.</p>
      </div>

      {submitted ? (
        <div className="demo-success">
          <div className="success-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3>Demo Session Confirmed! 🎉</h3>
          <p>
            Thank you, <strong>{formData.name}</strong>! Your demo has been booked and stored in Neon DB for{' '}
            <strong>{formData.date}</strong> at <strong>{formData.timeSlot}</strong>.
          </p>
          <div className="demo-summary-box">
            <div className="summary-item">
              <span>Email:</span> <strong>{formData.email}</strong>
            </div>
            {formData.company && (
              <div className="summary-item">
                <span>Company:</span> <strong>{formData.company}</strong>
              </div>
            )}
            <div className="summary-item">
              <span>Status:</span> <span className="db-badge">Stored in Neon PostgreSQL</span>
            </div>
          </div>
          <button
            className="btn-primary btn-large"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                date: new Date().toISOString().split('T')[0],
                timeSlot: '10:00 AM EST',
                notes: '',
              });
              if (isModal && onClose) onClose();
            }}
          >
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="demo-form">
          {errorMsg && <div className="demo-error">{errorMsg}</div>}

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="demo-name">Full Name *</label>
              <input
                id="demo-name"
                type="text"
                required
                placeholder="Sarah Jenkins"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="demo-email">Work Email *</label>
              <input
                id="demo-email"
                type="email"
                required
                placeholder="sarah@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="demo-company">Company Name</label>
              <input
                id="demo-company"
                type="text"
                placeholder="Acme Corp"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="demo-phone">Phone Number</label>
              <input
                id="demo-phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="demo-date">Preferred Date</label>
              <input
                id="demo-date"
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="demo-time">Time Slot</label>
              <select
                id="demo-time"
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
              >
                {timeSlots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="demo-notes">What workflow would you like to automate?</label>
            <textarea
              id="demo-notes"
              rows={3}
              placeholder="Tell us about your team's deployment, release, or voice operation needs..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            ></textarea>
          </div>

          <button type="submit" className="btn-primary btn-large demo-submit-btn" disabled={loading}>
            {loading ? (
              <span className="spinner-loader">Booking session...</span>
            ) : (
              <>
                Confirm &amp; Save to Neon DB
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div className="demo-modal-overlay" onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()}>{content}</div>
      </div>
    );
  }

  return (
    <section className="demo-section" id="book-demo">
      <div className="container">{content}</div>
    </section>
  );
}
