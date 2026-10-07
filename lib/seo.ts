import { INSTAGRAM_URL } from "@/lib/site"
import type { Metadata } from "next"

export const SITE_URL = "https://www.goldeneagleltd.org"
export const ORGANIZATION_NAME = "Golden Eagle Insurance Agency"
export const SHARE_IMAGE = "/images/share-link.png" // from docs/brand/kit/share-link-1200x630.png

type MetadataInput = {
  title: string
  description: string
  path?: string
}

export function buildPageMetadata({ title, description, path = "/" }: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Golden Eagle Insurance Agency",
      type: "website",
      // A page-level openGraph object replaces the root one, so the shared preview image is restated here.
      images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: ORGANIZATION_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SHARE_IMAGE],
    },
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: ORGANIZATION_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  sameAs: [INSTAGRAM_URL],
}
