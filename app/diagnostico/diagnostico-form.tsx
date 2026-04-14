"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function DiagnosticoForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    dispositivos: "1-5",
    problemas: [] as string[],
    observacoes: "",
  })

  const problemasOpcoes = [
    "Computador lento",
    "Wi-Fi instável",
    "Dados inseguros",
    "Vírus/malwares",
    "Servidor fora do ar",
    "Outro problema",
  ]

  const toggleProblema = (problema: string) => {
    setFormData(prev => ({
      ...prev,
      problemas: prev.problemas.includes(problema)
        ? prev.problemas.filter(p => p !== problema)
        : [...prev.problemas, problema],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const mensagem = `*Diagnóstico Grátis - Il Potere Tech*

*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*Dispositivos:* ${formData.dispositivos}
*Problemas:* ${formData.problemas.join(", ") || "Nenhum selecionado"}
*Observações:* ${formData.observacoes || "Nenhuma"}`

    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`
    window.open(url, "_blank")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-xs uppercase tracking-widest text-[#78716c] mb-3">
          Nome Completo
        </label>
        <input
          type="text"
          required
          value={formData.nome}
          onChange={e => setFormData(prev => ({ ...prev, nome: e.target.value }))}
          className="w-full px-5 py-4 bg-[#111] border border-[#222] rounded-lg text-[#F5F0E8] focus:border-[#8B2635] focus:outline-none transition-colors"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-[#78716c] mb-3">
          Nome da Empresa
        </label>
        <input
          type="text"
          required
          value={formData.empresa}
          onChange={e => setFormData(prev => ({ ...prev, empresa: e.target.value }))}
          className="w-full px-5 py-4 bg-[#111] border border-[#222] rounded-lg text-[#F5F0E8] focus:border-[#8B2635] focus:outline-none transition-colors"
          placeholder="Nome da sua empresa"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-[#78716c] mb-3">
          Quantos dispositivos?
        </label>
        <select
          value={formData.dispositivos}
          onChange={e => setFormData(prev => ({ ...prev, dispositivos: e.target.value }))}
          className="w-full px-5 py-4 bg-[#111] border border-[#222] rounded-lg text-[#F5F0E8] focus:border-[#8B2635] focus:outline-none transition-colors"
        >
          <option value="1-5">1 a 5 dispositivos</option>
          <option value="6-10">6 a 10 dispositivos</option>
          <option value="11-15">11 a 15 dispositivos</option>
          <option value="16+">Mais de 15</option>
        </select>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-[#78716c] mb-3">
          Quais problemas enfrenta?
        </label>
        <div className="grid grid-cols-2 gap-3">
          {problemasOpcoes.map(problema => (
            <button
              key={problema}
              type="button"
              onClick={() => toggleProblema(problema)}
              className={`px-4 py-3 rounded-lg text-sm text-left transition-all ${
                formData.problemas.includes(problema)
                  ? "bg-[#8B2635] text-white"
                  : "bg-[#111] border border-[#222] text-[#F5F0E8] hover:border-[#8B2635]"
              }`}
            >
              {problema}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-[#78716c] mb-3">
          Observações (opcional)
        </label>
        <textarea
          value={formData.observacoes}
          onChange={e => setFormData(prev => ({ ...prev, observacoes: e.target.value }))}
          className="w-full px-5 py-4 bg-[#111] border border-[#222] rounded-lg text-[#F5F0E8] focus:border-[#8B2635] focus:outline-none transition-colors min-h-[100px]"
          placeholder="Descreva outros problemas ou necessidades..."
        />
      </div>

      <button
        type="submit"
        className="w-full py-5 bg-[#8B2635] text-white text-sm font-medium uppercase tracking-widest hover:bg-[#A63344] transition-colors rounded-lg"
      >
        Agendar Diagnóstico Grátis
      </button>

      <p className="text-center text-xs text-[#78716c]">
        Respondemos via WhatsApp em até 30 minutos
      </p>

      <div className="bg-[#111] p-6 rounded-lg text-center">
        <p className="text-[#C9A962] text-sm font-medium mb-2">Garantia Il Potere</p>
        <p className="text-[#78716c] text-sm">
          Diagnóstico sem compromisso. Se não resolver, você não paga.<br />
          Sem contrato de fidelidade.
        </p>
      </div>
    </form>
  )
}