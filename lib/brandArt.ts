// Pure-SVG brand art for generated raster assets (app icons, splash, OG).
// Shapes only — no <text> — so resvg/satori rasterize them without any font.

const DARK_BG = `
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#171c28"/>
      <stop offset="1" stop-color="#090c13"/>
    </linearGradient>
    <radialGradient id="halo" cx="0.5" cy="0.42" r="0.6">
      <stop offset="0" stop-color="#2b8cff" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#2b8cff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f4f6fa"/>
      <stop offset="0.5" stop-color="#8089a0"/>
      <stop offset="1" stop-color="#eef1f6"/>
    </linearGradient>
    <linearGradient id="drop" x1="0.5" y1="0" x2="0.5" y2="1">
      <stop offset="0" stop-color="#67ccff"/>
      <stop offset="1" stop-color="#1f6bff"/>
    </linearGradient>
  </defs>
`;

/** The emblem (chrome ring + electric jet droplet), centred in a viewBox of `s`. */
function emblem(cx: number, cy: number, r: number): string {
  const ringW = r * 0.13;
  // droplet: a rounded teardrop, point at top
  const top = cy - r * 0.62;
  const dropPath = `M${cx} ${top}
    C ${cx + r * 0.5} ${cy - r * 0.06}, ${cx + r * 0.46} ${cy + r * 0.16}, ${cx + r * 0.46} ${cy + r * 0.2}
    a ${r * 0.46} ${r * 0.46} 0 1 1 ${-r * 0.92} 0
    C ${cx - r * 0.46} ${cy + r * 0.16}, ${cx - r * 0.5} ${cy - r * 0.06}, ${cx} ${top} Z`;
  return `
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="url(#ring)" stroke-width="${ringW}"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#2b8cff" stroke-opacity="0.35" stroke-width="${ringW}"/>
    <path d="${dropPath}" fill="url(#drop)"/>
    <path d="M${cx - r * 0.18} ${cy + r * 0.05} C ${cx - r * 0.18} ${cy - r * 0.16}, ${cx - r * 0.05} ${cy - r * 0.34}, ${cx + r * 0.06} ${cy - r * 0.46}"
      fill="none" stroke="#eaf6ff" stroke-opacity="0.85" stroke-width="${r * 0.07}" stroke-linecap="round"/>
  `;
}

/** Square app icon (full-bleed dark, no rounding — iOS masks it itself). */
export function iconSquareSvg(s = 180): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">
    ${DARK_BG}
    <rect width="${s}" height="${s}" fill="url(#bg)"/>
    <rect width="${s}" height="${s}" fill="url(#halo)"/>
    ${emblem(s / 2, s / 2, s * 0.34)}
  </svg>`;
}

/** Launch / splash art: emblem over the dark bay, with a chrome rule and the
 *  four-beat mantra rendered as electric ticks (Clean · Shine · Protect · Perfection). */
export function splashSvg(w: number, h: number): string {
  const cx = w / 2;
  const cy = h * 0.42;
  const r = Math.min(w, h) * 0.13;
  const ruleY = cy + r + Math.min(w, h) * 0.12;
  const ruleW = Math.min(w * 0.62, 520);
  const tickGap = ruleW / 3;
  const ticks = [0, 1, 2, 3]
    .map((i) => {
      const x = cx - ruleW / 2 + i * tickGap;
      return `<circle cx="${x}" cy="${ruleY}" r="${Math.max(3, r * 0.07)}" fill="#5cc8ff"/>`;
    })
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    ${DARK_BG}
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <rect width="${w}" height="${h}" fill="url(#halo)"/>
    ${emblem(cx, cy, r)}
    <line x1="${cx - ruleW / 2}" y1="${ruleY}" x2="${cx + ruleW / 2}" y2="${ruleY}"
      stroke="#ffffff" stroke-opacity="0.16" stroke-width="1.5"/>
    ${ticks}
  </svg>`;
}
