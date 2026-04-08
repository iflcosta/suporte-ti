"use client"

import { useState, useEffect } from "react"
import { Logo } from "@/components/ui/logo"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Planos", href: "#planos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
    { label: "Plano de Negócios", href: "/negocios" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#080808]/80 backdrop-blur-xl border-b border-[#1F1F1F] py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-wide text-[#78716c] hover:text-[#F5F0E8] transition-colors relative group font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#8B2635] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 bg-[#8B2635] text-[#F5F0E8] text-sm font-medium tracking-wide hover:bg-[#A63344] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#8B2635]/20"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[2px] bg-[#F5F0E8] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-[2px] bg-[#F5F0E8] transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[2px] bg-[#F5F0E8] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-[#080808]/60 backdrop-blur-sm z-40 transition-opacity duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-[75%] max-w-[300px] bg-[#0A0A0A] border-l border-[#1F1F1F] z-50 transition-transform duration-500 ease-in-out md:hidden flex flex-col ${
          mobileMenuOpen ? "translate-x-0 shadow-2xl shadow-black" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 pt-24 gap-6">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-[#F5F0E8] hover:text-[#C9A962] transition-colors border-b border-[#1F1F1F]/50 pb-4"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-4 bg-[#8B2635] text-[#F5F0E8] text-center text-sm font-medium tracking-wide shadow-lg shadow-[#8B2635]/10"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
