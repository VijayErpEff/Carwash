import Image from "next/image";
import { images } from "@/lib/images";
import Reveal from "./Reveal";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-h">
      <div className={`shell ${styles.inner}`}>
        <div className={styles.copy}>
          <Reveal i={1} as="h1" className={styles.h1}>
            <span id="hero-h">
              Your car, detailed
              <br />
              <em className={styles.gleam}>to a shine</em> — without
              <br />
              leaving the drive.
            </span>
          </Reveal>

          <Reveal i={2} as="p" className={`lede ${styles.lede}`}>
            Onyx is a mobile detail studio based minutes from Heathrow. We arrive
            fully self-contained — water, power, professional kit — and hand back a
            car that looks better than the day you collected it.
          </Reveal>

          <Reveal i={3} className={styles.cta}>
            <a href="#book" className="btn btn-primary">
              Book a detail
              <Arrow />
            </a>
            <a href="#services" className="btn btn-ghost">
              View packages &amp; prices
            </a>
          </Reveal>

          <Reveal i={4} className={styles.trust}>
            <span className={styles.stars} aria-hidden="true">
              ★★★★★
            </span>
            <span className={styles.trustText}>
              <strong>4.9</strong> on Google
            </span>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.trustText}>Fully insured &amp; DBS-checked</span>
          </Reveal>
        </div>

        <Reveal i={2} className={styles.media}>
          <div className={styles.frame}>
            <Image
              src={images.heroCar.src}
              alt={images.heroCar.alt}
              fill
              priority
              sizes="(max-width: 980px) 100vw, 52vw"
              className={styles.photo}
            />
          </div>

          <div className={styles.coverageCard}>
            <Pin />
            <div>
              <span className={styles.coverageLead}>We come to you</span>
              <span className={styles.coverageSub}>Right across West London</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Pin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.pin}>
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
        fill="var(--brand)"
      />
      <circle cx="12" cy="10" r="2.6" fill="var(--brand-on)" />
    </svg>
  );
}
