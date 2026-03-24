import type { Metadata } from "next";
import Link from "next/link";
import ValoresCard from "@/components/cadastro/ValoresCard";
import FormCadastro from "@/components/cadastro/FormCadastro";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Cadastro de Paciente — Nathália Machado Fonoaudióloga",
  robots: { index: false, follow: false },
};

const ChevronLeft = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export default function CadastroPage() {
  return (
    <>
      {/* Sub-nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[72px] bg-cream/92 backdrop-blur-xl border-b border-forest/10">
        <Logo height={72} priority alt="Logo" className="flex-shrink-0" />
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[0.78rem] font-medium tracking-[0.12em] uppercase text-ink-muted hover:text-forest transition-colors"
        >
          <ChevronLeft />
          Voltar ao site
        </Link>
      </nav>

      {/* Hero */}
      <div className="bg-forest pt-[110px] pb-12 text-center px-[8%]">
        <p className="text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-honey-light mb-3">
          Fono na Machado
        </p>
        <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-white tracking-wide">
          Ficha de <em className="not-italictext-honey-light">Cadastro</em>
        </h1>
        <p className="text-[0.9rem] text-white/65 font-light mt-3 leading-[1.7] max-w-lg mx-auto">
          Preencha os dados abaixo para formalizar seu atendimento.
          <br />
          As informações serão utilizadas para emissão de nota fiscal e
          organização dos atendimentos.
        </p>
        <div className="w-12 h-px bg-honey mx-auto mt-5" />
      </div>

      {/* Valores */}
      <ValoresCard />

      {/* Form */}
      <div className="max-w-3xl mx-auto px-5 pb-16">
        <FormCadastro />
      </div>
    </>
  );
}
