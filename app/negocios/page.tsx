"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Printer, ShieldCheck, CheckSquare, Lock, Target, LayoutDashboard, GraduationCap } from "lucide-react"

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
    if (localStorage.getItem("hub_auth") === "true") setIsAuthorized(true)
  }, [])

  const handlePrint = () => {
    if (activeTab === "contrato") window.open("/docs/contrato.html", "_blank")
    else if (activeTab === "proposta") window.open("/docs/proposta.html", "_blank")
    else window.print()
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-[#0F0F0F] border border-[#1F1F1F] p-8 shadow-2xl" style={{ animation: "scale-in 0.4s cubic-bezier(0.16,1,0.3,1) both" }}>
          <div className="flex justify-center mb-6 text-[#8B2635]"><Lock size={48} /></div>
          <h1 className="text-2xl font-serif text-center mb-2 text-[#F5F0E8]">Área Restrita</h1>
          <p className="text-[#78716c] text-center mb-8 text-sm uppercase tracking-widest font-mono italic">Il Potere Tech // Business Hub</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="password" placeholder="Sua senha de sócio"
              className="w-full bg-[#141414] border border-[#1F1F1F] px-4 py-3 text-[#F5F0E8] focus:outline-none focus:border-[#8B2635] transition-colors font-mono"
              value={password} onChange={(e) => setPassword(e.target.value)} autoFocus />
            {error && <p className="text-[#8B2635] text-xs font-mono text-center">{error}</p>}
            <button type="submit" className="w-full bg-[#8B2635] text-white py-3 font-semibold uppercase tracking-widest text-sm hover:bg-[#A63344] transition-colors shadow-lg">
              Entrar no Comando
            </button>
          </form>
        </div>
      </div>
    )
  }

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: "dashboard", label: "Estratégia", icon: <LayoutDashboard size={16} /> },
    { id: "trilha",    label: "Trilha",     icon: <GraduationCap size={16} /> },
    { id: "proposta",  label: "Proposta",   icon: <Target size={16} /> },
    { id: "contrato",  label: "Contrato",   icon: <ShieldCheck size={16} /> },
    { id: "checklist", label: "Checklist",  icon: <CheckSquare size={16} /> },
  ]

  const checklist = [
    {
      fase: "Fase 1 — Pré-Visita (no dia anterior)",
      cor: "bg-[#8B2635]",
      items: [
        "Confirmar endereço, horário e contato responsável via WhatsApp",
        "Verificar qual plano foi contratado (Basic / Standard / Premium)",
        "Separar o Kit de Campo: pen drives de boot, pasta térmica, álcool, chaves, testador de cabo",
        "Configurar Ventoy com ISOs: Windows 10/11 + ferramentas offline (MalwareBytes, CrystalDisk, Autoruns, HWiNFO)",
        "Baixar e configurar o instalador do Agente RMM (Tactical RMM) com o cliente já criado no painel",
        "Imprimir ou salvar em PDF: Contrato + Proposta + este Checklist",
      ],
    },
    {
      fase: "Fase 2 — Chegada e Diagnóstico de Infra (0–30 min)",
      cor: "bg-black",
      items: [
        "Apresentar-se ao responsável e fazer tour pelo ambiente (servidor, rack, roteador, impressoras)",
        "Fotografar rack e cabeamento ANTES de qualquer intervenção (com data/hora visível)",
        "Testar tomadas com Plug Tester: verificar aterramento (crítico para equipamentos de valor)",
        "Mapear a rede com Advanced IP Scanner: listar IPs, MACs e nomes de todos os dispositivos",
        "Identificar roteador/switch principal: fabricante, modelo e IP de acesso administrativo",
        "Verificar qualidade do Wi-Fi: canal e sobreposição com Wi-Fi Analyzer",
        "Identificar servidor local / NAS — fotografar e registrar modelo, capacidade e IP",
        "Checar UPS (nobreak): verificar autonomia e estado das baterias",
      ],
    },
    {
      fase: "Fase 3 — Deploy de Sistemas (30–90 min)",
      cor: "bg-[#8B2635]",
      items: [
        "Instalar Agente RMM (Tactical RMM) em TODOS os PCs — confirmar que aparecem online no painel",
        "Instalar RustDesk com senha fixa e testar acesso remoto via 4G (simular suporte de emergência)",
        "Etiquetar fisicamente cada PC com ID único (ex: CLI-001, CLI-002) — colar adesivo na máquina",
        "Registrar cada PC: nome, ID, hostname, IP fixo, RAM, HD, SO — no Notion ou planilha do cliente",
        "Verificar Windows Update: identificar PCs desatualizados e agendar/executar atualizações",
        "Verificar antivírus em TODOS os PCs: instalar/atualizar Defender ou ESET/Kaspersky conforme plano",
        "Configurar IP fixo ou reserva DHCP (por MAC) para PCs, impressoras e servidores no roteador",
        "Instalar impressoras em rede via IP fixo (evitar WSD) — testar impressão em pelo menos 2 PCs",
      ],
    },
    {
      fase: "Fase 4 — Segurança e Backup (90–120 min)",
      cor: "bg-black",
      items: [
        "Verificar quais usuários têm conta de Administrador local — remover privilégios desnecessários",
        "Auditar senhas: identificar usuários sem senha ou com senha fraca — registrar no relatório",
        "Checar OneDrive / Google Drive: confirmar sincronização ativa de Documentos, Desktop e Imagens",
        "Verificar rotina de backup local (HD externo, NAS) — testar se o backup mais recente abre corretamente",
        "Perguntar ao responsável: 'Se esse PC queimar agora, o que você perde?' — registrar a resposta",
        "Implantar backup conforme plano (Basic: orientar; Standard/Premium: configurar Veeam ou Backblaze)",
        "Testar e-mail principal no Have I Been Pwned (haveibeenpwned.com) — reportar incidentes encontrados",
      ],
    },
    {
      fase: "Fase 5 — Encerramento com o Cliente",
      cor: "bg-[#8B2635]",
      items: [
        "Apresentar resumo rápido: o que foi feito, o que está pendente e o prazo estimado",
        "Entregar manual de chamados: WhatsApp + horários de atendimento + exemplos práticos",
        "Colar adesivo Il Potere Tech no roteador principal (marca no ambiente do cliente)",
        "Assinar o Contrato de Prestação de Serviços com o responsável",
        "Registrar cliente no WhatsApp Business com tag 'CLIENTE ATIVO' e no painel RMM com plano e vencimento",
        "Agendar próxima visita (Standard: 2x/mês | Premium: semanal) — enviar convite de calendário",
        "Tirar foto da entrega final — rack organizado, PCs etiquetados — para portfólio Il Potere",
      ],
    },
  ]

  const kit = [
    ["🔌", "Pen drives Ventoy (boot + ferramentas offline)"],
    ["🌡️", "Pasta térmica (Thermal Grizzly ou similar)"],
    ["🧰", "Kit chaves: Philips, Torx, Estrela"],
    ["📡", "Testador de cabo RJ45 (hardware)"],
    ["⚡", "Plug Tester — verificador de tomadas"],
    ["🔬", "Multímetro digital compacto"],
    ["🧹", "Álcool isopropílico + flanela antiestática"],
    ["🏷️", "Adesivos de etiqueta para ID dos PCs"],
    ["📄", "Contrato + Proposta + Checklist impresso"],
    ["💳", "Máquina de cartão (cobrar setup avulso)"],
  ]

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F0E8] font-sans flex flex-col">
      <style jsx>{`
        @keyframes fade-up { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scale-in { from { opacity:0; transform:scale(.95); } to { opacity:1; transform:scale(1); } }
        .anim-up { animation: fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        @media print {
          body { background: white !important; }
          nav, .no-print { display: none !important; }
          main { padding: 0 !important; }
          .print-page { box-shadow: none !important; margin: 0 !important; }
        }
      `}</style>

      {/* Nav */}
      <nav className="no-print border-b border-[#1F1F1F] bg-[#0F0F0F] sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="px-4 py-2 bg-[#141414] border border-[#1F1F1F] text-[#8B2635] font-serif text-lg font-bold italic hover:bg-[#8B2635] hover:text-white transition-all flex items-center gap-2 group">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Il Potere
            </Link>
            <div className="h-4 w-[1px] bg-[#1F1F1F]" />
            <span className="text-xs font-mono text-[#78716c] tracking-widest uppercase hidden md:inline">Business Control Center</span>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            {tabs.map((tab, i) => (
              <React.Fragment key={tab.id}>
                {i === 2 && <div className="h-6 w-[1px] bg-[#1F1F1F] mx-1 hidden sm:block" />}
                <button onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-2 md:px-3 py-2 text-[10px] md:text-xs uppercase tracking-wider transition-colors ${activeTab === tab.id ? "text-[#8B2635]" : "text-[#78716c] hover:text-[#F5F0E8]"}`}>
                  {tab.icon}<span className="hidden sm:inline">{tab.label}</span>
                </button>
              </React.Fragment>
            ))}
            {(activeTab === "contrato" || activeTab === "proposta" || activeTab === "checklist") && (
              <button onClick={handlePrint}
                className="ml-2 bg-[#8B2635] text-white px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-1.5 hover:bg-[#A63344] transition-colors text-[10px] md:text-xs font-semibold uppercase tracking-tighter shadow-lg shadow-[#8B2635]/20">
                <Printer size={14} /> {activeTab === "checklist" ? "Imprimir" : "Abrir PDF"}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Conteúdo */}
      <main className="flex-1 bg-[#080808]">
        {activeTab === "dashboard" && (
          <iframe src="/docs/plano-estrategico.html" className="w-full min-h-[calc(100vh-80px)] border-none" title="Dashboard Estratégico" />
        )}
        {activeTab === "trilha" && (
          <iframe src="/docs/trilha-tecnica.html" className="w-full min-h-[calc(100vh-80px)] border-none" title="Trilha Técnica" />
        )}
        {activeTab === "contrato" && (
          <iframe src="/docs/contrato.html" className="w-full min-h-[calc(100vh-80px)] border-none" title="Contrato" />
        )}
        {activeTab === "proposta" && (
          <iframe src="/docs/proposta.html" className="w-full min-h-[calc(100vh-80px)] border-none" title="Proposta Comercial" />
        )}

        {activeTab === "checklist" && (
          <div className="p-6 md:p-12">
            <div className="print-page bg-white text-black p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.4)] w-full max-w-[860px] mx-auto anim-up">
              
              {/* Header */}
              <div className="text-center mb-8 border-b-2 border-[#8B2635] pb-5">
                <h1 className="text-2xl font-serif font-bold uppercase tracking-widest text-[#8B2635]">Checklist de Onboarding Técnico</h1>
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-400 mt-2">Il Potere Tech // Protocolo de Campo — Novo Cliente</p>
              </div>

              {/* Fases */}
              <div className="space-y-7">
                {checklist.map((fase) => (
                  <div key={fase.fase}>
                    <h2 className={`text-[7.5px] font-bold text-white px-3 py-1 uppercase tracking-widest mb-3 inline-block ${fase.cor}`}>
                      {fase.fase}
                    </h2>
                    <div className="space-y-2">
                      {fase.items.map((item, i) => (
                        <label key={i} className="flex items-start gap-3 cursor-pointer group">
                          <span className="border border-gray-300 w-4 h-4 mt-0.5 flex-shrink-0 group-hover:border-[#8B2635] transition-colors" />
                          <span className="text-[8.5pt] text-gray-700 leading-snug">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Kit */}
                <div className="border-t border-gray-100 pt-5">
                  <h2 className="text-[7.5px] font-bold uppercase tracking-widest text-[#8B2635] mb-4">Arsenal de Campo — Mochila do Técnico</h2>
                  <div className="grid grid-cols-2 gap-x-10 gap-y-1.5">
                    {kit.map(([icon, label], i) => (
                      <div key={i} className="flex items-center gap-2 text-[8.5pt] text-gray-600">
                        <span>{icon}</span><span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-10 pt-4 text-[7.5px] text-gray-400 flex justify-between items-end italic border-t border-gray-100">
                <div>
                  <p className="font-bold text-gray-500 not-italic">IL POTERE TECH — SOLUÇÕES PROATIVAS EM TI</p>
                  Bragança Paulista, SP | www.ilpotere.tech
                </div>
                <div className="text-right font-mono uppercase tracking-[0.15em]">Protocolo Interno — Uso Restrito</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
