import HeroSection from '@/components/sections/HeroSection'
import SobreSection from '@/components/sections/SobreSection'
import AreasSection from '@/components/sections/AreasSection'
import PlanosSection from '@/components/sections/PlanosSection'
import FaltasSection from '@/components/sections/FaltasSection'
import LocalizacaoSection from '@/components/sections/LocalizacaoSection'

const Divider = () => <div className="h-px bg-forest/10" aria-hidden="true" />

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Divider />
      <SobreSection />
      <Divider />
      <AreasSection />
      <Divider />
      <PlanosSection />
      <Divider />
      <FaltasSection />
      <Divider />
      <LocalizacaoSection />
    </>
  )
}
