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
  { label: "Contato", href: "/#localizacao" },
  { label: "Termos", href: "/termo" },
  {
    label: "Agendar",
    href: WHATSAPP_AGENDAMENTO_URL,
    isExternal: true,
    isCta: true,
  },
];

const MENU_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const MENU_MS = 320;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      document.body.classList.toggle("menu-open", next);
      return next;
    });
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 w-full overflow-visible",
        menuOpen ? "z-[200]" : "z-50",
      )}
      aria-label="Navegação principal"
    >
      <div
        className={cn(
          "relative z-30 flex h-[72px] w-full items-center border-b border-forest/10 bg-cream/92 backdrop-blur-xl transition-shadow duration-300",
          scrolled && "shadow-[0_4px_24px_rgba(0,0,0,0.08)]",
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-4",
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

          <ul className="hidden list-none items-center justify-end gap-1 md:col-start-2 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className={cn(
                    "rounded-pill px-3.5 py-2 text-[0.8rem] font-medium tracking-wide transition-all duration-200",
                    link.isCta
                      ? "ml-2 bg-forest text-white hover:bg-forest-light"
                      : "text-ink-muted hover:bg-sage-pale hover:text-forest",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="relative z-30 flex shrink-0 flex-col gap-[5px] p-2.5 md:hidden"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
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
      </div>

      {/* Fundo suave: fecha ao tocar fora + anima opacidade (abre e fecha) */}
      <button
        type="button"
        tabIndex={menuOpen ? 0 : -1}
        aria-label="Fechar menu"
        className={cn(
          "fixed inset-0 z-10 bg-forest/25 transition-[opacity,backdrop-filter] md:hidden",
          "motion-reduce:transition-none",
          menuOpen
            ? "pointer-events-auto opacity-100 backdrop-blur-[2px]"
            : "pointer-events-none opacity-0 backdrop-blur-none",
        )}
        style={{
          transitionDuration: `${MENU_MS}ms`,
          transitionTimingFunction: MENU_EASE,
        }}
        onClick={closeMenu}
      />

      {/* Dropdown compacto — só a altura dos links; sem `invisible` para não cortar a animação de saída */}
      <ul
        id="mobile-nav-menu"
        aria-hidden={!menuOpen}
        className={cn(
          "fixed left-1/2 top-[calc(72px+10px)] z-20 w-[min(20rem,calc(100vw-2rem))] max-h-[min(72vh,calc(100dvh-100px))] overflow-y-auto rounded-2xl md:hidden",
          "list-none border border-forest/10 bg-cream/98 py-2 px-2 shadow-[0_16px_48px_-12px_rgba(94,114,82,0.22)] backdrop-blur-md",
          "origin-top transition-[opacity,transform] motion-reduce:transition-none",
          menuOpen
            ? "pointer-events-auto -translate-x-1/2 translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-x-1/2 -translate-y-2 scale-[0.96] opacity-0",
        )}
        style={{
          transitionDuration: `${MENU_MS}ms`,
          transitionTimingFunction: MENU_EASE,
        }}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className={cn(
                "block rounded-xl px-4 py-3 text-center text-[0.94rem] font-medium tracking-wide transition-colors duration-200",
                link.isCta
                  ? "mx-1 mt-1 bg-forest text-white hover:bg-forest-light"
                  : "text-ink hover:bg-sage-pale/90 hover:text-forest",
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
