"use client"

import React from "react"
import { Section } from "@/components/ui/section-components"
import { AlertCircle, Clock, ShieldAlert, LucideIcon } from "lucide-react"

interface PainPoint {
  icon: React.ReactNode
  title: string
  problem: string
  description: string
  relief: string
}

const PAINS: PainPoint[] = [
  {
    icon: <AlertCircle className="w-8 h-8 text-[#8B2635]" />,
    title: "Cl\u00ednicas & Sa\u00fade",
    problem: "Sistemas offline e conformidade com a LGPD?",
    description: "Prontu\u00e1rios e exames de imagem inacess\u00edveis significam pacientes esperando e faturamento interrompido. Dados sens\u00edveis exigem gest\u00e3o rigorosa.",
    relief: "Asseguramos a disponibilidade total dos seus sistemas e a conformidade t\u00e9cnica com normas de prote\u00e7\u00e3o de dados."
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-[#C9A962]" />,
    title: "Escrit\u00f3rios de Advocacia",
    problem: "Incerteza com prazos e certificados digitais?",
    description: "Falhas t\u00e9cnicas no momento do peticionamento ou instabilidade no servidor podem comprometer processos de alto valor.",
    relief: "Monitoramento de sistemas cr\u00edtico e suporte priorit\u00e1rio para garantir que sua equipe nunca perca um prazo."
  },
  {
    icon: <Clock className="w-8 h-8 text-[#8B2635]" />,
    title: "Contabilidades",
    problem: "Lentid\u00e3o e servidores inst\u00e1veis no fechamento?",
    description: "Equipes paradas por lentid\u00e3o no servidor em per\u00edodos fiscais geram custos operacionais altos e stress desnecess\u00e1rio.",
    relief: "Otimiza\u00e7\u00e3o de infraestrutura e sistemas de redund\u00e2ncia para suportar picos de demanda com performance constante."
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-[#C9A962]" />,
    title: "Imobili\u00e1rias",
    problem: "Gest\u00e3o de contratos e vistorias offline?",
    description: "A digitaliza\u00e7\u00e3o de documentos e a agilidade no atendimento s\u00e3o cruciais. A seguran\u00e7a dos dados de clientes \u00e9 uma prioridade legal.",
    relief: "Solu\u00e7\u00f5es de nuvem corporativa e prote\u00e7\u00e3o de dados para garantir agilidade e seguran\u00e7a jur\u00eddica em cada contrato."
  }
]

export function PainPoints() {
  return (
    <Section className="py-24 bg-[#0A0A0A] relative border-y border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-up">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#8B2635] mb-4 block">
            Reconhecimento
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#F5F0E8] mb-6">
             O que tira o sono da<br />sua empresa?
          </h2>
          <p className="text-[#78716c] text-lg md:text-xl max-w-2xl mx-auto">
            A Il Potere entende que tecnologia deveria ser uma ferramenta de crescimento, n\u00e3o uma fonte de estresse. 
            Voc\u00ea se identifica com algum desses cen\u00e1rios?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PAINS.map((item: PainPoint, i: number) => (
            <div 
              key={i}
              className="group bg-[#0F0F0F] border border-[#1F1F1F] p-8 hover:border-[#8B2635]/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#8B2635]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              
              <h3 className="font-serif text-xl text-[#C9A962] mb-2">{item.title}</h3>
              <p className="text-[#F5F0E8] font-medium mb-4">{item.problem}</p>
              
              <p className="text-sm text-[#78716c] leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="pt-6 border-t border-[#1A1A1A]">
                <p className="text-xs font-mono uppercase tracking-widest text-[#8B2635] mb-2">Nosso Al\u00edvio:</p>
                <p className="text-sm text-[#F5F0E8] italic">"{item.relief}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
