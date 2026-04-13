"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Locale } from "@/lib/locale"

type FAQProps = {
  locale: Locale
}

export function FAQ({ locale }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const copy =
    locale === "es"
      ? {
          eyebrow: "FAQ",
          title: "Preguntas comunes, respuestas honestas.",
          items: [
            {
              question: "Cuanto tarda la implementacion?",
              answer:
                "La mayoria de despliegues quedan en vivo entre 5 y 10 dias habiles. Eso incluye llamada estrategica, personalizacion, integraciones, pruebas y entrega final.",
            },
            {
              question: "Se adapta a mi negocio?",
              answer:
                "Si. Tolentino IA no es una plantilla. Cada sistema se construye alrededor de tus productos, precios, lenguaje comercial y reglas de negocio.",
            },
            {
              question: "Funciona en espanol e ingles?",
              answer:
                "Si. La IA maneja ambos idiomas y cambia segun como escriba el lead. No requiere configuracion adicional.",
            },
            {
              question: "Entiende notas de voz?",
              answer:
                "Si. Cuando un lead manda un audio por WhatsApp, la IA lo transcribe, lo interpreta y responde con la misma inteligencia que en texto.",
            },
            {
              question: "Se conecta con Google Calendar y Zoom?",
              answer:
                "Si. Lee disponibilidad real del equipo, reserva reuniones en espacios abiertos y envia el enlace de Zoom automaticamente.",
            },
            {
              question: "Puedo probar una demo antes de comprar?",
              answer:
                "Si. Puedes usar la demo interactiva de esta pagina o escribirnos por WhatsApp para coordinar una llamada gratuita.",
            },
            {
              question: "El precio es fijo o personalizado?",
              answer:
                "Publicamos rangos para orientarte, pero la inversion exacta se define en una llamada gratuita segun complejidad, canales, integraciones y profundidad del sistema.",
            },
            {
              question: "Que pasa despues de comprar?",
              answer:
                "Asignamos un account manager, hacemos kickoff, construimos el sistema, lo probamos y lo desplegamos dentro del plazo acordado. El soporte y la optimizacion siguen incluidos.",
            },
          ],
        }
      : {
          eyebrow: "FAQ",
          title: "Common questions, honest answers.",
          items: [
            {
              question: "How long does setup take?",
              answer:
                "Most deployments go live in 5 to 10 business days. That includes the strategy call, customization, integrations, testing, and final handoff.",
            },
            {
              question: "Is it customized to my business?",
              answer:
                "Yes. Tolentino IA is not a plug-and-play template. Every system is built around your products, pricing, sales language, and business rules.",
            },
            {
              question: "Does it work in English and Spanish?",
              answer:
                "Yes. The AI handles both languages natively and switches based on how the lead writes or speaks.",
            },
            {
              question: "Can it understand voice notes?",
              answer:
                "Yes. When a lead sends a WhatsApp audio, the AI transcribes it, interprets it, and responds with the same intelligence as a text conversation.",
            },
            {
              question: "Can it connect with Google Calendar and Zoom?",
              answer:
                "Yes. It reads real team availability, books into open slots, and sends the Zoom link automatically.",
            },
            {
              question: "Can I try a demo before buying?",
              answer:
                "Yes. You can use the interactive demo on this page or message us on WhatsApp to book a free walkthrough.",
            },
            {
              question: "Is pricing fixed or customized?",
              answer:
                "We publish pricing ranges for guidance, but the final investment is scoped in a free strategy call based on complexity, channels, integrations, and automation depth.",
            },
            {
              question: "What happens after I buy?",
              answer:
                "You get a dedicated account manager, a kickoff session, full buildout, testing, deployment, and ongoing optimization support.",
            },
          ],
        }

  return (
    <section id="faq" className="bg-surface py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">{copy.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">{copy.title}</h2>
        </div>

        <div className="flex flex-col divide-y divide-border">
          {copy.items.map((faq, index) => (
            <div key={faq.question}>
              <button
                className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span
                  className={cn(
                    "text-base font-medium transition-colors duration-200",
                    openIndex === index ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                  )}
                >
                  {faq.question}
                </span>
                <span className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  {openIndex === index ? (
                    <Minus size={16} className="text-muted-foreground" />
                  ) : (
                    <Plus size={16} className="text-muted-foreground" />
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div className="pb-6 pr-8">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
