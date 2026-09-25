import { SpecialtyCard } from "./SpecialtyCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { specialties } from "@/data/specialties";

export default function Specialties() {
  return (
    <section
      className="section-dots py-20 md:py-32"
      aria-labelledby="especialidades"
    >
      <Reveal className="container mx-auto px-8">
        <SectionHeading
          id="especialidades"
          eyebrow="O que eu faço"
          title="Especialidades"
          description="Do design da interface ao código em produção, passando pela formação de quem vai construir a próxima geração de produtos."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {specialties.map((specialty) => (
            <SpecialtyCard
              key={specialty.id}
              icon={specialty.icon}
              title={specialty.title}
              description={specialty.description}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
