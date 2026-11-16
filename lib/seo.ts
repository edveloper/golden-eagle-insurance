import { CONTACT_EMAIL, FOUNDED_YEAR, INSTAGRAM_URL, PHONE_TEL } from "@/lib/site"
import type { Metadata } from "next"

export const SITE_URL = "https://goldeneagleltd.org"
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

// The agency works from home and meets clients at their offices or an agreed place, so
// it is described as a service-area business: locality only, never a street address.
// Hours mirror BUSINESS_HOURS in lib/site.ts; change both together.

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": `${SITE_URL}/#agency`,
  name: ORGANIZATION_NAME,
  legalName: "Golden Eagle Insurance Agency Ltd",
  alternateName: ["Golden Eagle Insurance", "Golden Eagle Agency"],
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}${SHARE_IMAGE}`,
  description:
    "IRA-licensed insurance agency in Nairobi since " + FOUNDED_YEAR + ". Professional indemnity, medical, life, property, business, cyber and travel cover from ten of Kenya’s leading insurers, plus global investment advice.",
  telephone: PHONE_TEL,
  email: CONTACT_EMAIL,
  foundingDate: String(FOUNDED_YEAR),
  founder: { "@type": "Person", name: "Lydia Wanjiku Mwangi" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Westlands",
    addressRegion: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: [
    { "@type": "City", name: "Nairobi" },
    { "@type": "Country", name: "Kenya" },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
  ],
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Insurance Regulatory Authority of Kenya licence",
    value: "IRA/05/11611",
    url: "https://ira.go.ke/licensed-insurance-agents/",
  },
  award: "Ranked first in the AKI professional indemnity category three times",
  knowsAbout: [
    "Professional indemnity insurance",
    "Medical insurance",
    "Life insurance",
    "Cyber insurance",
    "Business insurance",
    "Travel insurance",
    "Insurance claims",
    "Global investment advisory",
  ],
  sameAs: [INSTAGRAM_URL],
}
