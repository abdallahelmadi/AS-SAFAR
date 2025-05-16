import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const font = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <html lang="en" className="max-w-[100vw] overflow-x-hidden">
      <body className={`${font.className} max-w-[100vw] overflow-x-hidden bg-[#fff] min-h-[100vh] text-[#333] text-[14px] font-[400]
      leading-[20px] scroll-smooth select-none px-[0px] flex justify-center`}>
        <main className="w-full max-w-[2360px] h-auto">
          <SpeedInsights />
          <Analytics />
          <main className="h-[100%]">
            {children}
          </main>
        </main>
      </body>
    </html>
  )
}