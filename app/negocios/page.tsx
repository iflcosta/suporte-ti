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
              <div className="text-center mb-12 border-b-4 border-[#8B2635] pb-6">
                <h1 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-widest text-[#8B2635] mb-2 leading-tight">
                  {activeTab === "proposta" ? "Proposta Comercial Elite" : activeTab === "contrato" ? "Contrato de Suporte Especializado" : "Checklist Onboarding Técnico"}
                </h1>
                <div className="flex items-center justify-center gap-4 text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-gray-500">
                  <span>Il Potere Tech</span>
                  <span className="w-2 h-2 bg-[#C9A962] rounded-full"></span>
                  <span>BP // SP</span>
                </div>
              </div>

              {activeTab === "contrato" && (
                <div className="prose prose-slate max-w-none text-[10pt] space-y-6">
                  <div className="grid grid-cols-2 gap-8 mb-8 text-[8.5pt] border-y border-gray-100 py-6 uppercase font-serif">
                    <div>
                      <p className="font-bold text-[#8B2635] mb-1 italic underline">CONTRATADA (Prestador):</p>
                      <p className="font-bold text-lg">IL POTERE TECH</p>
                      <p className="text-gray-500">Bragança Paulista/SP</p>
                    </div>
                    <div>
                      <p className="font-bold text-black mb-1 italic underline">CONTRATANTE (Cliente):</p>
                      <p className="font-bold text-lg mt-1 border-b border-gray-300">________________________</p>
                      <p className="text-gray-500">Razão Social / ID</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-justify leading-snug">
                    <section>
                      <h2 className="text-[11px] font-bold bg-[#8B2635] text-white inline-block px-3 py-1 mb-2 uppercase italic tracking-tighter">Cláusula 1ª — Objeto</h2>
                      <p>O presente contrato tem por objeto a prestação de serviços de suporte em Tecnologia da Informação (TI), incluindo suporte remoto via RustDesk, orientação técnica por WhatsApp e visitas presenciais conforme o plano selecionado.</p>
                    </section>
                    <section>
                      <h2 className="text-[11px] font-bold bg-[#8B2635] text-white inline-block px-3 py-1 mb-2 uppercase italic tracking-tighter">Cláusula 2ª — Escopo</h2>
                      <p>Os serviços abrangem suporte em hardware, software, redes e periféricos. **Não estão inclusos:** desenvolvimento de sistemas, design, consultoria jurídica/contábil ou elétrica predial.</p>
                    </section>
                    <section>
                      <h2 className="text-[11px] font-bold bg-[#8B2635] text-white inline-block px-3 py-1 mb-2 uppercase italic tracking-tighter">Cláusula 3ª — Atendimento</h2>
                      <p>Horário comercial (08:00 às 18:00). Incidentes Críticos (rede inativa/servidor fora) possuem plantão 24/7 conforme prioridade do plano.</p>
                    </section>
                    <section>
                      <h2 className="text-[11px] font-bold bg-[#8B2635] text-white inline-block px-3 py-1 mb-2 uppercase italic tracking-tighter">Cláusula 4ª — Peças</h2>
                      <p>Peças faturadas separadamente pelo valor de aquisição + **10% de taxa de logística**. O Contratante deve aprovar o orçamento antes da compra.</p>
                    </section>
                    <section>
                      <h2 className="text-[11px] font-bold bg-black text-white inline-block px-3 py-1 mb-2 uppercase italic tracking-tighter">Cláusula 5ª — Confidencialidade</h2>
                      <p>Sigilo absoluto sobre dados e arquivos acessados, em total conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/18).</p>
                    </section>
                    <section>
                      <h2 className="text-[11px] font-bold bg-black text-white inline-block px-3 py-1 mb-2 uppercase italic tracking-tighter">Cláusula 9ª — Fidelidade Zero</h2>
                      <p>Rescisão permitida a **qualquer momento**, sem multas, mediante aviso prévio formal de 30 dias por canal oficial.</p>
                    </section>
                  </div>

                  <div className="mt-20 flex justify-between gap-12 font-serif text-[8pt] italic">
                    <div className="w-1/2 border-t border-black pt-2 text-center text-gray-500">ASSINATURA CLIENTE</div>
                    <div className="w-1/2 border-t border-[#8B2635] pt-2 text-center text-[#8B2635] font-bold uppercase tracking-widest font-sans underline decoration-[#C9A962]">IL POTERE TECH // BRAGANÇA</div>
                  </div>
                </div>
              )}


              {activeTab === "proposta" && (
                <div className="prose prose-slate max-w-none text-center font-serif flex flex-col h-full">
                  <div className="bg-[#080808] text-white p-8 mb-10 border-l-8 border-[#8B2635] text-left shadow-lg">
                    <h2 className="text-[#C9A962] font-serif italic text-2xl mb-4 leading-tight">"Tecnologia fluida não é custo, é o motor da sua rentabilidade."</h2>
                    <p className="text-gray-400 font-sans text-sm tracking-wide leading-relaxed">Foco total em PMEs de Bragança Paulista. Sem pegadinhas, sem contratos engessados. Apenas infraestrutura de elite para quem não pode parar.</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-0 mb-10 border border-gray-200">
                    <div className="p-8 bg-white border-r border-gray-100">
                      <h4 className="text-[10px] tracking-[0.2em] uppercase mb-4 text-gray-400 font-sans font-bold">BASIC</h4>
                      <div className="text-3xl font-bold mb-1 font-sans text-[#080808]">R$ 390</div>
                      <p className="text-[8px] text-gray-400 mb-6 uppercase tracking-[0.2em]">/ mensal</p>
                      <ul className="text-[8pt] text-left space-y-3 uppercase font-sans text-gray-600 font-bold">
                        <li className="flex items-center gap-2"><CheckSquare size={12} className="text-[#8B2635]" /> Até 05 PCs</li>
                        <li className="flex items-center gap-2"><CheckSquare size={12} className="text-[#8B2635]" /> Remoto Ilimitado</li>
                        <li className="flex items-center gap-2"><CheckSquare size={12} className="text-[#8B2635]" /> 1 Visita Especializada</li>
                      </ul>
                    </div>
                    
                    <div className="p-8 bg-[#080808] text-white shadow-2xl relative z-10 scale-105 border-x-4 border-[#8B2635]">
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8B2635] text-white text-[9px] px-6 py-1.5 font-bold uppercase tracking-[0.3em] shadow-lg">Escolha Elite</span>
                      <h4 className="text-[10px] tracking-[0.2em] uppercase mb-4 text-[#C9A962] font-sans font-bold">STANDARD</h4>
                      <div className="text-3xl font-bold mb-1 font-sans text-white">R$ 690</div>
                      <p className="text-[8px] text-white/30 mb-6 uppercase tracking-[0.2em]">/ mensal</p>
                      <ul className="text-[8pt] text-left space-y-3 uppercase font-sans text-white/80 font-bold">
                        <li className="flex items-center gap-2"><CheckSquare size={12} className="text-[#C9A962]" /> Até 15 PCs</li>
                        <li className="flex items-center gap-2"><CheckSquare size={12} className="text-[#C9A962]" /> Remoto Ilimitado</li>
                        <li className="flex items-center gap-2"><CheckSquare size={12} className="text-[#C9A962]" /> 2 Visitas Presenciais</li>
                        <li className="flex items-center gap-2"><CheckSquare size={12} className="text-[#C9A962]" /> Monitoramento 24/7</li>
                      </ul>
                    </div>

                    <div className="p-8 bg-white border-l border-gray-100">
                      <h4 className="text-[10px] tracking-[0.2em] uppercase mb-4 text-gray-400 font-sans font-bold">PREMIUM</h4>
                      <div className="text-3xl font-bold mb-1 font-sans text-[#080808]">R$ 1.290</div>
                      <p className="text-[8px] text-gray-400 mb-6 uppercase tracking-[0.2em]">/ mensal</p>
                      <ul className="text-[8pt] text-left space-y-3 uppercase font-sans text-gray-600 font-bold">
                        <li className="flex items-center gap-2"><CheckSquare size={12} className="text-[#8B2635]" /> Até 40 PCs</li>
                        <li className="flex items-center gap-2"><CheckSquare size={12} className="text-[#8B2635]" /> Resposta em 1h</li>
                        <li className="flex items-center gap-2"><CheckSquare size={12} className="text-[#8B2635]" /> Visitas Semanais</li>
                        <li className="flex items-center gap-2"><CheckSquare size={12} className="text-[#8B2635]" /> Suporte ao Servidor</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-8 text-left border-y border-gray-200">
                    <h3 className="font-bold text-[#8B2635] uppercase tracking-widest text-[10px] mb-6 border-b-2 border-[#8B2635] pb-2 inline-block">Pilares Estritamente Respeitados</h3>
                    <div className="grid grid-cols-2 gap-8 text-[9pt]">
                      <div>
                        <strong className="text-black block mb-1 uppercase tracking-tight">Fidelidade Zero</strong>
                        <p className="text-gray-500 font-sans leading-relaxed text-[8.5pt]">Não prendemos clientes por contrato, mas pelo valor da nossa entrega. Cancele quando quiser com 30 dias de aviso.</p>
                      </div>
                      <div>
                        <strong className="text-black block mb-1 uppercase tracking-tight">Logística 10%</strong>
                        <p className="text-gray-500 font-sans leading-relaxed text-[8.5pt]">Transparência total: peças a preço de custo operacional, acrescido de apenas 10% pela gestão técnica.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "checklist" && (
                <div className="prose prose-slate max-w-none text-[9.5pt]">
                  <div className="bg-[#080808] text-white p-6 mb-10 flex justify-between items-center border-b-8 border-[#8B2635]">
                    <div>
                      <h2 className="text-[#C9A962] text-xl font-bold uppercase tracking-widest m-0 leading-tight italic font-serif">Onboarding de Elite</h2>
                      <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-2 font-mono">Protocolo Operacional // Bragança Paulista</p>
                    </div>
                    <Target size={50} className="text-[#8B2635] opacity-40" />
                  </div>

                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div className="p-6 bg-gray-50 border border-gray-100">
                      <h3 className="font-bold text-[#8B2635] text-[10px] uppercase mb-4 tracking-widest border-b border-[#8B2635] pb-1">K.0 — Arsenal Físico</h3>
                      <ul className="space-y-2 text-gray-700 font-sans text-[8.5pt] p-0 list-none">
                        <li className="flex items-center gap-2 font-bold text-black border-l-2 border-[#C9A962] pl-2">Kit Fixit / Philips Precisão</li>
                        <li className="flex items-center gap-2 font-bold text-black border-l-2 border-[#C9A962] pl-2">Multímetro Digital RMS</li>
                        <li className="flex items-center gap-2 font-bold text-black border-l-2 border-[#C9A962] pl-2">Pulseira Antiestática</li>
                        <li className="flex items-center gap-2 font-bold text-black border-l-2 border-[#C9A962] pl-2">Plug Tester (Tomadas)</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gray-50 border border-gray-100">
                      <h3 className="font-bold text-[#8B2635] text-[10px] uppercase mb-4 tracking-widest border-b border-[#8B2635] pb-1">K.1 — Deploy Digital</h3>
                      <ul className="space-y-2 text-gray-700 font-sans text-[8.5pt] p-0 list-none">
                        <li className="flex items-center gap-2 font-bold text-black border-l-2 border-[#C9A962] pl-2">Tactical RMM + RustDesk</li>
                        <li className="flex items-center gap-2 font-bold text-black border-l-2 border-[#C9A962] pl-2">Testador de Fonte Profissional</li>
                        <li className="flex items-center gap-2 font-bold text-black border-l-2 border-[#C9A962] pl-2">Certificador de Rede RJ45</li>
                        <li className="flex items-center gap-2 font-bold text-black border-l-2 border-[#C9A962] pl-2">Insumos (Pasta MX-4 / Álcool)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-bold text-center uppercase tracking-widest text-gray-400 text-[9px] mb-8">Fases da "Hora 1" Elite</h3>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="p-4 bg-[#080808] text-white border-t-4 border-[#8B2635]">
                         <div className="text-[#C9A962] font-serif italic text-lg mb-1">F1</div>
                         <div className="text-[8px] font-bold uppercase tracking-tighter">RECON (Sócio 1)</div>
                         <p className="text-[7.5pt] text-gray-400 mt-2 font-sans">Mapear Rack, IPs e Gateways.</p>
                      </div>
                      <div className="p-4 bg-[#080808] text-white border-t-4 border-[#8B2635]">
                         <div className="text-[#C9A962] font-serif italic text-lg mb-1">F2</div>
                         <div className="text-[8px] font-bold uppercase tracking-tighter">DEPLOY (Sócio 2)</div>
                         <p className="text-[7.5pt] text-gray-400 mt-2 font-sans">Agentes RMM e Etiquetas ID.</p>
                      </div>
                      <div className="p-4 bg-[#080808] text-white border-t-4 border-[#8B2635]">
                         <div className="text-[#C9A962] font-serif italic text-lg mb-1">F3</div>
                         <div className="text-[8px] font-bold uppercase tracking-tighter">RISCO</div>
                         <p className="text-[7.5pt] text-gray-400 mt-2 font-sans">Auditoria de Backup e LGPD.</p>
                      </div>
                      <div className="p-4 bg-[#080808] text-white border-t-4 border-[#8B2635]">
                         <div className="text-[#C9A962] font-serif italic text-lg mb-1">F4</div>
                         <div className="text-[8px] font-bold uppercase tracking-tighter">CLOSE</div>
                         <p className="text-[7.5pt] text-gray-400 mt-2 font-sans">Adesivagem e Treinamento.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer do Documento para Impressão */}
              <div className="mt-auto pt-10 text-[8px] text-gray-300 flex justify-between items-end italic border-t border-gray-100 uppercase tracking-widest font-mono">
                <div>
                  <p className="font-bold text-[#8B2635]">IL POTERE TECH // ELITE IT SOLUTIONS</p>
                  <p>Bragança Paulista, SP | www.ilpotere.tech</p>
                </div>
                <div className="text-right text-gray-400">
                  Ref: Março 2026 // Hub Control Center
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
