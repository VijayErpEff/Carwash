import type { Metadata, Viewport } from "next";
import { Archivo, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const jb = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono-jb",
  display: "swap",
});

const SITE = "https://terminalcarwash.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Terminal Car Wash RM — Detailing in West London & near Heathrow",
    template: "%s · Terminal Car Wash RM",
  },
  description:
    "Terminal Car Wash RM brings a fully-equipped detailing bay to your door across West London and the Heathrow terminals — express washes, full interior/exterior details, and ceramic paint protection. Clean. Shine. Protect. Perfection.",
  applicationName: "Terminal Car Wash RM",
  keywords: [
    "car wash Heathrow",
    "mobile car detailing London",
    "ceramic coating West London",
    "car detailing Hounslow",
    "mobile valeting Richmond",
  ],
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Terminal",
    statusBarStyle: "black-translucent",
    startupImage: [
      { url: "/startup?w=1290&h=2796", media: "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)" },
      { url: "/startup?w=1179&h=2556", media: "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3)" },
      { url: "/startup?w=1170&h=2532", media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)" },
      { url: "/startup?w=1125&h=2436", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" },
      { url: "/startup?w=828&h=1792", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" },
      { url: "/startup?w=750&h=1334", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" },
    ],
  },
  openGraph: {
    title: "Terminal Car Wash RM — West London & Heathrow",
    description:
      "We bring the detail bay to your door, anywhere within 10 miles of Heathrow. Clean. Shine. Protect. Perfection.",
    type: "website",
    locale: "en_GB",
    siteName: "Terminal Car Wash RM",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d111a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${hanken.variable} ${jb.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
