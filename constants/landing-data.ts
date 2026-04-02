export const PLANOS = [
  {
    nome: "Essenziale",
    subtitulo: "Para quem está começando",
    preco: "R$ 390",
    periodo: "/mês",
    features: [
      "Até 5 dispositivos",
      "Suporte remoto em horário comercial",
      "Tempo de resposta: até 4h",
      "Relatório mensal básico",
    ],
    destaque: false,
  },
  {
    nome: "Professionale",
    subtitulo: "O mais escolhido",
    preco: "R$ 690",
    periodo: "/mês",
    features: [
      "Até 15 dispositivos",
      "Suporte remoto 24h para emergências",
      "1 visita presencial/mês inclusa",
      "Tempo de resposta: até 2h",
      "Relatório mensal detalhado",
      "Consultoria trimestral",
    ],
    destaque: true,
  },
  {
    nome: "Impresa",
    subtitulo: "Para empresas em crescimento",
    preco: "R$ 1.290",
    periodo: "/mês",
    features: [
      "Até 30 dispositivos",
      "Suporte 24/7 prioritário",
      "Visitas presenciais ilimitadas",
      "Tempo de resposta: até 30min",
      "Gestão completa de infraestrutura",
      "Consultoria mensal estratégica",
      "Backup gerenciado incluso",
    ],
    destaque: false,
  },
]

export const SERVICOS = [
  {
    icone: "💻",
    titulo: "Suporte Remoto",
    desc: "Acesso seguro para resolver problemas rapidamente, sem você sair do lugar.",
  },
  {
    icone: "🏢",
    titulo: "Visitas Presenciais",
    desc: "Quando o problema exige presença física, estamos lá em horário comercial.",
  },
  {
    icone: "🔒",
    titulo: "Segurança Digital",
    desc: "Proteção contra vírus, backup de dados e políticas de segurança.",
  },
  {
    icone: "📊",
    titulo: "Consultoria em TI",
    desc: "Planejamento estratégico para otimizar sua infraestrutura tecnológica.",
  },
]

export const DIFERENCIAIS = [
  { numero: "24h", label: "Suporte remoto para emergências" },
  { numero: "30min", label: "Tempo de resposta prioritário" },
  { numero: "0", label: "Taxa de fidelidade" },
  { numero: "100%", label: "Transparência nos custos" },
]

export const FAQ = [
  {
    q: "Como funciona o suporte remoto?",
    a: "Utilizamos ferramentas seguras de acesso remoto que permitem resolver a maioria dos problemas sem necessidade de visita presencial. Você autoriza o acesso, acompanha tudo na tela e nós resolvemos.",
  },
  {
    q: "Vocês atendem fora de Bragança Paulista?",
    a: "Nosso atendimento presencial é focado em Bragança Paulista e região. Para suporte remoto, atendemos empresas de qualquer localidade.",
  },
  {
    q: "Preciso assinar contrato de fidelidade?",
    a: "Não. Nossos planos são mensais e você pode cancelar a qualquer momento, sem multas ou taxas adicionais.",
  },
  {
    q: "O que acontece se eu precisar de mais visitas?",
    a: "Visitas adicionais são cobradas à parte, com valor previamente acordado. Sem surpresas na fatura.",
  },
  {
    q: "Vocês oferecem suporte para Mac e Linux?",
    a: "Sim! Atendemos Windows, macOS e as principais distribuições Linux. Nossa equipe é capacitada em múltiplas plataformas.",
  },
]
