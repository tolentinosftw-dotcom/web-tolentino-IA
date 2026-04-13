import { Building2, Megaphone, GraduationCap, ArrowRight } from "lucide-react"
import type { Locale } from "@/lib/locale"

type IndustriesProps = {
  locale: Locale
}

const icons = [Building2, Megaphone, GraduationCap]

export function Industries({ locale }: IndustriesProps) {
  const copy =
    locale === "es"
      ? {
          eyebrow: "Industrias",
          title: "Hecho para tu industria,",
          mutedTitle: "no solo para tu categoria.",
          description:
            "Tolentino IA no es una solucion generica. Cada despliegue se adapta a como vende tu industria, lo que preguntan tus clientes y lo que convierte en tu mercado.",
          ctaPrefix: "Ver planes para",
          items: [
            {
              name: "Inmobiliaria",
              tagline: "Convierte cada consulta en una visita agendada.",
              description:
                "Los leads inmobiliarios se mueven rapido. Tolentino IA responde al instante, califica por presupuesto y timing, comparte disponibilidad y agenda visitas o llamadas sin esfuerzo manual.",
              useCases: [
                "Respuesta inmediata a propiedades",
                "Calificacion por presupuesto, zona e intencion",
                "Agenda automatica de visitas",
                "Seguimiento a leads frios",
              ],
              accent: "bg-stone-100 border-stone-200",
            },
            {
              name: "Agencias de marketing",
              tagline: "Escala tu captacion sin contratar mas.",
              description:
                "Si manejas leads desde tu web o para clientes, Tolentino IA toma el primer contacto, filtra prospectos listos y se los entrega mejor preparados a ventas.",
              useCases: [
                "Calificar inbound 24/7",
                "Automatizar conversaciones de onboarding",
                "Gestionar flujos de campanas para clientes",
                "Agendar discovery calls calificadas",
              ],
              accent: "bg-blue-50 border-blue-100",
            },
            {
              name: "Coaches y cursos",
              tagline: "Vende mas sin vivir en los DMs.",
              description:
                "Para coaches y creadores, Tolentino IA califica interesados, explica tu oferta, maneja objeciones y agenda llamadas estrategicas para que tu te enfoques en entregar valor.",
              useCases: [
                "Resolver dudas sobre programas o cursos",
                "Manejar objeciones de precio",
                "Agendar llamadas gratuitas",
                "Nutrir leads frios con seguimiento",
              ],
              accent: "bg-emerald-50 border-emerald-100",
            },
          ],
        }
      : {
          eyebrow: "Industries",
          title: "Built for your industry,",
          mutedTitle: "not just your category.",
          description:
            "Tolentino IA is not a generic solution. Every deployment is tuned to how your industry sells, what clients ask, and what actually drives conversions in your market.",
          ctaPrefix: "See plans for",
          items: [
            {
              name: "Real Estate",
              tagline: "Turn every inquiry into a booked viewing.",
              description:
                "Real estate leads move fast. Tolentino IA replies instantly, qualifies buyers and renters by budget and timing, shares availability, and books visits or advisor calls without manual effort.",
              useCases: [
                "Instant replies to property inquiries",
                "Qualification by budget, area, and intent",
                "Automated viewing scheduling",
                "Follow-up for cold leads",
              ],
              accent: "bg-stone-100 border-stone-200",
            },
            {
              name: "Marketing Agencies",
              tagline: "Scale intake without hiring more people.",
              description:
                "Whether leads come from your website or client campaigns, Tolentino IA handles the first touch, qualifies prospects, and hands warmer leads to your sales team.",
              useCases: [
                "Qualify inbound inquiries 24/7",
                "Automate onboarding conversations",
                "Handle lead flows for clients",
                "Book qualified discovery calls",
              ],
              accent: "bg-blue-50 border-blue-100",
            },
            {
              name: "Coaches and Courses",
              tagline: "Enroll more clients without living in the DMs.",
              description:
                "For coaches and creators, Tolentino IA qualifies prospects, explains your offer, handles price objections, and books strategy calls so you can stay focused on delivery.",
              useCases: [
                "Answer questions about your offer",
                "Handle pricing objections",
                "Book free strategy calls",
                "Nurture cold leads with follow-up",
              ],
              accent: "bg-emerald-50 border-emerald-100",
            },
          ],
        }

  return (
    <section id="industries" className="bg-surface py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">{copy.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance mb-5">
            {copy.title}
            <br className="hidden md:block" />
            <span className="text-muted-foreground">{copy.mutedTitle}</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">{copy.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {copy.items.map((industry, index) => {
            const Icon = icons[index]

            return (
              <div
                key={industry.name}
                className="bg-background border border-border rounded-3xl overflow-hidden flex flex-col hover:border-foreground/20 transition-all duration-200 group"
              >
                <div className={`h-1.5 ${industry.accent.split(" ")[0]}`} aria-hidden="true" />

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                      <Icon size={18} className="text-foreground" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                      {industry.name}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-foreground mb-3 text-balance">{industry.tagline}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{industry.description}</p>

                  <ul className="flex flex-col gap-2 mt-auto">
                    {industry.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0 mt-1.5" aria-hidden="true" />
                        {useCase}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground mt-7 group-hover:gap-2.5 transition-all duration-200"
                  >
                    {copy.ctaPrefix} {industry.name}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
