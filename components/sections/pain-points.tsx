"use client"

import { Section } from "@/components/ui/section-components"
import { AlertCircle, Clock, ShieldAlert } from "lucide-react"

const PAINS = [
  {
    icon: <AlertCircle className="w-8 h-8 text-[#8B2635]" />,
    title: "Clínicas & Saúde",
    problem: "Sistemas offline e receio com a LGPD?",
    description: "Prontuários e exames de imagem inacessíveis significam pacientes esperando e faturamento travado. Dados sensíveis exigem proteção total.",
    relief: "Garantimos disponibilidade total dos seus sistemas médicos e blindagem de dados Nível 3-2-1."
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-[#C9A962]" />,
    title: "Escritórios de Advocacia",
    problem: "Incerteza com prazos e peticionamento?",
    description: "Computador travando no meio de um prazo fatal ou falha de certificado digital podem custar processos de alto valor.",
    relief: "Monitoramento pró-ativo de sistemas e suporte prioritário para que nenhum prazo seja perdido."
  },
  {
    icon: <Clock className="w-8 h-8 text-[#8B2635]" />,
    title: "Contabilidades",
    problem: "Lentidão e servidores instáveis no fechamento?",
    description: "Servidores lentos e backups duvidosos em época de impostos são uma receita para o desastre e stress da equipe.",
    relief: "Infraestrutura otimizada e backup imutável para suportar o pico de demanda sem stress."
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-[#C9A962]" />,
    title: "Imobiliárias",
    problem: "Gestão de contratos e vistorias offline?",
    description: "Perda de documentos físicos e lentidão no fechamento de locações custam caro. Dados de inquilinos protegidos são exigência legal.",
    relief: "Digitalização estratégica, backup em nuvem e segurança total para sua carteira de imóveis."
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
            A Il Potere entende que tecnologia deveria ser uma ferramenta de crescimento, não uma fonte de estresse. 
            Você se identifica com algum desses cenários?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PAINS.map((item, i) => (
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
                <p className="text-xs font-mono uppercase tracking-widest text-[#8B2635] mb-2">Nosso Alívio:</p>
                <p className="text-sm text-[#F5F0E8] italic">"{item.relief}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
