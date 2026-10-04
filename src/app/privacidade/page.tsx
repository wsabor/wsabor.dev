
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";
import { getBreadcrumbListSchema } from "@/lib/schemas";
import { absoluteUrl, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/privacidade",
  title: "Política de privacidade",
  description:
    "Quais dados o site coleta, para quê e como exercer seus direitos pela LGPD.",
});

export default function PrivacyPage() {
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: "Home", url: absoluteUrl() },
    { name: "Privacidade", url: absoluteUrl("/privacidade") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        eyebrow="Privacidade"
        title="Política de privacidade"
        description="O que este site coleta, para quê e como você controla isso."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/privacidade", label: "Privacidade" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="prose prose-lg dark:prose-invert container mx-auto max-w-3xl px-8">
          <p>
            <em>Última atualização: 3 de outubro de 2026.</em>
          </p>
          <p>
            Este site é mantido por Wagner Sabor. Dúvidas ou pedidos sobre seus
            dados:{" "}
            <a href="mailto:contato@wsabor.com">contato@wsabor.com</a>.
          </p>

          <h2>O que é coletado</h2>
          <ul>
            <li>
              <strong>Estatísticas de visita (Google Analytics):</strong> quais
              páginas foram vistas e de onde veio a visita. Os cookies só são
              gravados se você aceitar no aviso de cookies; sem isso, o Google
              recebe apenas sinais sem identificação. Os dados ficam guardados
              por 14 meses e não são usados para anúncios.
            </li>
            <li>
              <strong>Formulário de contato:</strong> nome, e-mail e mensagem,
              enviados pelo serviço Formspree e usados só para responder você.
            </li>
            <li>
              <strong>Comentários nos posts:</strong> feitos com a sua conta do
              GitHub (via Giscus) e sujeitos à política do GitHub.
            </li>
            <li>
              <strong>Hospedagem:</strong> os serviços que mantêm o site no ar
              (Oracle Cloud, Cloudflare e Vercel) registram dados técnicos de
              acesso, como o endereço IP.
            </li>
          </ul>
          <p>
            O tema escolhido e a sua resposta ao aviso de cookies ficam só no
            seu navegador.
          </p>

          <h2>Seus direitos</h2>
          <p>
            Você pode mudar sua escolha sobre cookies a qualquer momento em{" "}
            <CookiePreferencesButton className="text-primary hover:text-primary-deep dark:hover:text-primary-light font-medium underline underline-offset-2" />
            , no rodapé. Pela LGPD, você também pode pedir acesso, correção ou
            exclusão dos seus dados pelo e-mail acima.
          </p>
        </div>
      </section>
    </>
  );
}
