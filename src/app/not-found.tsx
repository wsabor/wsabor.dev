import Link from "next/link";
import StatusPage from "@/components/StatusPage";

export default function NotFound() {
  return (
    <StatusPage
      code="404"
      title="Página não encontrada"
      description="A página que você está tentando acessar não existe ou foi removida."
    >
      <Link
        href="/"
        className="bg-primary-strong hover:bg-primary-deep inline-block rounded-lg px-8 py-3 text-lg font-bold text-white transition-colors"
      >
        Voltar para a Home
      </Link>
    </StatusPage>
  );
}
