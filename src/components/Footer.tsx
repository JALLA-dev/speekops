'use client';

import Logo from './Logo';
import { useNavigation, type PageName } from '@/lib/navigation';

export default function Footer() {
  const { navigate } = useNavigation();

  const handleNav = (page: PageName) => navigate(page);

  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-content">
          <div className="footer-brand">
            <Logo />
            <p className="footer-description">
              Empowering businesses with intelligent automation solutions that transform how teams work.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Products</h4>
              <button onClick={() => handleNav('releasedesk')}>ReleaseDesk</button>
              <button onClick={() => handleNav('speakops')}>SpeakOps</button>
              <button onClick={() => handleNav('dashboard')}>Dashboard</button>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#">Documentation</a>
              <a href="#">API</a>
              <a href="#">Support</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Staffless AI. All rights reserved. Built with ❤️ for the future of work.</p>
        </div>
      </div>
    </footer>
  );
}
