"use client"

import { useEffect, useRef, useState } from "react"
import { Send, Mic, ArrowRight } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/contact"
import type { Locale } from "@/lib/locale"

type Message = {
  id: number
  role: "user" | "ai"
  content: string
}

type DemoProps = {
  locale: Locale
}

export function Demo({ locale }: DemoProps) {
  const copy =
    locale === "es"
      ? {
          eyebrow: "Demo en vivo",
          title: "No nos creas a nosotros.",
          mutedTitle: "Pruebalo ahora.",
          description:
            "Esta es una demo real del motor conversacional de Tolentino IA. Escribe tu mensaje o usa las sugerencias para sentir el flujo.",
          highlights: [
            "Responde en menos de 3 segundos",
            "Entiende contexto e intencion",
            "Lleva hacia agenda y precios",
            "Bilingue, prueba tambien en ingles",
          ],
          cta: "Pedir demo completa",
          intro:
            "Hola. Soy una demo en vivo de Tolentino IA. Usa una sugerencia o escribe tu propio mensaje para ver como responde la IA.",
          suggestions: ["Hola", "Inmobiliaria", "Respuesta lenta", "Precios"],
          flow: [
            {
              trigger: "Hola",
              response:
                "Hola. Soy el asistente de Tolentino IA. Ayudo a automatizar conversaciones comerciales en WhatsApp y web chat. Tu caso es inmobiliaria, agencia o algun otro negocio?",
            },
            {
              trigger: "Inmobiliaria",
              response:
                "Excelente. Inmobiliaria es uno de nuestros casos mas fuertes. Respondemos leads al instante, calificamos compradores y arrendatarios, compartimos precios y agendamos visitas automaticamente. Cual es hoy tu mayor dolor: responder tarde, leads frios o seguimiento manual?",
            },
            {
              trigger: "Respuesta lenta",
              response:
                "Entiendo. Con Tolentino IA cada lead recibe respuesta en menos de 3 segundos, incluso de noche. Hemos visto clientes duplicar citas agendadas solo por no dejar conversaciones en visto. Quieres ver precios o prefieres agendar una llamada estrategica?",
            },
            {
              trigger: "Precios",
              response:
                "Nuestros planes inmobiliarios empiezan desde $1,000 al mes para un asistente totalmente personalizado. Tambien tenemos planes de 6 meses y anual para equipos que buscan integraciones mas profundas. Si quieres, te llevo a WhatsApp y coordinamos una llamada para mapear tu caso.",
            },
          ],
          fallback:
            "Buena pregunta. En una implementacion real, la IA responderia con base en tu negocio, tu catalogo y tus datos. Por ahora prueba una de las sugerencias para ver el flujo completo.",
          onlineStatus: "En linea - modo demo",
          placeholder: "Escribe un mensaje...",
        }
      : {
          eyebrow: "Live Demo",
          title: "Do not take our word for it.",
          mutedTitle: "Try it right now.",
          description:
            "This is a live demo of the Tolentino IA conversation engine. Type your own message or use the suggestions to feel the flow.",
          highlights: [
            "Replies in under 3 seconds",
            "Understands context and intent",
            "Guides toward pricing and booking",
            "Bilingual, try it in Spanish too",
          ],
          cta: "Book a Full Demo Call",
          intro:
            "Hi. I am a live demo of Tolentino IA. Try one of the suggestions below or write your own message to see how the AI responds.",
          suggestions: ["Hi", "Real estate", "Slow response", "Pricing"],
          flow: [
            {
              trigger: "Hi",
              response:
                "Hello. I am the Tolentino IA assistant. I help businesses automate sales conversations on WhatsApp and web chat. Are you exploring this for real estate, an agency, or another business?",
            },
            {
              trigger: "Real estate",
              response:
                "Great choice. Real estate is one of our strongest use cases. We reply instantly, qualify buyers and renters, share pricing, and book visits automatically. What is your biggest pain today: slow response, weak lead quality, or manual follow-up?",
            },
            {
              trigger: "Slow response",
              response:
                "Understood. With Tolentino IA every lead gets a reply in under 3 seconds, even late at night. We have seen clients double booked appointments just by never going dark. Would you like to see pricing or book a strategy call?",
            },
            {
              trigger: "Pricing",
              response:
                "Our real estate plans start at $1,000 per month for a fully customized assistant. We also offer 6-month and annual plans for teams that need deeper integrations. If you want, I can take you to WhatsApp so we can map out your setup.",
            },
          ],
          fallback:
            "That is a great question. In a real deployment, the AI would answer using your business data, offers, and catalog. For now, try one of the suggestions to see the full flow.",
          onlineStatus: "Online - demo mode",
          placeholder: "Type a message...",
        }

  const [messages, setMessages] = useState<Message[]>([{ id: 0, role: "ai", content: copy.intro }])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const viewportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMessages([{ id: 0, role: "ai", content: copy.intro }])
    setInput("")
    setIsTyping(false)
  }, [copy.intro])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    viewport.scrollTo({
      top: viewport.scrollHeight,
      behavior: "smooth",
    })
  }, [messages, isTyping])

  const sendMessage = (text: string) => {
    if (!text.trim() || isTyping) return

    const userMessage: Message = { id: Date.now(), role: "user", content: text }
    setMessages((previous) => [...previous, userMessage])
    setInput("")
    setIsTyping(true)

    const match = copy.flow.find((step) => text.toLowerCase().includes(step.trigger.toLowerCase()))
    const response = match?.response ?? copy.fallback

    window.setTimeout(() => {
      setIsTyping(false)
      setMessages((previous) => [...previous, { id: Date.now() + 1, role: "ai", content: response }])
    }, 900 + Math.random() * 700)
  }

  return (
    <section id="demo" className="bg-surface py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">{copy.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance mb-6">
              {copy.title}
              <br />
              <span className="text-muted-foreground">{copy.mutedTitle}</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">{copy.description}</p>

            <ul className="flex flex-col gap-3 mb-8">
              {copy.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors duration-200"
            >
              {copy.cta}
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="bg-background border border-border rounded-3xl overflow-hidden shadow-lg">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-background">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                <span className="text-xs font-bold text-background">AI</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Tolentino IA</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" aria-hidden="true" />
                  {copy.onlineStatus}
                </p>
              </div>
            </div>

            <div ref={viewportRef} className="h-80 overflow-y-auto p-5 flex flex-col gap-3 bg-background/50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "ai" && (
                    <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center mr-2 flex-shrink-0 mt-0.5" aria-hidden="true">
                      <span className="text-[9px] font-bold text-background">AI</span>
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-foreground text-background rounded-tr-sm"
                        : "bg-muted text-foreground rounded-tl-sm"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center mr-2 flex-shrink-0 mt-0.5" aria-hidden="true">
                    <span className="text-[9px] font-bold text-background">AI</span>
                  </div>
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
                    {[0, 1, 2].map((index) => (
                      <span
                        key={index}
                        className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce"
                        style={{ animationDelay: `${index * 0.15}s` }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="px-5 pb-3 pt-2 flex flex-wrap gap-2 border-t border-border bg-background">
              {copy.suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => sendMessage(suggestion)}
                  disabled={isTyping}
                  className="text-xs border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors disabled:opacity-40"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <div className="px-4 pb-4 pt-1 bg-background">
              <div className="flex items-center gap-2 bg-muted rounded-2xl px-4 py-2.5 border border-border">
                <Mic size={15} className="text-muted-foreground flex-shrink-0" aria-hidden="true" />
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => event.key === "Enter" && sendMessage(input)}
                  placeholder={copy.placeholder}
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  disabled={isTyping}
                  aria-label="Demo chat input"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isTyping}
                  className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center disabled:opacity-30 hover:bg-foreground/90 transition-colors"
                  aria-label="Send message"
                >
                  <Send size={13} className="text-background" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
