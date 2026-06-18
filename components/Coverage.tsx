import { coverage, site } from "@/lib/site";
import Reveal from "./Reveal";
import styles from "./Coverage.module.css";

const MAP_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=-0.62%2C51.38%2C-0.29%2C51.56&layer=mapnik";

export default function Coverage() {
  return (
    <section id="coverage" className={`section ${styles.wrap}`} aria-labelledby="cov-h">
      <div className={`shell ${styles.inner}`}>
        <Reveal className={styles.left}>
          <h2 id="cov-h" className={styles.h}>
            Based by Heathrow. We come to most of West London.
          </h2>
          <p className="lede">
            We’re in Hounslow, so we cover everywhere within roughly{" "}
            {site.radius} as standard. Not sure if you’re in? Pop your postcode in
            the booking form and we’ll confirm before you commit.
          </p>

          <ul className={styles.places}>
            {coverage.map((c) => (
              <li key={c} className={styles.place}>
                <Pin />
                {c}
              </li>
            ))}
          </ul>

          <p className={styles.note}>
            A little further out for full details and ceramic work —{" "}
            <a href="#book" className={styles.inlineLink}>just ask</a>.
          </p>
        </Reveal>

        <Reveal i={1} className={styles.right}>
          <div className={styles.mapFrame}>
            <iframe
              className={styles.map}
              src={MAP_SRC}
              title="Map of our West London coverage area around Heathrow"
              loading="lazy"
            />
            <span className={styles.marker} aria-hidden="true">
              <Pin solid />
            </span>
            <span className={styles.mapTag}>Based in Hounslow, TW</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pin({ solid = false }: { solid?: boolean }) {
  return (
    <svg width={solid ? 28 : 14} height={solid ? 28 : 14} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
        fill={solid ? "var(--brand)" : "none"}
        stroke="var(--brand)"
        strokeWidth={solid ? 0 : 1.8}
      />
      <circle cx="12" cy="10" r={solid ? 2.6 : 2.2} fill={solid ? "var(--brand-on)" : "var(--brand)"} />
    </svg>
  );
}
