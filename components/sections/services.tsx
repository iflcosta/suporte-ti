"use client"

import React from "react"
import { SERVICOS } from "@/constants/landing-data"
import { Section, SectionTitle } from "@/components/ui/section-components"

interface Servico {
  icone: string
  titulo: string
  desc: string
}

export function Services() {
  return (
    <Section id="servicos" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          eyebrow="Solu\u00e7\u00f5es"
          title="Gest\u00e3o Completa de TI"
          subtitle="Focamos na tecnologia para que voc\u00ea possa focar no que realmente importa: o seu neg\u00f3cio."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICOS.map((servico: Servico, i: number) => (
            <div
              key={i}
              className="p-8 bg-[#0F0F0F] border border-[#1F1F1F] hover:border-[#8B2635]/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {servico.icone}
              </div>
              <h3 className="font-serif text-xl text-[#F5F0E8] mb-4 group-hover:text-[#C9A962] transition-colors">
                {servico.titulo}
              </h3>
              <p className="text-[#78716c] text-sm leading-relaxed">
                {servico.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
