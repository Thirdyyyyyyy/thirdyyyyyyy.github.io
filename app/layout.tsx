import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://henry-hudieres.dev";
const title = "Henry Bautista Hudieres III — Software Engineer";
const description =
  "Full-stack Software Engineer with 6+ years building scalable web applications, SaaS products and enterprise systems. Currently at Assembled Systems, working on Certainly CX, HiveHQ Profit Dashboard and MuseOS across NestJS, Next.js, Django and AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Henry Hudieres III",
  },
  description,
  applicationName: "Henry Hudieres III",
  authors: [{ name: "Henry Bautista Hudieres III" }],
  keywords: [
    "Henry Hudieres",
    "Software Engineer",
    "Full-Stack Developer",
    "TypeScript",
    "Next.js",
    "React",
    "NestJS",
    "Django",
    ".NET",
    "Assembled Systems",
    "Philippines",
  ],
  creator: "Henry Bautista Hudieres III",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Henry Hudieres III",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
