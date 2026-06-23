type Props = { className?: string; showRegion?: boolean };

/**
 * Terminal Car Wash · RM wordmark.
 * Emblem: an electric-blue pressure-jet droplet inside a chrome ring — the
 * single jet of water that the whole brand turns on. The word is set in
 * liquid chrome (the one deliberate use of metallic text), with the RM
 * postcode carried as a number-plate chip.
 */
export default function Logo({ className, showRegion = true }: Props) {
  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}
      aria-label="Terminal Car Wash RM"
    >
      <Emblem />
      <span
        style={{
          display: "inline-flex",
          alignItems: "baseline",
          gap: "0.4rem",
        }}
      >
        <span
          className="chrome"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontVariationSettings: '"wght" 800, "wdth" 110',
            letterSpacing: "0.01em",
            fontSize: "1.25rem",
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          Terminal
        </span>
        {showRegion && (
          <span
            aria-hidden="true"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "var(--brand-on)",
              background: "var(--brand-bright)",
              padding: "0.12em 0.4em",
              borderRadius: "0.3rem",
              lineHeight: 1.1,
              transform: "translateY(-0.05em)",
            }}
          >
            RM
          </span>
        )}
      </span>
    </span>
  );
}

function Emblem() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      style={{ flex: "none", filter: "drop-shadow(0 0 10px var(--brand-glow))" }}
    >
      <defs>
        <linearGradient id="tcw-ring" x1="6" y1="2" x2="26" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--chrome-1)" />
          <stop offset="0.5" stopColor="var(--chrome-3)" />
          <stop offset="1" stopColor="var(--chrome-1)" />
        </linearGradient>
        <linearGradient id="tcw-drop" x1="16" y1="9" x2="16" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--brand-bright)" />
          <stop offset="1" stopColor="var(--brand-deep)" />
        </linearGradient>
      </defs>
      {/* chrome ring */}
      <circle cx="16" cy="16" r="14" stroke="url(#tcw-ring)" strokeWidth="2" />
      <circle cx="16" cy="16" r="14" stroke="var(--brand-line)" strokeWidth="2" opacity="0.4" />
      {/* electric jet droplet */}
      <path
        d="M16 7c3.6 4.2 6 7.4 6 10.4A6 6 0 1 1 10 17.4C10 14.4 12.4 11.2 16 7Z"
        fill="url(#tcw-drop)"
      />
      {/* specular highlight on the droplet */}
      <path
        d="M14 16.5c0-1.6 0.7-3 1.6-4.2"
        stroke="var(--chrome-1)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}
