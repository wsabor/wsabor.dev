import Link from "next/link";

export default function CallToAction() {
  return (
    <>
      <section className="bg-surface py-24 md:py-32">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-text-main mb-4 text-3xl font-bold md:text-4xl">
            Vamos construir algo incrível juntos?
          </h2>
          <p className="text-text-muted mb-8 text-lg">
            Se você tem uma ideia, um projeto ou apenas quer conversar sobre
            tecnologia, me chame.
          </p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-light inline-block rounded-lg px-8 py-3 text-lg font-bold text-white transition-colors"
          >
            Entre em Contato
          </Link>
        </div>
      </section>
    </>
  );
}
