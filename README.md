# 🚀 Portfólio e Blog Pessoal - Wagner Sabor

![Banner do Site](https://github.com/wsabor/wsabor.dev/blob/main/public/screenshot.webp)

Bem-vindo ao repositório do meu site pessoal e blog, um espaço onde compartilho minha jornada profissional, projetos, artigos e reflexões sobre tecnologia, design e educação. Este projeto foi construído com o objetivo de ser não apenas um portfólio, mas também uma plataforma para aplicar e demonstrar minhas habilidades.

**Visite o site:** [wsabor.com](https://wsabor.com/) (espelho em [wsabor.dev](https://wsabor.dev/))

---

## ✨ Sobre o Projeto

Este site reflete minha filosofia profissional: **Do Pixel ao Código**. Com um background sólido em design gráfico e uma paixão por desenvolvimento de software, acredito que as melhores soluções digitais nascem da união entre uma engenharia robusta e uma experiência de usuário intuitiva e encantadora.

O projeto foi desenvolvido do zero utilizando as tecnologias mais modernas do ecossistema React, com foco em performance, acessibilidade e uma experiência de desenvolvimento ágil.

### Principais Funcionalidades

- **Blog com MDX:** Artigos e tutoriais escritos em Markdown, permitindo a inclusão de componentes React diretamente no texto.
- **Portfólio de Projetos:** Uma seção dedicada para apresentar meus trabalhos e estudos de caso.
- **Certificações:** Faixa com os selos das certificações Microsoft, cada um com link para a credencial no Microsoft Learn.
- **Design Responsivo:** Interface totalmente adaptável para desktops, tablets e dispositivos móveis.
- **Hero com scroll cinematográfico:** Sequência de imagens desenhada em canvas e controlada pelo scroll (GSAP ScrollTrigger + Lenis), com alternativa estática para quem prefere movimento reduzido.
- **Tema Escuro (Dark Mode):** Suporte nativo para tema claro e escuro, respeitando a preferência do sistema do usuário.
- **Componentes Reutilizáveis:** Construído com uma arquitetura de componentes bem definida para fácil manutenção e escalabilidade.
- **SEO para dois domínios:** O mesmo site roda em `wsabor.com` (principal) e `wsabor.dev` (espelho). Canonical, sitemap, RSS, Open Graph e dados estruturados (JSON-LD) apontam sempre para o domínio principal, configurado em um único lugar (`src/lib/site.ts`).
- **Analytics com consentimento (LGPD):** Google Analytics 4 com Consent Mode v2 e banner de cookies; nada é gravado no navegador antes do aceite. Eventos de contato, de projetos e do formulário medem de onde vêm os contatos. Política de privacidade em `/privacidade`.
- **Pronto para LLMs:** `llms.txt` e `llms-full.txt` com o conteúdo do site em Markdown.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Conteúdo:** [MDX](https://mdxjs.com/)
- **Animação:** [GSAP](https://gsap.com/) (ScrollTrigger) e [Lenis](https://lenis.darkroom.engineering/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Medição:** [Google Analytics 4](https://marketingplatform.google.com/about/analytics/) e [Vercel Analytics](https://vercel.com/analytics)
- **Deployment:** `wsabor.com` na [Oracle Cloud](https://www.oracle.com/cloud/) (Nginx + PM2, atrás da [Cloudflare](https://www.cloudflare.com/); deploy com uma pasta por versão e rollback automático, configurado com Ansible num repositório de infra separado) e `wsabor.dev` na [Vercel](https://vercel.com/)

---

## 📬 Contato

Obrigado por visitar o repositório! Sinta-se à vontade para se conectar comigo:

- **E-mail:** [contato@wsabor.com](mailto:contato@wsabor.com)
- **LinkedIn:** [Wagner Sabor](https://www.linkedin.com/in/wsabor/)
- **GitHub:** [@wsabor](https://github.com/wsabor)
