import type { Metadata } from "next";
import type React from "react";
import { Manrope, Playfair_Display } from "next/font/google";
import { CookieConsent } from "@/components/cookie-consent";
import { GoogleAnalytics } from "@/components/google-analytics";
import { ORGANIZATION_NAME, SITE_URL, organizationSchema } from "@/lib/seo";
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
  verification: {
    google: "google2f68f3c1ef3c003f",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: ORGANIZATION_NAME,
    description:
      "Reliable, professional, and comprehensive insurance solutions across Kenya.",
    url: SITE_URL,
    siteName: ORGANIZATION_NAME,
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: ORGANIZATION_NAME,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: ORGANIZATION_NAME,
    description:
      "Comprehensive, reliable insurance solutions for individuals and businesses.",
    images: ["/icon.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <GoogleAnalytics />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
