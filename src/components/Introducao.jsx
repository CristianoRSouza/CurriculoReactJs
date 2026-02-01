import LogoC from "../assets/logo.png";
import LogoR from "../assets/react.svg";
import LogoPy from "../assets/python.svg";

export const Introducao = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-32">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Greeting */}
        <p className="animate-fade-in-up mb-4 text-sm font-medium tracking-widest uppercase text-primary-light">
          Bem-vindo ao meu portfolio
        </p>

        {/* Main heading */}
        <h1 className="animate-fade-in-up delay-100 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          Desenvolvedor{" "}
          <span className="animate-gradient bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">
            Full Stack
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200 mx-auto mb-12 max-w-2xl text-lg text-gray-400 md:text-xl">
          Construindo soluções robustas com C#, .NET, React e Python.
          Arquitetura de microsserviços, APIs RESTful e aplicações web modernas.
        </p>

        {/* Tech logos */}
        <div className="animate-fade-in-up delay-300 flex items-center justify-center gap-8 md:gap-12">
          <div className="group flex flex-col items-center gap-2">
            <div className="rounded-2xl border border-white/5 bg-surface-light/50 p-4 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-purple-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/10">
              <img
                src={LogoC}
                alt="C#"
                className="h-10 w-10 object-contain transition-transform duration-300 md:h-14 md:w-14"
              />
            </div>
            <span className="text-xs font-medium text-gray-500 transition-colors group-hover:text-gray-300">
              C#
            </span>
          </div>

          <div className="group flex flex-col items-center gap-2">
            <div className="rounded-2xl border border-white/5 bg-surface-light/50 p-4 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
              <img
                src={LogoR}
                alt="React"
                className="animate-spin-slow h-10 w-10 object-contain md:h-14 md:w-14"
              />
            </div>
            <span className="text-xs font-medium text-gray-500 transition-colors group-hover:text-gray-300">
              React
            </span>
          </div>

          <div className="group flex flex-col items-center gap-2">
            <div className="rounded-2xl border border-white/5 bg-surface-light/50 p-4 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-yellow-500/30 group-hover:shadow-lg group-hover:shadow-yellow-500/10">
              <img
                src={LogoPy}
                alt="Python"
                className="h-10 w-10 object-contain transition-transform duration-300 md:h-14 md:w-14"
              />
            </div>
            <span className="text-xs font-medium text-gray-500 transition-colors group-hover:text-gray-300">
              Python
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
