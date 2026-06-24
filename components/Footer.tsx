import Logo from "./Logo";
import { site } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = 2026;
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.top}`}>
        <div className={styles.brandCol}>
          <Logo height={132} />
          <p className={styles.tag}>{site.tagline}</p>
          <a href="#book" className="btn btn-primary">
            Book a wash
          </a>
        </div>

        <nav className={styles.col} aria-label="Services">
          <h3 className={styles.colH}>Services</h3>
          <a href="#services">Express Exterior</a>
          <a href="#services">The Full Detail</a>
          <a href="#services">Ceramic Protection</a>
          <a href="#book">Fleet &amp; memberships</a>
        </nav>

        <nav className={styles.col} aria-label="Company">
          <h3 className={styles.colH}>Company</h3>
          <a href="#how">How it works</a>
          <a href="#coverage">Coverage</a>
          <a href="#proof">Reviews</a>
          <a href="#book">FAQ</a>
        </nav>

        <div className={styles.col}>
          <h3 className={styles.colH}>Get in touch</h3>
          <a href={site.phoneHref} className={styles.contact}>
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className={styles.contact}>
            {site.email}
          </a>
          <p className={styles.hours}>{site.hours}</p>
          <p className={styles.hours}>Serving {site.baseArea}</p>
        </div>
      </div>

      <div className={`shell ${styles.bottom}`}>
        <span>
          © {year} {site.full}. All rights reserved.
        </span>
        <span className={styles.legal}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <span className={styles.built}>Made in {site.baseArea}</span>
        </span>
      </div>
    </footer>
  );
}
