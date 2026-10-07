import { buildPageMetadata } from "@/lib/seo"
import QuotePage from "./quote-page"

export const metadata = buildPageMetadata({
  title: "Get an Insurance Quote | Golden Eagle Insurance Agency",
  description:
    "Get a free insurance quote for medical, life, professional indemnity, property, travel, cyber or business cover. We compare ten insurers and reply within one business day.",
  path: "/quote",
})

export default function QuoteRoute() {
  return <QuotePage />
}
