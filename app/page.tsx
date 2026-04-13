"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { Features } from "@/components/features"
import { Demo } from "@/components/demo"
import { Pricing } from "@/components/pricing"
import { Industries } from "@/components/industries"
import { Benefits } from "@/components/benefits"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import type { Locale } from "@/lib/locale"

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("es")

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("tolentino-locale")

    if (savedLocale === "es" || savedLocale === "en") {
      setLocale(savedLocale)
      return
    }

    if (!window.navigator.language.toLowerCase().startsWith("es")) {
      setLocale("en")
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem("tolentino-locale", locale)
  }, [locale])

  useEffect(() => {
    const previousScrollRestoration =
      "scrollRestoration" in window.history ? window.history.scrollRestoration : null

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    if (!window.location.hash) {
      const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      resetScroll()
      window.requestAnimationFrame(resetScroll)
    }

    return () => {
      if (previousScrollRestoration) {
        window.history.scrollRestoration = previousScrollRestoration
      }
    }
  }, [])

  return (
    <main>
      <Navbar locale={locale} onLocaleChange={setLocale} />
      <Hero locale={locale} />
      <SocialProof locale={locale} />
      <Problem locale={locale} />
      <Solution locale={locale} />
      <Features locale={locale} />
      <Demo locale={locale} />
      <Pricing locale={locale} />
      <Industries locale={locale} />
      <Benefits locale={locale} />
      <FAQ locale={locale} />
      <FinalCTA locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
