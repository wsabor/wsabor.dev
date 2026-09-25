import { SpecialtyCard } from "./SpecialtyCard";
import { specialties } from "@/data/specialties";

export default function Specialties() {
  return (
    <>
      <section className="py-16 md:py-32" aria-labelledby="especialidades">
        <div className="container mx-auto px-8">
          {/* Título só para leitores de tela: mantém a ordem h1 → h2 → h3 */}
          <h2 id="especialidades" className="sr-only">
            Especialidades
          </h2>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {specialties.map((specialty) => (
              <SpecialtyCard
                key={specialty.id}
                icon={specialty.icon}
                title={specialty.title}
                description={specialty.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
