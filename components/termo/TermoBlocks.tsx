import { cn } from "@/lib/utils";

/** Bloco numerado — alinhado ao visual das seções do site (serif + honey + sage) */
export function TermoSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="scroll-mt-28 border-b border-forest/8 pb-12 pt-2 last:border-b-0 last:pb-0"
      aria-labelledby={`termo-sec-${number}`}
    >
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-5">
        <span className="font-serif text-3xl font-light italic text-honey tabular-nums">
          {number}
        </span>
        <div className="min-w-0 flex-1">
          <h2
            id={`termo-sec-${number}`}
            className="font-serif text-[clamp(1.35rem,3.5vw,1.65rem)] font-medium tracking-wide text-forest"
          >
            {title}
          </h2>
          <div
            className="mt-3 h-px max-w-[12rem] bg-gradient-to-r from-honey/70 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="space-y-4 text-[0.9375rem] leading-[1.85] text-ink-muted [&_strong]:font-medium [&_strong]:text-ink-soft">
        {children}
      </div>
    </section>
  );
}

export function TermoAlert({ children }: { children: React.ReactNode }) {
  return (
    <aside
      className={cn(
        "my-5 rounded-2xl border border-honey/25 bg-honey-pale/80 px-5 py-4",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]",
      )}
    >
      <p className="text-[0.9rem] leading-[1.8] text-ink-soft">{children}</p>
    </aside>
  );
}

export function TermoHighlightCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-forest/10 bg-white px-5 py-4 shadow-card",
        "transition-shadow duration-200 hover:shadow-md",
      )}
    >
      <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-honey">
        {label}
      </p>
      <div className="text-[0.9rem] leading-[1.75] text-ink-muted">{children}</div>
    </div>
  );
}

/** Separador leve entre cláusulas (substitui o ✦) */
export function TermoSpacer() {
  return (
    <div
      className="my-10 flex justify-center"
      aria-hidden="true"
    >
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-sage/40 to-transparent" />
    </div>
  );
}

export function TermoList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="my-3 list-none space-y-2.5">
      {items.map((item, i) => (
        <li
          key={i}
          className={cn(
            "relative pl-6 text-[0.9375rem] leading-[1.85] text-ink-muted",
            "before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full",
            "before:border before:border-honey/70 before:bg-honey/15",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
