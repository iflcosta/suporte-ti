"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { 
  Printer, ShieldCheck, CheckSquare, Lock, Target, 
  LayoutDashboard, GraduationCap, Monitor, UserCheck, 
  Shield, Activity, Cloud, Wifi, Settings 
} from "lucide-react"

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
    if (activeTab === "contrato") {
      window.open("/docs/contrato.html", "_blank")
    } else if (activeTab === "proposta") {
      window.open("/docs/proposta.html", "_blank")
    } else if (activeTab === "checklist") {
      window.print()
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
    <div className="min-h-screen bg-[#080808] text-[#F5F0E8] font-sans flex flex-col relative">
      <nav className="no-print border-b border-[#1F1F1F] bg-[#0F0F0F] sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="px-4 py-2 bg-[#141414] border border-[#1F1F1F] text-[#8B2635] font-serif text-lg font-bold italic hover:bg-[#8B2635] hover:text-white transition-all shadow-lg flex items-center gap-2 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Il Potere
            </Link>
            <div className="h-4 w-[1px] bg-[#1F1F1F]"></div>
            <span className="text-xs font-mono text-[#78716c] tracking-widest uppercase hidden md:inline">Business Control Center</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex items-center gap-4 md:gap-6">
              <button onClick={() => setActiveTab("dashboard")}
                className={`flex items-center gap-2 text-[10px] md:text-sm uppercase tracking-wider transition-colors ${activeTab === "dashboard" ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}>
                <LayoutDashboard size={16} /> <span className="hidden sm:inline">Estratégia</span>
              </button>
              <button onClick={() => setActiveTab("trilha")}
                className={`flex items-center gap-2 text-[10px] md:text-sm uppercase tracking-wider transition-colors ${activeTab === "trilha" ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}>
                <GraduationCap size={16} /> <span className="hidden sm:inline">Trilha</span>
              </button>
            </div>
            <div className="h-6 w-[1px] bg-[#1F1F1F] mx-2 hidden sm:block"></div>
            <div className="flex items-center gap-4 md:gap-6">
              <button onClick={() => setActiveTab("proposta")}
                className={`flex items-center gap-2 text-[10px] md:text-sm uppercase tracking-wider transition-colors ${activeTab === "proposta" ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}>
                <Target size={16} /> <span className="hidden sm:inline">Proposta</span>
              </button>
              <button onClick={() => setActiveTab("contrato")}
                className={`flex items-center gap-2 text-[10px] md:text-sm uppercase tracking-wider transition-colors ${activeTab === "contrato" ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}>
                <ShieldCheck size={16} /> <span className="hidden sm:inline">Contrato</span>
              </button>
              <button onClick={() => setActiveTab("checklist")}
                className={`flex items-center gap-2 text-[10px] md:text-sm uppercase tracking-wider transition-colors ${activeTab === "checklist" ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}>
                <CheckSquare size={16} /> <span className="hidden sm:inline">Checklist</span>
              </button>
            </div>
            {(activeTab === "contrato" || activeTab === "proposta" || activeTab === "checklist") && (
              <button onClick={handlePrint}
                className="ml-4 bg-[#8B2635] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-none flex items-center gap-2 hover:bg-[#A63344] transition-colors text-[10px] md:text-sm font-semibold uppercase tracking-tighter shadow-lg shadow-[#8B2635]/20">
                <Printer size={16} /> {activeTab === "checklist" ? "Imprimir" : "Abrir PDF"}
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-1 relative bg-[#080808]">
        {activeTab === "dashboard" && (
          <iframe src="/docs/plano-estrategico.html" className="w-full min-h-[calc(100vh-80px)] border-none" title="Dashboard Estratégico" />
        )}
        {activeTab === "trilha" && (
          <iframe src="/docs/trilha-tecnica.html" className="w-full min-h-[calc(100vh-80px)] border-none" title="Trilha de Especialização Técnica" />
        )}
        {activeTab === "contrato" && (
          <iframe src="/docs/contrato.html" className="w-full min-h-[calc(100vh-80px)] border-none" title="Contrato de Prestação de Serviços" />
        )}
        {activeTab === "proposta" && (
          <iframe src="/docs/proposta.html" className="w-full min-h-[calc(100vh-80px)] border-none" title="Proposta Comercial" />
        )}

        {activeTab === "checklist" && (
          <div className="relative p-6 md:p-12">
            <div className="print-page bg-white text-black p-[1cm] md:p-[2cm] shadow-[0_0_50px_rgba(0,0,0,0.5)] min-h-[29.7cm] w-full max-w-[21cm] mx-auto text-[11pt] leading-relaxed animate-fade-up flex flex-col">
              <div className="text-center mb-10 border-b-2 border-[#8B2635] pb-4">
                <h1 className="text-2xl font-serif font-bold uppercase tracking-widest text-[#8B2635]">Checklist Onboarding Técnico</h1>
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] font-light text-gray-500 mt-2">Il Potere Tech // Bragança Paulista, SP</p>
              </div>
              <div className="prose prose-slate max-w-none text-[10pt]">
                <h2 className="text-sm font-bold bg-black text-white inline-block px-3 py-1 mb-6 uppercase italic">Arsenal de Campo // Il Potere Tech</h2>
                <div>
                  <h3 className="font-bold text-[#8B2635] text-[10px] uppercase mb-4 tracking-widest border-b border-[#8B2635] pb-1">Elétrica e Rede (Investimento)</h3>
                  <ul className="list-disc ml-4 space-y-2 text-gray-600">
                    <li>Testador de Tomada (Plug Tester): R$ 45</li>
                    <li>Testador de Fonte Profissional: R$ 85</li>
                    <li>Multímetro Digital RMS: R$ 120</li>
                    <li>Certificador de Cabo RJ45: R$ 60</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-[#8B2635] text-[10px] uppercase mb-4 tracking-widest border-b border-[#8B2635] pb-1">Limpeza e Diagnóstico (Investimento)</h3>
                  <ul className="list-disc ml-4 space-y-2 text-gray-600">
                    <li>Kit Fixit / Precisão: R$ 150</li>
                    <li>Insumos (Álcool/Pasta Térmica): R$ 70</li>
                    <li>Kit Pen Drives (2x 64GB): R$ 120</li>
                  </ul>
                </div>
                <div className="bg-black text-white p-4 my-6 flex justify-between items-center font-mono text-xs uppercase tracking-widest">
                  <span>Total por Kit (Elite):</span>
                  <span className="text-[#C9A962] font-bold text-lg">R$ 650,00</span>
                </div>
                <div className="bg-gray-50 p-6 flex flex-col gap-6">
                  <h3 className="font-bold text-center uppercase tracking-widest text-[#8B2635] text-xs">A "Hora 1" Elite</h3>
                  <div className="grid grid-cols-2 gap-6 font-mono text-[9pt]">
                    {[
                      ["INFRA", "Mapear Rack e IPs. Testar aterramento das tomadas."],
                      ["DEPLOY", "Agente RMM + RustDesk. Etiquetagem física ID."],
                      ["RISCO", "Auditoria de Backup e Nível de Acesso (Admin?)."],
                      ["CLIENT", "Adesivagem e manual de abertura de chamados."],
                    ].map(([label, desc], i) => (
                      <div key={i} className="flex gap-4">
                        <div className="bg-black text-white w-6 h-6 flex items-center justify-center shrink-0">{i + 1}</div>
                        <div className="text-gray-600"><strong>{label}:</strong> {desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-8 text-[8px] text-gray-400 flex justify-between items-end italic border-t border-gray-100">
                <div>
                  <p className="font-bold text-gray-600">IL POTERE TECH — SOLUÇÕES PROATIVAS EM TI</p>
                  Bragança Paulista, SP | www.ilpotere.tech
                </div>
                <div className="text-right uppercase tracking-[0.2em] font-mono">Documento de Uso Restrito</div>
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
        .animate-fade-up { animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .animate-scale-in { animation: scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both; }
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
