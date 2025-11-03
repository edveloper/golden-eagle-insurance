"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+254722518485" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+254 722 518 485</span>
              </a>
              <a
                href="mailto:info@goldeneagleinsurance.co.ke"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@goldeneagleinsurance.co.ke</span>
              </a>
            </div>
            <div className="text-xs">
              <span>Trusted Insurance Partner Since 2006</span>
            </div>
          </div>
        </div>
      </div>
      /}
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/golden-eagle-logo.png"
              alt="Golden Eagle Logo"
              width={40}
              height={40}
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <span className="text-xl md:text-2xl font-serif font-bold text-primary">Golden Eagle</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
              Insurance Products
            </Link>
            <Link href="/investments" className="text-sm font-medium hover:text-primary transition-colors">
              Investments
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/quote" className="hidden md:block">
              <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">Get a Quote</Button>
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
              Insurance Products
            </Link>
            <Link href="/investments" className="text-sm font-medium hover:text-primary transition-colors">
              Investments
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/quote">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                Get a Quote
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
