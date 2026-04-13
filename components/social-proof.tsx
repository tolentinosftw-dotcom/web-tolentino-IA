import { Zap, Shield, Globe, Headphones } from "lucide-react"
import type { Locale } from "@/lib/locale"

type SocialProofProps = {
  locale: Locale
}

const icons = [Zap, Shield, Globe, Headphones]

export function SocialProof({ locale }: SocialProofProps) {
  const copy =
    locale === "es"
      ? {
          eyebrow: "Pensado para negocios serios",
          title: ["La infraestructura que tu equipo comercial", "estaba esperando."],
          blocks: [
            {
              title: "Implementacion rapida",
              description: "Operativo en 5 a 10 dias habiles, adaptado a tus productos y a tu marca.",
            },
            {
              title: "Soporte premium",
              description: "Tienes account manager dedicado, acceso directo y cero filas de tickets.",
            },
            {
              title: "IA bilingue",
              description: "Responde en espanol e ingles de forma natural, sin cambios manuales.",
            },
            {
              title: "Automatizacion real",
              description: "No es un bot generico. Se construye sobre tu negocio, precios y proceso.",
            },
          ],
          stats: [
            { value: "< 3s", label: "Tiempo promedio de respuesta" },
            { value: "24/7", label: "Disponible siempre" },
            { value: "2x", label: "Mas reuniones agendadas" },
            { value: "100%", label: "Adaptado a tu negocio" },
          ],
          trustedBy: "Usado por negocios en crecimiento",
          logos: ["Inmobiliaria Pro", "Agencia Growth", "Academia Coach", "SaaS Studio", "Dev Lab"],
        }
      : {
          eyebrow: "Built for serious businesses",
          title: ["The infrastructure your sales team", "has been waiting for."],
          blocks: [
            {
              title: "Fast setup",
              description: "Fully operational in 5 to 10 business days, customized to your products and brand.",
            },
            {
              title: "Premium support",
              description: "Dedicated account manager, direct access, and no ticket queues.",
            },
            {
              title: "Bilingual AI",
              description: "Responds naturally in English and Spanish without manual switching.",
            },
            {
              title: "Real automation",
              description: "Not a generic bot. Built around your business, pricing, and process.",
            },
          ],
          stats: [
            { value: "< 3s", label: "Average response time" },
            { value: "24/7", label: "Always available" },
            { value: "2x", label: "More booked meetings" },
            { value: "100%", label: "Custom to your business" },
          ],
          trustedBy: "Trusted by growing businesses",
          logos: ["Real Estate Co.", "Marketing Agency", "Coach Academy", "SaaS Company", "Dev Studio"],
        }

  return (
    <section className="bg-foreground text-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-background/40 mb-3 font-medium">{copy.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-serif text-balance text-background">
            {copy.title[0]}
            <br className="hidden md:block" /> {copy.title[1]}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {copy.blocks.map((block, index) => {
            const Icon = icons[index]

            return (
              <div
                key={block.title}
                className="bg-background/5 border border-background/10 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                  <Icon size={18} className="text-background" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-background mb-1">{block.title}</h3>
                  <p className="text-sm text-background/50 leading-relaxed">{block.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-background/10 pt-12">
          {copy.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-semibold text-background mb-1">{stat.value}</p>
              <p className="text-sm text-background/40">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-background/10 pt-10">
          <p className="text-center text-xs text-background/30 uppercase tracking-widest mb-6">{copy.trustedBy}</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-25">
            {copy.logos.map((name) => (
              <span key={name} className="text-sm font-semibold text-background tracking-tight">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
