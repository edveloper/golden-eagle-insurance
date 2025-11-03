import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity cursor-pointer">
              <Image src="/golden-eagle-logo.png" alt="Golden Eagle Logo" width={32} height={32} className="h-11 w-11" />
              <h3 className="text-2xl font-serif font-bold text-secondary">Golden Eagle</h3>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Your trusted insurance and investment partner in Kenya since 2006, providing comprehensive coverage and
              wealth-building solutions for individuals and businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
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
          <div>
            <h4 className="font-semibold mb-4">Insurance Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products#motor" className="text-gray-300 hover:text-secondary transition-colors">
                  Motor Insurance
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
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
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

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Golden Eagle Insurance Agency Limited. All rights reserved.</p>
          <p className="mt-2">Licensed by the Insurance Regulatory Authority of Kenya</p>
        </div>
      </div>
    </footer>
  )
}