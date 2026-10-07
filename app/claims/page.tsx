import { buildPageMetadata } from "@/lib/seo"
import ClaimsPage from "./claims-page"

export const metadata = buildPageMetadata({
  title: "File a Claim | Golden Eagle Insurance Agency",
  description:
    "File an insurance claim with Golden Eagle Insurance Agency. We help you prepare it and follow it up with your insurer until it's settled.",
  path: "/claims",
})

export default function ClaimsRoute() {
  return <ClaimsPage />
}
