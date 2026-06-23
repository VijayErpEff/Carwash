import styles from "./Marquee.module.css";

const WORDS = ["Clean", "Shine", "Protect", "Perfection"];

/**
 * The logo's promise, set in motion. A liquid-chrome ticker that loops the
 * brand mantra; under reduced-motion it holds still and stays legible.
 */
export default function Marquee() {
  const run = [...WORDS, ...WORDS, ...WORDS, ...WORDS];
  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.track}>
        {run.map((w, i) => (
          <span key={i} className={styles.item}>
            <span className={`chrome ${styles.word}`}>{w}</span>
            <Spark />
          </span>
        ))}
      </div>
      <span className={styles.fadeL} />
      <span className={styles.fadeR} />
    </div>
  );
}

function Spark() {
  return (
    <svg className={styles.spark} width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2v6M12 16v6M2 12h6M16 12h6"
        stroke="var(--brand-bright)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
