import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Terms of Use | Golden Eagle Insurance Agency",
  description: "Terms governing use of Golden Eagle Insurance Agency website and services.",
}

export default function TermsOfUsePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-primary py-14 text-white md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(197,161,0,0.2),transparent_35%),radial-gradient(circle_at_88%_84%,rgba(0,119,190,0.2),transparent_36%),linear-gradient(120deg,#09172d_0%,#0a1d37_52%,#0d2749_100%)]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center rounded-full border border-secondary/25 bg-white/8 px-4 py-1.5 text-xs tracking-[0.14em] text-white/90 uppercase">
                Legal
              </div>
              <h1 className="mb-6 text-4xl font-serif font-bold text-balance text-secondary md:text-5xl">Terms of Use</h1>
              <p className="text-lg leading-relaxed text-gray-200 text-pretty md:text-xl">Last updated: February 23, 2026</p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="space-y-8 text-sm leading-7 text-muted-foreground md:text-base">
              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">1. Acceptance</h2>
                <p>By using this website, you agree to these terms. If you do not agree, please discontinue use.</p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">2. Informational Content</h2>
                <p>
                  Content on this site is for general information and does not constitute personal legal, tax, or investment advice.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">3. No Guarantee of Outcomes</h2>
                <p>
                  Insurance acceptance, pricing, and claims outcomes are subject to policy terms, underwriting decisions, and applicable law.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">4. Third-Party Links</h2>
                <p>
                  We may link to third-party websites for convenience. We are not responsible for their content, availability, or practices.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">5. Limitation of Liability</h2>
                <p>
                  To the maximum extent allowed by applicable law, we are not liable for indirect or consequential losses arising from site use.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">6. Changes to Terms</h2>
                <p>We may update these terms from time to time. Continued use after updates means you accept the revised terms.</p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">7. Contact</h2>
                <p>
                  For questions about these terms, contact{" "}
                  <a href="mailto:info@goldeneagle.co.ke" className="text-primary underline hover:text-primary/80">
                    info@goldeneagle.co.ke
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

