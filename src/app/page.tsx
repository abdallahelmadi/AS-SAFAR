import Header from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "as-safar"
}

export default function Index(): React.JSX.Element {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="relative w-full overflow-hidden bg-[#eaeaea]">
        <img
          src="/heroimg.jpg"
          width="100%"
          alt=" "
          draggable={false}
        />
      </div>
    </main>
  )
}