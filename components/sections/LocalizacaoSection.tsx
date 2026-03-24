import SiteContainer from "@/components/layout/SiteContainer";
import { Reveal, StaggerItem, StaggerList } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import { siteEdgePadding } from "@/lib/siteLayout";
import { cn } from "@/lib/utils";
import type { ContatoIconKind, ContatoItem } from "@/types";
import {
  WHATSAPP_AGENDAMENTO_URL,
  WHATSAPP_URL,
  MAPS_URL,
  MAPS_EMBED_SRC,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  EMAIL,
  PHONE_DISPLAY,
} from "@/lib/constants";

const CONTATOS: ContatoItem[] = [
  {
    kind: "map",
    label: "R. Miguel Terra, 385 — Centro\nSão Miguel Arcanjo — SP",
    href: MAPS_URL,
    isExternal: true,
  },
  {
    kind: "phone",
    label: PHONE_DISPLAY,
    href: WHATSAPP_URL,
    isExternal: true,
  },
  {
    kind: "instagram",
    label: INSTAGRAM_HANDLE,
    href: INSTAGRAM_URL,
    isExternal: true,
  },
  {
    kind: "mail",
    label: EMAIL,
    href: `mailto:${EMAIL}`,
  },
];

const iconStroke = "stroke-[1.5]";

function ContatoIcon({
  kind,
  className,
}: {
  kind: ContatoIconKind;
  /** Sobrescreve cor (ex.: botão secundário no fundo escuro) */
  className?: string;
}) {
  const shared = cn("h-5 w-5 shrink-0 text-sage-light", iconStroke, className);
  switch (kind) {
    case "map":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={shared}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21c-4-3.2-7-6.8-7-10a7 7 0 1114 0c0 3.2-3 6.8-7 10z"
          />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      );
    case "phone":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={shared}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 4h4l2 5-2.5 1.5a11 11 0 006 6L16 14l5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={shared}
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="3.5" />
          <path strokeLinecap="round" d="M16.5 7.5h.01" />
        </svg>
      );
    case "mail":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={shared}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16v12H4V6z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 6 8-6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function LocalizacaoSection() {
  return (
    <section
      id="localizacao"
      aria-labelledby="localizacao-titulo"
      className={cn(
        "relative overflow-hidden bg-forest py-20 lg:py-28",
        siteEdgePadding,
      )}
    >
      {/* Textura suave — evita “bloco chapado” sem sair da paleta */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(138,158,126,0.12),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(201,169,110,0.06),transparent_50%)]"
        aria-hidden="true"
      />

      <SiteContainer className="relative grid grid-cols-1 items-stretch gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Info */}
        <div className="flex max-w-xl flex-col lg:max-w-none">
          <Reveal>
            <SectionLabel light>Onde estou</SectionLabel>
            <h2
              id="localizacao-titulo"
              className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.15] text-white"
            >
              Localização &amp;{" "}
              <span className="text-sage-light italic">Contato</span>
            </h2>
            <GoldRule className="bg-sage opacity-45" />
          </Reveal>

          <StaggerList
            className="mb-10 list-none space-y-2.5"
            as="ul"
            role="list"
          >
            {CONTATOS.map((item) => (
              <StaggerItem key={item.label} as="li" role="listitem">
                <a
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className={cn(
                    "group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5",
                    "transition-all duration-200",
                    "hover:border-white/[0.14] hover:bg-white/[0.07] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)]",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey-light/80",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                      "border border-white/10 bg-white/[0.06] text-sage-light",
                      "transition-colors duration-200 group-hover:border-white/18 group-hover:bg-white/[0.1]",
                    )}
                  >
                    <ContatoIcon kind={item.kind} />
                  </span>
                  <span className="min-w-0 flex-1 text-[0.9375rem] font-light leading-snug text-white/85 group-hover:text-white">
                    <span className="whitespace-pre-line">{item.label}</span>
                  </span>
                  <span
                    className="hidden shrink-0 text-white/35 transition-colors group-hover:text-honey-light sm:block"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M17 7H9M17 7v8"
                      />
                    </svg>
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerList>

          <Reveal delay={0.06}>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                as="link"
                variant="softOutlineWhatsapp"
                href={WHATSAPP_AGENDAMENTO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "min-h-[48px] rounded-pill px-7 py-3.5",
                  "border-white/20 hover:border-white/35 hover:bg-stone-300",
                )}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.564 4.143 1.549 5.875L.057 23.716a.5.5 0 0 0 .618.618l5.857-1.538A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.955 9.955 0 0 1-5.192-1.456l-.368-.22-3.848 1.012.98-3.784-.237-.384A9.956 9.956 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Agendar consulta
              </Button>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group/mapcta inline-flex min-h-[48px] items-center justify-center gap-2 rounded-pill border border-white/20 px-6 py-3",
                  "text-sm font-medium tracking-wide text-white/90",
                  "transition-all duration-200",
                  "hover:border-white/35 hover:bg-white/[0.08] hover:text-white",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey-light/80",
                )}
              >
                <ContatoIcon
                  kind="map"
                  className="text-white/65 group-hover/mapcta:text-honey-light"
                />
                <span>Como chegar</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Map — lg:items-center na grid alinha o bloco ao miolo da coluna de texto */}
        <Reveal className="min-h-0 w-full lg:self-center" delay={0.12}>
          <div className="relative min-h-[300px] w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-white/10 sm:min-h-[340px] lg:min-h-[400px] lg:max-h-[min(480px,72vh)]">
            <iframe
              title="Localização Nathália Machado Fonoaudióloga"
              src={MAPS_EMBED_SRC}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 [filter:saturate(0.78)_contrast(1.04)]"
            />
          </div>
        </Reveal>
      </SiteContainer>
    </section>
  );
}
