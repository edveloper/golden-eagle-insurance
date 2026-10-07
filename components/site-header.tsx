"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Shadow once the page scrolls. Nothing here changes layout height, so there's no feedback loop:
  // the utility bar simply scrolls away because the header sticks 36px above the viewport on md+.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Insurance" },
    { href: "/advisory", label: "Advisory" },
    { href: "/claims", label: "Claims" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-paper transition-shadow duration-300 md:-top-9 ${
        scrolled ? "border-primary/10 shadow-[0_6px_24px_rgba(10,29,55,0.08)]" : "border-primary/10"
      }`}
    >
      {/* Utility bar (institutional: contact + regulatory); scrolls out of view under the sticky offset */}
      <div className="hidden bg-primary text-white/85 md:block">
        <div className="container mx-auto flex h-9 items-center justify-between px-4 text-xs">
          <span className="tracking-wide">Insurance &amp; Investment Advice · Nairobi</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-secondary">
              <Phone className="h-3.5 w-3.5 text-gold-ink" /> {PHONE_DISPLAY}
            </a>
            <span className="text-white/45">Licensed by the IRA · Reg. No. 11611</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/images/eagle-mark.png"
              alt="Golden Eagle"
              width={893}
              height={660}
              priority
              className="h-8 w-auto md:h-9"
            />
            <div className="inline-flex min-w-0 flex-col">
              <span className="font-serif text-lg uppercase leading-none tracking-[0.09em] text-primary md:text-[1.4rem]">
                Golden Eagle
              </span>
              <span className="mt-1.5 hidden whitespace-nowrap border-t border-gold-ink/50 pt-1.5 text-[8.5px] font-semibold uppercase leading-none tracking-[0.3em] text-gold-ink sm:block">
                Insurance &amp; Investments
              </span>
            </div>
          </Link>

          {/* Desktop nav: clean links with a gold underline for the active page */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-primary" : "text-primary/60 hover:text-primary"
                }`}
              >
                {item.label}
                {isActive(item.href) ? (
                  <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-secondary" aria-hidden="true" />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Button className="hidden lg:inline-flex rounded-md bg-secondary px-5 font-semibold text-primary hover:bg-secondary/90" asChild>
              <Link href="/quote">
                Get a Quote
              </Link>
            </Button>

            <button
              className="p-1 text-primary lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen ? (
        <div className="border-t border-primary/10 bg-white lg:hidden">
          <nav className="container mx-auto flex flex-col px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-l-2 py-3 pl-4 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "border-secondary text-primary"
                    : "border-transparent text-primary/70 hover:border-primary/20 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-1 flex items-center gap-2 border-t border-primary/10 py-3 pl-4 text-sm text-primary/70"
            >
              <Phone className="h-4 w-4 text-gold-ink" /> {PHONE_DISPLAY}
            </a>
            <Button className="mb-3 mt-1 w-full rounded-md bg-secondary font-semibold text-primary hover:bg-secondary/90" asChild>
              <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
