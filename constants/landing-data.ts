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
    icone: "🛡️",
    titulo: "Backup & Anti-Ransomware",
    desc: "Estratégia 3-2-1 com backup off-site (nuvem) e imutável, garantindo que seus dados sobrevivam a qualquer ataque ou falha.",
  },
  {
    icone: "📊",
    titulo: "Consultoria Estratégica",
    desc: "Planejamento para clínicas e escritórios, focando em LGPD, certificados digitais e infraestrutura de alta disponibilidade.",
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
    a: "Utilizamos ferramentas seguras (como o RustDesk ou AnyDesk corporativo) que permitem resolver a maioria dos problemas de software e configuração sem que você tenha que esperar por uma visita presencial.",
  },
  {
    q: "Vocês atendem clínicas e escritórios especializados?",
    a: "Sim, somos especialistas em infraestrutura para clínicas médicas (LGPD e prontuários), escritórios de advocacia (peticionamento eletrônico) e contabilidades (sistemas de gestão e certificados digitais).",
  },
  {
    q: "Preciso assinar um contrato de fidelidade?",
    a: "Nossa proposta é baseada na confiança. Se você não estiver satisfeito, pode cancelar no próximo mês, sem multas. Não queremos amarrar nossos clientes com taxas, mas sim com a qualidade do serviço.",
  },
  {
    q: "Como meu backup está seguro contra Ransomware?",
    a: "Seguimos a regra 3-2-1: Três cópias dos dados, em duas mídias, com uma fora da empresa (off-site). Usamos armazenamento imutável, o que impede que um vírus consiga apagar ou criptografar o backup.",
  },
  {
    q: "Vocês fazem manutenção preventiva ou só corretiva?",
    a: "Nosso foco é a prevenção. Monitoramos sua infraestrutura, backups e atualizações de segurança para garantir que o problema seja resolvido antes mesmo que você perceba.",
  },
]
