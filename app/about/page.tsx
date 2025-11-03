import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Target, Eye, Award, Users, TrendingUp, Heart, Handshake } from "lucide-react"

export const metadata = {
  title: "About Us | Golden Eagle Insurance Agency",
  description:
    "Learn about Golden Eagle Insurance Agency Limited - Kenya's trusted insurance and investment partner since 2006.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-secondary text-balance">
                About Golden Eagle Insurance Agency Limited
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                A leading insurance and investment agency based in Kenya, offering trusted financial and risk management
                solutions since 2006.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
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
                    individuals, families, and businesses achieve financial stability and peace of mind through
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
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <Card>
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower individuals and organizations to achieve financial freedom and peace of mind through
                    expert insurance and investment solutions.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card>
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be Kenya's most trusted and innovative financial advisory agency — securing lives and growing
                    wealth for generations.
                  </p>
                </CardContent>
              </Card>

              {/* Values */}
              <Card>
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                    <Shield className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Values</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrity, Excellence, Innovation, Partnership, and Commitment guide every decision we make and
                    every service we provide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values Details */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                What Drives Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our core values shape our culture and define how we serve our clients every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  We build lasting trust through transparency and accountability
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We deliver the highest standards in every service we offer
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">We continuously evolve to meet changing client needs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Partnership</h3>
                <p className="text-sm text-muted-foreground">We value collaboration with clients and partners alike</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Commitment</h3>
                <p className="text-sm text-muted-foreground">We go the extra mile to deliver value and satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Experienced professionals dedicated to protecting your interests and securing your future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Team Member 1 */}
              <Card className="overflow-hidden">
                <div className="relative h-16"> {/* Previously set at h-64 to include image */}
                 {/* <img
                    src="/professional-african-business-executive-woman.jpg"
                    alt="Lydia Wanjiku Mwangi"
                    className="object-cover w-full h-full"
                  /> */}
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">Lydia Wanjiku Mwangi</h3>
                  <p className="text-sm text-muted-foreground mb-2">Director & Founder</p>
                  <p className="text-xs text-muted-foreground">
                    Former Global Markets Specialist at Dyer & Blair. Over 20 years of experience in finance and insurance,
                    combining deep market insight with a passion for client success.
                  </p>
                </CardContent>
              </Card>

              {/* Team Member 2 */}
              <Card className="overflow-hidden">
                <div className="relative h-16"> {/* Previously set at h-64 to include image */}
                  {/* <img
                    src="/professional-african-business-executive-man.jpg"
                    alt="Alvin Lee Waithaka"
                    className="object-cover w-full h-full"
                  /> */}
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">Alvin Lee Waithaka</h3>
                  <p className="text-sm text-muted-foreground mb-2">Marketing Director</p>
                  <p className="text-xs text-muted-foreground">
                    Joined Golden Eagle in 2020. Instrumental in expanding the company's reach and brand presence. A
                    dynamic strategist dedicated to client-focused marketing and digital transformation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Our Achievements
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Recognition and milestones that reflect our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">AKI Awards 2024</h3>
                      <p className="text-sm text-muted-foreground">Top 10 Agents – Nationwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">AKI Awards 2023</h3>
                      <p className="text-sm text-muted-foreground">
                        1st Position – Professional Indemnity Insurance Category
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">AKI Awards 2019</h3>
                      <p className="text-sm text-muted-foreground">
                        1st Position – Professional Indemnity Insurance Category
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">AKI Awards 2018</h3>
                      <p className="text-sm text-muted-foreground">
                        1st Position – Professional Indemnity Insurance Category
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Commercial Bank of Africa</h3>
                      <p className="text-sm text-muted-foreground">Certificate of Excellence – Ruby Category</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Client-Centered Approach</h3>
                      <p className="text-sm text-muted-foreground">
                        We listen, advise, and deliver solutions that match your financial goals
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance text-secondary">
              Ready to Experience the Golden Eagle Difference?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto text-pretty">
              Join thousands of satisfied clients who trust us with their insurance and investment needs.
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
