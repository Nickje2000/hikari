import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hikari Island - Discover the Hidden Gem of the Japanese Sea",
  description:
    "Experience the beauty, culture, and hospitality of Hikari Island. Plan your perfect getaway to this paradise in the Japanese Sea.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="bg-background text-foreground">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'