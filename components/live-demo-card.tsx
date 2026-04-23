"use client"

import { useEffect, useRef, useState } from "react"
import { Mic, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Locale } from "@/lib/locale"

type Message = {
  id: number
  role: "user" | "ai"
  content: string
}

type LiveDemoCardProps = {
  locale: Locale
  variant?: "hero" | "section"
  id?: string
}

function getDemoCopy(locale: Locale) {
  return locale === "es"
    ? {
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
        inputLabel: "Campo de mensaje de la demo",
        sendLabel: "Enviar mensaje de la demo",
      }
    : {
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
        inputLabel: "Demo chat input",
        sendLabel: "Send demo message",
      }
}

export function LiveDemoCard({ locale, variant = "section", id }: LiveDemoCardProps) {
  const copy = getDemoCopy(locale)
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

  const hero = variant === "hero"

  return (
    <div
      id={id}
      className={cn(
        "overflow-hidden",
        hero
          ? "rounded-[30px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
          : "rounded-3xl border border-border bg-background shadow-lg"
      )}
    >
      <div className={cn("flex items-center gap-3 border-b px-5 py-4", hero ? "border-slate-200 bg-white" : "border-border bg-background")}>
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full",
            hero ? "bg-slate-950 text-white" : "bg-foreground text-background"
          )}
        >
          <span className="text-xs font-bold">AI</span>
        </div>
        <div>
          <p className={cn("text-sm font-semibold", hero ? "text-slate-950" : "text-foreground")}>Tolentino IA</p>
          <p className={cn("flex items-center gap-1 text-xs", hero ? "text-slate-500" : "text-muted-foreground")}>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
            {copy.onlineStatus}
          </p>
        </div>
      </div>

      <div
        ref={viewportRef}
        className={cn(
          "flex flex-col gap-3 overflow-y-auto p-5",
          hero ? "h-[24rem] bg-slate-50 md:h-[27rem]" : "h-80 bg-background/50"
        )}
      >
        {messages.map((message) => (
          <div key={message.id} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
            {message.role === "ai" && (
              <div
                className={cn(
                  "mr-2 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full",
                  hero ? "bg-slate-950 text-white" : "bg-foreground text-background"
                )}
                aria-hidden="true"
              >
                <span className="text-[9px] font-bold">AI</span>
              </div>
            )}
            <div
              className={cn(
                "max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                message.role === "user"
                  ? hero
                    ? "rounded-tr-sm bg-slate-950 text-white"
                    : "rounded-tr-sm bg-foreground text-background"
                  : hero
                    ? "rounded-tl-sm border border-slate-200 bg-white text-slate-800"
                    : "rounded-tl-sm bg-muted text-foreground"
              )}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div
              className={cn(
                "mr-2 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full",
                hero ? "bg-slate-950 text-white" : "bg-foreground text-background"
              )}
              aria-hidden="true"
            >
              <span className="text-[9px] font-bold">AI</span>
            </div>
            <div
              className={cn(
                "flex items-center gap-1 rounded-2xl px-4 py-3",
                hero ? "rounded-tl-sm border border-slate-200 bg-white" : "rounded-tl-sm bg-muted"
              )}
            >
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  className={cn("h-1.5 w-1.5 rounded-full animate-bounce", hero ? "bg-slate-400" : "bg-muted-foreground/50")}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className={cn("flex flex-wrap gap-2 border-t px-5 pb-3 pt-2", hero ? "border-slate-200 bg-white" : "border-border bg-background")}>
        {copy.suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => sendMessage(suggestion)}
            disabled={isTyping}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs transition-colors disabled:opacity-40",
              hero
                ? "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-950"
                : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
            )}
          >
            {suggestion}
          </button>
        ))}
      </div>

      <div className={cn("px-4 pb-4 pt-1", hero ? "bg-white" : "bg-background")}>
        <div
          className={cn(
            "flex items-center gap-2 rounded-2xl border px-4 py-2.5",
            hero ? "border-slate-200 bg-slate-50" : "border-border bg-muted"
          )}
        >
          <Mic
            size={15}
            className={cn("flex-shrink-0", hero ? "text-slate-400" : "text-muted-foreground")}
            aria-hidden="true"
          />
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && sendMessage(input)}
            placeholder={copy.placeholder}
            className={cn(
              "flex-1 bg-transparent text-sm outline-none",
              hero ? "text-slate-900 placeholder:text-slate-400" : "text-foreground placeholder:text-muted-foreground"
            )}
            disabled={isTyping}
            aria-label={copy.inputLabel}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isTyping}
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full transition-colors disabled:opacity-30",
              hero ? "bg-slate-950 text-white hover:bg-slate-800" : "bg-foreground text-background hover:bg-foreground/90"
            )}
            aria-label={copy.sendLabel}
          >
            <Send size={13} />
          </button>
        </div>
      </div>
    </div>
  )
}
