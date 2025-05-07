import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portafolio | Fotografía & Videografía",
  description: "Portafolio profesional de fotografía, videografía y edición",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans bg-black text-white min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
