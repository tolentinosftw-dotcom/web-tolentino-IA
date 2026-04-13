"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { WHATSAPP_URL } from "@/lib/contact"
import type { Locale } from "@/lib/locale"

type NavbarProps = {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function Navbar({ locale, onLocaleChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const copy =
    locale === "es"
      ? {
          links: [
            { label: "Solucion", href: "#solution" },
            { label: "Funciones", href: "#features" },
            { label: "Planes", href: "#pricing" },
            { label: "Industrias", href: "#industries" },
            { label: "FAQ", href: "#faq" },
          ],
          liveDemo: "Demo en vivo",
          getStarted: "Empezar",
        }
      : {
          links: [
            { label: "Solution", href: "#solution" },
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "Industries", href: "#industries" },
            { label: "FAQ", href: "#faq" },
          ],
          liveDemo: "Live Demo",
          getStarted: "Get Started",
        }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "max-w-7xl mx-auto overflow-hidden rounded-[28px] border backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "bg-background/96 border-border shadow-[0_16px_50px_-28px_rgba(17,17,17,0.45)]"
            : "bg-background/88 border-white/70 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.65)]"
        )}
      >
        <nav className="px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Tolentino IA home">
            <div className="w-7 h-7 rounded-md bg-foreground flex items-center justify-center">
              <span className="text-background text-xs font-bold tracking-tight">T</span>
            </div>
            <span className="font-semibold text-sm tracking-tight text-foreground">
              Tolentino<span className="text-accent"> IA</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-6" role="list">
            {copy.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center rounded-full border border-border bg-muted/70 p-1">
              {(["es", "en"] as Locale[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => onLocaleChange(option)}
                  aria-pressed={locale === option}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                    locale === option
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {option.toUpperCase()}
                </button>
              ))}
            </div>
            <Link
              href="#demo"
              className="navbar-cta-pulse-delay inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-foreground/25 hover:bg-muted"
            >
              {copy.liveDemo}
            </Link>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-cta-pulse inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors duration-200 hover:bg-foreground/90"
            >
              {copy.getStarted}
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden border-t border-border/80 bg-background/95 px-6 pb-6">
            <div className="flex items-center justify-center pt-4">
              <div className="flex items-center rounded-full border border-border bg-muted/70 p-1">
                {(["es", "en"] as Locale[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => onLocaleChange(option)}
                    aria-pressed={locale === option}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                      locale === option
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {option.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <ul className="flex flex-col gap-4 pt-4" role="list">
              {copy.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 mt-6">
              <Link
                href="#demo"
                className="navbar-cta-pulse-delay text-sm text-center border border-border rounded-full py-2.5 text-foreground hover:bg-muted transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {copy.liveDemo}
              </Link>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-cta-pulse text-sm text-center bg-foreground text-background rounded-full py-2.5 font-medium hover:bg-foreground/90 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {copy.getStarted}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
