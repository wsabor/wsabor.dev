import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
      <p className="mb-2 text-2xl font-semibold text-text-main">
        Página não encontrada
      </p>
      <p className="mb-8 text-lg text-text-muted">
        A página que você está tentando acessar não existe ou foi removida.
      </p>
      <Link
        href="/"
        className="inline-block rounded-lg bg-primary px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-primary-light"
      >
        Voltar para a Home
      </Link>
    </main>
  );
}
