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
        className="btn btn-primary btn-lg"
      >
        Voltar para a Home
      </Link>
    </StatusPage>
  );
}
