export const Card = ({ autor, curso, icon }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-surface-light/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />

      <div className="relative">
        {icon && <div className="mb-3 text-2xl">{icon}</div>}
        <p className="mb-1 text-xs font-medium tracking-wider uppercase text-primary-light/70">
          {autor}
        </p>
        <h3 className="text-sm font-semibold leading-snug text-white">
          {curso}
        </h3>
      </div>
    </div>
  );
};
