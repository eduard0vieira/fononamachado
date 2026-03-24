import Link from "next/link";
import { INSTAGRAM_URL } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-ink flex items-center justify-between gap-6 flex-wrap px-[8%] py-9">
      <Logo
        height={36}
        linked={false}
        imgClassName="opacity-85"
        loading="lazy"
      />

      <p className="text-[0.74rem] text-white/30 font-light tracking-wide text-center">
        © 2026 Nathália Machado · Fonoaudióloga · CRFa 2-23700
        <br />
        São Miguel Arcanjo — SP
      </p>

      <div className="flex gap-5">
        <Link
          href="/termo"
          className="text-[0.74rem] text-white/40 tracking-wide hover:text-white/75 transition-colors"
        >
          Termos de Atendimento
        </Link>
        <Link
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.74rem] text-white/40 tracking-wide hover:text-white/75 transition-colors"
        >
          Instagram
        </Link>
      </div>
    </footer>
  );
}
