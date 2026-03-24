import { AnimatedDivider } from "@/components/motion";
import HeroSection from "@/components/sections/HeroSection";
import SobreSection from "@/components/sections/SobreSection";
import AreasSection from "@/components/sections/AreasSection";
import FaltasSection from "@/components/sections/FaltasSection";
import LocalizacaoSection from "@/components/sections/LocalizacaoSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnimatedDivider />
      <SobreSection />
      <AnimatedDivider />
      <AreasSection />
      <AnimatedDivider />
      <FaltasSection />
      <AnimatedDivider />
      <LocalizacaoSection />
    </>
  );
}
