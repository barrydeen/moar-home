import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOAR - Mother of All Relays",
  description:
    "Your Nostr relay infrastructure is not someone else's server. Single Rust binary. Unlimited relays, blossom servers, web-of-trust filters. Install it. Own it.",
  openGraph: {
    title: "MOAR - Mother of All Relays",
    description:
      "Single Rust binary. Unlimited relays, blossom servers, web-of-trust filters. Install it. Own it.",
    type: "website",
    url: "https://github.com/barrydeen/moar",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOAR - Mother of All Relays",
    description:
      "Single Rust binary. Unlimited relays, blossom servers, web-of-trust filters. Install it. Own it.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
