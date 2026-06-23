import { ImageResponse } from "next/og";
import { logoDataUri, fitByWidth } from "@/lib/brandArt";

export const runtime = "nodejs";

export function GET(req: Request) {
  const p = new URL(req.url).searchParams;
  const w = Math.max(320, Math.min(2796, Number(p.get("w")) || 1170));
  const h = Math.max(320, Math.min(2796, Number(p.get("h")) || 2532));
  const logo = fitByWidth(w, 0.66, 820);
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#000000",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img width={logo.w} height={logo.h} src={logoDataUri()} alt="" />
      </div>
    ),
    { width: w, height: h }
  );
}
