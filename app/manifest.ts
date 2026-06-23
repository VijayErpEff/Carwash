import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Terminal Car Wash RM",
    short_name: "Terminal",
    description:
      "Mobile car detailing across West London & the Heathrow terminals. Clean. Shine. Protect. Perfection.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d111a",
    theme_color: "#0d111a",
    orientation: "portrait",
    categories: ["lifestyle", "business"],
    icons: [
      { src: "/manifest-icon?s=192", type: "image/png", sizes: "192x192", purpose: "any" },
      { src: "/manifest-icon?s=512", type: "image/png", sizes: "512x512", purpose: "any" },
      { src: "/manifest-icon?s=512", type: "image/png", sizes: "512x512", purpose: "maskable" },
    ],
  };
}
