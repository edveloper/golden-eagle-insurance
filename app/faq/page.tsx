import { buildPageMetadata } from "@/lib/seo"
import FAQPage from "./faq-page"
import { FAQS } from "./faqs"

export const metadata = buildPageMetadata({
  title: "Insurance FAQ | Golden Eagle Insurance Agency",
  description:
    "Answers about professional indemnity, medical and life insurance, claims, renewals and investment advice from Golden Eagle Insurance Agency in Nairobi.",
  path: "/faq",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.flatMap((c) =>
    c.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  ),
}

export default function FAQRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FAQPage />
    </>
  )
}
