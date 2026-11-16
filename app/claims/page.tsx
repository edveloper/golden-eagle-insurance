import { buildPageMetadata } from "@/lib/seo"
import ClaimsPage from "./claims-page"

export const metadata = buildPageMetadata({
  title: "How to Make an Insurance Claim in Kenya | Golden Eagle",
  description:
    "The insurance claim process in Kenya, step by step. The documents each claim needs, why claims get turned down, and how we follow yours up until it's settled.",
  path: "/claims",
})

export default function ClaimsRoute() {
  return <ClaimsPage />
}
