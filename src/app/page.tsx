import Hero from "@/components/Hero";
import Specialties from "@/components/Specialities";
import Projects from "@/components/Projects";
import RecentArticles from "@/components/RecentArticles";
import CallToAction from "@/components/CallToAction";

// Importar o componente JsonLd e os schemas
import JsonLd from "@/components/JsonLd";
import { getWebSiteSchema, getPersonSchema } from "@/lib/schemas";

export default function HomePage() {
  // Gerar os schemas
  const websiteSchema = getWebSiteSchema();
  const personSchema = getPersonSchema();

  return (
    <>
      {/* Schema.org Structured Data */}
      <JsonLd data={websiteSchema} />
      <JsonLd data={personSchema} />

      {/* Conteúdo da página */}
      <Hero />
      <Specialties />
      <Projects />
      <RecentArticles />
      <CallToAction />
    </>
  );
}
