import SectionLabel from '@/components/ui/SectionLabel'
import GoldRule from '@/components/ui/GoldRule'
import Button from '@/components/ui/Button'
import type { ContatoItem } from '@/types'
import {
  WHATSAPP_AGENDAMENTO_URL,
  WHATSAPP_URL,
  MAPS_URL,
  MAPS_EMBED_SRC,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  EMAIL,
  PHONE_DISPLAY,
} from '@/lib/constants'

const CONTATOS: ContatoItem[] = [
  {
    icon: '📍',
    label: 'R. Miguel Terra, 385 — Centro\nSão Miguel Arcanjo — SP',
    href: MAPS_URL,
    isExternal: true,
  },
  {
    icon: '📱',
    label: PHONE_DISPLAY,
    href: WHATSAPP_URL,
    isExternal: true,
  },
  {
    icon: '📸',
    label: INSTAGRAM_HANDLE,
    href: INSTAGRAM_URL,
    isExternal: true,
  },
  {
    icon: '✉️',
    label: EMAIL,
    href: `mailto:${EMAIL}`,
  },
]

export default function LocalizacaoSection() {
  return (
    <section id="localizacao" aria-labelledby="localizacao-titulo" className="bg-forest p-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Info */}
        <div className="px-[8%] py-20 flex flex-col justify-center">
          <SectionLabel light>Onde estou</SectionLabel>
          <h2
            id="localizacao-titulo"
            className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.15] text-white"
          >
            Localização &amp;{' '}
            <span className="text-sage-light italic">Contato</span>
          </h2>
          <GoldRule className="bg-sage opacity-45" />

          <address className="not-italic mb-9 space-y-0">
            {CONTATOS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 mb-4 text-[0.94rem] text-white/80 font-light transition-colors hover:text-white group"
              >
                <span className="w-[42px] h-[42px] flex-shrink-0 border border-white/16 rounded-full flex items-center justify-center text-lg bg-white/7 transition-colors group-hover:bg-white/15">
                  {item.icon}
                </span>
                <span className="whitespace-pre-line">{item.label}</span>
              </a>
            ))}
          </address>

          <Button
            as="link"
            variant="primary"
            href={WHATSAPP_AGENDAMENTO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.564 4.143 1.549 5.875L.057 23.716a.5.5 0 0 0 .618.618l5.857-1.538A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.955 9.955 0 0 1-5.192-1.456l-.368-.22-3.848 1.012.98-3.784-.237-.384A9.956 9.956 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
            </svg>
            Agendar Consulta
          </Button>
        </div>

        {/* Map */}
        <div className="relative min-h-[300px] lg:min-h-[450px]">
          <iframe
            title="Localização Nathália Machado Fonoaudióloga"
            src={MAPS_EMBED_SRC}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full border-0 [filter:saturate(0.75)_contrast(1.05)]"
          />
        </div>
      </div>
    </section>
  )
}
