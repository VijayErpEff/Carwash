import { ImageResponse } from "next/og";
import { iconSquareSvg } from "@/lib/brandArt";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const svg = iconSquareSvg(180);
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <img
          width={180}
          height={180}
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
          alt=""
        />
      </div>
    ),
    size
  );
}
