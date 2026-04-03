"use client"

import React, { useState, useEffect } from "react"
import { Printer, ShieldCheck, FileText, CheckSquare, Lock, Zap, Target, DollarSign } from "lucide-react"

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
            <div className="text-[#8B2635] font-serif text-xl font-bold italic underline border-b-2 border-[#8B2635] pb-1">Il Potere</div>
            <div className="h-4 w-[1px] bg-[#1F1F1F]"></div>
            <span className="text-xs font-mono text-[#78716c] tracking-widest uppercase">Business Hub V2.0</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab("proposta")}
              className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-colors ${activeTab === "proposta" ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}
            >
              <Target size={16} /> Proposta
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
              <CheckSquare size={16} /> Checklist Técnico
            </button>
            
            <button
              onClick={handlePrint}
              className="ml-4 bg-[#8B2635] text-white px-4 py-2 rounded-none flex items-center gap-2 hover:bg-[#A63344] transition-colors text-sm font-semibold uppercase tracking-tighter shadow-lg shadow-[#8B2635]/20"
            >
              <Printer size={16} /> Imprimir Doc
            </button>
          </div>
        </div>
      </nav>

      {/* Área do Documento */}
      <main className="max-w-6xl mx-auto p-12">
        <div className="print-page bg-white text-black p-[2cm] shadow-[0_0_50px_rgba(0,0,0,0.5)] min-h-[29.7cm] w-full max-w-[21cm] mx-auto text-[11pt] leading-relaxed animate-fade-up">
          
          {/* Header do Documento */}
          <div className="text-center mb-12 border-b-2 border-[#8B2635] pb-4">
            <h1 className="text-3xl font-serif font-bold uppercase tracking-widest text-[#8B2635]">
              {activeTab === "proposta" ? "Proposta Comercial" : activeTab === "contrato" ? "Contrato de Prestação de Serviços" : "Checklist Onboarding Técnico"}
            </h1>
            <p className="text-xs font-mono uppercase tracking-[0.3em] font-light text-gray-500 mt-2">
              Il Potere Tech // Bragança Paulista, SP
            </p>
          </div>

          {activeTab === "contrato" && (
            <div className="prose prose-slate max-w-none text-[10.5pt]">
              <div className="grid grid-cols-2 gap-8 mb-10 text-[9pt] border-b border-gray-100 pb-6 uppercase font-serif">
                <div>
                  <p className="font-bold text-[#8B2635] mb-1">CONTRATADA (Prestador):</p>
                  <p>IL POTERE TECH</p>
                  <p>Bragança Paulista/SP</p>
                </div>
                <div>
                  <p className="font-bold text-[#8B2635] mb-1">CONTRATANTE (Cliente):</p>
                  <p>_____________________________________</p>
                  <p>_____________________________________</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-sm font-bold bg-[#8B2635] text-white inline-block px-2 py-0.5 mb-2 uppercase italic tracking-tighter">Cláusula 1ª — Objeto</h2>
                  <p>O presente contrato tem por objeto a prestação de serviços de suporte técnico em informática, gestão de TI e monitoramento proativo (RMM), conforme o plano selecionado: <strong>BASIC (390), STANDARD (690) ou PREMIUM (1290).</strong></p>
                </div>

                <div>
                  <h2 className="text-sm font-bold bg-[#8B2635] text-white inline-block px-2 py-0.5 mb-2 uppercase italic tracking-tighter">Cláusula 2ª — Escopo e Exclusões</h2>
                  <p>Os serviços abrangem exclusivamente hardware, software e redes. Não estão inclusos: instalações elétricas prediais, reformas físicas, fornecimento de peças ou suporte a sistemas de terceiros (ERPs) fora da instalação básica.</p>
                </div>

                <div>
                  <h2 className="text-sm font-bold bg-[#8B2635] text-white inline-block px-2 py-0.5 mb-2 uppercase italic tracking-tighter">Cláusula 3ª — Peças e Logística</h2>
                  <p>O fornecimento de peças não está incluso. As peças aprovadas pelo cliente serão cobradas pelo valor de aquisição acrescido de **10% de taxa de logística** para aquisição, garantia e gerenciamento.</p>
                </div>

                <div className="page-break pt-8">
                  <h2 className="text-sm font-bold bg-[#8B2635] text-white inline-block px-2 py-0.5 mb-2 uppercase italic tracking-tighter">Cláusula 4ª — Vigência (Fidelidade Zero)</h2>
                  <p>O contrato é celebrado por prazo indeterminado. O Contratante poderá rescindir o contrato a **qualquer momento, sem multas**, mediante envio de aviso prévio de 30 (trinta) dias por canal formal (e-mail/WhatsApp).</p>
                </div>

                <div>
                  <h2 className="text-sm font-bold bg-[#8B2635] text-white inline-block px-2 py-0.5 mb-2 uppercase italic tracking-tighter">Cláusula 5ª — Foro</h2>
                  <p>Fica eleito o foro da Comarca de Bragança Paulista/SP para dirimir quaisquer controvérsias.</p>
                </div>
              </div>

              <div className="mt-32 flex justify-between gap-12 font-serif text-[8pt] italic">
                <div className="w-1/2 border-t border-black pt-2 text-center">CONTRATANTE (ASSINATURA)</div>
                <div className="w-1/2 border-t border-black pt-2 text-center text-[#8B2635] font-bold uppercase tracking-widest">IL POTERE TECH // CONTATADO</div>
              </div>
            </div>
          )}

          {activeTab === "proposta" && (
            <div className="prose prose-slate max-w-none text-center font-serif">
              <p className="text-sm mb-12 italic text-gray-600">"Sua TI não deve ser um custo, mas um motor de produtividade impecável."</p>
              
              <div className="grid grid-cols-2 gap-8 text-left mb-12">
                <div className="border-l-4 border-[#8B2635] pl-6 py-2">
                  <h3 className="font-bold uppercase tracking-tighter text-[#8B2635] mb-2 flex items-center gap-2"><Zap size={20} /> Suporte Remoto</h3>
                  <p className="text-[9pt] leading-tight text-gray-600">Via AnyDesk/RustDesk. Resolvendo lentidão, vírus e e-mails em tempo real sem esperar o técnico chegar.</p>
                </div>
                <div className="border-l-4 border-black pl-6 py-2">
                  <h3 className="font-bold uppercase tracking-tighter text-black mb-2 flex items-center gap-2"><CheckSquare size={20} /> Visita Presencial</h3>
                  <p className="text-[9pt] leading-tight text-gray-600">Hardware, redes físicas e impressoras. Presença garantida para manter a infraestrutura rodando.</p>
                </div>
              </div>

              {/* Tabela de Preços V2 */}
              <div className="grid grid-cols-3 gap-0 mb-12 border-y border-gray-100">
                <div className="p-8 border-r border-gray-100">
                  <h4 className="text-xs tracking-widest uppercase mb-4 text-gray-500">BASIC</h4>
                  <div className="text-3xl font-bold mb-4">R$ 390<span className="text-xs">/mês</span></div>
                  <ul className="text-[8pt] text-left space-y-2 uppercase leading-tight font-sans">
                    <li className="flex items-start gap-2"><span>•</span> Até 05 PCs</li>
                    <li className="flex items-start gap-2"><span>•</span> Remoto Ilimitado</li>
                    <li className="flex items-start gap-2"><span>•</span> 1 Visita Mensal</li>
                  </ul>
                </div>
                <div className="p-8 bg-[#8B2635] text-white border-x border-[#8B2635] shadow-xl relative z-10">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A962] text-black text-[7pt] px-4 py-1 font-bold uppercase tracking-tighter">Mais Vendido</span>
                  <h4 className="text-xs tracking-widest uppercase mb-4 text-white/70">STANDARD</h4>
                  <div className="text-3xl font-bold mb-4 underline decoration-[#C9A962]">R$ 690<span className="text-xs">/mês</span></div>
                  <ul className="text-[8pt] text-left space-y-2 uppercase leading-tight font-sans">
                    <li className="flex items-start gap-2"><span>•</span> Até 15 PCs</li>
                    <li className="flex items-start gap-2"><span>•</span> Remoto Ilimitado</li>
                    <li className="flex items-start gap-2"><span>•</span> 2 Visitas Mensais</li>
                  </ul>
                </div>
                <div className="p-8 border-l border-gray-100">
                  <h4 className="text-xs tracking-widest uppercase mb-4 text-gray-500">PREMIUM</h4>
                  <div className="text-3xl font-bold mb-4">R$ 1290<span className="text-xs">/mês</span></div>
                  <ul className="text-[8pt] text-left space-y-2 uppercase leading-tight font-sans">
                    <li className="flex items-start gap-2"><span>•</span> Até 40 PCs</li>
                    <li className="flex items-start gap-2"><span>•</span> Suporte 24/7 Crítico</li>
                    <li className="flex items-start gap-2"><span>•</span> Visitas Semanais</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 p-6 flex items-center justify-between no-print">
                <div className="text-left">
                  <h4 className="font-bold flex items-center gap-2"><DollarSign size={18} /> Fidelidade Zero</h4>
                  <p className="text-[8pt] text-gray-600">Cancele quando quiser com aviso prévio de 30 dias. Nossa retenção é baseada em qualidade, não em multas.</p>
                </div>
                <div className="h-10 w-10 text-[#8B2635]">🎯</div>
              </div>
            </div>
          )}

          {activeTab === "checklist" && (
            <div className="prose prose-slate max-w-none text-[10pt]">
              <h2 className="text-sm font-bold bg-black text-white inline-block px-3 py-1 mb-6 uppercase italic">Elite Field Kit // Equipamentos Essenciais</h2>
              <div className="grid grid-cols-2 gap-12 mb-10">
                <div>
                  <h3 className="font-bold text-[#8B2635] text-xs uppercase mb-3 tracking-widest">Ferramentas de Precisão</h3>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Kit Fixit / Chaves Torx e Philips</li>
                    <li>Pulseira Antiestática</li>
                    <li>Pasta Térmica Profissional (Arctic)</li>
                    <li>Ar Comprimido e Isopropílico</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#8B2635] text-xs uppercase mb-3 tracking-widest">Diagnóstico Elétrico</h3>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Testador de Fonte de Alimentação</li>
                    <li>Multímetro Digital RMS</li>
                    <li>Testador de Tomada (Plug Tester)</li>
                    <li>Scanner de Rede Advanced IP</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-200 border-dashed">
                <h3 className="font-bold text-center mb-6 uppercase tracking-widest">Processo Onboarding "Hora 1"</h3>
                <div className="space-y-4 font-mono text-[9pt]">
                  <div className="flex gap-4 p-2 hover:bg-white transition-colors">
                    <div className="bg-[#8B2635] text-white w-6 h-6 flex items-center justify-center shrink-0">1</div>
                    <div><strong>INFRA:</strong> Mapeamento de Rack, IPs e Teste de Polaridade das Tomadas.</div>
                  </div>
                  <div className="flex gap-4 p-2 hover:bg-white transition-colors">
                    <div className="bg-[#8B2635] text-white w-6 h-6 flex items-center justify-center shrink-0">2</div>
                    <div><strong>DEPLOY:</strong> Agente Tactical RMM e RustDesk Access. Nomenclatura ID.</div>
                  </div>
                  <div className="flex gap-4 p-2 hover:bg-white transition-colors">
                    <div className="bg-[#8B2635] text-white w-6 h-6 flex items-center justify-center shrink-0">3</div>
                    <div><strong>SAFETY:</strong> Auditoria de Backup e Nível de Acesso (Login Admin?).</div>
                  </div>
                  <div className="flex gap-4 p-2 hover:bg-white transition-colors">
                    <div className="bg-[#8B2635] text-white w-6 h-6 flex items-center justify-center shrink-0">4</div>
                    <div><strong>CLIENT:</strong> Adesivagem de Suporte e Treinamento "Chamado Veloz".</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer do Documento */}
          <div className="mt-auto pt-12 text-[7pt] text-gray-400 flex justify-between items-end italic border-t border-gray-100">
            <div>
              <p className="font-bold text-gray-600">IL POTERE TECH — SOLUÇÕES PROATIVAS EM TI</p>
              Bragança Paulista, SP | (11) 9 ____-____ | www.ilpotere.tech
            </div>
            <div className="text-right uppercase tracking-[0.2em] font-mono">
              Confidencial // Pg 01
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @media print {
          body { background: white !important; }
          .shadow-2xl, .shadow-xl { box-shadow: none !important; }
          main { padding: 0 !important; }
          .print-page { margin: 0 !important; padding: 1cm !important; border: none !important; box-shadow: none !important; }
        }
      `}</style>
    </div>
  )
}
