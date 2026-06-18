type Props = { className?: string };

/**
 * Onyx wordmark. The mark is a cut gemstone — onyx — with a single brass
 * table facet catching the light. No tagline lockup; the word carries it.
 */
export default function Logo({ className }: Props) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.55rem",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        letterSpacing: "-0.025em",
        fontSize: "1.4rem",
        lineHeight: 1,
        color: "var(--ink)",
      }}
      aria-label="Onyx"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {/* gem body */}
        <path d="M7 4.5H17L21 9.5L12 20L3 9.5Z" fill="var(--brand)" />
        {/* brass table facet — the gleam */}
        <path d="M7 4.5H17L14.5 9.5H9.5Z" fill="var(--accent)" />
        {/* facet cuts */}
        <path
          d="M3 9.5H21M9.5 9.5L7 4.5M14.5 9.5L17 4.5M3 9.5L12 20M21 9.5L12 20M9.5 9.5L12 20M14.5 9.5L12 20"
          stroke="var(--brand-on)"
          strokeOpacity="0.38"
          strokeWidth="0.8"
        />
      </svg>
      <span>Onyx</span>
    </span>
  );
}
