"use client";

import { useEffect } from "react";
import Link from "next/link";
import StatusPage from "@/components/StatusPage";

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
    <StatusPage
      code="Ops!"
      title="Algo deu errado!"
      description="Desculpe, ocorreu um erro inesperado."
    >
      <button
        onClick={() => reset()}
        className="bg-primary-strong hover:bg-primary-deep rounded-lg px-6 py-3 font-bold text-white transition-colors"
      >
        Tentar novamente
      </button>
      <Link
        href="/"
        className="border-primary/40 text-primary hover:border-primary hover:bg-primary/10 rounded-lg border px-6 py-3 font-bold transition-colors"
      >
        Voltar ao Início
      </Link>
    </StatusPage>
  );
}
