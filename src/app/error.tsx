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
        className="btn btn-primary"
      >
        Tentar novamente
      </button>
      <Link
        href="/"
        className="btn btn-secondary"
      >
        Voltar ao Início
      </Link>
    </StatusPage>
  );
}
