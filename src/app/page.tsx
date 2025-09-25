import Hero from "@/components/Hero";
import Specialties from "@/components/Specialities";
import Projects from "@/components/Projects";
import RecentArticles from "@/components/RecentArticles";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Specialties />
      <Projects />
      <RecentArticles />
      <CallToAction />
    </>
  );
}
