"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { Menu, X, Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Insurance Products" },
    { href: "/investments", label: "Investments" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto px-4">
        <div className="flex h-[4.5rem] items-center justify-between gap-4 py-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/golden-eagle-logo.png"
              alt="Golden Eagle Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full ring-1 ring-secondary/35 md:h-11 md:w-11"
            />
            <div>
              <span className="block text-xl font-serif font-bold tracking-tight text-primary md:text-2xl">
                Golden Eagle
              </span>
              <span className="hidden text-xs text-primary/65 md:block">Insurance & Investments</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="glass-panel hidden items-center rounded-full border border-primary/10 px-2 py-1 shadow-[0_6px_24px_rgba(10,29,55,0.08)] md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-primary/85 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+254791389518" className="hidden items-center gap-2 text-sm text-primary/80 lg:flex">
              <Phone className="h-4 w-4 text-secondary" />
              +254 791 389 518
            </a>
            <Link href="/quote" className="hidden md:block">
              <Button className="bg-secondary px-5 font-semibold text-primary shadow-[0_10px_30px_rgba(197,161,0,0.35)] hover:bg-secondary/90">
                Get a Quote
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="rounded-md border border-primary/15 p-2 text-primary md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-primary/10 bg-white/95 md:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive ? "bg-primary text-white" : "text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              )
            })}
            <Link href="/quote">
              <Button className="mt-2 w-full bg-secondary font-semibold text-primary hover:bg-secondary/90">
                Get a Quote
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
