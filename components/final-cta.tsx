import { ArrowRight, Calendar, MessageSquare } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/contact"
import type { Locale } from "@/lib/locale"

type FinalCTAProps = {
  locale: Locale
}

export function FinalCTA({ locale }: FinalCTAProps) {
  const copy =
    locale === "es"
      ? {
          eyebrow: "Listo para automatizar?",
          title: ["Deja de perder leads.", "Empieza a cerrarlos."],
          description:
            "Cada dia sin automatizacion es un dia con leads frios, dudas sin respuesta y reuniones que nunca se agendan.",
          primaryCta: "Comprar",
          secondaryCta: "Agendar demo",
          whatsappCta: "Hablar por WhatsApp",
          microTrust: [
            "Llamada estrategica gratis en cada plan",
            "Activo en dias",
            "Adaptado a tu negocio",
          ],
        }
      : {
          eyebrow: "Ready to automate?",
          title: ["Stop losing leads.", "Start closing them."],
          description:
            "Every day without automation is another day of cold leads, unanswered questions, and meetings that never get booked.",
          primaryCta: "Buy Now",
          secondaryCta: "Book a Demo",
          whatsappCta: "Talk on WhatsApp",
          microTrust: ["Free strategy call in every plan", "Live in days", "Customized to your business"],
        }

  return (
    <section
      id="contact"
      className="relative bg-[var(--hero-bg)] text-[var(--hero-foreground)] py-28 px-6 overflow-hidden"
    >
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
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-[0.08]"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.18 250), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-white/40 mb-6 font-medium">{copy.eyebrow}</p>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white text-balance leading-[1.05] mb-7">
          {copy.title[0]}
          <br />
          <span className="text-white/40">{copy.title[1]}</span>
        </h2>

        <p className="text-lg text-white/50 leading-relaxed max-w-xl mx-auto mb-10">{copy.description}</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-white text-black px-7 py-4 rounded-full text-sm font-semibold hover:bg-white/90 transition-all duration-200"
          >
            {copy.primaryCta}
            <ArrowRight size={16} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-white/15 transition-all duration-200"
          >
            <Calendar size={15} />
            {copy.secondaryCta}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border border-white/15 text-white/70 px-7 py-4 rounded-full text-sm font-medium hover:text-white hover:border-white/30 transition-all duration-200"
          >
            <MessageSquare size={15} />
            {copy.whatsappCta}
          </a>
        </div>

        <p className="text-xs text-white/20 mt-10">
          {copy.microTrust[0]} &nbsp;&middot;&nbsp; {copy.microTrust[1]} &nbsp;&middot;&nbsp; {copy.microTrust[2]}
        </p>
      </div>
    </section>
  )
}
