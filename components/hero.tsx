"use client"

import Link from "next/link"
import { ArrowRight, MessageSquare, Play } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/contact"
import { LiveDemoCard } from "@/components/live-demo-card"
import type { Locale } from "@/lib/locale"

type HeroProps = {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const copy =
    locale === "es"
      ? {
          badge: "Demo en vivo lista para usar",
          title: ["Haz que tu cliente", "pruebe la IA", "antes de leerla."],
          description:
            "La demo ya vive en la primera pantalla para que el visitante escriba de una y vea como Tolentino IA responde, califica y lleva la conversacion hacia la cita o la venta.",
          primaryCta: "Ver planes",
          secondaryCta: "Usar demo ahora",
          whatsappCta: "WhatsApp",
          trust: ["WhatsApp + web chat", "Lista en dias, no meses", "ES / EN"],
          demoHint: "Escribe una pregunta real y deja que la demo haga el resto.",
          metrics: {
            speed: "Responde en segundos",
            context: "Detecta contexto",
            booking: "Empuja hacia agenda",
          },
          scroll: "Desliza",
        }
      : {
          badge: "Live demo ready to use",
          title: ["Let the client", "try the AI", "before reading it."],
          description:
            "The demo now lives on the first screen so visitors can type immediately and feel how Tolentino IA replies, qualifies, and moves the conversation toward a meeting or a sale.",
          primaryCta: "View Pricing",
          secondaryCta: "Use Live Demo",
          whatsappCta: "WhatsApp",
          trust: ["WhatsApp + web chat", "Live in days, not months", "EN / ES"],
          demoHint: "Type a real question and let the demo take the lead.",
          metrics: {
            speed: "Replies in seconds",
            context: "Reads intent fast",
            booking: "Moves toward booking",
          },
          scroll: "Scroll",
        }

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eef2f5_0%,#e7ecf1_52%,#edf1f5_100%)] text-foreground min-h-screen flex flex-col justify-center">
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute -top-20 right-[-140px] h-[520px] w-[520px] rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, rgba(66,153,225,0.2), transparent 68%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 flex flex-col gap-8 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[oklch(0.55_0.18_250)] animate-pulse" aria-hidden="true" />
              <span className="text-xs text-slate-600 font-medium tracking-wide uppercase">{copy.badge}</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-normal leading-[1.05] text-balance text-slate-950">
              {copy.title[0]}
              <br />
              <span className="text-slate-500">{copy.title[1]}</span>
              <br />
              {copy.title[2]}
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">{copy.description}</p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 bg-slate-950 text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all duration-200"
              >
                {copy.primaryCta}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-900 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-slate-50 transition-all duration-200"
              >
                <Play size={14} className="fill-slate-900" />
                {copy.secondaryCta}
              </Link>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border border-slate-200 text-slate-600 px-6 py-3.5 rounded-full text-sm font-medium hover:text-slate-950 hover:border-slate-300 transition-all duration-200"
              >
                <MessageSquare size={14} />
                {copy.whatsappCta}
              </Link>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-slate-500">{copy.demoHint}</p>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-600 shadow-sm">
                {copy.metrics.speed}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-600 shadow-sm">
                {copy.metrics.context}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-600 shadow-sm">
                {copy.metrics.booking}
              </span>
            </div>

            <p className="text-xs text-slate-400 flex items-center gap-4">
              {copy.trust.map((item, index) => (
                <span key={item} className="contents">
                  {index > 0 && <span className="w-px h-3 bg-slate-300" aria-hidden="true" />}
                  <span>{item}</span>
                </span>
              ))}
            </p>
          </div>

          <div className="order-1 relative flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-xl">
              <LiveDemoCard locale={locale} variant="hero" id="demo" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center gap-2 opacity-30">
            <div className="w-px h-8 bg-slate-500" aria-hidden="true" />
            <span className="text-xs text-slate-500 uppercase tracking-widest">{copy.scroll}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
