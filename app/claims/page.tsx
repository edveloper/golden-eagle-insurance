import { buildPageMetadata } from "@/lib/seo"
import ClaimsPage from "./claims-page"

export const metadata = buildPageMetadata({
  title: "File a Claim | Golden Eagle Insurance Agency",
  description:
    "Submit an insurance claim with Golden Eagle Insurance Agency and get support from our team through the claims process.",
  path: "/claims",
})

export default function ClaimsRoute() {
  return <ClaimsPage />
}
