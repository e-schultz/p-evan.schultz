import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Evan Schultz | Technical Director & Software Engineer",
  description:
    "Portfolio and blog of Evan Schultz - Building high performing teams and the environment that enables them.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evanschultz.dev",
    title: "Evan Schultz | Technical Director & Software Engineer",
    description:
      "Portfolio and blog of Evan Schultz - Building high performing teams and the environment that enables them.",
    siteName: "Evan Schultz Portfolio",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
