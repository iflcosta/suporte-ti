"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Printer, ShieldCheck, FileText, CheckSquare, Lock, Zap, Target, DollarSign, LayoutDashboard, GraduationCap } from "lucide-react"

const PASSWORD_KEY = "ilpotere2026"

type TabType = "dashboard" | "contrato" | "proposta" | "checklist" | "trilha"

export default function BusinessHub() {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard")
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
    if (activeTab === "contrato" || activeTab === "proposta" || activeTab === "checklist") {
      window.print()
    } else {
      alert("Para imprimir o Dashboard ou a Trilha, utilize o botão de impressão dentro do próprio documento.")
    }
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-[#0F0F0F] border border-[#1F1F1F] p-8 animate-scale-in shadow-2xl">
          <div className="flex justify-center mb-6 text-[#8B2635]">
            <Lock size={48} />
          </div>
          <h1 className="text-2xl font-serif text-center mb-2 text-[#F5F0E8]">Área Restrita</h1>
          <p className="text-[#78716c] text-center mb-8 text-sm uppercase tracking-widest font-mono italic">Il Potere Tech // Business Hub</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Sua senha de sócio"
              className="w-full bg-[#141414] border border-[#1F1F1F] px-4 py-3 text-[#F5F0E8] focus:outline-none focus:border-[#8B2635] transition-colors font-mono"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            {error && <p className="text-[#8B2635] text-xs font-mono text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#8B2635] text-white py-3 font-semibold uppercase tracking-widest text-sm hover:bg-[#A63344] transition-colors shadow-lg"
            >
              Entrar no Comando
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-[#080808] text-[#F5F0E8] font-sans flex flex-col overflow-hidden">
      {/* Navegação Superior - Oculto na Impressão */}
      <nav className="no-print border-b border-[#1F1F1F] bg-[#0F0F0F] sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="text-[#8B2635] font-serif text-xl font-bold italic underline border-b-2 border-[#8B2635] pb-1 hover:text-[#A63344] transition-colors cursor-pointer"
            >
              Il Potere
            </Link>
            <div className="h-4 w-[1px] bg-[#1F1F1F]"></div>
            <span className="text-xs font-mono text-[#78716c] tracking-widest uppercase hidden md:inline">Business Control Center</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
            {/* Grupo: Estratégia e Aprendizado (Interno) */}
            <div className="flex items-center gap-4 md:gap-6">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`flex items-center gap-2 text-[10px] md:text-sm uppercase tracking-wider transition-colors ${activeTab === "dashboard" ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}
              >
                <LayoutDashboard size={16} /> <span className="hidden sm:inline">Estratégia</span>
              </button>
              <button
                onClick={() => setActiveTab("trilha")}
                className={`flex items-center gap-2 text-[10px] md:text-sm uppercase tracking-wider transition-colors ${activeTab === "trilha" ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}
              >
                <GraduationCap size={16} /> <span className="hidden sm:inline">Trilha</span>
              </button>
            </div>

            {/* Separador Elegante */}
            <div className="h-6 w-[1px] bg-[#1F1F1F] mx-2 hidden sm:block"></div>

            {/* Grupo: Comercial e Documentação (Externo) */}
            <div className="flex items-center gap-4 md:gap-6">
              <button
                onClick={() => setActiveTab("proposta")}
                className={`flex items-center gap-2 text-[10px] md:text-sm uppercase tracking-wider transition-colors ${activeTab === "proposta" ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}
              >
                <Target size={16} /> <span className="hidden sm:inline">Proposta</span>
              </button>
              <button
                onClick={() => setActiveTab("contrato")}
                className={`flex items-center gap-2 text-[10px] md:text-sm uppercase tracking-wider transition-colors ${activeTab === "contrato" ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}
              >
                <ShieldCheck size={16} /> <span className="hidden sm:inline">Contrato</span>
              </button>
              <button
                onClick={() => setActiveTab("checklist")}
                className={`flex items-center gap-2 text-[10px] md:text-sm uppercase tracking-wider transition-colors ${activeTab === "checklist" ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}
              >
                <CheckSquare size={16} /> <span className="hidden sm:inline">Checklist</span>
              </button>
            </div>
            
            {(activeTab === "contrato" || activeTab === "proposta" || activeTab === "checklist") && (
              <button
                onClick={handlePrint}
                className="ml-4 bg-[#8B2635] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-none flex items-center gap-2 hover:bg-[#A63344] transition-colors text-[10px] md:text-sm font-semibold uppercase tracking-tighter shadow-lg shadow-[#8B2635]/20"
              >
                <Printer size={16} /> Imprimir
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ÁREA DE CONTEÚDO PRINCIPAL */}
      {/* ÁREA DE CONTEÚDO PRINCIPAL (OCUPA O RESTANTE DA TELA) */}
      <main className="flex-1 relative overflow-hidden bg-[#080808]">
        
        {/* VIEWERS DE HTML (IFRAMES) - SEM SCROLL EXTERNO */}
        {activeTab === "dashboard" && (
           <iframe 
             src="/docs/plano-estrategico.html" 
             className="w-full h-full border-none"
             title="Dashboard Estratégico"
           />
        )}

        {activeTab === "trilha" && (
           <iframe 
             src="/docs/trilha-tecnica.html" 
             className="w-full h-full border-none"
             title="Trilha de Especialização Técnica"
           />
        )}

        {/* COMPONENTES REACT (CONTRATO, PROPOSTA, CHECKLIST) */}
        {(activeTab === "contrato" || activeTab === "proposta" || activeTab === "checklist") && (
          <div className="absolute inset-0 overflow-y-auto p-6 md:p-12 custom-scrollbar">
            <div className="print-page bg-white text-black p-[1cm] md:p-[2cm] shadow-[0_0_50px_rgba(0,0,0,0.5)] min-h-[29.7cm] w-full max-w-[21cm] mx-auto text-[11pt] leading-relaxed animate-fade-up">
              
              {/* Header do Documento */}
              <div className="text-center mb-12 border-b-2 border-[#8B2635] pb-4">
                <h1 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-widest text-[#8B2635]">
                  {activeTab === "proposta" ? "Proposta Comercial Elite" : activeTab === "contrato" ? "Contrato de Suporte Especializado" : "Checklist Onboarding técnico"}
                </h1>
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] font-light text-gray-500 mt-2">
                  Il Potere Tech // Bragança Paulista, SP
                </p>
              </div>

              {activeTab === "contrato" && (
                <div className="prose prose-slate max-w-none text-[10.5pt]">
                  <div className="grid grid-cols-2 gap-8 mb-10 text-[9pt] border-b border-gray-100 pb-6 uppercase font-serif">
                    <div>
                      <p className="font-bold text-[#8B2635] mb-1 italic underline">CONTRATADA (Prestador):</p>
                      <p className="font-bold">IL POTERE TECH</p>
                      <p className="text-gray-500">Bragança Paulista/SP</p>
                    </div>
                    <div>
                      <p className="font-bold text-black mb-1 italic underline">CONTRATANTE (Cliente):</p>
                      <p>_____________________________________</p>
                      <p className="text-gray-500">Razão Social / Identificação</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-sm font-bold bg-[#8B2635] text-white inline-block px-3 py-1 mb-2 uppercase italic tracking-tighter">Cláusula 1ª — Objeto e Planos</h2>
                      <p>O presente contrato tem por objeto a prestação de serviços de suporte técnico em TI, monitoramento RMM e gestão proativa. Planos disponíveis: **BASIC (390), STANDARD (690) ou PREMIUM (1290)**.</p>
                    </div>

                    <div>
                      <h2 className="text-sm font-bold bg-[#8B2635] text-white inline-block px-3 py-1 mb-2 uppercase italic tracking-tighter">Cláusula 2ª — Logística de Peças</h2>
                      <p>Substituição de hardware não está inclusa na mensalidade. Peças serão faturadas separadamente pelo valor de custo acréscido de **10% de taxa de logística**. </p>
                    </div>

                    <div>
                      <h2 className="text-sm font-bold bg-black text-white inline-block px-3 py-1 mb-2 uppercase italic tracking-tighter">Cláusula 3ª — Fidelidade Zero</h2>
                      <p>O contrato é celebrado por prazo indeterminado e pode ser rescindido a **qualquer momento**, sem aplicação de multas, mediante aviso prévio formal de 30 dias por canal oficial.</p>
                    </div>
                  </div>

                  <div className="mt-32 flex justify-between gap-12 font-serif text-[9pt] italic">
                    <div className="w-1/2 border-t border-black pt-2 text-center text-gray-500">ASSINATURA CLIENTE</div>
                    <div className="w-1/2 border-t border-black pt-2 text-center text-[#8B2635] font-bold uppercase tracking-widest font-sans">Il Potere Tech // Bragança</div>
                  </div>
                </div>
              )}

              {activeTab === "proposta" && (
                <div className="prose prose-slate max-w-none text-center font-serif flex flex-col h-full">
                  <p className="text-sm mb-12 italic text-gray-600 block border-l-4 border-[#8B2635] pl-4 mx-auto max-w-md">"Sua tecnologia não deve ser um custo de manutenção, mas um motor de produtividade ininterrupta."</p>
                  
                  <div className="grid grid-cols-2 gap-8 text-left mb-12">
                    <div className="p-6 bg-gray-50 border border-gray-100 flex flex-col gap-2">
                      <h3 className="font-bold uppercase tracking-tighter text-[#8B2635] mb-2 flex items-center gap-2"><Zap size={20} /> Suporte Remoto</h3>
                      <p className="text-[9pt] leading-tight text-gray-600">Resolução instantânea para lentidão, vírus e e-mails. Foco em eliminar o tempo de inatividade da equipe.</p>
                    </div>
                    <div className="p-6 bg-black text-white flex flex-col gap-2">
                      <h3 className="font-bold uppercase tracking-tighter text-[#C9A962] mb-2 flex items-center gap-2"><CheckSquare size={20} /> Presença Física</h3>
                      <p className="text-[9pt] leading-tight text-gray-400">Visitas especializadas para manutenção de hardware, infraestrutura de rede e periféricos críticos.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-0 mb-12 border border-gray-200">
                    <div className="p-8 bg-white">
                      <h4 className="text-[10px] tracking-widest uppercase mb-4 text-gray-400 font-sans">BASIC</h4>
                      <div className="text-3xl font-bold mb-4 font-sans text-gray-800">R$ 390</div>
                      <ul className="text-[8pt] text-left space-y-2 uppercase leading-snug font-sans text-gray-500">
                        <li>• Até 05 PCs</li>
                        <li>• Suporte Remoto Ilimitado</li>
                        <li>• 1 Visita Presencial</li>
                      </ul>
                    </div>
                    <div className="p-8 bg-[#8B2635] text-white shadow-2xl relative z-10 scale-105">
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A962] text-black text-[8px] px-4 py-1 font-bold uppercase tracking-widest">Mais Vendido</span>
                      <h4 className="text-[10px] tracking-widest uppercase mb-4 text-white/50 font-sans">STANDARD</h4>
                      <div className="text-3xl font-bold mb-4 font-sans">R$ 690</div>
                      <ul className="text-[8pt] text-left space-y-2 uppercase leading-snug font-sans">
                        <li>• Até 15 PCs</li>
                        <li>• Monitoramento 24/7</li>
                        <li>• 2 Visitas Presenciais</li>
                      </ul>
                    </div>
                    <div className="p-8 bg-white">
                      <h4 className="text-[10px] tracking-widest uppercase mb-4 text-gray-400 font-sans">PREMIUM</h4>
                      <div className="text-3xl font-bold mb-4 font-sans text-gray-800">R$ 1290</div>
                      <ul className="text-[8pt] text-left space-y-2 uppercase leading-snug font-sans text-gray-500">
                        <li>• Até 40 PCs</li>
                        <li>• Resposta Prioritária (1h)</li>
                        <li>• Visitas Semanais</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto bg-gray-50 p-6 flex items-center justify-between">
                    <div className="text-left flex-1 border-r border-gray-200 pr-6 mr-6">
                      <h4 className="font-bold flex items-center gap-2 text-sm uppercase"><DollarSign size={18} className="text-[#8B2635]" /> Fidelidade Zero</h4>
                      <p className="text-[9pt] text-gray-500">Acreditamos no nosso valor, não em multas. Cancele com 30 dias de aviso prévio.</p>
                    </div>
                    <div className="text-right flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest font-sans text-gray-400">Contate o Sócio</span>
                      <span className="font-bold font-sans text-gray-800">(11) 9 ____-____</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "checklist" && (
                <div className="prose prose-slate max-w-none text-[10pt]">
                  <h2 className="text-sm font-bold bg-black text-white inline-block px-3 py-1 mb-6 uppercase italic">Arsenal de Campo // Il Potere Tech</h2>
                  <div className="grid grid-cols-2 gap-12 mb-10 border-b border-gray-100 pb-10">
                    <div>
                      <h3 className="font-bold text-[#8B2635] text-[10px] uppercase mb-4 tracking-widest border-b border-[#8B2635] pb-1">Elétrica e Rede</h3>
                      <ul className="list-disc ml-4 space-y-2 text-gray-600">
                        <li>Testador de Tomada (Plug Tester)</li>
                        <li>Testador de Fonte Profissional</li>
                        <li>Multímetro Digital RMS</li>
                        <li>Certificador de Cabo RJ45</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#8B2635] text-[10px] uppercase mb-4 tracking-widest border-b border-[#8B2635] pb-1">Limpeza e Diagnóstico</h3>
                      <ul className="list-disc ml-4 space-y-2 text-gray-600">
                        <li>Álcool Isopropílico 99% + Ar Comprimido</li>
                        <li>Pasta Térmica de Prata (Arctic Silver)</li>
                        <li>Kit Pen Drives (Ventoy com Windows 10/11)</li>
                        <li>Scanner de Rede Advanced IP</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 md:p-8 flex flex-col gap-6">
                    <h3 className="font-bold text-center uppercase tracking-widest text-[#8B2635] text-xs">A "Hora 1" Elite</h3>
                    <div className="grid grid-cols-2 gap-6 font-mono text-[9pt]">
                      <div className="flex gap-4">
                        <div className="bg-black text-white w-6 h-6 flex items-center justify-center shrink-0">1</div>
                        <div className="text-gray-600"><strong>INFRA:</strong> Mapear Rack e IPs. Testar aterramento das tomadas.</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-black text-white w-6 h-6 flex items-center justify-center shrink-0">2</div>
                        <div><strong>DEPLOY:</strong> Agente RMM + RustDesk. Etiquetagem física ID.</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-black text-white w-6 h-6 flex items-center justify-center shrink-0">3</div>
                        <div><strong>RISCO:</strong> Auditoria de Backup e Nível de Acesso (Admin?).</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-black text-white w-6 h-6 flex items-center justify-center shrink-0">4</div>
                        <div><strong>CLIENT:</strong> Adesivagem e manual de abertura de chamados.</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer do Documento para Impressão */}
              <div className="mt-auto pt-12 text-[8px] text-gray-400 flex justify-between items-end italic border-t border-gray-100">
                <div>
                  <p className="font-bold text-gray-600">IL POTERE TECH — SOLUÇÕES PROATIVAS EM TI</p>
                  Bragança Paulista, SP | (11) 9 ____-____ | www.ilpotere.tech
                </div>
                <div className="text-right uppercase tracking-[0.2em] font-mono">
                  Documento de Uso Restrito // Pg 01
                </div>
              </div>

            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-up {
          animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @media print {
          body { background: white !important; }
          .shadow-2xl, .shadow-xl { box-shadow: none !important; }
          main { padding: 0 !important; }
          .print-page { margin: 0 !important; padding: 1.5cm !important; border: none !important; box-shadow: none !important; }
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  )
}
