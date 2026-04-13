import {
  MessageSquare,
  Globe,
  Mic,
  Languages,
  UserCheck,
  DollarSign,
  CalendarCheck,
  Calendar,
  Video,
  Database,
  Cpu,
  Settings2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { Locale } from "@/lib/locale"

type FeaturesProps = {
  locale: Locale
}

const icons = [
  MessageSquare,
  Globe,
  Mic,
  Languages,
  UserCheck,
  DollarSign,
  CalendarCheck,
  Calendar,
  Video,
  Database,
  Cpu,
  Settings2,
]

export function Features({ locale }: FeaturesProps) {
  const copy =
    locale === "es"
      ? {
          eyebrow: "Capacidades",
          title: "Todo lo que tu proceso comercial necesita.",
          description:
            "Tolentino IA no es un chatbot generico. Es un sistema de automatizacion comercial construido alrededor de la forma exacta en que tu negocio vende.",
          items: [
            {
              title: "Automatizacion en WhatsApp",
              description: "Conversaciones comerciales completas dentro del canal que tus clientes ya usan.",
              featured: true,
            },
            {
              title: "Automatizacion en web chat",
              description: "Captura preguntas desde tu sitio web con un chat de IA siempre disponible.",
              featured: false,
            },
            {
              title: "Comprension de audios",
              description: "Transcribe e interpreta mensajes de voz. Ya no hay audios ignorados.",
              featured: true,
            },
            {
              title: "Soporte en espanol e ingles",
              description: "Gestiona conversaciones bilingues sin cambios manuales.",
              featured: false,
            },
            {
              title: "Calificacion de leads",
              description: "Hace preguntas estrategicas para medir interes, presupuesto y urgencia.",
              featured: false,
            },
            {
              title: "Guia inteligente de precios",
              description: "Muestra el plan o rango adecuado segun la conversacion.",
              featured: false,
            },
            {
              title: "Agendamiento de reuniones",
              description: "Agenda llamadas sin vueltas ni seguimientos manuales.",
              featured: false,
            },
            {
              title: "Integracion con Google Calendar",
              description: "Lee disponibilidad real y reserva sobre espacios confirmados.",
              featured: false,
            },
            {
              title: "Integracion con Zoom",
              description: "Genera y envia enlaces automaticamente cuando se agenda.",
              featured: false,
            },
            {
              title: "Sincronizacion con CRM",
              description: "Envia los datos del lead calificado a tu CRM o base de datos.",
              featured: false,
            },
            {
              title: "Respuestas basadas en tu oferta",
              description: "Aprende tu catalogo, tus servicios y tus precios reales.",
              featured: false,
            },
            {
              title: "Logica de negocio personalizada",
              description: "Reglas unicas para ruteo, escalado, seguimiento y mas.",
              featured: false,
            },
          ],
        }
      : {
          eyebrow: "Capabilities",
          title: "Everything your sales process needs.",
          description:
            "Tolentino IA is not a generic chatbot. It is a sales automation system designed around the exact way your business operates.",
          items: [
            {
              title: "WhatsApp automation",
              description: "Run full sales conversations inside the channel your clients already use.",
              featured: true,
            },
            {
              title: "Web chat automation",
              description: "Capture every website inquiry with an AI chat layer that never goes offline.",
              featured: false,
            },
            {
              title: "Voice note understanding",
              description: "It transcribes and interprets audio messages so no voice note gets ignored.",
              featured: true,
            },
            {
              title: "English and Spanish support",
              description: "Handles bilingual conversations naturally without manual switching.",
              featured: false,
            },
            {
              title: "Lead qualification",
              description: "It asks strategic questions to measure intent, budget, and urgency.",
              featured: false,
            },
            {
              title: "Smart pricing guidance",
              description: "It surfaces the right plan or price range based on the conversation.",
              featured: false,
            },
            {
              title: "Meeting scheduling",
              description: "It books calls automatically with no back-and-forth and no missed follow-up.",
              featured: false,
            },
            {
              title: "Google Calendar integration",
              description: "It reads real availability and books inside confirmed open slots.",
              featured: false,
            },
            {
              title: "Zoom integration",
              description: "It creates and sends meeting links automatically at the moment of booking.",
              featured: false,
            },
            {
              title: "CRM sync",
              description: "It pushes qualified lead data into your CRM or database so nothing gets lost.",
              featured: false,
            },
            {
              title: "Product-aware responses",
              description: "It learns your catalog, services, and real pricing instead of guessing.",
              featured: false,
            },
            {
              title: "Custom business logic",
              description: "Unique rules for routing, escalation, follow-up, and more.",
              featured: false,
            },
          ],
        }

  return (
    <section id="features" className="bg-background py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">{copy.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance mb-5">{copy.title}</h2>
          <p className="text-base text-muted-foreground leading-relaxed">{copy.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {copy.items.map((feature, index) => {
            const Icon = icons[index]

            return (
              <div
                key={feature.title}
                className={cn(
                  "group p-6 rounded-2xl border transition-all duration-200",
                  feature.featured
                    ? "bg-foreground border-foreground text-background col-span-1"
                    : "bg-background border-border hover:border-foreground/20 hover:bg-surface/60"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center mb-4",
                    feature.featured ? "bg-background/10" : "bg-muted group-hover:bg-foreground/5 transition-colors"
                  )}
                >
                  <Icon size={18} className={feature.featured ? "text-background" : "text-muted-foreground"} />
                </div>
                <h3 className={cn("text-sm font-semibold mb-2", feature.featured ? "text-background" : "text-foreground")}>
                  {feature.title}
                </h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed",
                    feature.featured ? "text-background/60" : "text-muted-foreground"
                  )}
                >
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
