import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { buildPageMetadata } from "@/lib/seo"
import { CONTACT_EMAIL } from "@/lib/site"

export const metadata = buildPageMetadata({
  title: "Terms of Use | Golden Eagle Insurance Agency",
  description:
    "Terms governing use of the Golden Eagle Insurance Agency website and services, under the laws of Kenya.",
  path: "/terms-of-use",
})

function Clause({ title, children }: { title: string; children: React.ReactNode }) {
  const [num, ...rest] = title.split(". ")
  const heading = rest.length ? rest.join(". ") : title
  return (
    <section className="flex gap-4 border-t border-primary/10 pt-6 first:border-t-0 first:pt-0 md:gap-6">
      <span className="pt-1 font-serif text-sm font-bold tabular-nums text-secondary">
        {rest.length ? num.padStart(2, "0") : ""}
      </span>
      <div className="flex-1">
        <h2 className="mb-3 font-serif text-xl font-bold text-primary">{heading}</h2>
        <div className="space-y-3">{children}</div>
      </div>
    </section>
  )
}

export default function TermsOfUsePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          image="/nairobi-cityscape-hero.jpg"
          imageAlt="Nairobi cityscape"
          eyebrow="Legal"
          title="Terms of Use"
          subtitle="The terms governing your use of this website and our services."
        >
          <p className="mt-4 text-sm text-white/70">Last updated: 6 July 2026</p>
        </PageHero>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="space-y-8 text-sm leading-7 text-muted-foreground md:text-base">
              <Clause title="1. About Us and These Terms">
                <p>
                  This website is operated by Golden Eagle Insurance Agency Ltd, an insurance agency licensed by the
                  Insurance Regulatory Authority (IRA) of Kenya under the Insurance Act, Cap 487 (IRA Reg. No. 11611).
                  By using this website, you agree to these terms. If you do not agree, please discontinue use.
                </p>
              </Clause>

              <Clause title="2. Informational Content Only">
                <p>
                  Content on this site is provided for general information and does not constitute personal legal, tax,
                  or investment advice. You should seek advice suited to your own circumstances before making a
                  financial decision.
                </p>
              </Clause>

              <Clause title="3. Insurance Services">
                <p>
                  As a licensed agency, we arrange cover with regulated insurers. Acceptance of any risk, the premium
                  charged, and the outcome of any claim are subject to the insurer's underwriting decisions, the terms
                  of the relevant policy, and applicable law. The policy document, once issued, governs your cover.
                </p>
              </Clause>

              <Clause title="4. Investment Services and Risk">
                <p>
                  Our Global Markets Advisory division facilitates international investment solutions through our
                  regulated partner, Investors Trust. Investing involves risk, including the possible loss of capital.
                  The value of investments and any income from them can fall as well as rise, currency movements can
                  affect value, and past performance is not a reliable indicator of future results. No return is
                  guaranteed.
                </p>
              </Clause>

              <Clause title="5. No Guarantee of Outcomes">
                <p>
                  We make no guarantee as to insurance acceptance, pricing, claims outcomes, or investment performance.
                  Any figures or targets shown on this site are illustrative and are not promises of a specific result.
                </p>
              </Clause>

              <Clause title="6. Intellectual Property">
                <p>
                  The content, branding, and materials on this website belong to Golden Eagle Insurance Agency Ltd or
                  its licensors and may not be reproduced without permission, except as allowed by law.
                </p>
              </Clause>

              <Clause title="7. Third-Party Links">
                <p>
                  We may link to third-party websites for convenience. We are not responsible for their content,
                  availability, or practices, and a link does not imply endorsement.
                </p>
              </Clause>

              <Clause title="8. Limitation of Liability">
                <p>
                  To the maximum extent permitted by the laws of Kenya, we are not liable for indirect or consequential
                  losses arising from use of this website. Nothing in these terms limits any liability that cannot
                  lawfully be limited.
                </p>
              </Clause>

              <Clause title="9. Governing Law and Disputes">
                <p>
                  These terms are governed by the laws of Kenya, and any dispute relating to them or to this website is
                  subject to the jurisdiction of the Kenyan courts. Complaints about our conduct as an insurance agency
                  may also be raised with the Insurance Regulatory Authority.
                </p>
              </Clause>

              <Clause title="10. Changes to These Terms">
                <p>
                  We may update these terms from time to time. Continued use of the website after an update means you
                  accept the revised terms.
                </p>
              </Clause>

              <Clause title="11. Contact">
                <p>
                  For questions about these terms, contact us at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline hover:text-primary/80">
                    {CONTACT_EMAIL}
                  </a>{" "}
                  or +254 791 389 518.
                </p>
              </Clause>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
