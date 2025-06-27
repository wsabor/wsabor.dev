export default function NotFound() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center bg-neutral-900 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <p className="mb-6 text-xl">Página não encontrada</p>
        <p className="mb-6 text-xl">
          Esta página que você está tentando acessar não existe ou foi removida
        </p>
        <a
          href="/"
          className="inline-block rounded-lg bg-primary px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-primary-light"
        >
          Voltar para a Home
        </a>
      </div>
    </div>
  );
}
