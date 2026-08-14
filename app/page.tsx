import { AnimatedDivider } from "@/components/motion";
import HeroSection from "@/components/sections/HeroSection";
import SobreSection from "@/components/sections/SobreSection";
import AreasSection from "@/components/sections/AreasSection";
import ExperienciaSection from "@/components/sections/ExperienciaSection";
import DuvidasSection from "@/components/sections/DuvidasSection";
import AvaliacoesSection from "@/components/sections/AvaliacoesSection";
import FaltasSection from "@/components/sections/FaltasSection";
import LocalizacaoSection from "@/components/sections/LocalizacaoSection";
import JsonLd from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      {/* Dados estruturados: fica só na home, onde o FAQ visível existe */}
      <JsonLd />
      <HeroSection />
      <AnimatedDivider />
      <SobreSection />
      <AnimatedDivider />
      <AreasSection />
      <AnimatedDivider />
      <ExperienciaSection />
      <AvaliacoesSection />
      <AnimatedDivider />
      <DuvidasSection />
      <AnimatedDivider />
      {/* <FaltasSection /> */}
      <AnimatedDivider />
      <LocalizacaoSection />
    </>
  );
}
