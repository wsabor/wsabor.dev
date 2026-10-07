# Roadmap — wsabor.dev

Plano de evolução do site pessoal/portfólio. Dois objetivos:

1. **Portfólio** (recrutadores, área de tecnologia, educação) — mostrar _como_ trabalho, não só _o que_ entreguei.
2. **Captação de clientes locais** — vender sites, Google Meu Negócio (Perfil da Empresa no Google) e tráfego pago para pequenos negócios, e **medir** de onde vêm os contatos.

> Última revisão: 2026-10-04, depois do deploy com releases e rollback (`wsabor/infra` PR #13) e do e-mail `contato@wsabor.com` (PR #15).

---

## Como ler este roadmap

Os itens estão agrupados por **retorno × esforço**, para escolher o próximo trabalho.

- **Retorno:** 🟢 alto · 🟡 médio · ⚪ baixo — quanto ajuda os dois objetivos acima.
- **Esforço:** **P** até meio dia · **M** 1–2 dias · **G** 3 dias ou mais.
- 👤 = depende de você (painel, conteúdo ou decisão), não de código.

| Grupo | O que é | Quando fazer |
| --- | --- | --- |
| 1. Ganhos rápidos | Retorno alto, esforço pequeno | Primeiro |
| 2. Projetos estratégicos | Retorno alto, esforço grande | Um por vez, em fases |
| 3. Quando sobrar tempo | Retorno médio ou baixo, esforço pequeno | Entre os projetos grandes |
| 4. Adiado | Só faz sentido quando uma condição mudar | Revisitar na condição |

---

## 1. Ganhos rápidos (retorno alto, esforço pequeno)

| Item | Retorno | Esforço | Observação |
| --- | --- | --- | --- |
| 👤 **Search Console: acompanhar** | 🟢 | P | Conferir se o sitemap do `wsabor.com` passou de "Não foi possível ler" para "Sucesso" (11 URLs). Na propriedade `wsabor.dev`, as páginas devem aparecer como "Página alternativa com tag canônica adequada" — é o esperado. Se o sitemap continuar com erro depois de alguns dias, ver Segurança → Eventos na Cloudflare. |
| 👤 **Publicar os 2 rascunhos do blog** | 🟢 | M | Último post em 2025-09-03. Rascunhos em `content/scratch/`: "Por que todo Dev Deveria Aprender Design" e "Os 3 Maiores Desafios que Meus Alunos Enfrentam". O esforço é de escrita. Meta: 1 post/mês. |

---

## 2. Projetos estratégicos (retorno alto, esforço grande)

### 2.1 Landing page de serviços — 🟢 · no ar, falta o Google Ads

`wsabor.com/seu-negocio` está no ar (PR #21): marca Wagner Sabor, Osvaldo Cruz e Oeste Paulista com atendimento a distância, preço sob consulta, WhatsApp Business como chamada principal. Conteúdo em `src/data/business.ts`.

- [ ] 👤 **Google Ads (fase D):** conta criada no modo especialista (país Brasil, fuso Brasília, BRL), vinculada ao GA4; importar `whatsapp_click` como conversão (contagem "Uma"); campanha de Pesquisa só na rede de pesquisa, local Osvaldo Cruz + raio, destino `/seu-negocio`. Nunca importar `contact_click` (inclui LinkedIn/GitHub).
- [ ] Depois de 2 a 4 semanas de anúncio: revisar termos de pesquisa, negativar o que não converte e trocar o lance para "Maximizar conversões" quando houver ~15 a 30 conversões.
- [ ] Meta Ads (Instagram/Facebook) só se o Google Ads der retorno; exige o Pixel da Meta, o banner de consentimento e a CSP do nginx ampliada.
- Regra: nunca colocar prazo de entrega em dias na página (a entrega antes do prazo é surpresa para o cliente).

### 2.2 Completar os estudos de caso — 🟢 · M cada (👤 texto)

Existem 2 de 7: Topcoat Vernizes e Sistema de Simulados. O código já existe; o esforço é escrever contexto, decisões e resultados.

- [ ] DR Prev Serviços Previdenciários _(cliente — também serve de prova para a LP)_
- [ ] Hotel Brisa do Mar _(projeto de estudo; o README do repositório já tem o conteúdo técnico)_
- [ ] Quiz Prepara Aí 2025
- [ ] EPI System
- [ ] Agro Solutio

### 2.3 Depoimentos — 🟢 · M (👤 coleta)

O componente e o schema já existem; `src/data/testimonials.ts` está vazio, então a seção fica oculta.

- [ ] Coletar: clientes (Topcoat, DR Prev) e alunos/ex-alunos do SENAI.
- [ ] Possível primeiro depoimento: comentário da Cris D'Avilla no post do hackathon (só com autorização dela).
- [ ] Depoimentos de clientes também entram na LP de serviços.

### 2.4 Hospedar sites de clientes na OCI — 🟡 · G

Modelo de negócio: hospedagem + manutenção como receita recorrente. A Topcoat seria o piloto. Análise completa no ai-memory (projeto `topcoat`, `notes/melhorias-vindas-do-wsabor-2026-10-03.md`).

- [ ] Pré-requisitos: role Ansible parametrizado por site no `wsabor/infra` (o `deploy.sh` já é um template com repositório, branch, PM2 e porta como variáveis), monitoramento de disponibilidade.
- [x] Conta OCI em Pay As You Go (confirmado em 2026-10-07). O Always Free agora é 2 vCPUs e 12 GB no total da conta, já usados pelo servidor atual: sites de clientes entram nele (cabem ~25 a 30 sites Next.js com pouco acesso, ou centenas como HTML estático) ou numa VPS paga.
- [ ] 👤 Acordo por escrito com o cliente sobre hospedagem e manutenção.

### 2.5 CI/CD completo — 🟡 · G

Hoje a Vercel já faz o build de todo PR, e o `deploy.sh` do `wsabor/infra` publica na Oracle com releases, health check e rollback automático. Falta só o disparo automático. Vale quando esquecer o deploy virar problema ou como material didático.

- [ ] **CI nos PRs** (GitHub Actions): lint e typecheck explícitos. Ganho pequeno, porque a Vercel já barra build quebrado.
- [ ] **Preparar o servidor** (playbook do `wsabor/infra`): usuário `deploy` sem sudo para o GitHub entrar. A estrutura `~/apps/wsabor/releases/` + symlink `current` já existe.
- [ ] **Deploy contínuo na Oracle**: push na `main` → build `output: "standalone"` em runner ARM (`ubuntu-24.04-arm`, por causa do `sharp`) → rsync para uma pasta nova em `releases/` → a mesma troca de symlink, health check e rollback do `deploy.sh`. Alternativa mais simples: o Action só roda `deploy.sh` por SSH. `pm2 reload` em modo cluster tiraria o 1–2 s fora do ar no restart.

---

## 3. Quando sobrar tempo (retorno médio ou baixo, esforço pequeno)

| Item | Retorno | Esforço | Observação |
| --- | --- | --- | --- |
| **/labs** | 🟡 | P | Vitrine para `public/snakeGame/` e `public/pixelart/`, que hoje não têm nenhum link no site. |
| **/uses** | 🟡 | P | Setup (hardware, editor, extensões, terminal). SEO long-tail entre devs. |
| **Posts relacionados por categoria** | ⚪ | P | O "Leia também" já existe, mas mostra os mais recentes; trocar o critério para `category`/`keywords`. Cresce com o volume de posts. |
| **Table of Contents** | ⚪ | P | Só para posts longos (hoje apenas o do hackathon). Fazer junto com "posts relacionados". |
| **Vertente educador (`/recursos`)** | 🟡 | G (👤 curadoria) | Materiais, links e snippets usados em aula; schema `Course`. |

---

## 4. Adiado — revisitar quando…

| Item | Revisitar quando |
| --- | --- |
| Newsletter | O blog tiver cadência (1 post/mês por alguns meses) |
| Filtro por tag em /projects | Houver mais de 10 projetos |
| Busca/filtros no blog | Houver ~15 posts |
| /now | Houver disposição para atualizar todo mês |
| Integração GitHub | Houver motivo além de cosmético (o perfil do GitHub já mostra) |
| /stats público | Houver números reais e verificáveis para mostrar |
| i18n PT/EN | Houver foco ativo em mercado internacional |

## Descartado

- ~~Botão "Baixar CV"~~ — decisão: não haverá CV no site.
- ~~Analytics próprio (Plausible/PostHog)~~ — substituído por GA4.

---

## Fora deste repositório

- [ ] 👤 **README do `wsabor/infra`** — blocos prontos sobre os dois domínios e o redirect `www` na Cloudflare: ai-memory, projeto `infra`, `notes/site-dois-dominios-readme-2026-10-01.md`.
- [ ] **Site da Topcoat** — bug de canonical/hreflang (todas as páginas apontam para a home em PT, inclusive a versão ES), og:image nas páginas internas, redirect `www`, GA4 com consentimento, Search Console, JSON-LD e `llms.txt`: ai-memory, projeto `topcoat`, `notes/melhorias-vindas-do-wsabor-2026-10-03.md`.
- [ ] 👤 **Conta da Vercel por cliente** — a Topcoat está na conta pessoal (com Speed Insights); o plano Hobby é para uso não comercial. Alternativa: o item 2.4.

---

## Contínuo

- [ ] **Manutenção dos `llms.txt`** ao adicionar posts, projetos ou a LP (documentado no CLAUDE.md).
- [ ] **Lighthouse / Core Web Vitals** — auditoria trimestral; a primeira depois do GA4 (script de terceiros).
- [ ] **Testes em dispositivos reais** — iPhone Safari (`100svh`, pin, toque) e Android de entrada.
- [ ] **Deploy nos dois domínios** — depois de cada merge na `main`, a Vercel publica o `wsabor.dev` sozinha; o `wsabor.com` precisa de `ssh -p 9922 ubuntu@<IP> '~/apps/wsabor/deploy.sh'` (`rollback` volta uma versão; `status` lista as guardadas).

---

## Infra (referência)

- **Dois domínios, o mesmo site:** `wsabor.com` (principal para o Google; Oracle Cloud ARM A1, Ubuntu, Nginx, PM2; playbook no [`wsabor/infra`](https://github.com/wsabor/infra)) e `wsabor.dev` (espelho na Vercel). Canonical, sitemap e schemas apontam sempre para o `.com` (`SITE_URL` em `src/lib/site.ts`).
- **Cloudflare na frente do `wsabor.com`:** Redirect Rule `www.wsabor.com` → `wsabor.com` (301, curinga `https://www.*` → `https://${1}`, preservando a query string; o registro `www` precisa continuar com proxy). Email Address Obfuscation ativo.
- **Deploy na Oracle:** `~/apps/wsabor/deploy.sh`, instalado pelo role `site` do `wsabor/infra`. Cada deploy faz o build numa pasta nova em `releases/` e só então troca o link `current` (o PM2 sobe dali). Build com erro não muda nada; se o site não responder 200 em 30 s, volta sozinho para a versão anterior. Guarda as 3 últimas versões.
- **E-mail `contato@wsabor.com`:** Cloudflare Email Routing (MX `route1-3.mx.cloudflare.net` + SPF na raiz) encaminhando para o Gmail. Só recebe; para responder como `contato@` seria preciso um SMTP (ex.: Resend no subdomínio `send.wsabor.com`). As primeiras mensagens caíram no spam: filtro no Gmail "Nunca enviar para spam".
- **CSP do Nginx** libera Giscus, Formspree e Google Analytics. Qualquer serviço externo novo (Google Ads, Pixel da Meta) exige ampliar a CSP no `wsabor/infra`.
- **Medição:** GA4 `G-B2JE8SNHP3` nos dois domínios (Consent Mode v2, modo avançado; dados retidos por 14 meses; vinculado ao Search Console) e Vercel Analytics só no `.dev`.

---

## Concluído

**Outubro de 2026**

- [x] **Landing page `/seu-negocio`** — topo com WhatsApp, problemas do cliente, 3 serviços com o que inclui, como funciona, exemplos (Topcoat, DR Prev, Brisa do Mar como modelo), perguntas frequentes; schema `ProfessionalService`, imagem de prévia própria, item no menu e card da home apontando para ela (PR #21).
- [x] **Card do X por página** — título, descrição e imagem de cada página (antes todas mandavam os da home) (PR #21).
- [x] **GA4: eventos principais e dimensões** — `contact_click`, `generate_lead` e `whatsapp_click` (novo, só os cliques no WhatsApp, para importar no Google Ads) com estrela; dimensões `method`, `location`, `project`, `action` e `form` (escopo Evento).
- [x] **Logo e OG com "wsabor.com"** — Header, OG dos posts, OG da home (`public/og-image.png`) e banner do README.
- [x] **Deploy com releases e rollback** — o `deploy.sh` saiu deste repositório e virou template no role `site` do `wsabor/infra` (PR #13): build numa pasta nova, troca atômica do `current`, health check com rollback automático, `deploy.sh rollback`/`status`, sem pergunta interativa. Testado num container ARM e aplicado no servidor.
- [x] **Clone antigo `~/apps/wsabor.dev` apagado** do servidor depois da migração para o deploy com releases.
- [x] **E-mail `contato@wsabor.com`** — Cloudflare Email Routing para o Gmail; substituiu o Gmail no site, no JSON-LD, no RSS, na política de privacidade, no Formspree e nos `llms.txt` (PR #15).
- [x] **GA4 com consentimento (LGPD)** — script próprio em `src/lib/analytics.ts` (só em wsabor.com/wsabor.dev), Consent Mode v2 no modo avançado, banner com "Aceitar"/"Recusar" de mesmo peso, "Preferências de cookies" no rodapé, recusar apaga os cookies `_ga` (PR #11).
- [x] **Eventos do GA4** — `contact_click` (`method`, `location`), `project_click` (`project`, `action`, `location`) e `generate_lead` (formulário), com `trackAttrs()` + ouvinte único em `TrackClicks.tsx`. Verificados no Tempo real em 2026-10-04 (PR #12).
- [x] **Política de privacidade** em `/privacidade`, curta, com retenção de 14 meses. (`public/privacy_policy/` é a política do app Zen Focus, não do site.)
- [x] **CSP do Nginx** liberando o Google Analytics no `wsabor.com`.
- [x] **Search Console** — propriedade de domínio `wsabor.com`, sitemap enviado e vínculo com o GA4. A propriedade `wsabor.dev` continua para acompanhar a transição.
- [x] **Formspree** funcionando no `wsabor.com` (envio de teste recebido).
- [x] **Redirect `www.wsabor.com` → `wsabor.com`** na Cloudflare.
- [x] **SEO para dois domínios** — `wsabor.com` como principal: canonical e `og:url` em todas as páginas, títulos próprios em /about, /projects e /contact, `og:image` e sitemap para os estudos de caso (PR #7).
- [x] **Vercel Analytics por domínio** — carrega só em `wsabor.dev` e `*.vercel.app` (`VercelAnalytics.tsx`).
- [x] **Hotel Brisa do Mar no portfólio** — projeto de estudo entre os destaques da home. O EPI System continua como exemplo, sem link (fora do ar, só na rede do SENAI).
- [x] **Certificações Microsoft** — marquee de selos (cinza → colorido no hover) na home e no /about, com `hasCredential` no schema. Novas certificações: `src/data/certifications.ts`.
- [x] **Dependências atualizadas** dentro das faixas do `package.json` (Next 16.3.8; ESLint continua no 9).

**Setembro de 2026**

- [x] **Scroll sequence no hero da home** — canvas com frames WebP guiados pelo scroll (PR #3).
- [x] **Redesign da home e das páginas internas** — "Quem sou", bento de especialidades, marquee de tecnologias, CTA com canais diretos, /about, /projects, /blog, /contact, 404 e erro (PR #4).
- [x] **Estrutura de estudos de caso** (`/projects/[slug]` em MDX, com `highlights`).
- [x] **OG dinâmica por post** (`next/og`), OG/banner da home e **reading progress bar** nos posts.
- [x] **Comentários com Giscus** e **limpeza de repositório**.
