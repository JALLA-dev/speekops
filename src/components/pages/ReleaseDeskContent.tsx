'use client';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
  </svg>
);

export default function ReleaseDeskContent() {
  const features = [
    {
      title: 'Smart Scheduling',
      description: 'AI analyzes traffic patterns and team availability to schedule releases at optimal times',
    },
    {
      title: 'Automated Testing',
      description: 'Comprehensive test suite execution with automatic rollback on failures',
    },
    {
      title: 'Real-time Monitoring',
      description: 'Live dashboards and instant notifications for complete visibility',
    },
    {
      title: 'One-Click Rollback',
      description: 'Instant rollback capabilities with zero downtime guaranteed',
    },
  ];

  const releases = [
    { status: 'success', name: 'v2.4.1 - Production', time: 'Deployed 2 hours ago' },
    { status: 'in-progress', name: 'v2.4.2 - Staging', time: 'Testing in progress' },
    { status: 'pending', name: 'v2.5.0 - Development', time: 'Scheduled for tomorrow' },
  ];

  const stats = [
    { value: '95%', text: 'Reduction in deployment time' },
    { value: '99.99%', text: 'Successful release rate' },
    { value: '24/7', text: 'Automated monitoring' },
  ];

  return (
    <section className="page active">
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="page-badge">Release Management</div>
            <h1 className="page-title">ReleaseDesk</h1>
            <p className="page-description">
              Intelligent release automation that eliminates manual deployment errors and accelerates your delivery pipeline.
            </p>
          </div>
        </div>
      </div>

      <div className="product-section">
        <div className="container">
          <div className="product-grid">
            <div className="product-info">
              <h2>
                Automated Release <span className="gradient-text">Orchestration</span>
              </h2>
              <p>
                Streamline your entire release process with AI-powered automation. From code commit to production deployment, ReleaseDesk handles every step with precision and reliability.
              </p>

              <div className="feature-list">
                {features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <div className="feature-check">
                      <CheckIcon />
                    </div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="product-visual">
              <div className="visual-card">
                <div className="visual-header">
                  <div className="visual-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="visual-title">Release Dashboard</div>
                </div>
                <div className="visual-content">
                  {releases.map((release, idx) => (
                    <div key={idx} className="release-item">
                      <div className={`release-status ${release.status}`}></div>
                      <div className="release-info">
                        <div className="release-name">{release.name}</div>
                        <div className="release-time">{release.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="stats-section">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-text">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
