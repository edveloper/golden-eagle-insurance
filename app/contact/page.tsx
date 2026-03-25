import { buildPageMetadata } from "@/lib/seo"
import ContactPage from "./contact-page"

export const metadata = buildPageMetadata({
  title: "Contact Golden Eagle Insurance Agency",
  description:
    "Contact Golden Eagle Insurance Agency for insurance advice, product guidance, quote support, or claims assistance.",
  path: "/contact",
})

export default function ContactRoute() {
  return <ContactPage />
}
