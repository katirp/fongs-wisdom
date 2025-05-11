import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fong's Wisdom - Chinese Idioms",
  description: "Explore traditional Chinese idioms (chengyu) and their meanings",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground min-h-screen overflow-y-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
