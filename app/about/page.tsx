import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { buildPageMetadata } from "@/lib/seo"
import { Shield, Award, TrendingUp, Heart, Handshake } from "lucide-react"

export const metadata = buildPageMetadata({
  title: "About Us | Golden Eagle Insurance Agency",
  description:
    "Learn about Golden Eagle Insurance Agency Limited - Kenya's trusted insurance and investment partner since 2006.",
  path: "/about",
})

export default function AboutPage() {
  const milestones = [
    { year: "2006", title: "Founded in Nairobi", desc: "Golden Eagle Insurance Agency Ltd is established in Westlands." },
    { year: "2018", title: "AKI Award", desc: "1st Position, Professional Indemnity Insurance Category." },
    { year: "2019", title: "AKI Award", desc: "1st Position, Professional Indemnity Insurance Category." },
    { year: "2023", title: "AKI Award", desc: "1st Position, Professional Indemnity Insurance Category." },
    { year: "2024", title: "AKI Award", desc: "Top 10 Agents, Nationwide." },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <PageHero
          image="/nairobi-skyline-hero.jpg"
          imageAlt="Nairobi city skyline"
          eyebrow="Company Profile"
          title="About Golden Eagle Insurance Agency Limited"
          subtitle="A leading insurance and investment agency based in Kenya, offering trusted financial and risk management solutions since 2006."
        />

        {/* Our Story */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-balance">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2006, Golden Eagle Insurance Agency Limited was born from a passion to bridge the gap
                    between insurance protection and investment growth. Under the visionary leadership of Lydia Wanjiku
                    Mwangi, a former Global Specialist at Dyer & Blair, the agency has steadily grown into a recognized
                    industry leader.
                  </p>
                  <p>
                    We represent multiple reputable insurance companies and investment partners globally, providing
                    tailored services that empower our clients to protect, grow, and secure their wealth. Our unique
                    two-division structure allows us to offer comprehensive financial solutions under one roof.
                  </p>
                  <p>
                    For nearly two decades, Golden Eagle has been a beacon of trust and reliability, helping
                    individuals, families, and businesses achieve financial stability and confidence through
                    professionalism, integrity, and personalized financial guidance.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="/modern-insurance-office-in-nairobi-kenya.jpg"
                  alt="Golden Eagle Insurance Office"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-14 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
              <div className="border-t-2 border-secondary pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Mission</p>
                <p className="text-lg leading-relaxed text-primary">
                  To empower individuals and organizations to achieve financial freedom and lasting security through
                  expert insurance and investment solutions.
                </p>
              </div>
              <div className="border-t-2 border-secondary pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Vision</p>
                <p className="text-lg leading-relaxed text-primary">
                  To be Kenya's most trusted and innovative financial advisory agency, securing lives and growing wealth
                  for generations.
                </p>
              </div>
              <div className="border-t-2 border-secondary pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Values</p>
                <p className="text-lg leading-relaxed text-primary">
                  Integrity, Excellence, Innovation, Partnership, and Commitment guide every decision we make and every
                  service we provide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Details */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                What Drives Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our core values shape our culture and define how we serve our clients every day.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-primary/10 bg-primary/10 sm:grid-cols-2 lg:grid-cols-5">
              <div className="bg-background p-6">
                <Shield className="mb-3 h-6 w-6 text-secondary" />
                <h3 className="mb-2 font-semibold text-primary">Integrity</h3>
                <p className="text-sm text-muted-foreground">We build lasting trust through transparency and accountability</p>
              </div>
              <div className="bg-background p-6">
                <Award className="mb-3 h-6 w-6 text-secondary" />
                <h3 className="mb-2 font-semibold text-primary">Excellence</h3>
                <p className="text-sm text-muted-foreground">We deliver the highest standards in every service we offer</p>
              </div>
              <div className="bg-background p-6">
                <TrendingUp className="mb-3 h-6 w-6 text-secondary" />
                <h3 className="mb-2 font-semibold text-primary">Innovation</h3>
                <p className="text-sm text-muted-foreground">We continuously evolve to meet changing client needs</p>
              </div>
              <div className="bg-background p-6">
                <Handshake className="mb-3 h-6 w-6 text-secondary" />
                <h3 className="mb-2 font-semibold text-primary">Partnership</h3>
                <p className="text-sm text-muted-foreground">We value collaboration with clients and partners alike</p>
              </div>
              <div className="bg-background p-6">
                <Heart className="mb-3 h-6 w-6 text-secondary" />
                <h3 className="mb-2 font-semibold text-primary">Commitment</h3>
                <p className="text-sm text-muted-foreground">We go the extra mile to deliver value and satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-14 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Experienced professionals dedicated to protecting your interests and securing your future.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
              <div className="border-l-2 border-secondary pl-6">
                <h3 className="font-serif text-xl font-bold text-primary">Lydia Wanjiku Mwangi</h3>
                <p className="mt-1 text-sm font-medium text-secondary">Director &amp; Founder</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Former Global Markets Specialist at Dyer &amp; Blair. Over 20 years of experience in finance and
                  insurance, combining deep market insight with a passion for client success.
                </p>
              </div>
              <div className="border-l-2 border-secondary pl-6">
                <h3 className="font-serif text-xl font-bold text-primary">Alvin Lee Waithaka</h3>
                <p className="mt-1 text-sm font-medium text-secondary">Marketing Director</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Joined Golden Eagle in 2020. Instrumental in expanding the company's reach and brand presence. A
                  dynamic strategist dedicated to client-focused marketing and digital transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Our Achievements
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Recognition and milestones that reflect our commitment to excellence.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <ol className="relative">
                {milestones.map((m) => (
                  <li key={m.year} className="relative border-l-2 border-primary/15 pb-10 pl-8 last:border-transparent last:pb-0">
                    <span className="absolute -left-[7px] top-2 h-3 w-3 rotate-45 bg-secondary" aria-hidden="true" />
                    <p className="font-serif text-xl font-bold text-secondary">{m.year}</p>
                    <h3 className="mt-1 font-semibold text-primary">{m.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 border-t border-primary/10 pt-6 text-sm text-muted-foreground">
                Further recognition: Commercial Bank of Africa Certificate of Excellence, Ruby Category.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance text-secondary">
              Ready to Experience the Golden Eagle Difference?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto text-pretty">
              Join the many Kenyan families and businesses who trust us with their insurance and investment needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/quote">
                <button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-6 py-3 rounded-lg inline-flex items-center">
                  Get a Free Quote
                </button>
              </a>
              <a href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-lg">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

