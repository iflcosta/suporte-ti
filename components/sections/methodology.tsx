"use client"

import React from "react"
import { METHODOLOGY_STEPS } from "@/constants/landing-data"
import { Section, SectionTitle } from "@/components/ui/section-components"

interface MethodologyStep {
  step: string
  title: string
  desc: string
}

export function Methodology() {
  return (
    <Section className="py-24 bg-[#080808] border-y border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          eyebrow="Processo"
          title="O Caminho Potere"
          subtitle="Uma abordagem met\u00f3dica e transparente para garantir a excel\u00eancia tecnológica do seu neg\u00f3cio."
        />

        <div className="grid md:grid-cols-3 gap-12 relative mt-16">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.1rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1F1F1F] to-transparent" />

          {METHODOLOGY_STEPS.map((item: MethodologyStep) => (
            <div key={item.step} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#1F1F1F] border border-[#8B2635]/30 flex items-center justify-center mb-6 group-hover:border-[#8B2635] group-hover:bg-[#8B2635]/10 transition-all duration-500 shadow-xl">
                <span className="font-serif text-xl text-[#C9A962]">{item.step}</span>
              </div>
              <h3 className="font-serif text-2xl text-[#F5F0E8] mb-4 group-hover:text-[#C9A962] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#78716c] leading-relaxed max-w-xs mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 border border-[#1F1F1F] bg-[#0F0F0F]/30 text-center rounded-lg">
          <p className="text-[#78716c] italic text-sm">
            "Nosso objetivo n\u00e3o \u00e9 apenas resolver problemas, mas construir uma infraestrutura que evite que eles aconte\u00e7am."
          </p>
        </div>
      </div>
    </Section>
  )
}
