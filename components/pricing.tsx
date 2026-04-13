import { Check, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { WHATSAPP_URL } from "@/lib/contact"
import type { Locale } from "@/lib/locale"

type PricingProps = {
  locale: Locale
}

export function Pricing({ locale }: PricingProps) {
  const copy =
    locale === "es"
      ? {
          eyebrow: "Planes",
          title: "Precios claros y orientados a valor.",
          description:
            "El precio final depende de la complejidad de tu negocio, integraciones y profundidad de la automatizacion. Todos los planes incluyen personalizacion completa.",
          popular: "Mas elegido",
          plans: [
            {
              name: "Mensual",
              period: "por mes",
              price: "$2,500",
              priceSuffix: "- $30,000",
              description: "Ideal para empezar rapido con flexibilidad total.",
              featured: false,
              features: [
                "Asistente de IA para WhatsApp o web",
                "Flujo de calificacion de leads",
                "Respuestas sobre precios",
                "Agenda de reuniones por Zoom",
                "Integracion con Google Calendar",
                "Soporte en espanol e ingles",
                "Comprension de audios",
                "Onboarding y setup incluidos",
              ],
              cta: "Comprar",
              ctaSecondary: "Agendar llamada",
            },
            {
              name: "Plan 6 meses",
              period: "total",
              price: "$12,000",
              priceSuffix: "- $150,000",
              description: "Para negocios que quieren consolidar el sistema y capturar ROI compuesto.",
              featured: true,
              features: [
                "Todo lo del plan mensual",
                "Integracion con CRM o base de datos",
                "Respuestas guiadas por producto",
                "Reglas y ruteo personalizados",
                "Soporte prioritario",
                "Revision mensual de rendimiento",
                "Scoring avanzado de leads",
                "Despliegue multicanal",
              ],
              cta: "Comprar",
              ctaSecondary: "Agendar llamada",
            },
            {
              name: "Plan anual",
              period: "total",
              price: "$22,000",
              priceSuffix: "- $260,000",
              description: "La solucion completa para equipos que quieren escalar ventas a largo plazo.",
              featured: false,
              features: [
                "Todo lo del plan de 6 meses",
                "Arquitectura de automatizacion a medida",
                "Sincronizacion profunda con CRM",
                "Workflows avanzados con calendario y Zoom",
                "Entrenamiento dedicado del modelo",
                "Sesiones estrategicas trimestrales",
                "Soporte con SLA",
                "Capacitacion y handoff al equipo",
              ],
              cta: "Comprar",
              ctaSecondary: "Agendar llamada",
            },
          ],
          footnote:
            "Todos los planes se aterrizan en una llamada gratuita. La inversion exacta depende de tu complejidad comercial, integraciones y profundidad del sistema.",
        }
      : {
          eyebrow: "Pricing",
          title: "Transparent, value-based pricing.",
          description:
            "Final pricing depends on business complexity, integrations, and automation depth. Every plan includes full customization.",
          popular: "Most Popular",
          plans: [
            {
              name: "Monthly",
              period: "per month",
              price: "$2,500",
              priceSuffix: "- $30,000",
              description: "Ideal for teams that want to start lean with full flexibility.",
              featured: false,
              features: [
                "Custom AI assistant for WhatsApp or web",
                "Lead qualification flow",
                "Pricing guidance replies",
                "Zoom meeting booking",
                "Google Calendar integration",
                "English and Spanish support",
                "Voice note understanding",
                "Onboarding and setup included",
              ],
              cta: "Buy Now",
              ctaSecondary: "Book a Strategy Call",
            },
            {
              name: "6-Month Plan",
              period: "total",
              price: "$12,000",
              priceSuffix: "- $150,000",
              description: "Best for teams ready to lock in the system and capture compounding ROI.",
              featured: true,
              features: [
                "Everything in Monthly",
                "CRM or database integration",
                "Product-aware response logic",
                "Custom rules and routing",
                "Priority support",
                "Monthly performance review",
                "Advanced lead scoring",
                "Multi-channel deployment",
              ],
              cta: "Buy Now",
              ctaSecondary: "Book a Strategy Call",
            },
            {
              name: "Annual Plan",
              period: "one-time",
              price: "$22,000",
              priceSuffix: "- $260,000",
              description: "The full solution for teams serious about scaling sales for the long term.",
              featured: false,
              features: [
                "Everything in the 6-Month Plan",
                "Bespoke automation architecture",
                "Deep CRM synchronization",
                "Advanced calendar and Zoom workflows",
                "Dedicated model training",
                "Quarterly strategy sessions",
                "SLA-backed support",
                "Team training and handoff",
              ],
              cta: "Buy Now",
              ctaSecondary: "Book a Strategy Call",
            },
          ],
          footnote:
            "Every plan is scoped during a free strategy call. The exact investment depends on business complexity, integrations, and the depth of the system.",
        }

  return (
    <section id="pricing" className="bg-background py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">{copy.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance mb-5">{copy.title}</h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">{copy.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {copy.plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-3xl border p-8 transition-all duration-200",
                plan.featured
                  ? "bg-foreground border-foreground text-background"
                  : "bg-background border-border hover:border-foreground/20"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-background text-xs font-semibold px-3 py-1 rounded-full">
                    {copy.popular}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={cn(
                    "text-xs uppercase tracking-widest font-medium mb-4",
                    plan.featured ? "text-background/50" : "text-muted-foreground"
                  )}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className={cn(
                      "text-4xl font-semibold tracking-tight",
                      plan.featured ? "text-background" : "text-foreground"
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-lg font-normal mb-1",
                      plan.featured ? "text-background/60" : "text-muted-foreground"
                    )}
                  >
                    {plan.priceSuffix}
                  </span>
                </div>
                <p
                  className={cn(
                    "text-xs",
                    plan.featured ? "text-background/40" : "text-muted-foreground/60"
                  )}
                >
                  {plan.period}
                </p>
                <p
                  className={cn(
                    "text-sm leading-relaxed mt-4",
                    plan.featured ? "text-background/70" : "text-muted-foreground"
                  )}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className={cn(
                        "flex-shrink-0 mt-0.5",
                        plan.featured ? "text-background/70" : "text-foreground"
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm leading-relaxed",
                        plan.featured ? "text-background/70" : "text-muted-foreground"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2.5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200",
                    plan.featured
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  )}
                >
                  {plan.cta}
                  <ArrowRight size={15} />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium border transition-all duration-200",
                    plan.featured
                      ? "border-background/20 text-background/80 hover:border-background/40"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
                  )}
                >
                  {plan.ctaSecondary}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto leading-relaxed">
          {copy.footnote}
        </p>
      </div>
    </section>
  )
}
