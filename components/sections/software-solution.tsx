"use client"

import { SOFTWARE_SOLUTION } from "@/constants/landing-data"
import { Section, SectionTitle } from "@/components/ui/section-components"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function SoftwareSolution() {
  return (
    <Section id="software" className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B2635]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="animate-fade-right">
            <span className="inline-block px-3 py-1 rounded-full bg-[#8B2635]/10 border border-[#8B2635]/20 text-[#8B2635] text-[10px] font-bold tracking-widest uppercase mb-6">
              Solu\u00e7\u00e3o Exclusiva para Cl\u00ednicas
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F0E8] leading-tight mb-6">
              {SOFTWARE_SOLUTION.nome}
            </h2>
            <p className="text-lg text-[#C9A962] font-medium mb-4 italic">
              {SOFTWARE_SOLUTION.subtitulo}
            </p>
            <p className="text-[#a8a29e] text-base leading-relaxed mb-10 max-w-xl">
              {SOFTWARE_SOLUTION.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {SOFTWARE_SOLUTION.features.map((feature, i) => (
                <div key={i} className="group p-4 bg-[#0F0F0F] border border-[#1F1F1F] hover:border-[#8B2635]/30 transition-all rounded-lg">
                  <span className="text-2xl mb-3 block">{feature.icone}</span>
                  <h4 className="text-[#F5F0E8] font-semibold text-sm mb-1">{feature.titulo}</h4>
                  <p className="text-[#78716c] text-[11px] leading-snug">{feature.desc}</p>
                </div>
              ))}
            </div>

            <Button 
              className="px-8 py-6 h-auto text-sm font-bold bg-[#8B2635] hover:bg-[#a12d3e] text-white rounded-none border border-[#8B2635] shadow-[0_0_20px_rgba(139,38,53,0.3)] transition-all"
            >
              {SOFTWARE_SOLUTION.cta}
            </Button>
          </div>

          {/* Visual Showcase */}
          <div className="relative animate-fade-left">
            <div className="aspect-square bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#1F1F1F] rounded-2xl relative overflow-hidden shadow-2xl">
              {/* Abstract Software UI Mockup */}
              <div className="absolute top-8 left-8 right-8 bottom-8 border border-white/5 rounded-lg bg-[#050505] p-6">
                <div className="w-full h-8 bg-white/5 rounded mb-6 flex items-center justify-between px-3">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#8B2635]" />
                    <div className="w-2 h-2 rounded-full bg-[#C9A962]" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
                  <div className="w-24 h-2 bg-white/5 rounded" />
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-16 bg-white/5 rounded border border-white/5 animate-pulse" />
                  ))}
                </div>

                <div className="space-y-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-full h-12 bg-white/5 rounded border border-white/5 flex items-center px-4 gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#8B2635]/20 border border-[#8B2635]/30" />
                      <div className="flex-1 space-y-2">
                        <div className="w-1/2 h-2 bg-white/10 rounded" />
                        <div className="w-1/3 h-1.5 bg-white/5 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute bottom-12 right-12 bg-[#C9A962] text-[#080808] p-4 rounded-xl shadow-2xl animate-bounce-slow">
                <div className="text-[10px] font-black uppercase tracking-widest mb-1">Status</div>
                <div className="text-xs font-bold flex items-center gap-2">
                  <Check className="w-3 h-3" /> Blindagem Ativa
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}
