"use client"

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, FileText, Menu, MessageCircle, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { whatsappHref } from "@/components/whatsapp-button"
import { BUSINESS_HOURS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Insurance" },
  { href: "/advisory", label: "Advisory" },
  { href: "/claims", label: "Claims" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const menuButton = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLDivElement>(null)

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  const closeMenu = useCallback((returnFocus = false) => {
    setMenuOpen(false)
    if (returnFocus) menuButton.current?.focus()
  }, [])

  // Shadow once the page scrolls. Nothing here changes layout height, so there's no feedback loop:
  // the utility bar simply scrolls away because the header sticks 36px above the viewport on md+.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Any navigation (link, back button) closes the menu.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // While open: Esc closes, the page behind can't scroll, focus moves into the panel,
  // and widening to desktop size closes it.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu(true)
    }
    const desktop = window.matchMedia("(min-width: 1024px)")
    const onDesktop = () => desktop.matches && closeMenu()
    document.addEventListener("keydown", onKey)
    desktop.addEventListener("change", onDesktop)
    const root = document.documentElement
    const previousOverflow = root.style.overflow
    root.style.overflow = "hidden"
    panel.current?.focus({ preventScroll: true })
    return () => {
      document.removeEventListener("keydown", onKey)
      desktop.removeEventListener("change", onDesktop)
      root.style.overflow = previousOverflow
    }
  }, [menuOpen, closeMenu])

  const barItem = "flex flex-1 flex-col items-center justify-center gap-1 py-3 text-[11px] font-semibold"

  return (
    <header className="sticky top-0 z-50 w-full md:-top-9">
      {/* Mobile menu backdrop: tapping anywhere outside the menu closes it. Sits behind the bar and panel. */}
      {menuOpen ? (
        <div
          className="animate-in fade-in fixed inset-0 -z-10 bg-primary/45 backdrop-blur-[2px] duration-200 lg:hidden"
          onClick={() => closeMenu()}
          aria-hidden="true"
        />
      ) : null}

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
      <div
        className={`border-b border-primary/10 bg-paper transition-shadow duration-300 ${
          scrolled || menuOpen ? "shadow-[0_6px_24px_rgba(10,29,55,0.08)]" : ""
        }`}
      >
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
              <Button
                className="hidden lg:inline-flex rounded-md bg-secondary px-5 font-semibold text-primary hover:bg-secondary/90"
                asChild
              >
                <Link href="/quote">Get a Quote</Link>
              </Button>

              {/* Mobile menu toggle, styled as a bar cell like the bottom action bar */}
              <button
                ref={menuButton}
                type="button"
                className="-mr-4 flex h-16 w-20 flex-col items-center justify-center gap-1 border-l border-primary/10 text-[11px] font-semibold text-primary transition-colors hover:bg-mist md:h-20 lg:hidden"
                onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X className="h-5 w-5 text-gold-ink" /> : <Menu className="h-5 w-5 text-gold-ink" />}
                {menuOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen ? (
        <div
          id="mobile-menu"
          ref={panel}
          tabIndex={-1}
          className="animate-in fade-in slide-in-from-top-2 absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-primary/10 bg-paper shadow-[0_18px_40px_rgba(10,29,55,0.18)] duration-200 focus:outline-none lg:hidden"
        >
          <nav aria-label="Main" className="container mx-auto px-4">
            <ul>
              {navItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <li key={item.href} className="border-b border-primary/10">
                    <Link
                      href={item.href}
                      onClick={() => closeMenu()}
                      aria-current={active ? "page" : undefined}
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`h-1.5 w-1.5 shrink-0 ${active ? "bg-secondary" : "bg-transparent"}`}
                          aria-hidden="true"
                        />
                        <span className={`font-serif text-2xl ${active ? "text-primary" : "text-primary/75"}`}>
                          {item.label}
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-gold-ink transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Same actions, same style as the bottom bar */}
          <div className="flex border-b border-primary/10">
            <a href={`tel:${PHONE_TEL}`} className={`${barItem} text-primary`}>
              <Phone className="h-5 w-5 text-gold-ink" />
              Call
            </a>
            <a
              href={whatsappHref(pathname)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${barItem} border-x border-primary/10 text-primary`}
            >
              <MessageCircle className="h-5 w-5 text-[#1da851]" />
              WhatsApp
            </a>
            <Link href="/quote" onClick={() => closeMenu()} className={`${barItem} bg-secondary text-primary`}>
              <FileText className="h-5 w-5" />
              Get a Quote
            </Link>
          </div>

          <div className="container mx-auto space-y-1 px-4 py-4 text-xs text-muted-foreground">
            <p>{BUSINESS_HOURS.slice(0, 2).join(" · ")}</p>
            <p>Licensed by the IRA · Reg. No. 11611</p>
          </div>
        </div>
      ) : null}
    </header>
  )
}
