import Link from "next/link";
import SiteContainer from "@/components/layout/SiteContainer";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-72px)] items-center justify-center pt-[72px]">
      <SiteContainer className="max-w-lg text-center">
        <p className="font-serif text-[7rem] font-light leading-none text-forest/15 sm:text-[9rem]">
          404
        </p>

        <h1 className="mt-2 font-serif text-[clamp(1.6rem,4vw,2.4rem)] font-light text-forest">
          Ops, parece que você se perdeu!
        </h1>

        <p className="mx-auto mt-3 max-w-sm text-[0.9rem] font-light leading-[1.7] text-ink-muted">
          A página que você procura não existe ou foi movida.
          <br />
          Que tal voltar para o início?
        </p>

        <div className="mx-auto mt-5 h-px w-10 bg-honey" />

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-pill bg-forest px-7 py-3 text-[0.84rem] font-medium tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest-light hover:shadow-md"
        >
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
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
          </svg>
          Voltar ao início
        </Link>
      </SiteContainer>
    </div>
  );
}
