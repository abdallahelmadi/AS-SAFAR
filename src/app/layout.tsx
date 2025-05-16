import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const font = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "as-safar",
  description: "as-safar"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}