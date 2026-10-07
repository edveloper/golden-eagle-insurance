import { buildPageMetadata } from "@/lib/seo"
import ContactPage from "./contact-page"

export const metadata = buildPageMetadata({
  title: "Contact Golden Eagle Insurance Agency",
  description:
    "Call, WhatsApp or email Golden Eagle Insurance Agency in Nairobi for insurance quotes, claims help and investment advice. We reply within one business day.",
  path: "/contact",
})

export default function ContactRoute() {
  return <ContactPage />
}
