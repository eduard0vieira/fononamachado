"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { WHATSAPP_AGENDAMENTO_URL } from "@/lib/constants";
import Logo from "@/components/ui/Logo";
import type { NavLink } from "@/types";

const NAV_LINKS: NavLink[] = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Áreas", href: "/#areas" },
  { label: "Planos", href: "/#planos" },
  { label: "Contato", href: "/#localizacao" },
  { label: "Termos", href: "/termo" },
  {
    label: "Agendar",
    href: WHATSAPP_AGENDAMENTO_URL,
    isExternal: true,
    isCta: true,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      document.body.classList.toggle("menu-open", !prev);
      return !prev;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[72px]",
        "bg-cream/92 backdrop-blur-xl border-b border-forest/10 transition-all duration-300",
        scrolled && "shadow-[0_4px_24px_rgba(0,0,0,0.08)]",
      )}
      aria-label="Navegação principal"
    >
      {/*
        Mesmo grid / padding da HeroSection (max-w-6xl + px-6 sm:px-10 lg:px-14).
        Logo dentro da mesma caixa do texto (max-w-[28rem] md:ml-auto lg:pr-4)
        para alinhar a borda esquerda com o título e o parágrafo.
      */}
      <div
        className={cn(
          "mx-auto flex h-full max-w-6xl items-center justify-between gap-4",
          "px-6 sm:px-10 lg:px-14",
          "md:grid md:grid-cols-2 md:items-center md:gap-12 lg:gap-16",
        )}
      >
        <div className="flex min-w-0 flex-1 items-center md:contents">
          <div className="mx-auto w-full max-w-[28rem] md:col-start-1 md:mx-0 md:ml-auto md:mr-0 lg:max-w-[30rem] lg:pr-4">
            <Logo
              height={54}
              priority
              alt="Logo Nathália Machado Fonoaudióloga"
            />
          </div>
        </div>

        {/* Desktop links */}
        <ul className="hidden list-none items-center justify-end gap-1 md:col-start-2 md:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className={cn(
                "text-[0.8rem] font-medium tracking-wide px-3.5 py-2 rounded-pill transition-all duration-200",
                link.isCta
                  ? "bg-forest text-white hover:bg-forest-light ml-2"
                  : "text-ink-muted hover:text-forest hover:bg-sage-pale",
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
        </ul>

        {/* Hamburger */}
        <button
          className="relative z-[200] flex shrink-0 flex-col gap-[5px] p-2.5 md:hidden"
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "block h-0.5 w-6 rounded-sm bg-ink transition-transform duration-300",
              menuOpen && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 rounded-sm bg-ink transition-opacity duration-300",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 rounded-sm bg-ink transition-transform duration-300",
              menuOpen && "-translate-y-[7px] -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Mobile overlay — fora do max-w-6xl para cobrir a viewport inteira */}
      <ul
        className={cn(
          "fixed inset-0 z-[150] flex list-none flex-col items-center justify-center gap-2 bg-cream",
          "transition-all duration-300",
          menuOpen
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              onClick={closeMenu}
              className={cn(
                "block rounded-pill px-6 py-3 text-[1.1rem] font-medium tracking-wide transition-all duration-200",
                link.isCta
                  ? "mt-2 bg-forest text-white hover:bg-forest-light"
                  : "text-ink hover:bg-sage-pale hover:text-forest",
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
