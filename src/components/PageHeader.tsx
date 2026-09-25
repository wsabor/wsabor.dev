import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

type Crumb = { href: string; label: string };

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Trilha até a página atual (a última é a própria página, sem link). */
  breadcrumbs?: Crumb[];
  /** Botões ou metadados abaixo da descrição. */
  children?: ReactNode;
};

// Cabeçalho padrão das páginas internas: mesma linguagem das seções da home.
export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: PageHeaderProps) {
  return (
    <header className="section-dots pt-12 pb-12 md:pt-20 md:pb-16">
      <div className="container mx-auto px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Trilha de navegação" className="mb-8">
            <ol className="text-text-muted flex flex-wrap items-center gap-1 text-sm">
              {breadcrumbs.map((crumb, index) => {
                const last = index === breadcrumbs.length - 1;
                return (
                  <li key={crumb.href} className="flex items-center gap-1">
                    {last ? (
                      <span aria-current="page" className="text-text-main">
                        {crumb.label}
                      </span>
                    ) : (
                      <>
                        <Link
                          href={crumb.href}
                          className="hover:text-primary transition-colors"
                        >
                          {crumb.label}
                        </Link>
                        <ChevronRight size={14} aria-hidden="true" />
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="font-display text-text-main text-4xl font-bold tracking-tight text-balance md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="text-text-muted mt-6 text-lg leading-relaxed text-pretty md:text-xl">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </header>
  );
}
