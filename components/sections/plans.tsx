"use client"

import { PLANOS } from "@/constants/landing-data"
import { Section, SectionTitle } from "@/components/ui/section-components"

export function Plans() {
  return (
    <Section id="planos" className="py-24 md:py-32 relative bg-[#0A0A0A]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1F1F1F] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          eyebrow="Planos"
          title="Escolha o plano ideal para sua empresa"
          subtitle="Todos os planos incluem suporte humano de verdade. Sem robôs, sem espera interminável."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PLANOS.map((plano, i) => (
            <div
              key={plano.nome}
              className={`relative flex flex-col animate-fade-up ${
                plano.destaque 
                  ? "bg-gradient-to-b from-[#8B2635]/10 to-[#0F0F0F] border-[#8B2635]/50 lg:-mt-4 lg:mb-4" 
                  : "bg-[#0F0F0F] border-[#1F1F1F]"
              } border p-8 lg:p-10 ${plano.emBreve ? "opacity-80" : ""}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {plano.destaque && !plano.emBreve && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#8B2635] text-xs tracking-widest uppercase">
                  Recomendado
                </span>
              )}

              {plano.emBreve && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#C9A962] text-[#0A0A0A] text-xs font-bold tracking-widest uppercase">
                  Coming Soon
                </span>
              )}

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#8B2635]">
                    {plano.nome}
                  </span>
                  {plano.tagIngles && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1F1F1F] text-[#C9A962] font-bold tracking-wider">
                      {plano.tagIngles}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#78716c] mt-1">{plano.subtitulo}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-5xl lg:text-6xl text-[#F5F0E8]">{plano.preco}</span>
                  <span className="text-[#78716c] text-sm">{plano.periodo}</span>
                </div>
                {!plano.emBreve && (
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#8B2635]/10 border border-[#8B2635]/20">
                    <span className="w-1 h-1 rounded-full bg-[#8B2635] animate-pulse" />
                    <span className="text-[10px] uppercase tracking-wider font-medium text-[#F5F0E8]/70">Sem Fidelidade</span>
                  </div>
                )}
              </div>

              <ul className="flex-grow space-y-4 mb-10">
                {plano.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-[#a8a29e]">
                    <span className="text-[#8B2635] mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plano.emBreve ? "#" : "https://wa.me/5511999999999"}
                target={plano.emBreve ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`block text-center py-4 font-medium tracking-wide transition-all ${
                  plano.emBreve
                    ? "border border-[#1F1F1F] text-[#78716c] cursor-not-allowed"
                    : plano.destaque
                    ? "bg-[#8B2635] text-[#F5F0E8] hover:bg-[#A63344]"
                    : "border border-[#2a2a2a] text-[#F5F0E8] hover:border-[#8B2635] hover:bg-[#8B2635]/10"
                }`}
              >
                {plano.emBreve ? "Em desenvolvimento" : `Contratar ${plano.nome}`}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#78716c] mt-12 max-w-2xl mx-auto">
          Precisa de algo diferente? Entre em contato e montamos um plano personalizado para sua empresa.
        </p>
      </div>
    </Section>
  )
}
