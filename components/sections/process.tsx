"use client"

import { Section, SectionTitle } from "@/components/ui/section-components"

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    desc: "Analisamos sua infraestrutura atual, identificamos gargalos e riscos de segurança.",
  },
  {
    number: "02",
    title: "Implementação",
    desc: "Configuramos ferramentas de suporte remoto, backups e otimizamos seus sistemas.",
  },
  {
    number: "03",
    title: "Monitoramento",
    desc: "Cuidamos do seu TI 24/7, prevenindo problemas antes que eles parem seu negócio.",
  },
]

export function Process() {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-[#080808]">
      {/* Decorative Circles */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#8B2635]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          eyebrow="Como trabalhamos"
          title="Nossa jornada para sua tranquilidade"
          subtitle="Um processo claro e transparente para garantir que sua tecnologia nunca seja um obstáculo."
        />

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1F1F1F] to-transparent" />
          
          {STEPS.map((step, i) => (
            <div key={i} className="relative group animate-fade-up" style={{ animationDelay: `${i * 200}ms` }}>
              <div className="mb-8 relative inline-block">
                <span className="font-serif text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-[#1F1F1F] to-transparent leading-none">
                  {step.number}
                </span>
                <div className="absolute bottom-2 left-0 w-full h-[2px] bg-[#8B2635] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
              
              <h3 className="font-serif text-2xl text-[#F5F0E8] mb-4 group-hover:text-[#C9A962] transition-colors">
                {step.title}
              </h3>
              <p className="text-[#78716c] leading-relaxed max-w-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
