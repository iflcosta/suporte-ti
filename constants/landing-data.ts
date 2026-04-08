export const PLANOS = [
  {
    nome: "Essenziale",
    subtitulo: "Estabilidade & Suporte \u00c1gil",
    tagIngles: "ESSENTIAL FOUNDATION",
    preco: "R$ 390",
    periodo: "/m\u00eas",
    features: [
      "At\u00e9 5 dispositivos monitorados",
      "Suporte Remoto Especializado",
      "1 Visita Presencial (Preven\u00e7\u00e3o/Emerg\u00eancia)",
      "Gest\u00e3o de Identidade & E-mail Corporativo",
      "Otimiza\u00e7\u00e3o de Performance & Redes",
    ],
    destaque: false,
  },
  {
    nome: "Professionale",
    subtitulo: "Gest\u00e3o Ativa & Padr\u00e3o Corporativo",
    tagIngles: "MANAGED SYSTEM",
    preco: "R$ 690",
    periodo: "/m\u00eas",
    features: [
      "Suporte para at\u00e9 15 dispositivos",
      "Prioridade de Atendimento (SLA)",
      "2 Visitas Mensais Programadas",
      "Backup Centralizado em Nuvem",
      "Prote\u00e7\u00e3o de Dados Avan\u00e7ada",
      "Gest\u00e3o de Redes & Conectividade",
    ],
    destaque: true,
  },
  {
    nome: "Impresa",
    subtitulo: "Consultoria & Governan\u00e7a",
    tagIngles: "STRATEGIC EVOLUTION",
    preco: "Sob consulta",
    periodo: "",
    emBreve: true,
    features: [
      "Suporte para at\u00e9 30 dispositivos",
      "Monitoramento Cont\u00ednuo de Infraestrutura",
      "Consultoria Estrat\u00e9gica de TI",
      "Adequa\u00e7\u00e3o T\u00e9cnica & LGPD",
      "Documenta\u00e7\u00e3o T\u00e9cnica & Auditoria",
      "Integra\u00e7\u00e3o de Solu\u00e7\u00f5es de IA",
    ],
    destaque: false,
  },
]

export const TECH_STACK = [
  { label: "Gest\u00e3o Ativa", tools: "Monitoramento 24/7" },
  { label: "Seguran\u00e7a", tools: "Firewall & EDR" },
  { label: "Backup", tools: "Recupera\u00e7\u00e3o de Dados" },
  { label: "Conectividade", tools: "Wireless Alta Vel." },
]

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Diagn\u00f3stico",
    desc: "Avaliamos a sa\u00fade da sua rede, hardware e n\u00edvel de seguran\u00e7a atual.",
  },
  {
    step: "02",
    title: "Padroniza\u00e7\u00e3o",
    desc: "Aplicamos o Padr\u00e3o Potere de organiza\u00e7\u00e3o e infraestrutura.",
  },
  {
    step: "03",
    title: "Gest\u00e3o Cont\u00ednua",
    desc: "Monitoramento em tempo real e suporte focado em produtividade.",
  },
]

export const SERVICOS = [
  {
    icone: "🖥\ufe0f",
    titulo: "Gest\u00e3o de Infraestrutura",
    desc: "Monitoramento proativo para evitar paradas e garantir que sua empresa opere sem interrup\u00e7\u00f5es.",
  },
  {
    icone: "🏢",
    titulo: "Atendimento Consultivo",
    desc: "Visitas presenciais e diagn\u00f3stico especializado para manuten\u00e7\u00e3o de hardware e rede f\u00edsica.",
  },
  {
    icone: "🔑",
    titulo: "Gest\u00e3o de Identidade",
    desc: "Seguran\u00e7a total em e-mails e dom\u00ednios, projetando uma imagem profissional e confi\u00e1vel.",
  },
  {
    icone: "🛡\ufe0f",
    titulo: "Continuidade de Neg\u00f3cio",
    desc: "Sistemas de backup e prote\u00e7\u00e3o contra amea\u00e7as digitais, garantindo a sua paz de esp\u00edrito.",
  }
]

export const DIFERENCIAIS = [
  { numero: "24/7", label: "Gest\u00e3o de Infraestrutura" },
  { numero: "99%", label: "Taxa de Disponibilidade" },
  { numero: "0", label: "Taxa de Fidelidade Contratual" },
  { numero: "100%", label: "Envolvimento do Especialista" },
]

export const FAQ = [
  {
    q: "O que \u00e9 a Gest\u00e3o Pr\u00f3-ativa?",
    a: "Utilizamos software de monitoramento que nos avisa sobre problemas antes que eles impactem a continuidade do seu neg\u00f3cio.",
  },
  {
    q: "Como funciona o suporte remoto?",
    a: "Atrav\u00e9s de conex\u00e3o criptografada, resolvemos falhas t\u00e9cnicas de forma imediata, otimizando o tempo de resposta.",
  },
  {
    q: "Atendem cl\u00ednicas e escrit\u00f3rios?",
    a: "Sim. Somos especializados no ambiente de cl\u00ednicas e escrit\u00f3rios, onde a precis\u00e3o e o sigilo s\u00e3o prioridades.",
  },
  {
    q: "E se meus dados forem perdidos?",
    a: "Nossas estrat\u00e9gias de redund\u00e2ncia e backup em nuvem garantem a recupera\u00e7\u00e3o total das informa\u00e7\u00f5es.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim. Apostamos na qualidade do nosso servi\u00e7o para manter a parceria, sem amarras contratuais.",
  },
]

export const SOFTWARE_SOLUTION = {
  nome: "ClinicalTech",
  subtitulo: "Gest\u00e3o Especializada para Sa\u00fade",
  desc: "N\u00e3o \u00e9 apenas um software. \u00c9 a converg\u00eancia entre tecnologia m\u00e9dica e a gest\u00e3o de TI que sua cl\u00ednica exige. Efici\u00eancia e seguran\u00e7a em um \u00fanico ecossistema.",
  features: [
    {
      titulo: "Gest\u00e3o de Agenda",
      desc: "Agenda inteligente com confirma\u00e7\u00f5es autom\u00e1ticas para otimizar o fluxo de pacientes.",
      icone: "📅"
    },
    {
      titulo: "Prontu\u00e1rio Digital",
      desc: "Hist\u00f3rico cl\u00ednico organizado e seguro, em conformidade com as normas vigentes.",
      icone: "🏥"
    },
    {
      titulo: "Fluxo Financeiro",
      desc: "Controle absoluto de faturamento e repasses para uma gest\u00e3o financeira saud\u00e1vel.",
      icone: "💰"
    }
  ],
  cta: "Mais Informa\u00e7\u00f5es"
}
