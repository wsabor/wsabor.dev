import Link from "next/link";

export default function CallToAction() {
  return (
    <>
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
