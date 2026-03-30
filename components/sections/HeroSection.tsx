"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Button from "@/components/ui/Button";
import {
  WHATSAPP_AGENDAMENTO_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/lib/constants";
import { siteEdgePadding, siteMaxWidthInner } from "@/lib/siteLayout";
import { DURATION, EASE_OUT } from "@/lib/motion";
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

const heroTextContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const heroTextItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.hero, ease: EASE_OUT },
  },
};

/** Fundo suave: orbes verdes que respiram + ondas organicas na base */
function HeroAmbientBackdrop({ reduceMotion }: { reduceMotion: boolean }) {
  const wavePaths1 = [
    "M0,140 C180,100 360,160 540,120 C720,80 900,170 1080,130 C1200,110 1360,150 1440,125 L1440,220 L0,220 Z",
    "M0,120 C180,160 360,100 540,150 C720,170 900,90 1080,140 C1200,155 1360,110 1440,140 L1440,220 L0,220 Z",
    "M0,140 C180,100 360,160 540,120 C720,80 900,170 1080,130 C1200,110 1360,150 1440,125 L1440,220 L0,220 Z",
  ];
  const wavePaths2 = [
    "M0,165 C240,135 480,185 720,155 C960,125 1200,180 1440,150 L1440,220 L0,220 Z",
    "M0,155 C240,180 480,140 720,170 C960,190 1200,140 1440,165 L1440,220 L0,220 Z",
    "M0,165 C240,135 480,185 720,155 C960,125 1200,180 1440,150 L1440,220 L0,220 Z",
  ];
  const wavePaths3 = [
    "M0,185 C360,170 720,200 1080,175 C1260,165 1380,190 1440,180 L1440,220 L0,220 Z",
    "M0,180 C360,195 720,170 1080,190 C1260,200 1380,175 1440,185 L1440,220 L0,220 Z",
    "M0,185 C360,170 720,200 1080,175 C1260,165 1380,190 1440,180 L1440,220 L0,220 Z",
  ];

  if (reduceMotion) {
    return (
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Orbes verdes estáticos */}
        <div className="absolute -right-[14%] top-[4%] h-[min(55vw,440px)] w-[min(55vw,440px)] rounded-full bg-sage-light/[0.10] blur-[100px]" />
        <div className="absolute -left-[12%] bottom-[6%] h-[min(48vw,400px)] w-[min(48vw,400px)] rounded-full bg-sage/[0.12] blur-[100px]" />
        <div className="absolute left-[30%] top-[35%] h-[min(36vw,300px)] w-[min(36vw,300px)] rounded-full bg-forest/[0.07] blur-[100px]" />

        {/* Ondas estáticas */}
        <div className="absolute -bottom-px left-0 right-0 h-[160px] sm:h-[200px]">
          <svg viewBox="0 0 1440 220" fill="none" className="absolute bottom-0 h-full w-full" preserveAspectRatio="none">
            <path d={wavePaths1[0]} fill="rgba(138,158,126,0.05)" />
            <path d={wavePaths2[0]} fill="rgba(94,114,82,0.04)" />
            <path d={wavePaths3[0]} fill="rgba(184,201,175,0.06)" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.3 }}
    >
      {/* Orbe 1 — sage-light, canto superior direito */}
      <motion.div
        className="absolute -right-[14%] top-[4%] h-[min(55vw,440px)] w-[min(55vw,440px)] rounded-full bg-gradient-to-bl from-sage-light/[0.14] via-sage/[0.06] to-transparent blur-[100px]"
        animate={{
          opacity: [0.65, 0.9, 0.7, 0.85, 0.65],
          scale: [1, 1.05, 0.98, 1.03, 1],
          x: [0, 14, -6, 10, 0],
          y: [0, -10, 8, -4, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbe 2 — sage, canto inferior esquerdo */}
      <motion.div
        className="absolute -left-[12%] bottom-[6%] h-[min(48vw,400px)] w-[min(48vw,400px)] rounded-full bg-gradient-to-tr from-sage/[0.16] via-sage-light/[0.06] to-transparent blur-[100px]"
        animate={{
          opacity: [0.55, 0.82, 0.6, 0.78, 0.55],
          scale: [1, 1.04, 0.97, 1.02, 1],
          x: [0, -10, 8, -5, 0],
          y: [0, 12, -6, 4, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Orbe 3 — forest, centro-esquerda */}
      <motion.div
        className="absolute left-[30%] top-[35%] h-[min(36vw,300px)] w-[min(36vw,300px)] rounded-full bg-forest/[0.09] blur-[100px]"
        animate={{
          opacity: [0.4, 0.65, 0.45, 0.6, 0.4],
          scale: [1, 1.08, 1.01, 1.06, 1],
          x: [0, -16, 10, -8, 0],
          y: [0, 14, -8, 6, 0],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      {/* Orbe 4 — sage-light, inferior direito (menor) */}
      <motion.div
        className="absolute -right-[6%] bottom-[24%] h-[min(26vw,220px)] w-[min(26vw,220px)] rounded-full bg-sage-light/[0.12] blur-[80px]"
        animate={{
          opacity: [0.5, 0.75, 0.52, 0.7, 0.5],
          x: [0, -14, 8, 0],
          y: [0, 10, -6, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Ondas animadas na base — 3 camadas, todas em tons de verde */}
      <div className="absolute -bottom-px left-0 right-0 h-[160px] sm:h-[200px]">
        <svg
          viewBox="0 0 1440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="rgba(138,158,126,0.05)"
            animate={{ d: wavePaths1 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            fill="rgba(94,114,82,0.04)"
            animate={{ d: wavePaths2 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.path
            fill="rgba(184,201,175,0.06)"
            animate={{ d: wavePaths3 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
}

function HeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-pill",
        "border border-stone-300/80 bg-white/70 px-4 py-2 backdrop-blur-sm",
        "text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink-muted",
      )}
    >
      {children}
    </span>
  );
}

function HeroPortrait({ reduceMotion }: { reduceMotion: boolean }) {
  const inner = (
    <div
      className={cn(
        "rounded-[1.875rem] bg-gradient-to-b from-sage-light/45 via-sage-pale/80 to-forest-light/30 p-2 sm:rounded-[2.375rem] sm:p-2.5 lg:rounded-[2.5rem]",
        "shadow-[0_26px_60px_-18px_rgba(94,114,82,0.32),0_12px_32px_-14px_rgba(62,82,52,0.2),0_4px_14px_-6px_rgba(94,114,82,0.12)]",
      )}
    >
      <div
        className={cn(
          "relative aspect-square w-[min(78vw,280px)] sm:w-[min(80vw,380px)] lg:w-[min(42vw,440px)]",
          "overflow-hidden rounded-[1.375rem] bg-[#8FAA8A] sm:rounded-[1.875rem] lg:rounded-[2rem]",
          "backface-hidden [transform:translateZ(0)]",
        )}
      >
        <Image
          src="/images/nathalia.png"
          alt="Nathália Machado Fonoaudióloga"
          fill
          className={cn(
            "border-0 object-cover object-[center_12%] outline-none ring-0",
            "scale-[1.14] sm:scale-[1.1]",
          )}
          priority
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 440px"
        />
      </div>
    </div>
  );

  if (reduceMotion) {
    return (
      <div className="relative mx-auto flex w-full max-w-[min(92vw,460px)] justify-center md:mx-0 md:max-w-none md:justify-end">
        {inner}
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex w-full max-w-[min(92vw,460px)] justify-center md:mx-0 md:max-w-none md:justify-end">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.15,
          ease: EASE_OUT,
          delay: 0.5,
        }}
      >
        {inner}
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="home"
      aria-label="Apresentação"
      className={cn(
        "relative flex min-h-[calc(100dvh-72px)] bg-cream-warm",
        "max-md:items-start md:items-center",
        "overflow-x-hidden",
        "pt-[72px]",
        siteEdgePadding,
      )}
    >
      <HeroAmbientBackdrop reduceMotion={reduceMotion} />

      <div
        className={cn(
          siteMaxWidthInner,
          "relative grid w-full grid-cols-1 gap-8 py-10 max-md:pb-[max(7.5rem,env(safe-area-inset-bottom,0px)+5.5rem)] md:grid-cols-2 md:items-center md:gap-12 md:py-14 lg:gap-16 lg:py-20",
        )}
      >
        <div className="order-2 flex w-full flex-col justify-center md:order-1">
          <div className="mx-auto w-full max-w-[28rem] md:mx-0 md:ml-auto md:mr-0 lg:max-w-[30rem] lg:pr-4">
            {reduceMotion ? (
              <>
                <HeroBadge>Fonoaudióloga · CRFa 2-23700</HeroBadge>
                <h1
                  className={cn(
                    "mt-8 font-serif text-[clamp(2.75rem,6vw,4.25rem)] font-light leading-[1.02] tracking-tight text-ink",
                  )}
                >
                  Nathália
                  <br />
                  <em className="not-italic text-forest">Machado</em>
                </h1>
                <p className="mt-8 text-[1.05rem] font-light leading-[1.82] text-ink-soft/90">
                  Atendimento humanizado em Linguagem Adulto e Infantil,
                  Motricidade Orofacial e Disfagia, guiado pelo cuidado, escuta
                  e respeito às necessidades de cada pessoa.
                </p>
                <p className="mt-5 text-sm font-normal tracking-wide text-ink-muted/85">
                  São Miguel Arcanjo — SP
                </p>
                <div className="mt-10 flex flex-row flex-nowrap gap-2 sm:gap-3">
                  <Button
                    as="link"
                    variant="softOutlineWhatsapp"
                    href={WHATSAPP_AGENDAMENTO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Agendar pelo WhatsApp"
                    className="min-w-0 flex-1 basis-0 justify-center rounded-xl px-3 py-3 text-xs sm:px-7 sm:py-3.5 sm:text-sm"
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </Button>
                  <Button
                    as="link"
                    variant="softOutlineInstagram"
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 flex-1 basis-0 justify-center rounded-xl px-3 py-3 text-xs sm:px-7 sm:py-3.5 sm:text-sm"
                  >
                    <InstagramIcon />
                    <span className="min-w-0 truncate">{INSTAGRAM_HANDLE}</span>
                  </Button>
                </div>
              </>
            ) : (
              <motion.div
                variants={heroTextContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={heroTextItem}>
                  <HeroBadge>Fonoaudióloga · CRFa 2-23700</HeroBadge>
                </motion.div>
                <motion.h1
                  variants={heroTextItem}
                  className="mt-8 font-serif text-[clamp(2.75rem,6vw,4.25rem)] font-light leading-[1.02] tracking-tight text-ink"
                >
                  Nathália
                  <br />
                  <em className="not-italic text-forest">Machado</em>
                </motion.h1>
                <motion.p
                  variants={heroTextItem}
                  className="mt-8 text-[1.05rem] font-light leading-[1.82] text-ink-soft/90"
                >
                  Atendimento humanizado em Linguagem Adulto e Infantil,
                  Motricidade Orofacial e Disfagia, guiado pelo cuidado, escuta
                  e respeito às necessidades de cada pessoa.
                </motion.p>
                <motion.p
                  variants={heroTextItem}
                  className="mt-5 text-sm font-normal tracking-wide text-ink-muted/85"
                >
                  São Miguel Arcanjo — SP
                </motion.p>
                <motion.div
                  variants={heroTextItem}
                  className="mt-10 flex flex-row flex-nowrap gap-2 sm:gap-3"
                >
                  <Button
                    as="link"
                    variant="softOutlineWhatsapp"
                    href={WHATSAPP_AGENDAMENTO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Agendar pelo WhatsApp"
                    className="min-w-0 flex-1 basis-0 justify-center rounded-xl px-3 py-3 text-xs sm:px-7 sm:py-3.5 sm:text-sm"
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </Button>
                  <Button
                    as="link"
                    variant="softOutlineInstagram"
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 flex-1 basis-0 justify-center rounded-xl px-3 py-3 text-xs sm:px-7 sm:py-3.5 sm:text-sm"
                  >
                    <InstagramIcon />
                    <span className="min-w-0 truncate">{INSTAGRAM_HANDLE}</span>
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <HeroPortrait reduceMotion={reduceMotion} />
        </div>
      </div>
    </section>
  );
}
