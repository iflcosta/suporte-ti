"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SOFTWARE_SOLUTION } from "@/constants/landing-data"
import { Section } from "@/components/ui/section-components"
import { Button } from "@/components/ui/button"
import { Check, ShieldCheck, Activity, Users, Zap, Database } from "lucide-react"

export default function ClinicalTechPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F0E8] font-sans overflow-x-hidden">
      <Header />
      
      <main className="pt-24 md:pt-32">
        {/* HERO AGRESSIVO */}
        <Section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8B2635]/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B2635]/10 border border-[#8B2635]/20 text-[#8B2635] text-xs font-bold tracking-[0.2em] uppercase mb-8 animate-fade-down">
              The Only MSP-Integrated SaaS
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-[1.1] mb-8 animate-fade-up">
              {SOFTWARE_SOLUTION.nome}<br />
              <span className="text-[#C9A962]">Blindagem Médica.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#a8a29e] mb-12 leading-relaxed animate-fade-up">
              Software de prateleira é apenas código. O <strong>{SOFTWARE_SOLUTION.nome}</strong> é a fusão definitiva entre gestão de alta performance e a infraestrutura de elite da Il Potere.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up">
              <Button className="w-full sm:w-auto px-10 py-7 h-auto text-sm font-bold bg-[#8B2635] hover:bg-[#a12d3e] text-white rounded-none border border-[#8B2635] shadow-[0_0_30px_rgba(139,38,53,0.3)] transition-all">
                Solicitar Demonstração
              </Button>
              <Button variant="outline" className="w-full sm:w-auto px-10 py-7 h-auto text-sm font-bold border-[#1F1F1F] bg-transparent text-[#F5F0E8] hover:bg-white/5 rounded-none">
                Ver Funcionalidades
              </Button>
            </div>
          </div>
        </Section>

        {/* DIFERENCIAL MSP (O PONTO AGRESSIVO) */}
        <Section className="py-24 bg-[#0A0A0A] border-y border-[#1F1F1F]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0E8] mb-6">
                  Por que softwares comuns <br />
                  <span className="text-[#8B2635]">colocam sua clínica em risco?</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-xs">X</div>
                    <p className="text-[#a8a29e] text-sm leading-relaxed"><strong>Suporte Inexistente:</strong> Em softwares comuns, se o servidor cai ou a internet trava, o suporte do software diz: "problema na sua rede".</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-xs">X</div>
                    <p className="text-[#a8a29e] text-sm leading-relaxed"><strong>LGPD de Fachada:</strong> Ter cripotografia não é estar seguro se o roteador da sua clínica está vulnerável.</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-[#8B2635]/5 border border-[#8B2635]/20 rounded-2xl relative overflow-hidden">
                <ShieldCheck className="absolute -bottom-8 -right-8 w-40 h-40 text-[#8B2635]/10" />
                <h3 className="font-serif text-2xl text-[#C9A962] mb-4">A Diferença Potere</h3>
                <p className="text-[#F5F0E8] text-sm leading-relaxed mb-6 italic">
                  "O ClinicalTech inclui nosso Suporte N3. Nós não cuidamos apenas do dado, nós cuidamos da máquina, da rede e da segurança por onde o dado viaja."
                </p>
                <ul className="space-y-3">
                  {["Rede Monitorada 24/7", "Backup Imutável MSP", "Suporte VIP Prioritário"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-[#F5F0E8]">
                      <Check className="w-4 h-4 text-[#C9A962]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* GRID DE FUNCIONALIDADES EXPANDIDO */}
        <Section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-[#F5F0E8] mb-6">Funcionalidades Completas</h2>
            <p className="text-[#a8a29e] max-w-xl mx-auto">Desenvolvido para eliminar a burocracia e focar no que importa: o paciente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 md:px-12">
            {[
              { icon: Activity, title: "Prontuário Inteligente", desc: "Histórico completo com filtros por especialidade e anexação de exames." },
              { icon: Zap, title: "Fluxo de Caixa TISS/TUSS", desc: "Faturamento de convênios automatizado e gestão de glosas." },
              { icon: Users, title: "CRM de Pacientes", desc: "Marketing focado no paciente com lembretes de retorno e aniversário." },
              { icon: Database, title: "Estoque de Insumos", desc: "Alerta automático de validade e reposição de materiais técnicos." },
              { icon: ShieldCheck, title: "Assinatura Digital", desc: "Receituários e atestados com validade jurídica ICP-Brasil." },
              { icon: Zap, title: "Teleconsulta HD", desc: "Sala virtual segura integrada diretamente ao prontuário." },
            ].map((f, i) => (
              <div key={i} className="p-8 bg-[#0F0F0F] border border-[#1F1F1F] hover:border-[#8B2635]/30 transition-all group">
                <f.icon className="w-8 h-8 text-[#8B2635] mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-[#F5F0E8] font-bold text-lg mb-3">{f.title}</h4>
                <p className="text-[#78716c] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA FINAL */}
        <Section className="py-24 bg-gradient-to-b from-transparent to-[#8B2635]/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] mb-8">Sua clínica merece ser de Elite.</h2>
            <p className="text-lg text-[#a8a29e] mb-12">Agende uma conversa estratégica e veja como o ClinicalTech pode mudar seu faturamento.</p>
            <Button className="px-12 py-8 h-auto text-base font-bold bg-[#C9A962] hover:bg-[#b8954d] text-[#080808] rounded-none shadow-[0_0_40px_rgba(201,169,98,0.2)]">
              Quero o ClinicalTech Agora
            </Button>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
