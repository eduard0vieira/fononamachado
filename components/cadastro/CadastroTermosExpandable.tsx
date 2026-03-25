"use client";

import { useState } from "react";
import { TermoSectionsBody } from "@/components/termo/TermoSections";
import { cn } from "@/lib/utils";

export default function CadastroTermosExpandable() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6 overflow-hidden rounded-xl border border-forest/10 bg-cream/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={cn(
          "flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors",
          "hover:bg-white/60",
          open && "border-b border-forest/10 bg-white/50",
        )}
      >
        <div>
          <p className="font-serif text-[0.95rem] font-medium text-forest">
            Ler termos de atendimento completos
          </p>
          <p className="mt-0.5 text-[0.75rem] font-light text-ink-muted">
            16 cláusulas — você pode ler aqui sem sair da página
          </p>
        </div>
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-forest/15 bg-white text-forest transition-transform duration-300",
            open && "rotate-180",
          )}
          aria-hidden
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className="max-h-[min(55vh,28rem)] overflow-y-auto overscroll-contain border-t border-forest/5 bg-white/90 px-4 py-5 sm:px-6 sm:py-6"
            aria-hidden={!open}
          >
            <div className="[&_.scroll-mt-28]:scroll-mt-4">
              <TermoSectionsBody />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
