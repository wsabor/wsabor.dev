import Link from "next/link";
import type { ReactNode } from "react";

const shortcuts = [
  { href: "/projects", label: "Projetos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contato" },
];

// Layout do 404 e da página de erro. Sem hooks: pode ser usado também
// dentro do error.tsx (client component).
export default function StatusPage({
  code,
  title,
  description,
  children,
}: {
  /** Texto grande em gradiente (ex.: "404"). */
  code: string;
  title: string;
  description: string;
  /** Botões de ação principais. */
  children: ReactNode;
}) {
  return (
    <section className="section-dots flex flex-1 items-center py-20 md:py-28">
      <div className="container mx-auto flex flex-col items-center px-8 text-center">
        <p
          aria-hidden="true"
          className="font-display from-primary to-primary-light bg-linear-to-r bg-clip-text text-8xl leading-none font-bold text-transparent md:text-[10rem]"
        >
          {code}
        </p>
        <h1 className="font-display text-text-main mt-6 text-3xl font-bold tracking-tight text-balance md:text-4xl">
          {title}
        </h1>
        <p className="text-text-muted mt-4 max-w-xl text-lg text-pretty">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {children}
        </div>

        <nav aria-label="Atalhos" className="mt-12">
          <p className="text-text-muted mb-3 text-sm">Ou continue por aqui:</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {shortcuts.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="card card-interactive text-text-main inline-block px-4 py-2 text-sm font-medium"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
