import { Clock, UserX, MessageSquareOff, CalendarX, Repeat } from "lucide-react"
import type { Locale } from "@/lib/locale"

type ProblemProps = {
  locale: Locale
}

const icons = [Clock, UserX, MessageSquareOff, CalendarX, Repeat]

export function Problem({ locale }: ProblemProps) {
  const copy =
    locale === "es"
      ? {
          eyebrow: "La realidad",
          title: "Muchos negocios pierden ingresos en sus conversaciones.",
          description:
            "Cada mensaje sin respuesta, cada demora y cada llamada mal calificada tiene un costo que casi nunca aparece en una hoja de calculo, pero se acumula. Aqui es donde se te esta escapando dinero.",
          divider: "5 vacios criticos",
          items: [
            {
              title: "Respuestas lentas",
              description: "Cuando tu equipo responde, el lead ya hablo con la competencia. La velocidad cierra ventas.",
            },
            {
              title: "Leads perdidos",
              description: "Los mensajes llegan a toda hora. Sin automatizacion, las noches y fines de semana te cuestan dinero.",
            },
            {
              title: "Preguntas repetidas",
              description: "Tu equipo responde cientos de veces lo mismo sobre precios, disponibilidad y proceso.",
            },
            {
              title: "Llamadas poco calificadas",
              description: "Agendar con cualquiera llena el calendario de reuniones de baja intencion que no avanzan.",
            },
            {
              title: "Sin escala comercial",
              description: "Las conversaciones manuales no escalan. Todo depende de quien este libre, no de un sistema.",
            },
          ],
        }
      : {
          eyebrow: "The reality",
          title: "Most businesses are losing revenue inside their conversations.",
          description:
            "Every unanswered message, slow reply, and unqualified call has a cost that rarely shows on a spreadsheet, but it compounds. This is where revenue is leaking today.",
          divider: "5 critical gaps",
          items: [
            {
              title: "Slow response times",
              description: "By the time your team replies, the lead has already contacted a competitor.",
            },
            {
              title: "Missed and lost leads",
              description: "Leads arrive at all hours. Without automation, evenings and weekends cost you revenue.",
            },
            {
              title: "Repetitive questions",
              description: "Your team keeps answering the same pricing, availability, and process questions.",
            },
            {
              title: "Low-intent calls",
              description: "Booking calls with everyone fills your calendar with conversations that go nowhere.",
            },
            {
              title: "No sales process at scale",
              description: "Manual conversations do not scale. Everything depends on who happens to be available.",
            },
          ],
        }

  return (
    <section className="bg-background py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">{copy.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight text-balance mb-6">
              {copy.title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">{copy.description}</p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" aria-hidden="true" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{copy.divider}</span>
              <div className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {copy.items.map((point, index) => {
              const Icon = icons[index]

              return (
                <div
                  key={point.title}
                  className="group flex gap-5 p-5 rounded-2xl border border-border hover:border-foreground/20 transition-all duration-200 hover:bg-surface/60"
                >
                  <div className="flex-shrink-0 flex flex-col items-center gap-2 pt-0.5">
                    <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center group-hover:bg-foreground/5 transition-colors">
                      <Icon size={16} className="text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground/40 font-mono">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
