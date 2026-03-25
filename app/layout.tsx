import type { Metadata } from "next";
import type React from "react";
import { Manrope, Playfair_Display } from "next/font/google";
import { CookieConsent } from "@/components/cookie-consent";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Golden Eagle Insurance Agency | Trusted Insurance Solutions",
  description:
    "Golden Eagle Insurance Agency provides comprehensive insurance solutions for individuals and businesses. Get protected today.",
  alternates: {
    canonical: "/",
  },

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
    url: SITE_URL,
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
      "Comprehensive, reliable insurance solutions for individuals and businesses.",
    images: ["/icon.png"],
  },

  // 🚀 Optional structured data — improves Google SEO
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Golden Eagle Insurance Agency",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
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
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
