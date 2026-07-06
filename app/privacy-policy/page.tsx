import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Privacy Policy | Golden Eagle Insurance Agency",
  description:
    "How Golden Eagle Insurance Agency collects, uses, and protects personal information under Kenya's Data Protection Act, 2019.",
  path: "/privacy-policy",
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

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          image="/nairobi-cityscape-hero.jpg"
          imageAlt="Nairobi cityscape"
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle="How Golden Eagle collects, uses, and protects your personal information."
        >
          <p className="mt-4 text-sm text-white/70">Last updated: 6 July 2026</p>
        </PageHero>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="space-y-8 text-sm leading-7 text-muted-foreground md:text-base">
              <p>
                This policy explains how Golden Eagle Insurance Agency Ltd (Golden Eagle, we, us, our) handles personal
                data in line with the Data Protection Act, 2019 (No. 24 of 2019) and the Data Protection (General)
                Regulations, 2021 of Kenya. For the purposes of this policy we act as a data controller, and our
                processing is subject to oversight by the Office of the Data Protection Commissioner (ODPC).
              </p>

              <Clause title="1. Who We Are">
                <p>
                  Golden Eagle Insurance Agency Ltd is an insurance agency licensed by the Insurance Regulatory
                  Authority of Kenya (IRA Reg. No. 11611), based at Maruti Court, East Church Road, Westlands, Nairobi.
                  Our Global Markets Advisory division facilitates international investment solutions through our
                  regulated partner, Investors Trust.
                </p>
              </Clause>

              <Clause title="2. Information We Collect">
                <p>
                  We collect information you provide directly, such as your name and contact details, and the
                  information needed to prepare quotations, arrange cover, service policies, assess claims, or provide
                  investment advisory services. Where required for underwriting, know-your-customer (KYC), or
                  anti-money-laundering checks, this may include identification and financial details. We also collect
                  limited technical information (such as usage and analytics data) when you use this website.
                </p>
              </Clause>

              <Clause title="3. How We Use Your Information">
                <p>
                  We use your information to respond to enquiries, prepare quotations, arrange and service insurance
                  cover, assist with claims, provide investment advisory services, meet our legal and regulatory
                  obligations, and improve the quality of our service.
                </p>
              </Clause>

              <Clause title="4. Lawful Basis for Processing">
                <p>
                  Under the Data Protection Act, 2019 we process personal data where one or more lawful bases apply:
                  your consent; the performance of a contract with you; compliance with a legal or regulatory
                  obligation (including obligations under the Insurance Act, Cap 487); or our legitimate interests in
                  operating and improving our services, balanced against your rights.
                </p>
              </Clause>

              <Clause title="5. Sharing Your Information">
                <p>
                  We share information only where needed to deliver the services you request or to meet legal
                  obligations. This may include insurers and underwriters, our investment platform partner (Investors
                  Trust), technology and professional-service providers acting on our behalf, and regulators or
                  authorities such as the IRA and the ODPC where required by law. We do not sell your personal data.
                </p>
              </Clause>

              <Clause title="6. International Transfers">
                <p>
                  Some services, including international investment solutions, involve transferring information outside
                  Kenya (for example, to Investors Trust in the Cayman Islands). Where we transfer personal data abroad,
                  we take steps to ensure an appropriate level of protection consistent with the Data Protection Act,
                  2019.
                </p>
              </Clause>

              <Clause title="7. Data Retention">
                <p>
                  We retain information for as long as necessary to deliver our services and to meet contractual,
                  insurance record-keeping, tax, and other legal or regulatory requirements, after which it is securely
                  deleted or anonymised.
                </p>
              </Clause>

              <Clause title="8. Your Rights">
                <p>Subject to applicable law, you have the right to:</p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>be informed of how your personal data is used;</li>
                  <li>access a copy of the personal data we hold about you;</li>
                  <li>request correction of inaccurate or misleading data;</li>
                  <li>request deletion of your data where the law allows;</li>
                  <li>object to, or request restriction of, certain processing;</li>
                  <li>request data portability where processing is based on consent or contract;</li>
                  <li>withdraw consent at any time, without affecting prior lawful processing; and</li>
                  <li>not be subject to a decision based solely on automated processing that significantly affects you.</li>
                </ul>
              </Clause>

              <Clause title="9. Security">
                <p>
                  We apply reasonable administrative and technical safeguards to protect personal information. However,
                  no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
                </p>
              </Clause>

              <Clause title="10. Complaints">
                <p>
                  If you have a concern about how we handle your data, please contact us first so we can try to resolve
                  it. You also have the right to lodge a complaint with the Office of the Data Protection Commissioner
                  (ODPC) at{" "}
                  <a
                    href="https://www.odpc.go.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    www.odpc.go.ke
                  </a>
                  .
                </p>
              </Clause>

              <Clause title="11. Contact">
                <p>
                  For privacy requests or questions, contact us at{" "}
                  <a href="mailto:info@goldeneagle.co.ke" className="text-primary underline hover:text-primary/80">
                    info@goldeneagle.co.ke
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
