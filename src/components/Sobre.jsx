const habilidades = {
  "Linguagens": ["C#", "JavaScript", "TypeScript", "Python"],
  "Backend": ["ASP.NET Core", "NestJS", "Django", "Flask", "Node.js"],
  "Frontend": ["ReactJs", "React Native", "Vue.js", "HTML/CSS"],
  "ORM & Dados": ["Entity Framework", "Prisma", "TypeORM", "Dapper"],
  "Banco de Dados": ["SQL Server", "PostgreSQL", "MySQL"],
  "DevOps & Ferramentas": ["Docker", "RabbitMQ", "Keycloak", "Git"],
  "Testes": ["XUnit", "Testes Unitarios", "Testes de Integracao"],
  "Automacao": ["RPA", "Python", "PyAutoGui"],
};

export const Sobre = () => {
  return (
    <section className="animate-fade-in-up px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
            Sobre Mim
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>

        {/* Bio card */}
        <div className="mb-12 rounded-xl border border-white/5 bg-surface-light/50 p-6 backdrop-blur-sm md:p-8">
          <p className="mb-4 text-base leading-relaxed text-gray-300">
            Profissional com <span className="font-semibold text-white">5 anos de experiencia</span> em TI e
            Desenvolvimento de Software, com formacao academica em{" "}
            <span className="font-semibold text-white">Analise e Desenvolvimento de Sistemas</span>.
            Atuo em todo o ciclo de desenvolvimento de softwares e aplicacoes web, desde a arquitetura
            ate a entrega em producao.
          </p>
          <p className="mb-4 text-base leading-relaxed text-gray-300">
            Experiencia solida com autenticacao e autorizacao, migracoes de banco de dados,
            otimizacao de consultas e processamento, testes unitarios com XUnit,
            manutencao de codigo legado e documentacao de processos. Aplico boas praticas
            de programacao e metodologias ageis no dia a dia.
          </p>
          <div className="flex items-center gap-3 rounded-lg bg-accent/5 p-4 ring-1 ring-accent/10">
            <span className="text-2xl">🤖</span>
            <p className="text-sm leading-relaxed text-gray-300">
              Apaixonado pelo mundo de <span className="font-semibold text-accent-light">RPA</span>,
              usando Python e PyAutoGui. Experiencia tambem com{" "}
              <span className="font-semibold text-accent-light">React Native</span> e
              dominio completo do <span className="font-semibold text-accent-light">ReactJs</span>.
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(habilidades).map(([categoria, skills]) => (
            <div
              key={categoria}
              className="group rounded-xl border border-white/5 bg-surface-light/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/20"
            >
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary-light">
                {categoria}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-surface-lighter/50 px-2.5 py-1 text-xs font-medium text-gray-300 transition-colors hover:bg-primary/10 hover:text-primary-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
