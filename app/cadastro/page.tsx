import type { Metadata } from "next";
import CadastroPageClient from "@/components/cadastro/CadastroPageClient";

export const metadata: Metadata = {
  title: "Cadastro de Paciente — Nathália Machado Fonoaudióloga",
  robots: { index: false, follow: false },
};

export default function CadastroPage() {
  return <CadastroPageClient />;
}
