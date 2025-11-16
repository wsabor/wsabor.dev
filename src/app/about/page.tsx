import { BlogImage } from "@/components/BlogImage";

import JsonLd from "@/components/JsonLd";
import { getBreadcrumbListSchema } from "@/lib/schemas";

export default function AboutPage() {
  // Gerar breadcrumb para a página sobre
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: "Home", url: "https://wsabor.dev" },
    { name: "Sobre", url: "https://wsabor.dev/about" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <main className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <h1 className="mb-8 text-4xl font-bold text-text-main md:text-5xl">
          Do Pixel ao Código
        </h1>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p>
            Minha jornada começou no design gráfico e me levou ao
            desenvolvimento web. Hoje, sou especialista em{" "}
            <strong>Next.js</strong> e <strong>React</strong>, criando
            aplicações modernas que combinam código robusto com design
            intuitivo, para criar produtos que as pessoas amam usar.
          </p>

          <BlogImage
            src="/img/profile_working.webp"
            alt="Wagner trabalhando"
            caption="Trabalhando em um projeto desafiador."
            size="medium"
            aspectRatio="square"
          />

          {/* Os h2 e ul dentro de .prose serão estilizados automaticamente */}
          <h2>Minha Filosofia</h2>
          <ul>
            <li>
              <strong>Performance em Primeiro Lugar:</strong> Aplicações
              rápidas, otimizadas e escaláveis usando as melhores práticas do
              Next.js.
            </li>
            <li>
              <strong>Design que Funciona:</strong> A experiência do usuário não
              é uma etapa final, é o ponto de partida. Penso em UX/UI antes
              mesmo da primeira linha de código.
            </li>
            <li>
              <strong>Código Limpo e Manutenível:</strong> TypeScript,
              componentização inteligente e arquitetura escalável para projetos
              que crescem.
            </li>
            <li>
              <strong>Do Design ao Deploy:</strong> Experiência completa no
              ciclo de desenvolvimento, desde o Figma até a implantação do
              sistema.
            </li>
            <li>
              <strong>Valor Acima de Tudo:</strong> Meu objetivo é entregar
              soluções eficientes e duradouras que resolvam problemas reais,
              seja para um cliente ou para um aluno.
            </li>
            <li>
              <strong>Aprender Ensinando:</strong> Como instrutor no SENAI-SP,
              capacito a próxima geração de desenvolvedores e, nesse processo,
              me mantenho em constante evolução.
            </li>
          </ul>
          <h2>Stack Tecnológica</h2>
          <p>
            Trabalho principalmente com{" "}
            <strong>Next.js, React, TypeScript, Tailwind CSS</strong> e todo o
            ecossistema moderno de desenvolvimento web. Também tenho experiência
            com Node.js, APIs RESTful, bancos de dados e ferramentas de CI/CD.
          </p>

          <h2>Além do Código</h2>
          <p>
            Atuo compartilhando conhecimento e contribuindo na formação de uma
            nova geração de desenvolvedores como instrutor no SENAI-SP.
          </p>
          <p>
            Como hobby tenho explorado o fantástico mundo da modelagem e
            impressão 3D, o que me ajuda a manter a criatividade afiada e a
            pensar fora da caixa. Também estou estudando eletrônica, uma área
            que sempre me fascinou e agora estou tendo a oportunidade de
            explorar e entender mais.
          </p>
        </div>
      </main>
    </>
  );
}
