'use client';

import Logo from './Logo';
import { useNavigation, type PageName } from '@/lib/navigation';
import { SignInButton, SignUpButton, Show, UserButton } from '@clerk/nextjs';

export default function Navbar() {
  const { currentPage, navigate } = useNavigation();

  const navItems: { id: PageName; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'releasedesk', label: 'ReleaseDesk' },
    { id: 'speakops', label: 'SpeakOps' },
  ];

  return (
    <nav className="navbar">
      <div className="container-wide">
        <div className="nav-content">
          <div style={{ cursor: 'pointer' }} onClick={() => navigate('home')}>
            <Logo />
          </div>
          <div className="nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => navigate(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="clerk-buttons">
            <Show when="signed-out">
              <SignInButton>
                <button className="clerk-btn clerk-btn-signin">Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className="clerk-btn clerk-btn-signup">Sign Up</button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </div>
      </div>
    </nav>
  );
}

