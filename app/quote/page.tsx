import { buildPageMetadata } from "@/lib/seo"
import QuotePage from "./quote-page"

export const metadata = buildPageMetadata({
  title: "Get an Insurance Quote | Golden Eagle Insurance Agency",
  description:
    "Request a tailored insurance quote for personal, family, travel, property, motor, or business coverage from Golden Eagle Insurance Agency.",
  path: "/quote",
})

export default function QuoteRoute() {
  return <QuotePage />
}
