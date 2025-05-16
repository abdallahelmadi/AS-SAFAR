"use client"
import Link from "next/link"
import Logo from "@/components/logo"

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 h-[54px] w-full px-[18px] flex items-center justify-between
    bg-[#eefff4cc] backdrop-saturate-[180%] backdrop-blur-[5px] shadow-[inset_0_-1px_0_0_#eaeaea] z-[1000]">
      <Link href="/">
        <Logo/>
      </Link>
      <p> hello </p>
      <p> hello </p>
    </header>
  )
}