import { ImageResponse } from "next/og";
import { logoDataUri, fitByWidth } from "@/lib/brandArt";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const { w, h } = fitByWidth(64, 0.96);
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
    size
  );
}
