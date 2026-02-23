import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Cookie Policy | Golden Eagle Insurance Agency",
  description: "How Golden Eagle Insurance Agency uses cookies and similar technologies.",
}

export default function CookiePolicyPage() {
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
              <h1 className="mb-6 text-4xl font-serif font-bold text-balance text-secondary md:text-5xl">Cookie Policy</h1>
              <p className="text-lg leading-relaxed text-gray-200 text-pretty md:text-xl">Last updated: February 23, 2026</p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="space-y-8 text-sm leading-7 text-muted-foreground md:text-base">
              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files stored on your device to help websites function and to provide insights into usage and performance.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">2. How We Use Cookies</h2>
                <p>We use essential cookies to run core site features. We may use optional analytics cookies where you provide consent.</p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">3. Cookie Categories</h2>
                <p>
                  Essential Cookies: Required for core site operations.
                  <br />
                  Analytics Cookies: Help us understand traffic and improve user experience.
                  <br />
                  Marketing Cookies: Not currently enabled by default.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">4. Managing Preferences</h2>
                <p>
                  You can choose cookie preferences from the consent banner. You can also clear cookies through your browser settings at any time.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-2xl font-serif font-bold text-primary">5. Contact</h2>
                <p>
                  For cookie and tracking questions, contact{" "}
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

