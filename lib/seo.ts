import type { Metadata } from "next"

export const SITE_URL = "https://www.goldeneagleltd.org"

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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

