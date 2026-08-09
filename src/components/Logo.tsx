export default function Logo() {
  return (
    <div className="logo">
      <div className="logo-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="url(#gradient)" strokeWidth="2" />
          <circle cx="16" cy="16" r="8" fill="url(#gradient)" />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="33%" stopColor="#a855f7" />
              <stop offset="66%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="logo-text">Staffless AI</span>
    </div>
  );
}
