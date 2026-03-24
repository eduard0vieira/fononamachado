import Image from 'next/image'
import Button from '@/components/ui/Button'
import GoldRule from '@/components/ui/GoldRule'
import { WHATSAPP_AGENDAMENTO_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/constants'

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.564 4.143 1.549 5.875L.057 23.716a.5.5 0 0 0 .618.618l5.857-1.538A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.955 9.955 0 0 1-5.192-1.456l-.368-.22-3.848 1.012.98-3.784-.237-.384A9.956 9.956 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

export default function HeroSection() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 min-h-screen pt-[72px]"
      id="home"
      aria-label="Apresentação"
    >
      {/* Left */}
      <div className="bg-cream flex flex-col justify-center px-[8%] py-20 md:order-1 order-2">
        <span className="animate-fade-up animation-delay-100 inline-flex items-center gap-2 w-fit text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-forest bg-sage-pale px-3.5 py-1.5 rounded-pill mb-7">
          Fonoaudióloga · CRFa 2-23700
        </span>

        <h1 className="animate-fade-up animation-delay-200 font-serif text-[clamp(3rem,5vw,5.5rem)] font-light leading-[1.05] text-ink mb-2">
          Nathália
          <br />
          <em className="not-italic text-forest">Machado</em>
        </h1>

        <GoldRule className="animate-fade-up animation-delay-300" />

        <p className="animate-fade-up animation-delay-400 text-[1rem] font-light leading-[1.85] text-ink-muted max-w-[440px] mb-2.5">
          Atendimento humanizado em Linguagem Adulto e Infantil, Motricidade Orofacial e Disfagia,
          guiado pelo cuidado, escuta e respeito às necessidades de cada pessoa.
        </p>

        <span className="animate-fade-up animation-delay-450 text-[0.74rem] tracking-wide text-ink-muted mb-9">
          São Miguel Arcanjo — SP
        </span>

        <div className="animate-fade-up animation-delay-550 flex flex-wrap gap-3">
          <Button
            as="link"
            variant="primary"
            href={WHATSAPP_AGENDAMENTO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar pelo WhatsApp"
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
          >
            <InstagramIcon />
            {INSTAGRAM_HANDLE}
          </Button>
        </div>
      </div>

      {/* Right — photo */}
      <div
        className="relative overflow-hidden bg-forest md:order-2 order-1 min-h-[320px] md:min-h-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-forest via-[#4a8a6e] to-sage opacity-90" />
        <Image
          src="/images/nathalia.png"
          alt="Nathália Machado Fonoaudióloga"
          fill
          className="object-contain object-bottom"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}
