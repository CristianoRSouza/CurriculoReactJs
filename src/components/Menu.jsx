import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
      isActive
        ? "text-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-0.5 after:bg-primary after:rounded-full"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="text-lg font-bold tracking-tight text-white transition-colors hover:text-primary-light"
        >
          &lt;Cristiano /&gt;
        </NavLink>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          <NavLink to="/experiencia" className={linkClasses} end>
            Experiencias
          </NavLink>
          <NavLink to="/formacoes" className={linkClasses}>
            Formacoes
          </NavLink>
          <NavLink to="/sobre" className={linkClasses}>
            Sobre
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-surface/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <NavLink
            to="/experiencia"
            className={({ isActive }) =>
              `text-2xl font-semibold transition-colors ${
                isActive ? "text-primary-light" : "text-gray-300 hover:text-white"
              }`
            }
            onClick={() => setIsOpen(false)}
            end
          >
            Experiencias
          </NavLink>
          <NavLink
            to="/formacoes"
            className={({ isActive }) =>
              `text-2xl font-semibold transition-colors ${
                isActive ? "text-primary-light" : "text-gray-300 hover:text-white"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Formacoes
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `text-2xl font-semibold transition-colors ${
                isActive ? "text-primary-light" : "text-gray-300 hover:text-white"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Sobre
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
