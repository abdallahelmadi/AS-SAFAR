"use client"

export default function Mainhero(): React.JSX.Element {
  return (
    <div className="relative w-full overflow-hidden bg-[#eaeaea]">
      <img
        src="/heroimg.jpg"
        width="100%"
        alt=" "
        draggable={false}
      />
    </div>
  )
}