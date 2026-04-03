# Checklist de Onboarding Técnico: A "Hora 1" Elite

Este checklist foi desenhado para ser executado em dupla (Iago & Camargo), garantindo que em 60-90 minutos a rede do cliente esteja 100% mapeada e sob controle.

---

## 🎒 Preparação (Pré-visita)
- [ ] Pendrives de Boot (Ventoy com Windows 10/11, ferramentas de remoção de vírus).
- [ ] Etiquetas físicas (para colar nas máquinas com o ID).
- [ ] Pasta no Notion do Cliente já criada.
- [ ] Instalador do **Tactical RMM Agent** e **RustDesk** prontos para rede.

---

## 🚀 Fase 1: Reconhecimento e Infra (Iago)
*Foco: O coração da empresa.*
- [ ] **Mapear Roteador/Modem:** Capturar IP, marca, modelo e tirar foto das conexões.
- [ ] **Mapear Switch/Rack:** Verificar se há desorganização crítica de cabos.
- [ ] **Servidor/Storage:** Identificar quem é o servidor de arquivos e o estado visual do hardware.
- [ ] **Escaneamento de Rede:** Rodar *Advanced IP Scanner* para achar impressoras e dispositivos ocultos.
- [ ] **Senhas de Infra:** Solicitar as senhas de acesso ao roteador e rede Wi-Fi.

---

## 💻 Fase 2: Estação de Trabalho (Camargo)
*Foco: Onde os usuários sentem o suporte.*
- [ ] **Inventário Rápido:** Nomear a máquina (ex: `CLI-REC-01`) e colar a etiqueta física.
- [ ] **Instalação Tactical RMM:** Instalar o agente e confirmar que apareceu no Painel Dashboard.
- [ ] **Instalação RustDesk:** Configurar para acesso não supervisionado (Senha fixa estratégica).
- [ ] **Saúde do Disco (Iago via Dashboard):** Enquanto Camargo instala, Iago verifica remotamente se há discos morrendo (S.M.A.R.T).
- [ ] **Remover Bloatware:** Desinstalar apps inúteis que deixam o PC lento (McAfee Trial e similares).

---

## 📄 Fase 3: Segurança e Backup (Iago & Camargo)
- [ ] **Backup Interno:** Verificar se há algum backup rodando (HD Externo / Nuvem). Se não houver, reportar como urgência.
- [ ] **Antivírus:** Confirmar se há um AV ativo ou se usaremos o padrão Windows Defender + RMM.
- [ ] **Contas de Usuário:** Verificar se os usuários são Admin ou Padrão (Recomendar Padrão para segurança).

---

## 🤝 Fase 4: Experiência do Usuário (Onboarding Humano)
- [ ] **Apresentação:** "Olá, sou o [Nome], a partir de hoje cuidamos da TI de vocês".
- [ ] **Instrução de Chamado:** Explicar que agora os pedidos devem ser por WhatsApp/Trello para não haver perda de informação.
- [ ] **Adesivo de Suporte:** Colar adesivo com o WhatsApp de suporte no monitor ou gabinete.

---

## 📋 Fase 5: Enceerramento e Relatório "Hora 1"
- [ ] Tirar fotos finais de tudo (Organização do Rack, etc).
- [ ] Fazer uma reunião de 5 minutos com o dono/gestor.
- [ ] **Checklist de Entrega:** Entregar o relatório inicial (ex: "Achamos 3 máquinas com disco em risco e 1 roteador desatualizado").

---
**Padrão Sugerido de Hostname:** `[CLIENTE]-[DEP]-[SEQ]` (Ex: `ILP-REC-01`)
