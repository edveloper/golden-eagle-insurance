import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy | Golden Eagle Insurance Agency",
  description: "How Golden Eagle Insurance Agency collects, uses, and protects personal information.",
}

export default function PrivacyPolicyPage() {
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
              <h1 className="mb-6 text-4xl font-serif font-bold text-balance text-secondary md:text-5xl">Privacy Policy</h1>
              <p className="text-lg leading-relaxed text-gray-200 text-pretty md:text-xl">Last updated: February 23, 2026</p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="space-y-8 text-sm leading-7 text-muted-foreground md:text-base">
              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly, including contact details, policy inquiry details, and other information submitted through our forms.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">2. How We Use Your Information</h2>
                <p>
                  We use your information to respond to inquiries, prepare quotations, support policy servicing and claims assistance, and improve service quality.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">3. Legal Basis and Compliance</h2>
                <p>
                  We process personal data in line with applicable data protection requirements, including lawful business purposes and your consent where required.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">4. Data Sharing</h2>
                <p>
                  We may share information with insurance and investment partners, technology providers, and professional service providers only where needed to deliver requested services.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">5. Data Retention</h2>
                <p>
                  We retain information for as long as necessary to deliver services, meet contractual requirements, and comply with legal or regulatory obligations.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">6. Your Rights</h2>
                <p>
                  Subject to applicable law, you may request access, correction, deletion, or restriction of your personal data, and may object to certain types of processing.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">7. Security</h2>
                <p>
                  We apply reasonable administrative and technical safeguards to protect personal information. No method of transmission or storage is fully risk-free.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">8. Contact</h2>
                <p>
                  For privacy requests or concerns, contact us at{" "}
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

