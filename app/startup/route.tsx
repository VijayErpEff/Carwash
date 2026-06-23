import { ImageResponse } from "next/og";
import { splashSvg } from "@/lib/brandArt";

export const runtime = "nodejs";

export function GET(req: Request) {
  const p = new URL(req.url).searchParams;
  const w = Math.max(320, Math.min(2796, Number(p.get("w")) || 1170));
  const h = Math.max(320, Math.min(2796, Number(p.get("h")) || 2532));
  const svg = splashSvg(w, h);
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <img
          width={w}
          height={h}
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
          alt=""
        />
      </div>
    ),
    { width: w, height: h }
  );
}
