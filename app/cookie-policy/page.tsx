import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { buildPageMetadata } from "@/lib/seo"
import { CONTACT_EMAIL } from "@/lib/site"

export const metadata = buildPageMetadata({
  title: "Cookie Policy | Golden Eagle Insurance Agency",
  description: "How Golden Eagle Insurance Agency uses cookies and similar technologies.",
  path: "/cookie-policy",
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

export default function CookiePolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          image="/nairobi-cityscape-hero.jpg"
          imageAlt="Nairobi cityscape"
          eyebrow="Legal"
          title="Cookie Policy"
          subtitle="How we use cookies and similar technologies."
        >
          <p className="mt-4 text-sm text-white/70">Last updated: 6 July 2026</p>
        </PageHero>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="space-y-8 text-sm leading-7 text-muted-foreground md:text-base">
              <Clause title="1. What Are Cookies">
                <p>
                  Cookies are small text files stored on your device to help websites function and to provide insights
                  into usage and performance.
                </p>
              </Clause>

              <Clause title="2. How We Use Cookies">
                <p>
                  We use essential cookies to run core site features. We use optional analytics cookies only where you
                  give consent through our cookie banner.
                </p>
              </Clause>

              <Clause title="3. Cookie Categories">
                <p>Essential cookies: required for core site operations.</p>
                <p>Analytics cookies: help us understand traffic and improve the experience (optional, consent-based).</p>
                <p>Marketing cookies: not enabled by default.</p>
              </Clause>

              <Clause title="4. Your Consent">
                <p>
                  In line with the Data Protection Act, 2019 of Kenya, non-essential cookies are set only after you
                  consent. You can change or withdraw your choice at any time using the cookie banner or your browser
                  settings.
                </p>
              </Clause>

              <Clause title="5. Managing Preferences">
                <p>
                  You can choose your cookie preferences from the consent banner, and you can clear cookies through your
                  browser settings at any time. Blocking essential cookies may affect how the site works.
                </p>
              </Clause>

              <Clause title="6. Contact">
                <p>
                  For cookie and tracking questions, contact us at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline hover:text-primary/80">
                    {CONTACT_EMAIL}
                  </a>
                  .
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
