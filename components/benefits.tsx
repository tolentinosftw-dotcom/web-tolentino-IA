import { TrendingUp, CalendarCheck, UserCheck, Clock, BarChart3, Scale } from "lucide-react"
import type { Locale } from "@/lib/locale"

type BenefitsProps = {
  locale: Locale
}

const icons = [Clock, CalendarCheck, UserCheck, TrendingUp, BarChart3, Scale]

export function Benefits({ locale }: BenefitsProps) {
  const copy =
    locale === "es"
      ? {
          eyebrow: "Resultados",
          title: "Lo que cambia cuando automatizas tus conversaciones.",
          description:
            "Las funciones son el medio. Lo importante es el resultado que Tolentino IA produce en tu operacion y en tu caja.",
          items: [
            {
              metric: "< 3 segundos",
              title: "Respuesta mas rapida",
              description: "Cada lead recibe respuesta antes de irse con la competencia.",
            },
            {
              metric: "2x promedio",
              title: "Mas reuniones",
              description: "Cuando la IA agenda automaticamente, la friccion desaparece y las citas suben.",
            },
            {
              metric: "Solo calificados",
              title: "Mejor calificacion",
              description: "Tu calendario se llena con prospectos de mejor intencion.",
            },
            {
              metric: "80% menos",
              title: "Menos trabajo manual",
              description: "Tu equipo deja de contestar siempre las mismas preguntas.",
            },
            {
              metric: "Mayor CVR",
              title: "Mejor proceso comercial",
              description: "Un flujo consistente convierte mejor que depender del humor o memoria del vendedor.",
            },
            {
              metric: "Escala total",
              title: "Operacion mas escalable",
              description: "Atiende 1 o 1,000 leads al mismo tiempo sin contratar de mas.",
            },
          ],
        }
      : {
          eyebrow: "Business outcomes",
          title: "What changes when you automate your sales conversations.",
          description:
            "Features are the means. Outcomes are what matter. This is what Tolentino IA changes in your operation and in your revenue.",
          items: [
            {
              metric: "< 3 seconds",
              title: "Faster lead response",
              description: "Every lead gets a reply before they bounce to a competitor.",
            },
            {
              metric: "2x average",
              title: "More booked meetings",
              description: "When AI handles scheduling, more prospects actually complete the booking.",
            },
            {
              metric: "Only qualified",
              title: "Better qualification",
              description: "Your calendar fills with higher-intent prospects instead of empty calls.",
            },
            {
              metric: "80% less",
              title: "Less manual work",
              description: "Your team stops repeating the same answers and steps in later in the cycle.",
            },
            {
              metric: "Higher CVR",
              title: "Stronger sales process",
              description: "A consistent conversation flow outperforms ad hoc selling.",
            },
            {
              metric: "Full scale",
              title: "More scalable operations",
              description: "Handle 1 or 1,000 leads at the same time without adding headcount.",
            },
          ],
        }

  return (
    <section className="bg-background py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">{copy.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance mb-5">{copy.title}</h2>
          <p className="text-base text-muted-foreground leading-relaxed">{copy.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.items.map((outcome, index) => {
            const Icon = icons[index]

            return (
              <div
                key={outcome.title}
                className="group p-7 rounded-2xl border border-border hover:border-foreground/20 transition-all duration-200 hover:bg-surface/40"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-foreground/5 transition-colors">
                    <Icon size={18} className="text-muted-foreground" />
                  </div>
                  <span className="text-xs font-semibold text-foreground bg-muted rounded-full px-3 py-1">
                    {outcome.metric}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{outcome.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{outcome.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
