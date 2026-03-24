import Image from "next/image";
import Button from "@/components/ui/Button";
import {
  WHATSAPP_AGENDAMENTO_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const WhatsAppIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.564 4.143 1.549 5.875L.057 23.716a.5.5 0 0 0 .618.618l5.857-1.538A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.955 9.955 0 0 1-5.192-1.456l-.368-.22-3.848 1.012.98-3.784-.237-.384A9.956 9.956 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

/** Badge estilo referência: borda fina, fundo translúcido, tipografia pequena em caixa alta */
function HeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "animate-fade-up animation-delay-100 inline-flex w-fit items-center rounded-pill",
        "border border-stone-300/80 bg-white/70 px-4 py-2 backdrop-blur-sm",
        "text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink-muted",
      )}
    >
      {children}
    </span>
  );
}

/** Retrato circular com sombra suave (elevado do fundo) */
function HeroPortrait() {
  return (
    <div className="relative mx-auto flex w-full max-w-[min(92vw,460px)] justify-center md:mx-0 md:max-w-none md:justify-end">
      <div
        className={cn(
          "relative aspect-square w-[min(88vw,320px)] sm:w-[min(80vw,380px)] lg:w-[min(42vw,440px)]",
          "overflow-hidden rounded-full bg-cream-alt",
          "shadow-[0_28px_64px_-18px_rgba(38,77,59,0.28),0_12px_24px_-12px_rgba(0,0,0,0.08)]",
          "ring-1 ring-stone-900/[0.06]",
        )}
      >
        <Image
          src="/images/nathalia.png"
          alt="Nathália Machado Fonoaudióloga"
          fill
          className="object-cover object-[center_12%] scale-[1.08] sm:scale-105"
          priority
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 440px"
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Apresentação"
      className={cn(
        "relative flex min-h-[calc(100dvh-72px)] items-center bg-cream-warm",
        "mt-[72px] px-6 sm:px-10 lg:px-14",
      )}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 py-14 md:grid-cols-2 md:gap-16 lg:gap-20 lg:py-20">
        {/* Coluna texto — alinhada à esquerda, conteúdo verticalmente centrado */}
        <div className="order-2 flex flex-col justify-center md:order-1">
          <HeroBadge>Fonoaudióloga · CRFa 2-23700</HeroBadge>

          <h1
            className={cn(
              "animate-fade-up animation-delay-200 mt-8 font-serif text-[clamp(2.75rem,6vw,4.25rem)] font-light leading-[1.02] tracking-tight text-ink",
            )}
          >
            Nathália
            <br />
            <em className="not-italic text-forest">Machado</em>
          </h1>

          <p
            className={cn(
              "animate-fade-up animation-delay-300 mt-8 max-w-[28rem] text-[1.05rem] font-light leading-[1.82] text-ink-soft/90",
            )}
          >
            Atendimento humanizado em Linguagem Adulto e Infantil, Motricidade
            Orofacial e Disfagia, guiado pelo cuidado, escuta e respeito às
            necessidades de cada pessoa.
          </p>

          <p className="animate-fade-up animation-delay-400 mt-5 text-sm font-normal tracking-wide text-ink-muted/85">
            São Miguel Arcanjo — SP
          </p>

          <div className="animate-fade-up animation-delay-500 mt-10 flex flex-wrap gap-3">
            <Button
              as="link"
              variant="primary"
              href={WHATSAPP_AGENDAMENTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar pelo WhatsApp"
              className="rounded-xl px-7 py-3.5 shadow-md shadow-emerald-600/20"
            >
              <WhatsAppIcon />
              WhatsApp
            </Button>

            <Button
              as="link"
              variant="secondary"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "rounded-xl border-stone-300/90 bg-white px-7 py-3.5 text-ink-soft",
                "shadow-sm hover:border-stone-400 hover:bg-stone-50/90",
              )}
            >
              <InstagramIcon />
              {INSTAGRAM_HANDLE}
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}
