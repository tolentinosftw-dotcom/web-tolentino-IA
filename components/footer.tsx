import Link from "next/link"
import { WHATSAPP_URL } from "@/lib/contact"
import type { Locale } from "@/lib/locale"

type FooterProps = {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const copy =
    locale === "es"
      ? {
          description:
            "Automatizacion comercial con IA para WhatsApp y web chat. Pensado para negocios que quieren crecer sin perder conversaciones.",
          chips: {
            whatsapp: "WhatsApp",
            liveDemo: "Demo en vivo",
          },
          sections: [
            {
              title: "Producto",
              links: [
                { label: "Solucion", href: "#solution" },
                { label: "Funciones", href: "#features" },
                { label: "Demo en vivo", href: "#demo" },
                { label: "Planes", href: "#pricing" },
              ],
            },
            {
              title: "Industrias",
              links: [
                { label: "Inmobiliaria", href: "#industries" },
                { label: "Agencias", href: "#industries" },
                { label: "Coaches y cursos", href: "#industries" },
              ],
            },
            {
              title: "Empresa",
              links: [
                { label: "FAQ", href: "#faq" },
                { label: "Contacto", href: WHATSAPP_URL },
                { label: "Agendar demo", href: WHATSAPP_URL },
              ],
            },
          ],
          privacy: "Politica de privacidad",
          terms: "Terminos del servicio",
          rights: "Todos los derechos reservados.",
        }
      : {
          description:
            "AI sales automation for WhatsApp and web chat, built for businesses that want growth without dropped conversations.",
          chips: {
            whatsapp: "WhatsApp",
            liveDemo: "Live Demo",
          },
          sections: [
            {
              title: "Product",
              links: [
                { label: "Solution", href: "#solution" },
                { label: "Features", href: "#features" },
                { label: "Live Demo", href: "#demo" },
                { label: "Pricing", href: "#pricing" },
              ],
            },
            {
              title: "Industries",
              links: [
                { label: "Real Estate", href: "#industries" },
                { label: "Agencies", href: "#industries" },
                { label: "Coaches and Courses", href: "#industries" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: WHATSAPP_URL },
                { label: "Book a Demo", href: WHATSAPP_URL },
              ],
            },
          ],
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          rights: "All rights reserved.",
        }

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-background flex items-center justify-center">
                <span className="text-foreground text-xs font-bold">T</span>
              </div>
              <span className="font-semibold text-sm text-background">
                Tolentino<span className="text-background/50"> IA</span>
              </span>
            </div>
            <p className="text-sm text-background/40 leading-relaxed max-w-xs">{copy.description}</p>
            <div className="flex gap-3 mt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-background/10 hover:bg-background/15 border border-background/10 text-background/70 px-3 py-1.5 rounded-full transition-colors"
              >
                {copy.chips.whatsapp}
              </a>
              <a
                href="#demo"
                className="text-xs bg-background/10 hover:bg-background/15 border border-background/10 text-background/70 px-3 py-1.5 rounded-full transition-colors"
              >
                {copy.chips.liveDemo}
              </a>
            </div>
          </div>

          {copy.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs uppercase tracking-widest text-background/30 font-medium mb-4">{section.title}</h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-background/50 hover:text-background transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/25">
            &copy; {new Date().getFullYear()} Tolentino IA. {copy.rights}
          </p>
          <div className="flex gap-5">
            <Link href="#" className="text-xs text-background/25 hover:text-background/50 transition-colors">
              {copy.privacy}
            </Link>
            <Link href="#" className="text-xs text-background/25 hover:text-background/50 transition-colors">
              {copy.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
