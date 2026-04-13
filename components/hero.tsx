"use client"

import Link from "next/link"
import { ArrowRight, Calendar, MessageSquare, Play } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/contact"
import type { Locale } from "@/lib/locale"

type HeroProps = {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const copy =
    locale === "es"
      ? {
          badge: "Automatizacion de ventas con IA",
          title: ["Tu equipo comercial", "trabaja mientras", "descansas."],
          description:
            "Tolentino IA responde al instante, califica leads, resuelve preguntas y agenda reuniones de forma automatica en WhatsApp y web chat. Hecho para negocios que quieren crecer en serio.",
          primaryCta: "Comprar",
          secondaryCta: "Probar demo",
          whatsappCta: "WhatsApp",
          trust: ["Sin permanencia en planes mensuales", "Activo en dias, no meses", "ES / EN"],
          chat: {
            status: "Activo",
            channel: "WhatsApp",
            incomingMessage: "Hola, cuanto cuesta tu apartamento de 3 habitaciones?",
            aiMessage:
              "Buena pregunta. Nuestros apartamentos de 3 habitaciones van desde $285,000 hasta $340,000 segun piso y vista. Buscas inversion o vivienda propia? Puedo ayudarte a calificar lo que necesitas y conectarte con el asesor ideal.",
            voiceUnderstood: "Audio entendido",
            voiceReply:
              "Entendi que prefieres las unidades con vista sur. Ya deje agendada una llamada con nuestro especialista para manana a las 10:00 a. m.",
            meetingBooked: "Reunion agendada",
            meetingMeta: "Manana - 10:00 AM - Zoom",
            confirmed: "Confirmado",
            responseTime: "Tiempo de respuesta",
            alwaysOn: "Siempre activo",
          },
          scroll: "Desliza",
        }
      : {
          badge: "AI Sales Automation",
          title: ["Your sales team", "works while", "you sleep."],
          description:
            "Tolentino IA replies instantly, qualifies leads, answers questions, and books meetings automatically on WhatsApp and web chat. Built for businesses serious about growth.",
          primaryCta: "Buy Now",
          secondaryCta: "Try Live Demo",
          whatsappCta: "WhatsApp",
          trust: ["No long-term lock-in on monthly plans", "Live in days, not months", "EN / ES"],
          chat: {
            status: "Active",
            channel: "WhatsApp",
            incomingMessage: "Hi, how much does your 3BR apartment cost?",
            aiMessage:
              "Great question. Our 3BR units range from $285,000 to $340,000 depending on floor and view. Are you looking for investment or personal use? I can qualify your needs and connect you with the right advisor.",
            voiceUnderstood: "Voice note understood",
            voiceReply:
              "I heard that you prefer the south-facing units. I just scheduled a call with our specialist for tomorrow at 10:00 AM.",
            meetingBooked: "Meeting Booked",
            meetingMeta: "Tomorrow - 10:00 AM - Zoom",
            confirmed: "Confirmed",
            responseTime: "Response time",
            alwaysOn: "Always on",
          },
          scroll: "Scroll",
        }

  return (
    <section className="relative bg-[var(--hero-bg)] text-[var(--hero-foreground)] overflow-hidden min-h-screen flex flex-col justify-center">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.18 250), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-[oklch(0.55_0.18_250)] animate-pulse" aria-hidden="true" />
              <span className="text-xs text-white/70 font-medium tracking-wide uppercase">{copy.badge}</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-normal leading-[1.05] text-balance text-white">
              {copy.title[0]}
              <br />
              <span className="text-white/40">{copy.title[1]}</span>
              <br />
              {copy.title[2]}
            </h1>

            <p className="text-lg text-white/60 leading-relaxed max-w-lg">{copy.description}</p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-all duration-200"
              >
                {copy.primaryCta}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-white/15 transition-all duration-200"
              >
                <Play size={14} className="fill-white" />
                {copy.secondaryCta}
              </Link>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border border-white/15 text-white/70 px-6 py-3.5 rounded-full text-sm font-medium hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <MessageSquare size={14} />
                {copy.whatsappCta}
              </Link>
            </div>

            <p className="text-xs text-white/30 flex items-center gap-4">
              {copy.trust.map((item, index) => (
                <span key={item} className="contents">
                  {index > 0 && <span className="w-px h-3 bg-white/20" aria-hidden="true" />}
                  <span>{item}</span>
                </span>
              ))}
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-9 h-9 rounded-full bg-[oklch(0.55_0.18_250)]/30 border border-[oklch(0.55_0.18_250)]/50 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">AI</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Tolentino IA</p>
                    <p className="text-xs text-white/40 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" aria-hidden="true" />
                      {copy.chat.status}
                    </p>
                  </div>
                  <div className="ml-auto text-xs text-white/30">{copy.chat.channel}</div>
                </div>

                <div className="flex flex-col gap-3 py-4">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="bg-white/8 border border-white/8 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[75%]">
                      <p className="text-xs text-white/80">{copy.chat.incomingMessage}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 justify-end">
                    <div className="bg-[oklch(0.55_0.18_250)]/20 border border-[oklch(0.55_0.18_250)]/30 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
                      <p className="text-xs text-white/90">{copy.chat.aiMessage}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="bg-white/8 border border-white/8 rounded-2xl rounded-tl-sm px-3 py-2 flex items-center gap-2 max-w-[70%]">
                      <Play size={10} className="fill-white/60 text-white/60 flex-shrink-0" />
                      <div className="flex gap-0.5 items-center h-4">
                        {[3, 5, 7, 4, 6, 8, 5, 3, 6, 7, 4, 5].map((height, index) => (
                          <div
                            key={index}
                            className="w-0.5 bg-white/40 rounded-full"
                            style={{ height: `${height * 2}px` }}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-white/40">0:08</span>
                    </div>
                  </div>

                  <div className="flex gap-2 justify-end">
                    <div className="bg-[oklch(0.55_0.18_250)]/20 border border-[oklch(0.55_0.18_250)]/30 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
                      <p className="text-xs text-white/70 italic mb-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.55_0.18_250)] inline-block" aria-hidden="true" />
                        {copy.chat.voiceUnderstood}
                      </p>
                      <p className="text-xs text-white/90">{copy.chat.voiceReply}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-xl px-3 py-2.5">
                  <Calendar size={14} className="text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-white/90">{copy.chat.meetingBooked}</p>
                    <p className="text-xs text-white/40">{copy.chat.meetingMeta}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs text-green-400 font-medium">{copy.chat.confirmed}</span>
                  </div>
                </div>
              </div>

              <div className="absolute -left-10 top-16 bg-white/[0.08] border border-white/10 backdrop-blur-sm rounded-xl px-3 py-2 hidden lg:block">
                <p className="text-2xl font-semibold text-white">{"< 3s"}</p>
                <p className="text-xs text-white/40">{copy.chat.responseTime}</p>
              </div>

              <div className="absolute -right-8 bottom-20 bg-white/[0.08] border border-white/10 backdrop-blur-sm rounded-xl px-3 py-2 hidden lg:block">
                <p className="text-2xl font-semibold text-white">24/7</p>
                <p className="text-xs text-white/40">{copy.chat.alwaysOn}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center gap-2 opacity-30">
            <div className="w-px h-8 bg-white" aria-hidden="true" />
            <span className="text-xs text-white uppercase tracking-widest">{copy.scroll}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
