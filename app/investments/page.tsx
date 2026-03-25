import { buildPageMetadata } from "@/lib/seo"
import InvestmentsPage from "./investments-page"

export const metadata = buildPageMetadata({
  title: "Investment Solutions | Golden Eagle Insurance Agency",
  description:
    "Explore global investment solutions, wealth planning options, mutual funds, ETFs, bonds, and share opportunities with Golden Eagle Insurance Agency.",
  path: "/investments",
})

export default function InvestmentsRoute() {
  return <InvestmentsPage />
}
