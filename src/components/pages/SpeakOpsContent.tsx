'use client';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
  </svg>
);

export default function SpeakOpsContent() {
  const features = [
    {
      title: 'Natural Language Understanding',
      description: 'Advanced NLP interprets complex commands in plain English',
    },
    {
      title: 'Multi-Language Support',
      description: 'Works with 50+ languages and regional accents',
    },
    {
      title: 'Voice Authentication',
      description: 'Secure voice biometrics ensure only authorized personnel can execute commands',
    },
    {
      title: 'Context Awareness',
      description: 'Remembers conversation context for seamless multi-step operations',
    },
  ];

  const useCases = [
    { icon: '🚀', title: 'Deployment', command: '"Deploy version 3.2 to production cluster"' },
    { icon: '📊', title: 'Monitoring', command: '"Show me the server performance metrics"' },
    { icon: '⚠️', title: 'Alerts', command: '"What are the current system alerts?"' },
    { icon: '🔄', title: 'Scaling', command: '"Scale up the web servers to handle traffic"' },
    { icon: '🔍', title: 'Diagnostics', command: '"Run diagnostics on the database cluster"' },
    { icon: '📝', title: 'Reports', command: '"Generate yesterday\'s incident report"' },
  ];

  return (
    <section className="page active">
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="page-badge">Voice Operations</div>
            <h1 className="page-title">SpeakOps</h1>
            <p className="page-description">
              Control your entire infrastructure with natural voice commands. The future of operations is hands-free.
            </p>
          </div>
        </div>
      </div>

      <div className="product-section">
        <div className="container">
          <div className="product-grid reverse">
            <div className="product-visual">
              <div className="visual-card voice-card">
                <div className="voice-waveform">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="wave-bar"></div>
                  ))}
                </div>
                <div className="voice-command">
                  <div className="command-label">Voice Command</div>
                  <div className="command-text">&quot;Deploy the latest build to production&quot;</div>
                </div>
                <div className="voice-response">
                  <div className="response-label">AI Response</div>
                  <div className="response-text">
                    Initiating deployment to production environment. Running pre-deployment checks...
                  </div>
                </div>
              </div>
            </div>
            <div className="product-info">
              <h2>
                Voice-Powered <span className="gradient-text">Operations</span>
              </h2>
              <p>
                Transform how you manage infrastructure with natural language processing. Execute complex operations with simple voice commands, anywhere, anytime.
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
          </div>

          <div className="use-cases">
            <h2 className="section-title">
              Voice Command <span className="gradient-text">Examples</span>
            </h2>
            <div className="use-cases-grid">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="use-case-card">
                  <div className="use-case-icon">{useCase.icon}</div>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.command}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
