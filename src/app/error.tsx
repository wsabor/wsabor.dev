"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="mb-4 text-4xl font-bold text-text-main">
        Algo deu errado!
      </h2>
      <p className="mb-8 text-lg text-text-muted">
        Desculpe, ocorreu um erro inesperado.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-light"
        >
          Tentar novamente
        </button>
        <Link
          href="/"
          className="rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
