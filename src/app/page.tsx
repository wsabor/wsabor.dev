import ScrollSequence from "@/components/ScrollSequence";
import HeroIntro from "@/components/HeroIntro";
import SmoothScroll from "@/components/SmoothScroll";
import { scrollSequence } from "@/data/scrollSequence";
import Specialties from "@/components/Specialities";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import RecentArticles from "@/components/RecentArticles";
import CallToAction from "@/components/CallToAction";

// Importar o componente JsonLd e os schemas
import JsonLd from "@/components/JsonLd";
import {
  getWebSiteSchema,
  getPersonSchema,
  getReviewSchema,
} from "@/lib/schemas";
import { featuredTestimonials } from "@/data/testimonials";

export default function HomePage() {
  // Gerar os schemas
  const websiteSchema = getWebSiteSchema();
  const personSchema = getPersonSchema();
  const reviewSchemas = featuredTestimonials.map((t) =>
    getReviewSchema({
      quote: t.quote,
      authorName: t.authorName,
      authorRole: t.authorRole,
    }),
  );

  return (
    <>
      {/* Schema.org Structured Data */}
      <JsonLd data={websiteSchema} />
      <JsonLd data={personSchema} />
      {reviewSchemas.map((s, i) => (
        <JsonLd key={i} data={s} />
      ))}

      {/* Conteúdo da página */}
      <SmoothScroll />

      {/* Hero sobre o canvas. Para voltar ao layout "Hero + scroll abaixo":
          <Hero /> (@/components/Hero) acima e <ScrollSequence> sem children. */}
      <ScrollSequence {...scrollSequence}>
        <HeroIntro />
      </ScrollSequence>
      <Specialties />
      <Projects />
      <Testimonials items={featuredTestimonials} />
      <RecentArticles />
      <CallToAction />
    </>
  );
}
