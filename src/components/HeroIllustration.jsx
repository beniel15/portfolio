/**
 * Modern developer / laptop illustration (inline SVG).
 * Easy to replace with your own image later.
 */
function HeroIllustration() {
  return (
    <svg
      className="hero-illustration"
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background circle */}
      <circle cx="250" cy="200" r="160" fill="var(--primary-light)" opacity="0.3" />

      {/* Desk */}
      <rect x="80" y="280" width="340" height="12" rx="4" fill="var(--text-secondary)" />

      {/* Laptop base */}
      <rect x="130" y="220" width="240" height="140" rx="8" fill="var(--card-bg)" stroke="var(--primary)" strokeWidth="2" />
      <rect x="145" y="235" width="210" height="110" rx="4" fill="#1e293b" />

      {/* Code lines on screen */}
      <rect x="160" y="255" width="80" height="6" rx="3" fill="#3b82f6" />
      <rect x="160" y="270" width="120" height="6" rx="3" fill="#60a5fa" />
      <rect x="160" y="285" width="60" height="6" rx="3" fill="#93c5fd" />
      <rect x="160" y="300" width="100" height="6" rx="3" fill="#3b82f6" />
      <rect x="160" y="315" width="70" height="6" rx="3" fill="#60a5fa" />

      {/* Laptop keyboard */}
      <path d="M120 360 L380 360 L400 380 L100 380 Z" fill="var(--text-secondary)" />
      <rect x="100" y="378" width="300" height="8" rx="2" fill="var(--text-primary)" opacity="0.3" />

      {/* Floating elements */}
      <circle cx="420" cy="120" r="30" fill="var(--primary)" opacity="0.2" />
      <circle cx="80" cy="150" r="20" fill="var(--primary)" opacity="0.15" />

      {/* Gear icon */}
      <g transform="translate(400, 80)">
        <circle cx="0" cy="0" r="25" fill="var(--primary)" opacity="0.1" />
        <text x="0" y="6" textAnchor="middle" fill="var(--primary)" fontSize="24">
          {'</>'}
        </text>
      </g>

      {/* Coffee cup */}
      <rect x="60" y="240" width="30" height="35" rx="4" fill="var(--card-bg)" stroke="var(--primary)" strokeWidth="2" />
      <path d="M90 250 Q105 250 105 265 Q105 280 90 275" stroke="var(--primary)" strokeWidth="2" fill="none" />
      <rect x="65" y="235" width="20" height="8" rx="2" fill="var(--primary)" opacity="0.3" />
    </svg>
  );
}

export default HeroIllustration;
