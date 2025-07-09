import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { SpecialtyCard } from "@/components/SpecialtyCard";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { latestArticles } from "@/data/articles";
import { specialties } from "@/data/specialties";

export default function HomePage() {
  return (
    <>
      {/* Seção Hero */}
      <section className="hero-aspect-ratio relative">
        <div className="hero-content-wrapper flex items-center justify-center text-center">
          {/* Contêiner da Imagem e Overlay (sem alterações) */}
          <div className="absolute inset-0 z-0">
            <div className="hero-background h-full w-full bg-cover bg-center bg-no-repeat"></div>
            {/* 
        O overlay foi ajustado para ter uma cor mais escura no tema claro, 
        garantindo que o texto claro no tema escuro tenha contraste.
      */}
            <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-background via-transparent to-black/40 dark:bg-background/20 dark:to-background/40"></div>
          </div>

          {/* Conteúdo do Hero (acima do overlay) */}
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              {/*
          AQUI ESTÁ A MUDANÇA PRINCIPAL:
          - Padrão (Tema Claro): O texto é da cor 'text-main' (preto).
          - No Tema Escuro (dark:): Aplicamos o gradiente de branco que você já tinha.
        */}
              <h1 className="mb-6 text-4xl font-bold text-text-main dark:bg-gradient-to-b dark:from-white dark:to-neutral-300 dark:bg-clip-text dark:text-transparent md:text-6xl">
                Wagner Sabor
              </h1>

              {/*
          - Padrão (Tema Claro): O texto é 'text-muted' (cinza escuro).
          - No Tema Escuro (dark:): O texto é 'text-neutral-200' (branco suave).
        */}
              <p className="mx-auto mb-8 max-w-2xl text-xl text-text-main/80 dark:text-neutral-200 md:text-2xl">
                Do Pixel ao Código. Do Código à Educação. <br />
                Eu construo experiências digitais e capacito a próxima geração
                de desenvolvedores.
              </p>

              {/* Botão Hero (já usa 'primary', então está perfeito) */}
              <Link
                href="/projects"
                className="inline-block rounded-lg bg-primary px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-primary-light"
              >
                Conheça meus Projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Especialidades (fundo padrão do body) */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 text-center md:grid-cols-3">
            {specialties.map((specialty) => (
              <SpecialtyCard
                key={specialty.id}
                icon={specialty.icon}
                title={specialty.title}
                description={specialty.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção Projetos em Destaque (fundo surface) */}
      <section className="bg-surface py-16 md:py-44">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            {/* Títulos e textos usando as cores do tema */}
            <h2 className="mb-4 text-3xl font-bold text-text-main md:text-4xl">
              Projetos em Destaque
            </h2>
            <p className="text-lg text-text-muted">
              Uma amostra do meu trabalho, da concepção à implementação.
            </p>
          </div>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                link={project.link}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
          <div className="text-center">
            {/* Link usando a cor primária */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-light"
            >
              Ver todos os projetos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Artigos Recentes (fundo padrão do body) */}
      <section className="py-16 md:py-44">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-text-main md:text-4xl">
              Artigos Recentes
            </h2>
            <p className="text-lg text-text-muted">
              Compartilhando conhecimento e insights sobre tecnologia e
              educação.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {latestArticles.map((article) => (
              // Card do artigo usando as cores do tema
              <Link
                href={article.slug}
                key={article.id}
                className="block rounded-xl border border-white/10 bg-surface p-6 transition-colors hover:border-primary"
              >
                <h3 className="mb-2 text-xl font-semibold text-text-main">
                  {article.title}
                </h3>
                <p className="mb-4 text-text-muted">{article.summary}</p>
                <span className="flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-light">
                  Ler Artigo <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção CTA Final */}
      <section className="bg-surface py-24 md:py-44">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-main md:text-4xl">
            Vamos construir algo incrível juntos?
          </h2>
          <p className="mb-8 text-lg text-text-muted">
            Se você tem uma ideia, um projeto ou apenas quer conversar sobre
            tecnologia, me chame.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-primary px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-primary-light"
          >
            Entre em Contato
          </Link>
        </div>
      </section>
    </>
  );
}
