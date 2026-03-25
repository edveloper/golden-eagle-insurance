import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(197,161,0,0.14),transparent_34%),radial-gradient(circle_at_88%_84%,rgba(0,119,190,0.18),transparent_38%)]" />
      <div className="container relative mx-auto px-4 pt-14 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <Link href="/" className="mb-4 flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80">
              <Image src="/golden-eagle-logo.png" alt="Golden Eagle Logo" width={32} height={32} className="h-11 w-11 rounded-full ring-1 ring-secondary/40" />
              <h3 className="text-2xl font-serif font-bold text-secondary">Golden Eagle</h3>
            </Link>
            <p className="mb-4 text-sm text-gray-300">
              Your trusted insurance and investment partner since 2006, providing comprehensive coverage and
              wealth-building solutions for individuals and businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="rounded-full border border-white/15 p-2 text-gray-300 transition-colors hover:text-secondary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full border border-white/15 p-2 text-gray-300 transition-colors hover:text-secondary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full border border-white/15 p-2 text-gray-300 transition-colors hover:text-secondary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full border border-white/15 p-2 text-gray-300 transition-colors hover:text-secondary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h4 className="mb-4 font-semibold text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-secondary transition-colors">
                  Insurance Products
                </Link>
              </li>
              <li>
                <Link href="/investments" className="text-gray-300 hover:text-secondary transition-colors">
                  Investments
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-secondary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Insurance Products */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h4 className="mb-4 font-semibold text-secondary">Insurance Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products#professional-indemnity" className="text-gray-300 hover:text-secondary transition-colors">
                  Professional Indemnity
                </Link>
              </li>
              <li>
                <Link href="/products#health" className="text-gray-300 hover:text-secondary transition-colors">
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link href="/products#life" className="text-gray-300 hover:text-secondary transition-colors">
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link href="/products#property" className="text-gray-300 hover:text-secondary transition-colors">
                  Property Insurance
                </Link>
              </li>
              <li>
                <Link href="/products#business" className="text-gray-300 hover:text-secondary transition-colors">
                  Business Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h4 className="mb-4 font-semibold text-secondary">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Maruti Court
                  <br />
                  East Church Road, Westlands
                  <br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+254791389518" className="text-gray-300 hover:text-secondary transition-colors">
                    +254 791 389 518
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@goldeneagle.co.ke"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  info@goldeneagle.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center text-sm text-gray-300 pb-4">
          <p>&copy; {new Date().getFullYear()} Golden Eagle Insurance Agency Limited. All rights reserved.</p>
          <p className="mt-2">Licensed by the Insurance Regulatory Authority of Kenya</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-gray-300 hover:text-secondary transition-colors">
              Cookie Policy
            </Link>
            <Link href="/terms-of-use" className="text-gray-300 hover:text-secondary transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
