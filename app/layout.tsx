import type { Metadata } from "next"
import { Inter, DM_Serif_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tolentino IA - AI Sales Automation for WhatsApp & Web Chat",
  description:
    "Turn every conversation into a qualified lead and booked meeting. Tolentino IA automates your sales process with AI on WhatsApp and web chat for real estate, agencies, and coaches.",
  keywords: ["AI sales automation", "WhatsApp AI", "lead qualification", "sales automation", "AI chatbot"],
  openGraph: {
    title: "Tolentino IA - AI Sales Automation",
    description: "Automate your sales conversations. Qualify leads. Book meetings. Close more deals.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${dmSerifDisplay.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
