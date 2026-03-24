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
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[72px]",
        "bg-cream/92 backdrop-blur-xl border-b border-forest/10 transition-all duration-300",
        scrolled && "shadow-[0_4px_24px_rgba(0,0,0,0.08)]",
      )}
      aria-label="Navegação principal"
    >
      <Logo
        height={72}
        priority
        alt="Logo Nathália Machado Fonoaudióloga"
        className="flex-shrink-0"
      />

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-1 list-none">
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
        className="flex md:hidden flex-col gap-[5px] p-2.5 z-[200] relative"
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        <span
          className={cn(
            "block w-6 h-0.5 bg-ink rounded-sm transition-transform duration-300",
            menuOpen && "translate-y-[7px] rotate-45",
          )}
        />
        <span
          className={cn(
            "block w-6 h-0.5 bg-ink rounded-sm transition-opacity duration-300",
            menuOpen && "opacity-0",
          )}
        />
        <span
          className={cn(
            "block w-6 h-0.5 bg-ink rounded-sm transition-transform duration-300",
            menuOpen && "-translate-y-[7px] -rotate-45",
          )}
        />
      </button>

      {/* Mobile overlay menu */}
      <ul
        className={cn(
          "fixed inset-0 bg-cream flex flex-col items-center justify-center gap-2 list-none z-[150]",
          "transition-all duration-300",
          menuOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none",
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
                "block text-[1.1rem] font-medium tracking-wide px-6 py-3 rounded-pill transition-all duration-200",
                link.isCta
                  ? "bg-forest text-white hover:bg-forest-light mt-2"
                  : "text-ink hover:text-forest hover:bg-sage-pale",
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
