"use client"

import { useState } from "react"
import { FAQ as FAQ_DATA } from "@/constants/landing-data"
import { Section, SectionTitle } from "@/components/ui/section-components"

function FAQItem({ item, isOpen, onClick }: { item: typeof FAQ_DATA[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-[#1F1F1F]">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-serif text-lg text-[#F5F0E8] group-hover:text-[#C9A962] transition-colors pr-8">
          {item.q}
        </span>
        <span className={`text-[#8B2635] text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="pb-6 text-[#78716c] leading-relaxed pl-0 md:pl-4 border-l-2 border-[#8B2635]/30 ml-0 md:ml-2">
          {item.a}
        </p>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <Section id="faq" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1F1F1F] to-transparent" />
      
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <SectionTitle
          eyebrow="Perguntas Frequentes"
          title="Tire suas dúvidas"
        />

        <div className="border-t border-[#1F1F1F]">
          {FAQ_DATA.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openFaq === i}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
