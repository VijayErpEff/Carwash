import styles from "./Logo.module.css";

type Props = { className?: string; height?: number };

/**
 * The real Terminal Car Wash RM logo — full artwork retained (the car, the
 * pressure-wash pipe + spray, the TERMINAL lockup and tagline) — recoloured to
 * a dark-ink + electric-blue duotone (public/logo-light.png) so it blends on
 * the light theme. A masked specular sweep makes it glint on load and hover.
 */
export default function Logo({ className, height = 46 }: Props) {
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
