"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  PiggyBank,
  GraduationCap,
  Home,
  Briefcase,
  Shield,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { siApple, siGoogle, siTesla, siMeta, siNvidia } from "simple-icons"

export default function InvestmentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance text-secondary">Investment Solutions</h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                Build wealth, secure your future, and achieve your financial goals with our comprehensive investment
                products and expert guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Investment Partners */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Our Investment Partners
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                We partner with world-class investment firms to bring you the best opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Globe className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">Investors Trust</h3>
                      <p className="text-sm text-muted-foreground">Cayman Islands</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    A leading international life insurance company offering innovative investment solutions with global
                    reach and proven track record of excellence.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Shield className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">RL360</h3>
                      <p className="text-sm text-muted-foreground">Isle of Man</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Trusted provider of international investment and savings solutions, helping clients build and
                    protect wealth across generations.
                  </p>
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
                Investment Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Diversified investment options to match your financial goals and risk appetite
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">Shares</h3>
                  <p className="text-sm text-muted-foreground">
                    Invest in equity markets and participate in company growth with carefully selected stock portfolios.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">Mutual Funds</h3>
                  <p className="text-sm text-muted-foreground">
                    Professionally managed diversified portfolios offering balanced risk and return potential.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">ETFs</h3>
                  <p className="text-sm text-muted-foreground">
                    Exchange-traded funds providing low-cost access to diversified market exposure and flexibility.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">Bonds</h3>
                  <p className="text-sm text-muted-foreground">
                    Fixed-income securities offering stable returns and capital preservation for conservative investors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Shares - Magnificent 7 */}
        <section className="py-16 md:py-24 bg-muted" id="shares">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Shares - Magnificent 7 & More
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Invest in world-class companies including the Magnificent 7 technology leaders
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Apple", symbol: "AAPL", icon: siApple, color: "#555555" },
                { name: "Microsoft", symbol: "MSFT", icon: null, initials: "MS", color: "#0078D4" },
                { name: "Google", symbol: "GOOGL", icon: siGoogle, color: "#4285F4" },
                { name: "Amazon", symbol: "AMZN", icon: null, initials: "AM", color: "#FF9900" },
                { name: "Tesla", symbol: "TSLA", icon: siTesla, color: "#E82127" },
                { name: "Meta", symbol: "META", icon: siMeta, color: "#0A66C2" },
                { name: "Nvidia", symbol: "NVDA", icon: siNvidia, color: "#76B900" },
                { name: "Other Stocks", symbol: "Various", icon: null, initials: "+", color: "#c9a961" },
              ].map((stock) => {
                const IconComponent = stock.icon
                return (
                  <Card key={stock.symbol} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: `${stock.color}20` }}
                      >
                        {IconComponent ? (
                          <svg
                            className="h-8 w-8"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            style={{ color: stock.color }}
                            dangerouslySetInnerHTML={{ __html: IconComponent.svg }}
                          />
                        ) : (
                          <span className="text-2xl font-bold" style={{ color: stock.color }}>
                            {stock.initials}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-primary mb-1">{stock.name}</h3>
                      <p className="text-sm text-muted-foreground">{stock.symbol}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Diversify your portfolio with exposure to leading global companies across technology, e-commerce, and
                innovation sectors.
              </p>
              <Link href="/quote">
                <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                  Invest in Shares
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mutual Funds */}
        <section className="py-16 md:py-24" id="mutual-funds">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">Mutual Funds</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Professionally managed portfolios tailored to your investment objectives
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {[
                { name: "JP Morgan", symbol: "JPM", initials: "JP", color: "#117DBA" },
                { name: "S&P 500 Fund", symbol: "SPY", initials: "SP", color: "#1F77B4" },
                { name: "Morgan Stanley", symbol: "MS", initials: "MS", color: "#003DA5" },
                { name: "PJT Partners", symbol: "PJT", initials: "PJ", color: "#003366" },
                { name: "Goldman Sachs", symbol: "GS", initials: "GS", color: "#0066CC" },
                { name: "Vanguard Fund", symbol: "VTI", initials: "VG", color: "#8B4513" },
              ].map((fund) => (
                <Card key={fund.symbol} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: `${fund.color}20` }}
                    >
                      <span className="text-2xl font-bold" style={{ color: fund.color }}>
                        {fund.initials}
                      </span>
                    </div>
                    <h3 className="font-bold text-primary mb-1">{fund.name}</h3>
                    <p className="text-sm text-muted-foreground">{fund.symbol}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let our expert fund managers handle your investments while you focus on your goals.
              </p>
              <Link href="/quote">
                <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                  Explore Mutual Funds
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ETFs */}
        <section className="py-16 md:py-24 bg-muted" id="etfs">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Exchange-Traded Funds (ETFs)
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Low-cost, transparent, and flexible investment options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Tech ETF", description: "Exposure to technology sector leaders" },
                { name: "Index ETF", description: "Track major market indices for broad exposure" },
                { name: "Dividend ETF", description: "High-dividend-yielding stocks" },
                { name: "Bond ETF", description: "Fixed-income securities for stability" },
                { name: "Sector ETF", description: "Focused exposure to specific industries" },
                { name: "Global ETF", description: "International market diversification" },
              ].map((etf) => (
                <Card key={etf.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-primary mb-2">{etf.name}</h3>
                    <p className="text-sm text-muted-foreground">{etf.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Trade ETFs like stocks with the diversification benefits of mutual funds.
              </p>
              <Link href="/quote">
                <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                  Invest in ETFs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Bonds */}
        <section className="py-16 md:py-24" id="bonds">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">Bonds</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Fixed-income securities for stable, predictable returns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Government Bonds", description: "Low-risk backed by government credit" },
                { name: "Corporate Bonds", description: "Higher yields from established companies" },
                { name: "Municipal Bonds", description: "Tax-advantaged local government bonds" },
                { name: "Treasury Bonds", description: "Long-term U.S. government securities" },
                { name: "High-Yield Bonds", description: "Higher returns with moderate risk" },
                { name: "International Bonds", description: "Diversified global fixed-income exposure" },
              ].map((bond) => (
                <Card key={bond.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-primary mb-2">{bond.name}</h3>
                    <p className="text-sm text-muted-foreground">{bond.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Build a stable income stream with predictable returns from quality bonds.
              </p>
              <Link href="/quote">
                <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                  Invest in Bonds
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Investment Goals */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Achieve Your Financial Goals
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Tailored investment strategies for every stage of your financial journey
              </p>
            </div>

            <div className="space-y-16">
              {/* Education Funds */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                    <GraduationCap className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-balance">
                    Education Funds
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Secure your children's educational future with dedicated investment plans that grow over time,
                    ensuring funds are available when needed for school fees and university expenses.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Flexible contribution options</h4>
                        <p className="text-sm text-muted-foreground">
                          Adjust your investment amounts based on your financial capacity
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Tax-efficient growth</h4>
                        <p className="text-sm text-muted-foreground">
                          Maximize returns with tax-optimized investment strategies
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Guaranteed maturity benefits</h4>
                        <p className="text-sm text-muted-foreground">
                          Assured returns when your child reaches educational milestones
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link href="/quote">
                    <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                      Get Education Funds Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <img
                    src="/education-funds-graduation-kenya.jpg"
                    alt="Education Funds"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <p className="text-white text-center font-serif text-lg px-4 text-balance">
                      "A graduation gown - the most valuable clothing item you can buy!"
                    </p>
                  </div>
                </div>
              </div>

              {/* Retirement Planning */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
                  <img
                    src="/retirement-planning-couple-kenya.jpg"
                    alt="Retirement Planning"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                    <PiggyBank className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-balance">
                    Retirement Planning
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Build a comfortable retirement with strategic investment plans designed to provide financial
                    security and peace of mind in your golden years.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Long-term wealth accumulation</h4>
                        <p className="text-sm text-muted-foreground">
                          Build substantial retirement savings through consistent investing
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Regular income in retirement</h4>
                        <p className="text-sm text-muted-foreground">
                          Structured payouts to support your lifestyle in retirement
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Inflation-protected returns</h4>
                        <p className="text-sm text-muted-foreground">
                          Investments designed to maintain purchasing power over time
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link href="/quote">
                    <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                      Get Retirement Planning Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Wealth Creation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                    <Home className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-balance">
                    Wealth Creation
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Grow your wealth systematically through disciplined investing, diversification, and professional
                    portfolio management tailored to your risk profile.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Diversified portfolio management</h4>
                        <p className="text-sm text-muted-foreground">
                          Spread investments across multiple asset classes for balanced growth
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Regular performance reviews</h4>
                        <p className="text-sm text-muted-foreground">
                          Quarterly assessments to ensure your portfolio stays on track
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Expert financial guidance</h4>
                        <p className="text-sm text-muted-foreground">
                          Personalized advice from experienced investment advisors
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link href="/quote">
                    <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                      Get Wealth Creation Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <img
                    src="/wealth-creation-financial-symbols-kenya.jpg"
                    alt="Wealth Creation"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Invest With Us */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                  Why Invest With Golden Eagle?
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Experience, expertise, and commitment to your financial success
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Trusted Partners</h3>
                    <p className="text-sm text-muted-foreground">
                      We work with internationally recognized investment firms with proven track records.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Expert Guidance</h3>
                    <p className="text-sm text-muted-foreground">
                      Our experienced advisors provide personalized investment strategies tailored to your goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Global Opportunities</h3>
                    <p className="text-sm text-muted-foreground">
                      Access international markets and diversify your portfolio across multiple asset classes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Transparent Reporting</h3>
                    <p className="text-sm text-muted-foreground">
                      Regular updates and clear reporting on your investment performance and portfolio status.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance text-secondary">
              Start Your Investment Journey Today
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto text-pretty">
              Speak with our investment advisors to create a personalized strategy for your financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
