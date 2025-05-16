"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 h-[58px] w-full px-[18px] flex items-center justify-between
    bg-[#ffffffcc] backdrop-saturate-[180%] backdrop-blur-[5px] shadow-[inset_0_-1px_0_0_#eaeaea] z-[1000]">
      <Link href="/">
        <Logo/>
      </Link>
      <Button/>
    </header>
  )
}

function Logo(): React.JSX.Element {
  return (
    <img
      src="/as-safar.png"
      style={{
        width: 100,
        height: "auto"
      }}
      alt=" "
      draggable={false}
    />
  )
}

function Button(): React.JSX.Element {
  const router = useRouter()
  return (
    <button className="cursor-pointer px-4 py-2 bg-black text-white rounded-[6px] transition-all duration-300 hover:bg-gray-600
    hover:text-[#f7fff9] hover:scale-105"
    onClick={(): void => {router.push("/home")}}>
      Get Started
    </button>
  )
}