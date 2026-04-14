import { Metadata } from "next"
import { DiagnosticoForm } from "./diagnostico-form"

export const metadata: Metadata = {
  title: "Diagnóstico Grátis — Il Potere Tech",
  description: "Auditoria gratuita do seu ambiente de TI. Identificamos problemas e apresentamos solução sem compromisso.",
}

export default function DiagnosticoPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F0E8] font-sans flex items-center justify-center py-20">
      <div className="w-full max-w-lg mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#8B2635] text-white text-xs font-mono tracking-[0.2em] uppercase mb-6">
            Diagnóstico Grátis
          </span>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Auditoria de TI</h1>
          <p className="text-[#78716c] text-lg">
            Preencha abaixo para agendar seu diagnóstico gratuito.
          </p>
        </div>

        <DiagnosticoForm />
      </div>
    </div>
  )
}