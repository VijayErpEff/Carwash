import { ImageResponse } from "next/og";
import { logoDataUri, fitByWidth } from "@/lib/brandArt";

export const runtime = "nodejs";

export function GET(req: Request) {
  const s = Math.max(48, Math.min(1024, Number(new URL(req.url).searchParams.get("s")) || 512));
  const { w, h } = fitByWidth(s, 0.84);
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
        <img width={w} height={h} src={logoDataUri()} alt="" />
      </div>
    ),
    { width: s, height: s }
  );
}
