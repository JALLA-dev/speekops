export default function AnimatedBackground() {
  return (
    <div className="animated-bg">
      {/* Mesh gradient blobs */}
      <div className="mesh-gradient">
        <div className="mesh-blob"></div>
        <div className="mesh-blob"></div>
        <div className="mesh-blob"></div>
        <div className="mesh-blob"></div>
        <div className="mesh-blob"></div>
        <div className="mesh-blob"></div>
        <div className="mesh-blob"></div>
      </div>

      {/* Grid pattern */}
      <div className="grid-pattern"></div>

      {/* Aurora effect */}
      <div className="aurora"></div>

      {/* Floating particles */}
      <div className="particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* Noise texture */}
      <div className="noise-overlay"></div>

      {/* Vignette */}
      <div className="vignette"></div>
    </div>
  );
}
