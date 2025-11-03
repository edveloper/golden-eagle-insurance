import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Car,
  Heart,
  Home,
  Briefcase,
  Shield,
  CheckCircle,
  Clock,
  Award,
  TrendingUp,
  ArrowRight,
  Phone,
  LineChart,
  Scale,
  Plane,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20" />
          <div className="container mx-auto px-4 py-20 md:py-32 relative">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance text-secondary">
                Trusted Financial & Insurance Partner Since 2006
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 text-pretty leading-relaxed">
                Golden Eagle Insurance Agency Limited offers trusted financial and risk management solutions. We
                represent multiple reputable insurance companies and investment partners globally, providing tailored
                services that empower our clients to protect, grow, and secure their wealth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quote">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {/* Decorative Element */}
          <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute bottom-10 right-10 w-64 h-64 border-4 border-secondary rounded-full" />
            <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-secondary rounded-full" />
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">18+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Powerful Divisions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">9+</div>
                <div className="text-sm text-muted-foreground">Insurance Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">AKI</div>
                <div className="text-sm text-muted-foreground">Award Winner</div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Divisions Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Two Powerful Divisions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                A seamless blend of insurance protection and investment growth to secure your financial future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Investment Division card */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                    <LineChart className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Investment Division</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Navigate the complex world of personal and corporate finance with access to world-class financial
                    instruments including shares, mutual funds, ETFs, and bonds through our global partnerships.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Children's education & college funds</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Retirement & pension planning</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Long-term wealth creation</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground">
                    Partners: Investors Trust (Cayman Islands) & RL360 (Isle of Man)
                  </p>
                </CardContent>
              </Card>

              {/* Insurance Division card */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                    <Scale className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Insurance Division</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Comprehensive insurance services that protect your assets, health, and future. We represent Kenya's
                    leading insurance providers to offer you the best coverage options.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Medical & Life Insurance</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Professional Indemnity (Award-winning)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Home, Business & Travel Insurance</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground">
                    Partners: ICEA Lion, Heritage, Old Mutual, Britam, Prudential, AAR, Jubilee, CIC, NCBA
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Insurance Products */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Our Insurance Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive protection for every aspect of your life and business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Medical Insurance */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Medical Insurance</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Comprehensive health coverage with access to top hospitals locally and internationally. Covers
                    inpatient, outpatient, maternity, dental, and optical care.
                  </p>
                  <Link
                    href="/products#medical"
                    className="text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Motor Vehicle Insurance 
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Car className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Motor Vehicle Insurance</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Covers private and commercial vehicles against accident, theft, fire, and third-party liabilities
                    with flexible coverage options.
                  </p>
                  <Link
                    href="/products#motor"
                    className="text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card> */}

              {/* Professional Indemnity */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-secondary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-secondary" />
                    </div>
                    <span className="text-xs font-semibold text-secondary">AWARD WINNER</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Professional Indemnity</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Tailored protection for professionals against claims from errors or omissions. Multi-award-winning
                    leader in this category.
                  </p>
                  <Link
                    href="/products#professional"
                    className="text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Home Insurance */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Home Insurance</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Protection for your home, contents, and personal belongings from fire, theft, and natural disasters
                    for homeowners and tenants.
                  </p>
                  <Link
                    href="/products#home"
                    className="text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Business Insurance */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Business Insurance</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Comprehensive coverage for enterprises including fire, burglary, public liability, and
                    employee-related risks.
                  </p>
                  <Link
                    href="/products#business"
                    className="text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Travel Insurance */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Plane className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Travel Insurance</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Travel with peace of mind with protection from medical emergencies, lost luggage, cancellations, and
                    unforeseen travel risks.
                  </p>
                  <Link
                    href="/products#travel"
                    className="text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Life & Pension */}
              <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Life & Pension Insurance</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Secure your family's future and prepare for retirement through tailored policies for education,
                    investment, and income replacement.
                  </p>
                  <Link
                    href="/products#life"
                    className="text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Investment Products */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Our Investment Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Diversified investment instruments to build and grow your wealth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Shares */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Shares</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Invest in equity markets including the Magnificent 7 tech stocks and other carefully selected
                    companies for long-term growth.
                  </p>
                  <Link
                    href="/investments#shares"
                    className="text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Mutual Funds */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Mutual Funds</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Professionally managed diversified portfolios offering balanced risk and return potential for all
                    investor types.
                  </p>
                  <Link
                    href="/investments#mutual-funds"
                    className="text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* ETFs */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">ETFs</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Exchange-traded funds providing low-cost access to diversified market exposure with flexibility and
                    transparency.
                  </p>
                  <Link
                    href="/investments#etfs"
                    className="text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Bonds */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Bonds</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Fixed-income securities offering stable returns and capital preservation for conservative and
                    balanced investors.
                  </p>
                  <Link
                    href="/investments#bonds"
                    className="text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Why Choose Golden Eagle?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                We're committed to providing exceptional service and comprehensive coverage that gives you peace of
                mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">18+ Years of Excellence</h3>
                <p className="text-sm text-muted-foreground">Trusted by clients across Kenya since 2006</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Two Powerful Divisions</h3>
                <p className="text-sm text-muted-foreground">
                  Seamless blend of insurance protection and investment growth
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Award-Winning Performance</h3>
                <p className="text-sm text-muted-foreground">Multiple AKI Awards for outstanding service</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Global Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  Access to world-class investment platforms and leading insurers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance text-secondary">Ready to Get Protected?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto text-pretty">
              Get a free, no-obligation quote today and discover how we can help you protect and grow your wealth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+254725162240">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
