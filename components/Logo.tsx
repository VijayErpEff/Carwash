type Props = { className?: string; height?: number };

/**
 * The Terminal Car Wash RM logo — the real brand crest, served as a transparent
 * PNG (black knocked out), so it composites cleanly on any dark surface.
 */
const RATIO = 866 / 598; // intrinsic aspect of the cropped crest

export default function Logo({ className, height = 46 }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src="/logo.png"
      alt="Terminal Car Wash RM"
      width={Math.round(height * RATIO)}
      height={height}
      style={{ height, width: "auto", userSelect: "none" }}
      draggable={false}
    />
  );
}
