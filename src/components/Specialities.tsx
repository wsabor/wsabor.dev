import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  businessServices,
  specialties,
  techStack,
  type Specialty,
} from "@/data/specialties";

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="bg-primary/10 text-primary-deep dark:text-primary-light rounded-full px-3 py-1 text-xs font-medium"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="from-primary/20 to-primary-light/10 ring-primary/20 text-primary mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br ring-1">
      {children}
    </div>
  );
}

function SpecialtyTile({
  specialty,
  className = "",
  children,
}: {
  specialty: Specialty;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      data-reveal
      className={`card card-interactive flex flex-col p-8 ${className}`}
    >
      <IconBox>{specialty.icon}</IconBox>
      <h3 className="font-display text-text-main text-xl font-semibold md:text-2xl">
        {specialty.title}
      </h3>
      <p className="text-text-muted mt-3 leading-relaxed">
        {specialty.description}
      </p>
      <Tags tags={specialty.tags} />
      {children}
    </div>
  );
}

/** Janela de editor decorativa do bloco principal. */
function CodeWindow() {
  return (
    <div
      aria-hidden="true"
      className="mt-8 flex flex-1 flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-950 font-mono text-[11px] shadow-2xl sm:text-sm"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
        <span className="ml-3 text-xs text-neutral-500">projeto.tsx</span>
      </div>
      <pre className="flex-1 overflow-hidden px-5 py-4 leading-relaxed text-neutral-300">
        <span className="text-purple-400">export default function</span>{" "}
        <span className="text-sky-300">Projeto</span>() {"{"}
        {"\n"}
        {"  "}
        <span className="text-purple-400">return</span> (
        {"\n"}
        {"    "}
        <span className="text-sky-300">&lt;Ideia</span>{" "}
        <span className="text-cyan-300">vira</span>=
        <span className="text-emerald-300">&quot;produto&quot;</span>
        {"\n"}
        {"      "}
        <span className="text-cyan-300">rapido</span>{" "}
        <span className="text-cyan-300">acessivel</span>{" "}
        <span className="text-cyan-300">escalavel</span>
        {"\n"}
        {"    "}
        <span className="text-sky-300">/&gt;</span>
        {"\n"}
        {"  "});{"\n"}
        {"}"}
      </pre>
    </div>
  );
}

export default function Specialties() {
  const [fullStack, design, mentoring] = specialties;

  return (
    <section
      className="section-dots py-20 md:py-32"
      aria-labelledby="especialidades"
    >
      <Reveal className="container mx-auto px-8">
        <SectionHeading
          id="especialidades"
          eyebrow="O que eu faço"
          title="Especialidades"
          description="Do design da interface ao código em produção, passando pela formação de quem vai construir a próxima geração de produtos."
        />

        {/* Bento: bloco principal ocupa 2 colunas e 2 linhas no desktop */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SpecialtyTile
            specialty={fullStack}
            className="md:col-span-2 lg:row-span-2"
          >
            <CodeWindow />
          </SpecialtyTile>
          <SpecialtyTile specialty={design} />
          <SpecialtyTile specialty={mentoring} />

          {/* Serviços para pequenos negócios: faixa larga em destaque */}
          <div
            data-reveal
            className="card card-interactive relative overflow-hidden p-8 md:col-span-2 md:p-10 lg:col-span-3"
          >
            <div
              aria-hidden="true"
              className="from-primary/15 via-primary-light/10 pointer-events-none absolute inset-0 bg-linear-to-r to-transparent"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow mb-3">Para empresas</p>
                <h3 className="font-display text-text-main text-2xl font-bold md:text-3xl">
                  {businessServices.title}
                </h3>
                <p className="text-text-muted mt-3 leading-relaxed">
                  {businessServices.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {businessServices.items.map((item) => (
                    <li
                      key={item.label}
                      className="bg-background/60 text-text-main inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium dark:border-white/10"
                    >
                      <span className="text-primary">{item.icon}</span>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={businessServices.cta.href}
                className="group bg-primary-strong hover:bg-primary-deep inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg px-6 py-3 font-bold text-white transition-colors lg:self-center"
              >
                {businessServices.cta.label}
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Faixa de tecnologias */}
        <div data-reveal className="marquee mt-16">
          <div className="marquee-track">
            {[false, true].map((duplicate) => (
              <ul
                key={String(duplicate)}
                aria-hidden={duplicate || undefined}
                aria-label={duplicate ? undefined : "Tecnologias"}
                className="marquee-group"
              >
                {techStack.map((tech) => (
                  <li
                    key={tech}
                    className="card text-text-muted px-5 py-2.5 text-sm font-medium whitespace-nowrap"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
