// Helpers for generating raster brand assets (app icons, splash) from the real
// logo crest in /public/logo.png. The crest is authored on pure black, so we
// render it on a pure-black canvas — the box blends away, no seam, no blend-mode
// needed (satori doesn't support mix-blend-mode).

import fs from "fs";
import path from "path";

export const LOGO_RATIO = 866 / 598; // intrinsic aspect of public/logo.png

let cached: string | null = null;

/** Base64 data URI of the cropped logo crest (read once, then cached). */
export function logoDataUri(): string {
  if (cached) return cached;
  const p = path.join(process.cwd(), "public", "logo.png");
  cached = "data:image/png;base64," + fs.readFileSync(p).toString("base64");
  return cached;
}

/** Logo width/height fitted by width into `box * pad`. */
export function fitByWidth(boxW: number, pad: number, cap = Infinity) {
  const w = Math.min(Math.round(boxW * pad), cap);
  return { w, h: Math.round(w / LOGO_RATIO) };
}
