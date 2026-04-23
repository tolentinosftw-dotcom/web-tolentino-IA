"use client"

import { WHATSAPP_URL } from "@/lib/contact"
import type { Locale } from "@/lib/locale"

type FloatingWhatsappButtonProps = {
  locale: Locale
}

export function FloatingWhatsappButton({ locale }: FloatingWhatsappButtonProps) {
  const label = locale === "es" ? "Abrir WhatsApp" : "Open WhatsApp"

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed bottom-5 left-5 z-50 inline-flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.38)] transition-all duration-200 hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M16.02 4.25c-6.47 0-11.72 5.15-11.72 11.5 0 2.03.54 4 1.56 5.73l-1.7 6.26 6.46-1.68a11.86 11.86 0 0 0 5.41 1.3c6.47 0 11.72-5.15 11.72-11.5 0-6.35-5.25-11.5-11.73-11.5Z"
        />
        <path
          fill="#25D366"
          d="M16.02 6.4c5.22 0 9.48 4.18 9.48 9.35 0 5.17-4.26 9.34-9.48 9.34-1.67 0-3.31-.44-4.74-1.27l-.34-.2-3.84 1 .98-3.73-.22-.36a9.17 9.17 0 0 1-1.32-4.78c0-5.17 4.25-9.35 9.48-9.35Z"
        />
        <path
          fill="currentColor"
          d="M21.58 18.57c-.3-.15-1.77-.86-2.04-.95-.27-.1-.47-.15-.67.15-.19.3-.76.95-.93 1.14-.17.2-.34.22-.63.08-.3-.15-1.25-.45-2.39-1.43a8.92 8.92 0 0 1-1.65-2.02c-.17-.29-.02-.44.13-.58.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.6-.92-2.19-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1-.98 2.43.06 1.43 1.02 2.8 1.16 2.99.15.2 2.03 3.24 5.02 4.4 3 1.17 3 0 3.55-.1.56-.1 1.78-.73 2.03-1.43.24-.69.24-1.29.17-1.42-.07-.12-.26-.19-.56-.33Z"
        />
      </svg>
    </a>
  )
}
