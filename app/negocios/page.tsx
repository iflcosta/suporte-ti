"use client"

import React, { useState, useEffect } from "react"
import { Printer, ShieldCheck, FileText, CheckSquare, Lock } from "lucide-react"

const PASSWORD_KEY = "ilpotere2026"

export default function BusinessHub() {
  const [activeTab, setActiveTab] = useState<"contrato" | "proposta" | "checklist">("proposta")
  const [password, setPassword] = useState("")
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === PASSWORD_KEY) {
      setIsAuthorized(true)
      localStorage.setItem("hub_auth", "true")
    } else {
      setError("Senha incorreta. Tente novamente.")
    }
  }

  useEffect(() => {
    if (localStorage.getItem("hub_auth") === "true") {
      setIsAuthorized(true)
    }
  }, [])

  const handlePrint = () => {
    window.print()
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-[#0F0F0F] border border-[#1F1F1F] p-8 animate-scale-in">
          <div className="flex justify-center mb-6 text-[#8B2635]">
            <Lock size={48} />
          </div>
          <h1 className="text-2xl font-serif text-center mb-2 text-[#F5F0E8]">Área Restrita</h1>
          <p className="text-[#78716c] text-center mb-8 text-sm uppercase tracking-widest font-mono">Il Potere Tech // Business</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Digite a senha de acesso"
              className="w-full bg-[#141414] border border-[#1F1F1F] px-4 py-3 text-[#F5F0E8] focus:outline-none focus:border-[#8B2635] transition-colors font-mono"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-[#8B2635] text-xs font-mono">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#8B2635] text-white py-3 font-semibold uppercase tracking-widest text-sm hover:bg-[#A63344] transition-colors"
            >
              Entrar no Hub
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F0E8] font-sans">
      {/* Navegação Superior - Oculto na Impressão */}
      <nav className="no-print border-b border-[#1F1F1F] bg-[#0F0F0F] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-[#8B2635] font-serif text-xl font-bold italic">Il Potere</div>
            <div className="h-4 w-[1px] bg-[#1F1F1F]"></div>
            <span className="text-xs font-mono text-[#78716c] tracking-widest uppercase">Business Hub</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab("proposta")}
              className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-colors ${activeTab === "proposta" ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}
            >
              <FileText size={16} /> Proposta
            </button>
            <button
              onClick={() => setActiveTab("contrato")}
              className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-colors ${activeTab === "contrato" ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}
            >
              <ShieldCheck size={16} /> Contrato
            </button>
            <button
              onClick={() => setActiveTab("checklist")}
              className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-colors ${activeTab === "checklist" ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}
            >
              <CheckSquare size={16} /> Checklist
            </button>
            
            <button
              onClick={handlePrint}
              className="ml-4 bg-[#8B2635] text-white px-4 py-2 rounded-sm flex items-center gap-2 hover:bg-[#A63344] transition-colors text-sm font-semibold uppercase tracking-tighter"
            >
              <Printer size={16} /> Imprimir
            </button>
          </div>
        </div>
      </nav>

      {/* Área do Documento */}
      <main className="max-w-6xl mx-auto p-12">
        <div className="print-page bg-white text-black p-[2cm] shadow-2xl min-h-[29.7cm] w-full max-w-[21cm] mx-auto text-[11pt] leading-relaxed animate-fade-up">
          
          {activeTab === "contrato" && (
            <div className="prose prose-slate max-w-none">
              <h1 className="text-2xl font-bold mb-8 text-center uppercase border-b-2 border-black pb-4">Contrato de Prestação de Serviços de TI</h1>
              
              <div className="mb-6">
                <p><strong>CONTRATADA:</strong> IP TECH // IL POTERE TECH, Bragança Paulista/SP.</p>
                <p><strong>CONTRATANTE:</strong> ____________________________________________________</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-4 underline">1. DO OBJETO</h2>
              <p>O presente contrato tem por objeto a prestação de serviços de suporte técnico em informática, gestão de infraestrutura de TI e monitoramento preventivo (RMM), compreendendo:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Suporte remoto e presencial para computadores e redes.</li>
                <li>Gestão de backups e segurança de rede.</li>
                <li>Monitoramento de saúde de hardware (discos, CPU, memória).</li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4 underline">2. ACORDO DE NÍVEL DE SERVIÇO (SLA)</h2>
              <table className="w-full border-collapse border border-gray-300 mt-4 mb-4 text-[10pt]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">GRAVIDADE</th>
                    <th className="border border-gray-300 p-2">REMOTO</th>
                    <th className="border border-gray-300 p-2">PRESENCIAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>CRÍTICO</strong></td>
                    <td className="border border-gray-300 p-2">4 Horas</td>
                    <td className="border border-gray-300 p-2">8 Horas</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>URGENTE</strong></td>
                    <td className="border border-gray-300 p-2">12 Horas Úteis</td>
                    <td className="border border-gray-300 p-2">Verificação</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>ROTINA</strong></td>
                    <td className="border border-gray-300 p-2">48 Horas Úteis</td>
                    <td className="border border-gray-300 p-2">Verificação</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-xl font-bold mt-8 mb-4 underline">3. VIGÊNCIA E FIDELIDADE</h2>
              <p>O contrato tem vigência de <strong>12 (doze) meses</strong>. Nos primeiros <strong>90 dias</strong>, a rescisão é livre de multa para ambas as partes.</p>

              <div className="mt-20 flex justify-between gap-12">
                <div className="w-1/2 border-t border-black pt-2 text-center text-xs">CONTRATANTE (ASSINATURA)</div>
                <div className="w-1/2 border-t border-black pt-2 text-center text-xs">CONTRATADA (IL POTERE TECH)</div>
              </div>
            </div>
          )}

          {activeTab === "proposta" && (
            <div className="prose prose-slate max-w-none text-center">
              <h1 className="text-3xl font-bold mb-2 uppercase text-[#8B2635]">Proposta Comercial</h1>
              <p className="text-sm font-mono tracking-widest mb-12 uppercase text-gray-500 italic">"TI Humana, Sem Amarras, Com Resultados"</p>
              
              <div className="text-left bg-gray-50 p-6 border-l-4 border-[#8B2635] mb-8">
                <h2 className="text-lg font-bold mb-2">🚀 Redução de Custos e Produtividade</h2>
                <p>Sua empresa perde produtividade com máquinas lentas e suporte reativo? Nossa gestão proativa RMM reduz em até 40% as paradas inesperadas.</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-12">
                <div className="border border-gray-200 p-4 rounded bg-gray-50">
                  <h3 className="font-bold border-b pb-2 mb-2">ESSENZIALE</h3>
                  <p className="text-2xl font-bold mb-4">R$ 350<span className="text-xs">/mês</span></p>
                  <ul className="text-[9pt] text-left list-disc ml-4 space-y-1">
                    <li>Ilimitado Remoto</li>
                    <li>1 Visita Mensal</li>
                    <li>Até 5 PCs</li>
                  </ul>
                </div>
                <div className="border border-[#8B2635] p-4 rounded bg-white scale-105 shadow-lg relative">
                  <span className="absolute top-0 right-0 bg-[#8B2635] text-white text-[8pt] px-2 py-1 uppercase">Sugerido</span>
                  <h3 className="font-bold border-b pb-2 mb-2">PROFESSIONALE</h3>
                  <p className="text-2xl font-bold mb-4">R$ 1.200<span className="text-xs">/mês</span></p>
                  <ul className="text-[9pt] text-left list-disc ml-4 space-y-1">
                    <li>Ilimitado Remoto</li>
                    <li>2 Visitas Mensais</li>
                    <li>Até 15 PCs</li>
                  </ul>
                </div>
                <div className="border border-gray-200 p-4 rounded bg-gray-50">
                  <h3 className="font-bold border-b pb-2 mb-2">IMPRESA</h3>
                  <p className="text-2xl font-bold mb-4">R$ 2.500<span className="text-xs">/mês</span></p>
                  <ul className="text-[9pt] text-left list-disc ml-4 space-y-1">
                    <li>Supere 24/7</li>
                    <li>Visitas Ilimitadas</li>
                    <li>Até 30 PCs</li>
                  </ul>
                </div>
              </div>

              <div className="text-left mt-12 bg-gray-900 text-white p-6 no-print">
                <h3 className="font-bold text-center mb-4 uppercase tracking-widest text-[#C9A962]">Diferencial Il Potere</h3>
                <div className="grid grid-cols-2 gap-6 text-[10pt]">
                  <div>• Atendimento em até 4h</div>
                  <div>• Monitoramento 24h</div>
                  <div>• Sem fidelidade (90 dias)</div>
                  <div>• Foco total em produtividade</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "checklist" && (
            <div className="prose prose-slate max-w-none">
              <h1 className="text-2xl font-bold mb-4 text-[#8B2635]">Checklist Onboarding: A Hora 1</h1>
              <p className="text-[10pt] text-gray-600 mb-8 italic border-b pb-4">Roteiro operacional de implantação técnica (Iago & Camargo)</p>

              <h2 className="text-lg font-bold mt-6 mb-2">🎒 FASE 1: RECONHECIMENTO (Iago)</h2>
              <ul className="list-none space-y-2 text-[10pt]">
                <li className="flex items-center gap-3">▢ <strong>Mapear Rack/Modem:</strong> Fotos e IPs de infra.</li>
                <li className="flex items-center gap-3">▢ <strong>Escaneamento:</strong> Advaned IP Scanner na rede.</li>
                <li className="flex items-center gap-3">▢ <strong>Servidor:</strong> Saúde do hardware e backups.</li>
              </ul>

              <h2 className="text-lg font-bold mt-8 mb-2">💻 FASE 2: ESTAÇÕES (Camargo)</h2>
              <ul className="list-none space-y-2 text-[10pt]">
                <li className="flex items-center gap-3">▢ <strong>Identificação:</strong> Etiqueta física com ID [CLI-DEP-01].</li>
                <li className="flex items-center gap-3">▢ <strong>Tactical RMM:</strong> Instalação silenciosa do agente.</li>
                <li className="flex items-center gap-3">▢ <strong>RustDesk:</strong> Acesso não supervisionado configurado.</li>
              </ul>

              <h2 className="text-lg font-bold mt-8 mb-4">🏷️ PADRÃO DE NOMES SUGERIDO</h2>
              <div className="bg-gray-100 p-4 font-mono text-sm border-l-4 border-black mb-8">
                [SIGLA-EMPRESA]-[DEP]-[SEQ] <br/>
                Ex: ST-REC-01 (Saúde Total - Recepção 01)
              </div>
            </div>
          )}

          {/* Rodapé do Documento */}
          <div className="mt-auto pt-8 border-t border-gray-200 text-[8pt] text-gray-400 flex justify-between items-end">
            <div>
              Il Potere Tech — Suporte de Elite em Bragança Paulista<br/>
              www.ilpotere.tech | contato@ilpotere.tech
            </div>
            <div className="text-right">
              Página 1 / 1
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
