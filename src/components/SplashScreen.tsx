'use client';

import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      {/* Background orbs */}
      <div className="splash-bg">
        <div className="splash-orb"></div>
        <div className="splash-orb"></div>
        <div className="splash-orb"></div>
        <div className="splash-orb"></div>
        <div className="splash-orb"></div>
        <div className="splash-orb"></div>
      </div>

      {/* Content */}
      <div className="splash-content">
        {/* Animated Logo Icon */}
        <div className="splash-logo-icon">
          <svg viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="splashGrad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="20%" stopColor="#f97316" />
                <stop offset="40%" stopColor="#facc15" />
                <stop offset="60%" stopColor="#10b981" />
                <stop offset="80%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" stroke="url(#splashGrad)" strokeWidth="3" fill="none" />
            <circle cx="50" cy="50" r="28" fill="url(#splashGrad)" />
            <circle cx="50" cy="50" r="12" fill="#030308" />
            <circle cx="50" cy="50" r="5" fill="url(#splashGrad)" />
          </svg>
        </div>

        {/* Main Title */}
        <h1 className="splash-title">Staffless AI</h1>

        {/* Decorative divider */}
        <div className="splash-divider"></div>

        {/* Quote/Tagline */}
        <p className="splash-quote">Automate Everything. Elevate Everyone.</p>

        {/* Loading dots */}
        <div className="splash-loader">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="splash-loader-dot"></div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="splash-progress-bar">
        <div className="splash-progress-fill"></div>
      </div>

      {/* Footer */}
      <div className="splash-footer">Loading your intelligent workspace...</div>
    </div>
  );
}
