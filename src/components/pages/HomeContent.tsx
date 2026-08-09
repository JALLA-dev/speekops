'use client';

import { useNavigation, type PageName } from '@/lib/navigation';

export default function HomeContent() {
  const { navigate } = useNavigation();

  const features = [
    {
      id: 'releasedesk' as PageName,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'ReleaseDesk',
      description: 'Automated release management and deployment orchestration with intelligent scheduling and rollback capabilities.',
    },
    {
      id: 'speakops' as PageName,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: 'SpeakOps',
      description: 'Voice-powered operations management with natural language processing and real-time command execution.',
    },
    {
      id: 'dashboard' as PageName,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18M7 14l4-4 4 4 5-5" />
        </svg>
      ),
      title: 'Live Dashboard',
      description: 'Real-time analytics, KPI tracking, and intelligent insights to monitor your entire AI ecosystem at a glance.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards for complete peace of mind.',
    },
  ];

  return (
    <section className="page active">
      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Next-Gen AI Automation Platform</span>
            </div>
            <h1 className="hero-title">
              Transform Your Workforce with <span className="gradient-text">Intelligent AI</span>
            </h1>
            <p className="hero-description">
              Automate complex workflows, streamline operations, and unlock unprecedented efficiency with our cutting-edge AI solutions designed for the modern enterprise.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary btn-large" onClick={() => navigate('dashboard')}>
                Open Dashboard
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </button>
              <button className="btn-secondary btn-large">Watch Demo</button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime Guaranteed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10M+</div>
                <div className="stat-label">Tasks Automated</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="gradient-orb orb-4"></div>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <div className="section-header">
            <h2>
              Powerful <span className="gradient-text">AI Solutions</span>
            </h2>
            <p>Discover our comprehensive suite of automation tools</p>
          </div>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                {feature.id && (
                  <button className="feature-link" onClick={() => navigate(feature.id!)}>
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
