import { buildPageMetadata } from "@/lib/seo"
import FAQPage from "./faq-page"

export const metadata = buildPageMetadata({
  title: "Insurance FAQ | Golden Eagle Insurance Agency",
  description:
    "Find answers about insurance products, claims, premiums, coverage options, and policy support from Golden Eagle Insurance Agency.",
  path: "/faq",
})

export default function FAQRoute() {
  return <FAQPage />
}
