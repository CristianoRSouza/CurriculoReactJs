import { Card } from "./Card";

const cursos = [
  { autor: "Digital House", curso: "Desenvolvimento Full Stack" },
  { autor: "FullCycle", curso: "Full Stack Full Cycle" },
  { autor: "FullCycle", curso: "Docker" },
  { autor: "FullCycle", curso: "Fundamentos de Arquitetura de Software" },
  { autor: "FullCycle", curso: "Domain-Driven Design (DDD)" },
  { autor: "FullCycle", curso: "SOLID Principles" },
  { autor: "Rocketseat", curso: "Node.js" },
  { autor: "FullCycle", curso: "Clean Architecture" },
  { autor: "FullCycle Team", curso: "RabbitMQ Basics" },
  { autor: "FullCycle", curso: "Autenticacao e Keycloak" },
  { autor: "FullCycle", curso: "API Gateway" },
  { autor: "Eduardo Pires", curso: "XUnit" },
];

export const Formacoes = () => {
  return (
    <section className="animate-fade-in-up px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
            Formacoes & Certificacoes
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
          <p className="mt-4 text-gray-400">
            Aprendizado continuo e desenvolvimento profissional
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cursos.map((c, index) => (
            <Card key={index} autor={c.autor} curso={c.curso} />
          ))}
        </div>
      </div>
    </section>
  );
};
