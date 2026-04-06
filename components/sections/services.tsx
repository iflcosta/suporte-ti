"use client"

import { SERVICOS } from "@/constants/landing-data"
import { Section, SectionTitle } from "@/components/ui/section-components"

export function Services() {
  return (
    <Section id="servicos" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1F1F1F] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          eyebrow="O que fazemos"
          title="Soluções completas para sua empresa"
          subtitle="Da manutenção preventiva à consultoria estratégica, cuidamos de toda a sua infraestrutura de TI."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICOS.map((servico, i) => (
            <div
              key={i}
              className={`group relative bg-[#0F0F0F] border border-[#1F1F1F] p-6 hover:border-[#8B2635]/50 transition-all duration-500 animate-fade-up ${servico.comingSoon ? "opacity-90" : ""}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#8B2635] group-hover:w-full transition-all duration-500" />
              
              {servico.comingSoon && (
                <span className="absolute top-4 right-4 text-[8px] font-bold tracking-widest uppercase px-1.5 py-0.5 bg-[#C9A962]/10 text-[#C9A962] border border-[#C9A962]/20 rounded">
                  Coming Soon
                </span>
              )}

              <span className="text-3xl mb-4 block">{servico.icone}</span>
              <h3 className="font-serif text-lg text-[#F5F0E8] mb-2 group-hover:text-[#C9A962] transition-colors">
                {servico.titulo}
              </h3>
              <p className="text-[#78716c] text-xs leading-relaxed">
                {servico.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
