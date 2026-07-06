"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Insurance" },
    { href: "/advisory", label: "Advisory" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/95 backdrop-blur">
      {/* Utility bar (institutional: contact + regulatory) */}
      <div className="hidden bg-primary text-white/85 md:block">
        <div className="container mx-auto flex h-9 items-center justify-between px-4 text-xs">
          <span className="tracking-wide">Insurance &amp; Global Markets Advisory · Westlands, Nairobi</span>
          <div className="flex items-center gap-6">
            <a href="tel:+254791389518" className="inline-flex items-center gap-1.5 transition-colors hover:text-secondary">
              <Phone className="h-3.5 w-3.5 text-secondary" /> +254 791 389 518
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
              src="/golden-eagle-logo.png"
              alt="Golden Eagle"
              width={44}
              height={44}
              className="h-10 w-10 md:h-11 md:w-11"
            />
            <div className="min-w-0 leading-tight">
              <span className="block font-serif text-lg font-bold tracking-tight text-primary md:text-xl">
                Golden Eagle
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.18em] text-primary/50 sm:block">
                Insurance &amp; Investments
              </span>
            </div>
          </Link>

          {/* Desktop nav: clean links with a gold underline for the active page */}
          <nav className="hidden items-center gap-7 md:flex">
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
            <Link href="/quote" className="hidden md:block">
              <Button className="rounded-md bg-secondary px-5 font-semibold text-primary hover:bg-secondary/90">
                Get a Quote
              </Button>
            </Link>

            <button
              className="p-1 text-primary md:hidden"
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
        <div className="border-t border-primary/10 bg-white md:hidden">
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
              href="tel:+254791389518"
              className="mt-1 flex items-center gap-2 border-t border-primary/10 py-3 pl-4 text-sm text-primary/70"
            >
              <Phone className="h-4 w-4 text-secondary" /> +254 791 389 518
            </a>
            <Link href="/quote" onClick={() => setMobileMenuOpen(false)} className="mb-3 mt-1">
              <Button className="w-full rounded-md bg-secondary font-semibold text-primary hover:bg-secondary/90">
                Get a Quote
              </Button>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
