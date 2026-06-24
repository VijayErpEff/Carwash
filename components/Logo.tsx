import styles from "./Logo.module.css";

type Props = { className?: string; height?: number };

/**
 * The Terminal Car Wash RM badge — the client's light-ready artwork: the full
 * logo on a dark disc with a white ring that dissolves into the light page.
 * A masked sheen makes it glint on load / hover.
 */
export default function Logo({ className, height = 92 }: Props) {
  return (
    <span
      className={`${styles.lockup} ${className ?? ""}`}
      style={{ ["--h" as string]: `${height}px` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.img}
        src="/logo-light.png"
        alt=""
        aria-hidden="true"
        draggable={false}
      />
      <span className={styles.sheen} aria-hidden="true" />
      <span className={styles.srOnly}>Terminal Car Wash RM</span>
    </span>
  );
}
