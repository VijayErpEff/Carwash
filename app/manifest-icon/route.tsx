import { ImageResponse } from "next/og";
import { iconSquareSvg } from "@/lib/brandArt";

export const runtime = "nodejs";

export function GET(req: Request) {
  const s = Math.max(48, Math.min(1024, Number(new URL(req.url).searchParams.get("s")) || 512));
  const svg = iconSquareSvg(s);
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <img
          width={s}
          height={s}
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
          alt=""
        />
      </div>
    ),
    { width: s, height: s }
  );
}
