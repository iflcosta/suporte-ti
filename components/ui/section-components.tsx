import React from "react"

export function Section({ 
  children, 
  className = "", 
  id 
}: { 
  children: React.ReactNode
  className?: string
  id?: string 
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  )
}

export function SectionTitle({ 
  eyebrow, 
  title, 
  subtitle,
  align = "center",
}: { 
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}) {
  return (
    <div className={`mb-16 md:mb-20 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="inline-block font-mono text-xs tracking-[0.3em] uppercase text-[#8B2635] mb-4 animate-fade-up">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-balance text-[#F5F0E8] animate-fade-up delay-100">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl text-[#78716c] animate-fade-up delay-200 ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-[1px] bg-gradient-to-r from-[#8B2635] via-[#8B2635]/50 to-transparent mt-8 animate-line-grow ${align === "center" ? "mx-auto max-w-xs" : "max-w-[200px]"}`} />
    </div>
  )
}
