# Plano do Agente de IA — Il Potere Tech

## Princípio Central

O agente não substitui o técnico. Ele é o **segundo cérebro do técnico** — mais rápido no diagnóstico, nunca esquece nada, disponível 24/7.

---

## Os 4 Modos do Agente

```
┌─────────────────────────────────────────────────────┐
│                  AGENTE IL POTERE                   │
├──────────────┬──────────────┬────────────┬──────────┤
│   MONITOR    │   TRIAGEM    │   CAMPO    │RELATÓRIO │
│   (24/7)     │  (decisão)   │ (técnico)  │ (mensal) │
└──────────────┴──────────────┴────────────┴──────────┘
```

---

## 1. Agente Monitor (roda em segundo plano)

**O que faz:**
- Consome os dados do RMM continuamente
- Detecta padrões anômalos antes de virar incidente
- Cruza com o histórico do cliente

**Exemplos de detecção:**
- HD com 87% de uso + crescimento de 3% ao mês → alerta 40 dias antes de encher
- CPU a 95% por 3 dias seguidos → não é pico, é gargalo → sugere diagnóstico de processo em loop
- Backup não executado há 2 dias → tenta reexecutar remotamente → se falhar, escala para técnico

**Regra:** não toma decisões que afetam o cliente sem aprovação humana.

---

## 2. Agente de Triagem (o despachante)

Quando um alerta chega — seja do RMM, do cliente pelo WhatsApp ou do técnico — o agente de triagem entra.

**Fluxo:**
```
Incidente recebido
        ↓
Classifica: Crítico / Médio / Baixo
        ↓
Consulta histórico do cliente
        ↓
┌───────────────────┬────────────────────┐
│  Tem solução       │  Não tem solução   │
│  conhecida?        │  conhecida?        │
│        ↓           │        ↓           │
│  Executa remoto    │  Monta briefing    │
│  + registra        │  p/ técnico        │
└───────────────────┴────────────────────┘
```

**Exemplo de briefing enviado ao técnico:**
```
🔴 CLIENTE: Clínica Saúde Total
PROBLEMA: Sistema de prontuário offline
HISTÓRICO: Mesmo erro em 15/02 — causa foi atualização
           automática do Windows conflitando com o ERP
SOLUÇÃO ANTERIOR: rollback da atualização KB5034441
TEMPO ESTIMADO: 20 min remoto
AÇÃO SUGERIDA: Conectar via AnyDesk, verificar
               serviço MedSystem, reverter update
```

O técnico chega na situação já sabendo o que provavelmente vai encontrar.

---

## 3. Agente de Campo (no celular/notebook do técnico)

Interface em linguagem natural. O técnico descreve o que vê, o agente responde com diagnóstico e passos.

**Exemplo de uso:**

```
Técnico: "Tô aqui na clínica, o computador da recepção
          tá lento absurdo, acabei de chegar"

Agente:  "Esse PC tem histórico de RAM lotada pelo
          Chrome. Abre o Gerenciador de Tarefas e me
          diz: quantos % de RAM e qual processo no topo?"

Técnico: "88% de RAM, processo: svchost.exe (6 instâncias)"

Agente:  "Svchost em loop geralmente é Windows Update
          travado. Passos:
          1. Services.msc → Windows Update → Parar
          2. Deletar C:\Windows\SoftwareDistribution\Download
          3. Reiniciar o serviço
          Deve resolver em 5 min. Se não resolver,
          próximo diagnóstico é driver de rede."
```

**Outras capacidades:**
- Consulta o histórico completo do cliente em segundos
- Identifica equipamento pela serial ou descrição
- Gera o registro do atendimento enquanto o técnico trabalha, por voz ou texto
- Verifica se o problema exige peça nova e consulta estoque

---

## 4. Agente de Relatório (mensal)

Consolida tudo registrado pelos outros 3 agentes e gera o relatório por plano.

| Plano | Relatório | Frequência |
|---|---|---|
| Essenziale | Básico | Mensal |
| Professionale | Intermediário + alertas pontuais | Mensal |
| Impresa | Avançado executivo + recomendações | Semanal + Mensal |

**Campo obrigatório em todos os planos:**
```
Intervenções silenciosas este mês: 7
Você não percebeu. Era o objetivo.
```

---

## Stack Técnica

| Camada | Ferramenta |
|---|---|
| Modelo de IA | Claude API (Anthropic) |
| Memória de cliente | Supabase |
| RMM | N-able, NinjaRMM ou Tactical RMM (open source) |
| Interface do técnico | App web PWA (abre no celular sem instalar) |
| Comunicação | WhatsApp Business API ou n8n |
| Automação de fluxo | n8n (self-hosted) |

---

## Contexto por Cliente (diferencial chave)

Cada cliente tem um **dossiê vivo** no Supabase com:
- Inventário de equipamentos
- Histórico de incidentes e soluções
- Soluções que funcionaram (e as que não funcionaram)
- Peculiaridades do ambiente (sistemas específicos, configurações críticas)

O agente consulta esse dossiê antes de responder qualquer coisa. É o que diferencia de um assistente genérico.

---

## Ordem de Implementação (por valor)

```
1º → Agente de Campo        (impacto imediato no técnico)
2º → Agente de Triagem      (reduz tempo de resposta)
3º → Agente de Relatório    (retenção de clientes)
4º → Agente Monitor         (o mais complexo, exige RMM maduro)
```

---

## Conexão com os Planos Comerciais

| Agente | Essenziale | Professionale | Impresa |
|---|---|---|---|
| Monitor | Básico | Completo | Completo + preditivo |
| Triagem | Sim | Prioritário | SLA 30min garantido |
| Campo | Consulta | Consulta | Consultoria estratégica |
| Relatório | Básico | Intermediário | Avançado executivo |
