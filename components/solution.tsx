import { ArrowRight } from "lucide-react"
import type { Locale } from "@/lib/locale"

type SolutionProps = {
  locale: Locale
}

export function Solution({ locale }: SolutionProps) {
  const copy =
    locale === "es"
      ? {
          eyebrow: "Como funciona",
          title: "Del primer mensaje a la reunion agendada.",
          mutedTitle: "Todo automatizado.",
          description:
            "Tolentino IA actua como un vendedor que no duerme, no se cansa y siempre sigue tu proceso al detalle.",
          steps: [
            { step: "01", title: "El lead escribe", detail: "Por WhatsApp o web chat, en cualquier momento." },
            { step: "02", title: "La IA responde al instante", detail: "Menos de 3 segundos, siempre." },
            { step: "03", title: "Entiende texto y audios", detail: "Transcribe e interpreta notas de voz con naturalidad." },
            { step: "04", title: "Califica al prospecto", detail: "Hace las preguntas correctas y detecta interes real." },
            { step: "05", title: "Resuelve dudas", detail: "Contesta preguntas sobre precios, cupos y FAQs." },
            { step: "06", title: "Guia sobre precios", detail: "Sugiere la oferta correcta segun el contexto." },
            { step: "07", title: "Agenda una reunion", detail: "Consulta disponibilidad y confirma al instante." },
            { step: "08", title: "Tu equipo cierra", detail: "Recibe un prospecto mucho mas listo para comprar." },
          ],
          cta: "Verlo en accion",
        }
      : {
          eyebrow: "How it works",
          title: "From first message to booked meeting.",
          mutedTitle: "Fully automated.",
          description:
            "Tolentino IA acts like a tireless sales rep that never sleeps, never gets tired, and always follows your process.",
          steps: [
            { step: "01", title: "Lead sends a message", detail: "WhatsApp or web chat, any hour of the day." },
            { step: "02", title: "AI replies instantly", detail: "Under 3 seconds, every single time." },
            { step: "03", title: "AI understands text and voice", detail: "It transcribes and interprets voice notes naturally." },
            { step: "04", title: "AI qualifies the lead", detail: "It asks the right questions and filters for intent." },
            { step: "05", title: "AI answers questions", detail: "It handles pricing, availability, and FAQ replies." },
            { step: "06", title: "AI guides on pricing", detail: "It points to the right offer based on the context." },
            { step: "07", title: "AI books the meeting", detail: "It checks availability and confirms instantly." },
            { step: "08", title: "Your team closes the deal", detail: "They receive a lead that is far more ready to buy." },
          ],
          cta: "See It In Action",
        }

  return (
    <section id="solution" className="bg-surface py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">{copy.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance mb-5">
            {copy.title}
            <br className="hidden md:block" />
            <span className="text-muted-foreground">{copy.mutedTitle}</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">{copy.description}</p>
        </div>

        <div className="relative">
          <div
            className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden sm:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6">
            {copy.steps.map((step, index) => (
              <div
                key={step.step}
                className={`relative flex items-start gap-6 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  } pl-12 md:pl-0`}
                >
                  <div className="inline-block bg-background border border-border rounded-2xl px-5 py-4 text-left group hover:border-foreground/20 transition-colors duration-200">
                    <p className="text-xs text-muted-foreground font-mono mb-1.5">{step.step}</p>
                    <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{step.detail}</p>
                  </div>
                </div>

                <div className="absolute sm:relative left-0 sm:left-auto flex-shrink-0 flex items-center justify-center w-12 mt-3 sm:mt-0">
                  <div className="w-3 h-3 rounded-full bg-foreground border-4 border-surface z-10" aria-hidden="true" />
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors duration-200"
          >
            {copy.cta}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
