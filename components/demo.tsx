"use client"

import { ArrowRight } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/contact"
import { LiveDemoCard } from "@/components/live-demo-card"
import type { Locale } from "@/lib/locale"

type DemoProps = {
  locale: Locale
}

export function Demo({ locale }: DemoProps) {
  const copy =
    locale === "es"
      ? {
          eyebrow: "Demo interactiva",
          title: "La experiencia ya abre la pagina.",
          mutedTitle: "Aqui la llevamos a tu caso.",
          description:
            "La pusimos arriba para que el cliente la use de primeras. En esta seccion reforzamos lo que pasa cuando entrenamos el asistente con tu oferta, FAQs, objeciones y agenda real.",
          highlights: [
            "Se adapta a tu catalogo, procesos y equipo comercial",
            "Puede responder objeciones, precios y disponibilidad",
            "Empuja la conversacion hacia cita, formulario o WhatsApp",
            "Bilingue para experiencias en espanol e ingles",
          ],
          cta: "Pedir demo completa",
        }
      : {
          eyebrow: "Interactive Demo",
          title: "The experience now opens the page.",
          mutedTitle: "Here we tailor it to your use case.",
          description:
            "We moved it to the top so visitors can use it immediately. In this section we reinforce what happens when we train the assistant on your offer, FAQs, objections, and real scheduling flow.",
          highlights: [
            "Adapts to your catalog, process, and sales team",
            "Handles objections, pricing, and availability",
            "Pushes the conversation toward booking, forms, or WhatsApp",
            "Bilingual across English and Spanish experiences",
          ],
          cta: "Book a Full Demo Call",
        }

  return (
    <section className="bg-surface py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">{copy.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance mb-6">
              {copy.title}
              <br />
              <span className="text-muted-foreground">{copy.mutedTitle}</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">{copy.description}</p>

            <ul className="flex flex-col gap-3 mb-8">
              {copy.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors duration-200"
            >
              {copy.cta}
              <ArrowRight size={16} />
            </a>
          </div>

          <LiveDemoCard locale={locale} />
        </div>
      </div>
    </section>
  )
}
