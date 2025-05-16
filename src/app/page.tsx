import Header from "@/components/header"
import Mainhero from "@/components/mainhero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "as-safar"
}

export default function Home(): React.JSX.Element {
  return (
    <main className="flex flex-col">
      <Header />
      <Mainhero />
    </main>
  )
}