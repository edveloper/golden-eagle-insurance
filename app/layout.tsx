import type { Metadata } from "next";
import type React from "react";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Golden Eagle Insurance Agency | Trusted Insurance Solutions in Kenya",
  description:
    "Golden Eagle Insurance Agency provides comprehensive insurance solutions for individuals and businesses across Kenya. Get protected today.",

  generator: "v0.app",

  // ✅ Google Search Console Verification
  verification: {
    google: "google2f68f3c1ef3c003f",
  },

  // ✅ Favicon + Apple icon
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },

  // ✅ Open Graph — used by Google, WhatsApp, Facebook, Twitter
  openGraph: {
    title: "Golden Eagle Insurance Agency",
    description:
      "Reliable, professional, and comprehensive insurance solutions across Kenya.",
    url: "https://goldeneagleltd.org",
    siteName: "Golden Eagle Insurance Agency",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Golden Eagle Insurance Agency",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  // Optional, improves previews on Twitter
  twitter: {
    card: "summary_large_image",
    title: "Golden Eagle Insurance Agency",
    description:
      "Comprehensive, reliable insurance solutions for individuals and businesses in Kenya.",
    images: ["/icon.png"],
  },

  // 🚀 Optional structured data — improves Google SEO
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Golden Eagle Insurance Agency",
      url: "https://goldeneagleltd.org",
      logo: "https://goldeneagleltd.org/icon.png",
      sameAs: [
        // Add social links if you have them:
        // "https://facebook.com/yourpage",
        // "https://instagram.com/yourpage",
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
