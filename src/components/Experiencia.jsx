const experiencias = [
  {
    empresa: "CNH Industrial - Case IH",
    cargo: "Desenvolvedor Full Stack",
    periodo: "Mai 2025 - Presente",
    atual: true,
    descricao:
      "Desenvolvimento de projeto do zero utilizando arquitetura de microsserviços e microfrontends. Construção completa do frontend com ReactJs e backend com ASP.NET Core API. Implementação de autenticação e autorização com Keycloak, mensageria assíncrona com RabbitMQ, API Gateway com Kong e containerização com Docker. Responsável por toda a arquitetura e desenvolvimento tanto do front-end quanto do back-end da aplicação.",
    tags: ["ReactJs", "ASP.NET Core", "Keycloak", "Docker", "RabbitMQ", "Kong", "Microsserviços"],
  },
  {
    empresa: "Faster Soluções em Tecnologias",
    cargo: "Desenvolvedor Web",
    periodo: "Abr 2024 - Mai 2025",
    descricao:
      "Desenvolvimento e manutenção de aplicações web com ASP.NET Core, criando APIs RESTful e serviços backend robustos. Implementação de soluções modulares baseadas em arquitetura de microsserviços com RabbitMQ para comunicação assíncrona. Utilização de Entity Framework com consultas otimizadas e padrões de repositório. Integração com Keycloak (OpenID Connect e OAuth2) para autenticação e autorização. Ambientes containerizados com Docker e aplicação de princípios SOLID com testes automatizados.",
    tags: ["ASP.NET Core", "RabbitMQ", "Docker", "Keycloak", "Entity Framework", "SOLID"],
  },
  {
    empresa: "Conduent",
    cargo: "Desenvolvedor de Software",
    periodo: "Dez 2022 - 2024",
    descricao:
      "Desenvolvimento de soluções em C# e AspNetCore 2.2 com Fluent API e Fluent Validation. Refatoração de procedures e camadas do projeto. Integração de aplicações com Dapper e Entity Framework. Migração de projetos para NestJS com TypeScript e Prisma. Implementação de front-end com Vue.js e Bootstrap Vue.",
    tags: ["C#", "NestJS", "Vue.js", "Prisma", "Dapper"],
  },
  {
    empresa: "Grupo Apisul",
    cargo: "Desenvolvedor de Software",
    periodo: "Out 2020 - Nov 2021",
    descricao:
      "Desenvolvimento e sustentação de aplicações em WebForms, ASP.NET MVC e AspNetCore. Gestão de banco de dados SQL Server incluindo modelagem e otimização de performance. Implementação de soluções com Dapper e Entity Framework. Testes de unidade e integração para validação de funcionalidades.",
    tags: ["ASP.NET MVC", "SQL Server", "Entity Framework", "WebForms"],
  },
  {
    empresa: "Grupo Services",
    cargo: "Desenvolvedor Junior",
    periodo: "Out 2020 - Nov 2021",
    descricao:
      "Desenvolvimento de aplicações em Node.js com novas funcionalidades. Configuração e suporte a CRM. Integração de APIs e implementação de disparos de SMS. Testes unitários e de integração, revisão e otimização de código com a equipe.",
    tags: ["Node.js", "APIs REST", "Git", "CRM"],
  },
  {
    empresa: "NHG",
    cargo: "Desenvolvedor de Software",
    periodo: "Dez 2022 - 2024",
    descricao:
      "Desenvolvimento de features e correção de bugs em sistemas de rastreamento de carga e controle de risco. Testes de unidade, desenvolvimento web com .NET, SQL Server, ReactJs. Criação e manutenção de serviços Windows para automação de processos.",
    tags: [".NET", "SQL Server", "ReactJs", "Windows Services"],
  },
];

export const Experiencia = () => {
  return (
    <section className="animate-fade-in-up px-6 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
            Experiencia Profissional
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-8 md:block" />

          <div className="space-y-8">
            {experiencias.map((exp, index) => (
              <div
                key={index}
                className="group relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-surface transition-all duration-300 group-hover:scale-125 group-hover:border-accent md:left-8 md:block">
                  {exp.atual && (
                    <div className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
                  )}
                </div>

                {/* Card */}
                <div className="rounded-xl border border-white/5 bg-surface-light/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {exp.empresa}
                      </h3>
                      <p className="text-sm font-medium text-primary-light">
                        {exp.cargo}
                      </p>
                    </div>
                    <span
                      className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium ${
                        exp.atual
                          ? "bg-green-500/10 text-green-400 ring-1 ring-green-500/20"
                          : "bg-surface-lighter/50 text-gray-400"
                      }`}
                    >
                      {exp.periodo}
                    </span>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-gray-400">
                    {exp.descricao}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary-light transition-colors hover:bg-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
