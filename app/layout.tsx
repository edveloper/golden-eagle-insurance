import type { Metadata } from "next";
import type React from "react";
import { Libre_Caslon_Display, Manrope, Playfair_Display } from "next/font/google";
import { CookieConsent } from "@/components/cookie-consent";
import { GoogleAnalytics } from "@/components/google-analytics";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { ORGANIZATION_NAME, SHARE_IMAGE, SITE_URL, organizationSchema } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

// Headings site-wide.
const caslon = Libre_Caslon_Display({
  subsets: ["latin"],
  variable: "--font-caslon",
  weight: "400",
});

// Advisory sub-brand headings only (.theme-private), so not preloaded on every page.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Golden Eagle Insurance Agency | Insurance & Investment Advice in Nairobi",
  description:
    "IRA-licensed insurance agency in Nairobi since 2006. Professional indemnity, medical, life, property, business and travel cover from ten of Kenya's leading insurers, plus global investment advice.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "google2f68f3c1ef3c003f",
  },
  icons: {
    // Round icons with transparent corners; the Apple icon stays square because iOS applies its own rounding.
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: ORGANIZATION_NAME,
    description:
      "IRA-licensed insurance agency in Nairobi since 2006. Professional indemnity, medical, life, property, business and travel cover from ten of Kenya's leading insurers, plus global investment advice.",
    url: SITE_URL,
    siteName: ORGANIZATION_NAME,
    type: "website",
    locale: "en_KE",
    images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: ORGANIZATION_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: ORGANIZATION_NAME,
    images: [SHARE_IMAGE],
    description:
      "IRA-licensed insurance agency in Nairobi since 2006. Professional indemnity, medical, life, property, business and travel cover from ten of Kenya's leading insurers, plus global investment advice.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${caslon.variable} ${playfair.variable}`}>
      <body className="bg-paper pb-16 font-sans antialiased lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <GoogleAnalytics />
        {children}
        <WhatsAppButton />
        <MobileActionBar />
        <CookieConsent />
      </body>
    </html>
  );
}
