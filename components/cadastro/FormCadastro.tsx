"use client";

import { useEffect, useState } from "react";
import {
  useCadastroForm,
  COMO_CONHECEU_OPCOES,
  COMO_CONHECEU_OUTRO,
} from "@/hooks/useCadastroForm";
import CadastroTermosExpandable from "@/components/cadastro/CadastroTermosExpandable";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full border border-cream-alt rounded-lg px-3.5 py-2.5 font-sans text-[0.88rem] font-light text-ink bg-cream outline-none transition-all duration-200 focus:border-honey focus:shadow-[0_0_0_3px_rgba(201,169,110,0.12)] focus:bg-white";

const fieldError = "border-red-500";

interface FieldProps {
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, required, optional, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-ink-muted">
        {label}
        {required && <span className="text-honey ml-0.5">*</span>}
        {optional && (
          <span className="text-[0.65rem] text-ink-muted/70 normal-case tracking-normal font-light ml-1">
            (opcional)
          </span>
        )}
      </label>
      {children}
      {error && <p className="text-[0.72rem] text-red-500">{error}</p>}
    </div>
  );
}

function SectionCard({
  title,
  subtitle,
  icon,
  children,
}: {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow-card px-9 py-8 mb-5">
      <div className="flex items-center gap-2.5 font-serif text-xl font-medium text-forest tracking-wide uppercase mb-1.5">
        <span className="text-honey">{icon}</span>
        {title}
      </div>
      {subtitle && (
        <p className="text-[0.8rem] text-ink-muted font-light leading-[1.5] mb-6">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}

const UserIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
);

const DocIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
  </svg>
);


const SendIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function FormCadastro({ onSubmitted }: { onSubmitted?: () => void }) {
  const {
    data,
    errors,
    submitting,
    submitted,
    termosLidos,
    setField,
    handleMaskedInput,
    handleCepChange,
    marcarTermosLidos,
    handleSubmit,
  } = useCadastroForm();

  const [termosAbertos, setTermosAbertos] = useState(false);
  const [avisoTermos, setAvisoTermos] = useState(false);

  const alternarTermos = () => {
    setTermosAbertos((v) => !v);
    marcarTermosLidos();
  };

  const abrirTermosPeloAviso = () => {
    setAvisoTermos(false);
    setTermosAbertos(true);
    marcarTermosLidos();
    document
      .getElementById("cad-termos-quadro")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Fecha o aviso com Esc
  useEffect(() => {
    if (!avisoTermos) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAvisoTermos(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [avisoTermos]);

  useEffect(() => {
    if (submitted) onSubmitted?.();
  }, [submitted]); // eslint-disable-line react-hooks/exhaustive-deps

  if (submitted) {
    return (
      <div className="bg-forest rounded-xl px-10 py-12 text-center mb-5">
        <div className="flex justify-center mb-5">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="18" cy="18" r="16" stroke="rgba(201,169,110,0.6)" strokeWidth="1.5" />
              <polyline
                points="11,18 16,23 25,13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <h2 className="font-serif text-[1.8rem] font-normal text-white mb-3">
          Cadastro enviado com sucesso!
        </h2>
        <p className="text-[0.88rem] text-white/75 leading-[1.7]">
          Obrigada! Seus dados foram recebidos.
          <br />
          Em breve entraremos em contato pelo WhatsApp para confirmar os
          detalhes do atendimento.
        </p>
      </div>
    );
  }

  return (
    <form id="cadastroForm" onSubmit={handleSubmit} noValidate>
      {/* 1. Responsável financeiro */}
      <SectionCard
        title="Responsável Financeiro"
        subtitle="Dados de quem realizará o pagamento e constará na nota fiscal."
        icon={<UserIcon />}
      >
        <div className="grid gap-4">
          <Field label="Nome completo" required error={errors.nome}>
            <input
              id="cad-nome"
              type="text"
              value={data.nome}
              onChange={(e) => setField("nome", e.target.value)}
              placeholder="Nome do responsável financeiro"
              autoComplete="name"
              className={cn(fieldBase, errors.nome && fieldError)}
            />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="CPF" required error={errors.cpf}>
              <input
                id="cad-cpf"
                type="text"
                value={data.cpf}
                onChange={(e) => handleMaskedInput("cpf", e.target.value)}
                placeholder="000.000.000-00"
                maxLength={14}
                className={cn(fieldBase, errors.cpf && fieldError)}
              />
            </Field>
            <Field
              label="Telefone / WhatsApp"
              required={data.notaWhatsapp === "sim"}
              error={errors.telefone}
            >
              <input
                id="cad-telefone"
                type="tel"
                value={data.telefone}
                onChange={(e) => handleMaskedInput("telefone", e.target.value)}
                placeholder="(00) 00000-0000"
                maxLength={15}
                className={cn(fieldBase, errors.telefone && fieldError)}
              />
            </Field>
          </div>

          <Field label="E-mail">
            <input
              type="email"
              value={data.email}
              onChange={(e) => setField("email", e.target.value)}
              placeholder="seu@email.com"
              className={fieldBase}
            />
          </Field>

          <Field
            label="Deseja receber a nota fiscal pelo WhatsApp?"
            required
            error={errors.notaWhatsapp}
          >
            <div
              id="cad-notaWhatsapp"
              role="radiogroup"
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 scroll-mt-28"
            >
              {(
                [
                  ["sim", "Sim, quero receber no meu WhatsApp"],
                  ["nao", "Não precisa enviar"],
                ] as const
              ).map(([valor, texto]) => {
                const marcada = data.notaWhatsapp === valor;
                return (
                  <label
                    key={valor}
                    className={cn(
                      "flex items-center gap-3 bg-cream border rounded-lg px-4 py-3.5 cursor-pointer transition-all duration-200",
                      marcada
                        ? "border-honey bg-honey/5"
                        : errors.notaWhatsapp
                          ? "border-red-300"
                          : "border-cream-alt hover:border-honey-light",
                    )}
                  >
                    <input
                      type="radio"
                      name="notaWhatsapp"
                      value={valor}
                      checked={marcada}
                      onChange={() => setField("notaWhatsapp", valor)}
                      className="w-4 h-4 accent-honey flex-shrink-0"
                    />
                    <span className="text-[0.86rem] text-ink leading-snug">
                      {texto}
                    </span>
                  </label>
                );
              })}
            </div>
          </Field>
        </div>

        <div className="h-px bg-cream-alt my-5" />

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 mb-4">
          <Field label="CEP" required error={errors.cep}>
            <input
              id="cad-cep"
              type="text"
              value={data.cep}
              onChange={(e) => handleCepChange(e.target.value)}
              placeholder="00000-000"
              maxLength={9}
              className={cn(fieldBase, errors.cep && fieldError)}
            />
          </Field>
          <Field label="Rua / Logradouro" required error={errors.rua}>
            <input
              id="cad-rua"
              type="text"
              value={data.rua}
              onChange={(e) => setField("rua", e.target.value)}
              placeholder="Preenchido pelo CEP"
              className={cn(fieldBase, errors.rua && fieldError)}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field label="Número" required error={errors.numero}>
            <input
              id="cad-numero"
              type="text"
              value={data.numero}
              onChange={(e) => setField("numero", e.target.value)}
              placeholder="Nº"
              className={cn(fieldBase, errors.numero && fieldError)}
            />
          </Field>
          <Field label="Bairro" required error={errors.bairro}>
            <input
              id="cad-bairro"
              type="text"
              value={data.bairro}
              onChange={(e) => setField("bairro", e.target.value)}
              placeholder="Preenchido pelo CEP"
              className={cn(fieldBase, errors.bairro && fieldError)}
            />
          </Field>
          <Field label="Cidade / UF" required error={errors.cidade}>
            <input
              id="cad-cidade"
              type="text"
              value={data.cidade}
              onChange={(e) => setField("cidade", e.target.value)}
              placeholder="Preenchido pelo CEP"
              className={cn(fieldBase, errors.cidade && fieldError)}
            />
          </Field>
          <div className="sm:col-span-3">
            <Field label="Complemento" optional>
              <input
                type="text"
                value={data.complemento}
                onChange={(e) => setField("complemento", e.target.value)}
                placeholder="Apto, bloco, referência..."
                className={fieldBase}
              />
            </Field>
          </div>
        </div>
      </SectionCard>

      {/* 2. Beneficiário */}
      <SectionCard
        title="Paciente do Atendimento"
        subtitle="Quem irá receber o atendimento fonoaudiológico."
        icon={<UsersIcon />}
      >
        <div className="grid gap-4">
          <Field label="Nome completo do paciente" required error={errors.benNome}>
            <input
              id="cad-benNome"
              type="text"
              value={data.benNome}
              onChange={(e) => setField("benNome", e.target.value)}
              placeholder="Nome de quem receberá o atendimento"
              className={cn(fieldBase, errors.benNome && fieldError)}
            />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="CPF do paciente" required error={errors.benCpf}>
              <input
                id="cad-benCpf"
                type="text"
                value={data.benCpf}
                onChange={(e) => handleMaskedInput("benCpf", e.target.value)}
                placeholder="000.000.000-00"
                maxLength={14}
                className={cn(fieldBase, errors.benCpf && fieldError)}
              />
            </Field>
            <Field label="Data de nascimento do paciente" required error={errors.benNasc}>
              <input
                id="cad-benNasc"
                type="date"
                value={data.benNasc}
                onChange={(e) => setField("benNasc", e.target.value)}
                className={cn(fieldBase, errors.benNasc && fieldError)}
              />
            </Field>
          </div>
        </div>
      </SectionCard>

      {/* 3. Como conheceu */}
      <SectionCard
        title="Como conheceu a Fono Nathália Machado"
        subtitle="Escolha uma opção."
        icon={<HeartIcon />}
      >
        <div
          id="cad-comoConheceu"
          role="radiogroup"
          className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 scroll-mt-28"
        >
          {COMO_CONHECEU_OPCOES.map((opcao) => {
            const marcada = data.comoConheceu === opcao;
            return (
              <label
                key={opcao}
                className={cn(
                  "flex items-center gap-3 bg-cream border rounded-lg px-4 py-3.5 cursor-pointer transition-all duration-200",
                  marcada
                    ? "border-honey bg-honey/5"
                    : errors.comoConheceu
                      ? "border-red-300"
                      : "border-cream-alt hover:border-honey-light",
                )}
              >
                <input
                  type="radio"
                  name="comoConheceu"
                  value={opcao}
                  checked={marcada}
                  onChange={() => setField("comoConheceu", opcao)}
                  className="w-4 h-4 accent-honey flex-shrink-0"
                />
                <span className="text-[0.86rem] text-ink leading-snug">
                  {opcao}
                </span>
              </label>
            );
          })}
        </div>
        {errors.comoConheceu && (
          <p className="text-[0.72rem] text-red-500 mt-2">{errors.comoConheceu}</p>
        )}

        {data.comoConheceu === COMO_CONHECEU_OUTRO && (
          <div className="mt-4">
            <Field
              label="Conte para nós onde nos conheceu"
              required
              error={errors.comoConheceuOutro}
            >
              <input
                id="cad-comoConheceuOutro"
                type="text"
                value={data.comoConheceuOutro}
                onChange={(e) => setField("comoConheceuOutro", e.target.value)}
                placeholder="Ex.: Facebook, panfleto, evento…"
                maxLength={120}
                autoFocus
                className={cn(fieldBase, errors.comoConheceuOutro && fieldError)}
              />
            </Field>
          </div>
        )}
      </SectionCard>

      {/* 4. Termos */}
      <SectionCard title="Aceite dos Termos" icon={<DocIcon />}>
        <CadastroTermosExpandable open={termosAbertos} onToggle={alternarTermos} />

        <label
          id="cad-termos"
          onClick={(e) => {
            // Clique no link "página dedicada" não conta como tentativa de aceite
            if ((e.target as HTMLElement).closest("a")) return;
            if (!termosLidos) {
              e.preventDefault();
              setAvisoTermos(true);
            }
          }}
          className={cn(
            "flex items-start gap-3.5 p-5 rounded-lg cursor-pointer transition-all duration-200 border scroll-mt-28",
            errors.termos
              ? "border-red-400 bg-red-50"
              : "border-honey-light bg-honey/5",
          )}
        >
          <input
            type="checkbox"
            checked={data.termosAceitos}
            onChange={(e) => setField("termosAceitos", e.target.checked)}
            aria-disabled={!termosLidos}
            className={cn(
              "mt-0.5 w-5 h-5 accent-honey flex-shrink-0",
              !termosLidos && "opacity-50",
            )}
          />
          <p className="text-[0.85rem] font-light text-ink-soft leading-[1.6]">
            Declaro que li e estou de acordo com os{" "}
            <strong className="font-medium text-ink-soft">
              Termos de Atendimento
            </strong>{" "}
            (disponíveis no quadro acima ou na{" "}
            <a
              href="/termo"
              target="_blank"
              rel="noopener noreferrer"
              onClick={marcarTermosLidos}
              onAuxClick={marcarTermosLidos}
              className="text-forest underline underline-offset-2 hover:text-forest-light"
            >
              página dedicada
            </a>
            ) da Nathália Machado Fonoaudióloga, e que as informações
            fornecidas neste cadastro são verdadeiras.
          </p>
        </label>
        {!termosLidos && (
          <p className="text-[0.75rem] text-ink-muted font-light mt-2">
            Para marcar o aceite, abra antes os termos no quadro acima ou na
            página dedicada.
          </p>
        )}
        {errors.termos && (
          <p className="text-[0.72rem] text-red-500 mt-2">{errors.termos}</p>
        )}
      </SectionCard>

      {avisoTermos && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 px-5"
          onClick={() => setAvisoTermos(false)}
        >
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="aviso-termos-titulo"
            className="w-full max-w-sm rounded-xl bg-white px-7 py-7 text-center shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex justify-center text-honey">
              <DocIcon />
            </div>
            <h2
              id="aviso-termos-titulo"
              className="font-serif text-[1.35rem] font-medium text-forest mb-2"
            >
              Leia os termos antes de aceitar
            </h2>
            <p className="text-[0.88rem] font-light text-ink-soft leading-[1.6] mb-6">
              Você precisa ler os Termos de Atendimento para poder aceitá-los.
            </p>
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={abrirTermosPeloAviso}
                autoFocus
                className="w-full rounded-lg bg-[#8FAA8A] py-3 text-[0.82rem] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#7a9675]"
              >
                Abrir os termos
              </button>
              <button
                type="button"
                onClick={() => setAvisoTermos(false)}
                className="w-full rounded-lg border border-cream-alt py-3 text-[0.82rem] font-medium uppercase tracking-[0.12em] text-ink-muted transition-colors hover:border-honey hover:text-honey"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2.5 bg-[#8FAA8A] text-white rounded-lg py-4 text-[0.88rem] font-medium tracking-[0.12em] uppercase transition-all duration-300 hover:bg-[#7a9675] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(143,170,138,0.35)] disabled:bg-sage-light disabled:cursor-not-allowed disabled:transform-none mt-2"
      >
        <SendIcon />
        {submitting ? "Enviando..." : "Enviar Cadastro"}
      </button>
    </form>
  );
}
