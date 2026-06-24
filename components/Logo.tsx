import styles from "./Logo.module.css";

type Props = { className?: string; height?: number };

/**
 * The original Terminal Car Wash RM logo, in full colour (transparent
 * background). It lives on the dark nav + footer, where the chrome, car and
 * electric spray read exactly as designed. A masked sheen makes it glint.
 */
export default function Logo({ className, height = 48 }: Props) {
  return (
    <span
      className={`${styles.lockup} ${className ?? ""}`}
      style={{ ["--h" as string]: `${height}px` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.img}
        src="/logo.png"
        alt=""
        aria-hidden="true"
        draggable={false}
      />
      <span className={styles.sheen} aria-hidden="true" />
      <span className={styles.srOnly}>Terminal Car Wash RM</span>
    </span>
  );
}
