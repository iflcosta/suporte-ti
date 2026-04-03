# Guia de Segurança e Boas Práticas — Il Potere Tech

Este documento descreve as medidas de segurança implementadas e os passos recomendados para manter a integridade da landing page.

## 1. Medidas Implementadas

*   **Variáveis de Ambiente**: Credenciais do Supabase estão isoladas no arquivo `.env.local` e configuradas para não serem compartilhadas no GitHub.
*   **Validação de Dados**: O formulário de contato utiliza `Zod` para validar e-mail, telefone e comprimento das mensagens antes de enviá-las ao banco de dados.
*   **Sanitização**: O React/Next.js sanitiza automaticamente as entradas do usuário, protegendo contra ataques básicos de XSS.
*   **Links Seguros**: Todos os links externos (WhatsApp) utilizam `rel="noopener noreferrer"` para evitar ataques de sequestro de aba.

## 2. Configurações Obrigatórias do Supabase (RLS)

Para que o formulário funcione com segurança, você DEVE executar estas queries no SQL Editor do seu projeto Supabase:

```sql
-- Ativar RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Permitir APENAS inserções (publicas)
CREATE POLICY "Permitir inserções públicas" ON public.leads FOR INSERT WITH CHECK (true);

-- Bloquear leitura (SELECT) para o público
CREATE POLICY "Bloquear leitura pública" ON public.leads FOR SELECT USING (auth.uid() IS NOT NULL);
```

## 3. Próximos Passos Sugeridos

1.  **Honeypot para Bots**: Se você começar a receber spam de robôs, podemos adicionar um campo oculto no formulário que, se preenchido, invalida o envio.
2.  **Rate Limiting**: Em produção na Vercel, considere ativar as proteções nativas da Vercel para evitar ataques de negação de serviço (DoS) no formulário.
3.  **Monitoramento**: Verifique periodicamente a tabela `leads` no Supabase para garantir que as mensagens estão chegando e que não há anomalias.
4.  **Build Final**: Antes do deploy final, remova a flag `ignoreBuildErrors: true` no `next.config.mjs` para garantir que o código TypeScript está 100% livre de erros antes de ir pro ar.
