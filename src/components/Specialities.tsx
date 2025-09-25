import { SpecialtyCard } from "./SpecialtyCard";
import { specialties } from "@/data/specialties";

export default function Specialties() {
  return (
    <>
      {/* Seção Especialidades (fundo padrão do body) */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 text-center md:grid-cols-3">
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
