export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-[2px] h-10 bg-[#8B2635]" />
      <div className="flex flex-col">
        <span className="font-serif italic text-sm leading-none text-[#C9A962]">Il</span>
        <span className="font-serif text-xl font-semibold tracking-[0.25em] leading-none">POTERE</span>
      </div>
    </div>
  )
}
