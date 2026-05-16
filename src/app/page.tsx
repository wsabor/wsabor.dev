import { Suspense } from "react";
import Hero from "@/components/Hero";
import HeroSkeleton from "@/components/HeroSkeleton";
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
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Specialties />
      <Projects />
      <Testimonials items={featuredTestimonials} />
      <RecentArticles />
      <CallToAction />
    </>
  );
}
